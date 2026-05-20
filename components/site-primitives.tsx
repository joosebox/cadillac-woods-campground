import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('reveal-on-scroll relative py-16 sm:py-20 lg:py-24', className)}>
      {children}
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mb-10 max-w-3xl text-forest-950', className)}>
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-lake-700">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-current sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {children && <div className="mt-5 text-lg leading-8 text-mist-700">{children}</div>}
    </div>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center gap-2 text-sm font-semibold text-forest-800 transition hover:text-lake-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-500 focus-visible:ring-offset-4',
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function PhotoFrame({
  src,
  alt,
  className,
  imgClassName,
  priority,
  sizes = '(max-width: 768px) 100vw, 50vw',
}: {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={cn('group relative overflow-hidden rounded-[1.75rem] bg-mist-100 shadow-soft', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn('object-cover transition duration-700 group-hover:scale-[1.03]', imgClassName)}
      />
    </div>
  );
}

export function StatusPill({
  children,
  tone = 'forest',
}: {
  children: React.ReactNode;
  tone?: 'forest' | 'lake' | 'campfire' | 'mist';
}) {
  const tones = {
    forest: 'border-forest-200 bg-forest-50 text-forest-900',
    lake: 'border-lake-200 bg-lake-50 text-lake-900',
    campfire: 'border-campfire-200 bg-campfire-50 text-campfire-900',
    mist: 'border-mist-200 bg-white text-mist-700',
  };

  return (
    <span className={cn('inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]', tones[tone])}>
      {children}
    </span>
  );
}
