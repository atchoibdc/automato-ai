'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';
import { mountCard, exportCardHtml, SCREEN_W } from '@/lib/ml-core';
import { withBasePath } from '@/lib/base-path';
import type { LibraryContext, LibraryIndex, ModuleCard, SlimModule, Category } from '@/lib/types';

const GROUPS: Array<[string, string[]]> = [
  [
    'Website',
    [
      'hero',
      'nav',
      'scroll',
      'text',
      'buttons',
      'cards',
      'media',
      'proof',
      'testimonials',
      'pricing',
      'stats',
      'faq',
      'forms',
      'overlays',
      'loaders',
      'transitions',
      'backgrounds',
      'cursor',
      'footer',
    ],
  ],
  ['3D (Three.js)', ['three-objects', 'three-particles', 'three-shaders', 'three-interactive', 'three-scroll']],
  ['GSAP and Lenis', ['gsap-scroll', 'gsap-text', 'gsap-svg', 'gsap-flip', 'gsap-drag', 'lenis']],
  [
    'App screens',
    [
      'app-shells',
      'app-auth',
      'app-onboarding',
      'app-settings',
      'app-states',
      'app-dashboards',
      'app-industry',
      'app-crm',
      'app-portals',
      'app-commerce',
      'app-data',
      'app-inbox',
      'app-ai',
      'app-editors',
    ],
  ],
  ['Mobile', ['app-mobile', 'mobile-nav', 'mobile-gestures']],
];

export default function LibraryPage() {
  const [ctx, setCtx] = useState<LibraryContext | null>(null);
  const [index, setIndex] = useState<LibraryIndex | null>(null);
  const [currentCatId, setCurrentCatId] = useState<string>('hero');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cards, setCards] = useState<ModuleCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [motionPaused, setMotionPaused] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Viewer Modal State
  const [viewerCard, setViewerCard] = useState<ModuleCard | null>(null);
  const [viewerIndex, setViewerIndex] = useState<number>(0);
  const viewerDialogRef = useRef<HTMLDialogElement>(null);
  const viewerStageRef = useRef<HTMLDivElement>(null);

  const categoryCache = useRef<Record<string, ModuleCard[]>>({});

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2000);
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(label);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
      showToast(label);
    }
  };

  // Load context and catalog on mount
  useEffect(() => {
    async function init() {
      try {
        const [loadedCtx, loadedIdx] = await Promise.all([
          fetch(withBasePath('/library/ctx.json')).then((r) => r.json()),
          fetch(withBasePath('/library/index.json')).then((r) => r.json()),
        ]);
        loadedCtx.libBase = withBasePath('/library/vendor/');
        setCtx(loadedCtx);
        setIndex(loadedIdx);
      } catch (err) {
        console.error('Failed to load library data:', err);
      }
    }
    init();
  }, []);

  const loadCategoryModules = useCallback(async (catId: string): Promise<ModuleCard[]> => {
    if (categoryCache.current[catId]) return categoryCache.current[catId];
    try {
      const res = await fetch(withBasePath(`/library/modules/${catId}.json`));
      const data = await res.json();
      categoryCache.current[catId] = data;
      return data;
    } catch (err) {
      console.error('Failed to load category', catId, err);
      return [];
    }
  }, []);

  // Sync category from URL hash (e.g. /library#app-dashboards)
  useEffect(() => {
    const handleHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      if (hash) {
        setSearchQuery('');
        setCurrentCatId(hash);
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Filter or load modules whenever query or category changes
  useEffect(() => {
    if (!index) return;
    let isCancelled = false;

    async function updateDisplay() {
      setIsLoading(true);
      if (searchQuery.trim()) {
        const terms = searchQuery.trim().toLowerCase().split(/\s+/);
        const hits = index!.modules
          .filter((m) =>
            terms.every((t) => `${m.title} ${m.sub} ${m.cat} ${m.role}`.toLowerCase().includes(t))
          )
          .slice(0, 60);

        const neededCats = [...new Set(hits.map((h) => h.cat))];
        const allModules = await Promise.all(neededCats.map(loadCategoryModules));
        const byId = new Map(allModules.flat().map((c) => [c.id, c]));
        const resultCards = hits.map((h) => byId.get(h.id)).filter(Boolean) as ModuleCard[];

        if (!isCancelled) {
          setCards(resultCards);
          setIsLoading(false);
        }
      } else {
        const loaded = await loadCategoryModules(currentCatId);
        if (!isCancelled) {
          setCards(loaded);
          setIsLoading(false);
        }
      }
    }

    const timer = setTimeout(updateDisplay, 150);
    return () => {
      isCancelled = true;
      clearTimeout(timer);
    };
  }, [searchQuery, currentCatId, index, loadCategoryModules]);

  // Open viewer modal
  const openViewer = (card: ModuleCard, idx: number) => {
    setViewerCard(card);
    setViewerIndex(idx);
    if (viewerDialogRef.current && !viewerDialogRef.current.open) {
      viewerDialogRef.current.showModal();
    }
  };

  const closeViewer = () => {
    if (viewerDialogRef.current?.open) {
      viewerDialogRef.current.close();
    }
    setViewerCard(null);
  };

  // Mount viewer card stage
  useEffect(() => {
    if (!viewerCard || !ctx || !viewerStageRef.current) return;
    viewerStageRef.current.innerHTML = '';
    const host = document.createElement('div');
    host.className = 'host';
    host.style.width = '100%';
    host.style.height = '100%';
    viewerStageRef.current.appendChild(host);

    const m = mountCard(host, viewerCard, ctx);
    return () => m.destroy();
  }, [viewerCard, ctx]);

  // Keydown shortcut for search '/'
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && document.activeElement?.tagName !== 'INPUT') {
        e.preventDefault();
        document.getElementById('library-search')?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Category counts
  const catCounts: Record<string, number> = {};
  if (index?.modules) {
    for (const m of index.modules) {
      catCounts[m.cat] = (catCounts[m.cat] || 0) + 1;
    }
  }

  const catsMap = new Map<string, Category>(index?.categories.map((c) => [c.id, c]) || []);
  const currentCategory = catsMap.get(currentCatId) || { id: 'hero', name: 'Hero' };

  return (
    <div className="shell">
      {/* SIDEBAR */}
      <aside className="side" aria-label="Library navigation">
        <Link href="/" className="brand" aria-label="numberJuan.io home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={withBasePath('/assets/mascot.svg')}
            alt="Juan"
            width={34}
            height={34}
            style={{ borderRadius: '50%', border: '1.5px solid #18120C', flexShrink: 0 }}
          />
          <span className="brand-text" style={{ fontSize: '1.28rem' }}>
            number<span style={{ color: '#1D4ED8' }}>Juan</span>
            <span className="brand-badge">.io</span>
            <small style={{ display: 'block', fontSize: '0.72rem', color: 'var(--muted)' }}>
              Pre-Fab UI Library
            </small>
          </span>
        </Link>

        <div className="tabs" aria-label="App switcher">
          <Link href="/library" aria-current="page" className="active">
            ✦ Pre-Fab Library
          </Link>
          <Link href="/builder">✦ Blueprint Studio</Link>
          <Link href="/creator">The Creator</Link>
        </div>

        <label className="search">
          <span>🔍</span>
          <input
            id="search"
            type="search"
            placeholder="Search all modules (Press '/')"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search modules"
          />
        </label>

        <nav className="nav-cat-group" aria-label="Categories" style={{ overflowY: 'auto', flex: 1 }}>
          {GROUPS.map(([groupName, catIds]) => (
            <div key={groupName}>
              <h4>{groupName}</h4>
              {catIds
                .filter((id) => catsMap.has(id))
                .map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    aria-current={!searchQuery && currentCatId === id}
                    onClick={(e) => {
                      e.preventDefault();
                      setSearchQuery('');
                      setCurrentCatId(id);
                      window.scrollTo({ top: 0 });
                    }}
                  >
                    <span>{catsMap.get(id)?.name}</span>
                    <span style={{ opacity: 0.6, fontSize: '0.78rem' }}>{catCounts[id] || 0}</span>
                  </a>
                ))}
            </div>
          ))}
        </nav>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '12px',
            borderTop: 'var(--border-ink-thin)',
          }}
        >
          <span style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)' }}>
            <b>{index?.modules.length || 0}</b> modules
          </span>
          <ThemeToggle />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        <header className="head">
          <div>
            <h1>
              <span>{searchQuery ? 'Search Results' : currentCategory.name}</span>{' '}
              <em style={{ fontStyle: 'normal', fontSize: '1rem', color: 'var(--muted)', marginLeft: '8px' }}>
                ({cards.length})
              </em>
            </h1>
            <p>
              {searchQuery
                ? `Matches for "${searchQuery}" across all categories.`
                : currentCategory.blurb || 'Live animation and interface modules ready to drop into any project.'}
            </p>
          </div>
          <button
            className="btn btn-secondary btn-sm"
            type="button"
            onClick={() => setMotionPaused(!motionPaused)}
            aria-pressed={motionPaused}
          >
            {motionPaused ? 'Resume Motion' : 'Pause Motion'}
          </button>
        </header>

        {cards.length === 0 && !isLoading && (
          <div style={{ padding: '60px', textAlign: 'center', color: 'var(--muted)' }}>
            No modules match that query.
          </div>
        )}

        <div className="grid">
          {cards.map((card, idx) => (
            <ModuleCardTile
              key={card.id}
              card={card}
              ctx={ctx}
              isPaused={motionPaused}
              onExpand={() => openViewer(card, idx)}
              onCopyPrompt={() => copyToClipboard(card.prompt || card.sub, 'Prompt copied!')}
              onCopyCode={() => {
                if (ctx) {
                  const code = exportCardHtml(card, ctx);
                  copyToClipboard(code, 'HTML Code copied!');
                }
              }}
            />
          ))}
        </div>
      </main>

      {/* FULLSCREEN VIEWER MODAL */}
      <dialog ref={viewerDialogRef} className="custom-modal" onClose={closeViewer}>
        {viewerCard && (
          <div className="viewer">
            <div className="v-stage">
              <div className="v-frame" ref={viewerStageRef} />
            </div>
            <aside className="v-info">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="badge">{viewerCard.cat}</span>
                <button
                  className="btn btn-sm"
                  type="button"
                  onClick={closeViewer}
                  style={{ padding: '4px 10px' }}
                >
                  ✕
                </button>
              </div>

              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
                {viewerCard.title}
              </h2>
              <p style={{ color: 'var(--muted)', fontSize: '0.88rem', margin: 0 }}>{viewerCard.sub}</p>

              {viewerCard.libs && viewerCard.libs.length > 0 && (
                <div className="badges">
                  {viewerCard.libs.map((l) => (
                    <span key={l} className="badge">
                      {ctx?.libsMeta[l]?.label || l}
                    </span>
                  ))}
                </div>
              )}

              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  className="btn btn-sm"
                  type="button"
                  onClick={() => copyToClipboard(viewerCard.prompt || viewerCard.sub, 'Prompt copied!')}
                >
                  💬 Copy Prompt
                </button>
                <button
                  className="btn btn-sm btn-primary"
                  type="button"
                  onClick={() => {
                    if (ctx) {
                      copyToClipboard(exportCardHtml(viewerCard, ctx), 'HTML Code copied!');
                    }
                  }}
                >
                  ⚡ Copy Code
                </button>
              </div>

              <div>
                <p style={{ fontSize: '0.8rem', fontWeight: 700, margin: '8px 0 4px' }}>Prompt</p>
                <div className="v-prompt">{viewerCard.prompt || viewerCard.sub}</div>
              </div>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto',
                  paddingTop: '16px',
                  borderTop: 'var(--border-ink-thin)',
                }}
              >
                <button
                  className="btn btn-sm"
                  type="button"
                  disabled={viewerIndex <= 0}
                  onClick={() => {
                    const prev = viewerIndex - 1;
                    if (prev >= 0) openViewer(cards[prev], prev);
                  }}
                >
                  Previous
                </button>
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
                  {viewerIndex + 1} / {cards.length}
                </span>
                <button
                  className="btn btn-sm"
                  type="button"
                  disabled={viewerIndex >= cards.length - 1}
                  onClick={() => {
                    const next = viewerIndex + 1;
                    if (next < cards.length) openViewer(cards[next], next);
                  }}
                >
                  Next
                </button>
              </div>
            </aside>
          </div>
        )}
      </dialog>

      {/* Toast Notification */}
      {toastMsg && (
        <div
          role="status"
          style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: 'var(--ink)',
            color: 'var(--bg)',
            padding: '10px 18px',
            borderRadius: '8px',
            boxShadow: 'var(--shadow-pop)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            zIndex: 9999,
          }}
        >
          {toastMsg}
        </div>
      )}
    </div>
  );
}

interface TileProps {
  card: ModuleCard;
  ctx: LibraryContext | null;
  isPaused: boolean;
  onExpand: () => void;
  onCopyPrompt: () => void;
  onCopyCode: () => void;
}

function ModuleCardTile({ card, ctx, isPaused, onExpand, onCopyPrompt, onCopyCode }: TileProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const mountInstance = useRef<{ root: HTMLElement; destroy: () => void } | null>(null);

  useEffect(() => {
    if (!stageRef.current || !ctx) return;
    const stageEl = stageRef.current;

    const host = document.createElement('div');
    host.className = 'host';
    stageEl.appendChild(host);

    const fitObserver = new ResizeObserver((entries) => {
      for (const e of entries) {
        if (e.contentRect.width && card.screen) {
          stageEl.style.setProperty('--k', (e.contentRect.width / SCREEN_W).toFixed(4));
        }
      }
    });

    if (card.screen) fitObserver.observe(stageEl);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!mountInstance.current) {
              mountInstance.current = mountCard(host, card, ctx);
            }
          } else {
            mountInstance.current?.destroy();
            mountInstance.current = null;
          }
        }
      },
      { rootMargin: '250px' }
    );

    io.observe(stageEl);

    return () => {
      io.disconnect();
      fitObserver.disconnect();
      mountInstance.current?.destroy();
      mountInstance.current = null;
      stageEl.innerHTML = '';
    };
  }, [card, ctx]);

  // Motion pause effect
  useEffect(() => {
    if (mountInstance.current?.root) {
      if (isPaused) {
        mountInstance.current.root.setAttribute('data-paused', '1');
      } else {
        mountInstance.current.root.removeAttribute('data-paused');
      }
    }
  }, [isPaused]);

  return (
    <article className="card">
      <div className={`stage ${card.screen ? 'screen' : ''}`} ref={stageRef}>
        <button
          className="btn btn-sm"
          type="button"
          onClick={onExpand}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 10,
            padding: '4px 8px',
            fontSize: '0.75rem',
            background: 'var(--surface)',
          }}
          aria-label="Open preview"
        >
          ⤢ Preview
        </button>
      </div>

      <div className="card-info">
        <h3>{card.title}</h3>
        <p>{card.sub}</p>
        {card.libs && card.libs.length > 0 && (
          <div className="badges">
            {card.libs.map((l) => (
              <span key={l} className="badge">
                {ctx?.libsMeta[l]?.label || l}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="card-act">
        <button className="btn btn-sm" type="button" onClick={onCopyPrompt}>
          💬 Prompt
        </button>
        <button className="btn btn-sm btn-primary" type="button" onClick={onCopyCode}>
          ⚡ Code
        </button>
      </div>
    </article>
  );
}
