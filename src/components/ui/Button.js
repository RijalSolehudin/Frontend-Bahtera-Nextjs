export default function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium shadow-sm';
  const variants = {
    solid: 'bg-primary text-white hover:opacity-90',
    ghost: 'bg-transparent text-primary border border-transparent hover:bg-neutral',
    outline: 'bg-white text-primary border border-slate-200'
  };
  return (
    <button className={`${base} ${variants[variant] || variants.solid} ${className}`} {...props}>
      {children}
    </button>
  );
}
