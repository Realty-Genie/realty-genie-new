'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Users, MessageSquare, Palette, Phone } from 'lucide-react';

const features = [
    {
        id: 'lead-management',
        label: 'Lead Management',
        icon: Users,
        accent: '#6366f1',
        image: '/crm-lead-management.png',
        rotate: '-2deg',
        offsetX: '-2%',
        offsetY: '0%',
    },
    {
        id: 'campaigns',
        label: 'SMS & Email Campaigns',
        icon: MessageSquare,
        accent: '#f97316',
        image: '/crm-campaigns.png',
        rotate: '2deg',
        offsetX: '2%',
        offsetY: '0%',
    },
    {
        id: 'landing-designer',
        label: 'Landing Page Designer',
        icon: Palette,
        accent: '#10b981',
        image: '/crm-landing-designer.png',
        rotate: '-2deg',
        offsetX: '-2%',
        offsetY: '0%',
    },
    {
        id: 'calling-agent',
        label: 'AI Calling Agent',
        icon: Phone,
        accent: '#8b5cf6',
        image: '/crm-calling-agent.png',
        rotate: '2deg',
        offsetX: '2%',
        offsetY: '0%',
    },
];

export const CRMShowcase = () => {
    const [active, setActive] = useState(features[0].id);
    const activeFeature = features.find(f => f.id === active)!;

    return (
        <div className="w-full max-w-6xl mx-auto px-4 pb-24">
            <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden bg-white"
                style={{ border: '1.5px solid #000' }}
            >
                {/* Tab bar */}
                <div
                    className="flex items-center bg-white z-10 relative"
                    style={{ borderBottom: '1.5px solid #000', padding: '12px 20px', gap: '4px' }}
                >
                    {features.map((f) => {
                        const Icon = f.icon;
                        const isActive = active === f.id;
                        return (
                            <button
                                key={f.id}
                                onClick={() => setActive(f.id)}
                                className="flex items-center gap-1.5 rounded-lg text-xs font-medium transition-colors duration-150 select-none flex-1 justify-center"
                                style={{
                                    padding: '8px 12px',
                                    background: isActive ? '#f4f4f5' : 'transparent',
                                    color: isActive ? '#18181b' : '#71717a',
                                    whiteSpace: 'nowrap',
                                }}
                            >
                                <Icon
                                    size={13}
                                    style={{ color: isActive ? f.accent : '#a1a1aa', flexShrink: 0 }}
                                    strokeWidth={2}
                                />
                                {f.label}
                            </button>
                        );
                    })}
                </div>

                {/* Screenshot stage */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{
                        height: '520px',
                        backgroundImage: 'radial-gradient(#d4d4d8 1px, transparent 1px)',
                        backgroundSize: '22px 22px',
                        backgroundColor: '#fafafa',
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 flex items-start justify-center"
                            style={{ padding: '36px 24px 0' }}
                        >
                            <div
                                style={{
                                    width: '115%',
                                    flexShrink: 0,
                                    transform: `rotate(${activeFeature.rotate}) translateX(${activeFeature.offsetX})`,
                                    borderRadius: '10px',
                                    overflow: 'hidden',
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.10), 0 32px 64px rgba(0,0,0,0.12)',
                                    border: '1px solid rgba(0,0,0,0.09)',
                                }}
                            >
                                <Image
                                    src={activeFeature.image}
                                    alt={activeFeature.label}
                                    width={1440}
                                    height={900}
                                    priority
                                    style={{ display: 'block', width: '100%', height: 'auto' }}
                                />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
};
