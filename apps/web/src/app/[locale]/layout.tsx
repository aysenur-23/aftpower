import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import SiteHeader from '@/components/layout/SiteHeader';
import SiteFooter from '@/components/layout/SiteFooter';
import type { Metadata } from 'next';
import '@/app/globals.css';

export const metadata: Metadata = {
    // metadataBase: new URL('https://aftpowertech.com'),
    title: {
        default: 'AFT Power & Software - Enerji ve Yazılım Çözümleri',
        template: '%s | AFT Power & Software'
    },
    description: 'Enerji depolama teknolojileri ve kurumsal yazılım çözümleri sunan AFT Power & Software.',
    keywords: ['enerji', 'yenilenebilir enerji', 'yazılım', 'teknoloji', 'aftpower'],
    authors: [{ name: 'AFT Power & Software' }],
    creator: 'AFT Power & Software',
    publisher: 'AFT Power & Software',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
            { url: '/favicon.ico', sizes: 'any' }
        ],
        apple: [
            { url: '/favicon.png', sizes: '180x180', type: 'image/png' }
        ],
    },
    manifest: '/manifest.json',
    appleWebApp: {
        capable: true,
        statusBarStyle: 'default',
        title: 'AFT Power & Software',
    },
    openGraph: {
        type: 'website',
        locale: 'tr_TR',
        url: 'https://aftpowertech.com',
        siteName: 'AFT Power & Software',
        title: 'AFT Power & Software - Enerji ve Yazılım Çözümleri',
        description: 'Enerji depolama teknolojileri ve kurumsal yazılım çözümleri.',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'AFT Power & Software - Enerji ve Yazılım Çözümleri',
        description: 'Enerji depolama teknolojileri ve kurumsal yazılım çözümleri.',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

interface Props {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    setRequestLocale(locale);
    const messages = await getMessages();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <html lang={locale} dir={dir} suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <meta name="theme-color" content="#0ea5e9" />
            </head>
            <body className="antialiased" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    <div className="min-h-screen flex flex-col">
                        <SiteHeader />
                        <main className="flex-1">
                            {children}
                        </main>
                        <SiteFooter />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
