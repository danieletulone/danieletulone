'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  function switchLocale() {
    const next = locale === 'en' ? 'it' : 'en';
    router.replace(pathname, { locale: next });
  }

  return (
    <button
      onClick={switchLocale}
      aria-label={`Switch to ${locale === 'en' ? 'Italiano' : 'English'}`}
      className="w-8 h-8 flex items-center justify-center rounded-full text-xs font-medium text-muted hover:text-foreground transition-colors duration-200 focus-ring"
    >
      {locale.toUpperCase()}
    </button>
  );
}
