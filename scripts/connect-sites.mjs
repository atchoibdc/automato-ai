import fs from 'node:fs';

const autoIndex = 'C:/laragon/www/automato-ai/index.html';
const autoCreator = 'C:/laragon/www/automato-ai/creator.html';
const autoCss = 'C:/laragon/www/automato-ai/css/style.css';

console.log('--- Connecting Automato AI to UI Library & Wireframe Builder ---');

// 0. Rename any previously injected "Motion Library" labels to "UI Library"
for (const file of [autoIndex, autoCreator, autoCss]) {
  if (!fs.existsSync(file)) continue;
  const before = fs.readFileSync(file, 'utf8');
  const after = before
    .replace(/Motion Library/g, 'UI Library')
    .replace(/650\+ Motion Modules/g, '650+ UI Modules');
  if (after !== before) {
    fs.writeFileSync(file, after, 'utf8');
    console.log(`✓ Renamed Motion Library → UI Library in ${file}`);
  }
}

// 1. Update index.html
if (fs.existsSync(autoIndex)) {
  let html = fs.readFileSync(autoIndex, 'utf8');

  // Nav links
  const oldNav = `<nav class="nav-links" id="navLinks" aria-label="Primary">
      <a href="#services">Services</a>
      <a href="#automation">Automation</a>
      <a href="#process">Process</a>
      <a href="#work">Work</a>
      <a href="#contact" class="btn btn-small">Let's grow something</a>
    </nav>`;

  const newNav = `<nav class="nav-links" id="navLinks" aria-label="Primary">
      <a href="#services">Services</a>
      <a href="#automation">Automation</a>
      <a href="#process">Process</a>
      <a href="#work">Work</a>
      <a href="http://localhost:3000/" class="nav-highlight">Library</a>
      <a href="http://localhost:3000/builder.html" class="nav-highlight">Builder</a>
      <a href="creator.html">Creator</a>
      <a href="#contact" class="btn btn-small">Let's grow something</a>
    </nav>`;

  if (html.includes(oldNav)) {
    html = html.replace(oldNav, newNav);
    console.log('✓ Updated nav in automato-ai/index.html');
  } else if (!html.includes('http://localhost:3000/')) {
    html = html.replace(/(<nav class="nav-links"[^>]*>[\s\S]*?)(<a href="#contact")/i, `$1<a href="http://localhost:3000/" class="nav-highlight">Library</a>\n      <a href="http://localhost:3000/builder.html" class="nav-highlight">Builder</a>\n      <a href="creator.html">Creator</a>\n      $2`);
    console.log('✓ Updated nav (regex fallback) in automato-ai/index.html');
  }

  // Hero CTA addition
  if (!html.includes('http://localhost:3000/')) {
    html = html.replace(/(<div class="hero-cta[^>]*>[\s\S]*?)(<\/div>)/i, `$1  <a href="http://localhost:3000/" class="btn btn-ghost" style="border-color:rgba(126,224,90,0.35);color:var(--leaf)">650+ UI Modules</a>\n          $2`);
    console.log('✓ Added UI Modules button to hero CTA');
  }

  // Footer links
  if (!html.includes('class="footer-links"')) {
    const footerOld = `<footer class="footer">
    <div class="container footer-inner">
      <a href="#top" class="logo"><span>AUTO<b>MATO</b></span></a>`;
    const footerNew = `<footer class="footer">
    <div class="container footer-inner">
      <a href="#top" class="logo"><span>AUTO<b>MATO</b></span></a>
      <div class="footer-links">
        <a href="http://localhost:3000/">UI Library (650+)</a>
        <a href="http://localhost:3000/builder.html">Wireframe Builder</a>
        <a href="creator.html">Creator</a>
      </div>`;
    if (html.includes(footerOld)) {
      html = html.replace(footerOld, footerNew);
      console.log('✓ Added footer links to automato-ai/index.html');
    }
  }

  fs.writeFileSync(autoIndex, html, 'utf8');
}

// 2. Update creator.html
if (fs.existsSync(autoCreator)) {
  let html = fs.readFileSync(autoCreator, 'utf8');

  if (!html.includes('http://localhost:3000/')) {
    html = html.replace(/(<a href="creator\.html"[^>]*>Creator<\/a>)/i, `$1\n      <a href="http://localhost:3000/" class="nav-highlight">Library</a>\n      <a href="http://localhost:3000/builder.html" class="nav-highlight">Builder</a>`);
    console.log('✓ Updated nav in automato-ai/creator.html');
  }

  if (!html.includes('class="footer-links"')) {
    html = html.replace(/(<a href="[^"]*" class="logo"><span>AUTO<b>MATO<\/b><\/span><\/a>)/i, `$1\n      <div class="footer-links">\n        <a href="index.html">Home</a>\n        <a href="http://localhost:3000/">UI Library</a>\n        <a href="http://localhost:3000/builder.html">Wireframe Builder</a>\n      </div>`);
    console.log('✓ Added footer links in automato-ai/creator.html');
  }

  fs.writeFileSync(autoCreator, html, 'utf8');
}

// 3. Update style.css for footer links & nav-highlight
if (fs.existsSync(autoCss)) {
  let css = fs.readFileSync(autoCss, 'utf8');
  if (!css.includes('.footer-links')) {
    css += `\n/* Connected UI Library links */
.footer-links { display: flex; align-items: center; gap: 20px; font-size: 0.95rem; }
.footer-links a { color: var(--muted); transition: color .2s var(--ease); }
.footer-links a:hover { color: var(--tomato); }
.nav-links a.nav-highlight { position: relative; color: var(--text); }
.nav-links a.nav-highlight::after { background: var(--grad-leaf) !important; }
`;
    fs.writeFileSync(autoCss, css, 'utf8');
    console.log('✓ Added footer-links CSS to automato-ai/css/style.css');
  }
}

console.log('Done connecting sites.');
