'use client';

import { motion } from 'framer-motion';
import { Calendar, Sparkles, Home, BarChart3 } from 'lucide-react';

const FeatureCard = ({
    title,
    description,
    details,
    icon: Icon,
    color,
    delay
}: {
    title: string;
    description: string;
    details: string[];
    icon: any;
    color: string;
    delay: number
}) => {
    const colorThemes: Record<string, string> = {
        blue: "bg-blue-50/50 border-blue-100 text-blue-900 icon-bg-blue-600 shadow-blue-500/10",
        yellow: "bg-yellow-50/50 border-yellow-100 text-yellow-900 icon-bg-yellow-500 shadow-yellow-500/10",
        red: "bg-red-50/50 border-red-100 text-red-900 icon-bg-red-500 shadow-red-500/10",
        black: "bg-slate-50 border-slate-200 text-slate-900 icon-bg-slate-900 shadow-slate-900/10"
    };

    const iconColors: Record<string, string> = {
        blue: "bg-blue-600 shadow-blue-500/30",
        yellow: "bg-yellow-500 shadow-yellow-500/30",
        red: "bg-red-500 shadow-red-500/30",
        black: "bg-slate-900 shadow-slate-900/30"
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={`p-8 rounded-3xl border ${colorThemes[color].split(' ')[0]} ${colorThemes[color].split(' ')[1]} flex flex-col h-full bg-white transition-all duration-300 hover:shadow-xl group`}
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

export const SocialMediaFeatures = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#0F172A] mb-6">
                        Everything you need to <span className="text-blue-600">show up</span> everywhere.
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium leading-relaxed">
                        A complete "Done-For-You" engine designed to keep you top-of-mind without lifting a finger.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
                    <FeatureCard
                        title="Content Strategy & Calendar"
                        description="Professional planning that reflects your local expertise."
                        details={[
                            "Monthly themes around listings & neighborhoods",
                            "Real estate tips and market updates",
                            "Balanced mix of posts, carousels, and stories"
                        ]}
                        icon={Calendar}
                        color="blue"
                        delay={0.1}
                    />
                    <FeatureCard
                        title="AI-Assisted Content Creation"
                        description="Captions and visuals tuned for maximum engagement."
                        details={[
                            "Captions tuned for engagement and clarity",
                            "Visuals and templates aligned with your brand",
                            "AI-powered SEO for social search visibility"
                        ]}
                        icon={Sparkles}
                        color="yellow"
                        delay={0.2}
                    />
                    <FeatureCard
                        title="Listing & Brand Posts"
                        description="Showcase your wins and professional daily life."
                        details={[
                            "Just-listed, just-sold, and open house alerts",
                            "Client testimonials and success highlights",
                            "“Day in the life” expert builder content"
                        ]}
                        icon={Home}
                        color="red"
                        delay={0.3}
                    />
                    <FeatureCard
                        title="Performance Tracking"
                        description="Data insights that show your brand's growth."
                        details={[
                            "Analytics: reach, engagement, profile visits",
                            "Monthly summary of what's working best",
                            "Track link clicks and warm lead inbound"
                        ]}
                        icon={BarChart3}
                        color="black"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};
