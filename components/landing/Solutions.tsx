import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Globe, Users, Phone, MessageSquare, BarChart3, Check, Zap, Sparkles } from 'lucide-react';

const solutions = [
    // ... same data as before but structured ...
    {
        id: 1,
        title: "IDX Website + AI Chatbot + Booking",
        subtitle: "Your digital storefront, automated and optimized",
        icon: Globe,
        colors: "from-blue-500/20 to-cyan-500/20",
        accent: "text-blue-600",
        whatReplaces: ["Manual updates", "Missed inquiries", "Static pages", "Disconnected tools"],
        whatYouGet: ["IDX-integrated website", "Local search visibility", "24/7 AI chatbot", "Automated booking", "Lead capture everywhere"],
        outcome: ["Convert traffic into conversations", "Book meetings automatically", "Build a long-term inbound engine"]
    },
    {
        id: 2,
        title: "AI Lead Management & Nurturing",
        subtitle: "Every lead captured. Every lead followed up.",
        icon: Users,
        colors: "from-indigo-500/20 to-violet-500/20",
        accent: "text-indigo-600",
        whatReplaces: ["Manual follow-ups", "Spreadsheets", "Forgotten leads"],
        whatYouGet: ["Unified lead capture", "AI lead scoring", "Automated nurture flows", "Clear pipeline visibility"],
        outcome: ["No missed opportunities", "Faster response times", "Higher inquiry-to-appointment rate"]
    },
    {
        id: 3,
        title: "AI Calling Assistant",
        subtitle: "Your AI assistant that calls, follows up, and books.",
        icon: Phone,
        colors: "from-purple-500/20 to-fuchsia-500/20",
        accent: "text-purple-600",
        whatReplaces: ["Manual calling", "Voicemail tag", "Missed follow-ups"],
        whatYouGet: ["AI-powered callers", "Custom scripts", "Automated callbacks", "Call summaries"],
        outcome: ["Instant voice follow-up", "Higher booking rates", "Less time on the phone"]
    },
    {
        id: 4,
        title: "Social Media Management",
        subtitle: "Stay visible without spending your time online",
        icon: MessageSquare,
        colors: "from-pink-500/20 to-rose-500/20",
        accent: "text-pink-600",
        whatReplaces: ["Daily posting stress", "Inconsistent branding"],
        whatYouGet: ["Scheduled content", "Market updates", "AI-assisted creatives"],
        outcome: ["Strong local brand", "Consistent visibility", "Zero daily effort"]
    },
    {
        id: 5,
        title: "Monthly Market Intelligence",
        subtitle: "Turn complex market data into client trust",
        icon: BarChart3,
        colors: "from-orange-500/20 to-amber-500/20",
        accent: "text-orange-600",
        whatReplaces: ["Manual explanations", "Generic commentary"],
        whatYouGet: ["Monthly market summaries", "Policy & rate insights", "Branded reports"],
        outcome: ["Authority positioning", "Better client conversations"]
    }
];

export const Solutions = () => {
    return (
        <section id="solutions" className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wider mb-4 border border-primary/5"
                    >
                        <Sparkles className="w-3 h-3" />
                        Comprehensive Suite
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
                    >
                        Our AI-Powered Solutions
                    </motion.h2>
                    <p className="text-xl text-muted-foreground">Everything you need to modernize your real estate business in one integrated platform.</p>
                </div>

                <div className="grid gap-12">
                    {solutions.map((item, idx) => (
                        <SolutionCard key={item.id} data={item} index={idx} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SolutionCard = ({ data, index }: { data: any, index: number }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { amount: 0.3 });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const showOutcome = isMobile ? isInView : isHovered;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="group relative bg-white rounded-2xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 overflow-hidden"
        >
            <div className="p-8 md:p-10 flex flex-col h-full">
                {/* Icon & Header */}
                <div className="flex items-start justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center ${data.accent} group-hover:scale-110 transition-transform duration-300`}>
                        <data.icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/50 border border-border px-2 py-1 rounded-md">
                        Solution 0{data.id}
                    </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-[#0F172A]">{data.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">{data.subtitle}</p>

                {/* Content Split */}
                <div className="mt-auto space-y-6 pt-6 border-t border-gray-50">
                    {/* What You Get */}
                    <div className="space-y-3">
                        {data.whatYouGet.slice(0, 3).map((g: string, i: number) => (
                            <div key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
                                <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                                <span>{g}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Outcome Reveal */}
                <div className={`absolute inset-x-0 bottom-0 p-4 bg-blue-50/50 transition-transform duration-300 flex flex-wrap gap-2 justify-center ${showOutcome ? 'translate-y-0' : 'translate-y-full'}`}>
                    {data.outcome.slice(0, 2).map((o: string, i: number) => (
                        <span key={i} className="text-xs font-medium text-blue-700 flex items-center gap-1">
                            <Zap className="w-3 h-3 fill-blue-700" /> {o}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};
