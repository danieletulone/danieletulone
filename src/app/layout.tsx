import './global.css';
import { Manrope } from 'next/font/google';
import type { Metadata } from 'next';
const font = Manrope({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://danieletulone.vercel.app'),
  title: {
    default: 'Daniele Tulone — AI-Native Engineer',
    template: '%s — Daniele Tulone',
  },
  description: 'AI-native engineer turning business problems into software with agentic code. Specializing in agentic AI, Claude Code, security & compliance.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://danieletulone.vercel.app',
    siteName: 'Daniele Tulone',
    title: 'Daniele Tulone — AI-Native Engineer',
    description: 'AI-native engineer turning business problems into software with agentic code. Specializing in agentic AI, Claude Code, security & compliance.',
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
    title: 'Daniele Tulone — AI-Native Engineer',
    description: 'AI-native engineer turning business problems into software with agentic code.',
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
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${font.className} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');document.documentElement.classList.add('light')}}catch(e){}})()`,
          }}
        />
      </head>
      <body className="flex flex-col">
        {children}
      </body>
    </html>
  );
}
