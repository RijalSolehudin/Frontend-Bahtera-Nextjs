'use client';
import { useState, useRef, useEffect } from 'react';

export default function Menu({ trigger, items = [] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    function onDoc(e) {
      if (!ref.current) return;
      if (!ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('click', onDoc);
    return () => document.removeEventListener('click', onDoc);
  }, []);

  function onKeyDown(e) {
    if (!ref.current) return;
    const focusable = Array.from(ref.current.querySelectorAll('button')).filter((b) => !b.disabled);
    const idx = focusable.indexOf(document.activeElement);
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = focusable[(idx + 1) % focusable.length];
      next && next.focus();
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = focusable[(idx - 1 + focusable.length) % focusable.length];
      next && next.focus();
    }
    if (e.key === 'Escape') {
      setOpen(false);
    }
  }

  return (
    <div ref={ref} className="relative inline-block">
      <button onClick={() => setOpen((s) => !s)} aria-haspopup="menu" aria-expanded={open} className="px-3 py-1 rounded bg-transparent">{trigger}</button>
      {open ? (
        <div role="menu" onKeyDown={onKeyDown} className="absolute right-0 mt-2 bg-white rounded border shadow-sm w-48 py-1">
          {items.map((it, i) => (
            <button role="menuitem" key={i} onClick={() => { it.onClick && it.onClick(); setOpen(false); }} className="w-full text-left px-3 py-2 hover:bg-slate-50 text-sm">{it.label}</button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
