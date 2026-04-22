'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface BookConsultButtonProps {
    className?: string;
    onClick?: () => void;
}

export const BookConsultButton: React.FC<BookConsultButtonProps> = ({
    className = '',
    onClick
}) => {
    const [isHovered, setIsHovered] = useState(false);

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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className={`relative group overflow-hidden h-11 md:h-12 px-5 rounded-md text-white font-bold text-sm md:text-base border-2 border-black transition-colors duration-150 cursor-pointer flex items-center justify-center gap-2 whitespace-nowrap ${className}`}
            style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
            }}
        >
            {/* Top gloss highlight */}
            <span className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/40 to-transparent rounded-t-md" />

            <span className="relative flex items-center gap-2">
                Book A Consult
                <motion.span animate={{ x: isHovered ? 4 : 0 }} transition={{ duration: 0.2 }}>
                    <ArrowRight className="w-4 h-4" />
                </motion.span>
            </span>
        </button>
    );
};
