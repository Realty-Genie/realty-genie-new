'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        solutions: [
            { name: 'IDX Website & SEO', href: '/solutions/idx-website' },
            { name: 'AI Calling Assistant', href: '/solutions/calling-assistant' },
            { name: 'AI Lead Management', href: '/solutions/lead-management' },
        ],
        services: [
            { name: 'Social Media', href: '/services/social-media' },
            { name: 'Market Intelligence', href: '/services/market-intelligence' },
            { name: 'AI Dashboard', href: '/services/ai-dashboard' },
        ],
        company: [
            { name: 'About Us', href: '/about' },
            { name: 'How It Works', href: '/how-it-works' }
        ],
    };

    return (
        <footer className="bg-white border-t border-slate-100 pt-20 pb-10 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="inline-block mb-6 group">
                            <div className="flex items-center gap-3">
                                <img src="/logo.png" alt="RealtyGenie" className="h-10 w-auto group-hover:scale-105 transition-transform" />
                                <span className="text-2xl font-bold tracking-tight text-slate-900 font-outfit">RealtyGenie</span>
                            </div>
                        </Link>
                        <p className="text-slate-500 mb-8 max-w-sm leading-relaxed font-medium">
                            The all-in-one AI operating system for modern real estate professionals. Automate your leads, calls, and social visibility.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="https://www.linkedin.com/company/realtygenie"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-sm"
                            >
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Solutions</h4>
                        <ul className="space-y-4">
                            {footerLinks.solutions.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Services</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-xs">Contact</h4>
                            <ul className="space-y-4">
                                <li>
                                    <Phone className="w-5 h-5 inline-block pr-2" />
                                    <span className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                        + (778) 792 2220
                                    </span>
                                </li>
                                <li>
                                    <Mail className="w-5 h-5 inline-block pr-2" />
                                    <span className="text-slate-500 hover:text-blue-600 font-medium transition-colors">
                                        info@realtygenie.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-sm text-slate-400 font-medium italic uppercase tracking-wider">
                        © {currentYear} RealtyGenie — Built for the future of real estate.
                    </p>
                </div>
            </div>
        </footer>
    );
};
