'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const LaptopShowcase = () => {
    return (
        <div className="relative w-full max-w-5xl mx-auto py-20 px-4 perspective-1000">
            <motion.div
                initial={{ rotateX: -90, opacity: 0 }}
                whileInView={{ rotateX: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative preserve-3d"
            >
                {/* Laptop Screen (Top Half) */}
                <motion.div
                    className="relative bg-slate-900 rounded-t-2xl border-[8px] border-slate-800 shadow-2xl overflow-hidden aspect-[16/10] origin-bottom px-1 pt-1"
                    initial={{ rotateX: 90 }}
                    whileInView={{ rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                >
                    {/* Screen Content */}
                    <div className="relative w-full h-full bg-white rounded-t-lg overflow-hidden group cursor-pointer">
                        <a href="https://callgenie.realtygenie.co" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/call-genie-dashboard.png"
                                alt="CallGenie Dashboard"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileHover={{ opacity: 1, scale: 1 }}
                                    className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-slate-200 text-slate-900 font-bold flex items-center gap-2"
                                >
                                    Try CallGenie Now
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </motion.div>
                            </div>
                        </a>
                    </div>

                    {/* Camera Dot */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 shadow-inner" />
                </motion.div>

                {/* Laptop Base (Bottom Half) */}
                <div className="relative h-4 bg-slate-700 rounded-b-2xl shadow-xl border-t border-slate-600 flex justify-center">
                    <div className="w-24 h-1 bg-slate-800 rounded-full mt-1 opacity-50" />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 -bottom-10 left-1/2 -translate-x-1/2 w-[120%] h-20 bg-blue-600/10 blur-[100px] rounded-full" />
            </motion.div>

            <style jsx global>{`
                .perspective-1000 {
                    perspective: 2000px;
                }
                .preserve-3d {
                    transform-style: preserve-3d;
                }
            `}</style>
        </div>
    );
};
