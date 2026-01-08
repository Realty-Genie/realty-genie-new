import { Navbar } from '@/components/landing/Navbar';
import { MarketHero } from '@/components/landing/MarketHero';
import { MarketFeatures } from '@/components/landing/MarketFeatures';
import { MarketResults } from '@/components/landing/MarketResults';
import { Footer } from '@/components/landing/Footer';

export default function MarketIntelligencePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <MarketHero />
                <MarketFeatures />
                <MarketResults />
            </main>
            <Footer />
        </div>
    );
}
