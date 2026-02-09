'use client';

import { motion } from 'framer-motion';
import { Share2, Brain, LayoutDashboard, ArrowRight, CheckCircle2, Layers } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        title: 'Social Media',
        description: 'AI-powered social content that positions you as the local expert—without the endless content creation grind.',
        icon: Share2,
        color: 'rose',
        href: '/services/social-media',
        features: [
            'AI content generation',
            'Automated posting',
            'Engagement analytics',
            'Brand consistency'
        ]
    },
    {
        title: 'Market Intelligence',
        description: 'Real-time market data and AI insights so you always know what\'s happening before your competition.',
        icon: Brain,
        color: 'amber',
        href: '/services/market-intelligence',
        features: [
            'Live market tracking',
            'Price trend alerts',
            'Competitive analysis',
            'Neighborhood insights'
        ]
    },
    {
        title: 'Team Monitoring',
        description: 'See exactly how your team performs—lead response times, conversion rates, and opportunities in one dashboard.',
        icon: LayoutDashboard,
        color: 'violet',
        href: '/services/ai-dashboard',
        features: [
            'Real-time performance',
            'Lead pipeline visibility',
            'Agent activity tracking',
            'Custom reporting'
        ]
    }
];

const colorThemes: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
    rose: {
        bg: 'bg-rose-50',
        text: 'text-rose-600',
        border: 'border-rose-100',
        gradient: 'from-rose-500 to-rose-600'
    },
    amber: {
        bg: 'bg-amber-50',
        text: 'text-amber-600',
        border: 'border-amber-100',
        gradient: 'from-amber-500 to-amber-600'
    },
    violet: {
        bg: 'bg-violet-50',
        text: 'text-violet-600',
        border: 'border-violet-100',
        gradient: 'from-violet-500 to-violet-600'
    }
};

const ServiceCard = ({
    service,
    index
}: {
    service: typeof services[0];
    index: number;
}) => {
    const theme = colorThemes[service.color];
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
        >
            <Link href={service.href}>
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
                        {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground font-medium mb-6 leading-relaxed">
                        {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                        {service.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                                <CheckCircle2 className={`w-4 h-4 ${theme.text} flex-shrink-0`} />
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

export const HowItWorksServices = () => {
    return (
        <section className="py-24 md:py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-bold mb-6">
                        <Layers className="w-4 h-4" />
                        Value-Add Services
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                        Extend Your Capabilities
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        Layer on these services to multiply your reach, sharpen your insights, and keep your team operating at peak performance.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};
