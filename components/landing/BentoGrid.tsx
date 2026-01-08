'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LeadNurturingCard, ListingOptimizerCard, CallingAssistantCard, SEOGEOCard } from './BentoCards';

export const BentoGrid = () => {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                {/* Row 1: SEO/GEO Card (2 cols) & Listing Optimizer (1 col) */}
                <div className="md:col-span-2">
                    <SEOGEOCard />
                </div>
                <div className="md:col-span-1">
                    <ListingOptimizerCard />
                </div>

                {/* Row 2: Calling Assistant (2 cols) & Lead Nurturing (1 col) */}
                <div className="md:col-span-1">
                    <LeadNurturingCard />
                </div>
                <div className="md:col-span-2">
                    <CallingAssistantCard />
                </div>
            </motion.div>
        </div>
    );
};
