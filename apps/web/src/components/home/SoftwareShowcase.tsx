'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Database, Briefcase, Code2, Smartphone, Workflow, Cloud, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/useInView';

export default function SoftwareShowcase() {
    const locale = useLocale();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

    const tr = locale === 'tr';
    const ar = locale === 'ar';

    const eyebrow = 'AFT SOFTWARE';
    const title = tr ? 'Firmanıza Özel Yazılım Çözümleri'
        : ar ? 'حلول برمجية مخصصة لشركتك'
        : 'Custom Software Solutions for Your Business';
    const desc = tr ? 'Enerjinin ötesinde: ERP, danışmanlık ve kurumsal yönetim yazılımlarından firmanıza özel projelere kadar iş süreçlerinizi uçtan uca dijitalleştiriyoruz.'
        : ar ? 'ما وراء الطاقة: نُرقمن عملياتك من الألف إلى الياء، من أنظمة ERP وبرمجيات الاستشارات والإدارة المؤسسية إلى المشاريع المخصصة لشركتك.'
        : 'Beyond energy: from ERP, consultancy and enterprise management software to fully bespoke projects, we digitalize your business end to end.';

    const features = [
        { icon: Database, title: tr ? 'Kurumsal ERP' : ar ? 'أنظمة ERP' : 'Enterprise ERP', desc: tr ? 'Finanstan stok yönetimine entegre iş sistemleri.' : ar ? 'أنظمة متكاملة من المالية إلى إدارة المخزون.' : 'Integrated systems from finance to inventory.' },
        { icon: Briefcase, title: tr ? 'Danışmanlık Yazılımı' : ar ? 'برمجيات استشارية' : 'Consultancy Software', desc: tr ? 'Süreç, CRM ve yönetim panelleri.' : ar ? 'العمليات وCRM ولوحات الإدارة.' : 'Process, CRM and management dashboards.' },
        { icon: Code2, title: tr ? 'Firmaya Özel Yazılım' : ar ? 'برمجيات مخصصة' : 'Bespoke Software', desc: tr ? 'İhtiyacınıza göre sıfırdan geliştirme.' : ar ? 'تطوير من الصفر حسب احتياجك.' : 'Built from scratch to your needs.' },
        { icon: Smartphone, title: tr ? 'Web & Mobil Uygulama' : ar ? 'تطبيقات ويب وجوال' : 'Web & Mobile Apps', desc: tr ? 'iOS, Android ve modern web uygulamaları.' : ar ? 'تطبيقات iOS و Android والويب الحديث.' : 'iOS, Android and modern web apps.' },
        { icon: Workflow, title: tr ? 'Entegrasyon & API' : ar ? 'تكامل و API' : 'Integrations & API', desc: tr ? 'Mevcut sistemlerinizle sorunsuz bağlantı.' : ar ? 'ربط سلس مع أنظمتك الحالية.' : 'Seamless connection with your existing systems.' },
        { icon: Cloud, title: tr ? 'Bulut & Bakım' : ar ? 'سحابة وصيانة' : 'Cloud & Maintenance', desc: tr ? 'Güvenli barındırma ve sürekli destek.' : ar ? 'استضافة آمنة ودعم مستمر.' : 'Secure hosting and ongoing support.' },
    ];

    const cta = tr ? 'Yazılım Çözümlerini Keşfet' : ar ? 'استكشف حلول البرمجيات' : 'Explore Software Solutions';

    return (
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-white via-sky-50/40 to-white overflow-hidden" ref={ref}>
            <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left: Dashboard visual */}
                    <div className={cn(
                        'relative order-1 transition-all duration-700 transform',
                        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                    )}>
                        <div className="absolute -inset-4 rounded-3xl bg-sky-400/10 blur-2xl pointer-events-none" />
                        <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-2xl shadow-sky-900/10">
                            <Image
                                src="/images/software/dashboard.png"
                                alt={title}
                                width={1200}
                                height={900}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="order-2">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 mb-5">
                            <Cloud className="w-3.5 h-3.5 text-sky-600" />
                            <span className="text-[10px] font-bold text-sky-700 uppercase tracking-[0.2em] font-brand">{eyebrow}</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 tracking-tight leading-[1.1] mb-5">
                            {title}
                        </h2>
                        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8">
                            {desc}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-9">
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className={cn(
                                        'flex items-start gap-3 transition-all duration-500 transform',
                                        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    )}
                                    style={{ transitionDelay: inView ? `${i * 70}ms` : '0ms' }}
                                >
                                    <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                                        <f.icon className="w-5 h-5" strokeWidth={1.6} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-bold text-slate-900 mb-0.5">{f.title}</h3>
                                        <p className="text-xs text-slate-500 leading-relaxed">{f.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href={`/${locale}/yazilim/`}
                            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-sky-600 text-white font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-sky-700 hover:-translate-y-0.5 shadow-lg shadow-sky-600/20"
                        >
                            {cta}
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
