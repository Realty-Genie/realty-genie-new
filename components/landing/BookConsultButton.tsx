'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BookConsultButtonProps {
    className?: string;
    onClick?: () => void;
}

export const BookConsultButton: React.FC<BookConsultButtonProps> = ({
    className = '',
    onClick,
}) => {
    const handleClick = () => {
        if (typeof window !== "undefined" && window.crmTracker) {
            window.crmTracker.track("click", {
                element: "button",
                button_text: "Book A Consult",
            });
        }

        if (onClick) {
            onClick();
        } else {
            window.open("https://cal.com/realtygenie/30min?overlayCalendar=true", "_blank");
        }
    };

    return (
        <button
            onClick={handleClick}
            className={`relative group overflow-hidden h-10 md:h-11 px-5 rounded-lg text-white font-semibold text-sm md:text-[15px] tracking-tight border border-violet-400/50 shadow-[0_4px_18px_-4px_rgba(124,58,237,0.5)] hover:shadow-[0_10px_28px_-6px_rgba(124,58,237,0.65)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap ${className}`}
            style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
            }}
        >
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/35 to-transparent" />

            <motion.span
                aria-hidden
                animate={{ x: ['-180%', '280%'] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', repeatDelay: 3 }}
                className="pointer-events-none absolute inset-y-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />

            <span className="relative">Book A Consult</span>
        </button>
    );
};
