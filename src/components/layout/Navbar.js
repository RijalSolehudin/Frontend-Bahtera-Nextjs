'use client';

import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './MobileMenu';
import { useAuth } from '@/context/AuthContext';
import Menu from '@/components/shadcn/Menu';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();


  const userMenuItems = [
    { label: 'Profile', onClick: () => console.log('Profile clicked') }, // Placeholder
    { label: 'Logout', onClick: logout },
  ];

  return (
    <>
      <nav className="w-full bg-white border-b border-slate-100">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center text-white font-bold shadow-soft">B</div>
            <span className="font-semibold text-primary">Bahtera</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 text-sm text-muted">
            <Link href="/" className="hover:text-primary">Home</Link>
            <Link href="/design" className="hover:text-primary">Design/Template</Link>

            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Hi, {user.name}</span>
                <Menu
                  trigger={<div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold cursor-pointer">{user.name[0]}</div>}
                  items={userMenuItems}
                />
              </div>
            ) : (
              <>
                <Link href="/register" className="hover:text-primary">Register</Link>
                <Link href="/login" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">Login</Link>
              </>
            )}
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

