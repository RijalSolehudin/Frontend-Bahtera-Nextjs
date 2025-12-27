'use client';

import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
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
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="px-2 py-1 border rounded text-primary hover:cursor-pointer hover:bg-slate-50 transition-colors"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

