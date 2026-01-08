'use client';

import { motion } from 'framer-motion';
import { Sparkles, BarChart3, ShieldCheck, TrendingUp, Presentation } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const MarketHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-white" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-slate-50 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold mb-8 shadow-sm"
                >
                    <BarChart3 className="w-4 h-4" />
                    Market Intelligence & Policy Pack
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05] mb-8 max-w-4xl"
                >
                    Sound like the <span className="text-yellow-600 italic">smartest person</span> <br className="hidden md:block" />
                    in the room about your market.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    We turn complex housing data, rate changes, and policy updates into simple, client-ready insights you can share in calls, emails, and social. Zero research required.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
                >
                    <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all duration-300">
                        Get Your Market Pack
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-xl border-slate-200 hover:bg-slate-50 transition-all duration-300">
                        View Sample Brief
                    </Button>
                </motion.div>

                {/* Floating Elements (Decorative Insights) */}
                <div className="absolute top-1/2 left-0 w-full h-full -z-10 pointer-events-none hidden lg:block">
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-0 left-[-5%] p-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase font-bold text-slate-400">Inventory Shift</p>
                            <p className="text-sm font-bold text-slate-900">+12% Monthly</p>
                        </div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-1/4 right-[-5%] p-4 bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 flex items-center gap-3"
                    >
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                            <Presentation className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="text-left">
                            <p className="text-[10px] uppercase font-bold text-slate-400">Policy Brief</p>
                            <p className="text-sm font-bold text-slate-900">New NAR Rules</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
