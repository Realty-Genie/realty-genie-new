'use client'

import { Navbar } from '@/components/landing/Navbar';
import { IdxHero } from '@/components/landing/IdxHero';
import { IdxFeatures } from '@/components/landing/IdxFeatures';
import { IdxResults } from '@/components/landing/IdxResults';
import { IdxPricing } from '@/components/landing/IdxPricing';
import { IdxFAQ } from '@/components/landing/IdxFAQ';
import { SeoGeoAnimation } from '@/components/landing/SeoGeoAnimation';
import { Footer } from '@/components/landing/Footer';
import { motion } from 'framer-motion';

export default function Page() {
    // We can make this dynamic later, but for now we follow the user's request for "customizing using the city"
    const cityName = "your area";

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <IdxHero city={cityName} />

                {/* Search & AI Showcase Section */}
                <section className="py-20 px-4 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-blue-600 font-semibold text-sm tracking-widest uppercase">Visualizing Success</span>
                            <h2 className="text-3xl md:text-5xl font-bold mt-4 text-slate-900">
                                See how you show up in <br className="hidden md:block" />
                                Google & AI Search
                            </h2>
                        </motion.div>
                        <SeoGeoAnimation />
                    </div>
                </section>

                <IdxFeatures />
                <IdxResults />
                {/* <IdxPricing /> */}
                <IdxFAQ />
            </main>
            <Footer />
        </div>
    );
}
