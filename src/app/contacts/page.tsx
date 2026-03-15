import type { Metadata } from 'next';
import { QRHero, ContactLinks } from '@/components/contacts-content';
import Header from '@/components/header';
import Footer from '@/components/footer';

export const metadata: Metadata = {
  title: 'Contacts',
  description: 'Get in touch with Daniele Tulone — AI consultant, CTO, and agentic code specialist. Available on LinkedIn, GitHub, or via direct contact.',
  alternates: { canonical: '/contacts' },
};

export default function ContactsPage() {
  return (
    <div className="min-h-[100svh] flex flex-col p-4 sm:p-8 gap-y-8 sm:gap-y-16">
      <Header />

      <main className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-4 items-center md:items-end">
        <div className="md:col-span-3 flex flex-col gap-6 order-2 md:order-1">
          <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Let&apos;s connect</h1>
            <p className="text-xs text-muted mt-2">Scan to save my contact or reach out directly.</p>
          </div>

          <ContactLinks />
        </div>

        <div className="md:col-span-5 md:col-start-7 flex justify-center md:justify-end items-center md:items-end order-1 md:order-2 animate-scale-in" style={{ animationDelay: '100ms' }}>
          <QRHero />
        </div>
      </main>

      <Footer />
    </div>
  );
}
