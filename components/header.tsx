'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Menu, Phone, X } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { navigation, siteInfo } from '@/lib/site-content';
import { cn } from '@/lib/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 24);
    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });
    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b backdrop-blur-xl transition-[background-color,border-color,box-shadow] duration-300',
        isScrolled ? 'border-forest-950/10 bg-white/95 shadow-[0_12px_34px_rgba(15,26,22,0.08)]' : 'border-forest-950/10 bg-white/90'
      )}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest-950 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-300 sm:px-6 lg:px-8',
          isScrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-[4.5rem]'
        )}
      >
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500 focus-visible:ring-offset-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          <span
            className={cn(
              'grid flex-none place-items-center rounded-2xl bg-forest-950 text-sm font-black text-white shadow-soft transition-[height,width,border-radius] duration-300',
              isScrolled ? 'h-9 w-9 rounded-xl' : 'h-10 w-10'
            )}
          >
            CW
          </span>
          <span className="min-w-0">
            <span className="block truncate text-base font-semibold tracking-tight text-forest-950 sm:text-lg">
              {siteInfo.shortName}
            </span>
            <span className="hidden text-xs font-medium text-mist-600 sm:block">{siteInfo.locationLine}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="soft-link-underline rounded-full px-3 py-2 text-sm font-semibold text-mist-700 transition hover:text-forest-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500 focus-visible:ring-offset-2"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={siteInfo.phoneHref}
            className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-forest-900 transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500 focus-visible:ring-offset-2"
            aria-label={`Call ${siteInfo.name} at ${siteInfo.phone}`}
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="whitespace-nowrap">{siteInfo.phone}</span>
          </a>
          <BookNowButton source="header" size="sm" className="rounded-full" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest-950/10 bg-white text-forest-950 shadow-sm transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500 focus-visible:ring-offset-2 xl:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={cn(
          'overflow-hidden border-t border-forest-950/10 bg-white transition-[max-height,opacity,transform] duration-300 xl:hidden',
          mobileMenuOpen ? 'max-h-[30rem] translate-y-0 opacity-100' : 'max-h-0 -translate-y-2 opacity-0'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8" aria-label="Mobile navigation">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-base font-semibold text-forest-950 transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid gap-3 border-t border-forest-950/10 pt-4 sm:grid-cols-2">
            <a
              href={siteInfo.phoneHref}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest-200 bg-white px-5 font-semibold text-forest-950"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {siteInfo.phone}
            </a>
            <BookNowButton source="mobile_header" size="md" className="min-h-12 rounded-full" />
          </div>
        </nav>
      </div>
    </header>
  );
}
