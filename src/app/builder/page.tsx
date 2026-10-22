'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import ThemeToggle from '@/components/common/ThemeToggle';
import { mountCard, exportPageHtml, SECTION_W, SCREEN_W } from '@/lib/ml-core';
import { withBasePath } from '@/lib/base-path';
import { analyzeImageClient } from '@/lib/client-agent/vision';
import { matchSectionsClient } from '@/lib/client-agent/matcher';
import { retextClient } from '@/lib/client-agent/retext';
import { getKey, setKey } from '@/lib/client-agent/gemini';
import type { LibraryContext, LibraryIndex, ModuleCard, SlimModule, PageTheme } from '@/lib/types';

const ROLES = [
  'nav',
  'hero',
  'logos',
  'features',
  'stats',
  'testimonials',
  'pricing',
  'faq',
  'form',
  'cta',
  'gallery',
  'footer',
  'background',
  'other',
];

const ASPECTS: Array<[string, number]> = [
  ['21:9', 21 / 9],
  ['16:9', 16 / 9],
  ['3:2', 3 / 2],
  ['4:3', 4 / 3],
  ['1:1', 1],
  ['3:1', 3],
  ['4:1', 4],
  ['5:1', 5],
];

interface BuilderSection {
  uid: number;
  id: string;
  aspect: number;
  role?: string;
  html?: string | null;
  conf?: number;
  reason?: string;
}

const STORE_KEY = 'automato-recipe';

export default function BuilderPage() {
  const [ctx, setCtx] = useState<LibraryContext | null>(null);
  const [index, setIndex] = useState<LibraryIndex | null>(null);
  const [apiKey, setApiKey] = useState<string>('');

  // Builder state
  const [theme, setTheme] = useState<PageTheme>({ mode: 'dark', accent: '#ff4433' });
  const [sections, setSections] = useState<BuilderSection[]>([]);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedPreviewUrl, setUploadedPreviewUrl] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>('');
  const [useRetext, setUseRetext] = useState<boolean>(true);

  // Processing state
  const [isBuilding, setIsBuilding] = useState<boolean>(false);
  const [currentStep, setCurrentStep] = useState<'idle' | 'read' | 'match' | 'copy' | 'draw'>('idle');
  const [statusMsg, setStatusMsg] = useState<string>('');
  const [isMotionPaused, setIsMotionPaused] = useState<boolean>(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Swap modal state
  const [swapTargetIndex, setSwapTargetIndex] = useState<number | null>(null);
  const [swapRole, setSwapRole] = useState<string>('all');
  const [swapFilterQuery, setSwapFilterQuery] = useState<string>('');
  const [swapCandidates, setSwapCandidates] = useState<SlimModule[]>([]);
  const swapDialogRef = useRef<HTMLDialogElement>(null);

  const cardCache = useRef<Record<string, ModuleCard>>({});
  const uidCounter = useRef<number>(1);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2000);
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
        setApiKey(getKey());

        // Restore saved recipe if present
        const saved = localStorage.getItem(STORE_KEY);
        if (saved) {
          try {
            const parsed = JSON.parse(saved);
            if (parsed.theme) setTheme(parsed.theme);
            if (Array.isArray(parsed.sections)) {
              setSections(
                parsed.sections.map((s: any) => ({
                  ...s,
                  uid: uidCounter.current++,
                }))
              );
            }
          } catch {}
        }
      } catch (err) {
        console.error('Failed to init builder:', err);
      }
    }
    init();
  }, []);

  // Save recipe on section or theme change
  useEffect(() => {
    if (sections.length > 0) {
      try {
        const payload = JSON.stringify({
          theme,
          sections: sections.map(({ id, aspect, role, html, conf, reason }) => ({
            id,
            aspect,
            role,
            html,
            conf,
            reason,
          })),
        });
        localStorage.setItem(STORE_KEY, payload);
      } catch {}
    }
  }, [sections, theme]);

  // Load module card details
  const getCardDetails = useCallback(
    async (id: string): Promise<ModuleCard | null> => {
      if (cardCache.current[id]) return cardCache.current[id];
      if (!index) return null;
      const slim = index.modules.find((m) => m.id === id);
      if (!slim) return null;
      try {
        const res = await fetch(withBasePath(`/library/modules/${slim.cat}.json`));
        const all: ModuleCard[] = await res.json();
        for (const c of all) cardCache.current[c.id] = c;
        return cardCache.current[id] || null;
      } catch {
        return null;
      }
    },
    [index]
  );

  // File upload handling
  const handleFileSelect = (file: File) => {
    if (!['image/png', 'image/jpeg', 'image/webp'].includes(file.type)) {
      showToast('Please select a PNG, JPEG or WebP image');
      return;
    }
    setUploadedFile(file);
    const url = URL.createObjectURL(file);
    setUploadedPreviewUrl(url);
  };

  // Clipboard paste support
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;
      for (let i = 0; i < items.length; i++) {
        if (items[i].type.startsWith('image/')) {
          const f = items[i].getAsFile();
          if (f) handleFileSelect(f);
          break;
        }
      }
    };
    window.addEventListener('paste', handlePaste);
    return () => window.removeEventListener('paste', handlePaste);
  }, []);

  // Run AI analysis and build
  const runBuild = async () => {
    if (!uploadedFile || !index) return;
    setIsBuilding(true);
    setStatusMsg('');
    setCurrentStep('read');

    try {
      const base64Data = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          const res = reader.result as string;
          const base64 = res.split(',')[1] || '';
          resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(uploadedFile);
      });

      // 1. Vision Analysis
      const spec = await analyzeImageClient(base64Data, uploadedFile.type, notes);

      // 2. Section Matching
      setCurrentStep('match');
      const matched = await matchSectionsClient(spec, index, base64Data, uploadedFile.type);

      // 3. Text Replacement
      setCurrentStep('copy');
      let retextMap: Record<number, string> = {};
      if (useRetext) {
        retextMap = await retextClient(matched, getCardDetails);
      }

      // 4. Assemble Page
      setCurrentStep('draw');
      if (spec.page) {
        setTheme({
          mode: spec.page.mode || 'light',
          accent: spec.page.accent || '#0A6CFF',
        });
      }

      const newSections: BuilderSection[] = matched.map((s) => ({
        uid: uidCounter.current++,
        id: s.pick?.id || 'h-split-stat',
        aspect: s.aspect || 16 / 9,
        role: s.role,
        html: retextMap[s.order] || null,
        conf: s.pick?.confidence,
        reason: s.pick?.reason,
      }));

      setSections(newSections);
      setStatusMsg('Build completed successfully!');
    } catch (err: any) {
      console.error('Build failed:', err);
      setStatusMsg(`Error: ${err.message}`);
    } finally {
      setIsBuilding(false);
      setCurrentStep('idle');
    }
  };

  // Section manipulation
  const removeSection = (indexToRemove: number) => {
    setSections((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  const moveSection = (from: number, to: number) => {
    setSections((prev) => {
      const copy = [...prev];
      const [item] = copy.splice(from, 1);
      copy.splice(to, 0, item);
      return copy;
    });
  };

  const changeAspect = (idx: number, ar: number) => {
    setSections((prev) =>
      prev.map((s, i) => (i === idx ? { ...s, aspect: ar } : s))
    );
  };

  const addDefaultSection = async (insertAfterIndex = -1) => {
    const newSection: BuilderSection = {
      uid: uidCounter.current++,
      id: 'h-split-stat',
      aspect: 16 / 9,
      role: 'hero',
    };
    setSections((prev) => {
      const copy = [...prev];
      copy.splice(insertAfterIndex + 1, 0, newSection);
      return copy;
    });
  };

  // Open swap dialog
  const openSwapModal = async (targetIndex: number) => {
    setSwapTargetIndex(targetIndex);
    const targetSection = sections[targetIndex];
    setSwapRole(targetSection.role || 'all');
    if (swapDialogRef.current) swapDialogRef.current.showModal();
  };

  // Filter swap candidates
  useEffect(() => {
    if (!index) return;
    let candidates = index.modules.filter((m) => m.kind === 'section');
    if (swapRole !== 'all') {
      candidates = candidates.filter((m) => m.role === swapRole || m.cat === swapRole);
    }
    if (swapFilterQuery.trim()) {
      const q = swapFilterQuery.trim().toLowerCase();
      candidates = candidates.filter(
        (m) => m.title.toLowerCase().includes(q) || m.sub.toLowerCase().includes(q)
      );
    }
    setSwapCandidates(candidates.slice(0, 48));
  }, [swapRole, swapFilterQuery, index]);

  const selectSwapModule = (newId: string) => {
    if (swapTargetIndex == null) return;
    setSections((prev) =>
      prev.map((s, i) =>
        i === swapTargetIndex ? { ...s, id: newId, html: null, conf: undefined, reason: undefined } : s
      )
    );
    if (swapDialogRef.current) swapDialogRef.current.close();
    setSwapTargetIndex(null);
  };

  // Export handlers
  const generateExportHtml = async (): Promise<string> => {
    if (!ctx) return '';
    const loadedCards = await Promise.all(
      sections.map(async (s) => {
        const c = await getCardDetails(s.id);
        if (!c) return null;
        return {
          card: s.html ? { ...c, html: s.html } : c,
          aspect: s.aspect,
          label: c.title,
        };
      })
    );

    const validSections = loadedCards.filter(Boolean) as Array<{
      card: ModuleCard;
      aspect: number;
      label: string;
    }>;

    return exportPageHtml(ctx, {
      title: 'numberJuan Blueprint Export',
      sections: validSections,
      theme,
    });
  };

  const handleDownloadHtml = async () => {
    const html = await generateExportHtml();
    if (!html) return;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'wireframe.html';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 2000);
    showToast('Downloaded wireframe.html!');
  };

  const handleOpenPreview = async () => {
    const html = await generateExportHtml();
    if (!html) return;
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  const handleCopyHtml = async () => {
    const html = await generateExportHtml();
    if (!html) return;
    try {
      await navigator.clipboard.writeText(html);
      showToast('HTML copied to clipboard!');
    } catch {
      showToast('Copy failed');
    }
  };

  const handleSaveRecipe = () => {
    const recipe = JSON.stringify({ theme, sections }, null, 2);
    const blob = new Blob([recipe], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'blueprint-recipe.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    showToast('Saved recipe JSON!');
  };

  const handleLoadRecipe = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const parsed = JSON.parse(e.target?.result as string);
        if (parsed.theme) setTheme(parsed.theme);
        if (Array.isArray(parsed.sections)) {
          setSections(
            parsed.sections.map((s: any) => ({
              ...s,
              uid: uidCounter.current++,
            }))
          );
          showToast('Loaded blueprint recipe!');
        }
      } catch {
        showToast('Invalid recipe file');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="b-shell">
      {/* CONTROLS SIDEBAR */}
      <aside className="b-side" aria-label="Blueprint controls">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                Blueprint Studio
              </small>
            </span>
          </Link>
          <ThemeToggle />
        </div>

        <div className="tabs" aria-label="App switcher">
          <Link href="/library">✦ Pre-Fab Library</Link>
          <Link href="/builder" aria-current="page" className="active">
            ✦ Blueprint Studio
          </Link>
          <Link href="/creator">The Creator</Link>
        </div>

        {/* 1. Upload */}
        <section className="panel">
          <h3>1. Upload a design</h3>
          <label className="drop" id="drop">
            <input
              id="file"
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={(e) => {
                if (e.target.files?.[0]) handleFileSelect(e.target.files[0]);
              }}
            />
            <b>Drop a screenshot or click to browse</b>
            <small>PNG, JPEG or WebP, up to 12 MB. You can also paste from clipboard.</small>
          </label>
          {uploadedPreviewUrl && (
            <div style={{ marginTop: '10px', borderRadius: '8px', overflow: 'hidden', border: 'var(--border-ink-thin)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={uploadedPreviewUrl} alt="Uploaded design preview" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          )}
        </section>

        {/* 2. Build */}
        <section className="panel">
          <h3>2. Build</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <textarea
              className="notes"
              id="notes"
              placeholder="Optional notes, e.g. SaaS landing page, dark theme, keep it minimal"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              aria-label="Notes for the agent"
            />
            <label style={{ display: 'flex', gap: '8px', fontSize: '13px', alignItems: 'center' }}>
              <input
                id="retext"
                type="checkbox"
                checked={useRetext}
                onChange={(e) => setUseRetext(e.target.checked)}
              />
              Use the text from the design
            </label>

            <div>
              <details style={{ fontSize: '0.82rem', color: 'var(--muted)', cursor: 'pointer' }}>
                <summary style={{ fontWeight: 600 }}>✦ Gemini API Key (Optional)</summary>
                <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <input
                    type="password"
                    placeholder="AIzaSy... (leave blank for Instant Demo)"
                    value={apiKey}
                    onChange={(e) => {
                      setApiKey(e.target.value);
                      setKey(e.target.value);
                    }}
                    style={{
                      width: '100%',
                      padding: '6px 8px',
                      fontSize: '0.8rem',
                      borderRadius: '6px',
                      border: 'var(--border-ink-thin)',
                      background: 'var(--bg)',
                      color: 'var(--ink)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  />
                  <small style={{ fontSize: '0.72rem', color: 'var(--muted)' }}>
                    Stored in local browser storage only. If blank, instant client demo matching is used.
                  </small>
                </div>
              </details>
            </div>
            <button
              className="btn btn-primary"
              id="go"
              type="button"
              disabled={!uploadedFile || isBuilding}
              onClick={runBuild}
            >
              {isBuilding ? 'Analyzing design…' : 'Analyze and build'}
            </button>

            {statusMsg && (
              <div style={{ fontSize: '0.82rem', fontFamily: 'var(--font-mono)', color: 'var(--muted)' }}>
                {statusMsg}
              </div>
            )}

            {isBuilding && (
              <ul className="steps">
                <li className={currentStep === 'read' ? 'active' : 'done'}>Reading the design</li>
                <li className={currentStep === 'match' ? 'active' : currentStep === 'read' ? '' : 'done'}>
                  Matching modules
                </li>
                <li className={currentStep === 'copy' ? 'active' : ['read', 'match'].includes(currentStep) ? '' : 'done'}>
                  Writing the copy
                </li>
                <li className={currentStep === 'draw' ? 'active' : ''}>Assembling the page</li>
              </ul>
            )}
          </div>
        </section>

        {/* 3. Style */}
        <section className="panel">
          <h3>3. Style</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                className={`btn btn-sm ${theme.mode === 'light' ? 'btn-primary' : 'btn-secondary'}`}
                type="button"
                onClick={() => setTheme((t) => ({ ...t, mode: 'light' }))}
              >
                Light
              </button>
              <button
                className={`btn btn-sm ${theme.mode === 'dark' ? 'btn-primary' : 'btn-secondary'}`}
                type="button"
                onClick={() => setTheme((t) => ({ ...t, mode: 'dark' }))}
              >
                Dark
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <label htmlFor="accent-picker" style={{ fontSize: '0.85rem', fontWeight: 700 }}>
                Accent color
              </label>
              <input
                id="accent-picker"
                type="color"
                value={theme.accent}
                onChange={(e) => setTheme((t) => ({ ...t, accent: e.target.value }))}
                style={{ cursor: 'pointer', border: 'var(--border-ink-thin)', borderRadius: '6px' }}
              />
            </div>
          </div>
        </section>

        {/* 4. Export */}
        <section className="panel">
          <h3>4. Export</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            <button className="btn btn-sm btn-primary" type="button" onClick={handleDownloadHtml}>
              Download HTML
            </button>
            <button className="btn btn-sm" type="button" onClick={handleOpenPreview}>
              Open preview
            </button>
            <button className="btn btn-sm" type="button" onClick={handleCopyHtml}>
              Copy HTML
            </button>
            <button className="btn btn-sm" type="button" onClick={handleSaveRecipe}>
              Save recipe
            </button>
            <label className="btn btn-sm" style={{ cursor: 'pointer' }}>
              Load recipe
              <input
                type="file"
                accept="application/json"
                hidden
                onChange={(e) => {
                  if (e.target.files?.[0]) handleLoadRecipe(e.target.files[0]);
                }}
              />
            </label>
          </div>
        </section>
      </aside>

      {/* MAIN BUILDER WORKSPACE */}
      <main className="b-main">
        <div className="b-top">
          <div>
            <h1>Your Page</h1>
            <p>
              {sections.length > 0
                ? `${sections.length} section${sections.length > 1 ? 's' : ''}. Swap, reorder or adjust aspect ratios.`
                : 'No sections yet. Upload a design or add a section by hand.'}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              className="btn btn-sm"
              type="button"
              onClick={() => setIsMotionPaused(!isMotionPaused)}
            >
              {isMotionPaused ? 'Resume motion' : 'Pause motion'}
            </button>
            <button
              className="btn btn-sm"
              type="button"
              onClick={() => setSections([])}
            >
              Clear
            </button>
          </div>
        </div>

        {sections.length === 0 ? (
          <div
            style={{
              padding: '80px 20px',
              textAlign: 'center',
              background: 'var(--panel)',
              border: 'var(--border-ink)',
              borderRadius: 'var(--r)',
              boxShadow: 'var(--shadow-pop)',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', marginBottom: '8px' }}>
              Nothing here yet
            </h2>
            <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>
              Upload a design on the left panel or manually add section modules to assemble your wireframe.
            </p>
            <button className="btn btn-primary" type="button" onClick={() => addDefaultSection()}>
              ✦ Add a section
            </button>
          </div>
        ) : (
          <div className="page-sections">
            {sections.map((section, idx) => (
              <BuilderSectionCard
                key={section.uid}
                section={section}
                index={idx}
                total={sections.length}
                ctx={ctx}
                theme={theme}
                isPaused={isMotionPaused}
                getCardDetails={getCardDetails}
                onAspectChange={(ar) => changeAspect(idx, ar)}
                onSwap={() => openSwapModal(idx)}
                onMoveUp={() => moveSection(idx, idx - 1)}
                onMoveDown={() => moveSection(idx, idx + 1)}
                onAddBelow={() => addDefaultSection(idx)}
                onRemove={() => removeSection(idx)}
              />
            ))}
          </div>
        )}
      </main>

      {/* SWAP MODULE MODAL */}
      <dialog ref={swapDialogRef} className="custom-modal">
        <div style={{ padding: '24px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800 }}>
              Choose a replacement module
            </h2>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <select
                className="btn btn-sm"
                value={swapRole}
                onChange={(e) => setSwapRole(e.target.value)}
              >
                <option value="all">All Roles</option>
                {ROLES.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
              <input
                type="search"
                placeholder="Filter title or description"
                value={swapFilterQuery}
                onChange={(e) => setSwapFilterQuery(e.target.value)}
                style={{
                  padding: '6px 12px',
                  borderRadius: '8px',
                  border: 'var(--border-ink-thin)',
                  background: 'var(--panel-2)',
                }}
              />
              <button
                className="btn btn-sm"
                type="button"
                onClick={() => swapDialogRef.current?.close()}
              >
                ✕
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: '14px',
              maxHeight: '65vh',
              overflowY: 'auto',
            }}
          >
            {swapCandidates.map((m) => (
              <div
                key={m.id}
                className="comic-card"
                style={{ padding: '14px', cursor: 'pointer' }}
                onClick={() => selectSwapModule(m.id)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span className="badge">{m.cat}</span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)' }}>{m.role}</span>
                </div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700 }}>
                  {m.title}
                </h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginTop: '4px' }}>{m.sub}</p>
              </div>
            ))}
          </div>
        </div>
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

interface SectionCardProps {
  section: BuilderSection;
  index: number;
  total: number;
  ctx: LibraryContext | null;
  theme: PageTheme;
  isPaused: boolean;
  getCardDetails: (id: string) => Promise<ModuleCard | null>;
  onAspectChange: (ar: number) => void;
  onSwap: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  onAddBelow: () => void;
  onRemove: () => void;
}

function BuilderSectionCard({
  section,
  index,
  total,
  ctx,
  theme,
  isPaused,
  getCardDetails,
  onAspectChange,
  onSwap,
  onMoveUp,
  onMoveDown,
  onAddBelow,
  onRemove,
}: SectionCardProps) {
  const [card, setCard] = useState<ModuleCard | null>(null);
  const fitRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const mountInstance = useRef<{ root: HTMLElement; destroy: () => void } | null>(null);

  useEffect(() => {
    let active = true;
    getCardDetails(section.id).then((c) => {
      if (active) setCard(c);
    });
    return () => {
      active = false;
    };
  }, [section.id, getCardDetails]);

  // Mount card inside shadow DOM
  useEffect(() => {
    if (!card || !ctx || !innerRef.current) return;
    const inner = innerRef.current;
    inner.innerHTML = '';

    const lw = card.screen ? SCREEN_W : SECTION_W;
    inner.style.width = `${lw}px`;
    inner.style.height = `${lw / section.aspect}px`;

    const m = mountCard(inner, section.html ? { ...card, html: section.html } : card, ctx, theme);
    mountInstance.current = m;

    const ro = new ResizeObserver(() => {
      if (fitRef.current) {
        const scale = fitRef.current.clientWidth / lw;
        inner.style.transform = `scale(${scale})`;
      }
    });
    if (fitRef.current) ro.observe(fitRef.current);

    return () => {
      ro.disconnect();
      m.destroy();
      mountInstance.current = null;
    };
  }, [card, ctx, section.aspect, section.html, theme]);

  // Pause motion
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
    <section className="sec">
      <div className="bar">
        <span className="chip">
          <i>{section.role || card?.cat || 'section'}</i>
          {card?.title || section.id}
          {section.conf != null && (
            <span className="conf">{Math.round(section.conf * 100)}%</span>
          )}
        </span>
        <span className="sp" />

        <label className="tool" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Ratio
          <select
            value={section.aspect}
            onChange={(e) => onAspectChange(parseFloat(e.target.value))}
            style={{ background: 'transparent', border: 'none', fontWeight: 700 }}
          >
            {ASPECTS.map(([label, val]) => (
              <option key={label} value={val}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <button className="tool" type="button" onClick={onSwap}>
          Swap
        </button>
        <button className="tool" type="button" disabled={index === 0} onClick={onMoveUp}>
          Up
        </button>
        <button className="tool" type="button" disabled={index === total - 1} onClick={onMoveDown}>
          Down
        </button>
        <button className="tool" type="button" onClick={onAddBelow}>
          Add below
        </button>
        <button className="tool danger" type="button" onClick={onRemove}>
          Remove
        </button>
      </div>

      {section.reason && <div className="reason">{section.reason}</div>}

      <div
        className="fit"
        ref={fitRef}
        style={{ ['--ar' as any]: `${section.aspect}` }}
      >
        <div className="inner" ref={innerRef} />
      </div>
    </section>
  );
}
