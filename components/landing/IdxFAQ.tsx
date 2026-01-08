'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export const IdxFAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "How long does it take to see results?",
            answer: "SEO is a long-term strategy. While technical optimizations and technical SEO happen immediately, local rankings and AI search visibility typically see significant growth within 6–12 months."
        },
        {
            question: "What is Generative Engine Optimization (GEO)?",
            answer: "GEO is the practice of optimizing your content to be cited and quoted by AI search engines like ChatGPT, Gemini, and Google AI Overviews. We focus on structured data and answer-first content to ensure you appear in AI-generated answers."
        },
        {
            question: "Do I need to leave my current website provider?",
            answer: "Yes, for maximum performance and SEO benefits, we build a fresh, high-performance stack. We handle the migration of your current listings and data to ensure a smooth transition."
        },
        {
            question: "How does the AI chatbot capture leads?",
            answer: "Our chatbot is trained on your specific listings and neighborhood data. It can answer buyer questions 24/7, qualify leads, and even book appointments directly into your calendar while you sleep."
        },
        {
            question: "What makes your IDX website different?",
            answer: "Unlike standard template sites, our websites are built for speed and AI discovery. We use React/Next.js for lightning-fast loads and implement advanced internal linking that helps search engines and AI engines index your neighborhood pages more effectively."
        }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600">
                        Everything you need to know about our AI-powered IDX solutions.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-slate-200 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg font-bold text-slate-900">{faq.question}</span>
                                <div className={`p-1 rounded-full transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                    <ChevronDown className="w-5 h-5" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                                    >
                                        <div className="px-8 pb-8 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
