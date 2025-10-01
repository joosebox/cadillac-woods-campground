'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  name: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
  className?: string;
}

export function FeatureCard({
  name,
  description,
  icon: Icon,
  delay = 0,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      className={cn(
        'group glass-subtle rounded-3xl p-8 transition-all duration-500 hover:glass-interactive',
        className
      )}
    >
      {/* Icon Container with Glow */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative mb-6 w-16 h-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-forest-400 to-lake-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-opacity duration-500" />
        <div className="relative flex items-center justify-center w-full h-full bg-gradient-to-br from-forest-500 to-lake-600 rounded-2xl">
          <Icon className="w-8 h-8 text-white" />
        </div>
      </motion.div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors duration-300">
        {name}
      </h3>
      <p className="text-mist-600 leading-relaxed group-hover:text-mist-700 transition-colors duration-300">
        {description}
      </p>

      {/* Decorative Element */}
      <div className="mt-6 h-1 w-0 bg-gradient-to-r from-forest-400 to-lake-500 rounded-full group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}
