'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/landing/Navbar';
import { Globe, Users, Phone, MessageSquare, BarChart3, Check, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Reusing the data structure but expanding it for the full page if needed
// Note: In a real app, this data should be in a shared config or lib file.
// For now, I will define it here to ensure it's self-contained and exactly matches the requested copy.

const solutionsData = [
    {
        id: 1,
        title: "IDX Website + Ranking + AI Chatbot",
        subtitle: "Your digital storefront, automated and optimized.",
        description: "We build and operate a high-performance, IDX-integrated website that doesn’t just look good — it works continuously to attract, engage, and convert buyers and sellers.",
        icon: Globe,
        accent: "text-blue-600",
        whatReplaces: ["Manual website updates", "Missed inbound inquiries", "Static pages that don’t convert", "Disconnected booking tools"],
        whatYouGet: ["IDX-integrated, high-performance website", "Local search visibility for buyer & seller intent", "AI chatbot engaging visitors 24/7", "Automated appointment booking", "Lead capture across all pages"],
        outcome: ["Show up where buyers search", "Convert traffic into conversations", "Book meetings without chasing", "Build a long-term inbound engine"]
    },
    {
        id: 2,
        title: "AI Lead Management & Nurturing",
        subtitle: "Every lead captured. Every lead followed up. Automatically.",
        description: "RealtyGenie centralizes all your leads and uses AI to nurture, score, and move them forward — without you needing to touch a CRM all day.",
        icon: Users,
        accent: "text-indigo-600",
        whatReplaces: ["Manual follow-ups", "Spreadsheet tracking", "Forgotten leads", "Cold databases"],
        whatYouGet: ["Unified lead capture from all sources", "Intelligent lead scoring", "Automated nurture flows", "Smart reminders and alerts", "Clear pipeline visibility"],
        outcome: ["No missed opportunities", "Faster response times", "Higher conversion rates", "Full visibility into pipeline"]
    },
    {
        id: 3,
        title: "AI Calling Assistant",
        subtitle: "Your AI assistant that calls, follows up, and books.",
        description: "RealtyGenie’s AI calling assistant handles outbound and inbound calls so no lead ever waits for a response.",
        icon: Phone,
        accent: "text-purple-600",
        whatReplaces: ["Manual calling", "Voicemail tag", "Missed follow-ups", "Time spent qualifying leads"],
        whatYouGet: ["AI-powered calling assistant(s)", "Custom scripts for buyers/sellers", "Automated follow-up calls", "Appointment booking on-call", "Call summaries and insights"],
        outcome: ["Instant voice follow-up", "Higher contact & booking rates", "Less time on the phone", "More qualified conversations"]
    },
    {
        id: 4,
        title: "Social Media Management",
        subtitle: "Stay visible without spending your time online.",
        description: "We manage your social presence so you stay relevant, professional, and top-of-mind — without daily posting or content creation.",
        icon: MessageSquare,
        accent: "text-pink-600",
        whatReplaces: ["Daily posting stress", "Inconsistent branding", "Guesswork on content"],
        whatYouGet: ["Planned and scheduled content", "Market updates and insights", "Listing and brand posts", "AI-assisted captions and creatives"],
        outcome: ["Stronger local brand presence", "Consistent visibility", "Increased inbound interest", "Zero daily effort from you"]
    },
    {
        id: 5,
        title: "Monthly Market Intelligence",
        subtitle: "Turn complex market data into client trust.",
        description: "We convert housing data and policy decisions into clear, client-friendly insights you can confidently share.",
        icon: BarChart3,
        accent: "text-orange-600",
        whatReplaces: ["Explaining rate changes manually", "Generic market commentary", "Unclear buyer/seller messaging"],
        whatYouGet: ["Monthly housing market summaries", "Policy and rate impact explanations", "Buyer & seller-focused insights", "Shareable, branded reports"],
        outcome: ["Stronger client trust", "Better conversations", "Authority positioning", "Powerful nurture content"]
    }
];

export default function SolutionsPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-bold tracking-tight text-[#0F172A] mb-6"
                        >
                            Our AI-Powered Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-muted-foreground"
                        >
                            Everything you need to modernize your real estate business in one integrated platform.
                        </motion.p>
                    </div>

                    <div className="space-y-24">
                        {solutionsData.map((solution, index) => (
                            <motion.div
                                key={solution.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className="grid md:grid-cols-12 gap-10 items-start"
                            >
                                {/* Left Side: Header & Description */}
                                <div className="md:col-span-5 sticky top-32">
                                    <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6`}>
                                        <solution.icon className={`w-7 h-7 ${solution.accent}`} />
                                    </div>
                                    <h2 className="text-3xl font-bold text-[#0F172A] mb-4">{solution.title}</h2>
                                    <p className="text-xl font-medium text-slate-800 mb-4">{solution.subtitle}</p>
                                    <p className="text-muted-foreground leading-relaxed mb-8">{solution.description}</p>

                                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                                        <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-500 mb-4">What This Replaces</h4>
                                        <ul className="space-y-3">
                                            {solution.whatReplaces.map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-slate-600 text-sm">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                                    <span className="line-through decoration-slate-300">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Right Side: Features & Outcomes */}
                                <div className="md:col-span-7 space-y-8">
                                    <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-10">
                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                            <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                                <Check className="w-4 h-4" />
                                            </span>
                                            What You Get
                                        </h3>
                                        <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
                                            {solution.whatYouGet.map((item, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                                    <span className="text-slate-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-[#0F172A] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden">
                                        {/* Decorative gradient */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3" />

                                        <h3 className="text-xl font-bold mb-6 flex items-center gap-2 relative z-10">
                                            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-yellow-400">
                                                <Zap className="w-4 h-4" />
                                            </span>
                                            Outcome
                                        </h3>
                                        <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                                            {solution.outcome.map((item, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <div className="w-1 h-1 rounded-full bg-blue-400" />
                                                    <span className="text-blue-50 font-medium">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="mt-32 text-center bg-slate-50 rounded-[2.5rem] p-12 md:p-20 border border-slate-100">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#0F172A]">Ready to modernize your business?</h2>
                        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                            Join high-producing realtors who are using AI to close more deals with less effort.
                        </p>
                        <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/20">
                            Book a Demo
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    );
}
