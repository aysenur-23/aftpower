import { setRequestLocale, getTranslations } from 'next-intl/server';
import EditorialHero from '@/components/home/EditorialHero';
import WhatWeDo from '@/components/home/WhatWeDo';
import Features from '@/components/home/Features';
import EnergyJourney from '@/components/home/EnergyJourney';
import SoftwareShowcase from '@/components/home/SoftwareShowcase';
import FinalCTA from '@/components/home/FinalCTA';
import Ticker from '@/components/ui/Ticker';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    const tickerItems = locale === 'ar'
        ? ['تخزين الطاقة', 'أنظمة ERP', 'برمجيات مخصصة', 'المراقبة', 'LiFePO₄', 'الطاقة الشمسية', 'شحن المركبات']
        : locale === 'en'
            ? ['Energy Storage', 'ERP Systems', 'Bespoke Software', 'Monitoring', 'LiFePO₄', 'Solar', 'EV Charging']
            : ['Enerji Depolama', 'ERP Sistemleri', 'Firmaya Özel Yazılım', 'İzleme & Analitik', 'LiFePO₄', 'Solar', 'Şarj İstasyonları'];

    return (
        <div className="relative">
            {/* Editorial hero — asymmetric, oversized type */}
            <EditorialHero />

            {/* Keyword ticker (signature) */}
            <Ticker items={tickerItems} tone="dark" className="hairline-b" />

            {/* §01 — What we do (bento) */}
            <WhatWeDo />

            {/* §02 — Product categories (sticky split) */}
            <div className="hairline">
                <EnergyJourney />
            </div>

            {/* §03 — AFT Software */}
            <div className="hairline">
                <SoftwareShowcase />
            </div>

            {/* §04 — Why AFT Power & Software */}
            <div className="hairline">
                <Features />
            </div>

            {/* Final CTA */}
            <div className="hairline">
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
