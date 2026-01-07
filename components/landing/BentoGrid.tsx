'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LeadNurturingCard, ListingOptimizerCard, DocumentAnalysisCard } from './BentoCards';

export const BentoGrid = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-20">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 grid-rows-[auto_auto] md:grid-rows-[minmax(400px,auto)_minmax(400px,auto)]"
            >
                {/* Top Left: Lead Nurturing (Large) */}
                <div className="md:col-span-2">
                    <LeadNurturingCard />
                </div>

                {/* Top Right: Listing Optimizer (Tall) */}
                <div className="md:col-span-1">
                    <ListingOptimizerCard />
                </div>

                {/* Bottom: Document Analysis (Wide) */}
                <div className="md:col-span-3">
                    <DocumentAnalysisCard />
                </div>
            </motion.div>
        </div>
    );
};
