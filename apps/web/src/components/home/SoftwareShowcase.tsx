'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import { Activity, SlidersHorizontal, BarChart3, Smartphone, BellRing, Cloud, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/lib/useInView';

export default function SoftwareShowcase() {
    const locale = useLocale();
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

    const tr = locale === 'tr';
    const ar = locale === 'ar';

    const eyebrow = tr ? 'AFT SOFTWARE' : ar ? 'AFT SOFTWARE' : 'AFT SOFTWARE';
    const title = tr ? 'Akıllı Enerji Yönetim Yazılımı'
        : ar ? 'برمجيات إدارة الطاقة الذكية'
        : 'Smart Energy Management Software';
    const desc = tr ? 'Donanımı yazılımla buluşturuyoruz. Enerji sistemlerinizi tek panelden izleyin, uzaktan yönetin ve verilerle optimize edin.'
        : ar ? 'نجمع الأجهزة بالبرمجيات. راقب أنظمة الطاقة وتحكّم بها عن بُعد وحسّن الأداء بالبيانات من لوحة واحدة.'
        : 'We bring hardware and software together. Monitor your energy systems, manage them remotely and optimize with data — all from one panel.';

    const features = [
        { icon: Activity, title: tr ? 'Gerçek Zamanlı İzleme' : ar ? 'مراقبة فورية' : 'Real-Time Monitoring', desc: tr ? 'Üretim, tüketim ve batarya durumu anlık.' : ar ? 'الإنتاج والاستهلاك وحالة البطارية لحظيًا.' : 'Live production, consumption and battery status.' },
        { icon: SlidersHorizontal, title: tr ? 'Uzaktan Yönetim' : ar ? 'تحكّم عن بُعد' : 'Remote Control', desc: tr ? 'Cihazları uzaktan yapılandırın ve kontrol edin.' : ar ? 'اضبط الأجهزة وتحكّم بها عن بُعد.' : 'Configure and control devices from anywhere.' },
        { icon: BarChart3, title: tr ? 'Analitik & Raporlama' : ar ? 'تحليلات وتقارير' : 'Analytics & Reporting', desc: tr ? 'Detaylı grafikler ve otomatik raporlar.' : ar ? 'رسوم تفصيلية وتقارير تلقائية.' : 'Detailed charts and automated reports.' },
        { icon: BellRing, title: tr ? 'Akıllı Uyarılar' : ar ? 'تنبيهات ذكية' : 'Smart Alerts', desc: tr ? 'Anomali ve arıza durumunda anında bildirim.' : ar ? 'إشعارات فورية عند الأعطال.' : 'Instant alerts on anomalies and faults.' },
        { icon: Smartphone, title: tr ? 'Mobil Uygulama' : ar ? 'تطبيق جوال' : 'Mobile App', desc: tr ? 'iOS ve Android ile her yerden erişim.' : ar ? 'وصول من أي مكان عبر iOS و Android.' : 'Access anywhere via iOS and Android.' },
        { icon: Cloud, title: tr ? 'Bulut Altyapı' : ar ? 'بنية سحابية' : 'Cloud Platform', desc: tr ? 'Güvenli, ölçeklenebilir bulut mimarisi.' : ar ? 'بنية سحابية آمنة وقابلة للتوسع.' : 'Secure, scalable cloud architecture.' },
    ];

    const cta = tr ? 'Yazılımı Keşfet' : ar ? 'استكشف البرنامج' : 'Explore the Software';

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
                            href={`/${locale}/iletisim/`}
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
