'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Zap,
    BarChart3,
    Bell,
    TrendingUp,
    AlertCircle,
    MessageSquare,
    PieChart,
    Timer
} from 'lucide-react';

const FeatureCard = ({
    title,
    description,
    details,
    icon: Icon,
    color,
    delay,
    className = ""
}: {
    title: string;
    description: string;
    details: string[];
    icon: any;
    color: string;
    delay: number;
    className?: string;
}) => {
    const colorThemes: Record<string, string> = {
        red: "border-red-100 text-red-900 icon-bg-red-500 shadow-red-500/10",
        yellow: " border-yellow-100 text-yellow-900 icon-bg-yellow-500 shadow-yellow-500/10",
        green: " border-green-100 text-green-900 icon-bg-green-500 shadow-green-500/10",
        blue: " border-blue-100 text-blue-900 icon-bg-blue-600 shadow-blue-500/10",
        indigo: " border-indigo-100 text-indigo-900 icon-bg-indigo-600 shadow-indigo-500/10"
    };

    const iconColors: Record<string, string> = {
        red: "bg-red-500 shadow-red-500/30",
        yellow: "bg-yellow-500 shadow-yellow-500/30",
        green: "bg-green-500 shadow-green-500/30",
        blue: "bg-blue-600 shadow-blue-500/30",
        indigo: "bg-indigo-600 shadow-indigo-500/30"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={`p-8 rounded-3xl border ${colorThemes[color].split(' ')[0]} ${colorThemes[color].split(' ')[1]} flex flex-col h-full bg-white transition-all duration-300 hover:shadow-xl group ${className}`}
        >
            <div className={`w-12 h-12 ${iconColors[color].split(' ')[0]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className={`text-2xl font-bold mb-3 tracking-tight ${colorThemes[color].split(' ')[2]}`}>{title}</h3>
            <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
                {description}
            </p>
            <div className="space-y-3 mt-auto">
                {details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm font-semibold text-slate-600">
                        <div className={`mt-2 w-1.5 h-1.5 rounded-full ${iconColors[color].split(' ')[0]} flex-shrink-0`} />
                        {detail}
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export const DashboardFeatures = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                        The ultimate <span className="text-blue-600">Accountability</span> engine.
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                        Precision tracking that turns your team into a high-performance machine. Data, not guesswork.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
                    {/* Team & Agent KPIs */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-4"
                        title="Team & Agent KPIs"
                        description="Granular performance metrics for every member of your roster."
                        details={[
                            "Leads assigned and worked per agent",
                            "Contact rates & response times",
                            "Contracts written & deals closed"
                        ]}
                        icon={BarChart3}
                        color="blue"
                        delay={0.1}
                    />

                    {/* Leader Views */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-4"
                        title="Leader Views & Forecasts"
                        description="Strategic overviews that help you predict the quarter ahead."
                        details={[
                            "Team-wide pipeline & revenue forecast",
                            "Leaderboards (Week/Month/Quarter)",
                            "Agent conversion rate benchmarks"
                        ]}
                        icon={TrendingUp}
                        color="green"
                        delay={0.2}
                    />

                    {/* Accountability Alerts */}
                    <FeatureCard
                        className="md:col-span-6 lg:col-span-4"
                        title="Accountability Alerts"
                        description="Instant detection of leads that are falling through the cracks."
                        details={[
                            "At-risk opportunities (stuck leads)",
                            "Zero-activity notifications",
                            "Low follow-up count warnings"
                        ]}
                        icon={AlertCircle}
                        color="yellow"
                        delay={0.3}
                    />

                    {/* Automated Reporting */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-8"
                        title="Automated Reporting"
                        description="Daily and weekly summaries sent directly to where you work."
                        details={[
                            "Email & WhatsApp performance digests",
                            "AI-generated coaching insights for agents",
                            "Detailed weekly trend analysis reports"
                        ]}
                        icon={Bell}
                        color="indigo"
                        delay={0.4}
                    />

                    {/* coaching insights */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-4"
                        title="AI Coaching"
                        description="Automated identifies who needs help and in what area."
                        details={[
                            "Spotting specific process bottlenecks",
                            "Script performance suggestions",
                            "Focused coaching conversation drivers"
                        ]}
                        icon={Zap}
                        color="red"
                        delay={0.5}
                    />
                </div>
            </div>
        </section>
    );
};
