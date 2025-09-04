'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { BookNowButton } from './book-now-button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Stays & Rates', href: '/stays' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Park Map', href: '/map' },
  { name: 'Policies', href: '/policies' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Campground';
  const phone = process.env.NEXT_PUBLIC_SITE_PHONE;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50">
        Skip to main content
      </a>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-700">{siteName}</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            {phone && (
              <a
                href={`tel:${phone}`}
                className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                aria-label={`Call us at ${phone}`}
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">{phone}</span>
              </a>
            )}
            <BookNowButton source="header" size="sm" />
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={cn(
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileMenuOpen ? 'max-h-96' : 'max-h-0'
          )}
        >
          <nav className="py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-200">
              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="flex items-center px-3 py-2 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {phone}
                </a>
              )}
              <div className="px-3 py-2">
                <BookNowButton source="mobile_header" size="md" className="w-full" />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}