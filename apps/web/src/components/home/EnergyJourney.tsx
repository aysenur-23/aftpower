'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
    key: string;
    slug: string;
    image: string;
    defaultTitle: string;
    defaultSubtitle: string;
    defaultDescription: string;
}

const STEPS: Step[] = [
    {
        key: 'portablePower',
        slug: 'portable',
        image: '/images/categories/portable-power-new.webp',
        defaultTitle: 'Taşınabilir Güç Paketleri',
        defaultSubtitle: 'Kompakt ve Güçlü',
        defaultDescription: 'Kamp, saha ve acil durumlar için taşınabilir güç.',
    },
    {
        key: 'vehiclePower',
        slug: 'vehicle',
        image: '/images/products/vehicle-category-new.jpg',
        defaultTitle: 'Araç Tipi Güç',
        defaultSubtitle: 'Mobil Enerji',
        defaultDescription: 'Yüksek kapasiteli araç üstü sistemler.',
    },
    {
        key: 'charging',
        slug: 'charging',
        image: '/images/categories/charging-category.webp',
        defaultTitle: 'Şarj İstasyonları',
        defaultSubtitle: 'Elektrikli Araç Şarjı',
        defaultDescription: 'AC ve DC yüksek performanslı şarj çözümleri.',
    },
    {
        key: 'cabinPower',
        slug: 'cabin',
        image: '/images/categories/cabin-category.jpg',
        defaultTitle: 'Kabin Tipi Güç',
        defaultSubtitle: 'Endüstriyel güç çözümleri',
        defaultDescription: 'Büyük ölçekli projeler için yüksek kapasiteli kabin tipi enerji sistemleri.',
    },
    {
        key: 'gesProducts',
        slug: 'ges',
        image: '/images/categories/solar-category.jpg',
        defaultTitle: 'Solar Ürünler',
        defaultSubtitle: 'Güneş enerjisi çözümleri',
        defaultDescription: 'Enerjisini güneşten alan güçlü komponentler.',
    },
    {
        key: 'batteryPower',
        slug: 'battery',
        image: '/images/categories/battery-category.jpg',
        defaultTitle: 'Batarya Sistemleri',
        defaultSubtitle: 'Yüksek Teknolojili Depolama',
        defaultDescription: 'Her alanda güvenilir enerji için gelişmiş batarya teknolojileri.',
    },
];

export default function EnergyJourney() {
    const t = useTranslations('products');
    const locale = useLocale();
    const containerRef = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const [progress, setProgress] = useState(0);

    const onScroll = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const scrollable = rect.height - window.innerHeight;
        if (scrollable <= 0) return;
        const p = Math.min(Math.max(-rect.top / scrollable, 0), 1);
        setProgress(p);
        const idx = Math.min(Math.floor(p * STEPS.length), STEPS.length - 1);
        setActive(idx);
    }, []);

    useEffect(() => {
        let ticking = false;
        const handler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    onScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener('scroll', handler, { passive: true });
        window.addEventListener('resize', handler);
        onScroll();
        return () => {
            window.removeEventListener('scroll', handler);
            window.removeEventListener('resize', handler);
        };
    }, [onScroll]);

    const tag = (s: Step) => (t.has(`${s.key}.subtitle`) ? t(`${s.key}.subtitle`) : s.defaultSubtitle);
    const title = (s: Step) => (t.has(`${s.key}.title`) ? t(`${s.key}.title`) : s.defaultTitle);
    const desc = (s: Step) => (t.has(`${s.key}.description`) ? t(`${s.key}.description`) : s.defaultDescription);

    const sectionLabel = locale === 'tr' ? 'ENERJİ ÇÖZÜMLERİ' : locale === 'ar' ? 'حلول الطاقة' : 'ENERGY SOLUTIONS';
    const heading = locale === 'tr' ? 'İhtiyacınıza Göre Enerji' : locale === 'ar' ? 'طاقة تناسب احتياجك' : 'Energy Built For You';
    const exploreLabel = locale === 'tr' ? 'Kategoriyi İncele' : locale === 'ar' ? 'استكشف الفئة' : 'Explore Category';

    return (
        <section
            ref={containerRef}
            className="relative w-full"
            style={{ height: `${STEPS.length * 100}vh`, background: 'linear-gradient(180deg, #e0f2fe 0%, #bae6fd 50%, #e0f2fe 100%)' }}
            aria-label={heading}
        >
            {/* Sticky viewport */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
                {/* Top accent */}
                <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent shrink-0" />

                {/* Progress bar */}
                <div className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-sky-500 to-sky-400 z-30 transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />

                <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center py-10">
                    {/* LEFT: Text that changes */}
                    <div className="order-2 lg:order-1 relative">
                        {/* Section header */}
                        <div className="mb-6 lg:mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-sky-500/40 bg-sky-500/10 mb-4">
                                <Zap className="w-3 h-3 text-sky-400" />
                                <span className="text-sky-400 text-[10px] tracking-[0.25em] uppercase font-brand font-semibold">{sectionLabel}</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                                {heading}
                            </h2>
                        </div>

                        {/* Animated step content */}
                        <div className="relative min-h-[180px] sm:min-h-[200px]">
                            {STEPS.map((s, i) => (
                                <div
                                    key={s.slug}
                                    className={cn(
                                        'absolute inset-0 transition-all duration-500 ease-out',
                                        i === active ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
                                    )}
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-brand text-sky-500 text-sm font-bold tabular-nums">
                                            0{i + 1}
                                        </span>
                                        <span className="h-px w-8 bg-sky-500/50" />
                                        <span className="text-sky-300/80 text-[11px] uppercase tracking-[0.2em] font-semibold">
                                            {tag(s)}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight leading-[1.1]">
                                        {title(s)}
                                    </h3>
                                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mb-6">
                                        {desc(s)}
                                    </p>
                                    <Link
                                        href={`/${locale}/urunlerimiz/kategori/${s.slug}/`}
                                        className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white font-semibold text-xs uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
                                        style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}
                                    >
                                        {exploreLabel}
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Step dots */}
                        <div className="flex items-center gap-2 mt-8">
                            {STEPS.map((s, i) => (
                                <span
                                    key={s.slug}
                                    className={cn(
                                        'h-1.5 rounded-full transition-all duration-300',
                                        i === active ? 'w-8 bg-sky-500' : 'w-1.5 bg-white/25'
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: Visual that changes (crossfade) */}
                    <div className="order-1 lg:order-2 relative aspect-[4/3] w-full">
                        {/* Glow */}
                        <div className="absolute -inset-6 rounded-full opacity-40 blur-3xl pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(14, 165, 233,0.25), transparent 70%)' }} />
                        {STEPS.map((s, i) => (
                            <div
                                key={s.slug}
                                className={cn(
                                    'absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]',
                                    i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                                )}
                            >
                                <div className="relative w-full h-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-sky-900/20 ring-1 ring-white/60">
                                    <Image
                                        src={s.image}
                                        alt={title(s)}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                                    {/* Corner index badge */}
                                    <div className="absolute top-4 right-4 font-brand text-white/90 text-xs font-bold px-2.5 py-1 bg-black/40 backdrop-blur-sm border border-slate-200">
                                        {i + 1} / {STEPS.length}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
