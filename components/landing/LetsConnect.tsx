'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
    name: string;
    email: string;
    countryCode: string;
    phoneNumber: string;
}

const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸' },
    { code: '+1', country: 'CA', flag: '🇨🇦' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+91', country: 'IN', flag: '🇮🇳' },
    { code: '+61', country: 'AU', flag: '🇦🇺' },
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+65', country: 'SG', flag: '🇸🇬' },
    { code: '+852', country: 'HK', flag: '🇭🇰' },
    { code: '+49', country: 'DE', flag: '🇩🇪' },
    { code: '+33', country: 'FR', flag: '🇫🇷' },
    { code: '+81', country: 'JP', flag: '🇯🇵' },
    { code: '+86', country: 'CN', flag: '🇨🇳' },
    { code: '+55', country: 'BR', flag: '🇧🇷' },
    { code: '+52', country: 'MX', flag: '🇲🇽' },
    { code: '+27', country: 'ZA', flag: '🇿🇦' },
    { code: '+234', country: 'NG', flag: '🇳🇬' },
];

export const LetsConnect = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        countryCode: '+1',
        phoneNumber: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Console log the form values
        console.log('=== Let\'s Connect Form Submission ===');
        console.log('Name:', formData.name);
        console.log('Email:', formData.email);
        console.log('Country Code:', formData.countryCode);
        console.log('Phone Number:', formData.phoneNumber);
        console.log('Full Phone:', formData.countryCode + ' ' + formData.phoneNumber);
        console.log('Full Form Data:', formData);
        console.log('=====================================');

        // Simulate a brief delay for UX
        const result = await fetch('https://calling-agent-backend-yo10.onrender.com/schedule-call',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phNo: formData.countryCode + formData.phoneNumber,
                    name: formData.name,
                    delayTime: 5,
                    metadata: {}
                }),
            }

        )
    };

    return (
        <section className="py-24 md:py-32 px-4 md:px-8 max-w-7xl mx-auto relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-1">
                    {/* Decorative gradient border effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-primary/30 to-indigo-500/20 blur-xl opacity-60" />

                    <div className="relative bg-[#0f172a] rounded-[1.85rem] p-8 md:p-16">
                        {/* Background decorative elements */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/3" />

                        <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                            {/* Left Content */}
                            <div className="text-center lg:text-left">
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-300 text-sm font-medium mb-6"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Ready to Reclaim Your Time?
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight"
                                >
                                    Let's Connect & <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                                        Transform Your Business
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                    className="text-slate-400 text-lg leading-relaxed max-w-md mx-auto lg:mx-0 mb-4"
                                >
                                    Join modern realtors who are closing more deals with less effort.
                                </motion.p>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="text-slate-500 text-base leading-relaxed max-w-md mx-auto lg:mx-0"
                                >
                                    Drop your details and we'll reach out to discuss how RealtyGenie can revolutionize your real estate operations.
                                </motion.p>
                            </div>

                            {/* Right Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name Field */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                                        />
                                    </div>

                                    {/* Phone Number Field (Important) */}
                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none z-10">
                                            <Phone className="w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <div className="flex gap-2">
                                            {/* Country Code Dropdown */}
                                            <select
                                                name="countryCode"
                                                value={formData.countryCode}
                                                onChange={handleChange}
                                                className="pl-11 pr-2 py-4 bg-white/5 border border-blue-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-blue-500/40 ring-1 ring-blue-500/20 appearance-none cursor-pointer min-w-[120px]"
                                                style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2394a3b8\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 8px center', backgroundSize: '16px' }}
                                            >
                                                {countryCodes.map((country) => (
                                                    <option key={country.country} value={country.code} className="bg-slate-800 text-white">
                                                        {country.flag} {country.code}
                                                    </option>
                                                ))}
                                            </select>
                                            {/* Phone Input */}
                                            <input
                                                type="tel"
                                                name="phoneNumber"
                                                placeholder="Phone Number *"
                                                value={formData.phoneNumber}
                                                onChange={handleChange}
                                                required
                                                className="flex-1 px-4 py-4 bg-white/5 border border-blue-500/30 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-blue-500/40 ring-1 ring-blue-500/20"
                                            />
                                        </div>
                                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-blue-400 font-medium">Required</span>
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className={`w-full h-14 text-base font-semibold rounded-xl transition-all duration-300 ${isSubmitted
                                            ? 'bg-green-500 hover:bg-green-500 text-white'
                                            : 'bg-blue-600 hover:bg-blue-600/90 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                                            }`}
                                    >
                                        {isSubmitting ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                        ) : isSubmitted ? (
                                            <span className="flex items-center gap-2">
                                                <motion.span
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ type: "spring", stiffness: 200 }}
                                                >
                                                    ✓
                                                </motion.span>
                                                We'll be in touch!
                                            </span>
                                        ) : (
                                            <span className="flex items-center gap-2">
                                                Connect with Us
                                                <Send className="w-4 h-4" />
                                            </span>
                                        )}
                                    </Button>

                                    <p className="text-center text-slate-500 text-sm">
                                        We'll reach out within 24 hours
                                    </p>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
