import '../global.css';
import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const font = Manrope({ subsets: ['latin'] });

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL('https://danieletulone.vercel.app'),
    title: {
      default: t('homeTitle'),
      template: '%s — Daniele Tulone',
    },
    description: t('homeDescription'),
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://danieletulone.vercel.app',
      siteName: 'Daniele Tulone',
      title: t('homeTitle'),
      description: t('homeDescription'),
      images: [
        {
          url: '/daniele-tulone.jpeg',
          width: 800,
          height: 800,
          alt: 'Daniele Tulone',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: t('homeTitle'),
      description: t('homeDescription'),
      images: ['/daniele-tulone.jpeg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
      },
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${font.className} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
