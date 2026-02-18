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

    return (
        <>
            <motion.button
                onClick={() => setIsModalOpen(true)}
                className={`relative group flex md:m-5 items-center gap-1.5 md:gap-2 h-9 md:h-11 bg-gradient-to-br from-blue-600 via-indigo-500 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white rounded-lg pl-2.5 md:pl-3 pr-1 md:pr-1.5 shadow-[0_4px_15px_-3px_rgba(37,99,235,0.35)] md:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(124,58,237,0.6)] transition-all duration-500 overflow-hidden border border-white/20 hover:-translate-y-1 active:scale-95 ${className}`}
            >
                {/* Shine animation */}
                <motion.div
                    animate={{ x: ['-150%', '300%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 3 }}
                    className="absolute inset-0 w-1/3 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-20"
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
                    <span className="absolute inset-0 bg-blue-400 blur-lg opacity-40 group-hover:opacity-70 transition-opacity" />
                    <span className="relative bg-white text-blue-600 text-[8px] md:text-[10px] font-black px-1 md:px-1.5 py-0.5 rounded flex items-center gap-0.5">
                        <span className="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-blue-600"></span>
                        </span>
                        LIVE
                    </span>
                </div>
            </motion.button>

            <TryCallgenieModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};
