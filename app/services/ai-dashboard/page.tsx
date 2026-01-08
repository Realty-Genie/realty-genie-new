import { Navbar } from '@/components/landing/Navbar';
import { DashboardHero } from '@/components/landing/DashboardHero';
import { DashboardFeatures } from '@/components/landing/DashboardFeatures';
import { DashboardResults } from '@/components/landing/DashboardResults';
import { Footer } from '@/components/landing/Footer';

export default function AIDashboardPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <DashboardHero />
                <DashboardFeatures />
                <DashboardResults />
            </main>
            <Footer />
        </div>
    );
}
