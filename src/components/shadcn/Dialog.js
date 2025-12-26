'use client';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

export default function Dialog({ open, onOpenChange, title, children }) {
  const elRef = useRef(null);
  const previouslyFocused = useRef(null);

  useEffect(() => {
    if (!elRef.current) {
      elRef.current = document.createElement('div');
      elRef.current.setAttribute('id', 'dialog-root');
    }
    document.body.appendChild(elRef.current);
    return () => {
      if (elRef.current && elRef.current.parentNode) elRef.current.parentNode.removeChild(elRef.current);
    };
  }, []);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') onOpenChange(false);
    }

    if (open) {
      previouslyFocused.current = document.activeElement;
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      // focus first focusable element in next tick
      setTimeout(() => {
        const el = elRef.current.querySelector('[tabindex], button, a, input');
        if (el) el.focus();
      }, 10);
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (previouslyFocused.current && previouslyFocused.current.focus) previouslyFocused.current.focus();
    };
  }, [open, onOpenChange]);

  if (!open || !elRef.current) return null;

  const titleId = title ? 'dialog-title' : undefined;

  return createPortal(
    <div role="dialog" aria-modal="true" aria-labelledby={titleId} className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/40" onClick={() => onOpenChange(false)} />

      <div className="relative z-10 max-w-lg w-full bg-white rounded-lg shadow-soft p-6">
        {title ? <h3 id={titleId} className="text-lg font-semibold mb-3">{title}</h3> : null}
        <div>{children}</div>
        <div className="mt-4 flex justify-end gap-2">
          <button className="px-3 py-2 rounded bg-slate-100" onClick={() => onOpenChange(false)}>Tutup</button>
        </div>
      </div>
    </div>,
    elRef.current
  );
}
