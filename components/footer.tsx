import Link from 'next/link';
import { Facebook, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const footerLinks = {
  explore: [
    { name: 'Stays & Rates', href: '/stays' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Park Map', href: '/map' },
    { name: 'Gallery', href: '/gallery' },
  ],
  information: [
    { name: 'Policies', href: '/policies' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Directions', href: '/contact#directions' },
    { name: 'Local Area', href: '/contact#local-area' },
  ],
};

export function Footer() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Campground';
  const phone = process.env.NEXT_PUBLIC_SITE_PHONE;
  const address = process.env.NEXT_PUBLIC_SITE_ADDRESS;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-4">{siteName}</h2>
            <p className="text-sm mb-4">
              Your gateway to nature and adventure in Northern Michigan. Experience comfort and
              tranquility in our beautiful campground.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={`mailto:info@campground.com`}
                className="hover:text-white transition-colors"
                aria-label="Send us an email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Information</h3>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              {phone && (
                <li>
                  <a
                    href={`tel:${phone}`}
                    className="flex items-start hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                    {phone}
                  </a>
                </li>
              )}
              {address && (
                <li className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{address}</span>
                </li>
              )}
              <li className="flex items-start">
                <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Office Hours:</p>
                  <p className="text-xs mt-1">Mon-Fri: 8AM-6PM</p>
                  <p className="text-xs">Sat-Sun: 8AM-8PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {siteName}. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/policies#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/policies#terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}