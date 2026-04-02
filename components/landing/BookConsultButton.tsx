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
        <motion.button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            className={`
                relative overflow-hidden
                h-12 px-5 rounded-lg
                text-white font-medium text-base
                transition-all duration-300 ease-out
                cursor-pointer
                flex items-center justify-center gap-2
                ${className}
            `}
            style={{
                background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 50%, #6D28D9 100%)',
                boxShadow: `
                    inset 0 2px 4px rgba(255, 255, 255, 0.25),
                    inset 0 -2px 4px rgba(0, 0, 0, 0.15),
                    0 4px 12px rgba(139, 92, 246, 0.35)
                `,
            }}
            whileHover={{
                scale: 1.02,
                boxShadow: `
                    inset 0 2px 4px rgba(255, 255, 255, 0.3),
                    inset 0 -2px 4px rgba(0, 0, 0, 0.2),
                    0 6px 20px rgba(139, 92, 246, 0.45)
                `,
            }}
            whileTap={{ scale: 0.98 }}
        >
            <motion.span
                className="flex items-center gap-2 whitespace-nowrap"
            >
                Book A Consult
                <motion.span
                    animate={{ x: isHovered ? 4 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ArrowRight className="w-4 h-4" />
                </motion.span>
            </motion.span>
        </motion.button>
    );
};
