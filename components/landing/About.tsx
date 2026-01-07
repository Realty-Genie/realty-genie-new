'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About = () => {
    return (
        <section className="relative py-24 md:py-32 px-4 overflow-hidden bg-background">
            {/* Background Glows */}
            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-black mb-2 tracking-tight">
                        About
                    </h2>
                    <h3 className="text-4xl md:text-6xl font-serif italic text-gray-600 mb-6 font-light">
                        the Company
                    </h3>
                    <p className="text-sm md:text-base text-gray-500 uppercase tracking-[0.3em] font-medium mb-16">
                        Your Trusted Guide to the Data Revolution
                    </p>
                </motion.div>

                <div className="space-y-8 text-left max-w-2xl mx-auto">
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg md:text-xl text-black leading-relaxed"
                    >
                        RealtyGenie is transforming the real estate landscape with intelligent AI solutions built
                        to empower modern property businesses. We help real estate professionals make
                        data-driven decisions, accelerate sales, and deliver more personalized client
                        experiences with confidence. Our technology combines advanced analytics,
                        automation, and real-time market intelligence to eliminate manual inefficiencies and
                        uncover opportunities that drive measurable growth. Whether it's understanding
                        buyer intent, predicting market trends, or streamlining workflows, we provide tools
                        that allow teams to stay ahead in a competitive industry.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-black leading-relaxed"
                    >
                        Our mission is to help every real estate organization unlock the power of artificial
                        intelligence. By simplifying complex processes and delivering actionable insights,
                        RealtyGenie enables agents, brokers, developers, and property managers to operate
                        smarter and achieve better outcomes. We believe innovation should be practical,
                        accessible, and impactful. At RealtyGenie, we are committed to building solutions that
                        enhance productivity, improve decision-making, and ultimately elevate the experience
                        for both professionals and their clients.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg text-gray-400 font-medium"
                    >
                        Real estate is evolving. With RealtyGenie, it's evolving smarter.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};
