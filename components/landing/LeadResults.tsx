'use client';

import { motion } from 'framer-motion';
import {
    Timer,
    TrendingUp,
    Eye,
    MousePointer2,
    CheckCircle2
} from 'lucide-react';

export const LeadResults = () => {
    const results = [
        {
            title: "Faster Response Times",
            description: "Dramatically reduce the gap between inquiry and contact, ensuring fewer missed leads.",
            icon: <Timer className="w-8 h-8 text-white" />,
            bgColor: "bg-emerald-600"
        },
        {
            title: "Higher Conversion",
            description: "Move leads through the funnel from inquiry to appointment with automated, tailored sequences.",
            icon: <TrendingUp className="w-8 h-8 text-white" />,
            bgColor: "bg-blue-600"
        },
        {
            title: "Pipeline Visibility",
            description: "Get full visibility into what's in your pipeline and where potential deals might be stuck.",
            icon: <Eye className="w-8 h-8 text-white" />,
            bgColor: "bg-purple-600"
        },
        {
            title: "Zero Manual Chasing",
            description: "Spend less time inside clunky CRMs and more time talking to real, ready-to-act prospects.",
            icon: <MousePointer2 className="w-8 h-8 text-white" />,
            bgColor: "bg-orange-600"
        }
    ];

    return (
        <section className="py-24 px-4 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
                        Real Impact for Your Business
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium">
                        Automate the noise so you can focus on the signals that matter.
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
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${result.bgColor} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                                {result.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {result.title}
                            </h3>
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
