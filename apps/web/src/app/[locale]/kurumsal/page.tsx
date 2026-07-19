'use client';

import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, Lightbulb, Users, Award, ArrowRight, Target, Eye, Battery, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import PageHero from '@/components/ui/PageHero';

export default function Kurumsal() {
    const t = useTranslations('corporatePage');
    const locale = useLocale();

    const valuesData = [
        { icon: Shield, title: t('values.reliability.title'), desc: t('values.reliability.description'), color: 'bg-sky-400' },
        { icon: Lightbulb, title: t('values.innovation.title'), desc: t('values.innovation.description'), color: 'bg-sky-500' },
        { icon: Users, title: t('values.customer.title'), desc: t('values.customer.description'), color: 'bg-sky-500' },
        { icon: Award, title: t('values.quality.title'), desc: t('values.quality.description'), color: 'bg-slate-500' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero — light, homepage-aligned */}
            <PageHero eyebrow={t('badge')} title={t('heroTitle')} description={t('heroSubtitle')} />

            {/* Product Showcase */}
            <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="relative bg-gradient-to-br from-sky-50 to-slate-100 rounded-3xl p-10 lg:p-16 border border-slate-200">
                            <div className="relative aspect-square max-w-md mx-auto">
                                <Image
                                    src="/images/corporate/about-visual.webp"
                                    alt="AFT Power Enerji Depolama Sistemi"
                                    fill
                                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                                    {t('aboutTitle')}
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {t('aboutDescription')}
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-sky-400 flex items-center justify-center text-white mb-4 shadow-lg shadow-sky-500/30">
                                        <Battery className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('techTitle')}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{t('techDesc')}</p>
                                </div>
                                <div className="p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                                    <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white mb-4 shadow-lg shadow-sky-500/30">
                                        <Zap className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{t('integrationTitle')}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed">{t('integrationDesc')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 lg:py-24">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-sky-50 to-white border border-sky-500/15 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-sky-500 flex items-center justify-center shadow-xl shadow-sky-600/20">
                                    <Target className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{t('missionTitle')}</h2>
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{t('missionDesc')}</p>
                        </div>
                        <div className="p-8 lg:p-12 bg-gradient-to-br from-sky-50 to-white border border-sky-100 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-sky-500 flex items-center justify-center shadow-xl shadow-sky-500/20">
                                    <Eye className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">{t('visionTitle')}</h2>
                            </div>
                            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">{t('visionDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">{t('valuesTitle')}</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">{t('valuesSubtitle')}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {valuesData.map((value, idx) => (
                            <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-sky-500/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center">
                                <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg transition-transform group-hover:scale-110", value.color)}>
                                    <value.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed font-medium">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
                    <div className="rounded-3xl p-10 sm:p-16 lg:p-20 relative overflow-hidden shadow-2xl" style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)' }}>
                        {/* Glow Gradient */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-400/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/20 blur-[100px] rounded-full -translate-x-1/3 translate-y-1/3" />

                        <div className="relative z-10">
                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">{t('ctaTitle')}</h2>
                            <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-xl mx-auto font-medium">{t('ctaSubtitle')}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href={`/${locale}/iletisim/`}
                                    className="px-10 py-5 bg-sky-500 text-white rounded-2xl font-bold hover:bg-sky-500/80 transition-all flex items-center justify-center gap-3 shadow-lg shadow-sky-600/30 hover:scale-105"
                                >
                                    {t('ctaButton1')}
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <Link
                                    href={`/${locale}/urunlerimiz/`}
                                    className="px-10 py-5 bg-white text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:scale-105"
                                >
                                    {t('ctaButton2')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
