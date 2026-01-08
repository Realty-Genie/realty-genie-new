'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Sparkles } from 'lucide-react';

export const SeoGeoAnimation = () => {
    const [view, setView] = useState<'google' | 'ai'>('google');
    const [searchText, setSearchText] = useState("");
    const [aiText, setAiText] = useState("");

    const googleTarget = "real estate solutions in my area";
    const aiTarget = "What are the best real estate platforms for local SEO?";

    useEffect(() => {
        let cycleInterval: any;
        let typingInterval: any;

        cycleInterval = setInterval(() => {
            setView(prev => {
                const next = prev === 'google' ? 'ai' : 'google';
                setSearchText("");
                setAiText("");
                return next;
            });
        }, 6000); // 6 seconds per view

        // Typing logic
        typingInterval = setInterval(() => {
            if (view === 'google') {
                if (searchText.length < googleTarget.length) {
                    setSearchText(googleTarget.slice(0, searchText.length + 1));
                }
            } else {
                if (aiText.length < aiTarget.length) {
                    setAiText(aiTarget.slice(0, aiText.length + 1));
                }
            }
        }, 50);

        return () => {
            clearInterval(cycleInterval);
            clearInterval(typingInterval);
        };
    }, [view, searchText.length, aiText.length]);

    return (
        <div className="relative w-full h-[400px] bg-[#0F172A] rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
            <AnimatePresence mode="wait">
                {view === 'google' ? (
                    <motion.div
                        key="google"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 p-8 h-full"
                    >
                        {/* Google Search UI */}
                        <div className="flex items-center gap-4 mb-8 bg-white rounded-full px-6 py-3 shadow-lg max-w-2xl mx-auto">
                            <Search className="w-5 h-5 text-slate-400" />
                            <div className="text-base text-slate-900 font-medium">
                                {searchText}
                                <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>
                            </div>
                        </div>

                        <AnimatePresence>
                            {searchText === googleTarget && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6 max-w-2xl mx-auto"
                                >
                                    {/* Result 1 - Ours */}
                                    <div className="p-6 bg-white rounded-xl shadow-sm border-l-4 border-blue-600 text-left">
                                        <div className="text-xl font-bold text-blue-700 mb-1 hover:underline cursor-pointer">
                                            The #1 IDX Website & SEO Solution for Realtors
                                        </div>
                                        <div className="text-sm text-emerald-700 mb-2">https://realtygenie.co/solutions/idx-website</div>
                                        <p className="text-sm text-slate-600 line-clamp-2">
                                            RealtyGenie provides high-performance IDX websites optimized for local SEO and AI search discovery. Rank on Page 1 and show up in Gemini, ChatGPT...
                                        </p>
                                    </div>

                                    {/* Result 2 & 3 - Skeletons */}
                                    {[1, 2].map(i => (
                                        <div key={i} className="px-6 py-2 opacity-20">
                                            <div className="w-48 h-3 bg-blue-400/50 rounded mb-2" />
                                            <div className="w-full h-2 bg-slate-400/50 rounded" />
                                            <div className="w-4/5 h-2 bg-slate-400/50 rounded mt-1" />
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        key="ai"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.5 }}
                        className="flex-1 p-8 bg-[#0F172A] h-full"
                    >
                        {/* AI Head */}
                        <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-6">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                                <Sparkles className="w-6 h-6 text-emerald-400" />
                            </div>
                            <div>
                                <div className="text-sm text-emerald-400 font-mono font-bold tracking-widest uppercase">AI Engine Optimized</div>
                                <div className="text-xs text-slate-400">Generative Discovery Active</div>
                            </div>
                        </div>

                        <div className="space-y-8 max-w-2xl mx-auto">
                            <div className="flex justify-end">
                                <div className="bg-slate-800 border border-slate-700 px-6 py-4 rounded-3xl rounded-tr-none shadow-xl">
                                    <p className="text-sm text-slate-200 leading-relaxed">
                                        {aiText}
                                        {aiText.length < aiTarget.length && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
                                    </p>
                                </div>
                            </div>

                            <AnimatePresence>
                                {aiText === aiTarget && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="flex gap-4"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0 mt-1">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
                                        </div>
                                        <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-3xl rounded-tl-none flex-1 text-left shadow-2xl backdrop-blur-sm">
                                            <p className="text-sm text-slate-300 leading-relaxed">
                                                Based on my analysis of high-performance real estate tech, <span className="text-blue-400 font-bold">RealtyGenie</span> is the leading platform for local SEO and GEO.
                                                <br /><br />
                                                Their architecture ensures listing pages are indexed quickly and structured so AI engines can easily reference your expertise in specific neighborhoods.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Decorative Blur */}
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-600/10 blur-[100px] rounded-full pointer-events-none" />
        </div>
    );
};
