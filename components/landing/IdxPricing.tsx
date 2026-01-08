'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles } from 'lucide-react';

export const IdxPricing = () => {
    const plans = [
        {
            name: "Pro Website & SEO",
            price: "$ custom",
            description: "Perfect for individual agents looking to dominate their local market with AI automation.",
            features: [
                "Modern Next.js IDX Website",
                "Core SEO Foundation Setup",
                "Local SEO Optimization",
                "AI-Ready Content Strategy",
                "Lead Capture & CRM Integration",
                "Monthly Performance Reports"
            ],
            highlight: false,
            cta: "Get Started"
        },
        {
            name: "Elite AI & Search",
            price: "$ custom",
            description: "Advanced solution for teams and top producers who want maximum visibility in AI search.",
            features: [
                "Everything in Pro Website",
                "Full GEO (AI Search) Optimization",
                "Neighborhood & Niche Authority Pages",
                "24/7 AI Sales Chatbot",
                "Automated Calendar Booking",
                "Priority Technical Support"
            ],
            highlight: true,
            cta: "Book Strategy Call"
        }
    ];

    return (
        <section className="py-24 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Simple, Transparent Pricing
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose the plan that fits your growth goals. No hidden fees, just pure performance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`rounded-3xl p-8 flex flex-col border ${plan.highlight
                                    ? 'border-blue-600 shadow-2xl shadow-blue-100 relative'
                                    : 'border-slate-200 shadow-lg shadow-slate-50'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    MOST POPULAR
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                <div className="text-4xl font-bold text-blue-600 mb-4">{plan.price}</div>
                                <p className="text-slate-500 text-sm leading-relaxed">
                                    {plan.description}
                                </p>
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 text-sm">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-blue-100' : 'bg-slate-100'}`}>
                                            <Check className={`w-3 h-3 ${plan.highlight ? 'text-blue-600' : 'text-slate-600'}`} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full h-12 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                                    }`}
                            >
                                {plan.cta}
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
