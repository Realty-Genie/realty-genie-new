'use client';

import { motion } from 'framer-motion';
import {
    Inbox,
    BarChart3,
    MessageSquare,
    Bell,
    CheckCircle2,
    Users,
    Zap,
    Repeat
} from 'lucide-react';

export const LeadFeatures = () => {
    const features = [
        {
            title: "Unified Lead Inbox",
            icon: <Inbox className="w-8 h-8 text-white" />,
            items: [
                "Capture from website, portals, social, and landing pages",
                "Instant imports from CSV or direct integrations",
                "Source tagging to see exactly what's working"
            ]
        },
        {
            title: "AI Lead Scoring & Segmentation",
            icon: <BarChart3 className="w-8 h-8 text-white" />,
            items: [
                "Score by behavior, responsiveness, and intent",
                "Smart segments (New, Active, Past Clients, Investors)",
                "Identify high-intent prospects automatically"
            ]
        },
        {
            title: "Automated Nurture Flows",
            icon: <MessageSquare className="w-8 h-8 text-white" />,
            items: [
                "Multichannel sequences (Email, SMS, WhatsApp)",
                "Tailored flows for Buyers, Sellers, and Landlords",
                "Drip campaigns for cold and long-term leads"
            ]
        },
        {
            title: "Smart Reminders & Tasks",
            icon: <Bell className="w-8 h-8 text-white" />,
            items: [
                "Auto-reminders when a hot lead engages",
                "Automated 'Follow-up to-do' list generated daily",
                "Re-engagement for old or expired leads"
            ]
        }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        What's Included
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Powerful automation tools to manage your pipeline without the manual effort.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group flex flex-col md:flex-row gap-8"
                        >
                            <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                                {feature.icon}
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-blue-600 mb-4">
                                    {feature.title}
                                </h3>
                                <ul className="space-y-3">
                                    {feature.items.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-600 text-sm">
                                            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
