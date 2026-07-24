import { cn } from '@/lib/utils';

interface SectionHeaderProps {
    eyebrow?: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    align?: 'center' | 'left';
    className?: string;
}

/**
 * Ana sayfa deseniyle uyumlu bölüm başlığı: font-brand sky eyebrow + slate başlık + accent çizgi.
 * Server component (CSS reveal-up).
 */
export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    align = 'center',
    className,
}: SectionHeaderProps) {
    const centered = align === 'center';
    return (
        <div className={cn(centered ? 'text-center max-w-3xl mx-auto' : 'text-left', 'mb-10 lg:mb-14', className)}>
            {eyebrow && (
                <span className="reveal-up eyebrow inline-block mb-4">
                    {eyebrow}
                </span>
            )}
            <h2 className="reveal-up text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-slate-900 tracking-tight leading-[1.12]" style={{ ['--delay' as string]: '80ms' }}>
                {title}
            </h2>
            <div className={cn('h-1 w-14 rounded-full mt-5 bg-sky-500/70', centered && 'mx-auto')} />
            {subtitle && (
                <p className="reveal-up text-base sm:text-lg text-slate-600 leading-relaxed mt-5 max-w-2xl" style={{ ['--delay' as string]: '160ms', ...(centered ? { marginInline: 'auto' } : {}) }}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
