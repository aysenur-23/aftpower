'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/useInView';

export default function FinalCTA() {
    const locale = useLocale();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
    const tr = locale === 'tr';
    const ar = locale === 'ar';

    const eyebrow = tr ? 'BİRLİKTE ÇALIŞALIM' : ar ? 'لنعمل معًا' : "LET'S WORK TOGETHER";
    const title = tr ? 'Projeniz için doğru enerji ve yazılım çözümünü birlikte kuralım.'
        : ar ? 'لنبنِ معًا حل الطاقة والبرمجيات المناسب لمشروعك.'
        : "Let's build the right energy & software solution for your project.";
    const sub = tr ? 'Uzman ekibimiz ihtiyaç analizinden devreye almaya kadar yanınızda.'
        : ar ? 'فريقنا معك من تحليل الاحتياجات حتى التشغيل.'
        : 'Our team is with you from needs analysis to commissioning.';
    const primary = tr ? 'Danışmanlık Talep Et' : ar ? 'اطلب استشارة' : 'Request Consultation';
    const secondary = tr ? 'Teklif Al' : ar ? 'احصل على عرض' : 'Get a Quote';

    return (
        <section className="relative py-16 lg:py-24 bg-white overflow-hidden" ref={ref}>
            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div
                    className={cn(
                        'relative overflow-hidden rounded-3xl px-6 sm:px-10 lg:px-16 py-14 lg:py-20 transition-all duration-700 transform',
                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    )}
                    style={{ background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 55%, #075985 100%)' }}
                >
                    {/* Decorative glow + grid */}
                    <div className="absolute inset-0 pointer-events-none" aria-hidden>
                        <div className="absolute -top-24 -right-16 w-[420px] h-[420px] rounded-full bg-sky-300/20 blur-3xl" />
                        <div className="absolute -bottom-24 -left-16 w-[360px] h-[360px] rounded-full bg-white/10 blur-3xl" />
                        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,_#ffffff_1px,_transparent_0)] bg-[size:30px_30px]" />
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    </div>

                    <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-center">
                        {/* Left: message */}
                        <div>
                            <span className="inline-block text-sky-100/90 font-brand font-bold tracking-[0.28em] text-[11px] uppercase mb-5">
                                {eyebrow}
                            </span>
                            <h2 className="text-2xl sm:text-3xl lg:text-[2.5rem] font-bold text-white leading-[1.15] tracking-tight mb-4">
                                {title}
                            </h2>
                            <p className="text-sky-100/80 text-base sm:text-lg leading-relaxed max-w-xl">
                                {sub}
                            </p>
                        </div>

                        {/* Right: actions */}
                        <div className="flex flex-col gap-3 lg:items-stretch">
                            <Link
                                href={`/${locale}/iletisim/`}
                                className="group inline-flex items-center justify-between gap-3 px-6 py-4 rounded-xl bg-white text-slate-900 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-xl"
                            >
                                <span>{primary}</span>
                                <ArrowRight className="w-4 h-4 text-sky-600 transition-transform group-hover:translate-x-1" />
                            </Link>
                            <Link
                                href={`/${locale}/fiyat-teklifi/`}
                                className="group inline-flex items-center justify-between gap-3 px-6 py-4 rounded-xl border border-white/40 text-white font-semibold text-sm transition-all duration-300 hover:bg-white/10"
                            >
                                <span>{secondary}</span>
                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>

                            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 pt-4 border-t border-white/15">
                                <a href="tel:+905518291613" className="inline-flex items-center gap-2 text-sky-100/90 hover:text-white transition-colors text-sm">
                                    <Phone className="w-4 h-4" /> +90 (551) 829-1613
                                </a>
                                <a href="mailto:info@aftpowertech.com" className="inline-flex items-center gap-2 text-sky-100/90 hover:text-white transition-colors text-sm">
                                    <Mail className="w-4 h-4" /> info@aftpowertech.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
