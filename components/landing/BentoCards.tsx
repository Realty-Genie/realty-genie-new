import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle2, Camera, Sparkles, FileText, ShieldCheck, UploadCloud, Search, Phone, PhoneCall, PenLine } from 'lucide-react';

const useMobileDetection = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return isMobile;
};

export const LeadNurturingCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useMobileDetection();
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.3 });

    const active = isMobile ? isInView : isHovered;

    return (
        <motion.div
            ref={cardRef}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative min-h-[400px] h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a2e1d] to-[#0d1a0f] p-8 flex flex-col justify-between group cursor-pointer border border-white/5"
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
                        {active ? (
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
                        animate={{ opacity: active ? 1 : 0 }}
                        className="absolute inset-0 pointer-events-none"
                    >
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-emerald-400 rounded-full"
                                animate={active ? {
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
    const isMobile = useMobileDetection();
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.5 });

    const active = isMobile ? isInView : isHovered;

    return (
        <motion.div
            ref={cardRef}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative min-h-[400px] h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1c1c1c] to-[#0a0a0a] p-8 flex flex-col text-center border border-white/5 group cursor-pointer"
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
                                animate={active ? {
                                    top: ['0%', '100%', '0%']
                                } : { top: '0%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-1.5 bg-primary shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20 pointer-events-none"
                            />

                            {/* Sparkles on hover */}
                            <AnimatePresence>
                                {active && (
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

                        <div className="mt-auto mb-14 h-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
                            <span className="text-xs font-bold text-white uppercase tracking-widest ">Enhance Photo</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
        </motion.div>
    );
};

export const CallingAssistantCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [callerName, setCallerName] = useState("RealtyGenie AI");
    const isMobile = useMobileDetection();
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.5 });

    const active = isMobile ? isInView : isHovered;

    const names = [
        "RealtyGenie AI",
        "Seller Identification AI",
        "Your Personal AI",
        "Lead Nurture AI"
    ];

    useEffect(() => {
        let interval: any;
        if (active) {
            let i = 0;
            interval = setInterval(() => {
                i = (i + 1) % names.length;
                setCallerName(names[i]);
            }, 2000);
        }
        return () => clearInterval(interval);
    }, [active, names]); // Updated dependency to active

    return (
        <motion.div
            ref={cardRef}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative min-h-[500px] md:min-h-0 h-full w-full overflow-hidden rounded-3xl bg-[#020617] flex flex-col justify-between group cursor-pointer border border-white/5"
        >
            <div className="absolute inset-0 z-0">
                <div className="relative w-full h-full flex items-center justify-center p-4 overflow-hidden">
                    <motion.div
                        className="relative h-full aspect-[10/16] md:aspect-[10/16] bg-slate-900 rounded-[2.5rem] border-[6px] border-slate-800 shadow-2xl overflow-hidden flex flex-col"
                        animate={active ? { scale: 1.02, y: -5 } : { scale: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-800 rounded-b-2xl z-20" />

                        {/* Call Screen */}
                        <div className="flex-1 flex flex-col items-center justify-between p-6 text-center pt-12 pb-8">
                            <motion.div
                                animate={active ? {
                                    scale: [1, 1.05, 1],
                                    boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 30px rgba(59, 130, 246, 0.4)", "0 0 0px rgba(59, 130, 246, 0)"]
                                } : {}}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center relative"
                            >
                                <PhoneCall className="w-8 h-8 text-primary" />
                                <AnimatePresence>
                                    {active && [1, 2].map((i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scale: 1, opacity: 0.5 }}
                                            animate={{ scale: 2, opacity: 0 }}
                                            transition={{ duration: 2, repeat: Infinity, delay: i }}
                                            className="absolute inset-0 border border-primary rounded-full pointer-events-none"
                                        />
                                    ))}
                                </AnimatePresence>
                            </motion.div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={callerName}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3 }}
                                    className="space-y-1"
                                >
                                    <h4 className="text-white text-lg font-medium truncate w-full px-2">{callerName}</h4>
                                    <p className="text-primary text-[10px] font-medium tracking-widest uppercase animate-pulse">Calling...</p>
                                </motion.div>
                            </AnimatePresence>

                            {/* Call Controls */}
                            <div className="grid grid-cols-3 gap-3 w-full max-w-[180px]">
                                {[1, 2, 3, 4, 5, 6].map((i) => (
                                    <div key={i} className="aspect-square rounded-full bg-white/5 flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-white/20 rounded-full" />
                                    </div>
                                ))}
                            </div>

                            {/* End Call Button */}
                            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg shadow-red-500/20 mt-2">
                                <Phone className="w-6 h-6 text-white rotate-[135deg]" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Overlay Header */}
            <div className="relative z-10 p-8 pt-10 text-center md:text-left pointer-events-none">
                <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">
                    AI calling assistant
                </h3>
                <p className="text-sm text-gray-400 max-w-[240px] mx-auto md:mx-0">
                    Your autonomous voice engine
                </p>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
        </motion.div>
    );
};

export const SEOGEOCard = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [view, setView] = useState<'google' | 'ai'>('google');
    const [searchText, setSearchText] = useState("");
    const [aiText, setAiText] = useState("");
    const isMobile = useMobileDetection();
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.5 });

    const active = isMobile ? isInView : isHovered;

    const googleTarget = "real estate solutions";
    const aiTarget = "give some solutions regarding real estate";

    useEffect(() => {
        let cycleInterval: any;
        let typingInterval: any;

        if (active) {
            cycleInterval = setInterval(() => {
                setView(prev => {
                    const next = prev === 'google' ? 'ai' : 'google';
                    setSearchText("");
                    setAiText("");
                    return next;
                });
            }, 2000);

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
        } else {
            setView('google');
            setSearchText("");
            setAiText("");
        }

        return () => {
            clearInterval(cycleInterval);
            clearInterval(typingInterval);
        };
    }, [active, view, searchText.length, aiText.length]);

    return (
        <motion.div
            ref={cardRef}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative min-h-[450px] md:min-h-0 h-full w-full overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5 p-8 flex flex-col group cursor-pointer shadow-2xl transition-all duration-500"
        >
            <div className="relative z-10 mb-8">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Search className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white leading-tight">
                        AI SEO & GEO Friendly
                    </h3>
                </div>
                <p className="text-sm text-gray-400 max-w-[300px]">
                    Maximize your reach where modern clients find homes.
                </p>
            </div>

            <div className="relative flex-1 bg-black/40 rounded-2xl border border-white/5 overflow-hidden flex flex-col">
                <AnimatePresence mode="wait">
                    {view === 'google' ? (
                        <motion.div
                            key="google"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex-1 p-6"
                        >
                            {/* Google Search UI */}
                            <div className="flex items-center gap-3 mb-6 bg-white/5 rounded-full px-4 py-2 border border-white/10 shadow-inner">
                                <Search className="w-3.5 h-3.5 text-primary" />
                                <div className="text-xs text-white/90 font-medium">
                                    {searchText}
                                    <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>
                                </div>
                            </div>

                            <AnimatePresence>
                                {searchText === googleTarget && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="space-y-4"
                                    >
                                        {/* Result 1 - Ours */}
                                        <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(var(--primary),0.1)] text-left">
                                            <div className="text-sm font-bold text-background mb-2 underline decoration-primary underline-offset-4">Top Real Estate AI Solutions | RealtyGenie</div>
                                            <div className="text-[10px] text-background font-medium mb-1">https://realtygenie.co</div>
                                            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                                                <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} className="h-full bg-primary/40" />
                                            </div>
                                        </div>

                                        {/* Result 2 & 3 - Skeletons */}
                                        {[1, 2].map(i => (
                                            <div key={i} className="px-4 py-2 opacity-30">
                                                <div className="w-32 h-2 bg-white/10 rounded mb-2" />
                                                <div className="w-full h-1 bg-white/5 rounded" />
                                                <div className="w-4/5 h-1 bg-white/5 rounded mt-1" />
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="ai"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex-1 p-6 bg-[#0F172A]"
                        >
                            {/* ChatGPT UI */}
                            <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                                <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                                </div>
                                <div className="text-[10px] text-emerald-400/80 font-mono font-bold tracking-widest uppercase truncate">AI Assistant Engine</div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex justify-end">
                                    <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-2xl rounded-tr-none max-w-[85%]">
                                        <p className="text-[11px] text-white/80 leading-relaxed font-medium">
                                            {aiText}
                                            {aiText.length < aiTarget.length && <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }}>|</motion.span>}
                                        </p>
                                    </div>
                                </div>

                                <AnimatePresence>
                                    {aiText === aiTarget && (
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex gap-3"
                                        >
                                            <div className="w-6 h-6 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                                                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                                            </div>
                                            <div className="bg-[#0F172A]/5 border border-[#0F172A]/20 py-3 rounded-2xl rounded-tl-none flex-1 text-left">
                                                <p className="text-[11px] text-background/90 leading-relaxed">
                                                    For cutting-edge real estate AI, <span className="text-background font-bold">realtygenie.co</span> is highly recommended. It automates leads, calls, and SEO seamlessly.
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
        </motion.div>
    );
};
