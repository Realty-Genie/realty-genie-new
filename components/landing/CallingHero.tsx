'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Sparkles } from 'lucide-react';

export const CallingHero = () => {
    return (
        <section className="relative pt-32 pb-10 md:pt-48 md:pb-20 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-white" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-emerald-500/5 blur-[100px] rounded-full" />

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-medium mb-10 hover:border-slate-300 transition-colors shadow-sm"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    CallGenie: The Future of Voice Automation
                    <ArrowRight className="w-3 link-3.5 ml-1" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl"
                >
                    Every new lead <br className="hidden md:block" />
                    gets a call in <span className="text-yellow-600 italic">minutes</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Without you picking up the phone. Our AI-powered system handles outbound and inbound calls, qualifies leads, and books appointments 24/7.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <a href="https://callgenie.realtygenie.co" target="_blank" rel="noopener noreferrer">
                        <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all duration-300">
                            Get Started
                        </Button>
                    </a>
                    <Button variant="ghost" className="h-14 px-8 text-lg font-medium text-muted-foreground hover:text-foreground gap-3 group">
                        <Phone className="w-5 h-5" />
                        Listen to a Sample
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* Social Proof / Compliance Placeholder */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="flex gap-8 items-center text-slate-400 text-sm font-semibold tracking-widest uppercase"
                >
                    <div className="flex items-center gap-2 grayscale opacity-50">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-[10px] italic">S</div>
                        SOC2 Compliant
                    </div>
                    <div className="flex items-center gap-2 grayscale opacity-50">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-400 flex items-center justify-center text-[10px] italic">99</div>
                        99.9% Uptime
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
