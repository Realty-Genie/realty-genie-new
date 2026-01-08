'use client';

import { motion } from 'framer-motion';
import {
    PhoneOutgoing,
    PhoneIncoming,
    FileText,
    Calendar,
    BarChart2,
    CheckCircle2
} from 'lucide-react';

export const CallingFeatures = () => {
    const features = [
        {
            title: "Outbound Lead Follow-Up",
            icon: <PhoneOutgoing className="w-8 h-8 text-white" />,
            items: [
                "Instant call attempts when new leads come in",
                "Smart retry logic and voicemail drops",
                "Personalized opening for every lead"
            ]
        },
        {
            title: "Inbound Call Handling",
            icon: <PhoneIncoming className="w-8 h-8 text-white" />,
            items: [
                "Answer FAQs about listings and neighborhood basics",
                "Route hot callers directly to you or your team",
                "24/7 coverage so you never miss a call"
            ]
        },
        {
            title: "Qualification & Scripting",
            icon: <FileText className="w-8 h-8 text-white  " />,
            items: [
                "Custom scripts for buyers, sellers, investors, landlords",
                "Capture motivation, budget, timeline, and key preferences",
                "Natural, human-like voice synthesis"
            ]
        },
        {
            title: "Appointment Booking",
            icon: <Calendar className="w-8 h-8 text-white" />,
            items: [
                "AI books directly into your calendar during the call",
                "Automated confirmation and reminder messages",
                "Syncs with Google Calendar, Outlook, and more"
            ]
        },
        {
            title: "Call Intelligence",
            icon: <BarChart2 className="w-8 h-8 text-white" />,
            items: [
                "Full call recordings & searchable transcripts",
                "AI-generated summaries with key action items",
                "Outcome tags: no answer, follow-up, booked, not interested"
            ]
        }
    ];

    return (
        <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Everything included in <br className="hidden md:block" />
                        your Voice AI engine
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Powerful features designed to automate your workflow and increase conversion rates.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all group flex flex-col"
                        >
                            <div className="bg-blue-600 w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 transition-all duration-300">
                                <span className="group-hover:text-white transition-colors duration-300">
                                    {feature.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-bold text-blue-600 mb-3">
                                {feature.title}
                            </h3>
                            <ul className="space-y-3 flex-grow">
                                {feature.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
