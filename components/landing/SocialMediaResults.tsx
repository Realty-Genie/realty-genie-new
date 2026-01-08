'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ResultItem = ({ title, delay }: { title: string; delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="flex items-center gap-5 p-5 rounded-2xl border border-slate-100 bg-white hover:shadow-md transition-all duration-300 group"
    >
        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
            <Check className="w-5 h-5 text-blue-600" />
        </div>
        <p className="text-lg md:text-xl font-bold text-slate-800 tracking-tight">
            {title}
        </p>
    </motion.div>
);

export const SocialMediaResults = () => {
    return (
        <section className="py-32 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-6">
                        Real <span className="text-blue-600">Results</span>. No Daily Effort.
                    </h2>
                    <p className="text-lg text-muted-foreground font-medium max-w-2xl mx-auto">
                        We build social feeds that support — not sabotage — your premium positioning as a top local realtor.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 mb-20">
                    <ResultItem
                        title="Stronger local brand presence and recognition"
                        delay={0.1}
                    />
                    <ResultItem
                        title="More inbound DMs and warm conversations"
                        delay={0.2}
                    />
                    <ResultItem
                        title="Consistent activity with zero daily effort from you"
                        delay={0.3}
                    />
                    <ResultItem
                        title="Social feeds that reflect your true expertise"
                        delay={0.4}
                    />
                </div>

                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-blue-600 to-yellow-500 rounded-[2.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative bg-[#0F172A] rounded-[2rem] p-12 text-center text-white overflow-hidden shadow-2xl">
                        <div className="relative z-10 space-y-8 max-w-2xl mx-auto">
                            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">
                                Ready to reclaim your social presence?
                            </h3>
                            <p className="text-lg text-slate-300 font-medium">
                                Join elite realtors who dominate the local scroll while focusing 100% on their clients.
                            </p>
                            <div className="pt-4">
                                <Button
                                    onClick={() => window.open("https://cal.com/realtygenie/30min?overlayCalendar=true", "_blank")}
                                    size="lg"
                                    className="h-14 px-10 text-lg bg-white text-[#0F172A] hover:bg-white/90 font-bold rounded-xl transition-all duration-300"
                                >
                                    Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
