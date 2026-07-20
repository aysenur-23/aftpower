'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function EditorialHero() {
    const t = useTranslations('hero');
    const locale = useLocale();

    const words = `${t('title1')} ${t('title2')}`.split(' ');
    const cta1 = t('exploreProducts');
    const cta2 = t('getQuote');
    const metaLabel = locale === 'tr' ? 'ENERJİ + YAZILIM' : locale === 'ar' ? 'طاقة + برمجيات' : 'ENERGY + SOFTWARE';

    return (
        <section className="relative bg-white">
            {/* top hairline + meta row */}
            <div className="hairline-b">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-11">
                    <span className="font-brand text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">§ 00 — AFT Power &amp; Software</span>
                    <span className="hidden sm:block font-brand text-[10px] font-bold tracking-[0.3em] uppercase text-sky-600">{metaLabel}</span>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-12 pb-14 lg:pt-16 lg:pb-20">
                    {/* Left: oversized headline */}
                    <div className="lg:col-span-9">
                        <h1 className="display-xl text-slate-900 font-brand">
                            {words.map((w, i) => {
                                const accent = i >= words.length - 2;
                                return (
                                    <span key={i} className="inline-block reveal-up mr-[0.22em]" style={{ ['--delay' as string]: `${i * 80}ms`, ...(accent ? { color: '#0ea5e9' } : {}) }}>
                                        {w}
                                    </span>
                                );
                            })}
                        </h1>
                    </div>

                    {/* Right: meta rail */}
                    <div className="lg:col-span-3 flex flex-col justify-end gap-6 reveal-up" style={{ ['--delay' as string]: '360ms' }}>
                        <div className="hidden lg:block h-px w-full bg-slate-200" />
                        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xs">
                            {t('description')}
                        </p>
                        <div className="flex flex-col gap-2.5">
                            <Link href={`/${locale}/urunlerimiz/`} className="group inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-md bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 transition-colors">
                                <span>{cta1}</span>
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                            <Link href={`/${locale}/fiyat-teklifi/`} className="group inline-flex items-center justify-between gap-3 px-5 py-3.5 rounded-md border border-slate-300 text-slate-800 font-semibold text-sm hover:border-sky-400 hover:text-sky-700 transition-colors">
                                <span>{cta2}</span>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom meta bar: index + scroll */}
            <div className="hairline">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-14">
                    <div className="flex items-center gap-6 text-[11px] font-brand font-bold tracking-[0.2em] uppercase text-slate-400">
                        <span>Enerji Donanımı</span>
                        <span className="hidden sm:inline text-slate-300">/</span>
                        <span className="hidden sm:inline">ERP</span>
                        <span className="hidden md:inline text-slate-300">/</span>
                        <span className="hidden md:inline">Firmaya Özel Yazılım</span>
                    </div>
                    <div className="flex items-center gap-2 text-sky-600">
                        <span className="text-[10px] font-brand font-bold tracking-[0.25em] uppercase text-slate-400">
                            {locale === 'ar' ? 'مرر' : locale === 'en' ? 'Scroll' : 'Keşfet'}
                        </span>
                        <ArrowDown className="w-4 h-4 animate-scroll-hint" />
                    </div>
                </div>
            </div>
        </section>
    );
}
