'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Zap, ShieldCheck, Leaf, ChevronDown } from 'lucide-react';
import { useInView } from '@/lib/useInView';
import { useCountUp } from '@/lib/useCountUp';

function Stat({ value, label, start, delay }: { value: string; label: string; start: boolean; delay: number }) {
    const display = useCountUp(value, start);
    return (
        <div className="text-center reveal-up" style={{ ['--delay' as string]: `${delay}ms` }}>
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-brand" style={{ background: 'linear-gradient(to right, #0ea5e9, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                {display}
            </div>
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
        { icon: Leaf, label: locale === 'ar' ? 'طاقة نظيفة' : locale === 'en' ? 'Clean Energy' : 'Temiz Enerji' },
        { icon: Zap, label: locale === 'ar' ? 'أداء عالٍ' : locale === 'en' ? 'High Output' : 'Yüksek Güç' },
    ];

    let wordIndex = 0;

    return (
        <section ref={ref} className="relative bg-white overflow-hidden">
            {/* Animated blue detail layer */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[520px] rounded-full animate-aurora"
                    style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.16), transparent 65%)', filter: 'blur(20px)' }} />
                <div className="absolute top-10 -left-24 w-[420px] h-[420px] rounded-full animate-aurora-slow"
                    style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.12), transparent 70%)', filter: 'blur(30px)' }} />
                <div className="absolute bottom-0 -right-24 w-[460px] h-[460px] rounded-full animate-aurora"
                    style={{ background: 'radial-gradient(circle, rgba(2,132,199,0.10), transparent 70%)', filter: 'blur(34px)' }} />
                {/* faint dot grid */}
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_#0ea5e9_1px,_transparent_0)] bg-[size:34px_34px]" />
                {/* bottom fade into next section */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className="relative container px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center py-24 sm:py-28 lg:py-36">

                    {/* Brand badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-sky-200 bg-sky-50/80 backdrop-blur-sm mb-8 animate-scale-in">
                        <Zap className="w-3.5 h-3.5 text-sky-600" />
                        <span className="text-sky-700 text-[10px] tracking-[0.3em] uppercase font-brand font-semibold">AFT Power</span>
                    </div>

                    {/* Headline — word by word reveal */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] tracking-tight">
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
                                        background: 'linear-gradient(to right, #0284c7, #0ea5e9, #38bdf8)',
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

                    {/* Accent line drawing in */}
                    <div className="h-1 w-20 rounded-full mt-7 bg-gradient-to-r from-sky-500 to-sky-300 animate-draw-line" />

                    {/* Description */}
                    <p className="text-base sm:text-lg text-slate-600 max-w-xl mt-7 leading-relaxed reveal-up" style={{ ['--delay' as string]: '520ms' }}>
                        {t('description')}
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-9 reveal-up" style={{ ['--delay' as string]: '640ms' }}>
                        <Link
                            href={`/${locale}/urunlerimiz/`}
                            className="group relative overflow-hidden inline-flex items-center justify-center gap-2 px-8 py-3.5 text-white font-semibold text-sm uppercase tracking-widest transition-transform duration-300 hover:-translate-y-0.5"
                            style={{
                                background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                boxShadow: '0 10px 30px rgba(14,165,233,0.28)'
                            }}
                        >
                            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            <span className="relative flex items-center gap-2">{t('exploreProducts')}<ArrowRight className="h-4 w-4" /></span>
                        </Link>
                        <Link
                            href={`/${locale}/fiyat-teklifi/`}
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-slate-700 font-semibold text-sm uppercase tracking-widest border border-slate-200 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:border-sky-400 hover:text-sky-700"
                            style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                        >
                            {t('getQuote')}
                        </Link>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-9 reveal-up" style={{ ['--delay' as string]: '760ms' }}>
                        {trust.map((item) => (
                            <div key={item.label} className="flex items-center gap-2 text-slate-500">
                                <item.icon className="w-4 h-4 text-sky-500" />
                                <span className="text-xs font-medium">{item.label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 sm:gap-14 mt-12 pt-10 border-t border-slate-100 w-full max-w-lg">
                        {stats.map((stat, i) => (
                            <Stat key={stat.label} value={stat.value} label={stat.label} start={inView} delay={860 + i * 90} />
                        ))}
                    </div>

                    {/* Scroll hint */}
                    <div className="mt-14 flex flex-col items-center gap-1 text-sky-500">
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
