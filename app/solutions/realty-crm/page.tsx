'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowRight, Globe, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';

// ─── Types ────────────────────────────────────────────────────────────────────
interface FlowStep    { label: string; title: string; desc: string; points: string[] }
interface PipelineStage { tag: string; title: string; desc: string; stages: string[] }
interface Faq         { q: string; a: string }

// ─── Data ──────────────────────────────────────────────────────────────────────
const features = [
    { title: 'Lead Capture',        desc: 'Automatically pull leads from websites, landing pages, ad campaigns, and social channels the moment they arrive.' },
    { title: 'AI Follow-Ups',       desc: 'Send personalized email and SMS sequences triggered by lead behavior — no manual effort.' },
    { title: 'AI Calling',          desc: 'Qualify leads over the phone automatically. AI handles the conversation, you close the deal.' },
    { title: 'Appointment Booking', desc: 'Calendar sync, booking links, and smart reminders so every qualified lead gets on your calendar.' },
    { title: 'Pipeline Management', desc: 'Buyer, seller, and investor pipelines in one place with tasks, notes, and stage tracking.' },
    { title: 'Website Builder',     desc: 'High-converting real estate websites and landing pages — generated and optimized for you.' },
    { title: 'Campaign Builder',    desc: 'Design email and SMS drip campaigns visually, then let automation do the rest.' },
    { title: 'Analytics',           desc: 'Full visibility: website traffic, call outcomes, campaign performance, and conversion rates.' },
];

const flowSteps: FlowStep[] = [
    {
        label: 'Capture', title: 'Lead comes in',
        desc: 'RealtyGenie captures leads from your website, landing pages, ads, forms, and social channels in real time.',
        points: ['Website forms', 'Landing pages', 'Facebook / Instagram', 'Ad campaigns']
    },
    {
        label: 'Nurture', title: 'AI follows up instantly',
        desc: 'The platform sends email, SMS, and trigger-based communication automatically so leads never go cold.',
        points: ['Instant response', 'Email drip', 'SMS follow-up', 'Behavior triggers']
    },
    {
        label: 'Qualify', title: 'AI calling qualifies interest',
        desc: 'Automated voice calling qualifies readiness, captures intent, and prepares leads for a real conversation.',
        points: ['Qualification questions', 'Intent capture', 'Objection handling', 'Call outcome logging']
    },
    {
        label: 'Book', title: 'Appointments get scheduled',
        desc: 'Qualified leads receive booking options tied to your calendar so meetings happen faster with zero manual work.',
        points: ['Calendar sync', 'Booking links', 'Reminders', 'No-show reduction']
    },
    {
        label: 'Manage', title: 'Deals move through pipeline',
        desc: 'Tasks are assigned, notes captured, and deals progress through buyer, seller, investor, or transaction workflows.',
        points: ['Deal stages', 'Task assignment', 'Notes & collaboration', 'Conversion analytics']
    }
];

const pipelineStages: PipelineStage[] = [
    { tag: 'Buyer',    title: 'Inquiry to closing',          desc: 'Track buyers from new lead to consultation, showing, offer, negotiation, and close.', stages: ['New', 'Consult', 'Showing', 'Offer', 'Close'] },
    { tag: 'Seller',   title: 'Listing-focused workflow',    desc: 'Manage seller intake, listing prep, launch, inquiries, offers, and closing milestones.', stages: ['Intake', 'Prep', 'Listed', 'Offer', 'Close'] },
    { tag: 'Investor', title: 'Investor-ready journeys',     desc: 'Segment investment leads, qualify intent, nurture capital interest, move through deal stages.', stages: ['New', 'Qualified', 'Offer', 'Due Diligence', 'Close'] },
    { tag: 'Team',     title: 'Assignment & accountability', desc: 'Assign follow-ups, monitor SLAs, add notes, and keep every team member aligned in one place.', stages: ['Assign', 'Follow-up', 'Meeting', 'Proposal', 'Won'] },
];

const faqs: Faq[] = [
    { q: 'What is RealtyGenie?',              a: 'RealtyGenie is an AI-powered real estate CRM that automates lead capture, follow-ups, appointments, pipelines, and analytics — everything from first contact to closed deal.' },
    { q: 'Can RealtyGenie automate follow-ups?', a: 'Yes. It runs automated email, SMS, and AI voice calling workflows triggered by lead behavior, source, and stage.' },
    { q: 'Does RealtyGenie build websites?',  a: 'Yes. It generates high-converting real estate websites and landing pages optimized for both Google search and AI search.' },
    { q: 'Who is RealtyGenie built for?',     a: 'Individual agents, growing teams, and large brokerages. The platform scales with your business from your first lead to hundreds per month.' },
];

// ─── Interactive Hero Dashboard ───────────────────────────────────────────────
const HERO_TABS = ['Leads', 'Pipeline', 'Analytics'] as const;
type HeroTab = typeof HERO_TABS[number];

const leadsData = [
    { name: 'James Miller',  source: 'Facebook',  status: 'Hot',  statusColor: 'bg-red-100 text-red-600',    time: '2m ago' },
    { name: 'Sarah Chen',    source: 'Website',   status: 'Warm', statusColor: 'bg-amber-100 text-amber-600', time: '18m ago' },
    { name: 'Mark Russo',    source: 'Google',    status: 'New',  statusColor: 'bg-blue-100 text-blue-600',   time: '1h ago' },
    { name: 'Priya Sharma',  source: 'Instagram', status: 'Hot',  statusColor: 'bg-red-100 text-red-600',    time: '3h ago' },
];

const pipelineData = [
    { stage: 'New',       count: 12, color: 'bg-slate-100', accent: 'bg-slate-400' },
    { stage: 'Nurturing', count: 8,  color: 'bg-amber-50',  accent: 'bg-amber-400' },
    { stage: 'Qualified', count: 5,  color: 'bg-blue-50',   accent: 'bg-blue-500' },
    { stage: 'Booked',    count: 3,  color: 'bg-green-50',  accent: 'bg-green-500' },
];

const analyticsData = [
    { label: 'Leads This Week', val: '47',  delta: '+18%', color: 'text-amber-500' },
    { label: 'Calls Made',      val: '89',  delta: '+22%', color: 'text-blue-600' },
    { label: 'Appointments',    val: '34',  delta: '+12%', color: 'text-green-600' },
    { label: 'Close Rate',      val: '23%', delta: '+5%',  color: 'text-red-500' },
];

function HeroDashboard() {
    const [tab, setTab] = useState<HeroTab>('Leads');

    return (
        <div className="w-full max-w-4xl mx-auto rounded-2xl border border-slate-200 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] overflow-hidden bg-white">
            {/* Window chrome */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-100 bg-slate-50">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-3 text-xs text-slate-400 font-medium">app.realtygenie.ai</div>
            </div>

            {/* Tabs */}
            <div className="flex items-center gap-1 px-4 pt-3 border-b border-slate-100">
                {HERO_TABS.map(t => (
                    <button
                        key={t}
                        onClick={() => setTab(t)}
                        className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-t-lg ${
                            tab === t ? 'text-slate-900' : 'text-slate-400 hover:text-slate-600'
                        }`}
                    >
                        {t}
                        {tab === t && (
                            <motion.div layoutId="tab-indicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="p-5 min-h-[240px]">
                <AnimatePresence mode="wait">
                    {tab === 'Leads' && (
                        <motion.div
                            key="leads"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">All Leads</span>
                                <span className="text-xs bg-red-50 text-red-600 font-bold px-2 py-0.5 rounded-full border border-red-100">
                                    3 Hot Leads
                                </span>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                {leadsData.map((lead, i) => (
                                    <motion.div
                                        key={lead.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.07 }}
                                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all cursor-pointer group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-[11px] font-bold text-slate-600">
                                                {lead.name[0]}
                                            </div>
                                            <div>
                                                <div className="text-sm font-semibold text-slate-800">{lead.name}</div>
                                                <div className="text-xs text-slate-400">{lead.source}</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${lead.statusColor}`}>{lead.status}</span>
                                            <span className="text-[11px] text-slate-400">{lead.time}</span>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {tab === 'Pipeline' && (
                        <motion.div
                            key="pipeline"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="mb-3">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Buyer Pipeline</span>
                            </div>
                            <div className="grid grid-cols-4 gap-3">
                                {pipelineData.map((col, i) => (
                                    <motion.div
                                        key={col.stage}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.08 }}
                                        className={`rounded-xl p-3 ${col.color} border border-slate-100`}
                                    >
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs font-semibold text-slate-600">{col.stage}</span>
                                            <span className={`w-5 h-5 rounded-full ${col.accent} flex items-center justify-center text-[10px] font-bold text-white`}>{col.count}</span>
                                        </div>
                                        {Array.from({ length: Math.min(col.count, 3) }).map((_, j) => (
                                            <div key={j} className="h-8 bg-white rounded-lg border border-slate-100 mb-1.5 px-2 flex items-center">
                                                <div className="w-2/3 h-2 rounded bg-slate-200" />
                                            </div>
                                        ))}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {tab === 'Analytics' && (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="mb-3">
                                <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">This Week</span>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                                {analyticsData.map((m, i) => (
                                    <motion.div
                                        key={m.label}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.07 }}
                                        className="bg-slate-50 border border-slate-100 rounded-xl p-3"
                                    >
                                        <div className="text-[11px] text-slate-400 mb-1">{m.label}</div>
                                        <div className={`text-2xl font-bold ${m.color}`}>{m.val}</div>
                                        <div className="text-[11px] text-green-600 font-semibold mt-0.5">{m.delta}</div>
                                    </motion.div>
                                ))}
                            </div>
                            {/* Mini bar chart */}
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                                <div className="text-[11px] text-slate-400 mb-3 font-semibold uppercase tracking-widest">Leads by Day</div>
                                <div className="flex items-end gap-2 h-14">
                                    {[6, 11, 8, 14, 9, 12, 7].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ scaleY: 0 }}
                                            animate={{ scaleY: 1 }}
                                            transition={{ delay: i * 0.05, duration: 0.3 }}
                                            style={{ height: `${(h / 14) * 100}%`, transformOrigin: 'bottom' }}
                                            className="flex-1 rounded-t-md bg-gradient-to-t from-amber-400 to-yellow-300"
                                        />
                                    ))}
                                </div>
                                <div className="flex justify-between mt-1.5">
                                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                        <span key={i} className="flex-1 text-center text-[10px] text-slate-300">{d}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

// ─── FAQ Item ──────────────────────────────────────────────────────────────────
function FaqItem({ faq, index }: { faq: Faq; index: number }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.07 }}
            className="border-b border-slate-100 last:border-0"
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left"
            >
                <span className="font-semibold text-slate-900 text-[15px] pr-6">{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-5 text-slate-500 text-sm leading-relaxed">
                            {faq.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function RealtyGenieCRMPage() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-amber-100 selection:text-amber-900">
            <Navbar />

            <main>
                {/* ── 1. HERO ──────────────────────────────────────────── */}
                <section className="relative pt-28 pb-16 md:pt-40 md:pb-24 px-4 overflow-hidden bg-[#F5F8FF]">
                    <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-amber-400/8 blur-[120px] rounded-full pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none" />

                    <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-amber-200 text-amber-700 text-sm font-semibold mb-8 shadow-sm"
                        >
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                            All-in-One AI Real Estate CRM
                        </motion.div>

                        {/* H1 */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            className="text-[42px] md:text-[64px] lg:text-[76px] font-bold tracking-tight text-[#0F172A] leading-[1.06] mb-5 max-w-5xl"
                        >
                            The CRM that{' '}
                            <span className="text-amber-500 italic">captures,</span>
                            <br className="hidden md:block" />
                            <span className="text-amber-500 italic">nurtures,</span>{' '}
                            and{' '}
                            <span className="text-amber-500 italic">converts</span>
                            <br className="hidden md:block" />
                            leads — automatically.
                        </motion.h1>

                        {/* H2 */}
                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12, duration: 0.6 }}
                            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
                        >
                            RealtyGenie automates lead capture, follow-ups, qualification, appointment booking, pipelines, websites, campaigns, and analytics — in one platform.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.22, duration: 0.55 }}
                            className="flex flex-col sm:flex-row gap-3 items-center mb-14"
                        >
                            <Button
                                onClick={() => window.open('https://cal.com/realtygenie/30min?overlayCalendar=true', '_blank')}
                                size="lg"
                                className="h-12 px-7 text-[15px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all duration-300"
                            >
                                Book a Demo
                            </Button>
                            <Button
                                onClick={() => window.open('https://app.realtygenie.ai', '_blank')}
                                size="lg"
                                variant="outline"
                                className="h-12 px-7 text-[15px] font-semibold rounded-lg border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-white transition-all duration-300 gap-2"
                            >
                                Visit Website
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </motion.div>

                        {/* Interactive Dashboard */}
                        <motion.div
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35, duration: 0.8 }}
                            className="w-full relative"
                        >
                            {/* Floating notifications */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1, duration: 0.5 }}
                                className="absolute -left-[-20px] top-20 z-10 hidden lg:block"
                            >
                                <div className="bg-white rounded-xl border border-slate-200 shadow-lg px-4 py-3 flex items-center gap-3 w-52">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0" />
                                    <div>
                                        <div className="text-[11px] font-bold text-slate-800">New hot lead</div>
                                        <div className="text-[11px] text-slate-400">via Facebook Ads</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.4, duration: 0.5 }}
                                className="absolute -right-[-20px] top-12 z-10 hidden lg:block"
                            >
                                <div className="bg-white rounded-xl border border-green-200 shadow-lg px-4 py-3 flex items-center gap-3 w-52">
                                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                                    <div>
                                        <div className="text-[11px] font-bold text-slate-800">Appointment booked</div>
                                        <div className="text-[11px] text-slate-400">Tomorrow at 2:00 PM</div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.7, duration: 0.5 }}
                                className="absolute -right-[-20px] bottom-16 z-10 hidden lg:block"
                            >
                                <div className="bg-white rounded-xl border border-amber-200 shadow-lg px-4 py-3 flex items-center gap-3 w-52">
                                    <div className="w-4 h-4 rounded-full bg-amber-400 flex items-center justify-center text-[9px] font-bold text-white shrink-0">AI</div>
                                    <div>
                                        <div className="text-[11px] font-bold text-slate-800">AI call completed</div>
                                        <div className="text-[11px] text-slate-400">Lead qualified ✓</div>
                                    </div>
                                </div>
                            </motion.div>

                            <HeroDashboard />
                        </motion.div>
                    </div>
                </section>

                {/* ── 2. WHAT IS REALTYGENIE ────────────────────────────── */}
                <section className="py-24 px-4 bg-white">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                        >
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4 block">The Platform</span>
                            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight mb-5">
                                Built for the full
                                <br />
                                <span className="text-blue-600">real estate lifecycle.</span>
                            </h2>
                            <p className="text-[16px] text-slate-500 leading-relaxed mb-8 max-w-lg">
                                RealtyGenie is built for agents, teams, and brokerages to automate the entire deal lifecycle. It captures leads from websites, landing pages, ads, and social media — then nurtures them through automated email, SMS, and AI calling workflows, while managing pipelines, tasks, appointments, and analytics.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {['Solo Agents', 'Growing Teams', 'Brokerages', 'Investors'].map(tag => (
                                    <span key={tag} className="px-3.5 py-1.5 border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-amber-300 hover:text-amber-700 transition-colors cursor-default">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.55 }}
                            className="grid grid-cols-2 gap-4"
                        >
                            {[
                                { val: '8+',   label: 'Core Modules',           border: 'border-amber-200',  text: 'text-amber-500',  bg: 'bg-amber-50' },
                                { val: '3×',   label: 'Faster Lead Response',   border: 'border-blue-200',   text: 'text-blue-600',   bg: 'bg-blue-50' },
                                { val: '100%', label: 'Automated Workflows',    border: 'border-slate-200',  text: 'text-slate-700',  bg: 'bg-slate-50' },
                                { val: '24/7', label: 'AI Never Stops Working', border: 'border-red-200',    text: 'text-red-500',    bg: 'bg-red-50' },
                            ].map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, scale: 0.93 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08 }}
                                    className={`p-6 rounded-2xl border ${s.border} ${s.bg}`}
                                >
                                    <div className={`text-4xl font-bold ${s.text} mb-2`}>{s.val}</div>
                                    <div className="text-slate-600 text-sm font-medium leading-snug">{s.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* ── 3. FEATURES GRID ─────────────────────────────────── */}
                <section className="py-24 px-4 bg-[#FAFAFA]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-xl mb-14"
                        >
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4 block">Everything Included</span>
                            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight">
                                One platform. Every tool you need.
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
                            {features.map((f, i) => (
                                <motion.div
                                    key={f.title}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04 }}
                                    className="bg-white p-6 hover:bg-amber-50/40 transition-colors group cursor-default"
                                >
                                    <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber-400 mb-3">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <h3 className="font-bold text-[#0F172A] mb-2 text-[15px]">{f.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 4. PRODUCT FLOW ──────────────────────────────────── */}
                <section className="py-24 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14"
                        >
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4 block">How It Works</span>
                            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight max-w-xl">
                                From first touch<br />to closed deal.
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-[260px,1fr] gap-8 lg:gap-16 items-start">
                            {/* Step nav */}
                            <div className="flex flex-col gap-1">
                                {flowSteps.map((step, i) => (
                                    <button
                                        key={step.label}
                                        onClick={() => setActiveStep(i)}
                                        className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-left transition-all duration-200 group ${
                                            activeStep === i ? 'bg-[#0F172A]' : 'hover:bg-slate-50'
                                        }`}
                                    >
                                        <span className={`text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                                            activeStep === i ? 'bg-amber-400 text-amber-950' : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200'
                                        }`}>
                                            {i + 1}
                                        </span>
                                        <span className={`text-sm font-semibold transition-colors ${
                                            activeStep === i ? 'text-white' : 'text-slate-500 group-hover:text-slate-700'
                                        }`}>
                                            {step.label}
                                        </span>
                                    </button>
                                ))}
                            </div>

                            {/* Step content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -12 }}
                                    transition={{ duration: 0.25 }}
                                    className="bg-[#FAFAFA] rounded-2xl border border-slate-100 p-8 md:p-10"
                                >
                                    <div className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-3">
                                        Step {activeStep + 1} — {flowSteps[activeStep].label}
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#0F172A] mb-4">
                                        {flowSteps[activeStep].title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed mb-8 max-w-lg">
                                        {flowSteps[activeStep].desc}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {flowSteps[activeStep].points.map(pt => (
                                            <span key={pt} className="flex items-center gap-2 bg-white border border-slate-200 rounded-lg px-3.5 py-2 text-sm font-medium text-slate-700">
                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                                                {pt}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </section>

                {/* ── 5. PIPELINE ──────────────────────────────────────── */}
                <section className="py-24 px-4 bg-[#FAFAFA]">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-14"
                        >
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4 block">Pipeline Management</span>
                            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A] leading-tight">
                                Every deal. Every stage.
                                <br />
                                <span className="text-blue-600">One view.</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {pipelineStages.map((p, i) => (
                                <motion.div
                                    key={p.tag}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    <div className="h-1 bg-gradient-to-r from-amber-400 to-yellow-300" />
                                    <div className="p-6">
                                        <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-amber-500 mb-3">{p.tag}</div>
                                        <h3 className="text-[16px] font-bold text-[#0F172A] mb-2">{p.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                                        <div className="flex flex-col gap-1.5">
                                            {p.stages.map((s, si) => (
                                                <div key={s} className="flex items-center gap-2.5">
                                                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${si === 0 ? 'bg-amber-400' : si <= 2 ? 'bg-slate-300' : 'bg-slate-200'}`} />
                                                    <span className={`text-xs font-medium ${si === 0 ? 'text-slate-700' : 'text-slate-400'}`}>{s}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── 6. AUTOMATION + ANALYTICS ────────────────────────── */}
                <section className="py-24 px-4 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                            {/* Automation */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55 }}
                            >
                                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4 block">Automation Engine</span>
                                <h2 className="text-3xl md:text-[38px] font-bold text-[#0F172A] leading-tight mb-4">
                                    Every action triggers<br />the next.
                                </h2>
                                <p className="text-slate-500 mb-10 leading-relaxed">No manual handoffs. No missed steps. RealtyGenie connects every touchpoint into a seamless, automatic chain.</p>

                                <div className="flex flex-col gap-3">
                                    {[
                                        { trigger: 'Lead captured',  action: 'Auto response sent'  },
                                        { trigger: 'Lead engages',   action: 'Campaign triggered'  },
                                        { trigger: 'Lead qualifies', action: 'AI call initiated'   },
                                        { trigger: 'Call outcome',   action: 'Appointment booked'  },
                                    ].map((row, i) => (
                                        <motion.div
                                            key={row.trigger}
                                            initial={{ opacity: 0, x: -12 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.08 }}
                                            className="flex items-center gap-3"
                                        >
                                            <div className="flex-1 flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-3 bg-slate-50">
                                                <span className="text-[11px] font-bold text-slate-400 tabular-nums w-4">{i + 1}.</span>
                                                <span className="text-sm font-medium text-slate-700">{row.trigger}</span>
                                            </div>
                                            <ArrowRight className="w-4 h-4 text-amber-400 shrink-0" />
                                            <div className="flex-1 border border-amber-200 rounded-xl px-4 py-3 bg-amber-50">
                                                <span className="text-sm font-semibold text-amber-800">{row.action}</span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Analytics */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.55 }}
                            >
                                <span className="text-xs font-semibold tracking-[0.15em] uppercase text-blue-600 mb-4 block">Advanced Analytics</span>
                                <h2 className="text-3xl md:text-[38px] font-bold text-[#0F172A] leading-tight mb-4">
                                    Full visibility.<br />Every channel.
                                </h2>
                                <p className="text-slate-500 mb-10 leading-relaxed">Track website visits, property views, campaign performance, call outcomes, and appointment bookings. Know exactly where your next deal is coming from.</p>

                                {/* Analytics mockup */}
                                <div className="bg-[#FAFAFA] border border-slate-200 rounded-2xl p-6">
                                    <div className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 mb-4">Performance Overview</div>
                                    <div className="grid grid-cols-2 gap-3 mb-5">
                                        {[
                                            { label: 'Website Visits',  val: '1,240', delta: '+18%', color: 'text-amber-500' },
                                            { label: 'Campaign Opens',  val: '67%',   delta: '+5%',  color: 'text-blue-600' },
                                            { label: 'Call Outcomes',   val: '89',    delta: '+22%', color: 'text-slate-700' },
                                            { label: 'Appts Booked',    val: '34',    delta: '+12%', color: 'text-green-600' },
                                        ].map((m, i) => (
                                            <motion.div
                                                key={m.label}
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.06 }}
                                                className="bg-white rounded-xl border border-slate-100 p-3.5"
                                            >
                                                <div className="text-[11px] text-slate-400 mb-1">{m.label}</div>
                                                <div className={`text-2xl font-bold ${m.color}`}>{m.val}</div>
                                                <div className="text-[11px] text-green-600 font-semibold">{m.delta} this week</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    {/* Bar chart */}
                                    <div className="flex items-end gap-1.5 h-16 px-1">
                                        {[40, 65, 45, 80, 55, 90, 60].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ scaleY: 0 }}
                                                whileInView={{ scaleY: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.06, duration: 0.4 }}
                                                style={{ height: `${h}%`, transformOrigin: 'bottom' }}
                                                className="flex-1 rounded-t bg-gradient-to-t from-blue-500 to-blue-400"
                                            />
                                        ))}
                                    </div>
                                    <div className="flex justify-between mt-1.5 px-1">
                                        {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => (
                                            <span key={i} className="flex-1 text-center text-[10px] text-slate-300">{d}</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* ── 7. FAQ ────────────────────────────────────────────── */}
                <section className="py-24 px-4 bg-[#FAFAFA]">
                    <div className="max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-12"
                        >
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-amber-500 mb-4 block">FAQ</span>
                            <h2 className="text-3xl md:text-[44px] font-bold text-[#0F172A]">Common questions.</h2>
                        </motion.div>
                        <div className="bg-white rounded-2xl border border-slate-200 px-8 divide-y divide-slate-100">
                            {faqs.map((faq, i) => <FaqItem key={faq.q} faq={faq} index={i} />)}
                        </div>
                    </div>
                </section>

                {/* ── 8. BOTTOM CTA ─────────────────────────────────────── */}
                <section className="py-24 px-4 bg-white border-t border-slate-100">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-600 text-sm font-semibold mb-6">
                                Ready to get started?
                            </div>
                            <h2 className="text-3xl md:text-[52px] font-bold text-[#0F172A] leading-tight mb-5">
                                Automate your entire<br />
                                <span className="text-amber-500 italic">pipeline today.</span>
                            </h2>
                            <p className="text-slate-500 text-lg mb-10 max-w-lg mx-auto">
                                Join hundreds of agents and teams already using RealtyGenie to close more deals with less effort.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                                <Button
                                    onClick={() => window.open('https://cal.com/realtygenie/30min?overlayCalendar=true', '_blank')}
                                    size="lg"
                                    className="h-12 px-8 text-[15px] font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all"
                                >
                                    Book a Demo
                                </Button>
                                <Button
                                    onClick={() => window.open('https://app.realtygenie.ai', '_blank')}
                                    size="lg"
                                    variant="outline"
                                    className="h-12 px-8 text-[15px] font-semibold rounded-lg border-slate-200 text-slate-700 hover:border-slate-300 gap-2 transition-all"
                                >
                                    Visit Website
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
