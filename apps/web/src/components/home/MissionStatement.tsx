'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { ArrowRight } from 'lucide-react';

export default function MissionStatement() {
    const t = useTranslations('mission');
    const locale = useLocale();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    // Vurucu ifade: title + subtitle birleşik
    const statement = `${t('title')} ${t('subtitle')}`.replace(/\s+/g, ' ').trim();
    const words = statement.split(' ');

    const onScroll = useCallback(() => {
        const el = sectionRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // Bölüm ekranda yükseldikçe 0 -> 1
        const start = vh * 0.9;
        const end = vh * 0.35;
        const p = (start - rect.top) / (start - end);
        setProgress(Math.min(Math.max(p, 0), 1));
    }, []);

    useEffect(() => {
        let ticking = false;
        const handler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => { onScroll(); ticking = false; });
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

    const filledCount = progress * words.length;
    const eyebrow = locale === 'tr' ? 'VİZYONUMUZ' : locale === 'ar' ? 'رؤيتنا' : 'OUR VISION';

    return (
        <section ref={sectionRef} className="relative bg-white py-24 lg:py-36 overflow-hidden">
            {/* üstten büyüyen ayraç çizgisi (hero'dan köprü) */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[3px] bg-gradient-to-r from-transparent via-sky-500 to-transparent transition-[width] duration-300 ease-out"
                style={{ width: `${20 + progress * 60}%` }}
            />

            <div className="container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
                <span className="inline-block text-sky-600 font-brand font-bold tracking-[0.3em] text-[11px] uppercase mb-8">
                    {eyebrow}
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-[3.25rem] font-bold leading-[1.25] tracking-tight">
                    {words.map((word, i) => {
                        const local = Math.min(Math.max(filledCount - i, 0), 1);
                        const isAccent = i >= words.length - 3; // son kelimeler mavi vurgulu
                        const filledColor = isAccent ? '#0ea5e9' : '#0f172a';
                        return (
                            <span
                                key={i}
                                className="inline-block mr-[0.28em] transition-colors duration-200"
                                style={{
                                    color: local > 0.5 ? filledColor : '#cbd5e1',
                                    opacity: 0.5 + local * 0.5,
                                }}
                            >
                                {word}
                            </span>
                        );
                    })}
                </h2>

                <div className="mt-12">
                    <Link
                        href={`/${locale}/kurumsal/`}
                        className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:bg-sky-600 hover:-translate-y-0.5"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))' }}
                    >
                        {t('button')}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
