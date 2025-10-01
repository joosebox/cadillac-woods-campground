'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Tent, Trees, Wifi, Car, Users, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { HeroParallax } from '@/components/hero-parallax';
import { FeatureCard } from '@/components/feature-card';
import { BookNowButton } from '@/components/book-now-button';

const features = [
  {
    name: 'RV & Tent Sites',
    description: '37 beautiful wooded sites with water, electric (30/50 amp), and dump station.',
    icon: Car,
  },
  {
    name: 'Rustic Cabins',
    description: '6 charming cabins perfect for a cozy getaway in nature.',
    icon: Tent,
  },
  {
    name: 'Pool & Mini Golf',
    description: 'Cool off in our pool or enjoy a round of mini golf with the family.',
    icon: Wifi,
  },
  {
    name: 'Hiking Trails',
    description: 'Explore beautiful wooded trails right from your campsite.',
    icon: Trees,
  },
  {
    name: 'Family Friendly',
    description: 'Playground, horseshoes, and activities for all ages.',
    icon: Users,
  },
  {
    name: 'Near Lakes',
    description: '10 minutes from Lake Cadillac and Lake Mitchell for boating and fishing.',
    icon: MapPin,
  },
];

const accommodations = [
  {
    title: 'RV Sites',
    price: '$45',
    image: '/images/accommodations/rv-sites-1.jpeg',
    href: '/stays#rv',
    description: 'Full hookups with 30/50 amp service',
  },
  {
    title: 'Tent Sites',
    price: '$25',
    image: '/images/accommodations/rv-sites-2.jpeg',
    href: '/stays#tent',
    description: 'Wooded sites with fire pits',
  },
  {
    title: 'Cozy Cabins',
    price: '$95',
    image: '/images/accommodations/rustic-cabins-1.jpeg',
    href: '/stays#cabin',
    description: 'Rustic charm meets comfort',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Parallax */}
      <HeroParallax />

      {/* Experience Section */}
      <section id="experience" className="section-wrapper py-24 bg-gradient-to-b from-mist-50 to-white">
        <div className="container-custom">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
              37 Beautiful Sites in the
              <br />
              <span className="text-gradient">Heart of Michigan</span>
            </h2>
            <p className="text-xl text-mist-600 max-w-3xl mx-auto leading-relaxed">
              Nestled in the woods just 10 minutes from Lake Cadillac and Lake Mitchell, we offer
              the perfect blend of nature and comfort with modern amenities.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.name}
                name={feature.name}
                description={feature.description}
                icon={feature.icon}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="section-wrapper py-24 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-forest-900 mb-6">
                Experience
                <br />
                <span className="text-gradient">Cadillac Woods</span>
              </h2>
              <p className="text-lg text-mist-600 mb-6 leading-relaxed">
                Located on M-115 in Tustin, our 37-site campground provides the perfect
                basecamp for exploring the Cadillac area. With 10 golf courses nearby, three rivers for canoeing,
                and two beautiful lakes just minutes away.
              </p>

              {/* Feature List */}
              <ul className="space-y-4 mb-8">
                {[
                  'Beautiful wooded sites with privacy and shade',
                  '10 minutes from Lake Cadillac and Lake Mitchell',
                  'Pet-friendly with designated areas',
                  'Pool, mini golf, and playground on-site',
                ].map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-forest-400 to-lake-500 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-mist-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </ul>

              <Link
                href="/amenities"
                className="group inline-flex items-center gap-2 text-forest-600 hover:text-forest-700 font-semibold text-lg transition-colors"
              >
                Explore all amenities
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Image with Glass Overlay */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-[32px] overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/gallery/office-building.jpeg"
                alt="Cadillac Woods main office building"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/40 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="section-wrapper py-24 bg-gradient-to-b from-white to-mist-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest-900 mb-6">
              Choose Your
              <br />
              <span className="text-gradient">Perfect Stay</span>
            </h2>
          </motion.div>

          {/* Accommodation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {accommodations.map((accommodation, i) => (
              <motion.div
                key={accommodation.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link href={accommodation.href} className="group block">
                  <div className="relative h-80 rounded-[32px] overflow-hidden shadow-xl mb-4">
                    <Image
                      src={accommodation.image}
                      alt={accommodation.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/30 to-transparent" />

                    {/* Glass Content Card */}
                    <div className="absolute bottom-6 left-6 right-6 glass-dark rounded-2xl p-6 transform group-hover:-translate-y-2 transition-all duration-500">
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {accommodation.title}
                      </h3>
                      <p className="text-mist-200 text-sm mb-3">{accommodation.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">
                          From {accommodation.price}
                          <span className="text-sm text-mist-300">/night</span>
                        </span>
                        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <Link
              href="/stays"
              className="inline-flex items-center justify-center px-8 py-4 glass-interactive rounded-2xl text-forest-900 font-semibold text-lg hover:scale-105 transition-transform"
            >
              View All Accommodations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section with Gradient Background */}
      <section className="section-wrapper relative py-32 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-600 via-forest-700 to-forest-900" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-lake-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-forest-400/20 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-[40px] p-12 md:p-16 text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Your Northern Michigan
              <br />
              Adventure Awaits
            </h2>
            <p className="text-xl text-mist-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Book your stay today and experience the natural beauty of Northern Michigan
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <BookNowButton size="lg" variant="secondary" source="cta_bottom" />
              <a
                href="tel:+12318252012"
                className="group inline-flex items-center gap-3 px-8 py-4 glass-button rounded-2xl text-white font-semibold text-lg"
              >
                <Phone className="w-5 h-5" />
                (231) 825-2012
              </a>
            </div>

            {/* Contact Options */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div className="glass-subtle rounded-2xl p-4 text-left">
                <Mail className="w-6 h-6 text-lake-300 mb-2" />
                <p className="text-sm text-mist-300 mb-1">Email Us</p>
                <a
                  href="mailto:info@cadillacwoods.com"
                  className="text-white hover:text-lake-300 transition-colors"
                >
                  info@cadillacwoods.com
                </a>
              </div>
              <div className="glass-subtle rounded-2xl p-4 text-left">
                <Calendar className="w-6 h-6 text-lake-300 mb-2" />
                <p className="text-sm text-mist-300 mb-1">Season</p>
                <p className="text-white">May 1st - October 31st</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
