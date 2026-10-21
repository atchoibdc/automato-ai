// Libraries a card may declare with `libs: ['three']`. One source of truth for:
//  - the page: loads `bundle` (a vendored classic script, works from file:// and the live site) once,
//    then passes `window[global]` to run(root, lib) - only when a card that needs it mounts
//  - "Copy code": writes an import map + ES module imports from the pinned CDN build, so the
//    copied file runs anywhere on its own
// exports: name on `lib` -> [module specifier, export name | '*']
window.ML_LIBS = {
  three: {
    label: 'Three.js',
    version: '0.186.1',
    bundle: 'vendor/three-0.186.1.js',
    global: 'MLThree',
    importmap: {
      three: 'https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.min.js',
      'three/addons/': 'https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/',
    },
    exports: {
      THREE: ['three', '*'],
      OrbitControls: ['three/addons/controls/OrbitControls.js', 'OrbitControls'],
      RoomEnvironment: ['three/addons/environments/RoomEnvironment.js', 'RoomEnvironment'],
      EffectComposer: ['three/addons/postprocessing/EffectComposer.js', 'EffectComposer'],
      RenderPass: ['three/addons/postprocessing/RenderPass.js', 'RenderPass'],
      UnrealBloomPass: ['three/addons/postprocessing/UnrealBloomPass.js', 'UnrealBloomPass'],
      OutputPass: ['three/addons/postprocessing/OutputPass.js', 'OutputPass'],
      ShaderPass: ['three/addons/postprocessing/ShaderPass.js', 'ShaderPass'],
      AfterimagePass: ['three/addons/postprocessing/AfterimagePass.js', 'AfterimagePass'],
      RoundedBoxGeometry: ['three/addons/geometries/RoundedBoxGeometry.js', 'RoundedBoxGeometry'],
      SimplexNoise: ['three/addons/math/SimplexNoise.js', 'SimplexNoise'],
      MeshSurfaceSampler: ['three/addons/math/MeshSurfaceSampler.js', 'MeshSurfaceSampler'],
      GPUComputationRenderer: ['three/addons/misc/GPUComputationRenderer.js', 'GPUComputationRenderer'],
      BufferGeometryUtils: ['three/addons/utils/BufferGeometryUtils.js', '*'],
    },
  },
  // GSAP 3.15.0 (2026-04-13). Standard "no charge" license: use on any website is permitted; the
  // only ban is visual no-code animation builders. Cards register the plugins they use
  // (gsap.registerPlugin) and revert a gsap.context() in cleanup - one gsap instance is shared.
  gsap: {
    label: 'GSAP',
    version: '3.15.0',
    bundle: 'vendor/gsap-3.15.0.js',
    global: 'MLGsap',
    importmap: {
      gsap: 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/index.js',
      'gsap/': 'https://cdn.jsdelivr.net/npm/gsap@3.15.0/',
    },
    exports: {
      gsap: ['gsap', 'gsap'],
      ScrollTrigger: ['gsap/ScrollTrigger.js', 'ScrollTrigger'],
      ScrollToPlugin: ['gsap/ScrollToPlugin.js', 'ScrollToPlugin'],
      Observer: ['gsap/Observer.js', 'Observer'],
      SplitText: ['gsap/SplitText.js', 'SplitText'],
      ScrambleTextPlugin: ['gsap/ScrambleTextPlugin.js', 'ScrambleTextPlugin'],
      TextPlugin: ['gsap/TextPlugin.js', 'TextPlugin'],
      DrawSVGPlugin: ['gsap/DrawSVGPlugin.js', 'DrawSVGPlugin'],
      MorphSVGPlugin: ['gsap/MorphSVGPlugin.js', 'MorphSVGPlugin'],
      MotionPathPlugin: ['gsap/MotionPathPlugin.js', 'MotionPathPlugin'],
      Flip: ['gsap/Flip.js', 'Flip'],
      Draggable: ['gsap/Draggable.js', 'Draggable'],
      InertiaPlugin: ['gsap/InertiaPlugin.js', 'InertiaPlugin'],
      CustomEase: ['gsap/CustomEase.js', 'CustomEase'],
    },
  },
  // Lenis 1.3.26 (2026-08-05), MIT. Cards scroll their own wrapper/content, never the page,
  // and call lenis.destroy() in cleanup.
  lenis: {
    label: 'Lenis',
    version: '1.3.26',
    bundle: 'vendor/lenis-1.3.26.js',
    global: 'MLLenis',
    importmap: { lenis: 'https://cdn.jsdelivr.net/npm/lenis@1.3.26/dist/lenis.mjs' },
    exports: { Lenis: ['lenis', 'default'] },
  },
};
