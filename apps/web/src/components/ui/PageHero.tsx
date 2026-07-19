import { cn } from '@/lib/utils';

interface PageHeroProps {
    eyebrow?: string;
    title: React.ReactNode;
    highlight?: string;
    description?: React.ReactNode;
    align?: 'center' | 'left';
    children?: React.ReactNode;
    className?: string;
}

/**
 * Ana sayfa hero diliyle uyumlu, aydınlık iç-sayfa hero'su.
 * Server component (CSS `reveal-up` animasyonu — hook yok), her sayfada kullanılabilir.
 */
export default function PageHero({
    eyebrow,
    title,
    highlight,
    description,
    align = 'center',
    children,
    className,
}: PageHeroProps) {
    const centered = align === 'center';
    return (
        <section className={cn('relative overflow-hidden bg-white', className)}>
            {/* Aydınlık mavi detay katmanı */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
                <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[720px] h-[420px] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.14), transparent 65%)', filter: 'blur(20px)' }} />
                <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_1px_1px,_#0ea5e9_1px,_transparent_0)] bg-[size:34px_34px]" />
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
            </div>

            <div className={cn('relative container px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-28 pb-14 lg:pt-32 lg:pb-20',
                centered ? 'text-center' : 'text-left')}>
                {eyebrow && (
                    <span className={cn('reveal-up inline-block font-brand text-sky-600 font-bold tracking-[0.28em] text-[11px] uppercase mb-5')}>
                        {eyebrow}
                    </span>
                )}
                <h1 className="reveal-up text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.08] tracking-tight" style={{ ['--delay' as string]: '80ms' }}>
                    {title}
                    {highlight && (
                        <>
                            {' '}
                            <span style={{ background: 'linear-gradient(90deg, #0369a1, #0ea5e9)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                                {highlight}
                            </span>
                        </>
                    )}
                </h1>
                <div className={cn('h-1 w-16 rounded-full mt-6 bg-sky-500/80 animate-draw-line', centered && 'mx-auto')} />
                {description && (
                    <p className={cn('reveal-up text-base sm:text-lg text-slate-600 leading-relaxed mt-6', centered ? 'max-w-2xl mx-auto' : 'max-w-2xl')} style={{ ['--delay' as string]: '180ms' }}>
                        {description}
                    </p>
                )}
                {children && (
                    <div className={cn('reveal-up mt-8 flex flex-wrap gap-3', centered ? 'justify-center' : 'justify-start')} style={{ ['--delay' as string]: '280ms' }}>
                        {children}
                    </div>
                )}
            </div>
        </section>
    );
}
