// 3D objects (Three.js r186). Each card: libs + (root, lib) => {...} returning a cleanup.
(() => {
  ML.add({
    id: 'three-objects-glass-knot',
    cat: 'three-objects',
    title: 'Iridescent knot',
    sub: 'A glossy form floats, turns to the pointer',
    libs: ['three'],
    html: `<div class="bg"></div><div class="gl"></div><div class="copy"><p class="k">New in 3D</p><h3>Built in depth.</h3></div>`,
    css: `
.d{background:#fff}
.d .bg{position:absolute;inset:0;background:radial-gradient(70% 60% at 62% 38%,#e3efff 0%,#f6f9ff 55%,#fff 100%)}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--ml-accent)}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em;color:var(--ml-ink)}
`,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;

      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
      camera.position.set(0, 0.15, 6.2);

      const geo = new THREE.TorusKnotGeometry(0.72, 0.26, 240, 36);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x2f6bff,
        metalness: 0.15,
        roughness: 0.14,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        iridescence: 0.7,
        iridescenceIOR: 1.35,
        sheen: 0.5,
        sheenColor: 0xdbe9ff,
      });
      const knot = new THREE.Mesh(geo, mat);
      knot.position.x = 1.25;
      scene.add(knot);

      // soft contact shadow: a radial gradient on a flat plane
      const c = document.createElement('canvas');
      c.width = c.height = 128;
      const g = c.getContext('2d');
      const grad = g.createRadialGradient(64, 64, 0, 64, 64, 64);
      grad.addColorStop(0, 'rgba(10,60,140,.32)');
      grad.addColorStop(1, 'rgba(10,60,140,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 128, 128);
      const shadowTex = new THREE.CanvasTexture(c);
      const shadowGeo = new THREE.PlaneGeometry(3, 0.9);
      const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false });
      const shadow = new THREE.Mesh(shadowGeo, shadowMat);
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(1.25, -1.55, 0);
      scene.add(shadow);

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

      // pointer steers the turn; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        knot.rotation.y = s * 0.35 + px * 1.4;
        knot.rotation.x = 0.3 + py * 1;
        knot.position.y = Math.sin(s * 1.2) * 0.12;
        shadow.scale.setScalar(1 - knot.position.y * 0.3);
        shadowMat.opacity = 0.9 - knot.position.y;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        shadowGeo.dispose();
        shadowMat.dispose();
        shadowTex.dispose();
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D hero object with Three.js: a glossy, iridescent torus knot that floats beside the headline and turns toward the pointer. Load three from a pinned CDN with an import map (three and three/addons/). Use a WebGLRenderer with antialias and alpha: true so the page background shows through, setPixelRatio(Math.min(devicePixelRatio, 2)), and ACESFilmicToneMapping. Light it with an environment map instead of lamps: new PMREMGenerator(renderer).fromScene(new RoomEnvironment(), 0.04) assigned to scene.environment. Material: MeshPhysicalMaterial with your accent color, metalness 0.15, roughness 0.14, clearcoat 1, clearcoatRoughness 0.06, iridescence 0.7, sheen 0.5. Add a soft contact shadow under it: a plane with a radial-gradient CanvasTexture, transparent, depthWrite false. Animate in requestAnimationFrame: a slow spin plus a gentle float (sin of time), and ease rotation toward the pointer position with a lerp factor around 0.06; when the pointer has been still for 2.5s, drift on a slow autoplay path. Size the canvas with a ResizeObserver on its container. Pause the loop when the section is offscreen (IntersectionObserver) and dispose geometry, materials, textures, the PMREM target and the renderer when the component unmounts. Respect prefers-reduced-motion by freezing the float and spin.`,
  });

  // Shared markup for the cards below (build-time strings only, never used inside run()).
  const HTML = '<div class="bg"></div><div class="gl"></div>';
  const CSS = `
.d{background:#fff}
.d .bg{position:absolute;inset:0;background:radial-gradient(70% 60% at 62% 38%,#e3efff 0%,#f6f9ff 55%,#fff 100%)}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
`;

  ML.add({
    id: 'three-objects-glass-blob',
    cat: 'three-objects',
    title: 'Liquid glass blob',
    sub: 'A noisy surface breathes, refracting light',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const { SimplexNoise, BufferGeometryUtils } = lib;
      backdrop();
      const camera = persp(32, 0, 0.1, 7);

      // a few blue and white shapes behind the glass so it has something to refract
      const bm = (c) => new THREE.MeshBasicMaterial({ color: c });
      [
        [-1.7, 0.95, -2, 0.62, 0x0a6cff],
        [1.75, -0.8, -2.2, 0.85, 0x4fa3ff],
        [0.1, -1.45, -1.8, 0.45, 0x0a6cff],
        [-1.45, -0.85, -2.4, 0.55, 0xffffff],
        [1.4, 1.1, -2.6, 0.4, 0xbcd6ff],
      ].forEach((o) => {
        const m = new THREE.Mesh(new THREE.SphereGeometry(o[3], 32, 20), bm(o[4]));
        m.position.set(o[0], o[1], o[2]);
        scene.add(m);
      });

      const ico = new THREE.IcosahedronGeometry(1, 20);
      ico.deleteAttribute('normal');
      ico.deleteAttribute('uv');
      const geo = BufferGeometryUtils.mergeVertices(ico, 1e-4);
      ico.dispose();
      const pos = geo.attributes.position;
      const base = Float32Array.from(pos.array);
      const noise = new SimplexNoise();
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        transmission: 1,
        thickness: 1.6,
        ior: 1.36,
        roughness: 0.04,
        attenuationColor: new THREE.Color(0x5aa8ff),
        attenuationDistance: 1.4,
        clearcoat: 1,
        clearcoatRoughness: 0.04,
        envMapIntensity: 1.3,
      });
      const blob = new THREE.Mesh(geo, mat);
      blob.scale.setScalar(1.1);
      scene.add(blob);

      const update = (s, px, py) => {
        for (let i = 0; i < pos.count; i++) {
          const x = base[i * 3];
          const y = base[i * 3 + 1];
          const z = base[i * 3 + 2];
          const r = 1 + 0.24 * noise.noise3d(x * 0.85 + s * 0.35, y * 0.85 - s * 0.22, z * 0.85 + s * 0.28);
          pos.setXYZ(i, x * r, y * r, z * r);
        }
        pos.needsUpdate = true;
        geo.computeVertexNormals();
        blob.rotation.y = s * 0.12 + px * 0.8;
        blob.rotation.x = py * 0.6;
        blob.position.y = Math.sin(s * 0.9) * 0.08;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a liquid glass blob hero object with Three.js. Make an IcosahedronGeometry(1, 20), delete its normal and uv attributes and run BufferGeometryUtils.mergeVertices so neighbouring triangles share vertices, then keep a copy of the base positions. Each frame displace every vertex along its direction by 1 + 0.24 * simplex.noise3d(x*0.85 + t*0.35, y*0.85 - t*0.22, z*0.85 + t*0.28) using SimplexNoise from three/addons/math/SimplexNoise.js, mark position needsUpdate and call computeVertexNormals(). Material: MeshPhysicalMaterial with transmission 1, thickness 1.6, ior 1.36, roughness 0.04, clearcoat 1, attenuationColor in your accent blue and attenuationDistance 1.4. Glass only looks like glass when something sits behind it, so place a few accent and white spheres, or your page backdrop as a plane, behind the blob and light the scene with RoomEnvironment through PMREMGenerator. Float the blob with a slow sine bob and ease its rotation toward the pointer. Use ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), size with a ResizeObserver, pause offscreen, freeze the noise time when prefers-reduced-motion is set, and dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-phone',
    cat: 'three-objects',
    title: 'Phone mockup',
    sub: 'A device turns slowly to show its edge',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const { RoundedBoxGeometry } = lib;
      const camera = persp(30, 0, 0.1, 6.2);
      sun(2, 3, 5, 1.6);

      const bodyGeo = new RoundedBoxGeometry(1.04, 2.14, 0.13, 8, 0.17);
      const bodyMat = new THREE.MeshPhysicalMaterial({ color: 0xf1f4f9, metalness: 0.75, roughness: 0.28, clearcoat: 0.6 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);

      const bezel = mkTex(256, 512, (g, w, h) => {
        g.fillStyle = '#0c1424';
        g.beginPath();
        g.roundRect(0, 0, w, h, 36);
        g.fill();
      });
      const bezelMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(0.98, 2.08),
        new THREE.MeshBasicMaterial({ map: bezel, transparent: true, toneMapped: false })
      );
      bezelMesh.position.z = 0.0662;

      const font = '"Geist", system-ui, sans-serif';
      const screen = mkTex(360, 760, (g, w, h) => {
        g.save();
        g.beginPath();
        g.roundRect(0, 0, w, h, 44);
        g.clip();
        g.fillStyle = '#FAF6F2';
        g.fillRect(0, 0, w, h);
        g.fillStyle = '#86868b';
        g.font = '500 22px ' + font;
        g.fillText('Balance', 30, 112);
        g.fillStyle = '#1d1d1f';
        g.font = '600 54px ' + font;
        g.fillText('$12,480', 30, 172);
        const gr = g.createLinearGradient(0, 210, w, 410);
        gr.addColorStop(0, '#FF4433');
        gr.addColorStop(1, '#FF7A3D');
        g.fillStyle = gr;
        g.beginPath();
        g.roundRect(24, 210, w - 48, 200, 28);
        g.fill();
        g.strokeStyle = 'rgba(255,255,255,.95)';
        g.lineWidth = 5;
        g.lineJoin = 'round';
        g.beginPath();
        [[50, 370], [100, 340], [150, 352], [200, 300], [250, 318], [300, 250]].forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
        g.stroke();
        g.fillStyle = 'rgba(255,255,255,.8)';
        g.font = '600 20px ' + font;
        g.fillText('This week', 50, 248);
        for (let i = 0; i < 3; i++) {
          const y = 450 + i * 82;
          g.fillStyle = '#fff';
          g.beginPath();
          g.roundRect(24, y, w - 48, 68, 20);
          g.fill();
          g.fillStyle = '#FFF0EE';
          g.beginPath();
          g.arc(62, y + 34, 18, 0, Math.PI * 2);
          g.fill();
          g.fillStyle = '#E2D6CC';
          g.beginPath();
          g.roundRect(94, y + 20, 100 - i * 14, 10, 5);
          g.fill();
          g.fillStyle = '#EFE7E0';
          g.beginPath();
          g.roundRect(94, y + 40, 64, 9, 4);
          g.fill();
          g.fillStyle = '#FF4433';
          g.beginPath();
          g.roundRect(w - 96, y + 27, 54, 14, 7);
          g.fill();
        }
        g.fillStyle = '#0c1424';
        g.beginPath();
        g.roundRect(w / 2 - 50, 22, 100, 30, 15);
        g.fill();
        g.restore();
      });
      document.fonts.ready.then(() => {
        if (!dead) screen.redraw();
      });
      const screenMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(0.94, 1.98),
        new THREE.MeshBasicMaterial({ map: screen, transparent: true, toneMapped: false })
      );
      screenMesh.position.z = 0.0675;

      const phone = new THREE.Group();
      phone.add(body, bezelMesh, screenMesh);
      scene.add(phone);
      const shadow = shadowAt(2.4, 1.2, -1.45, 0.28);

      const update = (s, px, py) => {
        phone.rotation.y = Math.sin(s * 0.42) * 1.25 + px * 0.5;
        phone.rotation.x = -0.08 + py * 0.4;
        phone.rotation.z = 0.04;
        phone.position.y = Math.sin(s * 1.1) * 0.06;
        shadow.scale.setScalar(1 - phone.position.y * 0.4);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D phone mockup hero with Three.js. Body: RoundedBoxGeometry(1.04, 2.14, 0.13, 8, 0.17) from three/addons/geometries/RoundedBoxGeometry.js in a MeshPhysicalMaterial (light silver, metalness 0.75, roughness 0.28, clearcoat 0.6). Screen: draw your real app UI onto a 2D canvas (balance header, a rounded gradient card with a line chart, three list rows, a small dynamic-island pill), wait for document.fonts.ready before drawing text, clip the canvas to a rounded rectangle, and use it as a CanvasTexture (colorSpace SRGBColorSpace) on a slightly smaller PlaneGeometry with a MeshBasicMaterial (transparent, toneMapped false) placed a hair in front of the body, with a dark bezel plane just behind it. Light with RoomEnvironment through PMREMGenerator plus one directional light. Animate rotation.y = sin(t*0.42)*1.25 so the phone slowly turns until its edge faces the camera, add a small float bob, a soft radial-gradient contact shadow plane under it, and ease rotation toward the pointer. Use ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), a ResizeObserver, pause when offscreen, honour prefers-reduced-motion, and dispose geometries, materials, textures and the renderer on unmount.`,
  });

  ML.add({
    id: 'three-objects-island',
    cat: 'three-objects',
    title: 'Floating island',
    sub: 'Low-poly rock and trees bob gently',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(32, 0, 1.7, 6.9);
      camera.lookAt(0, -0.2, 0);
      scene.environmentIntensity = 0.55;
      sun(3, 5, 4, 2.6);
      scene.add(new THREE.HemisphereLight(0xeaf2ff, 0x9fb8e0, 1.3));

      // deterministic jitter keyed on the rounded position, so seam vertices move together
      const jitter = (geo, a, ay) => {
        const p = geo.attributes.position;
        const f = (k) => {
          const v = Math.sin(k) * 43758.5453;
          return v - Math.floor(v) - 0.5;
        };
        for (let i = 0; i < p.count; i++) {
          const x = Math.round(p.getX(i) * 1000);
          const y = Math.round(p.getY(i) * 1000);
          const z = Math.round(p.getZ(i) * 1000);
          const k = x * 12.9898 + y * 78.233 + z * 37.719;
          p.setXYZ(i, p.getX(i) + f(k) * a, p.getY(i) + f(k + 1.7) * ay, p.getZ(i) + f(k + 3.1) * a);
        }
        geo.computeVertexNormals();
      };
      const flat = (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.78, metalness: 0, flatShading: true });

      const isle = new THREE.Group();
      const topGeo = new THREE.CylinderGeometry(1.4, 1.28, 0.3, 9, 1);
      jitter(topGeo, 0.14, 0.03);
      const top = new THREE.Mesh(topGeo, flat(0xd9e7ff));
      const rockGeo = new THREE.ConeGeometry(1.28, 1.8, 8, 2);
      jitter(rockGeo, 0.2, 0.16);
      const rock = new THREE.Mesh(rockGeo, flat(0xaabfe2));
      rock.rotation.x = Math.PI;
      rock.position.y = -1.05;
      isle.add(top, rock);

      const trunkMat = flat(0xffffff);
      const treeMats = [flat(0x2f6bff), flat(0x4fa3ff), flat(0x0a6cff)];
      [
        [-0.6, 0.2, 0.1, 1.0],
        [0.5, -0.3, 0.1, 0.8],
        [0.75, 0.4, 0.1, 0.62],
        [-0.15, -0.65, 0.1, 0.7],
      ].forEach((t, i) => {
        const g = new THREE.Group();
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.28, 6), trunkMat);
        trunk.position.y = 0.14;
        const c1 = new THREE.Mesh(new THREE.ConeGeometry(0.34, 0.55, 6), treeMats[i % 3]);
        c1.position.y = 0.5;
        const c2 = new THREE.Mesh(new THREE.ConeGeometry(0.26, 0.45, 6), treeMats[i % 3]);
        c2.position.y = 0.85;
        g.add(trunk, c1, c2);
        g.position.set(t[0], 0.15, t[1]);
        g.scale.setScalar(t[3]);
        g.rotation.y = i * 1.3;
        isle.add(g);
      });
      const stone = new THREE.Mesh(new THREE.OctahedronGeometry(0.16, 0), flat(0xdbe6f8));
      stone.position.set(-0.85, 0.28, -0.35);
      isle.add(stone);
      scene.add(isle);
      const shadow = shadowAt(3.4, 3.4, -2.05, 0.3);

      const update = (s, px, py) => {
        isle.position.y = Math.sin(s * 1.1) * 0.12;
        isle.rotation.y = s * 0.22 + px * 0.9;
        isle.rotation.x = py * 0.3;
        isle.rotation.z = Math.sin(s * 0.8) * 0.03;
        shadow.scale.setScalar(1 - isle.position.y * 0.5);
        shadow.material.opacity = 0.9 - isle.position.y * 0.8;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a low-poly floating island scene with Three.js. Top: CylinderGeometry(1.4, 1.28, 0.3, 9) in pale blue-white; underside: an upside-down ConeGeometry(1.28, 1.8, 8, 2) in a soft grey-blue. Roughen both with a deterministic vertex jitter (hash the rounded x,y,z so seam vertices move together) and recompute normals, then use MeshStandardMaterial with flatShading true so every facet catches light. Add four small trees (a thin trunk plus two stacked ConeGeometry with 6 radial segments in your accent blues) and a tiny octahedron stone. Light with one DirectionalLight, a HemisphereLight and a dimmed RoomEnvironment (scene.environmentIntensity 0.55). No shadow maps: put a radial-gradient CanvasTexture plane far below as a soft shadow and scale it with the bob. Animate the whole group with a sine bob (about 0.12 units, 1.1 rad/s), a slow Y spin and a tiny roll, easing toward the pointer. Use ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), a ResizeObserver, pause when offscreen, respect prefers-reduced-motion and dispose all geometry, materials and the renderer on unmount.`,
  });

  ML.add({
    id: 'three-objects-extruded-mark',
    cat: 'three-objects',
    title: 'Extruded logo mark',
    sub: 'A beveled shape turns in the light',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(32, 0, 0.1, 7);

      // generic four-lobed mark with a round hole, drawn as a 2D Shape
      const shape = new THREE.Shape();
      const N = 120;
      for (let i = 0; i <= N; i++) {
        const a = (i / N) * Math.PI * 2;
        const r = 0.86 + 0.3 * Math.cos(4 * a + Math.PI);
        const x = Math.cos(a) * r;
        const y = Math.sin(a) * r;
        if (i === 0) shape.moveTo(x, y);
        else shape.lineTo(x, y);
      }
      const hole = new THREE.Path();
      hole.absarc(0, 0, 0.22, 0, Math.PI * 2, true);
      shape.holes.push(hole);
      const geo = new THREE.ExtrudeGeometry(shape, {
        depth: 0.4,
        bevelEnabled: true,
        bevelThickness: 0.1,
        bevelSize: 0.08,
        bevelSegments: 6,
        curveSegments: 10,
      });
      geo.center();
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x2f6bff,
        metalness: 0.3,
        roughness: 0.2,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        sheen: 0.4,
        sheenColor: 0xdbe9ff,
      });
      const mark = new THREE.Mesh(geo, mat);
      mark.scale.setScalar(1.1);
      scene.add(mark);
      const shadow = shadowAt(3, 1, -1.7, 0.28);

      const update = (s, px, py) => {
        mark.rotation.y = s * 0.7 + px * 1.2;
        mark.rotation.x = 0.18 + Math.sin(s * 0.5) * 0.12 + py * 0.7;
        mark.position.y = Math.sin(s * 1.2) * 0.1;
        shadow.scale.setScalar(1 - mark.position.y * 0.3);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an extruded 3D logo mark with Three.js. Draw your mark as a THREE.Shape (moveTo, lineTo, bezierCurveTo; push a THREE.Path into shape.holes for cut-outs) - here a generic four-lobed form from a polar curve r = 0.86 + 0.3*cos(4a) with a round hole. Extrude it with ExtrudeGeometry(shape, { depth: 0.4, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.08, bevelSegments: 6, curveSegments: 10 }) and call geometry.center() so it spins about its middle. Material: MeshPhysicalMaterial in your brand blue, metalness 0.3, roughness 0.2, clearcoat 1, sheen 0.4. Light with RoomEnvironment via PMREMGenerator and ACESFilmicToneMapping; the beveled edges are what catch the highlights, so keep bevelSegments at 5 or more. Spin rotation.y at about 0.7 rad/s, add a slight x wobble and a float bob, ease toward the pointer, and put a radial-gradient contact shadow plane beneath. setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver sizing, pause offscreen, freeze the spin under prefers-reduced-motion, dispose geometry, material and renderer on unmount. Use your own shape, never a trademarked logo.`,
  });

  ML.add({
    id: 'three-objects-planet-rings',
    cat: 'three-objects',
    title: 'Planet with rings',
    sub: 'Two moons orbit a banded planet',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(32, 0, 1.2, 7.8);
      camera.lookAt(0, 0, 0);
      scene.environmentIntensity = 0.5;
      sun(4, 3, 5, 3);

      const lerp = (a, b, t) => Math.round(a + (b - a) * t);
      const bands = mkTex(512, 256, (g, w, h) => {
        for (let y = 0; y < h; y++) {
          const t = y / h;
          const v = 0.5 + 0.5 * Math.sin(t * 30 + Math.sin(t * 9) * 2.2);
          g.fillStyle = 'rgb(' + lerp(205, 47, v) + ',' + lerp(224, 107, v) + ',255)';
          g.fillRect(0, y, w, 1);
        }
      });
      const planetMat = new THREE.MeshStandardMaterial({ map: bands, roughness: 0.5, metalness: 0 });
      const planet = new THREE.Mesh(new THREE.SphereGeometry(0.85, 64, 40), planetMat);

      const ringTex = mkTex(512, 512, (g) => {
        for (let r = 160; r <= 256; r++) {
          const n = Math.sin(r * 0.37) * 0.5 + Math.sin(r * 0.11 + 1) * 0.5;
          const a = 0.35 + 0.45 * (0.5 + 0.5 * n);
          const edge = Math.min(1, (r - 160) / 6, (256 - r) / 6);
          g.strokeStyle = n > 0.15 ? 'rgba(255,255,255,' + a * edge + ')' : 'rgba(90,150,255,' + a * edge + ')';
          g.lineWidth = 1.4;
          g.beginPath();
          g.arc(256, 256, r - 0.5, 0, Math.PI * 2);
          g.stroke();
        }
      });
      const ring = new THREE.Mesh(
        new THREE.RingGeometry(1.25, 2.0, 128),
        new THREE.MeshStandardMaterial({ map: ringTex, transparent: true, side: THREE.DoubleSide, roughness: 0.6, depthWrite: false })
      );
      ring.rotation.x = -Math.PI / 2;

      const system = new THREE.Group();
      system.rotation.z = -0.3;
      system.rotation.x = 0.28;
      system.add(planet, ring);

      const moonMat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.4 });
      const moonMat2 = new THREE.MeshStandardMaterial({ color: 0x0a6cff, roughness: 0.3, metalness: 0.2 });
      const pivotA = new THREE.Group();
      const moonA = new THREE.Mesh(new THREE.SphereGeometry(0.18, 32, 20), moonMat);
      moonA.position.x = 2.2;
      pivotA.add(moonA);
      const pivotB = new THREE.Group();
      pivotB.rotation.z = 0.5;
      const moonB = new THREE.Mesh(new THREE.SphereGeometry(0.12, 32, 20), moonMat2);
      moonB.position.x = 2.55;
      pivotB.add(moonB);
      system.add(pivotA, pivotB);
      scene.add(system);

      const update = (s, px, py) => {
        planet.rotation.y = s * 0.2;
        ring.rotation.z = s * 0.02;
        pivotA.rotation.y = s * 0.9;
        pivotB.rotation.y = -s * 0.6 + 2;
        system.rotation.y = px * 0.7;
        system.rotation.x = 0.28 + py * 0.5;
        system.position.y = Math.sin(s * 0.8) * 0.06;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a ringed planet with orbiting moons in Three.js. Planet: SphereGeometry(0.85, 64, 40) with a MeshStandardMaterial and a CanvasTexture of soft blue-and-white latitude bands (draw one row per pixel from a sine mix, colorSpace SRGBColorSpace). Ring: RingGeometry(1.25, 2.0, 128) laid flat with rotation.x = -PI/2; its UVs map planar, so draw concentric strokes on a square canvas (inner radius 160 of 256 px) with varying alpha and use it as the map on a transparent, DoubleSide, depthWrite false material so it sorts correctly against the planet. Tilt the whole system a little (rotation.z -0.3, rotation.x 0.28). Moons: two small spheres in pivot Groups whose rotation.y advances at different speeds and directions, one pivot given its own tilt. Light with a strong DirectionalLight from the upper right plus a dimmed RoomEnvironment (scene.environmentIntensity 0.5). Slow planet spin, a gentle float, and pointer-eased tilt. ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, reduced-motion fallback that stops the orbits, and full dispose on unmount.`,
  });


  ML.add({
    id: 'three-objects-card-stack',
    cat: 'three-objects',
    title: 'Card stack',
    sub: 'Cards fan out, then restack',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const { RoundedBoxGeometry } = lib;
      const camera = persp(30, 0, 0.6, 6.6);
      camera.lookAt(0, 0, 0);
      sun(2, 4, 5, 1.4);

      const font = '"Geist", system-ui, sans-serif';
      const faces = [
        ['#FF7A3D', '#bcd6ff', '#ffffff', 'Tide'],
        ['#dfe6f1', '#FAF6F2', '#1d1d1f', 'Tide'],
        ['#B3150F', '#2f6bff', '#ffffff', 'Tide'],
        ['#ffffff', '#FFF0EE', '#1d1d1f', 'Tide'],
        ['#FF4433', '#FF5745', '#ffffff', 'Tide'],
      ];
      const geo = new RoundedBoxGeometry(1.9, 1.2, 0.08, 4, 0.04);
      const edgeMat = new THREE.MeshStandardMaterial({ color: 0xeef3fb, roughness: 0.4, metalness: 0.2 });
      const cards = faces.map((f, i) => {
        const tex = mkTex(512, 324, (g, w, h) => {
          const gr = g.createLinearGradient(0, 0, w, h);
          gr.addColorStop(0, f[0]);
          gr.addColorStop(1, f[1]);
          g.fillStyle = gr;
          g.fillRect(0, 0, w, h);
          g.fillStyle = f[2];
          g.globalAlpha = 0.9;
          g.font = '600 34px ' + font;
          g.fillText(f[3], 36, 66);
          g.globalAlpha = 1;
          g.fillStyle = 'rgba(255,255,255,.55)';
          g.beginPath();
          g.roundRect(36, 118, 70, 52, 10);
          g.fill();
          g.fillStyle = f[2];
          g.font = '500 30px ' + font;
          g.fillText('4821  0937  5520', 36, 240);
          g.globalAlpha = 0.6;
          g.font = '500 20px ' + font;
          g.fillText('MAYA R.', 36, 286);
          g.fillText('09/29', w - 110, 286);
        });
        document.fonts.ready.then(() => {
          if (!dead) tex.redraw();
        });
        const face = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.45, metalness: 0.05, envMapIntensity: 0.7 });
        const mesh = new THREE.Mesh(geo, [edgeMat, edgeMat, edgeMat, edgeMat, face, edgeMat]);
        mesh.position.y = 0.55;
        const pivot = new THREE.Group();
        pivot.add(mesh);
        return pivot;
      });
      const stack = new THREE.Group();
      cards.forEach((c) => stack.add(c));
      stack.rotation.set(-0.5, -0.4, 0);
      scene.add(stack);
      const shadow = shadowAt(3.4, 2.2, -1.35, 0.25);

      const update = (s, px, py) => {
        const c = s % 6.5;
        const f = eio((c - 0.7) / 1.3) * (1 - eio((c - 4.3) / 1.3));
        cards.forEach((p, i) => {
          const k = i - 2;
          p.position.set(k * 0.16 * f, -0.55 + i * 0.1 * (1 - f * 0.4), i * 0.085);
          p.rotation.z = -k * 0.3 * f;
        });
        stack.rotation.y = -0.4 + px * 0.9;
        stack.rotation.x = -0.5 + py * 0.5;
        stack.position.y = Math.sin(s * 1.1) * 0.06;
        shadow.scale.set(1 + f * 0.25, 1, 1);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D credit-card stack that fans out and restacks, in Three.js. Each card is a RoundedBoxGeometry(1.9, 1.2, 0.08, 4, 0.04) with an array of six materials: plain light edge material on five faces and, on index 4 (the +z face), a MeshStandardMaterial whose map is a CanvasTexture you draw yourself (gradient fill, small chip rectangle, spaced digits, holder name; wait for document.fonts.ready, colorSpace SRGBColorSpace). Use five cards in different blue, white and silver gradients with made-up generic text. Put each card's mesh inside a pivot Group offset so the pivot sits at the card's bottom edge; stacking is z = i*0.085, and fanning rotates each pivot's z by -(i-2)*0.3 and spreads x slightly. Tilt the whole stack toward the camera (rotation.x -0.7, y -0.45). Drive the fan with a 6.5s loop: hold stacked, ease out (smoothstep) over 1.3s, hold, ease back. Light with RoomEnvironment plus one directional light, ACESFilmicToneMapping, a soft radial-gradient shadow plane, pointer-eased tilt, ResizeObserver, pause offscreen, reduced-motion fallback that stays fanned, and dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-iso-desk',
    cat: 'three-objects',
    title: 'Isometric desk',
    sub: 'A tiny workspace swaying in ortho view',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = new THREE.OrthographicCamera(-3, 3, 2.2, -2.2, 0.1, 60);
      camera.position.set(6, 5.2, 6);
      camera.lookAt(0, 0.95, 0);
      const fit = (w, h) => {
        const hh = 2.15;
        camera.top = hh;
        camera.bottom = -hh;
        camera.left = -hh * (w / h);
        camera.right = hh * (w / h);
        camera.updateProjectionMatrix();
      };
      scene.environmentIntensity = 0.6;
      sun(5, 8, 4, 2.2);
      scene.add(new THREE.HemisphereLight(0xeaf2ff, 0xb5c9e8, 1));

      const room = new THREE.Group();
      scene.add(room);
      const mats = {};
      const mat = (c, r) => {
        const k = c + ':' + (r || 0.5);
        if (!mats[k]) mats[k] = new THREE.MeshStandardMaterial({ color: c, roughness: r || 0.5, metalness: 0.05 });
        return mats[k];
      };
      const box = (w, h, d, c, x, y, z, parent) => {
        const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(c));
        m.position.set(x, y, z);
        (parent || room).add(m);
        return m;
      };

      box(4.4, 0.2, 3.2, 0xd5e2f5, 0, -0.1, 0);
      box(2.8, 0.1, 1.3, 0xffffff, 0, 0.95, -0.2);
      [[-1.3, -0.7], [1.3, -0.7], [-1.3, 0.3], [1.3, 0.3]].forEach((p) => box(0.08, 0.9, 0.08, 0xcfd8e6, p[0], 0.45, p[1]));
      // monitor: base, neck, screen with a canvas UI on the front face
      box(0.5, 0.03, 0.3, 0xdfe6f1, 0, 1.015, -0.55);
      box(0.07, 0.32, 0.07, 0xdfe6f1, 0, 1.18, -0.6);
      const ui = mkTex(320, 200, (g, w, h) => {
        g.fillStyle = '#FAF6F2';
        g.fillRect(0, 0, w, h);
        g.fillStyle = '#E2D6CC';
        g.fillRect(0, 0, 64, h);
        for (let i = 0; i < 5; i++) {
          g.fillStyle = i === 1 ? '#FF4433' : '#bcc9dc';
          g.beginPath();
          g.roundRect(14, 20 + i * 30, 36, 10, 5);
          g.fill();
        }
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.roundRect(82, 18, 224, 74, 10);
        g.fill();
        g.strokeStyle = '#FF4433';
        g.lineWidth = 4;
        g.beginPath();
        [[96, 78], [130, 60], [164, 68], [198, 40], [232, 52], [292, 28]].forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
        g.stroke();
        for (let i = 0; i < 3; i++) {
          g.fillStyle = '#ffffff';
          g.beginPath();
          g.roundRect(82 + i * 78, 108, 70, 72, 10);
          g.fill();
          g.fillStyle = i === 0 ? '#FF7A3D' : '#E2D6CC';
          g.fillRect(94 + i * 78, 124, 46, 8);
          g.fillRect(94 + i * 78, 142, 30, 8);
        }
      });
      const screenMats = [0, 1, 2, 3, 4, 5].map((i) => (i === 4 ? new THREE.MeshBasicMaterial({ map: ui, toneMapped: false }) : mat(0xffffff)));
      const screen = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.82, 0.07), screenMats);
      screen.position.set(0, 1.77, -0.6);
      room.add(screen);
      box(0.78, 0.03, 0.24, 0xffffff, 0, 1.015, 0.15);
      box(0.1, 0.035, 0.16, 0x0a6cff, 0.7, 1.017, 0.15);
      // mug
      const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.09, 0.16, 20), mat(0xffffff, 0.3));
      mug.position.set(-1.0, 1.08, 0.1);
      room.add(mug);
      // plant
      const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.11, 0.22, 16), mat(0x0a6cff, 0.4));
      pot.position.set(1.05, 1.11, -0.5);
      room.add(pot);
      const leafMat = mat(0x6fb0ff, 0.5);
      for (let i = 0; i < 5; i++) {
        const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.1, 12, 8), leafMat);
        leaf.scale.set(0.5, 1.6, 0.5);
        const a = (i / 5) * Math.PI * 2;
        leaf.position.set(1.05 + Math.cos(a) * 0.08, 1.38, -0.5 + Math.sin(a) * 0.08);
        leaf.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5);
        room.add(leaf);
      }
      // stool
      const seat = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.1, 24), mat(0x4fa3ff, 0.45));
      seat.position.set(0, 0.62, 1.2);
      room.add(seat);
      box(0.07, 0.55, 0.07, 0xcfd8e6, 0, 0.3, 1.2);
      box(0.5, 0.04, 0.5, 0xcfd8e6, 0, 0.02, 1.2);

      const update = (s, px, py) => {
        room.rotation.y = Math.sin(s * 0.5) * 0.28 + px * 0.5;
        camera.position.y = 5.2 + py * 1.5;
        camera.lookAt(0, 0.95, 0);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a tiny isometric desk scene in Three.js using an OrthographicCamera. Use camera.position.set(6, 5.2, 6) and lookAt(0, 0.7, 0); on resize set left/right/top/bottom from a fixed half-height (about 2.7) times the aspect ratio and call updateProjectionMatrix, so the scene never distorts. Build everything from BoxGeometry and a few cylinders in MeshStandardMaterial: a floor slab, a white desk top on four thin legs, a monitor (base, neck, and a thin box whose front face - material index 4 - is a CanvasTexture UI with a sidebar, line chart and cards, MeshBasicMaterial with toneMapped false), a keyboard, a mouse, a mug, a pot with five stretched-sphere leaves in a light blue, and a round stool. Light with a DirectionalLight, a HemisphereLight and a dimmed RoomEnvironment (environmentIntensity 0.6). Sway the whole room group with rotation.y = sin(t*0.5)*0.28 and let the pointer add a small orbit and camera-height shift. ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, stop the sway for prefers-reduced-motion, dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-capsules',
    cat: 'three-objects',
    title: 'Floating capsules',
    sub: 'Glossy pills drift and tumble',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(34, 0, 0, 7.5);
      sun(2, 4, 5, 1.2);

      const geo = new THREE.CapsuleGeometry(0.2, 0.55, 8, 24);
      const mk = (c, m, r) => new THREE.MeshPhysicalMaterial({ color: c, metalness: m, roughness: r, clearcoat: 1, clearcoatRoughness: 0.05 });
      const palette = [mk(0x2f6bff, 0.1, 0.14), mk(0xffffff, 0, 0.2), mk(0x7fb8ff, 0.05, 0.16), mk(0xdfe6f1, 0.9, 0.18), mk(0x0a6cff, 0.15, 0.12)];
      const pills = [];
      const N = 11;
      for (let i = 0; i < N; i++) {
        const m = new THREE.Mesh(geo, palette[i % palette.length]);
        const a = i * 2.399963;
        const rad = 0.5 + ((i * 0.37) % 1) * 1.9;
        m.userData = {
          bx: Math.cos(a) * rad * 1.35,
          by: Math.sin(a) * rad * 0.75,
          bz: ((i % 4) - 1.5) * 0.45,
          ph: i * 1.7,
          sp: 0.25 + (i % 5) * 0.08,
          sc: 0.7 + ((i * 0.53) % 1) * 0.8,
        };
        m.scale.setScalar(m.userData.sc);
        scene.add(m);
        pills.push(m);
      }

      const update = (s, px, py) => {
        pills.forEach((m, i) => {
          const u = m.userData;
          m.position.set(
            u.bx + Math.sin(s * 0.35 + u.ph) * 0.35 + px * (0.5 + u.bz * 0.4),
            u.by + Math.cos(s * 0.42 + u.ph) * 0.4 + py * 0.4,
            u.bz
          );
          m.rotation.set(s * u.sp + u.ph, s * u.sp * 0.7, Math.sin(s * 0.3 + u.ph) * 0.8 + i);
        });
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a field of floating glossy capsules in Three.js. One shared CapsuleGeometry(0.2, 0.55, 8, 24) and five MeshPhysicalMaterials (brand blue, white, light blue, brushed silver with metalness 0.9, deep blue) each with clearcoat 1 and clearcoatRoughness 0.05. Create about eleven meshes, place them on a golden-angle spiral (angle = i * 2.399963, radius 0.5 to 2.4, squashed on y) with varied depth and a per-mesh uniform scale between 0.7 and 1.5. Animate every pill in requestAnimationFrame: position = base + sin/cos drift with its own phase (amplitude about 0.35), and rotation advancing at a per-pill speed, so they tumble slowly and never sync up. Let the pointer nudge positions with a parallax factor tied to depth. Light with RoomEnvironment via PMREMGenerator plus one directional light, ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause when offscreen, slow drift to a stop under prefers-reduced-motion, and dispose shared geometry, materials and the renderer on unmount.`,
  });

  ML.add({
    id: 'three-objects-cube-wave',
    cat: 'three-objects',
    title: 'Cube wave',
    sub: 'A grid of cubes ripples up and down',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(30, 0, 6.4, 9.6);
      camera.lookAt(0, 0, 0);
      sun(3, 6, 4, 1.8);

      const G = 13;
      const gap = 0.36;
      const geo = new THREE.BoxGeometry(0.28, 0.28, 0.28);
      const mat = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.25, metalness: 0.05 });
      const mesh = new THREE.InstancedMesh(geo, mat, G * G);
      mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
      const dummy = new THREE.Object3D();
      const white = new THREE.Color(0xeaf2ff);
      const blue = new THREE.Color(0x0a6cff);
      const col = new THREE.Color();
      scene.add(mesh);

      const update = (s, px, py) => {
        const ox = px * 5;
        const oz = py * 5;
        let n = 0;
        for (let i = 0; i < G; i++) {
          for (let j = 0; j < G; j++) {
            const x = (i - (G - 1) / 2) * gap;
            const z = (j - (G - 1) / 2) * gap;
            const d = Math.hypot(x - ox * 0.3, z - oz * 0.3);
            const w = 0.5 + 0.5 * Math.sin(d * 2.2 - s * 2.4);
            dummy.position.set(x, (w - 0.5) * 1.1, z);
            const sc = 0.7 + w * 0.7;
            dummy.scale.setScalar(sc);
            dummy.rotation.y = w * 0.9;
            dummy.updateMatrix();
            mesh.setMatrixAt(n, dummy.matrix);
            col.lerpColors(white, blue, w * w);
            mesh.setColorAt(n, col);
            n++;
          }
        }
        mesh.instanceMatrix.needsUpdate = true;
        mesh.instanceColor.needsUpdate = true;
        mesh.rotation.y = s * 0.12;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a wave of cubes with a Three.js InstancedMesh. One BoxGeometry(0.28, 0.28, 0.28), one MeshStandardMaterial (white, roughness 0.25) and an InstancedMesh of 15 x 15 = 225 instances, with instanceMatrix.setUsage(THREE.DynamicDrawUsage). Every frame loop the grid, compute the distance d from a wave origin, w = 0.5 + 0.5*sin(d*2.2 - t*2.4), then set a dummy Object3D's position.y = (w - 0.5)*1.1, a uniform scale of 0.7 + w*0.7 and a small rotation.y = w*0.9, call updateMatrix and mesh.setMatrixAt. Tint with mesh.setColorAt using Color.lerpColors from a pale blue to your accent by w squared, then flag instanceMatrix.needsUpdate and instanceColor.needsUpdate. Let the pointer slide the wave origin and spin the whole mesh slowly. View it from above at an angle with a 30 degree perspective camera, light with RoomEnvironment and one directional light, ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, reduce the amplitude under prefers-reduced-motion, and dispose geometry, material and the renderer on unmount.`,
  });

  ML.add({
    id: 'three-objects-crystal',
    cat: 'three-objects',
    title: 'Faceted crystal',
    sub: 'A gem refracts and disperses light',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      backdrop();
      const camera = persp(32, 0, 0, 7);

      const bm = (c) => new THREE.MeshBasicMaterial({ color: c });
      [
        [-1.6, 0.8, -1.8, 0.5, 0x0a6cff],
        [1.7, -0.6, -2, 0.75, 0x4fa3ff],
        [0.3, -1.4, -1.7, 0.4, 0x0a6cff],
        [-1.3, -1, -2.2, 0.5, 0xffffff],
        [1.2, 1.2, -2.4, 0.45, 0xbcd6ff],
      ].forEach((o) => {
        const m = new THREE.Mesh(new THREE.SphereGeometry(o[3], 24, 16), bm(o[4]));
        m.position.set(o[0], o[1], o[2]);
        scene.add(m);
      });

      const profile = [
        new THREE.Vector2(0, -1.2),
        new THREE.Vector2(0.95, 0.15),
        new THREE.Vector2(0.95, 0.32),
        new THREE.Vector2(0.52, 0.8),
        new THREE.Vector2(0, 0.8),
      ];
      const geo = new THREE.LatheGeometry(profile, 8);
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0xdcebff,
        transmission: 1,
        thickness: 2.2,
        ior: 1.9,
        dispersion: 0.8,
        roughness: 0,
        metalness: 0,
        flatShading: true,
        attenuationColor: new THREE.Color(0x4fa3ff),
        attenuationDistance: 2.4,
        envMapIntensity: 1.8,
        specularIntensity: 1,
      });
      const gem = new THREE.Mesh(geo, mat);
      gem.scale.setScalar(1.05);
      scene.add(gem);

      const update = (s, px, py) => {
        gem.rotation.y = s * 0.55 + px * 1.2;
        gem.rotation.x = 0.28 + Math.sin(s * 0.7) * 0.12 + py * 0.7;
        gem.position.y = Math.sin(s * 1.1) * 0.09;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a faceted crystal gem in Three.js. Geometry: LatheGeometry from a short gem profile (tip at (0,-1.2), girdle at (0.95,0.15) to (0.95,0.32), crown at (0.52,0.8), table centre (0,0.8)) with only 8 segments, so it reads as cut facets; set flatShading true. Material: MeshPhysicalMaterial with transmission 1, thickness 2.2, ior 1.9, dispersion 0.8 (the r186 property that splits colour at the edges), roughness 0, attenuationColor in your accent blue, attenuationDistance 2.4, envMapIntensity 1.8. Transmission needs content to refract: draw a plain backdrop plane behind the gem and scatter a few accent and white spheres behind it. Light with RoomEnvironment via PMREMGenerator and ACESFilmicToneMapping. Spin rotation.y at about 0.55 rad/s with a small x tilt wobble and float bob, easing toward the pointer. Keep the scene small, as transmission renders the scene twice. setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, stop the spin for prefers-reduced-motion, dispose all geometries, materials and the renderer on unmount.`,
  });

  ML.add({
    id: 'three-objects-donut-chart',
    cat: 'three-objects',
    title: '3D donut chart',
    sub: 'Segments rise into place, value counts up',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(32, 0, 0.2, 6.6);
      camera.lookAt(0, 0, 0);
      sun(2, 4, 5, 1.5);

      const R = 1.25;
      const T = 0.27;
      const vals = [0.42, 0.28, 0.18, 0.12];
      const colors = [0x0a6cff, 0x4fa3ff, 0xbcd6ff, 0xe3ecf8];
      const gap = 0.09;
      const chart = new THREE.Group();
      chart.rotation.x = -0.95;
      scene.add(chart);
      const segs = [];
      let a0 = Math.PI / 2;
      vals.forEach((v, i) => {
        const arc = v * Math.PI * 2 - gap;
        const m = new THREE.MeshPhysicalMaterial({ color: colors[i], roughness: 0.22, clearcoat: 1, clearcoatRoughness: 0.08 });
        const g = new THREE.Group();
        g.add(new THREE.Mesh(new THREE.TorusGeometry(R, T, 24, 64, arc), m));
        const cap = new THREE.SphereGeometry(T, 20, 14);
        const c1 = new THREE.Mesh(cap, m);
        c1.position.set(R, 0, 0);
        const c2 = new THREE.Mesh(cap, m);
        c2.position.set(Math.cos(arc) * R, Math.sin(arc) * R, 0);
        g.add(c1, c2);
        g.rotation.z = a0 + gap / 2;
        a0 += v * Math.PI * 2;
        chart.add(g);
        segs.push(g);
      });

      let shown = -1;
      const labelTex = mkTex(256, 256, (g, w, h) => {
        g.textAlign = 'center';
        g.fillStyle = '#1d1d1f';
        g.font = '600 78px "Geist", system-ui, sans-serif';
        g.fillText(Math.max(0, shown) + '%', w / 2, h / 2 + 18);
        g.fillStyle = '#86868b';
        g.font = '500 26px "Geist", system-ui, sans-serif';
        g.fillText('Retention', w / 2, h / 2 + 62);
      });
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(1.7, 1.7),
        new THREE.MeshBasicMaterial({ map: labelTex, transparent: true, toneMapped: false })
      );
      label.position.z = 0.02;
      chart.add(label);
      document.fonts.ready.then(() => {
        if (!dead) labelTex.redraw();
      });
      const floor = shadowAt(3.9, 3.9, 0, 0.18);
      floor.rotation.x = 0;
      floor.position.z = -0.45;
      chart.add(floor);

      const update = (s, px, py) => {
        const c = (s + 3) % 7;
        const out = eio((c - 5.9) / 0.9);
        let total = 0;
        segs.forEach((g, i) => {
          const p = outBack((c - 0.15 - i * 0.35) / 0.9) * (1 - out);
          g.scale.setScalar(Math.max(0.0001, p));
          g.position.z = (1 - Math.min(1, p)) * -0.9;
          total += clamp01((c - 0.15 - i * 0.35) / 0.9) * vals[i];
        });
        const v = Math.round(total * 72);
        if (v !== shown) {
          shown = v;
          labelTex.redraw();
        }
        label.scale.setScalar(Math.max(0.0001, 1 - out));
        chart.rotation.z = Math.sin(s * 0.4) * 0.25 + px * 0.6;
        chart.rotation.x = -0.95 + py * 0.4;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D donut chart in Three.js whose segments rise into place. Each segment is a TorusGeometry(1.25, 0.27, 24, 64, arcLength) in its own Group; an open torus arc has hollow ends, so add a SphereGeometry cap (radius equal to the tube) at both ends for a rounded pill look. Leave a small angular gap between segments, rotate each group's z to its start angle and tint with MeshPhysicalMaterials (accent blue, light blue, pale blue, near white; clearcoat 1). Lay the chart back with chart.rotation.x = -0.95 so we look down on it, and draw the centre label (value plus caption) on a canvas, wait for document.fonts.ready, show it on a transparent MeshBasicMaterial plane and redraw the texture only when the rounded value changes while it counts up. Run a 7s loop: segments scale from 0 and travel up along local z with a back-out ease, staggered by 0.35s, hold, then scale away and repeat. Light with RoomEnvironment and a directional light, ACESFilmicToneMapping, a soft floor shadow, pointer-eased tilt, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, show the final state under prefers-reduced-motion, and dispose everything on unmount.`,
  });


  ML.add({
    id: 'three-objects-bar-chart',
    cat: 'three-objects',
    title: '3D bar chart',
    sub: 'Bars grow from the grid, staggered',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(30, 0, 3.8, 10.4);
      camera.lookAt(0, 0.75, 0);
      sun(3, 6, 4, 1.7);

      const grid = mkTex(512, 256, (g, w, h) => {
        g.fillStyle = '#FAF6F2';
        g.fillRect(0, 0, w, h);
        g.strokeStyle = '#d3deee';
        g.lineWidth = 2;
        for (let i = 0; i <= 14; i++) {
          g.beginPath();
          g.moveTo((i / 14) * w, 0);
          g.lineTo((i / 14) * w, h);
          g.stroke();
        }
        for (let j = 0; j <= 7; j++) {
          g.beginPath();
          g.moveTo(0, (j / 7) * h);
          g.lineTo(w, (j / 7) * h);
          g.stroke();
        }
      });
      const chart = new THREE.Group();
      scene.add(chart);
      const floor = new THREE.Mesh(
        new THREE.PlaneGeometry(4.8, 2.6),
        new THREE.MeshStandardMaterial({ map: grid, roughness: 0.7 })
      );
      floor.rotation.x = -Math.PI / 2;
      chart.add(floor);

      const heights = [0.8, 1.3, 1.05, 1.9, 1.6, 2.4, 3.0];
      const lo = new THREE.Color(0x8fbfff);
      const hi = new THREE.Color(0x0a6cff);
      const geo = new THREE.BoxGeometry(0.44, 1, 0.44);
      const bars = heights.map((h, i) => {
        const m = new THREE.Mesh(
          geo,
          new THREE.MeshPhysicalMaterial({
            color: lo.clone().lerp(hi, i / (heights.length - 1)),
            roughness: 0.25,
            clearcoat: 1,
            clearcoatRoughness: 0.1,
          })
        );
        m.position.x = -1.8 + i * 0.6;
        m.scale.y = 0.001;
        chart.add(m);
        return m;
      });

      const update = (s, px, py) => {
        const c = (s + 3) % 6.8;
        bars.forEach((m, i) => {
          const up = outBack((c - 0.1 - i * 0.16) / 0.9);
          const down = eio((c - 5.7 - (6 - i) * 0.05) / 0.6);
          const k = Math.max(0.001, up * (1 - down));
          m.scale.y = k * heights[i];
          m.position.y = m.scale.y / 2;
        });
        chart.rotation.y = -0.5 + Math.sin(s * 0.4) * 0.15 + px * 0.5;
        chart.rotation.x = py * 0.2;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a 3D bar chart in Three.js whose bars grow out of a floor grid. Floor: a PlaneGeometry rotated -PI/2 with a MeshStandardMaterial using a CanvasTexture of light blue grid lines on a very pale fill. Bars: one shared BoxGeometry(0.5, 1, 0.5) and a MeshPhysicalMaterial per bar (clearcoat 1) ramping from pale blue to your accent across the series. Animate by scaling each bar's y to value*progress and setting position.y = scale.y/2 so it grows upward from the floor instead of from its centre. Stagger each bar by 0.16s with a gentle back-out ease (1 + 2.2*(x-1)^3 + 1.2*(x-1)^2), hold, then fall back down in reverse order and repeat on a 6.8s loop. View it from a 3/4 angle with a 30 degree camera, sway the group slowly and ease toward the pointer. Light with RoomEnvironment plus one directional light, ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, show finished bars under prefers-reduced-motion, and dispose everything on unmount. Pair it with real axis labels in HTML overlaid on the canvas for accessibility.`,
  });

  ML.add({
    id: 'three-objects-bent-headline',
    cat: 'three-objects',
    title: 'Bent headline',
    sub: 'A curved banner waves with the text',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(30, 0, 0, 9);
      sun(0, 2, 5, 1);

      const tex = mkTex(1024, 448, (g, w, h) => {
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.roundRect(8, 8, w - 16, h - 16, 44);
        g.fill();
        g.strokeStyle = '#d3deee';
        g.lineWidth = 3;
        g.stroke();
        g.fillStyle = '#FF4433';
        g.font = '600 30px "Geist Mono", ui-monospace, monospace';
        g.fillText('NEW IN 3D', 70, 100);
        g.fillStyle = '#1d1d1f';
        g.font = '600 128px "Geist", system-ui, sans-serif';
        g.fillText('Type that', 66, 236);
        g.fillStyle = '#FF4433';
        g.fillText('moves.', 66, 366);
      });
      document.fonts.ready.then(() => {
        if (!dead) tex.redraw();
      });
      const W = 4.6;
      const H = 2.0;
      const geo = new THREE.PlaneGeometry(W, H, 80, 24);
      const pos = geo.attributes.position;
      const base = Float32Array.from(pos.array);
      geo.setAttribute('color', new THREE.BufferAttribute(new Float32Array(pos.count * 3).fill(1), 3));
      const col = geo.attributes.color;
      const mat = new THREE.MeshBasicMaterial({ map: tex, vertexColors: true, transparent: true, side: THREE.DoubleSide, toneMapped: false });
      const banner = new THREE.Mesh(geo, mat);
      scene.add(banner);

      const update = (s, px, py) => {
        for (let i = 0; i < pos.count; i++) {
          const x = base[i * 3];
          const y = base[i * 3 + 1];
          const ph = x * 1.35 - s * 1.7;
          pos.setXYZ(i, x, y + Math.sin(x * 1.1 - s * 1.2) * 0.07, x * x * 0.085 + Math.sin(ph) * 0.2);
          const slope = Math.cos(ph) * 0.27;
          const v = 0.95 - slope * 0.16 - Math.abs(x) * 0.012;
          col.setXYZ(i, v - 0.03, v - 0.01, v);
        }
        pos.needsUpdate = true;
        col.needsUpdate = true;
        banner.rotation.y = px * 0.7;
        banner.rotation.x = py * 0.4;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a bent, waving headline banner in Three.js. Draw the headline on a 1024x448 canvas (white rounded panel with a hairline border, a small mono kicker, and a two-line headline with one accent-colored word; wait for document.fonts.ready before drawing) and use it as a CanvasTexture (colorSpace SRGBColorSpace) on a PlaneGeometry(4.6, 2.0, 80, 24) so there are enough vertices to bend. Keep a copy of the base positions. Each frame set z = x*x*0.085 + sin(x*1.35 - t*1.7)*0.2 (a fixed curve plus a travelling wave) and add a small sine to y. Fake shading cheaply: add a per-vertex color attribute, compute the slope dz/dx analytically and darken the vertex colour where the surface turns away; use MeshBasicMaterial with vertexColors true, transparent true, DoubleSide and toneMapped false so the text stays crisp and on-brand. Ease the banner's rotation toward the pointer. Keep real headline text in HTML for screen readers and SEO; the canvas is decoration. setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, freeze the wave under prefers-reduced-motion, dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-gift-box',
    cat: 'three-objects',
    title: 'Box reveal',
    sub: 'The lid lifts, an object rises out',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const { RoundedBoxGeometry } = lib;
      const camera = persp(34, 0, 2.6, 7.4);
      camera.lookAt(0, 0.75, 0);
      sun(3, 5, 4, 1.6);

      const white = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.3, clearcoat: 0.6 });
      const blue = new THREE.MeshPhysicalMaterial({ color: 0x0a6cff, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08 });
      const rig = new THREE.Group();
      rig.scale.setScalar(1.5);
      scene.add(rig);
      const box = new THREE.Group();
      rig.add(box);
      const body = new THREE.Mesh(new RoundedBoxGeometry(1.5, 1, 1.5, 4, 0.06), white);
      const bandA = new THREE.Mesh(new THREE.BoxGeometry(0.26, 1.01, 1.52), blue);
      const bandB = new THREE.Mesh(new THREE.BoxGeometry(1.52, 1.01, 0.26), blue);
      const hollow = new THREE.Mesh(
        new THREE.PlaneGeometry(1.2, 1.2),
        new THREE.MeshStandardMaterial({ color: 0x9cc3ff, roughness: 0.9 })
      );
      hollow.rotation.x = -Math.PI / 2;
      hollow.position.y = 0.504;
      box.add(body, bandA, bandB, hollow);

      const lid = new THREE.Group();
      lid.add(new THREE.Mesh(new RoundedBoxGeometry(1.64, 0.3, 1.64, 4, 0.06), blue));
      const lidA = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.31, 1.66), white);
      const lidB = new THREE.Mesh(new THREE.BoxGeometry(1.66, 0.31, 0.26), white);
      lid.add(lidA, lidB);
      rig.add(lid);

      const orb = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.34, 2),
        new THREE.MeshPhysicalMaterial({
          color: 0x4fa3ff,
          emissive: 0x0a6cff,
          emissiveIntensity: 0.9,
          roughness: 0.15,
          clearcoat: 1,
          flatShading: true,
        })
      );
      rig.add(orb);
      const halo = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: mkTex(128, 128, (g) => {
            const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
            gr.addColorStop(0, 'rgba(79,163,255,.55)');
            gr.addColorStop(1, 'rgba(79,163,255,0)');
            g.fillStyle = gr;
            g.fillRect(0, 0, 128, 128);
          }),
          transparent: true,
          depthWrite: false,
        })
      );
      halo.scale.setScalar(2.6);
      rig.add(halo);
      const shadow = shadowAt(3.4, 3.4, -0.78, 0.3);

      const update = (s, px, py) => {
        const c = (s + 2.5) % 7.2;
        const lidH = eio((c - 0.2) / 0.8) * (1 - eio((c - 6.2) / 0.7));
        const orbH = outBack((c - 0.8) / 1.1) * (1 - eio((c - 5.6) / 0.7));
        lid.position.set(lidH * 0.45, 0.65 + lidH * 0.7, lidH * -0.1);
        lid.rotation.set(lidH * 0.1, lidH * 0.4, lidH * -0.25);
        orb.position.y = 0.15 + orbH * 1.15;
        orb.rotation.set(s * 0.8, s * 1.1, 0);
        orb.scale.setScalar(0.5 + 0.5 * clamp01(orbH));
        halo.position.copy(orb.position);
        halo.material.opacity = clamp01(orbH * 1.2) * (0.8 + Math.sin(s * 3) * 0.12);
        halo.visible = orbH > 0.05;
        rig.rotation.y = Math.sin(s * 0.5) * 0.4 + px * 0.7;
        shadow.scale.setScalar(1.5 + lidH * 0.15);
        camera.position.y = 2.6 + py * 1.2;
        camera.lookAt(0, 1.0, 0);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a box reveal in Three.js: a lid lifts off a gift-style box and a glowing blue object rises out. Body: RoundedBoxGeometry(1.5, 1, 1.5, 4, 0.06) in glossy white with two thin blue band boxes crossing it (slightly larger than the body so they sit proud), and a pale blue plane just above the top face so the box reads as open. Lid: a separate Group with a RoundedBoxGeometry(1.64, 0.3, 1.64) in your accent blue and white crossing bands. Object: IcosahedronGeometry(0.34, 2) with flatShading, MeshPhysicalMaterial emissive in a light blue (emissiveIntensity 1.5) and clearcoat 1, plus a soft radial-gradient Sprite halo behind it (normal blending, low opacity, depthWrite false). Start the object inside the box so the solid body hides it, then run a 6.4s timeline with smoothstep and back-out easing: the lid rises 1.15 units, slides and tilts away, the object climbs 1.55 units while spinning and its halo fades in, hold, then everything reverses. Light with RoomEnvironment plus one directional light, ACESFilmicToneMapping, a contact shadow plane, gentle camera sway from the pointer, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, a static opened state under prefers-reduced-motion, and dispose all resources on unmount.`,
  });

  ML.add({
    id: 'three-objects-ribbon',
    cat: 'three-objects',
    title: 'Twisted ribbon',
    sub: 'Glossy tubes loop along a 3D curve',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(32, 0, 0, 7.2);
      sun(2, 3, 5, 1.2);

      const pts = [];
      const N = 28;
      for (let i = 0; i < N; i++) {
        const a = (i / N) * Math.PI * 2;
        pts.push(new THREE.Vector3(Math.sin(a) * 1.7, Math.sin(2 * a + 0.5) * 0.85, Math.sin(3 * a) * 0.95));
      }
      const curve = new THREE.CatmullRomCurve3(pts, true, 'catmullrom', 0.5);
      const geoA = new THREE.TubeGeometry(curve, 320, 0.14, 20, true);
      const matA = new THREE.MeshPhysicalMaterial({
        color: 0x2f6bff,
        metalness: 0.15,
        roughness: 0.14,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        iridescence: 0.5,
        iridescenceIOR: 1.35,
      });
      const matB = new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.18, clearcoat: 1, sheen: 0.6, sheenColor: 0xdbe9ff });
      const a = new THREE.Mesh(geoA, matA);
      const b = new THREE.Mesh(geoA, matB);
      b.rotation.y = Math.PI;
      b.scale.setScalar(0.92);
      const group = new THREE.Group();
      group.add(a, b);
      scene.add(group);

      const update = (s, px, py) => {
        group.rotation.y = s * 0.3 + px * 1.2;
        group.rotation.x = 0.25 + Math.sin(s * 0.5) * 0.15 + py * 0.8;
        group.rotation.z = Math.sin(s * 0.35) * 0.2;
        a.rotation.x = s * 0.25;
        b.rotation.x = -s * 0.25;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a twisted glossy ribbon in Three.js. Make a closed CatmullRomCurve3 from about 28 points on a Lissajous-style loop (x = 1.7*sin(a), y = 0.85*sin(2a + 0.5), z = 0.95*sin(3a)) with the 'catmullrom' type and tension 0.5, then TubeGeometry(curve, 320, 0.14, 20, true). Use the same geometry twice: one mesh in MeshPhysicalMaterial accent blue (clearcoat 1, iridescence 0.5) and a slightly smaller one in glossy white with a soft sheen, rotated by PI about y so the two strands interlace. Rotate the group slowly (rotation.y at 0.3 rad/s with a small x and z sway) and spin each tube on its own x axis at opposite speeds, which makes the highlights slide along the bends. Light with RoomEnvironment via PMREMGenerator plus one directional light, ACESFilmicToneMapping, ease rotation toward the pointer, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause when offscreen, honour prefers-reduced-motion, and dispose the shared geometry, both materials and the renderer on unmount. Keep tubular segments under 400 for performance.`,
  });

  ML.add({
    id: 'three-objects-coins',
    cat: 'three-objects',
    title: 'Coin stack',
    sub: 'Coins drop, spin and stack up',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(30, 0, 2.4, 6.6);
      camera.lookAt(0, -0.2, 0);
      sun(2, 5, 4, 1.4);

      const face = mkTex(256, 256, (g, w, h) => {
        const gr = g.createLinearGradient(0, 0, w, h);
        gr.addColorStop(0, '#FF7A3D');
        gr.addColorStop(1, '#FF4433');
        g.fillStyle = gr;
        g.fillRect(0, 0, w, h);
        g.strokeStyle = 'rgba(255,255,255,.85)';
        g.lineWidth = 8;
        g.beginPath();
        g.arc(w / 2, h / 2, 100, 0, Math.PI * 2);
        g.stroke();
        g.fillStyle = 'rgba(255,255,255,.95)';
        g.font = '600 120px "Geist", system-ui, sans-serif';
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        g.fillText('$', w / 2, h / 2 + 6);
      });
      document.fonts.ready.then(() => {
        if (!dead) face.redraw();
      });
      const geo = new THREE.CylinderGeometry(0.62, 0.62, 0.1, 48);
      const rim = new THREE.MeshPhysicalMaterial({ color: 0x6fa8ff, metalness: 0.7, roughness: 0.15, clearcoat: 1, clearcoatRoughness: 0.05 });
      const cap = new THREE.MeshStandardMaterial({ map: face, metalness: 0.2, roughness: 0.3 });

      const stack = new THREE.Group();
      stack.scale.setScalar(1.55);
      scene.add(stack);
      const N = 7;
      const coins = [];
      for (let i = 0; i < N; i++) {
        const m = new THREE.Mesh(geo, [rim, cap, cap]);
        stack.add(m);
        coins.push(m);
      }
      const shadow = shadowAt(2.6, 2.6, -0.96, 0.3);

      const update = (s, px, py) => {
        const c = (s + 3.6) % 6;
        const out = eio((c - 5.3) / 0.6);
        coins.forEach((m, i) => {
          const t0 = 0.05 + i * 0.45;
          const p = clamp01((c - t0) / 0.7);
          const target = -0.55 + i * 0.115;
          const lt = c - (t0 + 0.7);
          const bounce = lt > 0 ? Math.exp(-lt * 7) * Math.abs(Math.sin(lt * 14)) * 0.08 : 0;
          m.position.y = target + (1 - p * p) * 3.4 + bounce;
          m.rotation.x = (1 - p) * (1 - p) * Math.PI * 5 + (lt > 0 ? Math.exp(-lt * 6) * Math.sin(lt * 26) * 0.12 : 0);
          m.rotation.y = (1 - p) * 2.4 + i * 0.35;
          m.visible = c > t0 && out < 0.98;
          m.scale.setScalar(Math.max(0.001, 1 - out));
        });
        stack.rotation.y = s * 0.3 + px * 1.1;
        stack.rotation.x = py * 0.3;
        shadow.scale.setScalar(1.55 * (1 - out));
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a falling coin stack in Three.js. Coin: CylinderGeometry(0.62, 0.62, 0.1, 48) with a three-material array [rim, topCap, bottomCap]: a brushed silver rim (metalness 0.95, roughness 0.22) and cap faces using a CanvasTexture you draw (blue gradient, white ring, a centred glyph; wait for document.fonts.ready, colorSpace SRGBColorSpace). Create seven coins in a Group. Animate each with its own start time (0.3s + i*0.5s) and 0.7s fall: y = target + (1 - p*p) * 3.4 for gravity-like acceleration, and while falling spin rotation.x by (1 - p)^2 * 5*PI plus a y twirl so it lands flat and face-up. After landing add a damped bounce (exp(-lt*7) * |sin(lt*14)| * 0.08) and a tiny wobble. Target heights stack at 0.115 spacing. After a 6.6s loop shrink the stack away and restart. Slowly rotate the stack, ease toward the pointer, put a soft contact shadow plane under it, light with RoomEnvironment plus one directional light, ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, show the landed stack under prefers-reduced-motion, and dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-app-icon',
    cat: 'three-objects',
    title: '3D app icon',
    sub: 'A chunky icon tilts to the pointer',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const { RoundedBoxGeometry } = lib;
      const camera = persp(30, 0, 0, 6.2);
      sun(2, 3, 5, 1.6);

      const grad = mkTex(256, 256, (g, w, h) => {
        const gr = g.createLinearGradient(0, 0, w, h);
        gr.addColorStop(0, '#FF7A3D');
        gr.addColorStop(1, '#FF4433');
        g.fillStyle = gr;
        g.fillRect(0, 0, w, h);
        const hl = g.createRadialGradient(w * 0.3, h * 0.2, 0, w * 0.3, h * 0.2, w * 0.7);
        hl.addColorStop(0, 'rgba(255,255,255,.35)');
        hl.addColorStop(1, 'rgba(255,255,255,0)');
        g.fillStyle = hl;
        g.fillRect(0, 0, w, h);
      });
      const side = new THREE.MeshPhysicalMaterial({ color: 0x2f6bff, roughness: 0.25, clearcoat: 1 });
      const front = new THREE.MeshPhysicalMaterial({ map: grad, roughness: 0.2, clearcoat: 1, clearcoatRoughness: 0.05 });
      const icon = new THREE.Group();
      const body = new THREE.Mesh(new RoundedBoxGeometry(1.7, 1.7, 0.5, 8, 0.25), [side, side, side, side, front, side]);
      icon.add(body);

      // bolt glyph, extruded and sunk partly into the face
      const bolt = new THREE.Shape();
      [[0.12, 0.62], [-0.3, -0.02], [-0.03, -0.02], [-0.13, -0.62], [0.3, 0.07], [0.03, 0.07]].forEach((p, i) => (i ? bolt.lineTo(p[0], p[1]) : bolt.moveTo(p[0], p[1])));
      bolt.closePath();
      const glyphGeo = new THREE.ExtrudeGeometry(bolt, { depth: 0.07, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.025, bevelSegments: 4 });
      glyphGeo.center();
      const glyph = new THREE.Mesh(glyphGeo, new THREE.MeshPhysicalMaterial({ color: 0xffffff, roughness: 0.25, clearcoat: 1 }));
      glyph.position.z = 0.27;
      glyph.scale.setScalar(1.15);
      icon.add(glyph);
      scene.add(icon);
      const shadow = shadowAt(2.6, 1.0, -1.35, 0.28);

      const update = (s, px, py) => {
        icon.rotation.y = px * 1.5;
        icon.rotation.x = py * 1.3;
        icon.position.y = Math.sin(s * 1.1) * 0.08;
        shadow.scale.setScalar(1 - icon.position.y * 0.4);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a chunky 3D app icon that tilts toward the pointer, in Three.js. Body: RoundedBoxGeometry(1.7, 1.7, 0.5, 8, 0.25) with a six-material array: glossy blue edge material on five faces and, on index 4 (front), a MeshPhysicalMaterial whose map is a CanvasTexture gradient (light blue to accent, with a soft white highlight radial in the top-left), clearcoat 1. Glyph: draw a simple shape (here a bolt) as a THREE.Shape, ExtrudeGeometry with depth 0.07 and a small bevel, geometry.center(), white clearcoat material, positioned so it sits partly sunk into the front face. Light with RoomEnvironment plus one directional light and ACESFilmicToneMapping. Interaction: on pointermove over the element set target rotation.y = nx*1.5 and rotation.x = ny*1.3 (normalised -0.5..0.5 coordinates from getBoundingClientRect) and ease with a lerp of about 0.06; when the pointer has been still for 2.5s run an autoplay Lissajous path. Add a gentle float bob and a radial-gradient contact shadow that scales with it. setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, disable the float under prefers-reduced-motion, dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-morph-shapes',
    cat: 'three-objects',
    title: 'Shape morph',
    sub: 'A sphere morphs into a rounded cube',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(32, 0, 0.1, 7);
      sun(2, 3, 5, 1.4);

      const geo = new THREE.SphereGeometry(1, 96, 64);
      const pos = geo.attributes.position;
      const tp = new Float32Array(pos.count * 3);
      const tn = new Float32Array(pos.count * 3);
      const P = 8;
      const v = new THREE.Vector3();
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i);
        const n = Math.pow(Math.pow(Math.abs(v.x), P) + Math.pow(Math.abs(v.y), P) + Math.pow(Math.abs(v.z), P), 1 / P);
        tp[i * 3] = (v.x / n) * 0.92;
        tp[i * 3 + 1] = (v.y / n) * 0.92;
        tp[i * 3 + 2] = (v.z / n) * 0.92;
        // normal of |x|^P + |y|^P + |z|^P = c is the gradient
        v.set(Math.sign(v.x) * Math.pow(Math.abs(v.x / n), P - 1), Math.sign(v.y) * Math.pow(Math.abs(v.y / n), P - 1), Math.sign(v.z) * Math.pow(Math.abs(v.z / n), P - 1)).normalize();
        tn[i * 3] = v.x;
        tn[i * 3 + 1] = v.y;
        tn[i * 3 + 2] = v.z;
      }
      geo.morphAttributes.position = [new THREE.Float32BufferAttribute(tp, 3)];
      geo.morphAttributes.normal = [new THREE.Float32BufferAttribute(tn, 3)];
      const mat = new THREE.MeshPhysicalMaterial({
        color: 0x2f6bff,
        metalness: 0.15,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.06,
        iridescence: 0.4,
        iridescenceIOR: 1.35,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.setScalar(1.15);
      scene.add(mesh);
      const shadow = shadowAt(3, 1, -1.5, 0.28);

      const update = (s, px, py) => {
        const c = s % 6;
        const w = c < 0.8 ? 0 : c < 2.2 ? eio((c - 0.8) / 1.4) : c < 3.8 ? 1 : c < 5.2 ? 1 - eio((c - 3.8) / 1.4) : 0;
        mesh.morphTargetInfluences[0] = w;
        mesh.rotation.y = s * 0.5 + px * 1.2;
        mesh.rotation.x = 0.4 + py * 0.8;
        mesh.position.y = Math.sin(s * 1.1) * 0.08;
        shadow.scale.setScalar(1 - mesh.position.y * 0.3);
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a shape morph in Three.js using real morph targets. Start from SphereGeometry(1, 96, 64). For every vertex compute a rounded-cube target by dividing the vertex by its L8 norm: n = (|x|^8 + |y|^8 + |z|^8)^(1/8), target = v / n * 0.92. Compute the matching target normal analytically as the normalised gradient (sign(x)*|x/n|^7, same for y and z) so lighting stays correct mid-morph - computeVertexNormals would leave seams on the sphere. Assign geometry.morphAttributes.position = [new Float32BufferAttribute(targetPositions, 3)] and geometry.morphAttributes.normal = [new Float32BufferAttribute(targetNormals, 3)] BEFORE creating the Mesh, then drive mesh.morphTargetInfluences[0] between 0 and 1. Use a 6s loop with smoothstep easing: hold the sphere, morph over 1.4s, hold the cube, morph back. Material: MeshPhysicalMaterial in your accent blue with clearcoat 1 and light iridescence. Keep it rotating (so the cube corners swing around), floating, and easing toward the pointer, with a contact shadow plane. RoomEnvironment lighting, ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, hold the sphere under prefers-reduced-motion, dispose everything on unmount.`,
  });

  ML.add({
    id: 'three-objects-flag',
    cat: 'three-objects',
    title: 'Waving flag',
    sub: 'Cloth ripples on a pole in the wind',
    libs: ['three'],
    html: HTML,
    css: CSS,
    run: (root, lib) => {
      const { THREE, RoomEnvironment } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const pmrem = new THREE.PMREMGenerator(renderer);
      const envRT = pmrem.fromScene(new RoomEnvironment(), 0.04);
      scene.environment = envRT.texture;
      let dead = false;
      const clamp01 = (x) => Math.min(1, Math.max(0, x));
      const eio = (x) => {
        x = clamp01(x);
        return x * x * (3 - 2 * x);
      };
      const outBack = (x) => {
        x = clamp01(x) - 1;
        return 1 + 2.2 * x * x * x + 1.2 * x * x;
      };
      const persp = (fov, x, y, z) => {
        const c = new THREE.PerspectiveCamera(fov, 1, 0.1, 80);
        c.position.set(x, y, z);
        return c;
      };
      const sun = (x, y, z, i) => {
        const l = new THREE.DirectionalLight(0xffffff, i);
        l.position.set(x, y, z);
        scene.add(l);
        return l;
      };
      const mkTex = (w, h, draw) => {
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const g = c.getContext('2d');
        draw(g, w, h);
        const t = new THREE.CanvasTexture(c);
        t.colorSpace = THREE.SRGBColorSpace;
        t.anisotropy = 4;
        t.redraw = () => {
          g.clearRect(0, 0, w, h);
          draw(g, w, h);
          t.needsUpdate = true;
        };
        return t;
      };
      const shadowAt = (w, d, y, a) => {
        const t = mkTex(128, 128, (g) => {
          const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          gr.addColorStop(0, 'rgba(10,60,140,' + a + ')');
          gr.addColorStop(1, 'rgba(10,60,140,0)');
          g.fillStyle = gr;
          g.fillRect(0, 0, 128, 128);
        });
        const m = new THREE.Mesh(
          new THREE.PlaneGeometry(w, d),
          new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false })
        );
        m.rotation.x = -Math.PI / 2;
        m.position.y = y;
        scene.add(m);
        return m;
      };
      let bd = null;
      const backdrop = () => {
        const t = mkTex(256, 256, (g, w, h) => {
          g.fillStyle = '#ffffff';
          g.fillRect(0, 0, w, h);
          g.save();
          g.translate(w * 0.62, h * 0.38);
          g.scale(w * 0.7, h * 0.6);
          const gr = g.createRadialGradient(0, 0, 0, 0, 0, 1);
          gr.addColorStop(0, '#e3efff');
          gr.addColorStop(0.55, '#f6f9ff');
          gr.addColorStop(1, '#ffffff');
          g.fillStyle = gr;
          g.fillRect(-2, -2, 4, 4);
          g.restore();
        });
        bd = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: t, toneMapped: false }));
        bd.position.z = -5;
        scene.add(bd);
        return bd;
      };
      const camera = persp(30, 0.2, 0.1, 7.4);
      scene.environmentIntensity = 0.8;
      sun(2, 2, 5, 2.4);

      const tex = mkTex(512, 340, (g, w, h) => {
        const gr = g.createLinearGradient(0, 0, w, h);
        gr.addColorStop(0, '#FF7A3D');
        gr.addColorStop(1, '#FF4433');
        g.fillStyle = gr;
        g.fillRect(0, 0, w, h);
        g.fillStyle = 'rgba(255,255,255,.16)';
        g.beginPath();
        g.moveTo(0, h);
        g.lineTo(w * 0.45, h);
        g.lineTo(w, h * 0.3);
        g.lineTo(w, 0);
        g.closePath();
        g.fill();
        g.strokeStyle = '#ffffff';
        g.lineWidth = 14;
        g.beginPath();
        g.arc(w / 2, h / 2, 84, 0, Math.PI * 2);
        g.stroke();
        g.fillStyle = '#ffffff';
        g.beginPath();
        g.arc(w / 2, h / 2, 34, 0, Math.PI * 2);
        g.fill();
      });
      const W = 3;
      const H = 1.9;
      const geo = new THREE.PlaneGeometry(W, H, 60, 36);
      geo.translate(W / 2, 0, 0);
      const pos = geo.attributes.position;
      const base = Float32Array.from(pos.array);
      const cloth = new THREE.Mesh(
        geo,
        new THREE.MeshStandardMaterial({ map: tex, side: THREE.DoubleSide, roughness: 0.55, metalness: 0 })
      );
      const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.045, 0.05, 2.5, 16),
        new THREE.MeshStandardMaterial({ color: 0xdfe6f1, metalness: 0.9, roughness: 0.2 })
      );
      pole.position.y = -0.25;
      const knob = new THREE.Mesh(new THREE.SphereGeometry(0.09, 20, 14), pole.material);
      knob.position.y = 1.0;
      cloth.position.y = 0.0;
      const flag = new THREE.Group();
      flag.add(cloth, pole, knob);
      flag.position.x = -1.5;
      scene.add(flag);

      const update = (s, px, py) => {
        for (let i = 0; i < pos.count; i++) {
          const x = base[i * 3];
          const y = base[i * 3 + 1];
          const k = x / W;
          const z = (0.08 + 0.3 * k) * Math.sin(x * 3.2 - s * 3.4 + y * 0.9) + 0.07 * k * Math.sin(x * 7.1 - s * 5.2 - y * 1.7);
          pos.setXYZ(i, x - k * k * 0.12 * Math.sin(s * 3.4 - x), y - k * 0.08 + Math.sin(x * 2 - s * 2.4) * 0.03 * k, z);
        }
        pos.needsUpdate = true;
        geo.computeVertexNormals();
        flag.rotation.y = -0.25 + px * 0.6;
        flag.rotation.x = py * 0.2;
      };
      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        } else {
          fit(w, h);
        }
        if (bd) {
          const hh = Math.tan((camera.fov * Math.PI) / 360) * (camera.position.z - bd.position.z) * 2.1;
          bd.scale.set(hh * camera.aspect, hh, 1);
          bd.position.y = camera.position.y;
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      // pointer steers the object; when idle, an autoplay path takes over after 2.5s
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

      const t0 = performance.now();
      let raf = 0;
      const loop = (t) => {
        raf = requestAnimationFrame(loop);
        if (root.dataset.paused) return;
        const s = (t - t0) / 1000;
        if (t > userUntil) {
          tx = Math.sin(s * 0.6) * 0.35;
          ty = Math.cos(s * 0.45) * 0.2;
        }
        px += (tx - px) * 0.06;
        py += (ty - py) * 0.06;
        update(s, px, py);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        dead = true;
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        scene.traverse((o) => {
          if (o.geometry) o.geometry.dispose();
          const ms = Array.isArray(o.material) ? o.material : o.material ? [o.material] : [];
          ms.forEach((m) => {
            for (const k in m) if (m[k] && m[k].isTexture) m[k].dispose();
            m.dispose();
          });
          if (o.isInstancedMesh) o.dispose();
        });
        envRT.dispose();
        pmrem.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a waving flag in Three.js. Cloth: PlaneGeometry(3, 1.9, 60, 36) translated so its left edge sits on x = 0 (the pole), MeshStandardMaterial with a CanvasTexture (blue gradient, a soft diagonal sheen shape, a white ring and dot as a generic emblem; colorSpace SRGBColorSpace), side DoubleSide, roughness 0.55. Keep a copy of the base positions and each frame set z = (0.05 + 0.22*k) * sin(x*3.2 - t*3.4 + y*0.9) + 0.07*k*sin(x*7.1 - t*5.2 - y*1.7) where k = x / width, so the cloth is pinned at the pole and ripples harder toward the free edge; pull the free edge in slightly and let it droop with k. After updating, set position.needsUpdate and call computeVertexNormals() every frame so the lighting follows the folds (about 2,300 vertices, cheap enough). Pole: a thin metallic CylinderGeometry with a sphere finial. Light with a strong DirectionalLight from the front-right plus a RoomEnvironment at 0.8 intensity so the folds read clearly. Ease the flag's rotation toward the pointer. ACESFilmicToneMapping, setPixelRatio(Math.min(devicePixelRatio, 2)), ResizeObserver, pause offscreen, calm the amplitude under prefers-reduced-motion, dispose all resources on unmount.`,
  });

})();
