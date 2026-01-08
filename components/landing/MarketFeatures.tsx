'use client';

import { motion } from 'framer-motion';
import {
    PieChart,
    FileText,
    MessageSquare,
    Share2,
    Zap,
    ShieldCheck,
    BarChart,
    Clock,
    Target
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
        blue: "bg-blue-50/50 border-blue-100 text-blue-900 icon-bg-blue-600 shadow-blue-500/10",
        slate: "bg-slate-50 border-slate-200 text-slate-900 icon-bg-slate-900 shadow-slate-900/10",
        indigo: "bg-indigo-50/50 border-indigo-100 text-indigo-900 icon-bg-indigo-600 shadow-indigo-500/10",
        emerald: "bg-emerald-50/50 border-emerald-100 text-emerald-900 icon-bg-emerald-600 shadow-emerald-500/10"
    };

    const iconColors: Record<string, string> = {
        blue: "bg-blue-600 shadow-blue-500/30",
        slate: "bg-slate-900 shadow-slate-900/30",
        indigo: "bg-indigo-600 shadow-indigo-500/30",
        emerald: "bg-emerald-600 shadow-emerald-500/30"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={`p-8 rounded-3xl border ${colorThemes[color].split(' ')[0]} ${colorThemes[color].split(' ')[1]} flex flex-col h-full bg-white transition-all duration-300 hover:shadow-xl group ${className}`}
        >
            <div className={`w-12 h-12 ${iconColors[color]} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
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

export const MarketFeatures = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                        Everything you need to <span className="text-blue-600 italic">dominate</span> the market chat.
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                        Precision data, AI-parsed for clarity, and branded for your authority. All delivered monthly.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6">
                    {/* Monthly Market Snapshot */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-5"
                        title="Monthly Market Snapshot"
                        description="Deep-dive metrics for your core area, simplified for human consumption."
                        details={[
                            "Prices & Sales Trends",
                            "Inventory & Days on Market (DOM)",
                            "AI-summarized key local trends"
                        ]}
                        icon={PieChart}
                        color="blue"
                        delay={0.1}
                    />

                    {/* Policy & Rate Impact */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-7"
                        title="Policy & Rate Impact Briefs"
                        description="Plain-English explanations of what global news means for your local buyers."
                        details={[
                            "Interest rate move analysis",
                            "New residential rules & policy updates",
                            "Buyer/Seller psychological impact"
                        ]}
                        icon={ShieldCheck}
                        color="indigo"
                        delay={0.2}
                    />

                    {/* Talking Points */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-4"
                        title="Talking Points & Scripts"
                        description="Pre-written bullets for your next call, video, or open house."
                        details={[
                            "Handling 'Wait and See' objections",
                            "Highlighting market opportunities",
                            "Drop-in snippets for Reels/TikTok"
                        ]}
                        icon={MessageSquare}
                        color="slate"
                        delay={0.3}
                    />

                    {/* Branded Assets */}
                    <FeatureCard
                        className="md:col-span-3 lg:col-span-4"
                        title="Branded, Shareable Assets"
                        description="Professional PDF and slide reports ready for your logo."
                        details={[
                            "Client-ready PDF summaries",
                            "Social media carousel slides",
                            "Newsletter header graphics"
                        ]}
                        icon={FileText}
                        color="emerald"
                        delay={0.4}
                    />

                    {/* Distribution */}
                    <FeatureCard
                        className="md:col-span-6 lg:col-span-4"
                        title="One-Click Distribution"
                        description="Automate the expert builder process. Send to leads with one click."
                        details={[
                            "Sync with your CRM/Email list",
                            "Auto-post highlights to social",
                            "Monthly expert nurture automation"
                        ]}
                        icon={Share2}
                        color="blue"
                        delay={0.5}
                    />
                </div>
            </div>
        </section>
    );
};
