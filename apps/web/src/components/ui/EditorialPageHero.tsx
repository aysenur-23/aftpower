import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Crumb { label: string; href?: string; }
interface CTA { label: string; href: string; primary?: boolean; }

interface EditorialPageHeroProps {
    index?: string;          // e.g. "§ 01"
    label: string;           // small brand-font label, e.g. "KURUMSAL"
    metaRight?: string;      // top-right meta
    title: React.ReactNode;
    highlight?: string;      // accent-colored trailing word(s)
    description?: React.ReactNode;
    breadcrumb?: Crumb[];
    ctas?: CTA[];
}

/**
 * İç sayfalar için editoryal (asimetrik) hero: üst hairline meta barı + sola yaslı
 * iri başlık + sağ meta ray. Ana sayfadan farklı, dergi/dosya hissi. Server component.
 */
export default function EditorialPageHero({
    index = '§ 01',
    label,
    metaRight,
    title,
    highlight,
    description,
    breadcrumb,
    ctas,
}: EditorialPageHeroProps) {
    return (
        <section className="relative bg-white">
            {/* top hairline meta */}
            <div className="hairline-b">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between h-11">
                    <span className="font-brand text-[10px] font-bold tracking-[0.3em] uppercase text-slate-500">{index} — {label}</span>
                    {metaRight && <span className="hidden sm:block font-brand text-[10px] font-bold tracking-[0.3em] uppercase text-sky-600">{metaRight}</span>}
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pt-10 pb-12 lg:pt-14 lg:pb-16">
                    {/* Left: big title */}
                    <div className="lg:col-span-8">
                        {breadcrumb && (
                            <div className="flex items-center gap-2 mb-6 text-[11px] font-brand font-bold tracking-[0.18em] uppercase text-slate-400">
                                {breadcrumb.map((c, i) => (
                                    <span key={i} className="flex items-center gap-2">
                                        {c.href ? <Link href={c.href} className="hover:text-sky-600 transition-colors">{c.label}</Link> : <span className="text-slate-600">{c.label}</span>}
                                        {i < breadcrumb.length - 1 && <span className="text-slate-300">/</span>}
                                    </span>
                                ))}
                            </div>
                        )}
                        <h1 className="display-lg font-brand text-slate-900">
                            <span className="reveal-up inline-block">{title}</span>
                            {highlight && <span className="reveal-up inline-block text-sky-600 ms-[0.25em]" style={{ ['--delay' as string]: '90ms' }}>{highlight}</span>}
                        </h1>
                    </div>

                    {/* Right: meta rail */}
                    <div className="lg:col-span-4 flex flex-col justify-end gap-5 reveal-up" style={{ ['--delay' as string]: '200ms' }}>
                        <div className="hidden lg:block h-px w-full bg-slate-200" />
                        {description && <p className="text-sm sm:text-base text-slate-600 leading-relaxed">{description}</p>}
                        {ctas && ctas.length > 0 && (
                            <div className="flex flex-col gap-2.5">
                                {ctas.map((c, i) => (
                                    <Link key={i} href={c.href}
                                        className={cn('group inline-flex items-center justify-between gap-3 px-5 py-3 rounded-md font-semibold text-sm transition-colors',
                                            c.primary ? 'bg-sky-600 text-white hover:bg-sky-700' : 'border border-slate-300 text-slate-800 hover:border-sky-400 hover:text-sky-700')}>
                                        <span>{c.label}</span>
                                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
