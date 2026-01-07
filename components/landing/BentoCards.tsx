'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, CheckCircle2, Camera, Sparkles, FileText, ShieldCheck, UploadCloud, Search } from 'lucide-react';

export const LeadNurturingCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2e1d] to-[#0d1a0f] p-8 flex flex-col justify-between group cursor-pointer border border-white/5"
        >
            <div className="relative z-10 text-center">
                <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">
                    AI lead-nurturing bot
                </h3>
                <p className="text-sm text-gray-400 max-w-[240px] mx-auto text-center">
                    Engage and qualify leads in realtime via email or sms
                </p>
            </div>

            <div className="relative flex-1 flex items-center justify-center mt-8">
                <div className="relative w-full max-w-[400px] h-64 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden">
                    {/* Mock Email UI */}
                    <div className="absolute inset-0 p-6 flex flex-col gap-3">
                        <div className="w-full h-3 bg-white/10 rounded" />
                        <div className="w-2/3 h-3 bg-white/10 rounded" />
                        <div className="w-full h-12 bg-white/5 rounded mt-4 border border-white/5" />
                    </div>

                    <AnimatePresence>
                        {isHovered ? (
                            <motion.div
                                key="sent"
                                initial={{ y: 30, opacity: 0, scale: 0.8 }}
                                animate={{ y: 0, opacity: 1, scale: 1.2 }}
                                exit={{ y: -30, opacity: 0 }}
                                className="flex flex-col items-center gap-3 z-20"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -8, 0],
                                        rotate: [0, -8, 8, 0]
                                    }}
                                    transition={{ duration: 0.5, repeat: Infinity }}
                                >
                                    <Send className="w-16 h-16 text-emerald-400" />
                                </motion.div>
                                <span className="text-sm font-bold text-emerald-400">Mail Sent!</span>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="idle"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="z-20"
                            >
                                <Mail className="w-20 h-20 text-white/20" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Background particles */}
                    <motion.div
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                animate={isHovered ? {
                                    x: [Math.random() * 200 - 100, Math.random() * 400 - 200],
                                    y: [Math.random() * 100 - 50, -200],
                                    opacity: [0, 1, 0]
                                } : {}}
                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-emerald-500/20 transition-colors duration-500" />
        </motion.div>
    );
};

export const ListingOptimizerCard = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] p-8 flex flex-col text-center border border-white/5 group cursor-pointer"
        >
            <div className="relative z-10 mb-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                    AI listing Optimizer
                </h3>
                <p className="text-sm text-gray-400 mx-auto max-w-[200px]">
                    Capturing stunning photos effortlessly using our advanced AI
                </p>
            </div>

            <div className="relative flex-1 flex flex-col items-center justify-center">
                <div className="relative w-full max-w-[280px] aspect-[9/16] bg-white/5 rounded-[40px] border-[6px] border-white/10 overflow-hidden mb-4 shadow-2xl">
                    {/* Mock Phone UI */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-30" />

                    <div className="mt-12 px-5 text-left h-full flex flex-col">
                        <div className="w-full h-48 bg-white/5 rounded-2xl border border-white/5 overflow-hidden relative flex-shrink-0">
                            {/* "Photo" */}
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&h=300&auto=format&fit=crop')] bg-cover bg-center grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />

                            {/* AI Scanning Line */}
                            <motion.div
                                animate={isHovered ? {
                                    top: ['0%', '100%', '0%']
                                } : { top: '0%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1.5 bg-primary shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20 pointer-events-none"
                            />

                            {/* Sparkles on hover */}
                            <AnimatePresence>
                                {isHovered && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute top-4 right-4"
                                    >
                                        <motion.div
                                            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                        >
                                            <Sparkles className="w-8 h-8 text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.8)]" />
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        <div className="mt-6 space-y-3">
                            <div className="w-full h-3 bg-white/10 rounded" />
                            <div className="w-3/4 h-3 bg-white/10 rounded" />
                            <div className="w-1/2 h-3 bg-white/10 rounded" />
                        </div>

                        <div className="mt-auto mb-8 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="text-xs font-bold text-white uppercase tracking-widest">Enhance Photo</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
        </motion.div>
    );
};

export const DocumentAnalysisCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [progress, setProgress] = useState(0);

    React.useEffect(() => {
        let interval: any;
        if (isHovered) {
            setProgress(0);
            interval = setInterval(() => {
                setProgress(prev => (prev < 100 ? prev + 1 : 100));
            }, 30);
        } else {
            setProgress(0);
        }
        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f1f2e] to-[#050b12] p-8 flex flex-col border border-white/5 group cursor-pointer"
        >
            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <h3 className="text-2xl font-semibold text-white mb-2">
                        AI document analysis
                    </h3>
                    <p className="text-sm text-gray-400">
                        Reliable AI based security
                    </p>
                </div>
                <div className="bg-white/5 p-3 rounded-2xl border border-white/10 group-hover:bg-primary/20 transition-colors">
                    <ShieldCheck className="w-6 h-6 text-primary" />
                </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center mt-12">
                <div className="w-full max-w-4xl bg-white/[0.02] rounded-[32px] border-2 border-dashed border-white/10 p-16 flex flex-col items-center gap-6 relative overflow-hidden">
                    <AnimatePresence mode="wait">
                        {progress < 100 ? (
                            <motion.div
                                key="uploading"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <motion.div
                                    animate={isHovered ? {
                                        y: [0, -15, 0],
                                        scale: [1, 1.1, 1]
                                    } : {}}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                >
                                    <UploadCloud className={`w-20 h-20 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-white/20'}`} />
                                </motion.div>
                                <div className="text-center">
                                    <p className="text-xl font-medium text-white/80 mb-2">Drag & drop or <span className="text-white hover:underline cursor-pointer">choose files</span></p>
                                    <p className="text-xs text-white/30 uppercase tracking-[0.2em]">Max file size 20MB</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="complete"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1.2, opacity: 1 }}
                                className="flex flex-col items-center gap-6"
                            >
                                <CheckCircle2 className="w-20 h-20 text-emerald-400" />
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white mb-2">Analysis Complete</p>
                                    <p className="text-xs text-emerald-400 font-bold uppercase tracking-widest">Safe & Secure</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Progress Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
                        <motion.div
                            className="h-full bg-primary"
                            initial={{ width: '0%' }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Scanning Animation */}
                    <AnimatePresence>
                        {isHovered && progress < 100 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 pointer-events-none"
                            >
                                <motion.div
                                    className="absolute inset-0 bg-primary/5"
                                    animate={{ opacity: [0, 0.5, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                />
                                {[...Array(3)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute left-0 right-0 h-[1px] bg-primary/30"
                                        animate={{ top: ['0%', '100%'] }}
                                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                                    />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
    );
};
