'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/common/Navbar';
import Footer from '@/components/common/Footer';
import { withBasePath } from '@/lib/base-path';

export default function CreatorPage() {
  const [counts, setCounts] = useState({ exp: 0, delivery: 0, plugins: 0, ux: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Parallax tilt for creator polaroid
  const [polaroidTransform, setPolaroidTransform] = useState('rotate(2deg) translateY(0px)');
  const heroRef = useRef<HTMLDivElement>(null);

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

  // Intersection observer for counters
  useEffect(() => {
    if (!statsRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasAnimated(true);
          const dur = 1500;
          const t0 = performance.now();

          const tick = (now: number) => {
            const k = Math.min((now - t0) / dur, 1);
            const ease = 1 - Math.pow(1 - k, 3);
            setCounts({
              exp: Math.round(14 * ease),
              delivery: Math.round(99 * ease),
              plugins: Math.round(10 * ease),
              ux: Math.round(30 * ease),
            });
            if (k < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      <Navbar activeTab="creator" />

      <main>
        {/* CREATOR HERO */}
        <section
          className="hero"
          ref={heroRef}
          onMouseMove={handleHeroMouseMove}
          onMouseLeave={handleHeroMouseLeave}
        >
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="badge-starburst gold">✦ THE ENGINEER BEHIND #1 ✦</div>
              <h1 className="hero-title">
                Christopher Ross <br />
                <span className="pop-blue">B. dela Cruz</span>
              </h1>
              <p className="hero-subtitle">
                Seasoned <b>Front-end Web Developer &amp; Systems Architect</b> based in{' '}
                <b>Cebu City, Philippines</b>. With over 14 years of commercial battlefield experience,
                Christopher specializes in responsive React &amp; Next.js applications, high-performance
                WordPress CMS engines, and custom automation pipelines.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '6px' }}>
                <a
                  href="mailto:atchoi.delacruz@gmail.com"
                  className="badge-starburst"
                  style={{ background: 'var(--surface)', textTransform: 'none' }}
                >
                  ✉️ atchoi.delacruz@gmail.com
                </a>
                <a
                  href="tel:+639941279711"
                  className="badge-starburst"
                  style={{ background: 'var(--surface)', textTransform: 'none' }}
                >
                  📞 +63 994 127 9711
                </a>
                <a
                  href="https://www.linkedin.com/in/chrisross-delacruz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="badge-starburst blue"
                  style={{ textTransform: 'none' }}
                >
                  💼 LinkedIn Profile
                </a>
                <span
                  className="badge-starburst"
                  style={{ background: 'var(--surface-2)', color: 'var(--ink-2)', textTransform: 'none' }}
                >
                  📍 Cebu City, Philippines
                </span>
              </div>

              <div className="hero-actions">
                <a
                  href={withBasePath('/assets/Christopher-Ross-dela-Cruz-CV.pdf')}
                  download
                  className="btn btn-primary"
                >
                  📥 Download Certified CV (PDF)
                </a>
                <a href="mailto:atchoi.delacruz@gmail.com" className="btn btn-secondary">
                  ✦ Send Direct Telegram
                </a>
              </div>

              {/* Stat Counters */}
              <div
                ref={statsRef}
                className="services-grid"
                style={{
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  width: '100%',
                  gap: '12px',
                  marginTop: '16px',
                }}
              >
                <div className="comic-card" style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--gold)' }}>
                    {counts.exp}+
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>YEARS DEV EXP</div>
                </div>
                <div className="comic-card" style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--blue)' }}>
                    {counts.delivery}%
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>APEX DELIVERY</div>
                </div>
                <div className="comic-card" style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--red)' }}>
                    {counts.plugins}+
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>CUSTOM PLUGINS</div>
                </div>
                <div className="comic-card" style={{ padding: '14px', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: 'var(--green)' }}>
                    {counts.ux}%
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>UX BOOST</div>
                </div>
              </div>
            </div>

            {/* Creator Portrait Polaroid */}
            <div className="hero-visual">
              <div className="floating-badge top-left badge-starburst gold">✦ AVAILABLE FOR HIRE ✦</div>
              <div
                className="hero-polaroid"
                id="heroPolaroid"
                style={{ transform: polaroidTransform }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={withBasePath('/assets/creator.jpg')}
                  alt="Portrait of Christopher Ross B. dela Cruz"
                  className="hero-polaroid-img"
                  style={{ aspectRatio: '1/1' }}
                  width={600}
                  height={600}
                />
                <div className="hero-polaroid-caption">
                  Christopher Ross B. dela Cruz
                  <br />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)' }}>
                    Lead Front-End Architect · numberJuan.io
                  </span>
                </div>
              </div>
              <div className="floating-badge bottom-right stamp-seal">
                <span>CERTIFIED</span>
                <b>#1</b>
                <span>GRADE A</span>
              </div>
            </div>
          </div>
        </section>

        {/* WORK EXPERIENCE TIMELINE */}
        <section
          className="section"
          id="experience"
          style={{
            background: 'var(--surface-2)',
            borderTop: 'var(--border-ink)',
            borderBottom: 'var(--border-ink)',
          }}
        >
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst blue">✦ SERVICE RECORD ✦</div>
              <h2>Over a Decade of Battle-Tested Craft.</h2>
              <p>From creative agencies and multinational consultancies to modern full-stack web studios.</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '880px', margin: '0 auto' }}>
              {/* Role 1 */}
              <div className="comic-card">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      FEB 2023 – PRESENT · CEBU CITY, PH
                    </span>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '2px' }}>
                      Web Developer — <span style={{ color: 'var(--green)' }}>RipeConcepts Inc.</span>
                    </h3>
                  </div>
                  <span className="badge-starburst" style={{ background: 'var(--green)', color: '#fff' }}>
                    CURRENT STATION
                  </span>
                </div>
                <p style={{ color: 'var(--ink-2)', marginBottom: '14px', lineHeight: 1.6 }}>
                  Engineering high-traffic WordPress platforms and content-rich CMS portals leveraging custom
                  Gutenberg architecture. Built 10+ tailored plugins resolving 30%–50% of complex client business
                  requirements.
                </p>
                <div className="tag-group">
                  <span className="tag">WordPress</span>
                  <span className="tag">Gutenberg</span>
                  <span className="tag">PHP</span>
                  <span className="tag">Custom Plugins</span>
                  <span className="tag">JavaScript ES6+</span>
                  <span className="tag">HTML5 / CSS3</span>
                </div>
              </div>

              {/* Role 2 */}
              <div className="comic-card">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      DEC 2018 – SEP 2022 · CEBU CITY, PH
                    </span>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '2px' }}>
                      Software Analyst — <span style={{ color: 'var(--red)' }}>Accenture</span>
                    </h3>
                  </div>
                  <span className="badge-starburst blue">4 YEARS</span>
                </div>
                <p style={{ color: 'var(--ink-2)', marginBottom: '14px', lineHeight: 1.6 }}>
                  Delivered enterprise-grade Salesforce and cloud solutions with Apex, Visualforce, and Lightning
                  Web Components. Maintained a 99%+ bug-free deployment record across multinational client programs.
                </p>
                <div className="tag-group">
                  <span className="tag">Salesforce</span>
                  <span className="tag">Apex Code</span>
                  <span className="tag">JavaScript</span>
                  <span className="tag">SOQL / SOSL</span>
                  <span className="tag">Enterprise Integrations</span>
                </div>
              </div>

              {/* Role 3 */}
              <div className="comic-card">
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '10px',
                    marginBottom: '12px',
                  }}
                >
                  <div>
                    <span className="mono" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                      2010 – 2018 · CEBU CITY, PH
                    </span>
                    <h3 style={{ fontSize: '1.5rem', marginTop: '2px' }}>
                      Front-End &amp; CMS Engineer —{' '}
                      <span style={{ color: 'var(--blue)' }}>Creative &amp; Web Studios</span>
                    </h3>
                  </div>
                  <span className="badge-starburst gold">8 YEARS</span>
                </div>
                <p style={{ color: 'var(--ink-2)', marginBottom: '14px', lineHeight: 1.6 }}>
                  Full-spectrum web development across custom PHP/MySQL applications, early responsive frameworks,
                  client branding, and interactive front-ends.
                </p>
                <div className="tag-group">
                  <span className="tag">React</span>
                  <span className="tag">AngularJS</span>
                  <span className="tag">Laravel</span>
                  <span className="tag">Vue.js</span>
                  <span className="tag">UI/UX Prototyping</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TECHNICAL ARSENAL */}
        <section className="section" id="skills">
          <div className="container">
            <div className="section-header">
              <div className="badge-starburst gold">✦ TECHNICAL ARSENAL ✦</div>
              <h2>Weapons of Choice.</h2>
              <p>Calibrated over a decade and a half of production web engineering.</p>
            </div>

            <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
              <div className="comic-card">
                <div className="service-icon-box blue">🎨</div>
                <h3>Front-End Systems</h3>
                <p>HTML5 Semantics, Modern CSS3 &amp; Grid/Flexbox, TailwindCSS, JavaScript ES6+, React, Next.js, Angular, Responsive Mobile First.</p>
              </div>

              <div className="comic-card">
                <div className="service-icon-box gold">📰</div>
                <h3>CMS &amp; Web Engines</h3>
                <p>WordPress Core, Custom Gutenberg Blocks, Advanced Custom Fields (ACF), Custom Plugin Engineering, WooCommerce, PHP/MySQL.</p>
              </div>

              <div className="comic-card">
                <div className="service-icon-box red">⚡</div>
                <h3>Enterprise &amp; Cloud</h3>
                <p>Salesforce Platform, Apex, Lightning Components, RESTful APIs, Node.js / Express microservices, Webhook orchestration.</p>
              </div>

              <div className="comic-card">
                <div className="service-icon-box green">🤖</div>
                <h3>AI &amp; Workflows</h3>
                <p>Google Gemini Vision API integration, prompt tuning, automated lead qualification, Git/GitHub, CI/CD, Vite, Webpack.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="section contact-section" id="contact">
          <div className="container">
            <div
              className="contact-card"
              style={{ gridTemplateColumns: '1fr', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '18px' }}>
                <div className="badge-starburst red">✦ READY TO COLLABORATE? ✦</div>
                <h2 style={{ fontSize: '2.8rem' }}>
                  Let&apos;s Build Something <span style={{ color: 'var(--blue)' }}>Number Juan</span>.
                </h2>
                <p style={{ color: 'var(--ink-2)', maxWidth: '560px', lineHeight: 1.6 }}>
                  Whether you need a full enterprise website, custom CMS plugin, or smart AI integration,
                  Christopher is ready to bring high-caliber experience to your project.
                </p>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '10px' }}>
                  <a href="mailto:atchoi.delacruz@gmail.com" className="btn btn-primary">
                    ✦ Email Christopher Directly
                  </a>
                  <a
                    href={withBasePath('/assets/Christopher-Ross-dela-Cruz-CV.pdf')}
                    download
                    className="btn btn-secondary"
                  >
                    📥 Download Full CV (PDF)
                  </a>
                  <Link href="/" className="btn btn-ghost">
                    ← Back to numberJuan.io Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
