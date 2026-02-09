import { Navbar } from '@/components/landing/Navbar';
import { HowItWorksHero } from '@/components/landing/HowItWorksHero';
import { HowItWorksSolutions } from '@/components/landing/HowItWorksSolutions';
import { HowItWorksServices } from '@/components/landing/HowItWorksServices';
import { HowItWorksProcess } from '@/components/landing/HowItWorksProcess';
import { Footer } from '@/components/landing/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works - RealtyGenie | AI Solutions for Real Estate',
    description: 'Discover how RealtyGenie transforms your real estate business with AI-powered solutions: IDX websites, AI calling assistants, lead management, social media automation, and market intelligence.',
    keywords: [
        'real estate AI',
        'AI calling assistant',
        'IDX website',
        'real estate lead management',
        'real estate automation',
        'AI for realtors',
        'real estate marketing',
        'property management AI',
        'realtor tools',
        'real estate technology'
    ],
    openGraph: {
        title: 'How It Works - RealtyGenie',
        description: 'AI-powered solutions for modern real estate professionals. Learn how RealtyGenie can transform your business.',
        type: 'website',
        locale: 'en_US',
        siteName: 'RealtyGenie',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'How It Works - RealtyGenie',
        description: 'AI-powered solutions for modern real estate professionals.',
    },
    alternates: {
        canonical: '/how-it-works',
    },
};

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <HowItWorksHero />
                <HowItWorksSolutions />
                <HowItWorksServices />
                <HowItWorksProcess />
            </main>
            <Footer />
        </div>
    );
}
