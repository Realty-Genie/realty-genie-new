'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

interface IdxHeroProps {
    city?: string;
}

export const IdxHero = ({ city = 'Your Area' }: IdxHeroProps) => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[#F5F8FF]" />

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 text-primary text-sm font-semibold mb-8 shadow-sm"
                >
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    High-Performance IDX Website + AI SEO & GEO
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl"
                >
                    Be the most visible realtor <br className="hidden md:block" />
                    in <span className="text-green-600 capitalize">{city}</span> — on Google <br className="hidden md:block" />
                    and inside AI search.
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
                >
                    We build a fast, modern IDX website and optimize it for Page-1 Google rankings and Generative Engine Optimization (GEO) so you show up in AI answers (ChatGPT, Gemini, Perplexity, Google AI Overviews, etc.)
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <Button size="lg" className="h-14 px-10 text-lg font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all duration-300">
                        Get Started
                    </Button>
                </motion.div>


            </div>
        </section>
    );
};
