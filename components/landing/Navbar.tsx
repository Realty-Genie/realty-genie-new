'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const navLinks = [
        {
            name: 'Solutions',
            href: '#',
            dropdown: [
                { name: 'IDX Website & SEO', href: '/solutions/idx-website' },
                { name: 'AI Lead Management', href: '/solutions/lead-management' },
                { name: 'AI Calling Assistant', href: '/solutions/calling-assistant' },
            ]
        },
        {
            name: 'Services',
            href: '#',
            dropdown: [
                { name: 'Social Media', href: '/services/social-media' },
                { name: 'Market Intelligence', href: '/services/market-intelligence' },
                { name: 'AI Dashboard', href: '/services/ai-dashboard' },
            ]
        },
        { name: 'How It Works', href: '/how-it-works' },
        { name: 'About', href: '/about' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
                <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight text-primary flex items-center gap-2 group">
                    <span className="font-outfit">RealtyGenie</span>
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
                    <Button size="sm" className="shadow-lg shadow-primary/10 hover:shadow-primary/20 active:translate-y-0.5 transition-all">
                        Book a Demo
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden bg-white border-b border-border overflow-y-auto max-h-[80vh]"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.dropdown ? (
                                        <div className="flex flex-col">
                                            <button
                                                onClick={() => setActiveDropdown(activeDropdown === link.name ? null : link.name)}
                                                className="flex items-center justify-between w-full text-lg font-medium py-3 text-primary"
                                            >
                                                {link.name}
                                                <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {activeDropdown === link.name && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden pl-4 flex flex-col gap-2 mb-2"
                                                    >
                                                        {link.dropdown.map((item) => (
                                                            <Link
                                                                key={item.name}
                                                                href={item.href}
                                                                className="text-base text-muted-foreground py-2"
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
                                            className="text-lg font-medium py-3 text-primary block"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="w-full mt-4">Book a Demo</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
