'use client';

import { motion } from 'framer-motion';
import {
    Globe,
    Search,
    Cpu,
    MessageSquare,
    CheckCircle2,
    Layout,
    BarChart3,
    Smartphone
} from 'lucide-react';

export const IdxFeatures = () => {
    const features = [
        {
            title: "Modern IDX Website",
            icon: <Layout className="w-6 h-6 text-blue-600" />,
            items: [
                "React/Next.js or equivalent high-performance stack",
                "Mobile-first, lightning-fast, SEO-friendly architecture",
                "Clean IDX listing pages with strong internal linking"
            ]
        },
        {
            title: "Core SEO Foundation",
            icon: <Search className="w-6 h-6 text-blue-600" />,
            items: [
                "Keyword research for local “buy/sell + area” intent",
                "On-page SEO: titles, meta, headings, internal links, schema",
                "Technical SEO: sitemaps, indexing, site speed, Core Web Vitals",
                "Local SEO: Google Business Profile, “near me” optimization"
            ]
        },
        {
            title: "AI Search / GEO Optimization",
            icon: <Cpu className="w-6 h-6 text-blue-600" />,
            items: [
                "Answer-first content for common buyer/seller questions",
                "Neighborhood & niche pages structured for AI referencing",
                "Ongoing content tuned for ChatGPT, Gemini, Perplexity",
                "Optimization for Google AI Overviews"
            ]
        },
        {
            title: "Conversion + Lead Capture",
            icon: <MessageSquare className="w-6 h-6 text-blue-600" />,
            items: [
                "24/7 AI chatbot on key pages & listings",
                "Embedded lead forms and calendar-based booking",
                "Tracking across calls, forms, chat, and bookings",
                "Fewer missed leads with always-on automation"
            ]
        }
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        What&apos;s Included
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Everything you need to dominate local search and AI-driven discovery.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:border-blue-100 hover:bg-blue-50/30 transition-all group"
                        >
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <ul className="space-y-3">
                                {feature.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-slate-600">
                                        <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
