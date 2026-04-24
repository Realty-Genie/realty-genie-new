'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TryCallgenieModal } from './TryCallgenieModal';

interface TryCallgenieButtonProps {
    className?: string;
    size?: 'sm' | 'md';
}

export const TryCallgenieButton: React.FC<TryCallgenieButtonProps> = ({
    className = '',
    size = 'md',
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleClick = () => {
        if (typeof window !== "undefined" && window.crmTracker) {
            window.crmTracker.track("click", {
                element: "button",
                button_text: "Try Callgenie",
            });
        }
        setIsModalOpen(true);
    };

    const sizing =
        size === 'sm'
            ? 'h-10 md:h-11 pl-3.5 pr-1.5 text-[13px] gap-2'
            : 'h-12 pl-5 pr-1.5 text-[15px] gap-2.5';

    const liveText = size === 'sm' ? 'text-[9px] px-1.5 py-0.5' : 'text-[10px] px-2 py-0.5';
    const liveDot = size === 'sm' ? 'h-1.5 w-1.5' : 'h-2 w-2';

    return (
        <>
            <button
                onClick={handleClick}
                className={`relative group overflow-hidden inline-flex items-center justify-center rounded-lg border border-indigo-400/50 bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold tracking-tight shadow-[0_4px_18px_-4px_rgba(79,70,229,0.5)] hover:shadow-[0_10px_28px_-6px_rgba(79,70,229,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap ${sizing} ${className}`}
            >
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/30 to-transparent" />

                <motion.span
                    aria-hidden
                    animate={{ x: ['-180%', '280%'] }}
                    transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
                    className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                />

                <span className="relative">Try Callgenie</span>

                <span className={`relative inline-flex items-center gap-1 rounded-md bg-white/95 text-indigo-600 font-bold ${liveText}`}>
                    <span className={`relative flex ${liveDot}`}>
                        <span className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75`} />
                        <span className={`relative inline-flex rounded-full bg-indigo-600 ${liveDot}`} />
                    </span>
                    LIVE
                </span>
            </button>

            <TryCallgenieModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
