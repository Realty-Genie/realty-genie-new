'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Sparkles, Inbox } from 'lucide-react';
import Image from 'next/image';

export const LeadHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-white" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10 text-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-10 transition-colors shadow-sm"
                >
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    AI Lead Management & Nurturing Engine
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl"
                >
                    Every lead captured. <br className="hidden md:block" />
                    Every lead followed up. <br className="hidden md:block" />
                    <span className="text-red-600">Zero manual chasing.</span>
                </motion.h1>

                {/* Sub-headline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    One place where all your leads land, get scored, and are nurtured automatically — so you’re only spending time on hot, ready-to-talk prospects.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all duration-300">
                        Get Started
                    </Button>
                </motion.div>

                {/* Mock UI section inspired by the reference image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="w-full max-w-5xl mx-auto aspect-[16/10] bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden relative group"
                >
                    <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                        <Image
                            src="/lead-management-inbox.png"
                            alt="Lead Management Inbox Mockup"
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Overlay to give it a more integrated look if the image is too plain */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />

                    {/* Animated Tag/Highlight */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className="absolute top-10 right-10 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-200 flex items-center gap-3 z-20"
                    >
                        <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                            <Sparkles className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div className="text-left">
                            <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">AI Insight</div>
                            <div className="text-sm font-bold text-slate-800">New Hot Lead Detected</div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};
