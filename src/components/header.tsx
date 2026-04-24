'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import ButtonWithSlidingText from '@/components/button-with-sliding-text';
import MobileNav from '@/components/mobile-nav';
import { AvatarViewer } from '@/components/avatar-viewer';
import ThemeToggle from '@/components/theme-toggle';

export default function Header() {
  const t = useTranslations('nav');
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      if (y <= 0) {
        setHidden(false);
      } else if (delta > 4) {
        setHidden(true);
      } else if (delta < -4) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`grid grid-cols-2 md:grid-cols-3 gap-4 relative sticky top-0 z-50 px-4 sm:px-8 py-4 sm:py-8 transition-transform duration-300 ease-out ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div
        className="self-center animate-fade-up flex items-center gap-3 bg-accent/60 backdrop-blur-lg rounded-full pl-1 pr-4 py-1 w-fit border border-border/40"
        style={{ animationDelay: '0ms' }}
      >
        <AvatarViewer src="/daniele-tulone.jpeg" alt="Daniele Tulone" />
        <a href="/">
          <div className="text-sm text-foreground font-bold">Daniele Tulone</div>
          <div className="text-xs text-muted">CTO & AI Lead</div>
        </a>
      </div>

      <div className="hidden md:flex justify-center self-center animate-fade-up" style={{ animationDelay: '80ms' }}>
        <nav
          aria-label="Main navigation"
          className="bg-accent/60 backdrop-blur-lg rounded-4xl flex items-center p-1 border border-border/40"
        >
          <ul className="flex gap-x-2">
            <li>
              <ButtonWithSlidingText href="/" size="sm">{t('home')}</ButtonWithSlidingText>
            </li>
            <li>
              <ButtonWithSlidingText href="/about" size="sm">{t('about')}</ButtonWithSlidingText>
            </li>
            <li>
              <ButtonWithSlidingText href="/docs" size="sm">{t('docs')}</ButtonWithSlidingText>
            </li>
            <li>
              <ButtonWithSlidingText href="/contacts" size="sm">{t('contacts')}</ButtonWithSlidingText>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className="hidden md:flex justify-self-end self-center items-center gap-1 animate-fade-up bg-accent/60 backdrop-blur-lg rounded-full p-1 border border-border/40"
        style={{ animationDelay: '80ms' }}
      >
        <ThemeToggle />
        <ButtonWithSlidingText variant="bordered" href="/contacts">
          {t('getInTouch')}
        </ButtonWithSlidingText>
      </div>

      <MobileNav />
    </header>
  );
}
