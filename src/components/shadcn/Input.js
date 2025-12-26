'use client';
export default function Input({ id, label, type = 'text', value, onChange, placeholder = '', error = '', className = '', ...props }) {
  return (
    <div className={`space-y-1 ${className}`}>
      {label ? (
        <label htmlFor={id} className="text-sm font-medium text-muted">
          {label}
        </label>
      ) : null}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full border rounded px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary focus-visible:ring-4 focus-visible:ring-primary/20"
        {...props}
      />
      {error ? <div className="text-sm text-red-500">{error}</div> : null}
    </div>
  );
}
