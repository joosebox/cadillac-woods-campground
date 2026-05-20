import { Metadata } from 'next';
import { parkFeatures, siteInfo } from '@/lib/site-content';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.cadillacwoodsmi.com';

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteInfo.name} | Tustin, MI Campground`,
    template: `%s | ${siteInfo.name}`,
  },
  description:
    'Cadillac Woods Campground is a wooded Tustin, Michigan campground near Cadillac, Lake Cadillac, and Lake Mitchell with RV, rustic, and cabin stays booked through Campspot.',
  keywords: [
    'Cadillac Woods Campground',
    'Tustin MI campground',
    'RV camping near Cadillac MI',
    'cabins near Lake Cadillac',
    'campground near Lake Mitchell',
    'Northern Michigan campground',
  ],
  authors: [{ name: siteInfo.name }],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteInfo.name,
    title: `${siteInfo.name} | Tustin, MI Campground`,
    description:
      'A wooded campground near Cadillac, Michigan with RV, rustic, and cabin stays booked through Campspot.',
    url: siteUrl,
    images: [
      {
        url: '/images/gallery/office-wide-view.jpeg',
        width: 1200,
        height: 630,
        alt: 'Cadillac Woods Campground office and wooded camping area',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteInfo.name} | Tustin, MI Campground`,
    description:
      'A wooded campground near Cadillac, Michigan with RV, rustic, and cabin stays booked through Campspot.',
    images: ['/images/gallery/office-wide-view.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export function generateJsonLd() {
  const confirmedAmenityNames = [
    ...parkFeatures,
    'Clean, temperature-controlled restrooms',
    'Wood delivery to campsite on request',
  ];

  return {
    '@context': 'https://schema.org',
    '@type': 'Campground',
    name: siteInfo.name,
    description:
      'Wooded campground in Tustin, Michigan near the Cadillac area with RV, rustic, and cabin stays booked through Campspot.',
    url: siteUrl,
    telephone: siteInfo.phone,
    email: siteInfo.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23163 M115',
      addressLocality: 'Tustin',
      addressRegion: 'MI',
      postalCode: '49688',
      addressCountry: 'US',
    },
    amenityFeature: confirmedAmenityNames.map((name) => ({
      '@type': 'LocationFeatureSpecification',
      name,
    })),
    reservationAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: siteInfo.bookingUrl,
      },
    },
  };
}
