// three-shaders cards (Three.js). Full-screen ShaderMaterial surfaces plus two vertex-displaced meshes.
// Three.js r186.
(() => {
  ML.add({
    id: 'three-shaders-mesh-flow',
    cat: 'three-shaders',
    title: 'Flowing gradient mesh',
    sub: 'Soft colour points drift and blend',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Payments</p><h3>Move money<br>at the speed of light.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:rgba(255,255,255,.85)}.d h3{color:#fff;text-shadow:0 1px 16px rgba(10,58,156,.35)}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec2 p = aspP(vUv); float a = asp(); float t = uTime * 0.16;
  p += 0.16 * vec2(fbm(p * 1.4 + t) - 0.5, fbm(p * 1.4 - t + 7.0) - 0.5);
  vec3 col = vec3(0.0); float ws = 0.0;
  for (int i = 0; i < 6; i++) {
    float fi = float(i);
    vec2 c = vec2(sin(t * (0.7 + 0.13 * fi) + fi * 2.1) * 0.62 * a, cos(t * (0.6 + 0.11 * fi) + fi * 1.7) * 0.45);
    if (i == 5) c = (uPtr - 0.5) * vec2(a, 1.0) * 0.9;
    float w = exp(-dot(p - c, p - c) * 7.5);
    vec3 cc = C2;
    float k = 1.0;
    if (i == 0) { cc = C1; k = 0.9; }
    if (i == 1) { cc = C3; k = 1.3; }
    if (i == 2) { cc = C0; k = 0.55; }
    if (i == 3) { cc = W; k = 1.4; }
    if (i == 4) { cc = C2; }
    if (i == 5) { cc = C1; k = 0.8; }
    col += cc * w * k; ws += w * k;
  }
  col /= max(ws, 0.001);
  col += (hash(gl_FragCoord.xy) - 0.5) * 0.012;
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a flowing gradient mesh hero background in the style of modern payments sites. Render one full-screen quad with a Three.js ShaderMaterial: six soft colour points (your accent, a lighter tint, white and a deep shade) orbit slowly on sin/cos paths, and each pixel blends them by weight = exp(-distance squared * 7.5), normalised by the weight sum so the colours melt together without banding. Warp the sample position with a two-octave value-noise fbm so the shapes feel liquid, and add about 1 percent hash noise as dither. Drive time with a uTime uniform at roughly 0.16 speed so it is calm. Bind one of the points to the eased pointer (lerp factor 0.07) so the colour follows the cursor; when the pointer is idle for 2.5s let it drift on a slow loop. Put a bold white headline over it with a faint text shadow for contrast and make sure the text still passes contrast against the darkest area. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-liquid-chrome',
    cat: 'three-shaders',
    title: 'Liquid chrome',
    sub: 'A blue-silver metal surface ripples',
    libs: ['three'],
    html: `<div class="gl"></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
float hh(vec2 p) {
  float t = uTime * 0.11;
  vec2 q = vec2(fbm(p + t), fbm(p + vec2(5.2, 1.3) - t));
  return fbm(p * 0.6 + q * 0.9 + vec2(0.0, t));
}
void main() {
  vec2 p = aspP(vUv) * 0.85 + (uPtr - 0.5) * 0.5;
  float e = 0.02;
  float h0 = hh(p); float hx = hh(p + vec2(e, 0.0)); float hy = hh(p + vec2(0.0, e));
  vec3 n = normalize(vec3((h0 - hx) / e * 0.3, (h0 - hy) / e * 0.3, 1.0));
  vec3 r = reflect(vec3(0.0, 0.0, -1.0), n);
  float b = r.y * 2.0 + r.x * 1.0 + h0 * 0.6;
  float s = 0.5 + 0.5 * sin(b);
  vec3 steel = vec3(0.35, 0.52, 0.80);
  vec3 silver = vec3(0.80, 0.87, 0.96);
  vec3 col = mix(C0 * 0.9, steel, smoothstep(0.0, 0.35, s));
  col = mix(col, silver, smoothstep(0.3, 0.7, s));
  col = mix(col, W, smoothstep(0.8, 1.0, s));
  float spec = pow(max(dot(n, normalize(vec3(-0.4, 0.6, 0.7))), 0.0), 36.0);
  col += spec * 0.45;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a liquid chrome surface as a hero background. Use one full-screen Three.js quad with a ShaderMaterial. In the fragment shader compute a height field h(p) = fbm(p * 1.1 + warp * 1.8 + time) where the warp is two more fbm samples (5 octaves max, value noise). Get a surface normal by finite differences: sample h at p, p+(e,0) and p+(0,e) with e = 0.02 and build n = normalize(vec3(dh/dx * 0.3, dh/dy * 0.3, 1)). Reflect a view vector off n and use 2.0 * reflected.y + 1.0 * reflected.x + 0.6 * h as the index of a banded ramp: sin(index) mapped through deep blue, steel blue, silver, then white, plus a tight specular term pow(dot(n, light), 36). Move time slowly (0.11) so it feels heavy. Offset p by the eased pointer so the metal shifts under the cursor; autoplay a slow drift when idle for 2.5s. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-aurora',
    cat: 'three-shaders',
    title: 'Aurora curtains',
    sub: 'Light ribbons fold across a deep sky',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Night mode</p><h3>Quiet light.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:#FFF0ED}.d h3{color:#fff}.d .copy{top:9%;bottom:auto}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
float curtain(vec2 p, float k, float t) {
  float x = p.x * 1.3 + k * 3.1;
  float w = fbm(vec2(x * 0.8, t * 0.12 + k)) * 2.0 - 1.0;
  float edge = -0.16 + 0.17 * sin(x * 1.5 + t * 0.25 + k * 2.0) + w * 0.2 + k * 0.05 + (uPtr.y - 0.5) * 0.1 * (1.0 + k);
  float d = p.y - edge;
  float lower = smoothstep(-0.05, 0.0, d);
  float fall = exp(-max(d, 0.0) * (2.0 + k * 0.8));
  float rays = 0.45 + 0.55 * noise(vec2(x * 13.0 + k * 9.0, t * 0.25));
  return lower * fall * rays;
}
void main() {
  vec2 p = aspP(vUv); float t = uTime;
  p.x += (uPtr.x - 0.5) * 0.35;
  vec3 sky = mix(vec3(0.016, 0.1, 0.32), C0, smoothstep(0.5, -0.55, p.y));
  sky = mix(sky, C1 * 0.9, smoothstep(-0.2, -0.6, p.y) * 0.55);
  vec3 col = sky;
  col += curtain(p, 0.0, t) * mix(C2, C3, 0.35) * 1.15;
  col += curtain(p + vec2(0.0, 0.1), 1.0, t) * C2 * 0.95;
  col += curtain(p + vec2(0.0, -0.08), 2.0, t) * C3 * 0.85;
  vec2 sc = vUv * vec2(160.0, 120.0);
  vec2 sid = floor(sc);
  float star = step(0.9965, hash(sid)) * smoothstep(0.36, 0.0, length(fract(sc) - 0.5)) * (0.5 + 0.5 * sin(t * 1.5 + hash(sid + 7.0) * 20.0));
  col += star * 0.5 * smoothstep(-0.1, 0.4, p.y);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an aurora background: soft light ribbons folding across a deep blue night sky. Use a full-screen Three.js quad with a ShaderMaterial. For each of three curtains compute x = uv.x * 1.3 + offset, an edge curve edge(x) = 0.2 * sin(x * 1.5 + time * 0.25) plus an fbm wobble, and d = y - edge. The curtain is lower = smoothstep(-0.05, 0.0, d) (a crisp glowing underside) times exp(-max(d, 0) * 2.6) (a long fade upward) times vertical rays = 0.45 + 0.55 * noise(vec2(x * 13.0, time * 0.25)). Add the curtains onto a navy-to-deep-blue sky gradient using sky-blue and pale-blue tints (never green or purple for this palette), and sprinkle a few twinkling hash-based stars. Shift the curtains with the eased pointer; drift on autoplay when idle for 2.5s. Put a white headline in the empty upper area. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-noise-blob',
    cat: 'three-shaders',
    title: 'Noise blob',
    sub: 'A sphere breathes with a bright rim',
    libs: ['three'],
    html: `<div class="bg"></div><div class="sh"></div><div class="gl"></div><div class="copy"><p class="k">Organic</p><h3>Alive, not static.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .bg{background:radial-gradient(75% 65% at 50% 42%,#e3efff 0%,#f4f8ff 55%,#fff 100%)}
.d .sh{position:absolute;left:50%;bottom:11%;width:46%;height:7%;transform:translateX(-50%);background:radial-gradient(closest-side,rgba(10,58,156,.28),rgba(10,58,156,0));filter:blur(2px)}
.d .copy{left:6%;bottom:8%}.d .k{color:var(--ml-accent)}.d h3{color:var(--ml-ink);font-size:18px}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `uniform float uTime;
uniform float uAmp;
varying vec3 vN;
varying vec3 vV;
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float n3(vec3 x) {
  vec3 i = floor(x); vec3 f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1.0, 0.0, 0.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 0.0)), h3(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
             mix(mix(h3(i + vec3(0.0, 0.0, 1.0)), h3(i + vec3(1.0, 0.0, 1.0)), f.x), mix(h3(i + vec3(0.0, 1.0, 1.0)), h3(i + vec3(1.0, 1.0, 1.0)), f.x), f.y), f.z);
}
float disp(vec3 p) {
  return (n3(p * 1.4 + vec3(0.0, uTime * 0.3, 0.0)) * 0.7 + n3(p * 2.9 - vec3(uTime * 0.2, 0.0, 0.0)) * 0.3 - 0.5) * uAmp;
}
void main() {
  vec3 n0 = normalize(position);
  vec3 t1 = normalize(cross(n0, abs(n0.y) < 0.99 ? vec3(0.0, 1.0, 0.0) : vec3(1.0, 0.0, 0.0)));
  vec3 t2 = cross(n0, t1);
  float e = 0.03;
  vec3 a1 = normalize(n0 + t1 * e); vec3 a2 = normalize(n0 + t2 * e);
  vec3 p0 = n0 * (1.0 + disp(n0));
  vec3 p1 = a1 * (1.0 + disp(a1));
  vec3 p2 = a2 * (1.0 + disp(a2));
  vec3 nn = normalize(cross(p1 - p0, p2 - p0));
  vN = normalize(normalMatrix * nn);
  vec4 mv = modelViewMatrix * vec4(p0, 1.0);
  vV = -mv.xyz;
  gl_Position = projectionMatrix * mv;
}`;
      const FRAG = `varying vec3 vN;
varying vec3 vV;
uniform float uTime;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
void main() {
  vec3 n = normalize(vN); vec3 v = normalize(vV);
  float ndv = clamp(dot(n, v), 0.0, 1.0);
  float fr = pow(1.0 - ndv, 2.4);
  vec3 L = normalize(vec3(-0.5, 0.75, 0.65));
  float diff = clamp(dot(n, L) * 0.5 + 0.5, 0.0, 1.0);
  vec3 col = mix(C0, C1, smoothstep(0.1, 0.65, diff));
  col = mix(col, C2, smoothstep(0.6, 1.0, diff) * 0.8);
  vec3 h = normalize(L + v);
  col += pow(clamp(dot(n, h), 0.0, 1.0), 60.0) * 0.55;
  col = mix(col, C3, fr * 0.85);
  col += fr * fr * 0.25;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) },
          uAmp: { value: 0.36 }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
      camera.position.set(0, 0, 6.2);
      const geo = new THREE.IcosahedronGeometry(1, 28);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.scale.setScalar(1.12);
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        mesh.rotation.y = acc * 0.14 + (px - 0.5) * 1.3;
        mesh.rotation.x = -(py - 0.5) * 0.7;
        mesh.position.y = Math.sin(acc * 0.9) * 0.05 + 0.08;
        U.uAmp.value = 0.34 + 0.12 * Math.sin(acc * 0.6) + Math.min(0.2, Math.hypot(px - 0.5, py - 0.5) * 0.3);
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a living noise blob with Three.js: an IcosahedronGeometry(1, 28) (about 17k triangles) with a custom ShaderMaterial. In the vertex shader displace each vertex along its normal by two octaves of 3D value noise that scroll with time (amplitude uniform around 0.35). To keep lighting smooth, rebuild the normal analytically: displace two neighbouring points (the normalised position nudged along two tangents by 0.03), then take the cross product of the differences. Pass the view-space normal and view vector to the fragment shader and shade with a deep-to-accent blue ramp from a soft key light, a tight specular, and a fresnel rim = pow(1 - dot(n, v), 2.4) mixed towards pale blue so the edge glows. Add a gradient-plane contact shadow underneath. Rotate slowly and ease the rotation toward the pointer (lerp 0.07), and let the amplitude breathe with a slow sin; autoplay when idle for 2.5s. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-pointer-ripple',
    cat: 'three-shaders',
    title: 'Pointer ripples',
    sub: 'Water rings spread from the cursor',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Touch</p><h3>Move to make waves.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:var(--ml-accent-ink)}.d h3{color:var(--ml-ink);font-size:18px}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const taps = [];
      for (let i = 0; i < 8; i++) taps.push(new THREE.Vector3(0.5, 0.5, -99));
      let ti = 0, lastTap = -9, idleNext = 0.4, lx = 0.5, ly = 0.5;
      const tap = (x, y) => { taps[ti % 8].set(x, y, U.uTime.value); ti++; lastTap = U.uTime.value; };
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
uniform vec3 uR[8];
float height(vec2 p) {
  float h = 0.0;
  for (int i = 0; i < 8; i++) {
    float age = uTime - uR[i].z;
    if (age < 0.0 || age > 4.5) continue;
    vec2 c = (uR[i].xy - 0.5) * vec2(asp(), 1.0);
    float x = length(p - c) - age * 0.3;
    float wave = sin(x * 52.0) * exp(-x * x * 140.0) * exp(-age * 0.8);
    h += wave / (1.0 + length(p - c) * 3.0);
  }
  return h;
}
void main() {
  vec2 p = aspP(vUv);
  float e = 0.004;
  float h0 = height(p);
  vec2 g = vec2(height(p + vec2(e, 0.0)) - h0, height(p + vec2(0.0, e)) - h0) / e;
  vec2 uv2 = vUv + g * 0.004;
  vec3 col = mix(C3, C2, smoothstep(0.1, 1.0, uv2.y * 0.8 + uv2.x * 0.3));
  col = mix(col, W, smoothstep(0.55, 1.0, 1.0 - uv2.y) * 0.5);
  vec3 n = normalize(vec3(-g * 0.06, 1.0));
  float diff = dot(n, normalize(vec3(-0.4, 0.6, 0.7)));
  col = mix(col, C1, clamp(0.5 - diff * 0.9 + 0.2, 0.0, 1.0) * 0.35 * smoothstep(0.0, 0.2, abs(h0) * 4.0));
  col += pow(max(diff, 0.0), 22.0) * 0.45;
  col += h0 * 0.18;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) },
          uR: { value: taps }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        if (now < userUntil) {
          if (Math.hypot(tx - lx, ty - ly) > 0.012 && acc - lastTap > 0.09) tap(tx, ty);
        } else if (acc > idleNext) {
          tap(0.2 + Math.random() * 0.6, 0.25 + Math.random() * 0.5);
          idleNext = acc + 0.8 + Math.random() * 0.9;
        }
        lx = tx; ly = ty;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a pointer-driven water ripple surface as a hero background. Use a full-screen Three.js quad with a ShaderMaterial and a uniform array of up to 8 ripples, each a vec3 (x, y, start time). On pointermove (throttled to one ripple per 90ms and only when the pointer moved at least about 1 percent of the stage) write the pointer position and the current time into the next slot of a ring buffer. In the fragment shader sum for each live ripple (age under 4.5s): a wave packet wave = sin(x * 52) * exp(-x*x * 140) * exp(-age * 0.8) where x = distance - age * 0.3, divided by (1 + distance * 3). Get the slope by finite differences of that height function and use it to refract the background gradient (offset the lookup by slope * 0.004), shade a soft specular from the normal, and lightly tint crests. When the pointer is idle for 2.5s spawn a random tap every 0.8-1.7s so it plays itself. Keep the loop at 8 iterations. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-sine-field',
    cat: 'three-shaders',
    title: 'Wave lines',
    sub: 'Thin sine lines ride through a field',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Signal</p><h3>Fine lines, steady rhythm.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:var(--ml-accent)}.d h3{color:var(--ml-ink);font-size:18px}.d .copy{top:9%;bottom:auto;padding:6px 10px;margin:-6px -10px;background:rgba(255,255,255,.85);border-radius:10px}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec2 uv = vUv; float t = uTime;
  float xa = uv.x * asp() / 1.33;
  float px = 1.6 / uRes.y;
  vec3 col = vec3(1.0);
  col = mix(col, C3, (1.0 - uv.y) * 0.18);
  for (int i = 0; i < 30; i++) {
    float f = float(i) / 29.0;
    float env = 0.35 + 0.65 * sin(uv.x * 3.14159);
    float amp = (0.05 + 0.1 * sin(f * 3.14159)) * env;
    float bump = exp(-pow((uv.x - uPtr.x) * 3.2, 2.0)) * (uPtr.y - 0.5) * 0.28 * (1.0 - abs(f - 0.5) * 1.5);
    float y = 0.5 + (f - 0.5) * 0.72
      + amp * sin(xa * (4.5 + f * 3.5) + t * (0.45 + f * 0.35) + f * 6.0)
      + amp * 0.5 * sin(xa * 9.0 - t * 0.6 + f * 11.0)
      + bump;
    float d = abs(uv.y - y);
    float l = 1.0 - smoothstep(px * 0.5, px * 1.7, d);
    vec3 lc = mix(C0, C2, f);
    col = mix(col, lc, l * (0.35 + 0.65 * sin(f * 3.14159)));
  }
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a field of thin animated sine lines as a hero background, entirely in a fragment shader. Use a full-screen Three.js quad with a ShaderMaterial. Loop over 30 lines (f = i / 29): each line has y(x) = 0.5 + (f - 0.5) * 0.72 + amp * sin(x * (4.5 + f * 3.5) + time * (0.45 + f * 0.35) + f * 6) + a smaller second harmonic, with amp = (0.05 + 0.1 * sin(f * pi)) * an envelope that is lower near the left and right edges. Draw each line from its vertical distance d = abs(uv.y - y) with an anti-aliased smoothstep about 1.6 device pixels wide, colouring from deep blue to your accent across the stack and fading the outer lines. On a pale to white background. A Gaussian bump around the eased pointer x lifts nearby lines by the pointer y; when idle for 2.5s the field simply keeps flowing. Put a short headline in the quiet corner. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-grain-gradient',
    cat: 'three-shaders',
    title: 'Grain gradient',
    sub: 'A slow gradient with film grain',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Studio</p><h3>Textured on purpose.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:var(--ml-ink);opacity:.72}.d h3{color:var(--ml-ink)}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec2 p = aspP(vUv); float t = uTime * 0.07;
  vec2 q = p + (uPtr - 0.5) * 0.3;
  float v = 0.5 + 0.5 * sin(q.x * 1.5 + q.y * 1.9 + fbm(q * 1.3 + t) * 3.4 + t * 6.0);
  vec3 col = mix(C3, C2, smoothstep(0.05, 0.7, v));
  col = mix(col, C1, smoothstep(0.7, 1.0, v) * 0.75);
  col = mix(W, col, smoothstep(-0.3, 0.6, vUv.y * 1.2 - 0.25 + v * 0.45));
  float g = hash(gl_FragCoord.xy + vec2(floor(uTime * 16.0) * 17.31, floor(uTime * 16.0) * 5.7)) - 0.5;
  float mid = 1.0 - abs(v - 0.5) * 1.2;
  col += g * (0.14 + 0.16 * mid);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a grainy gradient background, the soft print-like kind used on studio sites. Use a full-screen Three.js quad with a ShaderMaterial. Compute a field v = 0.5 + 0.5 * sin(x * 1.5 + y * 1.9 + fbm(p * 1.3 + t) * 3.4 + t * 6) with t = time * 0.07 so the bands warp very slowly, then map v through pale blue, accent blue and a touch of deep blue, and wash the lower-left toward white with a smoothstep. The grain is the point: add hash(gl_FragCoord.xy + frameSeed) - 0.5 scaled by 0.14 to 0.30, stronger in the mid-tones, and change frameSeed 16 times per second (floor(time * 16)) so it flickers like film instead of crawling. Offset the field by the eased pointer by about 0.3 units; drift on autoplay when idle for 2.5s. Overlay a dark headline in a calm sans face. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-caustics',
    cat: 'three-shaders',
    title: 'Underwater caustics',
    sub: 'Shimmering light nets on the pool floor',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Pool</p><h3>Light on water.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:#FFF0ED}.d h3{color:#fff;text-shadow:0 1px 12px rgba(10,58,156,.4)}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
float caustic(vec2 uv, float t) {
  vec2 p = mod(uv * 6.28318, 6.28318) - 250.0;
  vec2 i = p; float c = 1.0; float inten = 0.0065;
  for (int n = 0; n < 5; n++) {
    float tt = t * (1.0 - (3.5 / float(n + 1)));
    i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
    c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
  }
  c /= 5.0; c = 1.17 - pow(c, 1.4);
  return pow(abs(c), 8.0);
}
void main() {
  vec2 p = aspP(vUv);
  vec2 q = p * 0.75 + (uPtr - 0.5) * 0.25;
  float t = uTime * 0.45 + 23.0;
  float c = caustic(q, t);
  float c2 = caustic(q * 1.35 + 0.37, t * 1.15 + 3.0);
  float cc = clamp(c + c2 * 0.6, 0.0, 1.6);
  vec3 water = mix(C1, C0, smoothstep(0.2, -0.6, p.y) * 0.9 + 0.1);
  water = mix(water, C2, smoothstep(-0.1, 0.7, p.y) * 0.45);
  vec3 col = water + cc * mix(C3, W, 0.4) * 0.8;
  col = mix(col, W, smoothstep(1.0, 1.7, cc) * 0.35);
  col *= 1.0 - dot(p, p) * 0.18;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an underwater caustics background. Use a full-screen Three.js quad with a ShaderMaterial. The caustic pattern is the classic tileable iteration: p = mod(uv * 2pi, 2pi) - 250, then 5 iterations of i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x)) with tt = time * (1 - 3.5 / (n + 1)), accumulating c += 1 / length(vec2(p.x / (sin(i.x + tt) / 0.0065), p.y / (cos(i.y + tt) / 0.0065))); finish with c = 1.17 - pow(c / 5, 1.4) and pow(abs(c), 8). Layer a second scaled copy at a different speed for depth. Colour: a blue water body that darkens toward the bottom and brightens at the top, with the caustic lines added in pale blue and a little white where they overlap. Add a gentle vignette. Nudge the sample position with the eased pointer; autoplay when idle for 2.5s. Keep time slow (0.45) so it shimmers instead of boils. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-image-displace',
    cat: 'three-shaders',
    title: 'Hover distortion',
    sub: 'An image bulges and ripples at the cursor',
    libs: ['three'],
    html: `<div class="gl"></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      const cv = document.createElement('canvas');
      cv.width = 800; cv.height = 600;
      const cx = cv.getContext('2d');
      const drawImg = (withText) => {
        const sky = cx.createLinearGradient(0, 0, 0, 600);
        sky.addColorStop(0, '#FFF0ED'); sky.addColorStop(0.55, '#8FC0FF'); sky.addColorStop(1, '#FF7A3D');
        cx.fillStyle = sky; cx.fillRect(0, 0, 800, 600);
        const sun = cx.createRadialGradient(560, 210, 0, 560, 210, 190);
        sun.addColorStop(0, 'rgba(255,255,255,1)'); sun.addColorStop(0.3, 'rgba(255,255,255,.85)'); sun.addColorStop(1, 'rgba(255,255,255,0)');
        cx.fillStyle = sun; cx.fillRect(0, 0, 800, 600);
        cx.fillStyle = '#fff'; cx.beginPath(); cx.arc(560, 210, 54, 0, 6.2832); cx.fill();
        const ridge = (y0, amp, col, ph) => {
          cx.fillStyle = col; cx.beginPath(); cx.moveTo(0, 600);
          for (let x = 0; x <= 800; x += 20) cx.lineTo(x, y0 + Math.sin(x * 0.011 + ph) * amp + Math.sin(x * 0.027 + ph * 2) * amp * 0.45);
          cx.lineTo(800, 600); cx.closePath(); cx.fill();
        };
        ridge(380, 46, '#FFC2B3', 0.4); ridge(440, 52, '#FF7A3D', 1.9); ridge(500, 40, '#FF4433', 3.3); ridge(556, 26, '#0A3A9C', 5.0);
        cx.fillStyle = 'rgba(255,255,255,.7)';
        [[90, 120, 170], [260, 70, 120], [120, 200, 110]].forEach((c) => { cx.beginPath(); cx.roundRect(c[0], c[1], c[2], 14, 7); cx.fill(); });
        if (withText) {
          cx.fillStyle = '#fff'; cx.font = '600 84px Geist, system-ui, sans-serif'; cx.textBaseline = 'alphabetic';
          cx.fillText('Wander', 64, 508); cx.font = '600 84px Geist, system-ui, sans-serif';
        }
      };
      drawImg(false);
      const tex = new THREE.CanvasTexture(cv);
      tex.minFilter = THREE.LinearFilter;
      tex.generateMipmaps = false;
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { drawImg(true); tex.needsUpdate = true; });
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
uniform sampler2D uTex;
uniform float uTexAsp;
void main() {
  vec2 uv = vUv; float a = asp();
  vec2 s = a > uTexAsp ? vec2(1.0, uTexAsp / a) : vec2(a / uTexAsp, 1.0);
  vec2 d = (uv - uPtr) * vec2(a, 1.0);
  float r = length(d);
  float fall = exp(-r * r * 6.0);
  vec2 dir = d / max(r, 0.0001);
  vec2 off = -d * fall * 0.55 + dir * sin(r * 30.0 - uTime * 3.5) * fall * 0.02;
  off /= vec2(a, 1.0);
  vec2 tuv = (uv - 0.5) * s + 0.5;
  vec3 col = 0.5 * (texture2D(uTex, tuv + off * 1.12).rgb + texture2D(uTex, tuv + off * 0.88).rgb);
  col += fall * 0.05;
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) },
          uTex: { value: tex }, uTexAsp: { value: 4 / 3 }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        tex.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an image hover distortion effect. Draw (or load) your image into a 2D canvas, wrap it in a THREE.CanvasTexture with LinearFilter and no mipmaps, and show it on a full-screen Three.js quad with a ShaderMaterial, using a cover-fit UV remap so any aspect ratio fills the frame. In the fragment shader take d = (uv - pointer) * vec2(aspect, 1), r = length(d) and fall = exp(-r*r * 6). Offset the texture lookup by -d * fall * 0.55 (a lens bulge) plus a radial ripple dir * sin(r * 30 - time * 3.5) * fall * 0.02, and average two taps at 1.12x and 0.88x the offset so edges soften slightly near the lens (avoid per-channel RGB splits here, they add pink and green fringes that break a blue palette). Ease the pointer uniform toward the mouse (lerp 0.07) so the lens glides; when idle for 2.5s move it along a slow Lissajous path. Wait for document.fonts.ready before drawing any text into the canvas, and flag texture.needsUpdate afterward. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-glass-refraction',
    cat: 'three-shaders',
    title: 'Ribbed glass pane',
    sub: 'Fluted glass bends a gradient behind it',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Material</p><h3>Frosted, fluted, clear.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:var(--ml-accent-ink)}.d h3{color:var(--ml-ink);font-size:18px}.d .copy{left:6%;bottom:8%}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
vec3 backdrop(vec2 uv) {
  vec2 p = (uv - 0.5) * vec2(asp(), 1.0); float t = uTime * 0.18;
  vec3 c = mix(C3, W, smoothstep(0.0, 1.0, uv.y * 0.8 + 0.1));
  c = mix(c, C1, exp(-dot(p - vec2(-0.35 + 0.25 * sin(t), 0.1 + 0.1 * cos(t * 1.3)), p - vec2(-0.35 + 0.25 * sin(t), 0.1 + 0.1 * cos(t * 1.3))) * 6.0) * 0.95);
  vec2 q = p - vec2(0.3 + 0.2 * cos(t * 0.9), -0.15 + 0.15 * sin(t));
  c = mix(c, C2, exp(-dot(q, q) * 7.0) * 0.9);
  vec2 r = p - vec2(0.05 + 0.15 * sin(t * 1.4), 0.3);
  c = mix(c, C0, exp(-dot(r, r) * 22.0) * 0.8);
  float band = smoothstep(0.06, 0.0, abs(p.x * 0.6 + p.y - 0.12 + 0.1 * sin(t)));
  c = mix(c, W, band * 0.6);
  return c;
}
float sdb(vec2 p, vec2 b, float r) { vec2 q = abs(p) - b + r; return length(max(q, vec2(0.0))) + min(max(q.x, q.y), 0.0) - r; }
void main() {
  vec2 uv = vUv; vec2 p = aspP(uv);
  float cx = (uPtr.x - 0.5) * 0.35 * asp();
  vec2 pc = p - vec2(cx, 0.0);
  float d = sdb(pc, vec2(0.34 * asp() * 0.9 + 0.04, 0.34), 0.05);
  vec3 col = backdrop(uv);
  float ribs = 22.0;
  float gx = pc.x * ribs;
  float loc = fract(gx) - 0.5;
  float inside = 1.0 - smoothstep(-0.004, 0.004, d);
  float shift = loc * 0.06;
  vec2 uvr = uv; uvr.x -= shift;
  vec3 g;
  g.r = backdrop(uvr + vec2(0.006, 0.0)).r;
  g.g = backdrop(uvr).g;
  g.b = backdrop(uvr - vec2(0.006, 0.0)).b;
  g = mix(g, W, 0.1);
  g *= 1.0 - smoothstep(0.35, 0.5, abs(loc)) * 0.16;
  g += smoothstep(0.42, 0.5, loc) * 0.12;
  g += pow(max(0.0, 1.0 - abs(loc + 0.28) * 4.0), 3.0) * 0.18;
  float shadow = smoothstep(0.1, 0.0, d) * (1.0 - inside) * 0.14;
  col = mix(col * (1.0 - shadow), g, inside);
  col += (1.0 - smoothstep(0.0, 0.012, abs(d + 0.006))) * 0.35;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a ribbed (fluted) glass pane that refracts a colourful gradient behind it. Use a full-screen Three.js quad with a ShaderMaterial. First write backdrop(uv): a pale-to-white base with four drifting Gaussian blobs (accent blue, sky blue, deep blue, plus a white diagonal band), all moving on slow sin/cos paths. Draw a rounded-rectangle pane with a signed distance function. Inside it compute a rib coordinate loc = fract(x * 22) - 0.5 and look the backdrop up at uv.x - loc * 0.06 so each rib behaves like a cylinder lens, sampling red, green and blue with a small 0.006 split for chromatic dispersion. Darken the rib edges slightly, add a thin highlight on one side of each rib, a 1px bright rim and a soft shadow outside the pane. Slide the pane horizontally with the eased pointer; drift on autoplay when idle for 2.5s. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-iridescent-film',
    cat: 'three-shaders',
    title: 'Iridescent film',
    sub: 'Thin-film colour on a bending sheet',
    libs: ['three'],
    html: `<div class="bg"></div><div class="gl"></div><div class="copy"><p class="k">Finish</p><h3>Colour from nothing.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .bg{background:radial-gradient(80% 70% at 50% 40%,#f4f8ff 0%,#FFF0EE 60%,#FFF2ED 100%)}
.d .k{color:var(--ml-accent)}.d h3{color:var(--ml-ink);font-size:18px}.d .copy{left:6%;bottom:8%}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `uniform float uTime;
uniform vec2 uPtr;
varying vec3 vN;
varying vec3 vV;
varying vec2 vUv;
float bend(vec2 q) {
  float t = uTime * 0.32;
  vec2 pp = (uPtr - 0.5) * vec2(3.4, 2.4);
  return 0.34 * sin(q.x * 1.5 + t) * cos(q.y * 1.3 - t * 0.8) + 0.12 * sin(q.x * 3.1 - t * 1.3 + q.y) + 0.32 * exp(-dot(q - pp, q - pp) * 1.4);
}
void main() {
  vec3 p = position; float e = 0.02;
  float z = bend(p.xy); float zx = bend(p.xy + vec2(e, 0.0)); float zy = bend(p.xy + vec2(0.0, e));
  vec3 n = normalize(vec3(-(zx - z) / e, -(zy - z) / e, 1.0));
  p.z = z;
  vN = normalMatrix * n;
  vec4 mv = modelViewMatrix * vec4(p, 1.0);
  vV = -mv.xyz;
  vUv = uv;
  gl_Position = projectionMatrix * mv;
}`;
      const FRAG = `varying vec3 vN;
varying vec3 vV;
varying vec2 vUv;
uniform float uTime;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
void main() {
  vec3 n = normalize(vN); if (!gl_FrontFacing) n = -n;
  vec3 v = normalize(vV);
  float c = clamp(dot(n, v), 0.0, 1.0);
  float th = 0.2 + 1.1 * (1.0 - c) + 0.5 * noise(vUv * vec2(3.0, 2.2) + uTime * 0.05);
  vec3 ir = 0.5 + 0.5 * cos(6.28318 * (th * vec3(1.0, 1.12, 1.26) * 1.5 + vec3(0.0, 0.08, 0.16)));
  vec3 col = mix(vec3(0.86, 0.91, 0.98), C3, ir.r);
  col = mix(col, C2, ir.g * 0.55);
  col = mix(col, C1, ir.b * ir.b * ir.b * 0.4);
  col = mix(col, W, smoothstep(0.55, 1.0, ir.r * ir.g) * 0.55);
  col += pow(1.0 - c, 3.0) * 0.3;
  vec3 h = normalize(normalize(vec3(-0.4, 0.7, 0.8)) + v);
  col += pow(clamp(dot(n, h), 0.0, 1.0), 50.0) * 0.5;
  float edge = smoothstep(0.0, 0.02, vUv.x) * smoothstep(1.0, 0.98, vUv.x) * smoothstep(0.0, 0.03, vUv.y) * smoothstep(1.0, 0.97, vUv.y);
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), edge);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 50);
      camera.position.set(0, 0, 5.4);
      mat.transparent = true;
      mat.side = THREE.DoubleSide;
      mat.depthWrite = false;
      const geo = new THREE.PlaneGeometry(3.6, 2.5, 64, 44);
      const mesh = new THREE.Mesh(geo, mat);
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        mesh.rotation.y = -0.35 + (px - 0.5) * 0.5;
        mesh.rotation.x = 0.12 - (py - 0.5) * 0.35;
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an iridescent thin-film sheet that bends slowly in space. In Three.js use a PlaneGeometry (3.6 x 2.5, 64 x 44 segments) with a ShaderMaterial, transparent, DoubleSide, depthWrite off, under a PerspectiveCamera. Vertex shader: displace z with a sum of two travelling sines plus a Gaussian bump under the pointer, and rebuild the normal from finite differences of that function (e = 0.02). Fragment shader: estimate film thickness th = 0.3 + 0.9 * (1 - dot(n, v)) + 0.45 * noise(uv * 3 + time * 0.05), then colour = 0.5 + 0.5 * cos(2pi * (th * vec3(1.0, 1.12, 1.26) * 1.5 + vec3(0, 0.08, 0.16))). Instead of showing the rainbow, map the three channels through a silver, pale-blue, sky and accent blue ramp so only cool shimmer remains, add a fresnel sheen and a small specular, and fade alpha near the sheet edges. Tilt the sheet toward the eased pointer; autoplay when idle for 2.5s over a pale gradient backdrop. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-halftone',
    cat: 'three-shaders',
    title: 'Halftone gradient',
    sub: 'A moving gradient printed as dots',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Print</p><h3>Dots that move.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:var(--ml-accent)}.d h3{color:var(--ml-ink);font-size:18px}.d .copy{top:9%;bottom:auto;padding:6px 10px;margin:-6px -10px;background:rgba(255,255,255,.82);border-radius:10px}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
mat2 rot(float a) { return mat2(cos(a), sin(a), -sin(a), cos(a)); }
void main() {
  vec2 p = aspP(vUv); float rows = 30.0;
  vec2 g = rot(-0.7854) * p * rows;
  vec2 cell = floor(g) + 0.5;
  vec2 pc = rot(0.7854) * cell / rows;
  vec2 pp = (uPtr - 0.5) * vec2(asp(), 1.0);
  float v = 0.5 + 0.5 * sin(pc.x * 2.6 + sin(pc.y * 2.2 + uTime * 0.5) * 1.3 - uTime * 0.5);
  v = v * 0.8 + 0.1 * (pc.y + 0.5);
  v += exp(-dot(pc - pp, pc - pp) * 7.0) * 0.55;
  v = clamp(v, 0.0, 1.0);
  float r = sqrt(v) * 0.64;
  float d = length(fract(g) - 0.5);
  float aa = max(fwidth(d), 0.02);
  float dotm = 1.0 - smoothstep(r - aa, r + aa, d);
  vec3 ink = mix(C2, C0, smoothstep(0.35, 1.0, v));
  vec3 col = mix(vec3(1.0), ink, dotm);
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a halftone gradient background where a moving field is rendered as a dot screen. Use a full-screen Three.js quad with a ShaderMaterial. Rotate the coordinate space by 45 degrees and scale to about 30 rows: g = rot(-45deg) * p * 30; the cell is floor(g) + 0.5 and the cell centre in screen space is rot(45deg) * cell / 30. Evaluate a value field at that centre only: v = 0.5 + 0.5 * sin(x * 2.6 + sin(y * 2.2 + time * 0.5) * 1.3 - time * 0.5), plus a Gaussian bump at the eased pointer. The dot radius is sqrt(v) * 0.64 (area proportional to tone); coverage = 1 - smoothstep(r - aa, r + aa, length(fract(g) - 0.5)) with aa = max(fwidth(d), 0.02). Ink goes from sky blue to deep blue as v rises, on white paper. Autoplay the pointer on a slow path when idle for 2.5s. Keep any overlay text on a white plate so the dots never fight the type. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-voronoi',
    cat: 'three-shaders',
    title: 'Soft cells',
    sub: 'Drifting voronoi cells with pale seams',
    libs: ['three'],
    html: `<div class="gl"></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec2 p = aspP(vUv) * 3.4;
  vec2 pp = (uPtr - 0.5) * vec2(asp(), 1.0) * 3.4;
  vec2 i = floor(p); vec2 f = fract(p);
  float d1 = 8.0; float d2 = 8.0; vec2 cid = vec2(0.0); vec2 cpos = vec2(0.0);
  for (int y = -1; y <= 1; y++) {
    for (int x = -1; x <= 1; x++) {
      vec2 o = vec2(float(x), float(y));
      vec2 h = vec2(hash(i + o), hash(i + o + 17.3));
      vec2 pt = 0.5 + 0.42 * sin(uTime * 0.5 + 6.2831 * h);
      float d = length(o + pt - f);
      if (d < d1) { d2 = d1; d1 = d; cid = i + o; cpos = i + o + pt; }
      else if (d < d2) { d2 = d; }
    }
  }
  float hid = hash(cid + 3.7);
  vec3 tint = mix(C3, C2, hid);
  tint = mix(tint, C1, step(0.8, hid) * 0.8);
  vec3 col = mix(tint, W, smoothstep(0.1, 0.8, d1) * 0.35);
  float near = exp(-dot(cpos - pp, cpos - pp) * 0.7);
  col = mix(col, C0, near * 0.5);
  float edge = 1.0 - smoothstep(0.0, 0.07, d2 - d1);
  col = mix(col, W, edge * 0.92);
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build a soft voronoi cell background. Use a full-screen Three.js quad with a ShaderMaterial. Scale the aspect-corrected coordinate by about 3.4, take floor/fract, and scan the 3 x 3 neighbourhood: each neighbour's feature point is 0.5 + 0.42 * sin(time * 0.5 + 6.2831 * hash2(cell)), so the points drift without leaving their cell. Track the nearest distance d1, second nearest d2, and the nearest cell id/position. Fill each cell with a tint picked by hash(cellId) from pale blue to sky blue (about one in five in accent blue), lightened toward white far from the cell centre, and draw seams as 1 - smoothstep(0.0, 0.07, d2 - d1) in white at about 90 percent. Darken cells whose feature point is near the eased pointer so the cursor leaves a soft trail; autoplay the pointer on a slow path when idle for 2.5s. Nine iterations per pixel, no other loops. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-topo-lines',
    cat: 'three-shaders',
    title: 'Topographic lines',
    sub: 'Contour lines ride a shifting terrain',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Terrain</p><h3>Contours in motion.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:var(--ml-accent)}.d h3{color:var(--ml-ink);font-size:18px}.d .copy{padding:6px 10px;margin:-6px -10px;background:rgba(255,255,255,.85);border-radius:10px}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
float terrain(vec2 p, vec2 pp) {
  return fbm(p * 1.25 + vec2(uTime * 0.045, -uTime * 0.03)) + 0.38 * exp(-dot(p - pp, p - pp) * 5.0);
}
void main() {
  vec2 p = aspP(vUv);
  vec2 pp = (uPtr - 0.5) * vec2(asp(), 1.0);
  float h = terrain(p, pp);
  float x = h * 15.0;
  float w = max(fwidth(x), 0.0001);
  float line = 1.0 - smoothstep(0.0, 1.5, abs(fract(x - 0.5) - 0.5) / w);
  float x5 = x / 5.0;
  float w5 = max(fwidth(x5), 0.0001);
  float major = 1.0 - smoothstep(0.0, 1.9, abs(fract(x5 - 0.5) - 0.5) / w5);
  vec3 col = mix(vec3(1.0), C3, smoothstep(0.3, 0.9, h) * 0.55);
  col = mix(col, C2, line * 0.6);
  col = mix(col, C0, major * 0.85);
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build an animated topographic contour background in a fragment shader. Use a full-screen Three.js quad with a ShaderMaterial. Define a height field h(p) = fbm(p * 1.25 + slow drift) (5 octaves of value noise) plus a Gaussian hill at the eased pointer. Contours come from x = h * 15: the line mask is 1 - smoothstep(0, 1.5, abs(fract(x - 0.5) - 0.5) / fwidth(x)), which keeps the stroke about one device pixel wide at any zoom. Repeat the idea at x / 5 for an index contour every fifth line, thicker and in deep blue, while the regular lines are sky blue. Tint the high ground very lightly with pale blue on a white background. Drift is slow (0.045) so the map breathes. Autoplay the pointer hill on a slow loop when idle for 2.5s. If you put text over it, set it on a white plate for contrast. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
  ML.add({
    id: 'three-shaders-fbm-smoke',
    cat: 'three-shaders',
    title: 'Rising smoke',
    sub: 'Soft smoke drifts up behind the headline',
    libs: ['three'],
    html: `<div class="gl"></div><div class="copy"><p class="k">Calm</p><h3>Light as air.</h3></div>`,
    css: `
.d .bg{position:absolute;inset:0}
.d .gl{position:absolute;inset:0}
.d .gl canvas{display:block;width:100%;height:100%}
.d .copy{position:absolute;left:7%;bottom:9%;pointer-events:none}
.d .k{font:600 9px/1 var(--ml-mono);letter-spacing:.08em;text-transform:uppercase}
.d h3{margin-top:6px;font:600 22px/1 var(--ml-font);letter-spacing:-.04em}
.d .k{color:#FFF0ED}.d h3{color:#fff;text-shadow:0 1px 14px rgba(10,58,156,.45)}.d .copy{top:9%;bottom:auto}`,
    run: (root, lib) => {
      const { THREE } = lib;
      const host = root.querySelector('.gl');
      const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
      renderer.setPixelRatio(lib.pixelRatio);
      host.appendChild(renderer.domElement);
      const scene = new THREE.Scene();
      
      const VERT = `varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
      const FRAG = `varying vec2 vUv;
uniform float uTime;
uniform vec2 uRes;
uniform vec2 uPtr;
const vec3 C0 = vec3(0.039, 0.227, 0.612);
const vec3 C1 = vec3(0.039, 0.424, 1.0);
const vec3 C2 = vec3(0.31, 0.64, 1.0);
const vec3 C3 = vec3(0.812, 0.89, 1.0);
const vec3 W = vec3(1.0);
float asp() { return uRes.x / uRes.y; }
vec2 aspP(vec2 uv) { return (uv - 0.5) * vec2(asp(), 1.0); }
float hash(vec2 p) { p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p) {
  vec2 i = floor(p); vec2 f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p) {
  float a = 0.5; float s = 0.0;
  for (int i = 0; i < 5; i++) { s += a * noise(p); p = p * 2.03 + vec2(17.1, 9.2); a *= 0.5; }
  return s;
}
void main() {
  vec2 uv = vUv; float a = asp(); float t = uTime;
  vec2 q = vec2(uv.x * a * 1.5 + (uPtr.x - 0.5) * 0.6, uv.y * 1.3 - t * 0.1);
  float w1 = fbm(q + vec2(0.0, 1.3));
  float w2 = fbm(q * 1.6 + w1 * 1.7 + vec2(3.0, -t * 0.07));
  float mask = smoothstep(1.05, 0.0, uv.y);
  float dens = smoothstep(0.26, 0.7, w2 * 1.25 * (0.65 + 0.6 * mask));
  vec3 bg = mix(C0, C1, smoothstep(0.0, 1.0, uv.y * 0.9 + 0.15 * w1));
  vec3 sm = mix(C3, W, w1);
  vec3 col = mix(bg, sm, dens * 0.92);
  col = mix(col, C2, (1.0 - dens) * smoothstep(0.55, 0.0, uv.y) * 0.22);
  gl_FragColor = vec4(col, 1.0);
}`;
      const U = {
        uTime: { value: 0 },
          uRes: { value: new THREE.Vector2(1, 1) },
          uPtr: { value: new THREE.Vector2(0.5, 0.5) }
      };
      const mat = new THREE.ShaderMaterial({ uniforms: U, vertexShader: VERT, fragmentShader: FRAG });
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geo = new THREE.PlaneGeometry(2, 2);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.frustumCulled = false;
      scene.add(mesh);

      const size = () => {
        const w = root.clientWidth || 1;
        const h = root.clientHeight || 1;
        renderer.setSize(w, h, false);
        U.uRes.value.set(w, h);
        if (camera.isPerspectiveCamera) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
        }
      };
      size();
      const ro = new ResizeObserver(size);
      ro.observe(root);

      let tx = 0.5, ty = 0.5, px = 0.5, py = 0.5, userUntil = 0;
      const onMove = (e) => {
        const r = root.getBoundingClientRect();
        tx = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
        ty = Math.min(1, Math.max(0, 1 - (e.clientY - r.top) / r.height));
        userUntil = performance.now() + 2500;
      };
      root.addEventListener('pointermove', onMove);

      const auto = (s) => [0.5 + 0.28 * Math.sin(s * 0.5), 0.5 + 0.2 * Math.cos(s * 0.37)];
      let acc = 0;
      let last = performance.now();
      let raf = 0;
      const loop = (now) => {
        raf = requestAnimationFrame(loop);
        const dt = Math.min(0.05, (now - last) / 1000);
        last = now;
        if (root.dataset.paused) return;
        acc += dt;
        if (now > userUntil) {
          const a = auto(acc);
          tx = a[0];
          ty = a[1];
        }
        px += (tx - px) * 0.07;
        py += (ty - py) * 0.07;
        U.uTime.value = acc;
        U.uPtr.value.set(px, py);
        
        renderer.render(scene, camera);
      };
      raf = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(raf);
        ro.disconnect();
        root.removeEventListener('pointermove', onMove);
        geo.dispose();
        mat.dispose();
        
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    },
    prompt: `Build soft smoke drifting upward behind a headline. Use a full-screen Three.js quad with a ShaderMaterial. Sample coordinates q = (uv.x * aspect * 1.5 + pointerOffset, uv.y * 1.3 - time * 0.1) so the pattern scrolls upward. Domain-warp twice: w1 = fbm(q), w2 = fbm(q * 1.6 + w1 * 1.7 + vec2(3, -time * 0.07)), with 5 octaves of value noise at most. Convert w2 to density with smoothstep(0.34, 0.82, ...) scaled by a mask that is stronger near the bottom, so the smoke thickens where it is born and thins as it climbs. Colour: a deep-to-accent blue gradient behind, and a white-to-pale-blue smoke mixed in at about 80 percent density. Push the smoke sideways a little with the eased pointer x; autoplay a slow side drift when idle for 2.5s. Keep the headline white in the thin top area and check contrast. Use three from a pinned CDN import map, size the canvas with a ResizeObserver, call setPixelRatio(Math.min(devicePixelRatio, 2)), pause the render loop when offscreen (IntersectionObserver), dispose the geometry, material and renderer on unmount, and for prefers-reduced-motion render one still frame instead of looping.`,
  });
})();
