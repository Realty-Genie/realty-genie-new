'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, BarChart3 } from 'lucide-react';

const steps = [
    {
        title: "Diagnose",
        description: "We review your current leads, website, and workflows to spot where time and money are being wasted.",
        icon: Search,
        color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
        title: "Design",
        description: "We pick and shape the right mix of AI tools (website, leads, calls, content, reporting) for your business.",
        icon: PenTool,
        color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
        title: "Deploy",
        description: "We connect to your existing systems, switch on automation, and keep your day-to-day running smoothly.",
        icon: Rocket,
        color: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
    },
    {
        title: "Prove & Improve",
        description: "We track results, share simple reports, and keep tuning the system to free more time and grow your pipeline.",
        icon: BarChart3,
        color: "bg-amber-500/10 text-amber-600 border-amber-200"
    }
];

export const Process = () => {
    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-6 text-slate-900"
                    >
                        Our Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
                    >
                        A systematic approach to transforming your real estate business with AI.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                            className="relative p-8 rounded-3xl border border-slate-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${step.color} group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className="w-7 h-7" />
                            </div>
                            <div className="absolute top-8 right-8 text-4xl font-black text-slate-50 group-hover:text-slate-100 transition-colors pointer-events-none">
                                0{index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-slate-900">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none -z-10 opacity-30">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 blur-[100px] rounded-full" />
            </div>
        </section>
    );
};
