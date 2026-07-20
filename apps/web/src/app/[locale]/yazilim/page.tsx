import { setRequestLocale, getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { Database, Briefcase, Code2, Smartphone, Workflow, Cloud, Search, PenTool, Rocket, LifeBuoy, Check, ArrowUpRight } from 'lucide-react';
import EditorialPageHero from '@/components/ui/EditorialPageHero';
import EditorialSection from '@/components/ui/EditorialSection';
import FinalCTA from '@/components/home/FinalCTA';

interface Props {
    params: Promise<{ locale: string }>;
}

export default async function SoftwarePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);
    const tr = locale === 'tr'; const ar = locale === 'ar';
    const L = (t: string, e: string, a: string) => (ar ? a : locale === 'en' ? e : t);
    const home = L('Ana Sayfa', 'Home', 'الرئيسية');

    const services = [
        { icon: Database, title: L('Kurumsal ERP', 'Enterprise ERP', 'أنظمة ERP'), desc: L('Finanstan stok ve üretime kadar entegre iş yönetim sistemleri.', 'Integrated business management from finance to inventory and production.', 'أنظمة إدارة متكاملة من المالية إلى المخزون والإنتاج.') },
        { icon: Briefcase, title: L('Danışmanlık Yazılımı', 'Consultancy Software', 'برمجيات استشارية'), desc: L('Süreç yönetimi, CRM ve yönetim panelleri.', 'Process management, CRM and admin dashboards.', 'إدارة العمليات وCRM ولوحات الإدارة.') },
        { icon: Code2, title: L('Firmaya Özel Yazılım', 'Bespoke Software', 'برمجيات مخصصة'), desc: L('İhtiyacınıza göre sıfırdan geliştirilen özel çözümler.', 'Custom solutions built from scratch to your needs.', 'حلول مخصصة تُبنى من الصفر حسب احتياجك.') },
        { icon: Smartphone, title: L('Web & Mobil Uygulama', 'Web & Mobile Apps', 'تطبيقات ويب وجوال'), desc: L('iOS, Android ve modern web uygulamaları.', 'iOS, Android and modern web apps.', 'تطبيقات iOS و Android والويب الحديث.') },
        { icon: Workflow, title: L('Entegrasyon & API', 'Integrations & API', 'تكامل و API'), desc: L('Mevcut sistemlerinizle sorunsuz bağlantı ve otomasyon.', 'Seamless connection and automation with your systems.', 'ربط سلس وأتمتة مع أنظمتك.') },
        { icon: Cloud, title: L('Bulut & Bakım', 'Cloud & Maintenance', 'سحابة وصيانة'), desc: L('Güvenli barındırma, izleme ve sürekli destek.', 'Secure hosting, monitoring and ongoing support.', 'استضافة آمنة ومراقبة ودعم مستمر.') },
    ];

    const steps = [
        { icon: Search, title: L('Analiz', 'Discovery', 'التحليل'), desc: L('İhtiyaç ve süreç analizi.', 'Needs and process analysis.', 'تحليل الاحتياجات والعمليات.') },
        { icon: PenTool, title: L('Tasarım', 'Design', 'التصميم'), desc: L('Mimari ve arayüz tasarımı.', 'Architecture and UI design.', 'تصميم المعمارية والواجهة.') },
        { icon: Code2, title: L('Geliştirme', 'Development', 'التطوير'), desc: L('Çevik geliştirme ve test.', 'Agile development and testing.', 'تطوير رشيق واختبار.') },
        { icon: Rocket, title: L('Devreye Alma', 'Deployment', 'الإطلاق'), desc: L('Kurulum ve entegrasyon.', 'Setup and integration.', 'التركيب والتكامل.') },
        { icon: LifeBuoy, title: L('Destek', 'Support', 'الدعم'), desc: L('Bakım ve sürekli iyileştirme.', 'Maintenance and continuous improvement.', 'الصيانة والتحسين المستمر.') },
    ];

    const platformPoints = [
        L('Gerçek zamanlı izleme ve kontrol paneli', 'Real-time monitoring and control dashboard', 'لوحة مراقبة وتحكم فورية'),
        L('Detaylı analitik ve otomatik raporlama', 'Detailed analytics and automated reporting', 'تحليلات تفصيلية وتقارير تلقائية'),
        L('Rol bazlı yetkilendirme ve güvenlik', 'Role-based access and security', 'صلاحيات قائمة على الأدوار وأمان'),
        L('Mobil erişim ve akıllı bildirimler', 'Mobile access and smart alerts', 'وصول عبر الجوال وتنبيهات ذكية'),
    ];

    return (
        <div className="min-h-screen bg-white">
            <EditorialPageHero
                index="§ 01"
                label={L('YAZILIM', 'SOFTWARE', 'البرمجيات')}
                metaRight="AFT POWER & SOFTWARE"
                title={L('Firmanıza Özel', 'Software Built', 'برمجيات مخصصة')}
                highlight={L('Yazılım Çözümleri', 'For Your Business', 'لأعمالك')}
                description={L('ERP, danışmanlık ve kurumsal yönetim yazılımlarından firmanıza özel projelere kadar iş süreçlerinizi uçtan uca dijitalleştiriyoruz.',
                    'From ERP, consultancy and enterprise management software to fully bespoke projects, we digitalize your business end to end.',
                    'من ERP وبرمجيات الاستشارات والإدارة إلى المشاريع المخصصة، نُرقمن أعمالك من الألف إلى الياء.')}
                breadcrumb={[{ label: home, href: `/${locale}/` }, { label: L('Yazılım', 'Software', 'البرمجيات') }]}
                ctas={[
                    { label: L('Teklif Al', 'Get a Quote', 'احصل على عرض'), href: `/${locale}/fiyat-teklifi/`, primary: true },
                    { label: L('İletişim', 'Contact', 'اتصل بنا'), href: `/${locale}/iletisim/` },
                ]}
            />

            {/* §02 — Services */}
            <section className="py-14 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <EditorialSection index="§ 02" eyebrow={L('KAPSAM', 'CAPABILITIES', 'الخدمات')} title={L('Yazılım hizmetlerimiz', 'Our software services', 'خدماتنا البرمجية')} />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                        {services.map((s, i) => (
                            <div key={i} className="group rounded-2xl border border-slate-200 p-7 hover:border-sky-400 hover:-translate-y-1 hover:shadow-xl hover:shadow-sky-900/5 transition-all duration-300 bg-white">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center">
                                        <s.icon className="w-6 h-6" strokeWidth={1.6} />
                                    </div>
                                    <span className="index-num text-3xl text-slate-200 group-hover:text-sky-200 transition-colors">0{i + 1}</span>
                                </div>
                                <h3 className="font-brand text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                                <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* §03 — Process */}
            <section className="py-14 lg:py-20 bg-slate-50">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <EditorialSection index="§ 03" eyebrow={L('SÜRECİMİZ', 'OUR PROCESS', 'منهجيتنا')} title={L('Fikirden canlı sisteme', 'From idea to live system', 'من الفكرة إلى نظام حي')} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {steps.map((st, i) => (
                            <div key={i} className="relative rounded-2xl bg-white border border-slate-200 p-6">
                                <span className="index-num text-2xl text-sky-200">0{i + 1}</span>
                                <div className="w-11 h-11 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center my-4">
                                    <st.icon className="w-5 h-5" strokeWidth={1.6} />
                                </div>
                                <h3 className="font-brand text-base font-bold text-slate-900 mb-1">{st.title}</h3>
                                <p className="text-xs text-slate-500 leading-relaxed">{st.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* §04 — Platform */}
            <section className="py-14 lg:py-20">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
                    <EditorialSection index="§ 04" eyebrow={L('PLATFORM', 'PLATFORM', 'المنصة')} title={L('Tek panelden yönetim', 'Manage from one panel', 'إدارة من لوحة واحدة')} />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="relative rounded-2xl overflow-hidden ring-1 ring-slate-200 shadow-2xl shadow-sky-900/10">
                            <Image src="/images/software/dashboard.png" alt={L('Yönetim paneli', 'Management dashboard', 'لوحة الإدارة')} width={1200} height={900} className="w-full h-auto" />
                        </div>
                        <div>
                            <ul className="space-y-4 mb-8">
                                {platformPoints.map((pt, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="shrink-0 w-6 h-6 rounded-full bg-sky-500/10 text-sky-600 flex items-center justify-center mt-0.5">
                                            <Check className="w-3.5 h-3.5" strokeWidth={2.5} />
                                        </span>
                                        <span className="text-base text-slate-700 leading-relaxed">{pt}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href={`/${locale}/fiyat-teklifi/`} className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-sky-600 text-white font-semibold text-sm hover:bg-sky-700 transition-colors shadow-lg shadow-sky-600/20">
                                {L('Projenizi Konuşalım', "Let's Talk About Your Project", 'لنتحدث عن مشروعك')}
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <FinalCTA />
        </div>
    );
}

export async function generateMetadata({ params }: Props) {
    const { locale } = await params;
    const title = locale === 'ar' ? 'البرمجيات' : locale === 'en' ? 'Software' : 'Yazılım';
    const desc = locale === 'ar'
        ? 'ERP وبرمجيات الاستشارات والحلول المخصصة لشركتك.'
        : locale === 'en'
            ? 'ERP, consultancy software and bespoke solutions for your business.'
            : 'ERP, danışmanlık yazılımı ve firmanıza özel yazılım çözümleri.';
    return { title: `${title} | AFT Power & Software`, description: desc };
}
