'use client';

import { useEffect, useState } from 'react';
import { Phone } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { siteInfo } from '@/lib/site-content';
import { cn } from '@/lib/utils';

export function MobileActionBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisible = () => setVisible(window.scrollY > 160);
    updateVisible();
    window.addEventListener('scroll', updateVisible, { passive: true });
    return () => window.removeEventListener('scroll', updateVisible);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-x-0 bottom-0 z-50 border-t border-white/30 bg-white/95 px-4 py-3 shadow-[0_-18px_40px_rgba(15,26,22,0.14)] backdrop-blur transition-[opacity,transform] duration-300 lg:hidden',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      )}
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href={siteInfo.phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest-200 bg-white px-4 text-sm font-semibold text-forest-950 shadow-sm transition hover:bg-forest-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500 focus-visible:ring-offset-2"
          aria-label={`Call ${siteInfo.name}`}
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call
        </a>
        <BookNowButton source="mobile_action_bar" size="md" className="min-h-12 rounded-full" />
      </div>
    </div>
  );
}
