'use client';

import { trackBookNowClick } from '@/lib/analytics';
import { cn } from '@/lib/utils';

interface BookNowButtonProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary';
  source: string;
  children?: React.ReactNode;
}

export function BookNowButton({
  className,
  size = 'md',
  variant = 'primary',
  source,
  children = 'Book Now',
}: BookNowButtonProps) {
  const bookingUrl = process.env.NEXT_PUBLIC_CAMPSPOT_BASE_URL || '#';

  const handleClick = () => {
    trackBookNowClick(source);
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary:
      'bg-white text-primary-700 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500',
  };

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'transform hover:-translate-y-0.5',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label={`Book now - opens in new window`}
    >
      {children}
      <svg
        className="ml-2 -mr-1 h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  );
}