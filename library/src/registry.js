// Card registry. Each src/cards/<cat>.js calls ML.add({...}) when it loads (on demand, per section).
window.ML = {
  cards: [],
  byId: {},
  add(card) {
    this.cards.push(card);
    this.byId[card.id] = card;
  },
};

// Sections, in order.
window.ML_CATEGORIES = [
  { id: 'hero', name: 'Hero sections', blurb: 'The first screen. Headlines, product shots and openers that set the tone.', target: 30 },
  { id: 'nav', name: 'Navigation', blurb: 'Headers, menus, tab bars and the bars that follow you down the page.', target: 20 },
  { id: 'scroll', name: 'Scroll patterns', blurb: 'What happens between the top and the bottom of the page.', target: 22 },
  { id: 'text', name: 'Text and typography', blurb: 'Headlines that arrive, words that change, type that moves.', target: 26 },
  { id: 'buttons', name: 'Buttons and CTAs', blurb: 'Press, hover and success states for the things people click.', target: 22 },
  { id: 'cards', name: 'Cards and features', blurb: 'Feature blocks, bento tiles and the surfaces that hold content.', target: 24 },
  { id: 'media', name: 'Galleries and media', blurb: 'Images, carousels, lightboxes and players.', target: 16 },
  { id: 'proof', name: 'Logos and social proof', blurb: 'Logo walls, ratings, counters and trust signals.', target: 10 },
  { id: 'testimonials', name: 'Testimonials', blurb: 'Quotes, reviews and customer stories.', target: 12 },
  { id: 'pricing', name: 'Pricing', blurb: 'Plans, toggles and calculators.', target: 10 },
  { id: 'stats', name: 'Stats and numbers', blurb: 'Counters, charts and progress that make numbers land.', target: 10 },
  { id: 'faq', name: 'FAQ and accordions', blurb: 'Questions, answers and things that open and close.', target: 8 },
  { id: 'forms', name: 'Forms and inputs', blurb: 'Fields, toggles, validation and submit states.', target: 14 },
  { id: 'overlays', name: 'Modals, toasts and drawers', blurb: 'Layers that appear above the page.', target: 12 },
  { id: 'loaders', name: 'Loaders and skeletons', blurb: 'What people see while they wait.', target: 12 },
  { id: 'transitions', name: 'Page transitions', blurb: 'Moving from one view to the next.', target: 10 },
  { id: 'backgrounds', name: 'Backgrounds', blurb: 'Ambient surfaces behind the content.', target: 20 },
  { id: 'cursor', name: 'Cursor and pointer', blurb: 'Effects that follow the mouse.', target: 10 },
  { id: 'footer', name: 'Footers', blurb: 'The last thing on the page.', target: 8 },
  { id: 'three-objects', name: '3D objects', blurb: 'Hero objects, product shots and sculpted forms rendered live with Three.js.', target: 20 },
  { id: 'three-particles', name: '3D particles', blurb: 'Points, swarms and morphing clouds that hold thousands of moving parts.', target: 12 },
  { id: 'three-shaders', name: 'Shaders and gradients', blurb: 'GPU-drawn surfaces: flowing gradients, liquid, noise and light.', target: 15 },
  { id: 'three-interactive', name: 'Interactive 3D', blurb: 'Scenes that answer the pointer: turn, drag, hover and click.', target: 12 },
  { id: 'three-scroll', name: '3D scroll scenes', blurb: 'Award-site scroll: cameras that fly, products that come apart, worlds that change as you scroll.', target: 15 },
  { id: 'gsap-scroll', name: 'ScrollTrigger', blurb: 'Pinned stories, scrubbed timelines, horizontal tracks and reveals tied to the scrollbar.', target: 18 },
  { id: 'gsap-text', name: 'Text with GSAP', blurb: 'Split, scrambled, typed and staggered headlines with frame-perfect timing.', target: 12 },
  { id: 'gsap-svg', name: 'SVG motion', blurb: 'Lines that draw themselves, shapes that morph and objects that ride a path.', target: 12 },
  { id: 'gsap-flip', name: 'Flip layouts', blurb: 'Layout changes that glide: grids reorder, cards expand, items move between lists.', target: 8 },
  { id: 'gsap-drag', name: 'Drag and throw', blurb: 'Draggable sliders, knobs and decks with momentum, snapping and bounds.', target: 8 },
  { id: 'lenis', name: 'Smooth scroll', blurb: 'Weighted, buttery scroll with Lenis: velocity effects, eased jumps, horizontal tracks and synced scenes.', target: 14 },
  // App screens: `screen: true` = a full app screen on a 1024x768 canvas, exported as a full-page app.
  { id: 'app-shells', name: 'App shells', blurb: 'The frame every app screen lives in: sidebars, rails, top bars and split panes.', target: 8, screen: true },
  { id: 'app-auth', name: 'Login and signup', blurb: 'Sign in, sign up, codes, passkeys and every screen before the app opens.', target: 14, screen: true },
  { id: 'app-onboarding', name: 'Onboarding', blurb: 'First-run flows that set up a workspace and get people to their first win.', target: 10, screen: true },
  { id: 'app-settings', name: 'Settings and account', blurb: 'Profile, billing, team, security and the pages people manage their account on.', target: 10, screen: true },
  { id: 'app-states', name: 'Empty and error states', blurb: 'Empty, error, offline and paywall screens that keep people moving.', target: 12, screen: true },
  { id: 'app-dashboards', name: 'Dashboards', blurb: 'Analytics, KPIs and charts for SaaS products and internal tools.', target: 12, screen: true },
  { id: 'app-industry', name: 'Industry dashboards', blurb: 'Dashboards shaped for a trade: retail, real estate, clinics, restaurants and more.', target: 14, screen: true },
  { id: 'app-crm', name: 'CRM and sales', blurb: 'Pipelines, contacts, deals and conversations for sales teams.', target: 10, screen: true },
  { id: 'app-portals', name: 'Client portals', blurb: 'Where clients log in: projects, files, invoices, bookings and approvals.', target: 12, screen: true },
  { id: 'app-commerce', name: 'Commerce', blurb: 'Product, cart, checkout, orders and the admin behind a store.', target: 10, screen: true },
  { id: 'app-data', name: 'Tables and boards', blurb: 'Tables, boards, calendars, timelines and file browsers for working data.', target: 12, screen: true },
  { id: 'app-inbox', name: 'Inbox and chat', blurb: 'Email, team chat, notifications and comment threads.', target: 8, screen: true },
  { id: 'app-ai', name: 'AI apps', blurb: 'Chat with sources, agents at work, generators and AI writing tools.', target: 10, screen: true },
  { id: 'app-editors', name: 'Builders and editors', blurb: 'Docs, forms, pages, workflows and canvases people build things in.', target: 8, screen: true },
  { id: 'app-mobile', name: 'Mobile apps', blurb: 'Phone app screens: full-bleed on a phone, framed on a desktop.', target: 24, screen: true },
  // Mobile components: regular 4:3 cards showing a phone close-up. `live: true` = taps stay in the demo
  // (like app screens); the expand button opens the preview.
  { id: 'mobile-nav', name: 'Bottom navigation', blurb: 'Tab bars for phone apps: sliding pills, notches, center buttons and bars that hide, shrink and morph.', target: 20, live: true },
  { id: 'mobile-gestures', name: 'Mobile gestures', blurb: 'Sheets, swipes, pull to refresh, pickers and the touch patterns phone apps run on.', target: 16, live: true },
];
