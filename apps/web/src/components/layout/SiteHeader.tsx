'use client';

import { useState, Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { Menu, X, ChevronDown, ChevronRight, Globe, ArrowRight, Battery, Zap, Truck, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

// Product data for mega menu - synced with categoryData from projecttest.com.tr
const productCategories = [
    {
        id: 'portable',
        name: { tr: 'TAŞINABİLİR GÜÇ PAKETLERİ', en: 'PORTABLE POWER PACKS', ar: 'حزم الطاقة المحمولة' },
        icon: Battery,
        products: [
            { slug: 'aftpower-2-7-kwh', name: { tr: '2.7 kWh Çanta Tipi Güç Paketi', en: '2.7 kWh Case Type Power Pack', ar: 'حزمة طاقة حقيبة ٢.٧ كيلوواط ساعة' }, image: '/images/products/2-7kwh-a-1.webp' },
            { slug: 'aftpower-2-7-kwh-bag', name: { tr: '2.7 kWh Güç Paketi', en: '2.7 kWh Power Pack', ar: 'حزمة طاقة ٢.٧ كيلوواط ساعة' }, image: '/images/products/2-7kwh-b-1.webp' },
            { slug: 'aftpower-5-4-kwh', name: { tr: '5.4 kWh Güç Paketi', en: '5.4 kWh Power Pack', ar: 'حزمة طاقة ٥.٤ كيلوواط ساعة' }, image: '/images/products/5-4kwh-h-1.webp' },
        ]
    },
    {
        id: 'cabin',
        name: { tr: 'KABİN TİPİ GÜÇ PAKETLERİ', en: 'CABINET POWER PACKS', ar: 'حزم طاقة الخزانة' },
        icon: Zap,
        products: [
            { slug: 'aftpower-power-cabinet', name: { tr: 'Güç Kabini', en: 'Power Cabinet', ar: 'خزانة الطاقة' }, image: '/images/products/cabin-power.webp' },
            { slug: 'aftpower-power-layer', name: { tr: 'Güç Katmanı', en: 'Power Layer', ar: 'طبقة الطاقة' }, image: '/images/products/stack-21-6kwh-1.webp' },
            { slug: 'aftpower-gridpack', name: { tr: 'GRIDPACK', en: 'GRIDPACK', ar: 'جريد باك' }, image: '/images/products/gridpack.webp' },
        ]
    },
    {
        id: 'charging',
        name: { tr: 'EV ŞARJ ÇÖZÜMLERİ', en: 'EV CHARGING SOLUTIONS', ar: 'حلول شحن السيارات الكهربائية' },
        icon: Zap,
        products: [
            { slug: 'aftpower-grid-core', name: { tr: 'Grid Core', en: 'Grid Core', ar: 'جريد كور' }, image: '/images/products/grid-core.webp' },
            { slug: 'aftpower-grid-pulse', name: { tr: 'Grid Pulse', en: 'Grid Pulse', ar: 'جريد بلس' }, image: '/images/products/grid-pulse.webp' },
            { slug: 'aftpower-grid-pulse-gen2', name: { tr: 'Grid Pulse Gen2', en: 'Grid Pulse Gen2', ar: 'جريد بلس الجيل الثاني' }, image: '/images/products/grid-pulse-gen2.webp' },
        ]
    },
    {
        id: 'ges',
        name: { tr: 'SOLAR ÜRÜNLER', en: 'SOLAR PRODUCTS', ar: 'المنتجات الشمسية' },
        icon: Sun,
        products: [
            { slug: 'aftpower-powerstation-series', name: { tr: 'Powerstation Serisi', en: 'Powerstation Series', ar: 'سلسلة محطات الطاقة' }, image: '/images/products/ges-power-station.webp', imageScale: 'scale-125' },
            { slug: 'aftpower-solarport', name: { tr: 'Solarport', en: 'Solarport', ar: 'سولار بورت' }, image: '/images/products/solarport-duo.webp' },
        ]
    },
    {
        id: 'battery',
        name: { tr: 'BATARYA SİSTEMLERİ', en: 'BATTERY SYSTEMS', ar: 'أنظمة البطاريات' },
        icon: Battery,
        products: [
            { slug: 'aftpower-2-7-kwh-lfp', name: { tr: '2.7 kWh LFP Batarya', en: '2.7 kWh LFP Battery', ar: 'بطارية ليثيوم فوسفات الحديد ٢.٧ كيلوواط ساعة' }, image: '/images/products/2.7-lfp.webp' },
            { slug: 'aftpower-5-4-kwh-lfp', name: { tr: '5.4 kWh LFP Batarya', en: '5.4 kWh LFP Battery', ar: 'بطارية ليثيوم فوسفات الحديد ٥.٤ كيلوواط ساعة' }, image: '/images/products/5.4-lfp.webp' },
        ]
    },
    {
        id: 'vehicle',
        name: { tr: 'ARAÇ TİPİ GÜÇ PAKETLERİ', en: 'VEHICLE POWER PACKS', ar: 'حزم طاقة المركبات' },
        icon: Truck,
        products: [
            { slug: 'aftpower-pickup-power-pack', name: { tr: 'Pick Up Güç Paketi', en: 'Pick Up Power Pack', ar: 'حزمة طاقة بيك آب' }, image: '/images/products/hilux-21-6kwh-1.webp' },
        ]
    },
];

const serviceCategories = [
    {
        id: 'ges-kurulum',
        name: { tr: 'GES Kurulumu', en: 'Solar Plant Installation', ar: 'تركيب محطة الطاقة الشمسية' },
        services: [
            { slug: 'ges-kurulumu', name: { tr: 'Güneş Paneli Kurulumu', en: 'Solar Panel Installation', ar: 'تركيب الألواح الشمسية' }, image: '/images/services/ges-service-new.webp' },
        ]
    },
    {
        id: 'endustriyel',
        name: { tr: 'Endüstriyel Kurulum', en: 'Industrial Installation', ar: 'التركيب الصناعي' },
        services: [
            { slug: 'endustriyel-kurulum', name: { tr: 'Endüstriyel Enerji Çözümleri', en: 'Industrial Energy Solutions', ar: 'حلول الطاقة الصناعية' }, image: '/images/services/industrial-service-new.webp' },
        ]
    },
];

export default function SiteHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
    const [activeProductCategory, setActiveProductCategory] = useState(0);
    const [activeServiceCategory, setActiveServiceCategory] = useState(0);

    // Unified state for mega menu
    const [activeMegaMenu, setActiveMegaMenu] = useState<null | 'products' | 'services'>(null);

    // Mobile menu accordion states
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileActiveCategoryId, setMobileActiveCategoryId] = useState<string | null>(null);

    const locale = useLocale() as 'tr' | 'en' | 'ar';
    const t = useTranslations('header');

    const navigation = [
        { name: t('home'), href: `/${locale}/` },
        { name: t('products'), href: `/${locale}/urunlerimiz/`, hasMegaMenu: 'products' },
        { name: t('services'), href: `/${locale}/hizmetlerimiz/`, hasMegaMenu: 'services' },
        { name: locale === 'ar' ? 'البرمجيات' : locale === 'en' ? 'Software' : 'Yazılım', href: `/${locale}/yazilim/` },
        { name: t('corporate'), href: `/${locale}/kurumsal/` },
        { name: t('contact'), href: `/${locale}/iletisim/` },
    ];

    const languages = [
        { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
        { code: 'en', name: 'English', flag: '🇬🇧' },
        { code: 'ar', name: 'العربية', flag: '🇸🇦' },
    ];

    const currentLang = languages.find(l => l.code === locale) || languages[0];

    // Helper functions for menu interaction
    const handleMouseEnter = (menu: 'products' | 'services') => {
        if ((window as any).megaMenuTimer) clearTimeout((window as any).megaMenuTimer);
        setActiveMegaMenu(menu);
        // Auto-select first category when opening menu
        if (menu === 'products') setActiveProductCategory(0);
        if (menu === 'services') setActiveServiceCategory(0);
    };

    const handleMouseLeave = () => {
        const timer = setTimeout(() => {
            setActiveMegaMenu(null);
        }, 150);
        (window as any).megaMenuTimer = timer;
    };

    const handleMenuContentEnter = () => {
        if ((window as any).megaMenuTimer) clearTimeout((window as any).megaMenuTimer);
    };

    const handleLinkClick = () => {
        setActiveMegaMenu(null);
        setIsMobileMenuOpen(false);
    };

    return (
        <header
            className="sticky top-0 z-[99999] w-full relative"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(14, 165, 233, 0.15)' }}
        >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

            <div className="container px-3 sm:px-4 lg:px-8 flex h-16 sm:h-18 items-center justify-between">
                {/* Logo / Brand */}
                <Link href={`/${locale}/`} className="flex items-center gap-2 group shrink-0" onClick={handleLinkClick}>
                    <div className="w-9 h-9 rounded-md flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>
                        <Zap className="w-5 h-5 text-white" />
                    </div>
                    <div className="hidden sm:flex flex-col leading-none">
                        <span className="font-brand text-slate-900 font-bold tracking-[0.1em] text-xs lg:text-sm whitespace-nowrap group-hover:text-sky-600 transition-colors duration-300">AFT POWER <span className="text-sky-600">&amp; SOFTWARE</span></span>
                        <span className="text-sky-500 text-[9px] tracking-[0.22em] uppercase font-body font-medium">Energy &amp; Software</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 h-full">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="group h-full flex items-center"
                            onMouseEnter={() => {
                                if (item.hasMegaMenu) {
                                    handleMouseEnter(item.hasMegaMenu as 'products' | 'services');
                                } else {
                                    handleMouseLeave();
                                }
                            }}
                            onMouseLeave={handleMouseLeave}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-1 whitespace-nowrap px-3 xl:px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200 relative font-body",
                                    "text-slate-600 hover:text-sky-400",
                                    activeMegaMenu === item.hasMegaMenu && "text-sky-400",
                                    "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-sky-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
                                )}
                                data-header-nav="true"
                                onClick={handleLinkClick}
                            >
                                <span>{item.name}</span>
                                {item.hasMegaMenu && <ChevronDown className={cn(
                                    "h-3.5 w-3.5 text-slate-400 group-hover:text-sky-400 transition-all duration-200",
                                    activeMegaMenu === item.hasMegaMenu && "rotate-180 text-sky-400"
                                )} />}
                            </Link>

                            {/* Mega Menu - Products */}
                            {item.hasMegaMenu === 'products' && activeMegaMenu === 'products' && (
                                <div
                                    className="absolute top-full left-0 w-full z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                                    style={{ background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(14, 165, 233, 0.2)' }}
                                    onMouseEnter={handleMenuContentEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="max-w-7xl mx-auto px-6 py-8">
                                        <div className="flex gap-8">
                                            {/* Sidebar Categories */}
                                            <div className="w-64 shrink-0 border-r border-slate-200 pr-6">
                                                <h3 className="text-[10px] font-semibold text-sky-500 uppercase tracking-[0.2em] mb-4 px-3 font-brand">
                                                    {t('categories')}
                                                </h3>
                                                <div className="flex flex-col gap-0.5">
                                                    {productCategories.map((cat, index) => {
                                                        const isActive = activeProductCategory === index;
                                                        return (
                                                            <button
                                                                key={cat.id}
                                                                onMouseEnter={() => setActiveProductCategory(index)}
                                                                className={cn(
                                                                    "w-full text-left px-3 py-2.5 text-[12px] font-medium transition-all flex items-center justify-between",
                                                                    isActive
                                                                        ? "bg-sky-500/10 text-sky-400 border-l-2 border-sky-500"
                                                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                                                )}
                                                            >
                                                                <span>{cat.name[locale]}</span>
                                                                {isActive && <ChevronRight className="h-3.5 w-3.5 text-sky-500" />}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            {/* Products Grid */}
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.15em] font-brand">
                                                        {productCategories[activeProductCategory].name[locale]}
                                                    </h3>
                                                </div>

                                                <div className="grid grid-cols-4 gap-3">
                                                    {productCategories[activeProductCategory].products.map((product) => (
                                                        <Link
                                                            key={product.slug}
                                                            href={`/${locale}/urunlerimiz/${product.slug}/`}
                                                            className="group/card bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-sky-500/40 p-4 transition-all duration-300 hover:-translate-y-1 block"
                                                            onClick={handleLinkClick}
                                                        >
                                                            <div className="aspect-square relative w-full overflow-hidden mb-3 bg-slate-100 group-hover/card:bg-slate-100 transition-colors">
                                                                <Image
                                                                    src={product.image}
                                                                    alt={typeof product.name === 'string' ? product.name : product.name[locale]}
                                                                    fill
                                                                    className={`object-contain p-3 group-hover/card:scale-105 transition-transform duration-500 ${product.imageScale || ''}`}
                                                                />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <div className="text-[9px] font-bold text-sky-500 uppercase tracking-[0.2em] mb-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 font-brand">
                                                                    AFT Power
                                                                </div>
                                                                <p className="text-[12px] font-semibold text-slate-700 group-hover/card:text-slate-900 transition-colors line-clamp-2 leading-snug font-body">
                                                                    {typeof product.name === 'string' ? product.name : product.name[locale]}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}

                                                    <Link
                                                        href={`/${locale}/urunlerimiz/`}
                                                        className="group/card bg-sky-500/5 hover:bg-sky-500/15 border border-sky-500/20 hover:border-sky-500/60 p-4 transition-all duration-300 hover:-translate-y-1 block"
                                                        onClick={handleLinkClick}
                                                    >
                                                        <div className="aspect-square relative w-full overflow-hidden mb-3 flex items-center justify-center">
                                                            <div className="w-14 h-14 bg-sky-500/20 group-hover/card:bg-sky-500/40 flex items-center justify-center transition-all duration-300">
                                                                <ArrowRight className="w-7 h-7 text-sky-400 group-hover/card:text-sky-300 transition-colors duration-300" />
                                                            </div>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-[12px] font-semibold text-sky-400 group-hover/card:text-sky-300 transition-colors font-body">
                                                                {t('viewAllProducts')}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Services Mega Menu */}
                            {item.hasMegaMenu === 'services' && activeMegaMenu === 'services' && (
                                <div
                                    className="absolute left-0 top-full w-full z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                                    style={{ background: 'rgba(255, 255, 255, 0.98)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(14, 165, 233, 0.2)' }}
                                    onMouseEnter={handleMenuContentEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <div className="max-w-7xl mx-auto px-6 py-8">
                                        <div className="flex gap-8">
                                            <div className="w-64 shrink-0 border-r border-slate-200 pr-6">
                                                <h3 className="text-[10px] font-semibold text-sky-500 uppercase tracking-[0.2em] mb-4 px-3 font-brand">
                                                    {t('categories')}
                                                </h3>
                                                <div className="flex flex-col gap-0.5">
                                                    {serviceCategories.map((cat, index) => {
                                                        const isActive = activeServiceCategory === index;
                                                        return (
                                                            <button
                                                                key={cat.id}
                                                                onMouseEnter={() => setActiveServiceCategory(index)}
                                                                className={cn(
                                                                    "w-full text-left px-3 py-2.5 text-[12px] font-medium transition-all flex items-center justify-between",
                                                                    isActive
                                                                        ? "bg-sky-500/10 text-sky-400 border-l-2 border-sky-500"
                                                                        : "text-slate-500 hover:text-slate-900 hover:bg-slate-100"
                                                                )}
                                                            >
                                                                <span>{cat.name[locale]}</span>
                                                                {isActive && <ChevronRight className="h-3.5 w-3.5 text-sky-500" />}
                                                            </button>
                                                        );
                                                    })}
                                                </div>
                                            </div>

                                            <div className="flex-1">
                                                <div className="flex items-center justify-between mb-6">
                                                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-[0.15em] font-brand">
                                                        {serviceCategories[activeServiceCategory].name[locale]}
                                                    </h3>
                                                </div>

                                                <div className="grid grid-cols-4 gap-3">
                                                    {serviceCategories[activeServiceCategory].services.map((service) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/${locale}/hizmetlerimiz/${service.slug}/`}
                                                            className="group/card bg-slate-50 hover:bg-slate-100 border border-slate-200 hover:border-sky-500/40 p-4 transition-all duration-300 hover:-translate-y-1 block"
                                                            onClick={handleLinkClick}
                                                        >
                                                            <div className="aspect-square relative w-full overflow-hidden mb-3 bg-slate-100 group-hover/card:bg-slate-100 transition-colors">
                                                                <Image
                                                                    src={service.image}
                                                                    alt={service.name[locale]}
                                                                    fill
                                                                    className="object-contain p-3 group-hover/card:scale-105 transition-transform duration-500"
                                                                />
                                                            </div>
                                                            <div className="space-y-1">
                                                                <div className="text-[9px] font-bold text-sky-500 uppercase tracking-[0.2em] mb-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 font-brand">
                                                                    AFT Power
                                                                </div>
                                                                <p className="text-[12px] font-semibold text-slate-700 group-hover/card:text-slate-900 transition-colors line-clamp-2 leading-snug font-body">
                                                                    {service.name[locale]}
                                                                </p>
                                                            </div>
                                                        </Link>
                                                    ))}

                                                    <Link
                                                        href={`/${locale}/hizmetlerimiz/`}
                                                        className="group/card bg-sky-500/5 hover:bg-sky-500/15 border border-sky-500/20 hover:border-sky-500/60 p-4 transition-all duration-300 hover:-translate-y-1 block"
                                                        onClick={handleLinkClick}
                                                    >
                                                        <div className="aspect-square relative w-full overflow-hidden mb-3 flex items-center justify-center">
                                                            <div className="w-14 h-14 bg-sky-500/20 group-hover/card:bg-sky-500/40 flex items-center justify-center transition-all duration-300">
                                                                <ArrowRight className="w-7 h-7 text-sky-400 group-hover/card:text-sky-300 transition-colors duration-300" />
                                                            </div>
                                                        </div>
                                                        <div className="text-center">
                                                            <p className="text-[12px] font-semibold text-sky-400 group-hover/card:text-sky-300 transition-colors font-body">
                                                                {t('viewAllServices')}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* Desktop Actions */}
                <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
                    {/* Language Selector */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center gap-1.5 text-slate-500 hover:text-sky-400 px-3 py-2 transition-all duration-200 border border-slate-200 hover:border-sky-500/40 text-xs font-body"
                            aria-label="Change language"
                            aria-expanded={isLangMenuOpen}
                            aria-haspopup="true"
                        >
                            <Globe className="h-3.5 w-3.5" />
                            <span className="font-medium">{currentLang.flag}</span>
                            <span className="hidden xl:inline">{currentLang.name}</span>
                            <ChevronDown className={cn("h-3 w-3 transition-transform duration-300", isLangMenuOpen && "rotate-180")} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 py-1 z-50" style={{ background: 'rgba(255, 255, 255, 0.98)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                                {languages.map((lang) => (
                                    <Link
                                        key={lang.code}
                                        href={`/${lang.code}/`}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 text-sm hover:bg-sky-500/10 transition-colors font-body",
                                            locale === lang.code ? "text-sky-400" : "text-slate-500 hover:text-slate-900"
                                        )}
                                        onClick={() => setIsLangMenuOpen(false)}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* CTA Button */}
                    <Link
                        href={`/${locale}/fiyat-teklifi/`}
                        className="inline-flex items-center gap-2 whitespace-nowrap px-5 py-2.5 text-sm font-semibold text-white uppercase tracking-wider transition-all duration-300 font-body"
                        style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '6px' }}
                        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(14, 165, 233, 0.5)'; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
                    >
                        {t('getQuote')}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-2">
                    <div className="relative">
                        <button
                            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                            className="flex items-center gap-1 text-slate-500 hover:text-sky-400 px-2.5 py-2 transition-all border border-slate-200 hover:border-sky-500/30"
                            aria-label="Change language"
                        >
                            <Globe className="h-4 w-4" />
                            <span className="text-sm">{currentLang.flag}</span>
                            <ChevronDown className={cn("h-3 w-3 transition-transform", isLangMenuOpen && "rotate-180")} />
                        </button>

                        {isLangMenuOpen && (
                            <div className="absolute right-0 mt-2 w-40 py-1 z-50" style={{ background: 'rgba(255, 255, 255, 0.98)', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
                                {languages.map((lang) => (
                                    <Link
                                        key={lang.code}
                                        href={`/${lang.code}/`}
                                        className={cn(
                                            "flex items-center gap-2 px-3 py-2 text-sm hover:bg-sky-500/10 transition-colors",
                                            locale === lang.code ? "text-sky-400" : "text-slate-500 hover:text-slate-900"
                                        )}
                                        onClick={() => setIsLangMenuOpen(false)}
                                    >
                                        <span>{lang.flag}</span>
                                        <span>{lang.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-600 hover:text-sky-400 h-10 w-10 flex items-center justify-center border border-slate-200 hover:border-sky-500/40 transition-all duration-200"
                        aria-label={isMobileMenuOpen ? t('closeMenu') : t('openMenu')}
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="lg:hidden max-h-[80vh] overflow-y-auto" style={{ background: 'rgba(255, 255, 255, 0.99)', borderTop: '1px solid rgba(14, 165, 233, 0.15)' }}>
                    <nav className="container px-4 py-4 space-y-1">
                        <Link
                            href={`/${locale}/`}
                            className="block px-3 py-3 text-sm font-medium text-slate-600 hover:text-sky-400 hover:bg-slate-100 transition-colors font-body"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('home')}
                        </Link>

                        {/* Ürünler Accordion */}
                        <div className="border-b border-slate-200 pb-2">
                            <button
                                onClick={() => {
                                    setMobileProductsOpen(!mobileProductsOpen);
                                    setMobileServicesOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-600 hover:text-sky-400 hover:bg-slate-100 transition-colors font-body"
                            >
                                <span>{t('products')}</span>
                                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileProductsOpen && "rotate-180 text-sky-400")} />
                            </button>

                            {mobileProductsOpen && (
                                <div className="mt-1 ml-2 space-y-0.5">
                                    {productCategories.map((cat) => (
                                        <div key={cat.id}>
                                            <button
                                                onClick={() => setMobileActiveCategoryId(mobileActiveCategoryId === cat.id ? null : cat.id)}
                                                className={cn(
                                                    "w-full flex items-center justify-between px-3 py-2.5 text-xs font-medium transition-colors font-body",
                                                    mobileActiveCategoryId === cat.id
                                                        ? "bg-sky-500/10 text-sky-400 border-l-2 border-sky-500"
                                                        : "text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                                                )}
                                            >
                                                <span>{cat.name[locale]}</span>
                                                <ChevronRight className={cn("h-3.5 w-3.5 transition-transform", mobileActiveCategoryId === cat.id && "rotate-90")} />
                                            </button>

                                            {mobileActiveCategoryId === cat.id && (
                                                <div className="mt-1 ml-3 space-y-0.5 border-l border-sky-500/30 pl-3">
                                                    {cat.products.map((product) => (
                                                        <Link
                                                            key={product.slug}
                                                            href={`/${locale}/urunlerimiz/${product.slug}/`}
                                                            className="block px-3 py-2 text-xs text-slate-400 hover:text-sky-400 hover:bg-sky-500/5 transition-colors font-body"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {product.name[locale]}
                                                        </Link>
                                                    ))}
                                                    <Link
                                                        href={`/${locale}/urunlerimiz/kategori/${cat.id}/`}
                                                        className="block px-3 py-2 text-xs font-medium text-sky-500 hover:bg-sky-500/10 transition-colors font-body"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {t('viewAll')} →
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                    <Link
                                        href={`/${locale}/urunlerimiz/`}
                                        className="block px-3 py-2.5 text-xs font-bold text-sky-500 hover:bg-sky-500/10 transition-colors font-body"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {t('viewAllProducts')} →
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Hizmetler Accordion */}
                        <div className="border-b border-slate-200 pb-2">
                            <button
                                onClick={() => {
                                    setMobileServicesOpen(!mobileServicesOpen);
                                    setMobileProductsOpen(false);
                                }}
                                className="w-full flex items-center justify-between px-3 py-3 text-sm font-medium text-slate-600 hover:text-sky-400 hover:bg-slate-100 transition-colors font-body"
                            >
                                <span>{t('services')}</span>
                                <ChevronDown className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180 text-sky-400")} />
                            </button>

                            {mobileServicesOpen && (
                                <div className="mt-1 ml-2 space-y-0.5">
                                    {serviceCategories.map((cat) => (
                                        <div key={cat.id}>
                                            {cat.services.map((service) => (
                                                <Link
                                                    key={service.slug}
                                                    href={`/${locale}/hizmetlerimiz/${service.slug}/`}
                                                    className="block px-3 py-2.5 text-xs text-slate-400 hover:text-sky-400 hover:bg-slate-100 transition-colors font-body"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {service.name[locale]}
                                                </Link>
                                            ))}
                                        </div>
                                    ))}
                                    <Link
                                        href={`/${locale}/hizmetlerimiz/`}
                                        className="block px-3 py-2.5 text-xs font-bold text-sky-500 hover:bg-sky-500/10 transition-colors font-body"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {t('viewAllServices')} →
                                    </Link>
                                </div>
                            )}
                        </div>

                        <Link
                            href={`/${locale}/kurumsal/`}
                            className="block px-3 py-3 text-sm font-medium text-slate-600 hover:text-sky-400 hover:bg-slate-100 transition-colors font-body"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('corporate')}
                        </Link>

                        <Link
                            href={`/${locale}/iletisim/`}
                            className="block px-3 py-3 text-sm font-medium text-slate-600 hover:text-sky-400 hover:bg-slate-100 transition-colors font-body"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('contact')}
                        </Link>

                        <Link
                            href={`/${locale}/fiyat-teklifi/`}
                            className="block w-full text-center text-white text-sm font-bold px-4 py-3 mt-4 transition-colors font-body uppercase tracking-wider"
                            style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {t('getQuote')}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
