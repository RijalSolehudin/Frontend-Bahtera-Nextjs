'use client';
import { useEffect, useState } from 'react';

export default function MotionWrapper({ children, className = '', motionProps = {} }) {
  const [Motion, setMotion] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('framer-motion')
      .then((mod) => {
        // Respect prefer-reduced-motion and fall back gracefully
        const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (mounted && !prefersReduced) setMotion(() => mod.motion);
      })
      .catch(() => {
        // framer-motion not installed — fallback to plain div
      });

    return () => (mounted = false);
  }, []);

  if (Motion) {
    return (
      <Motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.28 }}
        className={className}
        {...motionProps}
      >
        {children}
      </Motion.div>
    );
  }

  return (
    <div className={className}>
      {children}
    </div>
  );
}
