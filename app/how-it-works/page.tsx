import { Navbar } from '@/components/landing/Navbar';
import { HowItWorksHero } from '@/components/landing/HowItWorksHero';
import { HowItWorksProcess } from '@/components/landing/HowItWorksProcess';
import { Footer } from '@/components/landing/Footer';

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <HowItWorksHero />
                <HowItWorksProcess />
            </main>
            <Footer />
        </div>
    );
}
