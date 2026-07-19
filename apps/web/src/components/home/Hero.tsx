'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, ShieldCheck, Leaf, Cpu, ChevronDown } from 'lucide-react';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';

function Stat({ value, label, start, delay }: { value: string; label: string; start: boolean; delay: number }) {
    const display = useCountUp(value, start);
    return (
        <div className="text-center reveal-up" style={{ ['--delay' as string]: `${delay}ms` }}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-brand text-sky-700">{display}</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.15em] mt-1 font-body">{label}</div>
        </div>
    );
}

export default function Hero() {
    const t = useTranslations('hero');
    const locale = useLocale();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

    const title1Words = t('title1').split(' ');
    const title2Words = t('title2').split(' ');

    const stats = [
        { value: '500+', label: locale === 'ar' ? 'مشروع' : locale === 'en' ? 'Projects' : 'Proje' },
        { value: '10+', label: locale === 'ar' ? 'سنوات' : locale === 'en' ? 'Years' : 'Yıl' },
        { value: '99%', label: locale === 'ar' ? 'رضا' : locale === 'en' ? 'Satisfaction' : 'Memnuniyet' },
    ];

    const trust = [
        { icon: ShieldCheck, label: locale === 'ar' ? 'ضمان' : locale === 'en' ? 'Warranty' : 'Garantili' },
        { icon: Cpu, label: locale === 'ar' ? 'برمجيات ذكية' : locale === 'en' ? 'Smart Software' : 'Akıllı Yazılım' },
        { icon: Leaf, label: locale === 'ar' ? 'طاقة نظيفة' : locale === 'en' ? 'Clean Energy' : 'Temiz Enerji' },
    ];

    let wordIndex = 0;

    return (
        <section ref={ref} className="relative overflow-hidden">
            {/* Photographic background */}
            <div className="absolute inset-0" aria-hidden>
                <Image
                    src="/images/hero/hero-bg.jpg"
                    alt=""
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                {/* Light corporate scrim — bright/white-forward but lets the photo read */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.66) 45%, rgba(255,255,255,0.80) 100%)' }} />
                <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 62% 58% at 50% 44%, rgba(255,255,255,0.88), rgba(255,255,255,0.25) 70%, transparent 85%)' }} />
                {/* bottom fade into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="relative container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center py-24 sm:py-28 lg:py-36">

                    {/* Brand badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-200 bg-white/80 backdrop-blur-sm mb-8 animate-scale-in shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                        <span className="text-sky-700 text-[10px] tracking-[0.2em] uppercase font-brand font-bold">AFT Power &amp; Software</span>
                    </div>

                    {/* Headline — word by word reveal, refined two-tone */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.06] tracking-tight">
                        <span className="block">
                            {title1Words.map((w, i) => (
                                <span key={`a${i}`} className="inline-block reveal-up mr-[0.25em]" style={{ ['--delay' as string]: `${(wordIndex++) * 90}ms` }}>{w}</span>
                            ))}
                        </span>
                        <span className="block mt-1">
                            {title2Words.map((w, i) => (
                                <span
                                    key={`b${i}`}
                                    className="inline-block reveal-up mr-[0.25em]"
                                    style={{
                                        ['--delay' as string]: `${(wordIndex++) * 90}ms`,
                                        background: 'linear-gradient(90deg, #0369a1, #0ea5e9)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                    }}
                                >
                                    {w}
                                </span>
                            ))}
                        </span>
                    </h1>

                    {/* Accent line */}
                    <div className="h-1 w-16 rounded-full mt-7 bg-sky-500/80 animate-draw-line" />

                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-600 max-w-xl mt-7 leading-relaxed reveal-up" style={{ ['--delay' as string]: '520ms' }}>
                        {t('description')}
                    </p>

                    {/* CTAs — clean corporate buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9 reveal-up" style={{ ['--delay' as string]: '640ms' }}>
                        <Link
                            href={`/${locale}/urunlerimiz/`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-sky-600 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-sky-700 hover:-translate-y-0.5 shadow-lg shadow-sky-600/20"
                        >
                            {t('exploreProducts')}
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            href={`/${locale}/fiyat-teklifi/`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md text-slate-700 font-semibold text-sm tracking-wide border border-slate-300 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:text-sky-700"
                        >
                            {t('getQuote')}
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-9 reveal-up" style={{ ['--delay' as string]: '760ms' }}>
                        {trust.map((item) => (
                            <div key={item.label} className="flex items-center gap-2 text-slate-500">
                                <item.icon className="w-4 h-4 text-sky-600" />
                                <span className="text-xs font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 sm:gap-14 mt-12 pt-10 border-t border-slate-200/70 w-full max-w-lg">
                        {stats.map((stat, i) => (
                            <Stat key={stat.label} value={stat.value} label={stat.label} start={inView} delay={860 + i * 90} />
                        ))}
                    </div>

                    {/* Scroll hint */}
                    <div className="mt-14 flex flex-col items-center gap-1 text-sky-600">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-slate-400 font-body">
                            {locale === 'ar' ? 'مرر للأسفل' : locale === 'en' ? 'Scroll' : 'Keşfet'}
                        </span>
                        <ChevronDown className="w-5 h-5 animate-scroll-hint" />
                    </div>
                </div>
            </div>
        </section>
    );
}
