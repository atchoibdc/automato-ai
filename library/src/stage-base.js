// Base styles for every demo stage. Injected into each card's shadow root AND into the
// "Copy code" export, so a demo looks the same in both places. Demos use these tokens.
window.ML_STAGE_BASE = `.d{
  --ml-bg:#FFFFFF;
  --ml-surface:#FAF6F2;
  --ml-line:#EAE1D9;
  --ml-bar:#E2D6CC;
  --ml-bar-2:#EFE7E0;
  --ml-ink:#1D1D1F;
  --ml-ink-2:#424245;
  --ml-muted:#86868B;
  --ml-accent:#FF4433;
  --ml-accent-2:#FF7A3D;
  --ml-accent-ink:#B3150F;
  --ml-accent-soft:#FFF0EE;
  --ml-accent-line:#FFD0CA;
  --ml-grad:linear-gradient(135deg,#FF4433 0%,#FF7A3D 100%);
  --ml-shadow:0 1px 2px rgba(35,15,10,.06),0 8px 24px rgba(35,15,10,.08);
  --ml-shadow-lg:0 2px 4px rgba(35,15,10,.06),0 18px 40px rgba(35,15,10,.14);
  --ml-ease:cubic-bezier(.32,.72,0,1);
  --ml-spring:linear(0, 0.0941 5.6%, 0.2736 11.1%, 0.4548 16.7%, 0.6076 22.2%, 0.7255 27.8%, 0.8119 33.3%, 0.8732 38.9%, 0.9156 44.4%, 0.9444 50.0%, 0.9636 55.6%, 0.9764 61.1%, 0.9848 66.7%, 0.9902 72.2%, 0.9938 77.8%, 0.9960 83.3%, 0.9975 88.9%, 0.9984 94.4%, 1 100%);
  --ml-spring-dur:587ms;
  --ml-bounce:linear(0, 0.0833 5.6%, 0.2603 11.1%, 0.4566 16.7%, 0.6331 22.2%, 0.7737 27.8%, 0.8759 33.3%, 0.9442 38.9%, 0.9858 44.4%, 1.0081 50.0%, 1.0178 55.6%, 1.0199 61.1%, 1.0180 66.7%, 1.0143 72.2%, 1.0104 77.8%, 1.0070 83.3%, 1.0043 88.9%, 1.0023 94.4%, 1 100%);
  --ml-bounce-dur:594ms;
  --ml-font:"Inter",-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif;
  --ml-mono:"JetBrains Mono",ui-monospace,"SF Mono",Menlo,Consolas,monospace;
  position:relative;width:100%;height:100%;overflow:hidden;
  background:var(--ml-bg);color:var(--ml-ink);
  font:500 12px/1.35 var(--ml-font);
  -webkit-font-smoothing:antialiased;
}
.d *,.d *::before,.d *::after{box-sizing:border-box;margin:0;padding:0}
.d button,.d input,.d select,.d textarea{font:inherit;color:inherit}
.d[data-paused],.d[data-paused] *,.d[data-paused] *::before,.d[data-paused] *::after{animation-play-state:paused!important}
`;

// App screens (categories with `screen: true`): added after the base for those cards only, on the page
// and in the export. `.d` is a size container named "scr", so a screen adapts with
// `@container scr (max-width: 760px) { .d ... }` - in the grid (1024px canvas) and in the full-page
// export alike. The grid adds its own fit rule (fixed 1024x768 canvas scaled by --k), never exported.
window.ML_SCREEN_BASE = `.d{container:scr / inline-size;font-size:14px;line-height:1.45;background:var(--ml-surface)}
`;
