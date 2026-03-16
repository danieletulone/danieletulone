'use client';

import { useCallback } from 'react';
import { QRCodeSVG } from 'qrcode.react';

const VCARD = [
  'BEGIN:VCARD',
  'VERSION:3.0',
  'N:Tulone;Daniele;;;',
  'FN:Daniele Tulone',
  'TITLE:CTO & AI Lead',
  'ORG:Spods',
  'TEL;TYPE=CELL:+393513837382',
  'EMAIL;TYPE=INTERNET:danieletulone.work@gmail.com',
  'URL:https://danieletulone.vercel.app',
  'URL:https://linkedin.com/in/daniele-tulone-994b38173',
  'URL:https://github.com/danieletulone',
  'NOTE:AI-native engineer. Agentic code\\, Claude Code skills\\, security & compliance.',
  'END:VCARD',
].join('\n');

const LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniele-tulone-994b38173', description: 'Best way to reach me — DMs are open.' },
  { label: 'GitHub', href: 'https://github.com/danieletulone', description: 'Open source projects and contributions.' },
];

export function VCardQR() {
  const handleDownload = useCallback(() => {
    const blob = new Blob([VCARD], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'daniele-tulone.vcf';
    a.click();
    URL.revokeObjectURL(url);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
      <div className="flex flex-col items-center gap-3 animate-scale-in">
        <div className="bg-white p-4 rounded-xl transition-shadow duration-300 hover:shadow-lg hover:shadow-border/30">
          <QRCodeSVG
            value={VCARD}
            size={180}
            level="M"
            marginSize={0}
          />
        </div>
        <button
          onClick={handleDownload}
          className="text-xs text-muted hover:text-foreground transition-colors duration-200"
        >
          Download .vcf
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-sm text-muted animate-fade-in" style={{ animationDelay: '150ms' }}>
          Scan the QR code to save my contact, or reach out through one of the links below.
        </p>
        <div className="flex flex-col gap-3">
          {LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-0.5 rounded-lg border border-border p-4 animate-fade-up transition-[background-color,border-color,transform] duration-200 hover:bg-accent hover:border-ring hover:translate-x-0.5"
              style={{ animationDelay: `${250 + i * 100}ms` }}
            >
              <span className="text-sm font-medium text-foreground">{link.label}</span>
              <span className="text-xs text-muted group-hover:text-foreground transition-colors duration-200">{link.description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
