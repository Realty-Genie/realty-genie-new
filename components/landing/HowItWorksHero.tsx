'use client';

import { motion } from 'framer-motion';

export const HowItWorksHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 -z-10 bg-[#F8FAFF]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[10%] left-[20%] w-[30%] h-[30%] bg-blue-100/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] right-[20%] w-[30%] h-[30%] bg-slate-100/50 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-100 text-blue-600 text-sm font-bold mb-8 shadow-sm"
                >
                    The RealtyGenie Methodology
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05] mb-8 max-w-4xl"
                >
                    We’re not a <span className="text-blue-600">one-size-fits-all</span> agency.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium"
                >
                    Every realtor, team, and market is different — so the way we use AI to help you has to be different too. Our job is simple: Find where you’re losing time and money, then use AI to give it back.
                </motion.p>
            </div>
        </section>
    );
};
