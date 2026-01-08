'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';
import { BentoGrid } from './BentoGrid';

export const Hero = () => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item: Variants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Gradient matching the reference (Soft Blue) */}
            <div className="absolute inset-0 -z-10 bg-[#F5F8FF]" />

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 text-muted-foreground text-sm font-medium mb-8 hover:border-primary/30 transition-colors cursor-pointer shadow-sm"
                >
                    The AI Operating System for Modern Realtors
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl"
                >
                    Magically simplify <br className="hidden md:block" />
                    your <span className="italic font-serif">Real Estate</span> operations
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Every lead contacted. Every follow-up handled. Automatically. <br />
                    AI calling, effortless follow-ups, and instant reporting—so no opportunity slips through.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-20"
                >
                    <Button size="lg" className="w-full sm:w-auto h-12 px-8 text-base font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all duration-300">
                        Get started
                    </Button>
                    <Button variant="ghost" className="w-full sm:w-auto h-12 px-4 text-base font-medium text-muted-foreground hover:text-foreground gap-2 group">
                        See how it works
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* Bento Grid Features */}
                <BentoGrid />
            </div>
        </section>
    );
}
