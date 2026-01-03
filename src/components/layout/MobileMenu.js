'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

import { useAuth } from '@/context/AuthContext';


const menuItems = [
    { href: '/', label: 'Home' },
    { href: '/design', label: 'Design/Template' },
];

export default function MobileMenu({ isOpen, onClose }) {
    const { user, logout } = useAuth();

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 z-50 h-full w-[300px] bg-white border-l shadow-xl p-6"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <span className="text-lg font-bold text-primary">Menu</span>
                            <button
                                onClick={onClose}
                                className="p-2 rounded-full hover:bg-slate-100 transition-colors"
                            >
                                {/* SVG for Close Icon if Lucide is not available, but trying Lucide first is risky if not verified. 
                    Let's use a safe SVG just in case to avoid errors. */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 6 6 18" /><path d="m6 6 18 18" />
                                </svg>
                            </button>
                        </div>

                        <nav className="flex flex-col gap-4">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={onClose}
                                    className="px-4 py-3 rounded-md hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors text-base font-medium"
                                >
                                    {item.label}
                                </Link>
                            ))}
                            {user ? (
                                <>
                                    <div className="px-4 py-3 text-slate-700 font-medium border-t mt-2">
                                        Hi, {user.name}
                                    </div>
                                    <button
                                        onClick={() => { logout(); onClose(); }}
                                        className="px-4 py-3 text-left rounded-md hover:bg-slate-50 text-red-600 transition-colors text-base font-medium"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        onClick={onClose}
                                        className="px-4 py-3 rounded-md hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors text-base font-medium"
                                    >
                                        Login
                                    </Link>
                                    <Link
                                        href="/register"
                                        onClick={onClose}
                                        className="px-4 py-3 rounded-md hover:bg-slate-50 text-slate-700 hover:text-primary transition-colors text-base font-medium"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </nav>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
