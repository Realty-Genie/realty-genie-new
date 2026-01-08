'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Solutions } from '@/components/landing/Solutions';
import { AnimatedBackground } from '@/components/landing/AnimatedBackground';
import { Process } from '@/components/landing/Process';
import { Footer } from '@/components/landing/Footer';

const Section = ({
  children,
  className = '',
  id = ''
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={`py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10 ${className}`}>
    {children}
  </section>
);

const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

const solutionsPreview = [
  { title: "IDX Website + AI Chatbot", desc: "Automate your digital storefront." },
  { title: "AI Lead Management", desc: "Nurture every lead automatically." },
  { title: "AI Calling Assistant", desc: "Instant voice follow-ups & booking." },
  { title: "Social Media Auto-Pilot", desc: "Consistent brand visibility." },
  { title: "Market Intelligence", desc: "Turn data into client trust." }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen mx-auto w-full bg-white text-[#0F172A] overflow-x-hidden font-sans">
      <Navbar />

      <main className='max-w-7xl mx-auto'>
        <Hero />
        <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-50/50 blur-[120px]" />
          <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-50/40 blur-[100px]" />
          <div className="absolute bottom-[-10%] left-[10%] w-[35%] h-[35%] rounded-full bg-slate-50/60 blur-[150px]" />
        </div>


        <Process />
        {/* --- Why RealtyGenie Exists --- */}
        <Section className="bg-white">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
            <FadeIn>
              <div className="rounded-3xl bg-red-50 p-8 md:p-12 border border-red-100">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                    <X className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-red-900 uppercase tracking-wide text-sm">The Old Way</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-red-950">Most realtors spend 60–70% of their time on low-value tasks.</h3>
                <ul className="space-y-4">
                  {[
                    "Following up with leads manually",
                    "Answering the same questions",
                    "Managing messy CRM pipelines",
                    "Struggling with social media"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-red-900/70">
                      <X className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-3xl bg-primary/5 p-8 md:p-12 border border-primary/10 h-full">
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-primary uppercase tracking-wide text-sm">The RealtyGenie Way</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 text-primary">Automate operations so you can focus on revenue.</h3>
                <ul className="space-y-4">
                  {[
                    "Building Relationships",
                    "Negotiating Deals",
                    "Closing Sales",
                    "Expanding your Network"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-primary/70 font-medium">
                      <div className="rounded-full bg-primary/20 p-0.5 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Section>



        {/* --- Philosophy / How It Works Teaser --- */}
        <Section className="text-center py-32">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-10 leading-tight">
              "Technology should not add complexity.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">It should remove work.</span>"
            </h2>
            <div className="flex justify-center gap-4">
              <Link href="/how-it-works">
                <Button size="lg" variant="secondary" className="gap-2">
                  See How It Works <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </Section>

        {/* --- Final CTA --- */}
        <Section className="pb-32">
          <FadeIn>
            <div className="bg-[#0f172a] rounded-[2rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to reclaim your time?</h2>
                <p className="text-lg md:text-xl text-slate-300">
                  Join modern realtors who are closing more deals with less effort.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="h-14 px-10 text-base bg-white text-[#0f172a] hover:bg-white/90 font-semibold border-0">
                    Book a Demo
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
