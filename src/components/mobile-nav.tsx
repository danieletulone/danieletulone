'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ButtonWithSlidingText from '@/components/button-with-sliding-text';
import ThemeToggle from '@/components/theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contacts', label: 'Contacts' },
];

const socials = [
  { href: 'https://github.com/danieletulone', label: 'github' },
  { href: 'https://x.com/_toolone_', label: 'x.com' },
  { href: 'https://linkedin.com/in/daniele-tulone-994b38173', label: 'linkedin' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="md:hidden flex items-center justify-end gap-1">
      <ThemeToggle />
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        className="relative z-[110] w-10 h-10 flex items-center justify-center rounded-full text-foreground focus-ring"
      >
        <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        <div className="flex flex-col gap-[5px]">
          <span
            className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center motion-reduce:transition-none ${
              open ? 'rotate-45 translate-y-[3.25px]' : ''
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-current transition-all duration-300 origin-center motion-reduce:transition-none ${
              open ? '-rotate-45 -translate-y-[3.25px]' : ''
            }`}
          />
        </div>
      </button>

      {open && (
        <nav
          id="mobile-nav-menu"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-[100] bg-background flex flex-col justify-between p-4 pt-18 sm:p-8 sm:pt-18 animate-menu-in motion-reduce:animate-none"
        >
          <div className="flex-1 flex flex-col justify-center gap-4">
            {links.map((link, i) => (
              <div
                key={link.href}
                className="animate-menu-item motion-reduce:animate-none"
                style={{ animationDelay: `${120 + i * 60}ms` }}
              >
                <ButtonWithSlidingText
                  href={link.href}
                  size="lg"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </ButtonWithSlidingText>
              </div>
            ))}
          </div>

          <div
            className="animate-menu-item motion-reduce:animate-none"
            style={{ animationDelay: '360ms' }}
          >
            <nav aria-label="Social links" className="flex flex-wrap gap-x-1">
              {socials.map((s) => (
                <ButtonWithSlidingText key={s.label} href={s.href}>
                  {s.label}
                </ButtonWithSlidingText>
              ))}
            </nav>
          </div>
        </nav>
      )}
    </div>
  );
}
