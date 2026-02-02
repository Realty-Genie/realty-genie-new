'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Loader2, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
    name: string;
    countryCode: string;
    phoneNumber: string;
}

const countryCodes = [
    { code: '+1', country: 'US', flag: '🇺🇸', id: '+1-US' },
    { code: '+1', country: 'CA', flag: '🇨🇦', id: '+1-CA' },
    { code: '+44', country: 'UK', flag: '🇬🇧', id: '+44-UK' },
    { code: '+91', country: 'IN', flag: '🇮🇳', id: '+91-IN' },
    { code: '+61', country: 'AU', flag: '🇦🇺', id: '+61-AU' },
    { code: '+971', country: 'UAE', flag: '🇦🇪', id: '+971-UAE' },
    { code: '+65', country: 'SG', flag: '🇸🇬', id: '+65-SG' },
    { code: '+852', country: 'HK', flag: '🇭🇰', id: '+852-HK' },
    { code: '+49', country: 'DE', flag: '🇩🇪', id: '+49-DE' },
    { code: '+33', country: 'FR', flag: '🇫🇷', id: '+33-FR' },
    { code: '+81', country: 'JP', flag: '🇯🇵', id: '+81-JP' },
    { code: '+86', country: 'CN', flag: '🇨🇳', id: '+86-CN' },
    { code: '+55', country: 'BR', flag: '🇧🇷', id: '+55-BR' },
    { code: '+52', country: 'MX', flag: '🇲🇽', id: '+52-MX' },
    { code: '+27', country: 'ZA', flag: '🇿🇦', id: '+27-ZA' },
    { code: '+234', country: 'NG', flag: '🇳🇬', id: '+234-NG' },
];

interface TryCallgenieModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const TryCallgenieModal: React.FC<TryCallgenieModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        countryCode: '+1-CA',
        phoneNumber: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const response = await fetch('https://calling-agent-backend-yo10.onrender.com/schedule-call', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phNo: formData.countryCode.split('-')[0] + formData.phoneNumber,
                    name: formData.name,
                    delayTime: 1,
                    metadata: {}
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to schedule call');
            }

            setIsSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again.');
            console.error('Error scheduling call:', err);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleClose = () => {
        setFormData({ name: '', countryCode: '+1-US', phoneNumber: '' });
        setIsSubmitted(false);
        setError(null);
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4"
                    >
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] p-[1px]">
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-primary/40 to-indigo-500/30 blur-xl opacity-60" />

                            <div className="relative bg-[#0f172a] rounded-2xl p-6 md:p-8">
                                {/* Background decorative elements */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[60px]" />
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/10 rounded-full blur-[40px]" />

                                {/* Close button */}
                                <button
                                    onClick={handleClose}
                                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                                >
                                    <X className="w-5 h-5 text-slate-400" />
                                </button>

                                <div className="relative z-10">
                                    {/* Header */}
                                    <div className="text-center mb-6">
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-medium mb-4">
                                            <Sparkles className="w-3 h-3" />
                                            Try It Free
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            Experience CallGenie
                                        </h3>
                                        <p className="text-slate-400 text-sm">
                                            Enter your details and we'll give you a demo call within a minute!
                                        </p>
                                    </div>

                                    {!isSubmitted ? (
                                        <form onSubmit={handleSubmit} className="space-y-4">
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
                                                    className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                                                />
                                            </div>

                                            {/* Phone Number Field */}
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
                                                        className="pl-11 pr-2 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20 appearance-none cursor-pointer min-w-[110px]"
                                                        style={{
                                                            backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%2394a3b8\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
                                                            backgroundRepeat: 'no-repeat',
                                                            backgroundPosition: 'right 8px center',
                                                            backgroundSize: '16px'
                                                        }}
                                                    >
                                                        {countryCodes.map((country) => (
                                                            <option key={country.id} value={country.id} className="bg-slate-800 text-white">
                                                                {country.flag} {country.code}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    {/* Phone Input */}
                                                    <input
                                                        type="tel"
                                                        name="phoneNumber"
                                                        placeholder="Phone Number"
                                                        value={formData.phoneNumber}
                                                        onChange={handleChange}
                                                        required
                                                        className="flex-1 px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 hover:border-white/20"
                                                    />
                                                </div>
                                            </div>

                                            {/* Error Message */}
                                            {error && (
                                                <motion.p
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    className="text-red-400 text-sm text-center"
                                                >
                                                    {error}
                                                </motion.p>
                                            )}

                                            {/* Submit Button */}
                                            <Button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full h-12 text-base font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                                            >
                                                {isSubmitting ? (
                                                    <span className="flex items-center gap-2">
                                                        <Loader2 className="w-5 h-5 animate-spin" />
                                                        Scheduling Call...
                                                    </span>
                                                ) : (
                                                    <span className="flex items-center gap-2">
                                                        <Phone className="w-4 h-4" />
                                                        Schedule Demo Call
                                                    </span>
                                                )}
                                            </Button>

                                            <p className="text-center text-slate-500 text-xs">
                                                You'll receive a call within 1 minute
                                            </p>
                                        </form>
                                    ) : (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="text-center py-6"
                                        >
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                                className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center"
                                            >
                                                <CheckCircle className="w-8 h-8 text-green-400" />
                                            </motion.div>
                                            <h4 className="text-xl font-semibold text-white mb-2">
                                                Call Scheduled!
                                            </h4>
                                            <p className="text-slate-400 text-sm mb-6">
                                                Sit tight! You'll receive a call from CallGenie in about a minute.
                                            </p>
                                            <Button
                                                onClick={handleClose}
                                                variant="outline"
                                                className="border-white/20 text-white hover:bg-white/10"
                                            >
                                                Close
                                            </Button>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
