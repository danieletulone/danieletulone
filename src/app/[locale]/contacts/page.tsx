import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { QRHero } from '@/components/contacts-content';
import Header from '@/components/header';
import Footer from '@/components/footer';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('contactsTitle'),
    description: t('contactsDescription'),
    alternates: { canonical: '/contacts' },
  };
}

export default function ContactsPage() {
  return (
    <div className="h-[100svh] flex flex-col">
      <Header />

      <main className="flex-1 min-h-0 flex items-center justify-center px-4 sm:px-8 pb-4 sm:pb-8">
        <div className="animate-scale-in" style={{ animationDelay: '100ms' }}>
          <QRHero />
        </div>
      </main>

      <Footer />
    </div>
  );
}
