'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Battery, Database, Code2, Activity, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/useInView';

export default function WhatWeDo() {
    const locale = useLocale();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.12 });
    const tr = locale === 'tr'; const ar = locale === 'ar';

    const eyebrow = '§ 01 — ' + (tr ? 'NE YAPIYORUZ' : ar ? 'ماذا نفعل' : 'WHAT WE DO');
    const heading = tr ? 'Donanım ve yazılımı tek çatı altında' : ar ? 'الأجهزة والبرمجيات تحت سقف واحد' : 'Hardware and software under one roof';

    const items = [
        {
            n: '01', big: true, icon: Battery, href: `/${locale}/urunlerimiz/`,
            title: tr ? 'Enerji Donanımı' : ar ? 'أجهزة الطاقة' : 'Energy Hardware',
            desc: tr ? 'LiFePO₄ batarya paketleri, taşınabilir güç, GES ve şarj istasyonları. Sahadan endüstriyele kesintisiz güç.' : ar ? 'حزم بطاريات LiFePO₄، طاقة محمولة، أنظمة شمسية ومحطات شحن.' : 'LiFePO₄ battery packs, portable power, solar and EV charging — from field to industrial.',
        },
        {
            n: '02', icon: Database, href: `/${locale}/iletisim/`,
            title: tr ? 'Kurumsal ERP' : ar ? 'أنظمة ERP' : 'Enterprise ERP',
            desc: tr ? 'Finanstan stoğa entegre iş sistemleri.' : ar ? 'أنظمة متكاملة من المالية إلى المخزون.' : 'Integrated systems, finance to inventory.',
        },
        {
            n: '03', icon: Code2, href: `/${locale}/iletisim/`,
            title: tr ? 'Firmaya Özel Yazılım' : ar ? 'برمجيات مخصصة' : 'Bespoke Software',
            desc: tr ? 'İhtiyacınıza göre sıfırdan geliştirme.' : ar ? 'تطوير من الصفر حسب احتياجك.' : 'Built from scratch to your needs.',
        },
        {
            n: '04', wide: true, icon: Activity, href: `/${locale}/iletisim/`,
            title: tr ? 'İzleme & Analitik' : ar ? 'مراقبة وتحليلات' : 'Monitoring & Analytics',
            desc: tr ? 'Gerçek zamanlı veri, uzaktan yönetim ve raporlama ile sistemlerinizi optimize edin.' : ar ? 'بيانات فورية وإدارة عن بُعد وتقارير.' : 'Optimize your systems with real-time data, remote control and reporting.',
        },
    ];

    return (
        <section className="bg-white py-16 lg:py-24" ref={ref}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                {/* header */}
                <div className="hairline-b pb-6 mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                        <span className="font-brand text-[11px] font-bold tracking-[0.28em] uppercase text-sky-600">{eyebrow}</span>
                        <h2 className="display-lg text-slate-900 font-brand mt-4 max-w-3xl">{heading}</h2>
                    </div>
                </div>

                {/* bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
                    {items.map((it, i) => (
                        <Link
                            key={it.n}
                            href={it.href}
                            className={cn(
                                'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 p-7 lg:p-8 transition-all duration-500 hover:border-sky-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/5',
                                it.big ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-sky-50 to-white min-h-[240px] lg:min-h-[420px]' : '',
                                (it as any).wide ? 'md:col-span-3 bg-white min-h-[160px]' : (!it.big ? 'bg-white min-h-[200px]' : ''),
                                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                            )}
                            style={{ transitionDelay: inView ? `${i * 80}ms` : '0ms' }}
                        >
                            <div className="flex items-start justify-between">
                                <div className={cn('flex items-center justify-center rounded-xl bg-sky-500/10 text-sky-600', it.big ? 'w-14 h-14' : 'w-11 h-11')}>
                                    <it.icon className={it.big ? 'w-7 h-7' : 'w-5 h-5'} strokeWidth={1.6} />
                                </div>
                                <span className={cn('index-num text-slate-200 group-hover:text-sky-200 transition-colors', it.big ? 'text-6xl lg:text-8xl' : 'text-4xl')}>{it.n}</span>
                            </div>
                            <div className="mt-8">
                                <h3 className={cn('font-brand font-bold text-slate-900 tracking-tight', it.big ? 'text-2xl lg:text-4xl mb-3' : 'text-lg mb-1.5')}>{it.title}</h3>
                                <p className={cn('text-slate-600 leading-relaxed', it.big ? 'text-base max-w-md' : 'text-sm')}>{it.desc}</p>
                                <span className="mt-5 inline-flex items-center gap-1.5 text-sky-600 text-xs font-bold uppercase tracking-widest opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                                    {tr ? 'İncele' : ar ? 'استكشف' : 'Explore'} <ArrowUpRight className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
