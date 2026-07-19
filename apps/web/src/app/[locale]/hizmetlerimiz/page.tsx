import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ServiceCards from '@/components/services/ServiceCards';
import PageHero from '@/components/ui/PageHero';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('services');
    const eyebrow = locale === 'ar' ? 'خدماتنا' : locale === 'en' ? 'OUR SERVICES' : 'HİZMETLERİMİZ';

    return (
        <div className="min-h-screen bg-white">
            <PageHero eyebrow={eyebrow} title={t('title')} description={t('subtitle')} />
            {/* Services Grid */}
            <ServiceCards />
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'services' });
    return {
        title: `${t('title')} | AFT Power`,
        description: t('subtitle'),
    };
}
