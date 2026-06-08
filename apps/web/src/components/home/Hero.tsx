'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
    const t = useTranslations('hero');
    const locale = useLocale();

    return (
        <section className="relative w-[100vw] min-h-[130vh] left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] bg-black -mt-20 flex flex-col items-center justify-center overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-[-20px] w-[calc(100%+40px)] h-[calc(100%+40px)]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/images/hero/1.png"
                    className="absolute inset-0 w-full h-full object-cover min-w-full min-h-full"
                    style={{ objectFit: 'cover', objectPosition: 'center', transform: 'scale(1.15)' }}
                >
                    <source src="/videos/hero-new.mp4" type="video/mp4" />
                </video>

                {/* Dark overlay — denser, lacivert tonlu */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,13,30,0.85) 0%, rgba(15,23,42,0.7) 50%, rgba(8,13,30,0.75) 100%)', zIndex: 2 }} />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-48" style={{ background: 'linear-gradient(to top, #080d18, transparent)', zIndex: 3 }} />
            </div>

            {/* Animated glow orbs */}
            <div className="absolute inset-0 pointer-events-none w-full h-full" style={{ zIndex: 3 }}>
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-pulse-slow"
                    style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)', filter: 'blur(40px)' }}
                />
                <div
                    className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full animate-pulse-slow"
                    style={{ background: 'radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '1.5s' }}
                />
            </div>

            {/* Content */}
            <div className="relative container px-4 sm:px-6 lg:px-8" style={{ zIndex: 10 }}>
                <div className="w-full max-w-4xl mx-auto">
                    <div className="space-y-6 sm:space-y-8 text-center">

                        {/* Brand badge */}
                        <div className="flex items-center justify-center gap-2 animate-fade-in">
                            <div className="flex items-center gap-2 px-4 py-1.5 border border-orange-500/40 bg-orange-500/8 backdrop-blur-sm">
                                <Zap className="w-3.5 h-3.5 text-orange-400" />
                                <span className="text-orange-400 text-[10px] tracking-[0.3em] uppercase font-brand font-semibold">AFT Power</span>
                                <Zap className="w-3.5 h-3.5 text-orange-400" />
                            </div>
                        </div>

                        <div className="space-y-3 sm:space-y-4">
                            <h1
                                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight animate-slide-up font-body"
                                style={{ textShadow: '0 8px 32px rgba(0,0,0,0.8)' }}
                            >
                                <span className="block">{t('title1')}</span>
                                <span
                                    className="block mt-1"
                                    style={{
                                        background: 'linear-gradient(to right, #f97316, #fb923c, #fbbf24)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        backgroundClip: 'text',
                                        filter: 'drop-shadow(0 4px 20px rgba(249,115,22,0.4))'
                                    }}
                                >
                                    {t('title2')}
                                </span>
                            </h1>

                            {/* Accent line */}
                            <div className="flex items-center justify-center gap-3 my-4">
                                <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500" />
                                <div className="w-1.5 h-1.5 bg-orange-500 rotate-45" />
                                <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500" />
                            </div>

                            <p
                                className="text-sm sm:text-base md:text-lg text-white/75 max-w-xl mx-auto leading-relaxed animate-fade-in font-body"
                                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)', animationDelay: '0.2s' }}
                            >
                                {t('description')}
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                            <Link
                                href={`/${locale}/urunlerimiz/`}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 font-body"
                                style={{
                                    background: 'linear-gradient(135deg, #f97316, #ea580c)',
                                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
                                    boxShadow: '0 0 0 rgba(249,115,22,0)'
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 30px rgba(249,115,22,0.5)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 0 0 rgba(249,115,22,0)'; }}
                            >
                                {t('exploreProducts')}
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:scale-105 font-body"
                                style={{
                                    border: '1px solid rgba(255,255,255,0.3)',
                                    background: 'rgba(255,255,255,0.05)',
                                    backdropFilter: 'blur(10px)',
                                    clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))'
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(249,115,22,0.12)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(249,115,22,0.5)'; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'; (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.3)'; }}
                            >
                                {t('getQuote')}
                            </Link>
                        </div>

                        {/* Stats row */}
                        <div className="flex items-center justify-center gap-8 sm:gap-12 pt-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                            {[
                                { value: '500+', label: locale === 'ar' ? 'مشروع' : locale === 'en' ? 'Projects' : 'Proje' },
                                { value: '10+', label: locale === 'ar' ? 'سنوات' : locale === 'en' ? 'Years' : 'Yıl' },
                                { value: '99%', label: locale === 'ar' ? 'رضا' : locale === 'en' ? 'Satisfaction' : 'Memnuniyet' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <div className="text-2xl sm:text-3xl font-bold font-brand" style={{ background: 'linear-gradient(to right, #f97316, #fb923c)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                        {stat.value}
                                    </div>
                                    <div className="text-[10px] text-neutral-400 uppercase tracking-[0.15em] mt-0.5 font-body">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
