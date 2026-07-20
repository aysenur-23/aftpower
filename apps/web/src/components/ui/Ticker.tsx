import { cn } from '@/lib/utils';

interface TickerProps {
    items: string[];
    duration?: number;
    className?: string;
    tone?: 'light' | 'dark';
}

/**
 * Sonsuz yatay kayan şerit (editoryal signature öğe). CSS marquee; reduced-motion'da durur.
 */
export default function Ticker({ items, duration = 32, className, tone = 'light' }: TickerProps) {
    const seq = [...items, ...items];
    return (
        <div className={cn('relative w-full overflow-hidden select-none', tone === 'dark' ? 'bg-slate-900 text-white' : 'bg-white text-slate-900', className)}>
            <div className="flex w-max animate-marquee" style={{ ['--marquee-duration' as string]: `${duration}s` }}>
                {seq.map((item, i) => (
                    <span key={i} className="flex items-center whitespace-nowrap">
                        <span className="mx-6 text-sm font-brand font-semibold uppercase tracking-[0.18em]">{item}</span>
                        <span className={cn('h-1.5 w-1.5 rotate-45', tone === 'dark' ? 'bg-sky-400' : 'bg-sky-500')} />
                    </span>
                ))}
            </div>
        </div>
    );
}
