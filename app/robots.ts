import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/temp/',
          '/*.json$',
          '/*.xml$',
        ],
      },
      // Allow search engines to access sitemap and other important files
      {
        userAgent: '*',
        allow: [
          '/sitemap.xml',
          '/manifest.json',
          '/favicon.ico',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}