'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { withBasePath } from '@/lib/base-path';

interface NavbarProps {
  activeTab?: 'home' | 'creator' | 'library' | 'builder';
}

export default function Navbar({ activeTab = 'home' }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
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

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary">
          <Link href="/#services" onClick={() => setMenuOpen(false)}>
            Services
          </Link>
          <Link href="/#mainframe" onClick={() => setMenuOpen(false)}>
            Automation
          </Link>
          <Link href="/#blueprint" onClick={() => setMenuOpen(false)}>
            Blueprint
          </Link>
          <Link href="/#showcase" onClick={() => setMenuOpen(false)}>
            Work
          </Link>
          <Link
            href="/library"
            className={`nav-pill-highlight ${activeTab === 'library' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            ✦ Library (650+)
          </Link>
          <Link
            href="/builder"
            className={`nav-pill-highlight ${activeTab === 'builder' ? 'active' : ''}`}
            onClick={() => setMenuOpen(false)}
          >
            ✦ Builder
          </Link>
          <Link
            href="/creator"
            className={activeTab === 'creator' ? 'active' : ''}
            onClick={() => setMenuOpen(false)}
          >
            The Creator
          </Link>
          <Link
            href="/#contact"
            className="btn btn-primary btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Hire Number Juan
          </Link>
        </nav>

        <div className="nav-tools">
          <ThemeToggle />
          <button
            className="burger"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
