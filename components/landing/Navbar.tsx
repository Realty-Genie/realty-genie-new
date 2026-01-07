'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Solutions', href: '/solutions' },
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
                        <Link key={link.name} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                            {link.name}
                        </Link>
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
                        className="md:hidden bg-white border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-4">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-lg font-medium py-2 text-primary" onClick={() => setIsMenuOpen(false)}>
                                    {link.name}
                                </Link>
                            ))}
                            <Button className="w-full">Book a Demo</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
