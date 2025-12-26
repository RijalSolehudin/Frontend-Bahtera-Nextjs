'use client';
import { useEffect, useState } from 'react';
import React from 'react';

export default function MotionList({ children, className = '', containerProps = {}, itemProps = {} }) {
  const [Motion, setMotion] = useState(null);

  useEffect(() => {
    let mounted = true;
    import('framer-motion')
      .then((mod) => {
        if (mounted) setMotion(() => mod.motion);
      })
      .catch(() => {
        // framer-motion not available; fallback
      });
    return () => (mounted = false);
  }, []);

  if (!Motion) {
    return <div className={className} {...containerProps}>{children}</div>;
  }

  const containerVariants = {
    hidden: { opacity: 1 },
    show: { opacity: 1, transition: { staggerChildren: 0.06 } }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 8 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate="show"
      {...containerProps}
    >
      {React.Children.map(children, (child, i) => (
        <Motion.div key={i} variants={itemVariant} {...itemProps}>
          {child}
        </Motion.div>
      ))}
    </Motion.div>
  );
}
