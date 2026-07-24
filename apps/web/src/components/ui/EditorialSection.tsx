import { cn } from '@/lib/utils';

interface EditorialSectionProps {
    index: string;        // "§ 02"
    eyebrow?: string;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    className?: string;
}

/**
 * Editoryal bölüm başlığı: üst hairline + iri §NN index + sola yaslı font-brand başlık.
 * İç sayfaların bölümlerine "dergi/dosya" ritmi verir. Server component.
 */
export default function EditorialSection({ index, eyebrow, title, subtitle, className }: EditorialSectionProps) {
    return (
        <div className={cn('hairline pt-7 mb-9 lg:mb-12', className)}>
            <div className="flex items-start gap-4 sm:gap-7">
                <span className="index-num text-3xl sm:text-5xl lg:text-6xl text-sky-200 leading-none shrink-0 select-none">{index}</span>
                <div className="min-w-0">
                    {eyebrow && (
                        <span className="reveal-up eyebrow block mb-2">
                            {eyebrow}
                        </span>
                    )}
                    <h2 className="reveal-up font-brand font-bold text-slate-900 tracking-tight leading-[1.08] text-2xl sm:text-3xl lg:text-[2.5rem]" style={{ ['--delay' as string]: '70ms' }}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="reveal-up text-base text-slate-600 leading-relaxed mt-4 max-w-2xl" style={{ ['--delay' as string]: '150ms' }}>
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
