'use client';

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { About } from '@/components/landing/About';
import { Footer } from '@/components/landing/Footer';

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
                    <Footer />
                </div>
            </footer>
        </div>
    );
}
