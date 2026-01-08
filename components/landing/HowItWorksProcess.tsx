'use client';

import { motion } from 'framer-motion';
import {
    Search,
    Lightbulb,
    Rocket,
    BarChart,
    CheckCircle2,
    Clock,
    Zap,
    Target,
    ArrowRight
} from 'lucide-react';

import { Button } from '@/components/ui/button';

const ProcessStep = ({
    number,
    title,
    subtitle,
    description,
    items,
    reportItems,
    icon: Icon,
    color,
    delay,
    isFirst = false,
    isLast = false
}: {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    items?: string[];
    reportItems?: string[];
    icon: any;
    color: string;
    delay: number;
    isFirst?: boolean;
    isLast?: boolean;
}) => {
    const colorThemes: Record<string, string> = {
        blue: "text-blue-600 bg-blue-50 border-blue-100 shadow-blue-500/10",
        yellow: "text-yellow-600 bg-yellow-50 border-yellow-100 shadow-yellow-500/10",
        green: "text-green-600 bg-green-50 border-green-100 shadow-green-500/10",
        red: "text-red-600 bg-red-50 border-red-100 shadow-red-500/10",
        indigo: "text-indigo-600 bg-indigo-50 border-indigo-100 shadow-indigo-500/10"
    };

    const dotColors: Record<string, string> = {
        blue: "bg-blue-600",
        yellow: "bg-yellow-500",
        green: "bg-green-500",
        red: "bg-red-500",
        indigo: "bg-indigo-600"
    };

    return (
        <div className="relative flex gap-8 md:gap-16 pb-20 md:pb-32 last:pb-0">
            {/* Timeline Line */}
            {!isLast && (
                <div className="absolute top-10 left-[20px] md:left-[28px] w-px h-full bg-slate-100" />
            )}

            {/* Step Icon */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay, duration: 0.5 }}
                className="relative z-10 flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-slate-100 shadow-xl flex items-center justify-center"
            >
                <Icon className={`w-5 h-5 md:w-7 md:h-7 ${colorThemes[color].split(' ')[0]}`} />
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: delay + 0.1, duration: 0.5 }}
                className="flex-grow pt-1"
            >
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                    <span className={`text-sm font-black uppercase tracking-widest ${colorThemes[color].split(' ')[0]}`}>Step {number}</span>
                    <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0F172A]">{title}</h3>
                </div>
                <p className="text-xl font-bold text-slate-700 mb-2">{subtitle}</p>
                <p className="text-lg text-muted-foreground font-medium mb-8 leading-relaxed max-w-2xl">
                    {description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    {items && (
                        <div className="space-y-4">
                            {items.map((item, i) => (
                                <div key={i} className="flex items-start gap-3 text-slate-600 font-semibold">
                                    <div className={`mt-2 w-1.5 h-1.5 rounded-full ${dotColors[color]} flex-shrink-0`} />
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}

                    {reportItems && (
                        <div className={`p-6 rounded-2xl border ${colorThemes[color].split(' ')[2]} ${colorThemes[color].split(' ')[1]} shadow-lg`}>
                            <p className="text-xs font-black uppercase tracking-wider mb-4 opacity-60">Findings Report Included:</p>
                            <div className="space-y-3">
                                {reportItems.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-800">
                                        <CheckCircle2 className={`w-4 h-4 ${colorThemes[color].split(' ')[0]}`} />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </motion.div>
        </div>
    );
};

export const HowItWorksProcess = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-5xl mx-auto">
                <ProcessStep
                    number="1"
                    title="Assess & Diagnose"
                    subtitle="Discovery & Operational Audit"
                    description="We start by understanding your current reality — using your site analytics, lead logs, call history, and basic financials to build a data-backed picture."
                    items={[
                        "How leads find you today",
                        "Follow-up, call, and hand-off workflows",
                        "Identifying non-revenue time sinks",
                        "Audit of existing CRMs and tools"
                    ]}
                    reportItems={[
                        "Identified Time Sinks",
                        "Missed Lead Logic",
                        "Workflow Bottlenecks",
                        "Quick-Win Opportunities"
                    ]}
                    icon={Search}
                    color="blue"
                    delay={0.1}
                    isFirst
                />

                <ProcessStep
                    number="2"
                    title="Design Your Playbook"
                    subtitle="Custom AI Implementation Map"
                    description="Based on the diagnosis, we pick and shape the right mix of RealtyGenie modules for you. We don't turn everything on by default — we start where impact is highest."
                    items={[
                        "IDX + AI Search Visibility",
                        "AI Lead Management & Nurture",
                        "AI Calling Assistant",
                        "AI Social & Market Intelligence",
                        "Team Performance Dashboard"
                    ]}
                    icon={Lightbulb}
                    color="yellow"
                    delay={0.2}
                />

                <ProcessStep
                    number="3"
                    title="Deploy & Automate"
                    subtitle="Seamless Integration & Disruption-Free Go-Live"
                    description="Our focus: minimum disruption, maximum automation. You keep running your business while we set up the AI workflows and integrate with your existing tools."
                    items={[
                        "Connect with existing toolsets",
                        "Set up AI automated workflows",
                        "Configure alerts, reports, and dashboards",
                        "Verification and team onboarding"
                    ]}
                    icon={Rocket}
                    color="indigo"
                    delay={0.3}
                />

                <ProcessStep
                    number="4"
                    title="Optimize & Grow"
                    subtitle="Data-Backed Optimization (We Stay Involved)"
                    description="After deployment, we track the metrics that matter. You get regular, plain-English reports showing what's improved and where we can push further."
                    items={[
                        "Leads captured, responded, and booked",
                        "Response times & follow-up rates",
                        "Website/Search visibility growth",
                        "Conversion rate tuning"
                    ]}
                    icon={BarChart}
                    color="green"
                    delay={0.4}
                    isLast
                />

                <div className="mt-20 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative bg-[#0F172A] rounded-[2rem] p-12 text-center text-white overflow-hidden shadow-2xl">
                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Ready for your operational audit?
                            </h3>
                            <p className="text-lg text-slate-300 font-medium">
                                Start with Step 1. Let's find exactly where your team is losing time and how AI can give it back.
                            </p>
                            <div className="pt-4">
                                <Button size="lg" className="h-14 px-10 text-lg bg-white text-[#0F172A] hover:bg-white/90 font-bold rounded-xl transition-all duration-300">
                                    Book Your Audit Session <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

