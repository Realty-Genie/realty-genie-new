'use client';

import { motion } from 'framer-motion';
import { LayoutDashboard, Activity, Users, Target, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DashboardHero = () => {
    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[#FAFBFF]" />
            <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-50">
                <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-red-100/40 rounded-full blur-[80px]" />
                <div className="absolute bottom-[20%] right-[30%] w-[400px] h-[400px] bg-yellow-100/40 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] right-[20%] w-[250px] h-[250px] bg-green-100/40 rounded-full blur-[60px]" />
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center">
                {/* Pill Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-bold mb-8 shadow-sm"
                >
                    <LayoutDashboard className="w-4 h-4 text-primary" />
                    AI Team Command & Control
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#0F172A] leading-[1.05] mb-8 max-w-4xl"
                >
                    Know exactly what your team <br className="hidden md:block" />
                    is doing — <span className="text-red-500 italic">in one glance.</span>
                </motion.h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-medium"
                >
                    A single dashboard that shows how your agents are performing: leads worked, conversations, and deals. Coach based on data, not gut feel.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
                >
                    <Button size="lg" className="h-14 px-10 text-lg font-bold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-500/20 transition-all duration-300">
                        Launch Your Dashboard
                    </Button>
                    <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-bold rounded-xl border-slate-200 hover:bg-slate-50 transition-all duration-300">
                        See Demo Data
                    </Button>
                </motion.div>

                {/* Mockup Dashboard Preview (Simplified) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden p-6 md:p-8"
                >
                    <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-6">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full bg-red-400" />
                            <div className="w-3 h-3 rounded-full bg-yellow-400" />
                            <div className="w-3 h-3 rounded-full bg-green-400" />
                        </div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Team Performance Overview</div>
                        <div className="w-10 h-2 bg-slate-100 rounded-full" />
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { label: 'Leads Worked', value: '412', color: 'text-blue-500', icon: Target },
                            { label: 'Avg Contact Rate', value: '68%', color: 'text-green-500', icon: Activity },
                            { label: 'Active Agents', value: '12', color: 'text-yellow-500', icon: Users },
                            { label: 'Deals Pending', value: '28', color: 'text-red-500', icon: Zap },
                        ].map((stat, i) => (
                            <div key={i} className="bg-slate-50/50 p-4 rounded-2xl border border-slate-100 text-left">
                                <stat.icon className={`w-5 h-5 ${stat.color} mb-3`} />
                                <p className="text-2xl font-black text-slate-800 tracking-tight">{stat.value}</p>
                                <p className="text-[10px] font-bold text-slate-400 uppercase">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
