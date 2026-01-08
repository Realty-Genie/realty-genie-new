import { Navbar } from '@/components/landing/Navbar';
import { SocialMediaHero } from '@/components/landing/SocialMediaHero';
import { SocialMediaFeatures } from '@/components/landing/SocialMediaFeatures';
import { SocialMediaResults } from '@/components/landing/SocialMediaResults';
import { Footer } from '@/components/landing/Footer';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-yellow-400 selection:text-black">
            <Navbar />
            <main>
                <SocialMediaHero />
                <SocialMediaFeatures />
                <SocialMediaResults />
            </main>

            <Footer />
        </div>
    );
}
