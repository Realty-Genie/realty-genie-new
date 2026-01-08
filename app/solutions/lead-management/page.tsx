'use client';

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { LeadHero } from '@/components/landing/LeadHero';
import { LeadFeatures } from '@/components/landing/LeadFeatures';
import { LeadResults } from '@/components/landing/LeadResults';
import { IdxFAQ } from '@/components/landing/IdxFAQ';
import { Footer } from '@/components/landing/Footer';

export default function Page() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar />
            <main>
                <LeadHero />
                <LeadFeatures />
                <LeadResults />
                <div className="bg-slate-50 py-24 px-4">
                    <div className="max-w-7xl mx-auto text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900">Got Questions?</h2>
                    </div>
                    <IdxFAQ />
                </div>
            </main>
            <Footer />
        </div>
    );
}
