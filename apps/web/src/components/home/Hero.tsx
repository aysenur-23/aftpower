'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Zap, ShieldCheck, Leaf } from 'lucide-react';

export default function Hero() {
    const t = useTranslations('hero');
    const locale = useLocale();

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

    return (
        <section className="relative bg-white overflow-hidden">
            {/* Subtle background accents */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[45%] h-full" style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)' }} />
                <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.18), transparent 70%)', filter: 'blur(30px)' }} />
                <div className="absolute bottom-0 left-1/4 w-[380px] h-[380px] rounded-full" style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.10), transparent 70%)', filter: 'blur(40px)' }} />
            </div>

            <div className="relative container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center py-14 sm:py-20 lg:py-24">

                    {/* LEFT — Text */}
                    <div className="text-center lg:text-left order-2 lg:order-1">
                        {/* Brand badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-sky-200 bg-sky-50 mb-6 animate-fade-in">
                            <Zap className="w-3.5 h-3.5 text-sky-600" />
                            <span className="text-sky-700 text-[10px] tracking-[0.3em] uppercase font-brand font-semibold">AFT Power</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight animate-slide-up">
                            <span className="block">{t('title1')}</span>
                            <span
                                className="block mt-1"
                                style={{
                                    background: 'linear-gradient(to right, #0284c7, #0ea5e9, #38bdf8)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                }}
                            >
                                {t('title2')}
                            </span>
                        </h1>

                        {/* Accent line */}
                        <div className="flex items-center justify-center lg:justify-start gap-3 my-6">
                            <div className="h-1 w-12 rounded-full bg-gradient-to-r from-sky-500 to-sky-300" />
                            <div className="w-1.5 h-1.5 bg-sky-500 rotate-45" />
                        </div>

                        <p className="text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            {t('description')}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <Link
                                href={`/${locale}/urunlerimiz/`}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
                                style={{
                                    background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                    boxShadow: '0 10px 30px rgba(14,165,233,0.25)'
                                }}
                            >
                                {t('exploreProducts')}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-slate-700 font-semibold text-sm uppercase tracking-widest border border-slate-200 bg-white transition-all duration-300 hover:border-sky-400 hover:text-sky-700"
                                style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                            >
                                {t('getQuote')}
                            </Link>
                        </div>

                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 mt-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
                            {trust.map((item) => (
                                <div key={item.label} className="flex items-center gap-2 text-slate-500">
                                    <item.icon className="w-4 h-4 text-sky-500" />
                                    <span className="text-xs font-medium">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT — Image */}
                    <div className="order-1 lg:order-2 relative animate-fade-in">
                        <div className="relative w-full max-w-lg mx-auto">
                            <Image
                                src="/images/hero/hero-corporate.png"
                                alt="AFT Power - Enerji Depolama Sistemi"
                                width={1200}
                                height={1000}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Stats bar */}
                <div className="relative border-t border-slate-100 py-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center lg:text-left">
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold font-brand" style={{ background: 'linear-gradient(to right, #0ea5e9, #38bdf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                    {stat.value}
                                </div>
                                <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-[0.15em] mt-1 font-body">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
