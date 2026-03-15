'use client';

import { QRCodeSVG } from 'qrcode.react';

const VCARD = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Tulone;Daniele;;;',
  'FN:Daniele Tulone',
  'TITLE:CTO & AI Lead',
  'ORG:Spods',
  'TEL;TYPE=CELL:+39XXXXXXXXXX',
  'EMAIL;TYPE=INTERNET:daniele@tulone.dev',
  'URL:https://danieletulone.com',
  'URL:https://linkedin.com/in/daniele-tulone-994b38173',
  'URL:https://github.com/danieletulone',
  'NOTE:AI-native engineer. Agentic code\\, Claude Code skills\\, security & compliance.',
  'END:VCARD',
].join('\n');

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniele-tulone-994b38173', description: 'DMs are open.' },
  { label: 'GitHub', href: 'https://github.com/danieletulone', description: 'Open source & contributions.' },
];

export function QRHero() {
  const blob = new Blob([VCARD], { type: 'text/vcard' });
  const downloadUrl = URL.createObjectURL(blob);

  return (
    <div className="flex flex-col items-center md:items-end gap-3">
      <div className="bg-white p-5 sm:p-6 rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:shadow-border/20">
        <QRCodeSVG
          value={VCARD}
          size={240}
          level="M"
          marginSize={0}
          className="w-[160px] h-[160px] sm:w-[240px] sm:h-[240px]"
          role="img"
          aria-label="QR code containing Daniele Tulone's contact information"
        />
      </div>
      <a
        href={downloadUrl}
        download="daniele-tulone.vcf"
        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-full hover:bg-accent hover:border-ring transition-all duration-200"
      >
        Download .vcf
      </a>
    </div>
  );
}

export function ContactLinks() {
  return (
    <div className="flex flex-col gap-1">
      {LINKS.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-baseline gap-2 py-2 animate-fade-up transition-colors duration-200"
          style={{ animationDelay: `${300 + i * 80}ms` }}
        >
          <span className="text-sm text-foreground group-hover:text-muted transition-colors duration-200">{link.label}</span>
          <span className="text-xs text-muted">{link.description}</span>
        </a>
      ))}
    </div>
  );
}
