'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { TryCallgenieModal } from './TryCallgenieModal';

interface TryCallgenieButtonProps {
    className?: string;
}

export const TryCallgenieButton: React.FC<TryCallgenieButtonProps> = ({ className = '' }) => {
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

    return (
        <>
            <button
                onClick={handleClick}
                className={`relative group flex md:m-5 items-center gap-1.5 md:gap-2 h-9 md:h-11 bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-md pl-2.5 md:pl-3 pr-1 md:pr-1.5 border-2 border-black shadow-[3px_3px_0_0_#000] md:shadow-[5px_5px_0_0_#000] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_0_#000] md:hover:shadow-[7px_7px_0_0_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#000] transition-all duration-150 overflow-hidden ${className}`}
            >
                {/* Top gloss highlight */}
                <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-md" />

                {/* Shine animation */}
                <motion.div
                    animate={{ x: ['-180%', '280%'] }}
                    transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", repeatDelay: 2.5 }}
                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12 pointer-events-none"
                />

                {/* Icon and text */}
                <div className="relative flex items-center gap-1 md:gap-1.5">
                    <div className="p-0.5 md:p-1 bg-white/10 rounded group-hover:bg-white/20 transition-colors">
                        <Phone className="w-3 h-3" />
                    </div>
                    <span className="text-[11px] md:text-[13px] font-bold whitespace-nowrap">Try Callgenie</span>
                </div>

                {/* LIVE badge */}
                <div className="relative ml-0.5">
                    <span className="relative bg-white text-blue-600 text-[8px] md:text-[10px] font-black px-1 md:px-1.5 py-0.5 rounded border border-black flex items-center gap-0.5">
                        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-600"></span>
                        </span>
                        LIVE
                    </span>
                </div>
            </button>

            <TryCallgenieModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
