'use client';

import { motion } from 'framer-motion';
import { Globe, Phone, Users, ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';
import Link from 'next/link';

const solutions = [
    {
        title: 'IDX Website & SEO',
        description: 'Get found first on Google and AI search engines with a beautiful, high-converting IDX website built for visibility.',
        icon: Globe,
        color: 'blue',
        href: '/solutions/idx-website',
        features: [
            'AI-optimized property listings',
            'Local SEO domination',
            'Blazing-fast performance',
            'Mobile-first design'
        ]
    },
    {
        title: 'AI Calling Assistant',
        description: 'Never miss a lead again. AI makes instant, personalized calls to every new lead—24/7, no scripts, just conversations.',
        icon: Phone,
        color: 'indigo',
        href: '/solutions/calling-assistant',
        features: [
            'Instant lead response',
            'Natural AI conversations',
            'Automatic follow-ups',
            'Call recording & insights'
        ]
    },
    {
        title: 'AI Lead Management',
        description: 'Automatically qualify, nurture, and hand off leads to your team at exactly the right moment.',
        icon: Users,
        color: 'emerald',
        href: '/solutions/lead-management',
        features: [
            'Smart lead scoring',
            'Automated nurture sequences',
            'CRM integration',
            'Hot lead alerts'
        ]
    }
];

const colorThemes: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    blue: {
        bg: 'bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-100',
        gradient: 'from-blue-500 to-blue-600'
    },
    indigo: {
        bg: 'bg-indigo-50',
        text: 'text-indigo-600',
        border: 'border-indigo-100',
        gradient: 'from-indigo-500 to-indigo-600'
    },
    emerald: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-600',
        border: 'border-emerald-100',
        gradient: 'from-emerald-500 to-emerald-600'
    }
};

const SolutionCard = ({
    solution,
    index
}: {
    solution: typeof solutions[0];
    index: number;
}) => {
    const theme = colorThemes[solution.color];
    const Icon = solution.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Link href={solution.href}>
                <div className={`
                    relative group h-full
                    p-8 rounded-3xl
                    bg-white border ${theme.border}
                    shadow-lg shadow-slate-100/50
                    hover:shadow-2xl hover:shadow-slate-200/50
                    transition-all duration-500
                    cursor-pointer
                    overflow-hidden
                `}>
                    {/* Gradient overlay on hover */}
                    <div className={`
                        absolute inset-0 opacity-0 group-hover:opacity-5
                        bg-gradient-to-br ${theme.gradient}
                        transition-opacity duration-500
                    `} />

                    {/* Icon */}
                    <div className={`
                        w-16 h-16 rounded-2xl ${theme.bg}
                        flex items-center justify-center
                        mb-6 group-hover:scale-110
                        transition-transform duration-300
                    `}>
                        <Icon className={`w-8 h-8 ${theme.text}`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-slate-800 transition-colors">
                        {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
                        {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                        {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                <Sparkles className={`w-4 h-4 ${theme.text} flex-shrink-0`} />
                                <span className="font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={`
                        flex items-center gap-2 ${theme.text} font-bold
                        group-hover:gap-3 transition-all duration-300
                    `}>
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export const HowItWorksSolutions = () => {
    return (
        <section className="py-24 md:py-32 px-4 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6">
                        <Zap className="w-4 h-4" />
                        Core Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                        Powerful AI Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        Three core pillars that transform your real estate business — visibility, engagement, and conversion.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={solution.title} solution={solution} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
