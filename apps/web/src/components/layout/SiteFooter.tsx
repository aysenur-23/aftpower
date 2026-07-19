import Link from 'next/link';
import { getLocale, getTranslations } from 'next-intl/server';
import { Zap } from 'lucide-react';

export default async function SiteFooter() {
    const locale = await getLocale();
    const t = await getTranslations('footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{ background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)', borderTop: '1px solid rgba(14, 165, 233, 0.2)' }}>
            {/* Top accent */}
            <div className="h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
                {/* Brand row */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 pb-8" style={{ borderBottom: '1px solid rgba(15,23,42,0.08)' }}>
                    <div className="mb-6 md:mb-0">
                        <div className="flex items-center gap-2 mb-2">
                            <div className="w-8 h-8 flex items-center justify-center" style={{ background: 'rgba(14, 165, 233,0.15)', border: '1px solid rgba(14, 165, 233,0.3)' }}>
                                <Zap className="w-4 h-4 text-sky-500" />
                            </div>
                            <span className="font-brand text-slate-900 font-bold tracking-[0.12em] text-lg">AFT POWER <span className="text-sky-600">&amp; SOFTWARE</span></span>
                        </div>
                        <p className="text-slate-500 text-xs tracking-[0.15em] uppercase font-body">Energy &amp; Software Solutions</p>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="tel:+905518291613" className="text-slate-600 hover:text-sky-400 transition-colors text-sm font-body">
                            +90 (551) 829-1613
                        </a>
                        <a href="mailto:info@aftpowertech.com" className="text-slate-600 hover:text-sky-400 transition-colors text-sm font-body">
                            info@aftpowertech.com
                        </a>
                    </div>
                </div>

                {/* Links grid */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    {/* Products */}
                    <div>
                        <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-sky-500 font-brand">
                            {t('products')}
                        </h3>
                        <ul className="space-y-2.5 text-xs text-slate-500 font-body">
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/portable/`} className="hover:text-sky-400 transition-colors">
                                    {t('portablePower')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/cabin/`} className="hover:text-sky-400 transition-colors">
                                    {t('cabinPower')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/vehicle/`} className="hover:text-sky-400 transition-colors">
                                    {t('vehiclePower')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/ges/`} className="hover:text-sky-400 transition-colors">
                                    {t('gesProducts')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/urunlerimiz/kategori/battery/`} className="hover:text-sky-400 transition-colors">
                                    {t('batteryPower')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-sky-500 font-brand">
                            {t('services')}
                        </h3>
                        <ul className="space-y-2.5 text-xs text-slate-500 font-body">
                            <li>
                                <Link href={`/${locale}/hizmetlerimiz/ges-kurulumu/`} className="hover:text-sky-400 transition-colors">
                                    {t('gesInstallation')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/hizmetlerimiz/endustriyel-kurulum/`} className="hover:text-sky-400 transition-colors">
                                    {t('industrialInstallation')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-sky-500 font-brand">
                            {t('quickLinks')}
                        </h3>
                        <ul className="space-y-2.5 text-xs text-slate-500 font-body">
                            <li>
                                <Link href={`/${locale}/kurumsal/`} className="hover:text-sky-400 transition-colors">
                                    {t('corporate')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/iletisim/`} className="hover:text-sky-400 transition-colors">
                                    {t('contact')}
                                </Link>
                            </li>
                            <li>
                                <Link href={`/${locale}/fiyat-teklifi/`} className="hover:text-sky-400 transition-colors">
                                    {t('getQuote')}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-sky-500 font-brand">
                            {t('contact')}
                        </h3>
                        <ul className="space-y-2.5 text-xs text-slate-500 font-body">
                            <li>
                                <a href="tel:+905518291613" className="hover:text-sky-400 transition-colors">
                                    {locale === 'ar' ? '+٩٠ (٥٥١) ٨٢٩-١٦١٣' : '+90 (551) 829-1613'}
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@aftpowertech.com" dir="ltr" className="hover:text-sky-400 transition-colors">
                                    info@aftpowertech.com
                                </a>
                            </li>
                            <li className="text-slate-500 leading-relaxed">
                                {t.has('address') ? t('address') : 'Fevzi Çakmak Mahallesi Milenyum Caddesi No:81 Karatay/KONYA'}
                            </li>
                            <li>
                                <a
                                    href="https://maps.app.goo.gl/dEJViRBejc7dpB3WA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sky-500 hover:text-sky-400 transition-colors font-medium"
                                >
                                    {t('getDirections')} →
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-2" style={{ borderTop: '1px solid rgba(15,23,42,0.06)' }}>
                    <p className="text-xs text-slate-500 font-body">
                        © {locale === 'ar'
                            ? String(currentYear).replace(/\d/g, d => '٠١٢٣٤٥٦٧٨٩'[parseInt(d)])
                            : currentYear} AFT Power &amp; Software — {t('copyright')}
                    </p>
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-body">
                        <Zap className="w-3 h-3 text-sky-600" />
                        <span>Powered by clean energy</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
