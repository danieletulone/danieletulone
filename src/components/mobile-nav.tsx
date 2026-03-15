'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import ThemeToggle from '@/components/theme-toggle';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/contacts', label: 'Contacts' },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
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

    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) close();
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, close]);

  return (
    <div ref={navRef} className="md:hidden flex items-center justify-end gap-1">
      <ThemeToggle />
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        aria-controls="mobile-nav-menu"
        className="w-10 h-10 flex items-center justify-center rounded-full text-foreground focus-ring"
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
          className="absolute top-full right-0 mt-2 mr-4 sm:mr-8 z-50
                     bg-accent/95 backdrop-blur-lg
                     rounded-2xl p-2 min-w-[160px] border border-border
                     animate-dropdown-in motion-reduce:animate-none"
        >
          <ul className="flex flex-col">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-4 text-sm text-foreground
                             rounded-xl hover:bg-background transition-colors
                             focus-ring focus-visible:!outline-offset-[-2px]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
}
