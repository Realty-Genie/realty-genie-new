'use client';
import { motion } from "framer-motion";

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden bg-white">
            {/* Subtle Gradient Spots */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-blue-50/50 blur-3xl pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.4, 0.3],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                }}
                className="absolute top-[20%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-secondary/30 blur-3xl pointer-events-none"
            />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        </div>
    );
};
