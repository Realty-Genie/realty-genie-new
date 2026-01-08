'use client';

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function PlaceholderPage({ params }: { params: { slug: string } }) {
    // This is a generic placeholder template for newly created pages
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans">
            <Navbar />
            <main className="pt-32 pb-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8">
                            <Sparkles className="w-4 h-4" />
                            Premium Solution
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
                            Coming Soon
                        </h1>
                        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
                            We are currently building this feature to provide you with the best AI-driven real estate experience. Stay tuned for updates!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="h-14 px-8">
                                Notify Me
                            </Button>
                            <Link href="/">
                                <Button variant="outline" size="lg" className="h-14 px-8 gap-2">
                                    Return Home <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </main>
        </div>
    );
}
