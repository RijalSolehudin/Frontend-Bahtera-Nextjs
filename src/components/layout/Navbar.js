import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-slate-100">
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold shadow-soft">B</div>
          <span className="font-semibold text-primary">Bahtera</span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm text-muted">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/design" className="hover:text-primary">Design/Template</Link>
          <Link href="/register" className="hover:text-primary">Register</Link>
          <Link href="/login" className="hover:text-primary">Login</Link>
        </div>

        <div className="md:hidden">
          <details>
            <summary className="px-2 py-1 border rounded">Menu</summary>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/">Home</Link>
              <Link href="/design">Design/Template</Link>
              <Link href="/register">Register</Link>
              <Link href="/login">Login</Link>
            </div>
          </details>
        </div>
      </div>
    </nav>
  );
}
