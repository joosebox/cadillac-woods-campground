'use client';

import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryImage } from '@/lib/site-content';

export function GalleryClient({ images }: { images: GalleryImage[] }) {
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const currentImage = currentIndex === null ? null : images[currentIndex];

  const close = useCallback(() => setCurrentIndex(null), []);
  const showNext = useCallback(
    () => setCurrentIndex((index) => (index === null ? 0 : Math.min(index + 1, images.length - 1))),
    [images.length]
  );
  const showPrevious = useCallback(() => setCurrentIndex((index) => (index === null ? 0 : Math.max(index - 1, 0))), []);

  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [close, currentIndex, showNext, showPrevious]);

  return (
    <>
      <div className="grid auto-rows-[18rem] gap-4 md:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            onClick={() => setCurrentIndex(index)}
            className={[
              'lift-card group relative overflow-hidden rounded-[1.5rem] bg-mist-100 text-left shadow-sm hover:shadow-soft focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500',
              index === 0 || index === 4 ? 'md:col-span-2 md:row-span-2' : '',
            ].join(' ')}
          >
            <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-700 group-hover:scale-105" />
            <span className="absolute inset-0 bg-gradient-to-t from-forest-950/86 via-forest-950/16 to-transparent" />
            <span className="absolute bottom-0 left-0 right-0 p-5 text-white">
              <span className="block text-lg font-semibold">{image.title}</span>
              <span className="mt-1 block text-sm leading-6 text-mist-200">{image.caption}</span>
            </span>
          </button>
        ))}
      </div>

      {currentImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={currentImage.title}
          className="animate-cw-fade-in fixed inset-0 z-[70] grid place-items-center bg-forest-950/92 p-4 backdrop-blur"
        >
          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-300"
            aria-label="Close gallery image"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showPrevious}
            disabled={currentIndex === 0}
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-30 sm:block"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={showNext}
            disabled={currentIndex === images.length - 1}
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 disabled:opacity-30 sm:block"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>

          <div className="animate-cw-dialog-in w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white shadow-soft">
            <div className="relative h-[58vh] min-h-80 bg-forest-950">
              <Image src={currentImage.src} alt={currentImage.alt} fill sizes="90vw" className="object-contain" />
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-lake-800">
                {currentIndex === null ? 0 : currentIndex + 1} of {images.length}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-forest-950">{currentImage.title}</h2>
              <p className="mt-2 text-sm leading-6 text-mist-700">{currentImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
