'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowRight, Phone, Mail, Users, LayoutGrid, FileText,
    Zap, Moon, Search, Database, Settings, Bot
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

/* ─── Shared fade ───────────────────────────────────────────────── */
const FadeIn = ({
    children, delay = 0, className = '',
}: { children: React.ReactNode; delay?: number; className?: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
        className={className}
    >
        {children}
    </motion.div>
);

/* ─── 1. STATS BAR ──────────────────────────────────────────────── */
const stats = [
    { value: '3 min', label: 'avg. lead response' },
    { value: '68%', label: 'less admin work' },
    { value: '4×', label: 'more follow-ups' },
    { value: '100%', label: 'leads tracked' },
];

export const StatsBar = () => (
    <section className="bg-[#F5F8FF] border-y border-primary/8 py-10 px-4 md:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-primary/10">
            {stats.map((s, i) => (
                <FadeIn key={i} delay={i * 0.07} className="text-center px-4">
                    <p className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-1 tracking-tight">{s.value}</p>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{s.label}</p>
                </FadeIn>
            ))}
        </div>
    </section>
);

/* ─── 2. OPERATING SYSTEM ───────────────────────────────────────── */
const steps = [
    {
        num: '01',
        title: 'Import',
        body: 'Pull in leads from Zillow, Realtor.com, your IDX site, or any source. Every contact lands in one unified place.',
        accent: '#2563eb',
        lightBg: '#EFF6FF',
        borderColor: '#BFDBFE',
        Icon: Database,
        illustration: (
            <svg viewBox="0 0 96 80" fill="none" className="w-24 h-20">
                <ellipse cx="48" cy="22" rx="30" ry="11" fill="#BFDBFE" stroke="#3B82F6" strokeWidth="1.5" />
                <rect x="18" y="22" width="60" height="26" fill="#BFDBFE" />
                <ellipse cx="48" cy="48" rx="30" ry="11" fill="#93C5FD" stroke="#3B82F6" strokeWidth="1.5" />
                <rect x="18" y="48" width="60" height="14" fill="#93C5FD" />
                <ellipse cx="48" cy="62" rx="30" ry="11" fill="#60A5FA" stroke="#2563EB" strokeWidth="1.5" />
                <circle cx="68" cy="24" r="6" fill="#2563EB" />
                <path d="M65 24 L71 24 M68 21 L68 27" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        num: '02',
        title: 'Customize',
        body: 'Build your ideal pipeline. Custom stages, tags, fields, and automations — shaped exactly to how you close deals.',
        accent: '#7C3AED',
        lightBg: '#F5F3FF',
        borderColor: '#DDD6FE',
        Icon: Settings,
        illustration: (
            <svg viewBox="0 0 96 80" fill="none" className="w-24 h-20">
                <rect x="8" y="44" width="80" height="26" rx="6" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="1.5" />
                <rect x="12" y="32" width="72" height="26" rx="6" fill="#C4B5FD" stroke="#8B5CF6" strokeWidth="1.5" />
                <rect x="16" y="20" width="64" height="26" rx="6" fill="#A78BFA" stroke="#7C3AED" strokeWidth="1.5" />
                <circle cx="72" cy="18" r="7" fill="#7C3AED" />
                <path d="M72 14 L72 22 M68 18 L76 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        num: '03',
        title: 'Automate',
        body: 'Your AI agent calls leads, sends follow-ups, and books meetings. Your pipeline moves forward while you sleep.',
        accent: '#059669',
        lightBg: '#ECFDF5',
        borderColor: '#A7F3D0',
        Icon: Bot,
        illustration: (
            <svg viewBox="0 0 96 80" fill="none" className="w-24 h-20">
                {/* robot head */}
                <rect x="22" y="18" width="52" height="40" rx="10" fill="#A7F3D0" stroke="#10B981" strokeWidth="1.5" />
                {/* eyes */}
                <circle cx="36" cy="34" r="6" fill="#059669" />
                <circle cx="60" cy="34" r="6" fill="#059669" />
                <circle cx="37" cy="33" r="2" fill="white" />
                <circle cx="61" cy="33" r="2" fill="white" />
                {/* mouth */}
                <path d="M36 46 Q48 52 60 46" stroke="#059669" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* antenna */}
                <line x1="48" y1="18" x2="48" y2="8" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                <circle cx="48" cy="6" r="3" fill="#10B981" />
                {/* arms */}
                <path d="M22 36 L10 42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
                <path d="M74 36 L86 42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
];

export const OperatingSystemSection = () => (
    <section className="bg-white py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-6">
                    How it works
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight mb-4">
                    An Operating System
                    <span className="block text-slate-400 font-semibold">for your real estate business</span>
                </h2>
                <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                    Built around your contacts and adaptable to your workflows. Designed to fit the{' '}
                    <span className="text-[#0F172A] font-semibold">evolving demands</span> of modern realtors.
                </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((s, i) => (
                    <FadeIn key={i} delay={i * 0.12}>
                        <div
                            className="relative h-full rounded-3xl border bg-white p-8 flex flex-col gap-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group overflow-hidden"
                            style={{ borderColor: s.borderColor }}
                        >
                            {/* background tint */}
                            <div
                                className="absolute inset-0 opacity-40 rounded-3xl pointer-events-none"
                                style={{ background: s.lightBg }}
                            />
                            {/* number */}
                            <span
                                className="absolute top-6 right-6 text-5xl font-black opacity-10 select-none"
                                style={{ color: s.accent }}
                            >
                                {s.num}
                            </span>

                            <div className="relative z-10 flex justify-center py-2">
                                {s.illustration}
                            </div>

                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2">
                                    <div
                                        className="w-6 h-6 rounded-lg flex items-center justify-center"
                                        style={{ background: s.lightBg }}
                                    >
                                        <s.Icon size={13} style={{ color: s.accent }} strokeWidth={2} />
                                    </div>
                                    <p className="text-xs font-bold uppercase tracking-widest" style={{ color: s.accent }}>
                                        {s.num} · {s.title}
                                    </p>
                                </div>
                                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </div>
    </section>
);

/* ─── 3. FEATURES GRID ──────────────────────────────────────────── */
const featureCards = [
    {
        icon: LayoutGrid,
        accent: '#2563EB',
        lightBg: '#EFF6FF',
        title: 'Pipeline Views',
        sub: 'Visualize your workflows.',
        content: (
            <div className="mt-5 space-y-2">
                {[
                    { label: 'New Inquiry', color: '#3B82F6' },
                    { label: 'Showing Scheduled', color: '#F59E0B' },
                    { label: 'Offer Preparing', color: '#10B981' },
                    { label: 'Offer Submitted', color: '#6366F1' },
                    { label: 'Qualified', color: '#EC4899' },
                ].map((s, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: s.color }} />
                        <span className="text-xs text-slate-600 font-medium">{s.label}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: Users,
        accent: '#059669',
        lightBg: '#ECFDF5',
        title: 'Lead Management',
        sub: 'Never miss a deal again.',
        content: (
            <div className="mt-5 space-y-2">
                {['Liam Thompson', 'Olivia Martin', 'Noah Tremblay', 'Emma Dubois'].map((n) => (
                    <div key={n} className="flex items-center gap-2.5 py-0.5">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500 flex-shrink-0">
                            {n[0]}
                        </div>
                        <span className="text-xs text-slate-600">{n}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: FileText,
        accent: '#7C3AED',
        lightBg: '#F5F3FF',
        title: 'Notes',
        sub: 'Rich notes with text blocks and markdown.',
        content: (
            <div className="mt-5 rounded-xl border border-slate-100 bg-slate-50 p-4 text-xs text-slate-500 leading-relaxed">
                <p className="font-semibold text-slate-700 mb-1">Summary:</p>
                <p>Discussed showing schedule with Liam. Expressed interest in 3-bed units in East Vancouver. Pre-approval in progress.</p>
                <p className="font-semibold text-slate-700 mt-3 mb-1">Key Points:</p>
                <p>Budget: $780K–$850K · 60 days · Schools nearby</p>
            </div>
        ),
    },
    {
        icon: Zap,
        accent: '#D97706',
        lightBg: '#FFFBEB',
        title: 'Shortcuts',
        sub: 'Fly through the app with intuitive shortcuts.',
        content: (
            <div className="mt-5 flex flex-wrap gap-2">
                {['fn', 'ctrl', 'opt', '⌘K'].map((k) => (
                    <kbd key={k} className="px-2.5 py-1 bg-slate-900 text-white text-xs font-mono rounded-lg shadow-sm font-semibold">{k}</kbd>
                ))}
                <p className="w-full text-xs text-slate-400 mt-2">Navigate anything without touching the mouse.</p>
            </div>
        ),
    },
    {
        icon: Search,
        accent: '#0891B2',
        lightBg: '#F0F9FF',
        title: 'Command Search',
        sub: 'Find anything instantly.',
        content: (
            <div className="mt-5">
                <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-3 py-2.5 bg-white shadow-sm">
                    <Search size={12} className="text-slate-400" />
                    <span className="text-xs text-slate-400">Search contacts, notes, deals…</span>
                    <kbd className="ml-auto text-[10px] bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-500">⌘K</kbd>
                </div>
                <div className="mt-2 space-y-1">
                    {['Create contact', 'Go to pipeline', 'New campaign'].map((a) => (
                        <div key={a} className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-50 cursor-pointer">
                            <ArrowRight size={10} className="text-slate-400" />
                            <span className="text-xs text-slate-500">{a}</span>
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
    {
        icon: Mail,
        accent: '#BE185D',
        lightBg: '#FDF2F8',
        title: 'Email Campaigns',
        sub: 'Drip sequences on autopilot.',
        content: (
            <div className="mt-5 space-y-2">
                {[
                    { label: 'Welcome Email', tag: 'Sent', color: '#059669' },
                    { label: 'Open House Invite', tag: 'Queued', color: '#D97706' },
                    { label: 'Follow-Up #1', tag: 'Draft', color: '#94A3B8' },
                ].map((e) => (
                    <div key={e.label} className="flex items-center justify-between border border-slate-100 rounded-xl px-3 py-2 bg-white">
                        <div className="flex items-center gap-2">
                            <Mail size={11} style={{ color: e.color }} />
                            <span className="text-xs font-medium text-slate-700">{e.label}</span>
                        </div>
                        <span
                            className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
                            style={{ background: e.color + '15', color: e.color }}
                        >
                            {e.tag}
                        </span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: Phone,
        accent: '#2563EB',
        lightBg: '#EFF6FF',
        title: 'AI Calling Agent',
        sub: 'Calls, qualifies, and books meetings.',
        content: (
            <div className="mt-5 space-y-2">
                {[
                    { name: 'Mohak', status: 'Ended', dur: '71s', c: '#6366F1' },
                    { name: 'Sarah', status: 'Booked', dur: '2m 14s', c: '#059669' },
                    { name: 'James', status: 'No answer', dur: '—', c: '#94A3B8' },
                ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between text-xs border border-slate-100 rounded-xl px-3 py-2 bg-white">
                        <div className="flex items-center gap-2">
                            <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[9px] font-bold text-slate-500">{c.name[0]}</div>
                            <span className="text-slate-700 font-medium">{c.name}</span>
                        </div>
                        <span className="text-[10px] text-slate-400">{c.dur}</span>
                        <span className="text-[10px] font-semibold" style={{ color: c.c }}>{c.status}</span>
                    </div>
                ))}
            </div>
        ),
    },
    {
        icon: Moon,
        accent: '#334155',
        lightBg: '#F8FAFC',
        title: 'Dark Mode',
        sub: 'Boost visibility and reduce eye strain.',
        dark: true,
        content: (
            <div className="mt-5 rounded-xl bg-slate-900 border border-slate-800 p-4 space-y-2.5">
                {['Leads', 'Campaigns', 'Analytics', 'Settings'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                        <span className="text-xs text-slate-400">{item}</span>
                    </div>
                ))}
            </div>
        ),
    },
];

export const FeatureGridSection = () => (
    <section className="bg-[#F5F8FF] py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-14">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 text-muted-foreground text-sm font-medium mb-6 shadow-sm">
                    Everything you need
                </div>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0F172A] leading-tight">
                    Plus all the features
                    <span className="block text-slate-400 font-semibold">of a great CRM</span>
                </h2>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {featureCards.map((card, i) => {
                    const Icon = card.icon;
                    return (
                        <FadeIn key={i} delay={i * 0.05}>
                            <div className={`h-full rounded-3xl border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group ${card.dark ? 'bg-slate-950' : 'bg-white'}`}>
                                <div
                                    className="w-8 h-8 rounded-xl flex items-center justify-center mb-3"
                                    style={{ background: card.lightBg }}
                                >
                                    <Icon size={15} style={{ color: card.accent }} strokeWidth={2} />
                                </div>
                                <p className={`text-sm font-bold mb-0.5 ${card.dark ? 'text-white' : 'text-[#0F172A]'}`}>{card.title}</p>
                                <p className={`text-xs leading-relaxed ${card.dark ? 'text-slate-500' : 'text-slate-400'}`}>{card.sub}</p>
                                {card.content}
                            </div>
                        </FadeIn>
                    );
                })}
            </div>
        </div>
    </section>
);

/* ─── 4. TAKE CONTROL ───────────────────────────────────────────── */
const floatingItems = [
    { label: 'Zillow', x: '6%', y: '20%', rotate: '-3deg' },
    { label: 'DocuSign', x: '74%', y: '14%', rotate: '2deg' },
    { label: 'MLS', x: '56%', y: '58%', rotate: '-2deg' },
    { label: 'Stripe', x: '16%', y: '62%', rotate: '4deg' },
    { label: 'Gmail', x: '82%', y: '50%', rotate: '-2deg' },
    { label: 'Realtor.ca', x: '38%', y: '16%', rotate: '2deg' },
    { label: 'Twilio', x: '66%', y: '76%', rotate: '-4deg' },
    { label: 'OpenAI', x: '4%', y: '76%', rotate: '3deg' },
    { label: 'iMessage', x: '84%', y: '28%', rotate: '-1deg' },
    { label: 'Calendly', x: '28%', y: '72%', rotate: '3deg' },
    { label: 'WhatsApp', x: '48%', y: '80%', rotate: '-3deg' },
];

export const TakeControlSection = () => (
    <section className="relative overflow-hidden bg-white py-32 px-4 md:px-8" style={{ minHeight: '540px' }}>
        {/* Soft radial bg */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-50/60 blur-[100px]" />
        </div>

        {/* Floating integration pills */}
        <div className="absolute inset-0 pointer-events-none">
            {floatingItems.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: 'easeOut' }}
                    className="absolute"
                    style={{ left: item.x, top: item.y, transform: `rotate(${item.rotate})` }}
                >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-primary/10 rounded-full text-xs font-semibold text-slate-600 shadow-sm whitespace-nowrap">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        {item.label}
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Centre content */}
        <div className="relative z-10 max-w-lg mx-auto text-center">
            <FadeIn>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 text-muted-foreground text-sm font-medium mb-8 shadow-sm">
                    Get started today
                    <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-3">
                    Take Control
                </h2>
                <p className="text-5xl md:text-6xl font-bold tracking-tight text-slate-300 leading-[1.1] mb-10">
                    Own your pipeline
                </p>
                <div className="flex items-center justify-center gap-4">
                    <Button
                        onClick={() => window.open('https://cal.com/realtygenie/30min?overlayCalendar=true', '_blank')}
                        size="lg"
                        className="h-12 px-8 text-base font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all duration-300"
                    >
                        Get Started
                    </Button>
                    <Link href="/how-it-works">
                        <Button variant="ghost" size="lg" className="h-12 px-4 text-base font-medium text-muted-foreground hover:text-foreground gap-2 group">
                            See how it works
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </FadeIn>
        </div>
    </section>
);
