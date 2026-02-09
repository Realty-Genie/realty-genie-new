'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, TrendingUp, Users, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookConsultButton } from './BookConsultButton';

const ResultItem = ({ title, delay, icon: Icon, iconColor }: { title: string; delay: number; icon: any; iconColor: string }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all duration-300 group"
    >
        <div className={`w-12 h-12 rounded-xl ${iconColor.replace('text-', 'bg-').replace('600', '50').replace('500', '50')} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <p className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">
            {title}
        </p>
    </motion.div>
);

export const DashboardResults = () => {
    return (
        <section className="py-32 px-4 bg-[#F8FAFC]">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                        Scale with <span className="text-blue-600">Calculated</span> Confidence.
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        Turn team management from a chore into a competitive advantage. Data-driven growth for elite teams.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-20">
                    <ResultItem
                        title="Manual check-ins reduced by 90% via instant data access"
                        delay={0.1}
                        icon={Clock}
                        iconColor="text-green-600"
                    />
                    <ResultItem
                        title="Focused coaching conversations driven by real agent numbers"
                        delay={0.2}
                        icon={Target}
                        iconColor="text-red-500"
                    />
                    <ResultItem
                        title="24/7 accountability across your entire lead pipeline"
                        delay={0.3}
                        icon={TrendingUp}
                        iconColor="text-blue-600"
                    />
                    <ResultItem
                        title="Spend minutes, not hours, identifying team bottlenecks"
                        delay={0.4}
                        icon={Users}
                        iconColor="text-yellow-500"
                    />
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-[#0F172A] rounded-[2rem] p-12 text-center text-white overflow-hidden shadow-2xl">
                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Ready to lead your team with precision?
                            </h3>
                            <p className="text-lg text-slate-300 font-medium">
                                Get a personalized demo of the AI Dashboard and see how elite teams are winning with RealtyGenie.
                            </p>
                            <div className="pt-4">
                                <BookConsultButton className="h-14 px-10 text-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
