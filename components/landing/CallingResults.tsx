'use client';

import { motion } from 'framer-motion';
import {
    Users,
    Clock,
    CalendarCheck,
    ShieldCheck
} from 'lucide-react';

export const CallingResults = () => {
    const results = [
        {
            title: "Higher Contact Rates",
            description: "Instant outbound calling ensures you reach new leads while they are still in 'buy mode'.",
            icon: <Users className="w-8 h-8 text-white" />,
            bgColor: "bg-emerald-600"
        },
        {
            title: "Time Freedom",
            description: "Stop spending hours dialing and leaving voicemails. Let CallGenie handle the grunt work.",
            icon: <Clock className="w-8 h-8 text-white" />,
            bgColor: "bg-blue-600"
        },
        {
            title: "More Qualified Calls",
            description: "Wake up to a calendar full of pre-vetted conversations with high-intent prospects.",
            icon: <CalendarCheck className="w-8 h-8 text-white" />,
            bgColor: "bg-purple-600"
        },
        {
            title: "Always-On Reliability",
            description: "Peace of mind knowing that every single lead is followed up with, day or night.",
            icon: <ShieldCheck className="w-8 h-8 text-white" />,
            bgColor: "bg-orange-600"
        }
    ];

    return (
        <section className="py-24 px-4 bg-white relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Real Impact for Your Business
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        See how automating your calls can transform your productivity and conversion.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {results.map((result, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${result.bgColor} flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform shadow-lg`}>
                                {result.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">
                                {result.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {result.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
