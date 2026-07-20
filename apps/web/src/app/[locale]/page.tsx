import { setRequestLocale, getTranslations } from 'next-intl/server';
import Hero from '@/components/home/Hero';
import MissionStatement from '@/components/home/MissionStatement';
import Features from '@/components/home/Features';
import EnergyJourney from '@/components/home/EnergyJourney';
import PortablePower from '@/components/home/PortablePower';
import Services from '@/components/home/Services';
import CustomSolutions from '@/components/home/CustomSolutions';
import SoftwareShowcase from '@/components/home/SoftwareShowcase';
import FinalCTA from '@/components/home/FinalCTA';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <div className="relative">
            {/* Hero Section - Unscaled */}
            <Hero />

            {/* Main Content */}
            <div className="relative">
                {/* Mission Statement */}
                <section className="relative z-10 overflow-hidden">
                    <MissionStatement />
                </section>

                {/* Product Categories - Sticky split scroll storytelling */}
                <section className="relative z-40">
                    <EnergyJourney />
                </section>

                {/* Portable Power Showcase */}
                <section className="relative z-50 overflow-hidden">
                    <PortablePower />
                </section>

                {/* Services */}
                <section className="relative z-60 overflow-hidden">
                    <Services />
                </section>

                {/* AFT Software — Smart energy management platform */}
                <section className="relative z-75 overflow-hidden">
                    <SoftwareShowcase />
                </section>

                {/* Features (Neden AFT Power) */}
                <section className="relative z-20 overflow-hidden">
                    <Features />
                </section>

                {/* Custom Solutions */}
                <section className="relative z-70 overflow-hidden">
                    <CustomSolutions />
                </section>

                {/* Final CTA band */}
                <FinalCTA />
            </div>
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('home.title'),
        description: t('home.description'),
    };
}
