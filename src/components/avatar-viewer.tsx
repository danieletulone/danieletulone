'use client';

import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';

export function AvatarViewer({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = 'hidden';

    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open, close]);

  return (
    <>
      <button onClick={() => setOpen(true)} className="focus-ring rounded-full flex-shrink-0">
        <img
          src={src}
          alt={alt}
          className="w-8 h-8 rounded-full object-cover cursor-pointer transition-transform duration-200 hover:scale-110"
        />
      </button>

      {open && mounted && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} — full size`}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 cursor-pointer"
          style={{ animation: 'fade-in 0.2s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}
          onClick={close}
        >
          <button
            onClick={close}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full text-white/60 hover:text-white transition-colors duration-200 focus-ring"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img
            src={src}
            alt={alt}
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover"
            style={{ animation: 'scale-in 0.3s cubic-bezier(0.25, 1, 0.5, 1) forwards' }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body
      )}
    </>
  );
}
