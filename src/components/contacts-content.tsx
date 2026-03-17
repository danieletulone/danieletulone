'use client';

import { useState, useEffect, useCallback } from 'react';
import { useTranslations } from 'next-intl';
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

export function QRHero() {
  const t = useTranslations('contacts');
  const [downloadUrl, setDownloadUrl] = useState<string>('#');

  useEffect(() => {
    const blob = new Blob([VCARD], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    setDownloadUrl(url);
    return () => URL.revokeObjectURL(url);
  }, []);

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
    <div className="flex flex-col items-center md:items-end gap-3">
      <div className="bg-white p-5 sm:p-6 rounded-2xl transition-shadow duration-300 hover:shadow-xl hover:shadow-border/20">
        <QRCodeSVG
          value={VCARD}
          size={240}
          level="M"
          marginSize={0}
          className="w-[160px] h-[160px] sm:w-[240px] sm:h-[240px]"
          role="img"
          aria-label={t('qrAlt')}
        />
      </div>
      <button
        onClick={handleDownload}
        className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-full hover:bg-accent hover:border-ring transition-all duration-200"
      >
        {t('downloadVcf')}
      </button>
    </div>
  );
}

export function ContactLinks() {
  const t = useTranslations('contacts');

  const LINKS = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniele-tulone-994b38173', description: t('linkedinDescription') },
    { label: 'GitHub', href: 'https://github.com/danieletulone', description: t('githubDescription') },
  ];

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
