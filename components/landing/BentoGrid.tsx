'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { LeadNurturingCard, ListingOptimizerCard, CallingAssistantCard, SEOGEOCard } from './BentoCards';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

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
                <div className="md:col-span-2" onClick={() => window.location.href = "/solutions/idx-website"}>
                    <SEOGEOCard />
                </div>
                <div className="md:col-span-1" onClick={() => window.location.href = "/solutions/calling-assistant"}>
                    <CallingAssistantCard />
                </div>

                {/* Row 2: Calling Assistant (2 cols) & Lead Nurturing (1 col) */}
                <div className="md:col-span-1" onClick={() => window.location.href = "/solutions/lead-management"}>
                    <LeadNurturingCard />
                </div>
                <div className="md:col-span-2">
                    <ListingOptimizerCard />
                </div>
            </motion.div>

            <Button variant="outline" className="gap-2 mt-12" onClick={() => window.location.href = "/solutions/idx-website"}>
                View All Solutions <ArrowRight className="w-4 h-4" />
            </Button>
        </div>
    );
};
