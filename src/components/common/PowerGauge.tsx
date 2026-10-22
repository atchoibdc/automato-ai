'use client';

import { useEffect, useState } from 'react';

export default function PowerGauge() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(y / max, 1) : 0;
      setProgress(p * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="power-gauge" aria-hidden="true">
      <span className="power-gauge-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
