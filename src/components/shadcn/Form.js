'use client';
export default function Form({ children, onSubmit, className = '' }) {
  return (
    <form onSubmit={onSubmit} className={`space-y-4 ${className}`}>
      {children}
    </form>
  );
}
