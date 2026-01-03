'use client';

import { motion, Variants } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, PlayCircle } from 'lucide-react';

export const Hero = () => {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item: Variants = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 50 } }
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Gradient matching the reference (Soft Blue) */}
            <div className="absolute inset-0 -z-10 bg-[#F5F8FF]" />

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary/10 text-muted-foreground text-sm font-medium mb-8 hover:border-primary/30 transition-colors cursor-pointer shadow-sm"
                >
                    The AI Operating System for Modern Realtors
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1] mb-6 max-w-4xl"
                >
                    Magically simplify <br className="hidden md:block" />
                    your <span className="italic font-serif">Real Estate</span> operations
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    variants={item}
                    initial="hidden"
                    animate="show"
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Automate lead capture. Effortless follow-ups. Financial clarity. <br className="hidden md:block" />
                    Set up in 10 mins. Back to closing by 2 PM.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20"
                >
                    <Button size="lg" className="h-12 px-8 text-base font-semibold rounded-lg bg-primary hover:bg-primary/80 text-white shadow-lg shadow-primary/20 transition-all duration-300">
                        Get started
                    </Button>
                    <Button variant="ghost" className="h-12 px-4 text-base font-medium text-muted-foreground hover:text-foreground gap-2 group">
                        See how it works
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </motion.div>

                {/* Dashboard Mockup - Finta Style (Clean White Card) */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative w-full max-w-6xl mx-auto"
                >
                    <div className="rounded-t-2xl border border-border/50 bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden">
                        {/* Fake Browser Header / App Header */}
                        <div className="h-12 border-b border-border/50 bg-white flex items-center px-4 gap-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-100" />
                                <div className="w-3 h-3 rounded-full bg-yellow-100" />
                                <div className="w-3 h-3 rounded-full bg-green-100" />
                            </div>
                            <div className="h-6 w-32 bg-gray-50 rounded-md" />
                        </div>

                        {/* App Content */}
                        <div className="flex h-[500px] md:h-[600px] bg-[#FAFAFA]">
                            {/* Sidebar */}
                            <div className="w-16 md:w-64 border-r border-border/50 bg-white p-4 hidden md:flex flex-col gap-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-6 h-6 bg-primary rounded-md" />
                                    <span className="font-bold text-sm">RealtyGenie</span>
                                </div>
                                <div className="space-y-1">
                                    {['Dashboard', 'Inbox', 'Properties', 'Clients', 'Reports'].map((item, i) => (
                                        <div key={item} className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-3 ${i === 0 ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:bg-gray-50'}`}>
                                            <div className={`w-4 h-4 rounded ${i === 0 ? 'bg-primary/20' : 'bg-gray-200'}`} />
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Main Area */}
                            <div className="flex-1 p-6 md:p-10 overflow-hidden">
                                <div className="mb-8">
                                    <h3 className="text-xl font-bold mb-6">Dashboard</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                        {[
                                            { label: 'Active Leads', val: '142', change: '+12%', color: 'text-green-600' },
                                            { label: 'Pending Deals', val: '8', change: '2 closing soon', color: 'text-primary' },
                                            { label: 'Commission (YTD)', val: '$124k', change: '+8% vs last yr', color: 'text-green-600' },
                                            { label: 'Tasks', val: '12', change: '4 urgent', color: 'text-orange-500' },
                                        ].map((stat, i) => (
                                            <div key={i} className="bg-white p-4 rounded-xl border border-border/50 shadow-sm">
                                                <p className="text-xs text-muted-foreground font-medium mb-1">{stat.label}</p>
                                                <p className="text-2xl font-bold mb-2">{stat.val}</p>
                                                <div className={`text-xs font-medium ${stat.color} bg-opacity-10 rounded-full inline-block`}>
                                                    {stat.change}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Table Mockup */}
                                <div className="bg-white rounded-xl border border-border/50 shadow-sm h-full p-4 overflow-hidden">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-sm">Recent Inquiries</h4>
                                        <div className="w-8 h-8 rounded-full bg-gray-50" />
                                    </div>
                                    <div className="space-y-3">
                                        {[1, 2, 3, 4, 5].map((row) => (
                                            <div key={row} className="flex items-center justify-between py-3 border-b border-border/30 last:border-0">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full bg-primary/10" />
                                                    <div className="w-32 h-3 bg-gray-100 rounded" />
                                                </div>
                                                <div className="w-24 h-3 bg-gray-50 rounded hidden sm:block" />
                                                <div className="w-16 h-6 rounded-full bg-green-50 text-green-700 text-[10px] flex items-center justify-center font-medium">New Lead</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
