'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Phone, PlayCircle } from 'lucide-react';
import { BentoGrid } from './BentoGrid';
import { MdWifiCalling1 } from 'react-icons/md';
import { TryCallgenieButton } from './TryCallgenieButton';
import Link from 'next/link';

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
        <>
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                {/* Background Gradient matching the reference (Soft Blue) */}
                <div className="absolute inset-0 -z-10 bg-[#F5F8FF]" />

                <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                    {/* Pill Badge — RealtyCRM teaser */}
                    <Link href="/solutions/realty-crm">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-50 via-yellow-50 to-orange-50 border border-amber-300/70 text-amber-900 text-sm font-semibold mb-8 hover:border-amber-400 transition-colors cursor-pointer shadow-[0_2px_12px_-2px_rgba(251,191,36,0.35)] overflow-hidden"
                        >
                            <motion.span
                                animate={{ x: ['-150%', '300%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 4 }}
                                className="pointer-events-none absolute inset-0 w-1/3 h-full -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent"
                            />
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-500" />
                            </span>
                            <span className="relative">
                                Introducing <span className="font-extrabold">RealtyCRM</span> — All-in-One for Realtors
                            </span>
                            <ArrowRight className="relative w-3.5 h-3.5 ml-0.5" />
                        </motion.div>
                    </Link>

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
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-6"
                    >
                        <Link href="/solutions/realty-crm" className="w-full sm:w-auto">
                            <button
                                className="relative h-12 w-full sm:w-auto px-6 rounded-md border-2 border-black bg-amber-400 text-black text-sm md:text-base font-black uppercase tracking-wide shadow-[5px_5px_0_0_#000] hover:bg-amber-300 hover:-translate-y-[2px] hover:-translate-x-[2px] hover:shadow-[7px_7px_0_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#000] transition-all duration-150 whitespace-nowrap overflow-hidden group"
                            >
                                {/* Top gloss highlight */}
                                <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/60 to-transparent rounded-t-md" />

                                {/* Shine sweep */}
                                <motion.span
                                    aria-hidden
                                    animate={{ x: ['-180%', '280%'] }}
                                    transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut', repeatDelay: 2.5 }}
                                    className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                                />

                                <span className="relative">Meet RealtyCRM — All in One</span>
                            </button>
                        </Link>

                        <TryCallgenieButton />

                        <Link href="/how-it-works">
                            <Button variant="ghost" className="w-full sm:w-auto h-12 px-4 text-base font-medium text-muted-foreground hover:text-foreground gap-2 group">
                                See how it works
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                    </motion.div>

                    {/* RealtyCRM feature chips — micro-marketing */}
                    <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        className="flex flex-wrap justify-center items-center gap-x-2 gap-y-2 mb-20"
                    >
                        <span className="text-[11px] uppercase tracking-wider text-amber-700 font-bold mr-1">
                            Inside RealtyCRM
                        </span>
                        {['Lead Management', 'AI Calling', 'SMS & Email', 'Website Builder'].map((t) => (
                            <span
                                key={t}
                                className="px-2.5 py-1 rounded-full bg-white/90 border border-amber-200 text-[11px] font-semibold text-amber-900 backdrop-blur-sm shadow-[0_1px_8px_-2px_rgba(251,191,36,0.25)]"
                            >
                                {t}
                            </span>
                        ))}
                    </motion.div>

                    {/* Bento Grid Features */}
                    <BentoGrid />
                </div>
            </section>
        </>
    );
}
