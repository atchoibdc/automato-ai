import Link from 'next/link';
import { withBasePath } from '@/lib/base-path';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <Link href="/" className="brand" aria-label="numberJuan.io home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath('/assets/mascot.svg')}
            alt="Juan mascot"
            className="brand-mascot"
            width={44}
            height={44}
          />
          <span className="brand-text">
            number<span className="highlight">Juan</span>
            <span className="brand-badge">.io</span>
          </span>
        </Link>

        <nav className="footer-nav" aria-label="Footer navigation">
          <Link href="/#services">Services</Link>
          <Link href="/#mainframe">Automation</Link>
          <Link href="/#blueprint">Blueprint</Link>
          <Link href="/#showcase">Work</Link>
          <Link href="/library">✦ Pre-Fab Library</Link>
          <Link href="/builder">✦ Blueprint Studio</Link>
          <Link href="/creator">The Creator</Link>
          <Link href="/#contact">Contact</Link>
        </nav>

        <div className="footer-copy">
          © {year} <b>numberJuan.io</b>. Handcrafted with atomic energy and pride in Cebu, PH by{' '}
          <Link href="/creator" style={{ textDecoration: 'underline', color: 'var(--blue)' }}>
            Christopher Ross B. dela Cruz
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}
