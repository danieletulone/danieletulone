import type { Metadata } from 'next';
import { QRHero } from '@/components/contacts-content';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Get in touch with Daniele Tulone — AI consultant, CTO, and agentic code specialist. Available on LinkedIn, GitHub, or via direct contact.',
  alternates: { canonical: '/contacts' },
};

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
