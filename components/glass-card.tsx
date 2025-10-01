'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'light' | 'subtle';
  interactive?: boolean;
  delay?: number;
}

const variantClasses = {
  default: 'glass',
  dark: 'glass-dark',
  light: 'glass-light',
  subtle: 'glass-subtle',
};

export function GlassCard({
  children,
  className,
  variant = 'default',
  interactive = false,
  delay = 0,
}: GlassCardProps) {
  const baseClass = interactive ? 'glass-interactive' : variantClasses[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(baseClass, 'rounded-3xl p-6', className)}
    >
      {children}
    </motion.div>
  );
}
