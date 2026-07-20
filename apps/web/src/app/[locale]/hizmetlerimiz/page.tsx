import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import ServiceCards from '@/components/services/ServiceCards';
import EditorialPageHero from '@/components/ui/EditorialPageHero';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function ServicesPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('services');
    const label = locale === 'ar' ? 'خدماتنا' : locale === 'en' ? 'OUR SERVICES' : 'HİZMETLERİMİZ';
    const home = locale === 'ar' ? 'الرئيسية' : locale === 'en' ? 'Home' : 'Ana Sayfa';

    return (
        <div className="min-h-screen bg-white">
            <EditorialPageHero
                index="§ 02"
                label={label}
                metaRight="AFT POWER & SOFTWARE"
                title={t('title')}
                description={t('subtitle')}
                breadcrumb={[{ label: home, href: `/${locale}/` }, { label }]}
            />
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
