'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sparkles, ArrowRight, Instagram, Facebook, Send, Camera } from 'lucide-react';

export const SocialMediaHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden bg-white">
            {/* Background Blurs - Using the brand colors as soft accents */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-50/60 blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-5%] w-[35%] h-[35%] rounded-full bg-yellow-50/40 blur-[150px]" />
                <div className="absolute top-[20%] right-[10%] w-[25%] h-[25%] rounded-full bg-red-50/30 blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 text-primary text-sm font-semibold mb-8 shadow-sm"
                >
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    Done-For-You Social Media for Realtors
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl"
                >
                    Show up everywhere your <br className="hidden md:block" />
                    clients scroll — <span className="text-green-600 italic">effortlessly.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    We plan, create, and schedule consistent content so you look active, expert, and local across key platforms. Never worry about what to post again.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all duration-300">
                        Get Started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>

                {/* Floating Icons Display */}
                <div className="relative w-full max-w-4xl h-32 md:h-48 flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="flex gap-8 md:gap-16 items-center"
                    >
                        <div className="p-4 rounded-2xl bg-white shadow-lg border border-slate-100 text-blue-600">
                            <Instagram className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div className="p-4 rounded-2xl bg-white shadow-lg border border-slate-100 text-blue-800">
                            <Facebook className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div className="p-4 rounded-2xl bg-white shadow-lg border border-slate-100 text-red-500">
                            <Camera className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                        <div className="p-4 rounded-2xl bg-white shadow-lg border border-slate-100 text-yellow-500">
                            <Send className="w-8 h-8 md:w-10 md:h-10" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
