import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';
import { BookNowButton } from '@/components/book-now-button';
import { navigation, siteInfo } from '@/lib/site-content';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-950 pb-24 text-white lg:pb-0" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr_1fr]">
          <div>
            <div className="relative mb-5 h-24 w-36 overflow-hidden rounded-[1.5rem] border border-white/10 bg-forest-900 shadow-soft">
              <Image
                src={siteInfo.logo}
                alt={`${siteInfo.name} logo`}
                fill
                sizes="144px"
                className="object-contain p-2"
              />
            </div>
            <h2 className="text-2xl font-semibold tracking-tight">{siteInfo.name}</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-mist-300">
              A wooded Tustin campground near Cadillac-area lakes, town stops, and family-friendly
              camp time.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <BookNowButton source="footer" variant="secondary" size="md" className="rounded-full" />
              <a
                href={siteInfo.directionsHref}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-lake-300"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Explore</h3>
            <ul className="mt-5 grid gap-3 text-sm text-mist-300">
              {navigation.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="soft-link-underline transition hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-lake-200">Contact</h3>
            <ul className="mt-5 grid gap-4 text-sm text-mist-300">
              <li>
                <a href={siteInfo.phoneHref} className="flex items-start gap-3 transition hover:text-white">
                  <Phone className="mt-0.5 h-4 w-4 flex-none text-lake-200" aria-hidden="true" />
                  {siteInfo.phone}
                </a>
              </li>
              <li>
                <a href={siteInfo.emailHref} className="flex items-start gap-3 transition hover:text-white">
                  <Mail className="mt-0.5 h-4 w-4 flex-none text-lake-200" aria-hidden="true" />
                  {siteInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-lake-200" aria-hidden="true" />
                {siteInfo.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 text-xs leading-6 text-mist-400 lg:flex-row lg:items-center lg:justify-between">
            <p>
              © {currentYear} {siteInfo.name}. Current rates and availability are handled through Campspot.
            </p>
            <p>Questions before booking? Call {siteInfo.phone}.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
