export default function AuthLayout({ children }) {
    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full max-w-md space-y-8 px-4">
                {children}
            </div>
        </div>
    );
}
