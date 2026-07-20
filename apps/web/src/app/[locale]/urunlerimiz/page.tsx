import { setRequestLocale } from 'next-intl/server';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Battery, Truck, Zap, Server, Sun } from 'lucide-react';
import EditorialPageHero from '@/components/ui/EditorialPageHero';

interface Props {
    params: Promise<{ locale: string }>;
}

const allProducts = [
    // Portable Power
    { id: 'aftpower-2-7-kwh', name: '2.7 kWh Çanta Tipi Güç Paketi', image: '/images/products/2-7kwh-a-1.webp', category: 'portablePower', descriptionKey: 'aftpower-2-7-kwh.description' },
    { id: 'aftpower-2-7-kwh-bag', name: '2.7 kWh Güç Paketi', image: '/images/products/2-7kwh-b-1.webp', category: 'portablePower', descriptionKey: 'aftpower-2-7-kwh-bag.description' },
    { id: 'aftpower-5-4-kwh', name: '5.4 kWh Güç Paketi', image: '/images/products/5-4kwh-h-1.webp', category: 'portablePower', descriptionKey: 'aftpower-5-4-kwh.description' },

    // Vehicle Power
    { id: 'aftpower-pickup-power-pack', name: 'Pick Up Güç Paketi', image: '/images/products/hilux-21-6kwh-1.webp', category: 'vehiclePower', descriptionKey: 'aftpower-pickup-power-pack.description' },

    // Charging Stations
    { id: 'aftpower-grid-core', name: 'Grid Core', image: '/images/products/grid-core.webp', category: 'charging', descriptionKey: 'aftpower-grid-core.description' },
    { id: 'aftpower-grid-pulse', name: 'Grid Pulse', image: '/images/products/grid-pulse.webp', category: 'charging', descriptionKey: 'aftpower-grid-pulse.description' },
    { id: 'aftpower-grid-pulse-gen2', name: 'Grid Pulse Gen2', image: '/images/products/grid-pulse-gen2.webp', category: 'charging', descriptionKey: 'aftpower-grid-pulse-gen2.description' },

    // Cabin Power
    { id: 'aftpower-power-cabinet', name: 'Güç Kabini', image: '/images/products/cabin-power.webp', category: 'cabinPower', descriptionKey: 'aftpower-power-cabinet.description' },
    { id: 'aftpower-power-layer', name: 'Güç Katmanı', image: '/images/products/stack-21-6kwh-1.webp', category: 'cabinPower', descriptionKey: 'aftpower-power-layer.description' },
    { id: 'aftpower-gridpack', name: 'GRIDPACK', image: '/images/products/gridpack.webp', category: 'cabinPower', descriptionKey: 'aftpower-gridpack.description' },

    // Battery Systems
    { id: 'aftpower-2-7-kwh-lfp', name: '2.7 kWh LFP Batarya', image: '/images/products/2.7-lfp.webp', category: 'batteryPower', descriptionKey: 'aftpower-2-7-kwh-lfp.description' },
    { id: 'aftpower-5-4-kwh-lfp', name: '5.4 kWh LFP Batarya', image: '/images/products/5.4-lfp.webp', category: 'batteryPower', descriptionKey: 'aftpower-5-4-kwh-lfp.description' },

    // Solar Products
    { id: 'aftpower-powerstation-series', name: 'Powerstation Serisi', image: '/images/products/ges-power-station.webp', category: 'gesProducts', descriptionKey: 'aftpower-powerstation-series.description' },
    { id: 'aftpower-solarport', name: 'Solarport', image: '/images/products/solarport-duo.webp', category: 'gesProducts', descriptionKey: 'aftpower-solarport.description' },
];

const categories = [
    { id: 'portablePower', icon: Battery },
    { id: 'cabinPower', icon: Server },
    { id: 'charging', icon: Zap },
    { id: 'gesProducts', icon: Sun },
    { id: 'batteryPower', icon: Battery },
    { id: 'vehiclePower', icon: Truck },
];

export default async function ProductsPage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const t = await getTranslations('products');
    const tDetails = await getTranslations('productDetails.products');

    const heroContent = {
        tr: {
            titleLine1: 'Yeni Nesil',
            titleLine2: 'Enerjinin Geleceğine',
            titleHighlight: 'Yön Ver',
            description: "AFT Power'un gelişmiş enerji depolama çözümleri ile tanışın. Sürdürülebilir ve akıllı sistemlerle kesintisiz güç.",
        },
        en: {
            titleLine1: 'Next Generation',
            titleLine2: 'Shape the Future of',
            titleHighlight: 'Energy',
            description: "Meet AFT Power's advanced energy storage solutions. Uninterrupted power with sustainable and smart systems.",
        },
        ar: {
            titleLine1: 'الجيل القادم',
            titleLine2: 'شكّل مستقبل',
            titleHighlight: 'الطاقة',
            description: 'تعرف على حلول تخزين الطاقة المتقدمة من AFT Power. طاقة متواصلة مع أنظمة مستدامة وذكية.',
        }
    };

    const hero = heroContent[locale as keyof typeof heroContent] || heroContent.en;

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Hero — editorial */}
            <div className="bg-white">
                <EditorialPageHero
                    index="§ 01"
                    label={t('allProductsTitle')}
                    metaRight="AFT POWER & SOFTWARE"
                    title={hero.titleLine2}
                    highlight={hero.titleHighlight}
                    description={hero.description}
                    breadcrumb={[{ label: locale === 'ar' ? 'الرئيسية' : locale === 'en' ? 'Home' : 'Ana Sayfa', href: `/${locale}/` }, { label: hero.titleLine2 }]}
                />
            </div>

            {/* Categories & Products */}
            {categories.map((cat) => {
                const catProducts = allProducts.filter(p => p.category === cat.id);
                if (catProducts.length === 0) return null;
                const Icon = cat.icon;

                return (
                    <section key={cat.id} id={cat.id} className="py-16 border-b border-slate-200 last:border-0">
                        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                            {/* Category Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-sky-500/10 rounded-xl text-sky-500">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                                        {t(`${cat.id}.title`)}
                                    </h2>
                                    <p className="text-slate-500 mt-1">
                                        {t(`${cat.id}.description`)}
                                    </p>
                                </div>
                            </div>

                            {/* Products Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {catProducts.map((product) => (
                                    <Link
                                        key={product.id}
                                        href={`/${locale}/urunlerimiz/${product.id}/`}
                                        className="group bg-white rounded-[2rem] p-6 hover:shadow-xl transition-all duration-300 border border-slate-100 hover:-translate-y-2 flex flex-col"
                                    >
                                        <div className="aspect-[4/3] relative rounded-2xl bg-slate-50 mb-6 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 to-white opacity-50" />
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                fill
                                                className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 ease-out"
                                            />
                                            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                                                <div className="bg-white/90 backdrop-blur text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm text-slate-800">
                                                    {t('viewDetails')}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-auto">
                                            <div className="flex items-center gap-2 text-xs font-bold text-sky-500 uppercase tracking-widest mb-2">
                                                <Icon className="w-3 h-3" />
                                                <span>{t(`${product.category}.title`)}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-500 transition-colors">
                                                {tDetails(`${product.id}.name`) || product.name}
                                            </h3>
                                            <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6">
                                                {tDetails(`${product.id}.description`)}
                                            </p>

                                            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-sky-500 transition-colors">
                                                {t('viewDetails')} <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            {/* Bottom CTA */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.3]" />
                <div className="container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        {t('cta.title')}
                    </h2>
                    <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href={`/${locale}/iletisim/`}
                            className="px-10 py-5 bg-sky-500 text-white rounded-xl font-bold hover:bg-sky-600 transition-all flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl"
                        >
                            {t('cta.contactUs')}
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'products' });
    return {
        title: `${t('allProductsTitle')} | AFT Power`,
        description: t('allProductsSubtitle'),
    };
}
