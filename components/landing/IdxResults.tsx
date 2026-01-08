'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, MousePointer2, Clock } from 'lucide-react';

export const IdxResults = () => {
    const results = [
        {
            title: "Page-1 Rankings",
            description: "Strong push toward Page-1 rankings in ~6–12 months for your highest-intent local searches.",
            icon: <TrendingUp className="w-6 h-6 text-white" />,
            bgColor: "bg-emerald-600"
        },
        {
            title: "AI Visibility",
            description: "Increased visibility inside AI-generated answers, not just standard blue search links.",
            icon: <MousePointer2 className="w-6 h-6 text-white" />,
            bgColor: "bg-blue-600"
        },
        {
            title: "Organic Inquiries",
            description: "More organic inquiries and booked appointments without needing extra monthly ad spend.",
            icon: <Users className="w-6 h-6 text-white" />,
            bgColor: "bg-purple-600"
        },
        {
            title: "Zero Missed Leads",
            description: "Fewer missed leads thanks to always-on AI chat and integrated calendar booking.",
            icon: <Clock className="w-6 h-6 text-white" />,
            bgColor: "bg-orange-600"
        }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Real Results for Realtors
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don&apos;t just build websites; we build growth engines that drive measurable business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${result.bgColor} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform`}>
                                {result.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{result.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {result.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
