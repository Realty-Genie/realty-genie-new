'use client';

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { About } from '@/components/landing/About';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-[#0F172A] overflow-x-hidden font-sans">
            <Navbar />
            <main className="pt-20"> {/* Offset for Fixed Navbar */}
                <About />
            </main>

            {/* Simple Footer for the About page */}
            <footer className="bg-white border-t border-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">R</div>
                        <span className="font-bold text-lg tracking-tight">RealtyGenie</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-500">
                        <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                        <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
                        <Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
                    </div>

                    <div className="text-sm text-slate-400">
                        © {new Date().getFullYear()} RealtyGenie
                    </div>
                </div>
            </footer>
        </div>
    );
}
