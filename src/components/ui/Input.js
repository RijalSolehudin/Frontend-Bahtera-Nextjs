export default function Input({ label, error, ...props }) {
    return (
        <div className="flex flex-col gap-2">
            {label && <label className="text-sm font-medium text-gray-700">{label}</label>}
            <input
                className={`px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all
            ${error ? 'border-red-500 focus:ring-red-200' : 'border-gray-200'}
            ${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
                {...props}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
        </div>
    );
}
