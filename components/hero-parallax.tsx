'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookNowButton } from './book-now-button';

export function HeroParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax effects for different layers
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <Image
          src="/images/gallery/office-wide-view.jpeg"
          alt="Cadillac Woods Campground - Northern Michigan&apos;s Premier Camping Destination"
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-900/60 via-forest-900/40 to-forest-900/70" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Glass Card Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          className="glass-dark rounded-[32px] p-8 md:p-12 lg:p-16 text-center max-w-4xl mx-auto"
        >
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lake-300 text-sm md:text-base font-medium tracking-wider uppercase mb-4"
          >
            Northern Michigan&apos;s Hidden Gem
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Where Forest
            <br />
            <span className="text-gradient bg-gradient-to-r from-forest-300 via-lake-400 to-lake-300 bg-clip-text text-transparent">
              Meets Lake
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-mist-100 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            37 wooded sites • 6 rustic cabins • 10 minutes from Lake Cadillac & Lake Mitchell
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <BookNowButton size="lg" source="hero" />
            <a
              href="#experience"
              className="glass-button px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Explore Amenities
            </a>
          </motion.div>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto"
        >
          {[
            { number: '37', label: 'Campsites' },
            { number: '6', label: 'Cabins' },
            { number: '10min', label: 'To Lakes' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
              className="glass-subtle rounded-2xl p-4 text-center backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                {stat.number}
              </div>
              <div className="text-xs md:text-sm text-mist-300 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-white/40 rounded-full p-1"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-3 bg-white/60 rounded-full mx-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
