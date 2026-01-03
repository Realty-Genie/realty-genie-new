'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Sparkles, Zap, ArrowRight, Check, X, MoveRight, Layers, UserPlus, CalendarCheck } from 'lucide-react';
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

const StepCard = ({ number, title, description, icon: Icon, delay }: { number: string, title: string, description: string, icon: any, delay: number }) => (
    <FadeIn delay={delay} className="relative group">
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 border border-primary/10 group-hover:scale-110 transition-transform duration-500">
                <Icon className="w-8 h-8" />
            </div>
            <div className="absolute top-6 right-10 text-4xl font-black text-slate-100 group-hover:text-primary/10 transition-colors pointer-events-none">
                {number}
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">{title}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
                {description}
            </p>
        </div>
    </FadeIn>
);

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-primary/20 selection:text-primary">
            <Navbar />

            <main>
                {/* --- Hero Section --- */}
                <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden border-b border-slate-50">
                    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-white to-white" />
                    <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                        <FadeIn>
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-8">
                                <Sparkles className="w-4 h-4" />
                                Your Path to Automation
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-8 max-w-4xl">
                                Automate Your <br className="hidden md:block" />
                                <span className="italic font-serif">Real Estate</span> Operations
                            </h1>
                            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                                Setting up RealtyGenie is simple. Within minutes, your AI twin will be processing leads, handling calls, and syncing your entire business.
                            </p>
                            <Button size="lg" className="h-14 px-10 text-base">
                                Start Your Onboarding
                            </Button>
                        </FadeIn>
                    </div>
                </section>

                {/* --- Process Steps --- */}
                <section className="py-24 md:py-32 bg-[#F8FAFC]">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Three-Step Rollout</h2>
                            <p className="text-slate-500 max-w-xl mx-auto">
                                We've streamlined the setup process so you can get back to what you do best: closing deals.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <StepCard
                                number="01"
                                title="Sync Your World"
                                description="Connect your IDX website, MLS feed, and CRM in one click. Our system instantly maps your current data."
                                icon={Link2}
                                delay={0.1}
                            />
                            <StepCard
                                number="02"
                                title="Train Your AI"
                                description="Input your brand personality and specific property knowledge. Your AI learns your voice in under 5 minutes."
                                icon={Layers}
                                delay={0.2}
                            />
                            <StepCard
                                number="03"
                                title="Turn On Autopilot"
                                description="Set your rules and watch as RealtyGenie begins following up with leads and booking tours automatically."
                                icon={Zap}
                                delay={0.3}
                            />
                        </div>
                    </div>
                </section>

                {/* --- Comparison Section --- */}
                <section className="py-24 md:py-32 bg-white">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the Transformation</h2>
                            <p className="text-slate-500">How your workday changes with RealtyGenie.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                            <FadeIn className="bg-slate-50 border border-slate-100 rounded-3xl p-10">
                                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 text-slate-500">
                                    <X className="w-6 h-6 text-red-400" />
                                    The Manual Way
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Spending hours calling cold leads",
                                        "Manually updating CRM status for every lead",
                                        "Letting inquiries go cold after business hours",
                                        "Inconsistent social media presence"
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-4 text-slate-500">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-2 flex-shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>

                            <FadeIn delay={0.2} className="bg-primary rounded-3xl p-10 text-white shadow-2xl shadow-primary/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8" />
                                <h3 className="text-xl font-bold mb-8 flex items-center gap-3 relative z-10">
                                    <Check className="w-6 h-6 text-white/70" />
                                    The RealtyGenie Way
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        "Instant AI-voice follow-ups 24/7",
                                        "Autonomous CRM pipeline management",
                                        "Pre-screened leads booked directly on your calendar",
                                        "Daily market intelligence and social posting"
                                    ].map((text, i) => (
                                        <li key={i} className="flex gap-4 text-white/90 font-medium">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/70 mt-2 flex-shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- Outcomes Section --- */}
                <section className="py-24 bg-slate-900 text-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <FadeIn>
                                <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Your AI twin never sleeps, never complains, and always follows up.</h2>
                                <div className="space-y-8">
                                    {[
                                        { title: "24/7 Availability", desc: "Never miss a lead, whether it's 2 PM or 2 AM.", icon: MoveRight },
                                        { title: "10x Productivity", desc: "Handle 10x the lead volume without adding headcount.", icon: UserPlus },
                                        { title: "Consistent Branding", desc: "Every interaction is professional and brand-aligned.", icon: MoveRight },
                                        { title: "Smart Scheduling", desc: "Showings are booked directly via your calendar integration.", icon: CalendarCheck }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-6 border-l-2 border-slate-700 pl-6 hover:border-primary/70 transition-colors">
                                            <div>
                                                <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                                <p className="text-slate-400 text-sm">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                            <FadeIn delay={0.2} className="relative">
                                {/* Visual outcome representation */}
                                <div className="aspect-square bg-gradient-to-br from-primary to-primary/60 rounded-[3rem] p-1 shadow-2xl">
                                    <div className="w-full h-full bg-slate-900 rounded-[2.8rem] flex flex-col p-12 justify-center gap-8 border border-white/5">
                                        <div className="space-y-2">
                                            <div className="h-2 w-24 bg-primary/20 rounded" />
                                            <div className="h-8 w-48 bg-white rounded-lg" />
                                        </div>
                                        <div className="space-y-2">
                                            <div className="h-2 w-32 bg-primary/20 rounded" />
                                            <div className="h-24 w-full bg-white/5 rounded-2xl border border-white/10" />
                                        </div>
                                        <div className="flex gap-4">
                                            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center">
                                                <Check className="w-6 h-6" />
                                            </div>
                                            <div className="h-12 flex-1 bg-white/5 rounded-xl border border-white/10" />
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </section>

                {/* --- Final CTA --- */}
                <section className="py-32 px-4 text-center">
                    <FadeIn>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-10">Stop managing. <span className="text-primary">Start closing.</span></h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="h-14 px-12 text-base shadow-xl">
                                Book Your Onboarding Call
                            </Button>
                            <Link href="/">
                                <Button variant="outline" size="lg" className="h-14 px-12 text-base">
                                    Return Home
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
                        <Link href="/how-it-works" className="hover:text-primary transition-colors underline underline-offset-4 text-primary">How It Works</Link>
                        <Link href="/architecture" className="hover:text-primary transition-colors">Developers</Link>
                    </div>

                    <div className="text-sm text-slate-400">
                        © {new Date().getFullYear()} RealtyGenie
                    </div>
                </div>
            </footer>
        </div>
    );
}
