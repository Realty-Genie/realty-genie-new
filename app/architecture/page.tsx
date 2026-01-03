'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, Database, Network, Shield, Zap, Globe, MessageSquare, PhoneCall, BarChart3 } from 'lucide-react';
import { Navbar } from '@/components/landing/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number, className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, delay, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

const TechCard = ({ icon: Icon, title, description, tags }: { icon: any, title: string, description: string, tags?: string[] }) => (
    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all group overflow-hidden relative">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 group-hover:bg-primary/10 transition-colors" />
        <div className="relative z-10">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-primary/20">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-slate-900">{title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">{description}</p>
            {tags && (
                <div className="flex flex-wrap gap-2">
                    {tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
        </div>
    </div>
);

export default function ArchitecturePage() {
    return (
        <div className="min-h-screen bg-[#FDFDFF] text-slate-900 font-sans selection:bg-primary/20 selection:text-primary">
            <Navbar />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-white to-white" />
                    <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8">
                                <Cpu className="w-4 h-4" />
                                System Architecture
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 max-w-4xl">
                                AI-Powered <br className="hidden md:block" />
                                <span className="italic font-serif">Real Estate</span> Intelligence
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Explore the underlying technology that powers the RealtyGenie operating system, from neural processing to distributed infrastructure.
                            </p>
                        </FadeIn>
                    </div>
                </section>

                {/* --- Core Engine Section --- */}
                <section className="py-24 bg-white border-y border-slate-100">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
                            <FadeIn>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">The Cognitive Engine</h2>
                                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                    Our proprietary AI stack combines Large Language Models (LLMs) with domain-specific knowledge graphs and real-time data processing.
                                </p>
                                <ul className="space-y-4">
                                    {[
                                        { title: "Natural Language Processing", desc: "Understanding intent beyond simple keywords.", icon: MessageSquare },
                                        { title: "Voice Synthesis & Recognition", desc: "Low-latency conversations with human-like quality.", icon: PhoneCall },
                                        { title: "Predictive Analytics", desc: "Scoring leads based on behavioral patterns.", icon: BarChart3 }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="mt-1 w-5 h-5 text-primary flex-shrink-0">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <span className="font-bold block">{item.title}</span>
                                                <span className="text-slate-500 text-sm">{item.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                            <FadeIn delay={0.2} className="relative">
                                <div className="aspect-[4/3] bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden flex items-center justify-center p-8 relative">
                                    {/* Visual representation of nodes */}
                                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
                                    <div className="grid grid-cols-3 gap-4 relative z-10 w-full">
                                        {[...Array(9)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                    opacity: [0.5, 0.8, 0.5],
                                                }}
                                                transition={{
                                                    duration: 3 + i % 3,
                                                    repeat: Infinity,
                                                    delay: i * 0.2
                                                }}
                                                className="h-20 rounded-xl bg-white border border-primary/10 shadow-sm flex items-center justify-center"
                                            >
                                                <div className={`w-8 h-8 rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-primary/80'} opacity-20 blur-xl absolute`} />
                                                <div className={`w-2 h-2 rounded-full ${i % 2 === 0 ? 'bg-primary' : 'bg-primary/80'}`} />
                                            </motion.div>
                                        ))}
                                        {/* Connecting lines - simplified with SVG or just CSS */}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <TechCard
                                icon={Globe}
                                title="Seamless Integrations"
                                description="Real-time syncing with active IDX feeds, MLS databases, and popular CRMs like Salesforce and HubSpot."
                                tags={["REST API", "Webhooks", "GraphQL"]}
                            />
                            <TechCard
                                icon={Shield}
                                title="Enterprise Security"
                                description="SOC2 compliant infrastructure with end-to-end encryption for all sensitive client and property data."
                                tags={["AES-256", "TLS 1.3", "RBAC"]}
                            />
                            <TechCard
                                icon={Zap}
                                title="Edge Computation"
                                description="Low-latency response times globally through our distributed edge network for instant AI interactions."
                                tags={["CDN", "Edge Workers", "Serverless"]}
                            />
                        </div>
                    </div>
                </section>

                {/* --- Data Flow Section --- */}
                <section className="py-32 px-4 bg-[#0f172a] text-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Data Lifecycle</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">
                                How information flows through RealtyGenie to drive your business forward.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-8 items-stretch">
                            {[
                                { step: "Ingestion", desc: "Raw data from IDX, Social Media, and Voice interactions.", icon: Database },
                                { step: "Processing", desc: "Our AI engines clean, categorize, and analyze intent.", icon: Cpu },
                                { step: "Action", desc: "Automated follow-ups, CRM updates, and scheduling.", icon: Network },
                                { step: "Intelligence", desc: "Performance reports and market trend analysis.", icon: BarChart3 }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={i * 0.1} className="flex-1">
                                    <div className="h-full p-8 rounded-2xl bg-slate-900/50 border border-slate-800 flex flex-col items-center text-center relative">
                                        {i < 3 && (
                                            <div className="hidden md:block absolute top-[2.75rem] -right-4 z-20">
                                                <div className="w-8 h-px bg-slate-700" />
                                            </div>
                                        )}
                                        <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary/70 mb-6 border border-slate-700">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-3">{item.step}</h3>
                                        <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="py-32 px-4">
                    <FadeIn className="max-w-4xl mx-auto text-center">
                        <h2 className="text-4xl font-bold mb-8">Ready to build the future of real estate?</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="h-14 px-10 text-base">
                                Talk to an Engineer
                            </Button>
                            <Link href="/solutions">
                                <Button variant="outline" size="lg" className="h-14 px-10 text-base">
                                    Explore Solutions
                                </Button>
                            </Link>
                        </div>
                    </FadeIn>
                </section>
            </main>

            <footer className="bg-white border-t border-slate-100 py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">R</div>
                        <span className="font-bold text-lg tracking-tight">RealtyGenie</span>
                    </div>

                    <div className="flex gap-8 text-sm font-medium text-slate-500">
                        <Link href="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
                        <Link href="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link>
                        <Link href="/architecture" className="hover:text-primary transition-colors underline underline-offset-4 text-primary">Developers</Link>
                    </div>

                    <div className="text-sm text-slate-400">
                        © {new Date().getFullYear()} RealtyGenie
                    </div>
                </div>
            </footer>
        </div>
    );
}
