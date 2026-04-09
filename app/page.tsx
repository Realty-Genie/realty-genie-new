'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Process } from '@/components/landing/Process';
import { Footer } from '@/components/landing/Footer';
import { LetsConnect } from '@/components/landing/LetsConnect';
import { OperatingSystemSection, FeatureGridSection, StatsBar } from '@/components/landing/RealtyCRMSections';

/* ─── Micro fade-in — consistent across the page ────────────────── */
const FadeIn = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── Before/After comparison ────────────────────────────────────── */
const beforeItems = [
  'Manually calling leads one by one',
  'Answering the same questions all day',
  'Losing deals to slow follow-ups',
  'Juggling 5 different tools',
  'Zero visibility into what works',
];

const afterItems = [
  'AI calls every lead within minutes',
  'Automated responses, 24/7',
  'Every follow-up handled on schedule',
  'One unified platform',
  'Clear reporting on every action taken',
];

const ComparisonSection = () => (
  <section className="py-24 px-6 bg-white">
    <div className="max-w-5xl mx-auto">
      <FadeIn className="mb-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">The shift</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight leading-tight max-w-lg">
          Most realtors spend 60% of their day on work that doesn't close deals.
        </h2>
      </FadeIn>

      <div className="grid md:grid-cols-2 gap-0 border border-slate-100 rounded-2xl overflow-hidden">
        {/* Before */}
        <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Without RealtyCRM</span>
          </div>
          <ul className="space-y-5">
            {beforeItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i, duration: 0.5 }}
                className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
              >
                <span className="mt-1 w-4 h-px bg-slate-300 flex-shrink-0 mt-2" />
                <span className="line-through decoration-slate-300">{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* After */}
        <div className="p-8 md:p-10 bg-[#F8FAFB]">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">With RealtyCRM</span>
          </div>
          <ul className="space-y-5">
            {afterItems.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: 8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.1, duration: 0.5 }}
                className="flex items-start gap-3 text-[#0F172A] text-sm font-medium leading-relaxed"
              >
                <svg
                  className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ─── Editorial pull-quote ───────────────────────────────────────── */
const EditorialStatement = () => (
  <section className="py-24 px-6 border-y border-slate-100 bg-[#F8FAFB]">
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-10">Our philosophy</p>
        <blockquote className="text-2xl md:text-4xl font-bold text-[#0F172A] leading-[1.35] tracking-tight">
          "Technology should not add complexity.{' '}
          <span className="italic font-serif font-normal text-slate-400">
            It should remove work.
          </span>
          "
        </blockquote>
        <div className="mt-10 flex items-center gap-4">
          <Link href="/how-it-works">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-lg h-9 px-4 text-sm font-medium border-slate-200 text-slate-600 hover:text-[#0F172A] hover:border-slate-300 transition-colors"
            >
              See how it works
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ─── Page ───────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <div className="min-h-screen w-full bg-white text-[#0F172A] overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero — full-width, owns its own max-w */}
        <Hero />

        {/* Stats — immediate credibility signal below hero */}
        <StatsBar />

        {/* How it works — 3-step operating system */}
        <OperatingSystemSection />

        {/* Feature mosaic */}
        <FeatureGridSection />

        {/* The shift — before/after comparison */}
        <ComparisonSection />

        {/* Editorial philosophy statement */}
        <EditorialStatement />

        {/* Process — our delivery methodology */}
        <div className="bg-white py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn className="mb-14">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">How we work</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] tracking-tight">Our Process</h2>
              <p className="text-slate-500 mt-3 max-w-md text-base">
                A systematic approach to transforming your real estate operations with AI.
              </p>
            </FadeIn>
            <Process headless />
          </div>
        </div>

        {/* Contact / CTA */}
        <LetsConnect />
      </main>

      <Footer />
    </div>
  );
}
