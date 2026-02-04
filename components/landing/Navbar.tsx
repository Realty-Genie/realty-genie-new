'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TryCallgenieButton } from './TryCallgenieButton';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);


    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        {
            name: 'Solutions',
            href: '#',
            dropdown: [
                { name: 'IDX Website & SEO', href: '/solutions/idx-website' },
                { name: 'AI Calling Assistant', href: '/solutions/calling-assistant' },
                { name: 'AI Lead Management', href: '/solutions/lead-management' },
            ]
        },
        {
            name: 'Services',
            href: '#',
            dropdown: [
                { name: 'Social Media', href: '/services/social-media' },
                { name: 'Market Intelligence', href: '/services/market-intelligence' },
                { name: 'Team monitoring', href: '/services/ai-dashboard' },
            ]
        },
        { name: 'How It Works', href: '/how-it-works' },
    ];

    return (
        <nav
            style={{ WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-md'
                : 'bg-white/50 backdrop-blur-sm py-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-12 md:h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <img src="/logo.png" alt="RealtyGenie" className="h-8 md:h-10 w-auto" />
                    <span className="text-xl md:text-2xl font-bold tracking-tight text-primary font-outfit">RealtyGenie</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div
                            key={link.name}
                            className="relative group"
                            onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 py-4"
                            >
                                {link.name}
                                {link.dropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                            </Link>

                            {link.dropdown && (
                                <AnimatePresence>
                                    {activeDropdown === link.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="absolute top-full left-0 w-64 bg-white border border-border shadow-xl rounded-xl p-2"
                                        >
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all"
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}

                    <Button
                        onClick={() => window.open("https://cal.com/realtygenie/30min?overlayCalendar=true", "_blank")}
                        size="sm"
                        variant="outline"
                        className="h-12 px-2.5 text-base border-blue-200 hover:bg-blue-50 text-blue-600 transition-all"
                    >
                        Book a Demo
                    </Button>

                    <TryCallgenieButton />
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-slate-900 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[calc(100%+8px)] left-4 right-4 z-50 md:hidden bg-white rounded-2xl border border-slate-200 shadow-2xl p-6"
                        >
                            <div className="flex flex-col gap-1">
                                {navLinks.map((link) => (
                                    <div key={link.name}>
                                        {link.dropdown ? (
                                            <div className="flex flex-col">
                                                <button
                                                    onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                    className="flex items-center justify-between w-full text-lg font-bold py-4 text-slate-900 border-b border-slate-50"
                                                >
                                                    {link.name}
                                                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                                </button>
                                                <AnimatePresence>
                                                    {activeDropdown === link.name && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden bg-slate-50/50 rounded-xl mt-2 px-4 flex flex-col"
                                                        >
                                                            {link.dropdown.map((item) => (
                                                                <Link
                                                                    key={item.name}
                                                                    href={item.href}
                                                                    className="text-base text-slate-600 py-3 font-medium hover:text-blue-600 transition-colors"
                                                                    onClick={() => setIsMenuOpen(false)}
                                                                >
                                                                    {item.name}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className="text-lg font-bold py-4 text-slate-900 block border-b border-slate-50"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <div className="mt-6 flex flex-col gap-3">
                                    <Button
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            window.open("https://cal.com/realtygenie/30min?overlayCalendar=true", "_blank");
                                        }}
                                        variant="outline"
                                        className="w-full h-15 text-base font-bold border-blue-200 text-blue-600 hover:bg-blue-50 rounded-xl transition-all"
                                    >
                                        Book a Demo
                                    </Button>
                                    <TryCallgenieButton
                                        className="w-full justify-center"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};
