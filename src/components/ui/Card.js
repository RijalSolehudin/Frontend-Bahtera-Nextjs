export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white border border-slate-100 rounded-lg p-4 shadow-soft ${className}`}>
      {children}
    </div>
  );
}
