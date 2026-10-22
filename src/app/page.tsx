'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { withBasePath } from '@/lib/base-path';

interface LogLine {
  text: string;
  className?: string;
}

export default function HomePage() {
  // Cursor glow state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Hero Polaroid tilt state
  const [polaroidTransform, setPolaroidTransform] = useState('rotate(2deg) translateY(0px)');
  const heroRef = useRef<HTMLDivElement>(null);

  // Mainframe simulation state
  const [activeStage, setActiveStage] = useState<number | null>(null);
  const [completedStages, setCompletedStages] = useState<number[]>([]);
  const [terminalLogs, setTerminalLogs] = useState<LogLine[]>([
    { text: '[MAIN-SYSTEM READY] Waiting for transmission…', className: 'dim' },
  ]);
  const [isRunningFlow, setIsRunningFlow] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);

  // Contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formType, setFormType] = useState('New Website Architecture');
  const [formMsg, setFormMsg] = useState('');
  const [formNote, setFormNote] = useState<{ text: string; color: string } | null>(null);

  // Parallax tilt handlers
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!heroRef.current) return;
    const r = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setPolaroidTransform(`rotate(${x * 8}deg) translateY(${y * 12}px)`);
  };

  const handleHeroMouseLeave = () => {
    setPolaroidTransform('rotate(2deg) translateY(0px)');
  };

  // Cursor glow listener
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      setCursorVisible(true);
    };
    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, []);

  // Mainframe auto-scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  // Mainframe simulation script
  const script = [
    [
      { text: '[INPUT DISPATCH] New Project Request: "Retro SaaS Landing + AI Flow"', className: 'dim' },
      { text: '  Origin: California, USA · Priority: VIP · Budget: Grade-A', className: '' },
    ],
    [
      { text: '> juan.analyze(lead)', className: '' },
      { text: '  Match: 99.4% · Tech Specs: Next.js + Cloud Automation', className: 'ok' },
      { text: '  Assembled 12-page blueprint in 0.3s', className: 'dim' },
    ],
    [
      { text: '> route.fast_lane()', className: '' },
      { text: '  [HOT PRIORITY] Routed directly to Number Juan console', className: 'hot' },
    ],
    [
      { text: '> webhook.notify(slack) [OK]', className: 'ok' },
      { text: '> calendar.reserve_slot(zoom) [OK]', className: 'ok' },
      { text: '[SUCCESS] Pipeline executed in 0.6s. Zero manual delay.', className: 'ok' },
    ],
  ];

  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

  const runFlow = async () => {
    if (isRunningFlow) return;
    setIsRunningFlow(true);
    setActiveStage(null);
    setCompletedStages([]);
    setTerminalLogs([]);

    for (let i = 0; i < 4; i++) {
      setActiveStage(i);
      for (const item of script[i]) {
        setTerminalLogs((prev) => [...prev, item]);
        await wait(400);
      }
      await wait(200);
      setActiveStage(null);
      setCompletedStages((prev) => [...prev, i]);
    }
    setIsRunningFlow(false);
  };

  // Trigger demo once on intersection
  useEffect(() => {
    if (!workflowRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setTimeout(runFlow, 500);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(workflowRef.current);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Contact form submission
  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName.trim() || !formEmail.trim() || !/\S+@\S+\.\S+/.test(formEmail)) {
      setFormNote({
        text: 'Hold on, partner! Please provide your name and a valid email address.',
        color: '#EF4444',
      });
      return;
    }

    setFormNote({
      text: 'Dispatch sent! Launching your email client to complete transmission…',
      color: '#15803D',
    });

    const subject = encodeURIComponent(`numberJuan.io Project Inquiry: ${formType}`);
    const body = encodeURIComponent(
      `Hi Number Juan Team,\n\n${formMsg}\n\n— ${formName} (${formEmail})`
    );
    window.location.href = `mailto:hello@numberjuan.io?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Navbar activeTab="home" />

      {cursorVisible && (
        <div
          className="cursor-glow"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
          aria-hidden="true"
        />
      )}

      <main>
        {/* HERO SECTION */}
        <section
          className="hero"
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge-starburst gold">✦ THE #1 WEB &amp; AUTOMATION STUDIO ✦</div>
              <h1 className="hero-title">
                Tomorrow&apos;s Web, Freshly <span className="pop-blue">Automated</span> with{' '}
                <span className="pop-gold">Style!</span>
              </h1>
              <p className="hero-subtitle">
                Why settle for second best when you can have <b>Number Juan</b>? We craft high-octane
                websites and smart automations built with 1960s-70s optimism, rock-solid engineering,
                and 21st-century AI.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  ✦ Start Your Project
                </a>
                <Link href="/library" className="btn btn-secondary">
                  Browse 650+ UI Modules
                </Link>
                <Link href="/builder" className="btn btn-ghost">
                  AI Wireframe Studio →
                </Link>
              </div>

              <div className="hero-social-proof">
                <div className="hero-avatars">
                  <span>★</span>
                  <span>1</span>
                  <span>✦</span>
                </div>
                <div className="hero-proof-text">
                  100% Grade-A Craftsmanship · 14+ Years Field Experience · No-Nonsense Code
                </div>
              </div>
            </div>

            {/* Hero Mascot Polaroid */}
            <div className="hero-visual">
              <div className="floating-badge top-left badge-starburst blue">★ 100% HAND-CRAFTED ★</div>
              <div
                className="hero-polaroid"
                id="heroPolaroid"
                style={{ transform: polaroidTransform }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath('/assets/hero-juan.jpg')}
                  alt="Juan at the retro atomic mainframe"
                  className="hero-polaroid-img"
                  width={800}
                  height={450}
                />
                <div className="hero-polaroid-caption">
                  Juan says: <i>&ldquo;Quality code is just good business, partner!&rdquo;</i>
                </div>
              </div>
              <div className="floating-badge bottom-right badge-starburst red">⚡ ATOMIC SPEED ⚡</div>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="section" id="services">
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst blue">✦ THE NUMBER JUAN STANDARD ✦</div>
              <h2>Engineered Like a &apos;69 Classic.</h2>
              <p>
                Every digital product we construct is built for endurance, maximum speed, and charismatic
                personality that stands out from the generic crowd.
              </p>
            </div>

            <div className="services-grid">
              <div className="comic-card service-card">
                <div className="service-icon-box blue">🚀</div>
                <h3>Custom Web Architecture</h3>
                <p>
                  From high-converting landing pages to complex web apps, engineered with modern frameworks
                  (React, Next.js, Node) wrapped in bulletproof layouts.
                </p>
                <div className="card-footer-pill">
                  <span>SPEC: 99.8% LIGHTHOUSE</span> <span>✦</span>
                </div>
              </div>

              <div className="comic-card service-card">
                <div className="service-icon-box gold">⚡</div>
                <h3>Future-Matic AI Automation</h3>
                <p>
                  Automate your sales pipelines, customer triage, and data flows with smart AI workers that
                  handle the repetitive grind without breaking a sweat.
                </p>
                <div className="card-footer-pill">
                  <span>SPEC: ZERO MANUAL WORK</span> <span>✦</span>
                </div>
              </div>

              <div className="comic-card service-card">
                <div className="service-icon-box red">🎯</div>
                <h3>Conversion-Tuned UI/UX</h3>
                <p>
                  Designs so intuitive and lively your audience can&apos;t help but engage. We blend vintage
                  visual punch with effortless modern usability.
                </p>
                <div className="card-footer-pill">
                  <span>SPEC: MAX RETENTION</span> <span>✦</span>
                </div>
              </div>

              <div className="comic-card service-card">
                <div className="service-icon-box green">🛡️</div>
                <h3>Pre-Fab Module Library</h3>
                <p>
                  Direct access to our proprietary archive of 650+ battle-tested motion and UI components
                  ready to be slotted into any project on demand.
                </p>
                <div className="card-footer-pill">
                  <span>SPEC: 650+ LIVE MODULES</span> <span>✦</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW MAINFRAME DEMO */}
        <section className="section workflow-section" id="mainframe" ref={workflowRef}>
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst gold">✦ THE FUTURE-MATIC MAINFRAME ✦</div>
              <h2>A Machine That Works While You Sleep.</h2>
              <p>
                Watch our automated pipeline qualify leads, route inquiries, and notify your dispatch
                center in under a second flat.
              </p>
            </div>

            <div className="mainframe-console">
              <div className="console-header">
                <div className="console-lights">
                  <span className="l-red" />
                  <span className="l-yellow" />
                  <span className="l-green" />
                </div>
                <div className="console-title">MODEL 6900 // ATOMIC WORKFLOW DISPATCHER</div>
                <button
                  className="btn btn-secondary btn-sm"
                  type="button"
                  onClick={runFlow}
                  disabled={isRunningFlow}
                >
                  {isRunningFlow ? 'Crunching…' : 'Run Mainframe'}
                </button>
              </div>

              <div className="console-body">
                {/* Pipeline Nodes */}
                <div className="console-pipeline">
                  <div
                    className={`node-card ${activeStage === 0 ? 'active' : ''} ${
                      completedStages.includes(0) ? 'done' : ''
                    }`}
                  >
                    <div>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                        STAGE 01
                      </span>
                      <div>
                        <b>Input Dispatch Received</b>
                      </div>
                    </div>
                    <span className="badge-starburst gold" style={{ fontSize: '0.7rem' }}>
                      TRIGGER
                    </span>
                  </div>

                  <div
                    className={`node-card ${activeStage === 1 ? 'active' : ''} ${
                      completedStages.includes(1) ? 'done' : ''
                    }`}
                  >
                    <div>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                        STAGE 02
                      </span>
                      <div>
                        <b>AI Triage &amp; Qualification</b>
                      </div>
                    </div>
                    <span className="badge-starburst blue" style={{ fontSize: '0.7rem' }}>
                      ANALYZE
                    </span>
                  </div>

                  <div
                    className={`node-card ${activeStage === 2 ? 'active' : ''} ${
                      completedStages.includes(2) ? 'done' : ''
                    }`}
                  >
                    <div>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                        STAGE 03
                      </span>
                      <div>
                        <b>Fast-Lane VIP Routing</b>
                      </div>
                    </div>
                    <span className="badge-starburst red" style={{ fontSize: '0.7rem' }}>
                      ROUTE
                    </span>
                  </div>

                  <div
                    className={`node-card ${activeStage === 3 ? 'active' : ''} ${
                      completedStages.includes(3) ? 'done' : ''
                    }`}
                  >
                    <div>
                      <span className="mono" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                        STAGE 04
                      </span>
                      <div>
                        <b>Instant CRM &amp; Dispatch Sync</b>
                      </div>
                    </div>
                    <span
                      className="badge-starburst"
                      style={{ background: 'var(--green)', color: '#fff', fontSize: '0.7rem' }}
                    >
                      SYNCED
                    </span>
                  </div>
                </div>

                {/* CRT Terminal Screen */}
                <div className="terminal-crt" ref={terminalRef}>
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={`line ${log.className || ''}`}>
                      {log.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BLUEPRINT PROCESS SECTION */}
        <section className="section" id="blueprint">
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst red">✦ THE 4-STAGE BLUEPRINT ✦</div>
              <h2>From Drafting Board to Grand Premiere.</h2>
              <p>No guesswork, no missing parts. Here is our calibrated assembly process for delivering #1 results.</p>
            </div>

            <div className="blueprint-grid">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3>The Master Blueprint</h3>
                <p>We analyze your business goals, target audience, and feature requirements to draft a crystal-clear wireframe architecture.</p>
              </div>

              <div className="step-card">
                <div className="step-number">02</div>
                <h3>Atomic Prototyping</h3>
                <p>Rapid assembly using our 650+ component catalog so you can see, test, and feel your interface in action early.</p>
              </div>

              <div className="step-card">
                <div className="step-number">03</div>
                <h3>The Assembly Line</h3>
                <p>Precision coding with modern front-end best practices, accessible HTML5 semantics, responsive CSS, and automated API hooks.</p>
              </div>

              <div className="step-card">
                <div className="step-number">04</div>
                <h3>The Grand Premiere</h3>
                <p>Full deployment to lightning-fast global servers, domain wiring, SEO audits, and post-launch celebration with your team!</p>
              </div>
            </div>
          </div>
        </section>

        {/* SHOWCASE SECTION */}
        <section className="section" id="showcase">
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst blue">✦ PROVEN IN THE FIELD ✦</div>
              <h2>Direct from the Laboratory.</h2>
              <p>A few flagship transmissions crafted by Number Juan.</p>
            </div>

            <div className="work-grid">
              <div className="tv-card">
                <div className="tv-bezel">
                  <div
                    className="tv-screen"
                    style={{ background: '#1B2A4A', color: '#60A5FA', fontSize: '1.4rem', fontWeight: 'bold' }}
                  >
                    ✦ UI LIBRARY 650+
                  </div>
                </div>
                <div className="tv-info">
                  <h3>numberJuan Pre-Fab UI Catalog</h3>
                  <p>Over 650 modular animation and interface cards with instant live previews and prompt exports.</p>
                  <div className="tag-group">
                    <span className="tag">Next.js</span>
                    <span className="tag">CSS Animation</span>
                    <span className="tag">Shadow DOM</span>
                  </div>
                </div>
              </div>

              <div className="tv-card">
                <div className="tv-bezel">
                  <div
                    className="tv-screen"
                    style={{ background: '#2C1A14', color: '#F59E0B', fontSize: '1.4rem', fontWeight: 'bold' }}
                  >
                    ⚡ WIREFRAME STUDIO
                  </div>
                </div>
                <div className="tv-info">
                  <h3>AI Blueprint Machine</h3>
                  <p>Upload a screenshot or wireframe sketch and reconstruct it dynamically into clean HTML modules.</p>
                  <div className="tag-group">
                    <span className="tag">Gemini Vision</span>
                    <span className="tag">Next.js API</span>
                    <span className="tag">TypeScript</span>
                  </div>
                </div>
              </div>

              <div className="tv-card">
                <div className="tv-bezel">
                  <div
                    className="tv-screen"
                    style={{ background: '#18281E', color: '#4ADE80', fontSize: '1.4rem', fontWeight: 'bold' }}
                  >
                    💼 CREATOR DOSSIER
                  </div>
                </div>
                <div className="tv-info">
                  <h3>Christopher Ross Dela Cruz</h3>
                  <p>14+ years front-end engineering dossier showcasing international enterprise builds and workflows.</p>
                  <div className="tag-group">
                    <span className="tag">React</span>
                    <span className="tag">TypeScript</span>
                    <span className="tag">WordPress</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECH STACK SECTION */}
        <section className="section" style={{ paddingTop: '20px' }}>
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst gold">✦ HIGH-GRADE INGREDIENTS ✦</div>
              <h2>Tools of the Trade.</h2>
              <p>We build with calibrated, high-performance industry tools.</p>
            </div>

            <div className="stack-stickers">
              <span className="sticker">⚛️ React / Next.js</span>
              <span className="sticker">🟢 Node.js Runtime</span>
              <span className="sticker">🎨 Tailwind &amp; Pure CSS</span>
              <span className="sticker">🤖 Google Gemini AI</span>
              <span className="sticker">⚡ TypeScript</span>
              <span className="sticker">📰 WordPress &amp; Headless CMS</span>
              <span className="sticker">🐘 PostgreSQL &amp; Supabase</span>
            </div>
          </div>
        </section>

        {/* TELEGRAPH / CONTACT SECTION */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div className="contact-card">
              <div className="contact-left">
                <div className="badge-starburst red">✦ THE TELEGRAPH OFFICE ✦</div>
                <h2 style={{ fontSize: '2.4rem' }}>
                  Ready to Hire <span style={{ color: 'var(--blue)' }}>Number Juan</span>?
                </h2>
                <p style={{ color: 'var(--ink-2)', lineHeight: 1.6 }}>
                  Have an ambitious web project, need smart automation, or want to integrate our 650+
                  component library? Send a dispatch and let&apos;s build something unforgettable.
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '10px' }}>
                  <div className="stamp-seal">
                    <span>RATED</span>
                    <b>#1</b>
                    <span>GUARANTEED</span>
                  </div>
                  <div style={{ fontSize: '0.92rem', color: 'var(--ink-2)' }}>
                    <b>Direct Dispatch:</b>
                    <br />
                    <a href="mailto:hello@numberjuan.io" style={{ color: 'var(--blue)', fontWeight: 'bold' }}>
                      hello@numberjuan.io
                    </a>
                    <br />
                    Cebu City, Philippines (Global Service)
                  </div>
                </div>
              </div>

              {/* Form */}
              <form className="contact-form" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="fName">Your Name or Organization *</label>
                  <input
                    type="text"
                    id="fName"
                    className="form-input"
                    placeholder="e.g. Maya Santos, Atomic Ventures"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fEmail">Your Transmission Coordinates (Email) *</label>
                  <input
                    type="email"
                    id="fEmail"
                    className="form-input"
                    placeholder="you@domain.com"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fType">Mission Classification</label>
                  <select
                    id="fType"
                    className="form-input"
                    value={formType}
                    onChange={(e) => setFormType(e.target.value)}
                  >
                    <option value="New Website Architecture">New Website Architecture</option>
                    <option value="AI Workflow &amp; Automation">AI Workflow &amp; Automation</option>
                    <option value="Pre-Fab Module Library Integration">Pre-Fab Module Library Integration</option>
                    <option value="Full-Service Retainer">Full-Service Retainer</option>
                    <option value="General Greetings &amp; High-Fives">General Greetings &amp; High-Fives</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="fMsg">Project Brief / Transmission Details</label>
                  <textarea
                    id="fMsg"
                    className="form-input"
                    rows={4}
                    placeholder="Tell Number Juan about your vision, timeline, and goals…"
                    value={formMsg}
                    onChange={(e) => setFormMsg(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '8px' }}>
                  ✦ Transmit Dispatch to Number Juan
                </button>
                {formNote && (
                  <div style={{ fontSize: '0.85rem', fontWeight: 'bold', color: formNote.color }}>
                    {formNote.text}
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
