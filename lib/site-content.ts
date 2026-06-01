export type ContentStatus = 'confirmed' | 'owner-note' | 'web-researched' | 'todo';

export interface ContentNote {
  label: string;
  status: ContentStatus;
  text: string;
}

export interface SiteInfo {
  name: string;
  shortName: string;
  logo: string;
  logoMark: string;
  tagline: string;
  locationLine: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  address: string;
  directionsHref: string;
  bookingUrl: string;
  campspotListingUrl: string;
  campspotMapUrl: string;
  season: string;
}

export interface StayType {
  id: 'rv' | 'rustic' | 'cabin';
  name: string;
  shortName: string;
  summary: string;
  bestFor: string;
  image: string;
  imageAlt: string;
  status: ContentStatus;
  startingRate: string;
  campspotInventory: string;
  highlights: string[];
  askAbout: string[];
  campspotAmenities: string[];
  campspotVariants: string[];
}

export interface AmenityGroup {
  title: string;
  label: string;
  status: ContentStatus;
  description: string;
  items: string[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: GalleryCategoryId;
}

export type GalleryCategoryId = 'arrival' | 'sites' | 'cabins' | 'amenities' | 'events';

export interface GalleryCategory {
  id: GalleryCategoryId;
  label: string;
  description: string;
}

export interface CampspotMetric {
  label: string;
  value: string;
  note?: string;
}

export interface CampspotSiteCard {
  category: 'Lodging' | 'RV Sites' | 'Tent Sites';
  name: string;
  startingAt: string;
  availableLocations: string;
  details?: string;
  amenities: string[];
  vehicleFit?: string;
}

export interface PolicyQuickFact {
  label: string;
  text: string;
}

export type PolicyCategory = 'Booking & rates' | 'Arrival & sites' | 'Pets & conduct' | 'Utilities & services';

export interface PolicyItem {
  category: PolicyCategory;
  question: string;
  answer: string;
}

export const siteInfo: SiteInfo = {
  name: 'Cadillac Woods Campground',
  shortName: 'Cadillac Woods',
  logo: '/images/brand/cadillac-woods-logo.png',
  logoMark: '/images/brand/cadillac-woods-tree-mark.svg',
  tagline: 'Family-owned wooded stays near Cadillac, Michigan',
  locationLine: 'M-115 in Tustin, minutes from the Cadillac area',
  phone: '(231) 825-2012',
  phoneHref: 'tel:+12318252012',
  email: 'cadillacwoodsmi@gmail.com',
  emailHref: 'mailto:cadillacwoodsmi@gmail.com',
  address: '23163 M115, Tustin, MI 49688',
  directionsHref:
    'https://www.google.com/maps/search/?api=1&query=23163%20M115%20Tustin%20MI%2049688',
  bookingUrl:
    process.env.NEXT_PUBLIC_CAMPSPOT_BASE_URL ||
    'https://www.campspot.com/park/cadillac-woods-campground-tustin-mi',
  campspotListingUrl: 'https://www.campspot.com/park/cadillac-woods-campground-tustin-mi',
  campspotMapUrl:
    'https://www.campspot.com/park/cadillac-woods-campground-tustin-mi/map?location=Tustin,%20MI&latitude=44.149146&longitude=-85.323623&adults=0&children=0&pets=0',
  season: 'Spring, summer, and fall camping',
};

export const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Stays', href: '/stays' },
  { name: 'Amenities', href: '/amenities' },
  { name: 'Map', href: '/map' },
  { name: 'Policies', href: '/policies' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export const stayTypes: StayType[] = [
  {
    id: 'rv',
    name: 'RV Sites',
    shortName: 'RV',
    summary:
      'Wooded RV sites with electric and water access, plus dump station and honeywagon service options.',
    bestFor: 'Campers bringing a trailer or motorhome who want shade, easy arrival, and quick booking through Campspot.',
    image: '/images/accommodations/new/fall-rv-sites.jpg',
    imageAlt: 'RV campers parked beneath tall trees at Cadillac Woods',
    status: 'web-researched',
    startingRate: '$45/night',
    campspotInventory: '27 RV locations listed between 30 AMP/Water and 30/50 AMP/Water options',
    highlights: [
      '30 AMP/Water and 30/50 AMP/Water options',
      'Back-in and pull-through options',
      'Dump station available',
      'Honeywagon dump service for a fee',
    ],
    askAbout: ['Rig fit up to 42 feet', '30 amp versus 50 amp placement', 'Specific site location'],
    campspotAmenities: ['30-Amp', '50-Amp', 'Back-In', 'Pull-Through', 'Pet-Friendly', 'Picnic Table', 'Water Hook-Up'],
    campspotVariants: ['30/50 AMP/Water RV Site', '30 AMP/Water RV Site'],
  },
  {
    id: 'rustic',
    name: 'Rustic & Tent Sites',
    shortName: 'Rustic',
    summary:
      'Simple wooded camping for guests who want trees, camp time, and a classic Northern Michigan outdoors feel.',
    bestFor: 'Tent campers and rustic-site guests who care more about trees, fire rings, and a quiet basecamp.',
    image: '/images/accommodations/new/wooded-site-a.jpg',
    imageAlt: 'Wooded rustic camping area at Cadillac Woods',
    status: 'web-researched',
    startingRate: '$25/night',
    campspotInventory: '7 Rustic Tent Site locations listed',
    highlights: ['Rustic Tent Site option', 'Pet-friendly site listing', 'Fits vehicles up to 30 feet'],
    askAbout: ['Exact rustic setup', 'Vehicle fit', 'Parking', 'Distance to restrooms and family activities'],
    campspotAmenities: ['Pet-Friendly'],
    campspotVariants: ['Rustic Tent Site'],
  },
  {
    id: 'cabin',
    name: 'Cabins',
    shortName: 'Cabins',
    summary:
      'Rental cabins for guests who want a roof overhead while still staying close to the campground atmosphere.',
    bestFor: 'Families and couples who want a simpler overnight setup than hauling camping gear.',
    image: '/images/accommodations/new/cabin-porch-wide.jpg',
    imageAlt: 'Rustic cabin porch surrounded by trees at Cadillac Woods',
    status: 'web-researched',
    startingRate: '$75/night',
    campspotInventory: '6 lodging locations listed across cabin and log cabin options',
    highlights: ['Cabin and log cabin variants', 'Electricity', 'Fire pit, microwave, mini fridge, and patio listed'],
    askAbout: ['Bed setup', 'What to bring', 'Current cabin availability'],
    campspotAmenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge', 'Patio'],
    campspotVariants: [
      'Log Cabin, Twin Bunk Beds',
      'Cabin',
      'Cabin, 1 Full Bed',
      'Cabin, 1 Full, Twin Bunk Beds',
      'Log Cabin, 1 Full Bed',
    ],
  },
];

export const campspotSnapshot = {
  sourceLabel: 'Current Campspot details',
  verifiedDate: 'May 20, 2026',
  priceRange: '$25-$75',
  priceRangeNightly: '$25-$75 a night',
  priceRangeSentence:
    'Starting rates currently range from $25-$75 a night. Click Book Now at the top of the page for site options and final totals.',
  totalAvailableSites: '40 site options before you choose dates',
  siteTypeMetrics: [
    { label: 'All Sites', value: '40' },
    { label: 'Lodging', value: '6' },
    { label: 'RV Sites', value: '34' },
    { label: 'Tent Sites', value: '34' },
  ] satisfies CampspotMetric[],
  review: {
    rating: '5.0',
    count: '1 Campspot review',
    quote:
      'This is a great place to stay, it is quiet and the staff are very friendly and helpful. Highly recommend!',
    attribution: 'Melvin I Henry, March 2026',
    categoryRatings: [
      { label: 'Staff', value: '5.0' },
      { label: 'Cellular', value: '5.0' },
      { label: 'Wifi', value: '2.0', note: 'Camper WiFi is not marketed as an included amenity.' },
      { label: 'Value', value: '5.0' },
      { label: 'Site', value: '5.0' },
      { label: 'Location', value: '5.0' },
      { label: 'Washrooms', value: 'n/a' },
      { label: 'Amenities', value: 'n/a' },
    ] satisfies CampspotMetric[],
  },
  googleReview: {
    ratingSummary: '4.5 from 286 Google reviews',
    quote: 'The grounds are well kept and cabins are very clean and well maintained.',
    attribution: 'Google review snippet',
    sourceUrl: 'https://www.google.com/search?q=cadillac+woods+campground',
  },
  deal: {
    title: 'Monthly Rate',
    text: 'Book with us for a monthly stay and get a discounted monthly rate. Please call the office to book.',
  },
  gallery: {
    text:
      'Open the Campspot listing when you are ready to compare current site options, dates, starting rates, and final booking totals.',
  },
};

export const campspotSiteCards: CampspotSiteCard[] = [
  {
    category: 'Lodging',
    name: 'Log Cabin, Twin Bunk Beds',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    details: 'Cabin 2 with two twin bunk beds',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Cabin',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Cabin, 1 Full Bed',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Cabin, 1 Full, Twin Bunk Beds',
    startingAt: '$75.00/night',
    availableLocations: '2 available locations',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'Lodging',
    name: 'Log Cabin, 1 Full Bed',
    startingAt: '$75.00/night',
    availableLocations: '1 available location',
    amenities: ['Electricity', 'Fire Pit', 'Microwave', 'Mini Fridge'],
  },
  {
    category: 'RV Sites',
    name: '30/50 AMP/Water RV Site',
    startingAt: '$45.00/night',
    availableLocations: '5 available locations',
    amenities: ['50-Amp', 'Back-In', 'Pet-Friendly', 'Picnic Table'],
    vehicleFit: 'Fits vehicles up to 42 feet long',
  },
  {
    category: 'RV Sites',
    name: '30 AMP/Water RV Site',
    startingAt: '$45.00/night',
    availableLocations: '22 available locations',
    amenities: ['30-Amp', 'Back-In', 'Pet-Friendly', 'Picnic Table'],
    vehicleFit: 'Fits vehicles up to 42 feet long',
  },
  {
    category: 'Tent Sites',
    name: 'Rustic Tent Site',
    startingAt: '$25.00/night',
    availableLocations: '7 available locations',
    amenities: ['Pet-Friendly'],
    vehicleFit: 'Fits vehicles up to 30 feet long',
  },
];

export const amenityGroups: AmenityGroup[] = [
  {
    title: 'Available Now',
    label: 'On site now',
    status: 'owner-note',
    description: 'Comfort and convenience around the campground.',
    items: [
      'Clean, temperature-controlled restrooms',
      'Bathrooms',
      'Showers',
      'Clubhouse',
      'General store / camp store',
      'Playground',
      'Mini-golf / putt putt and other games',
      'Pavilion',
      'Garbage service',
      'Special events',
      'Dump station',
      'Laundry (additional cost)',
      'Wood delivery to campsite on request',
    ],
  },
  {
    title: 'Recreation Nearby',
    label: 'Nearby area',
    status: 'web-researched',
    description: 'Cadillac-area recreation for easy day plans.',
    items: [
      'Lake Cadillac and Lake Mitchell nearby',
      'Biking',
      'Boating',
      'Breweries',
      'Fishing',
      'Golfing',
      'Nearby hiking and trail access',
      'Historic sites',
      'Live music',
      'OHV trails',
      'Paddling',
      'Restaurants',
      'Shopping',
      'State parks',
      'Wildlife watching',
      'Wineries',
    ],
  },
  {
    title: 'Coming Soon',
    label: 'Coming soon',
    status: 'owner-note',
    description: 'Campground updates guests can watch for.',
    items: ['Tap-to-pay laundry machines', 'Printable park map'],
  },
  {
    title: 'Good to know',
    label: 'Good to know',
    status: 'owner-note',
    description: 'Helpful details for choosing the right site and packing with confidence.',
    items: [
      'Call the office if connectivity is important for your stay',
      'Dump station access is available for registered guests',
      'Portable honey wagon service is available for a fee',
      'Campspot shows current site options, dates, and final totals',
      'Ask the office for help matching your rig, parking needs, or cabin setup',
    ],
  },
];

export const parkFeatures = [
  'Bathrooms',
  'Clubhouse',
  'Dump Station',
  'Garbage',
  'General Store',
  'Laundry - Additional Cost',
  'Mini-Golf',
  'Pavilion',
  'Playground',
  'Showers',
  'Special Events',
];

export const nearbyActivities = [
  'Biking',
  'Boating',
  'Breweries',
  'Fishing',
  'Golfing',
  'Hiking',
  'Historic Sites',
  'Live Music',
  'OHV Trails',
  'Paddling',
  'Restaurants',
  'Shopping',
  'State Parks',
  'Wildlife Watching',
  'Wineries',
];

export const siteAmenityCounts = [
  { label: '30-Amp', value: '22' },
  { label: '50-Amp', value: '5' },
  { label: 'Back-In', value: '11' },
  { label: 'Electricity', value: '6' },
  { label: 'Fire Pit', value: '6' },
  { label: 'Microwave', value: '6' },
  { label: 'Mini Fridge', value: '6' },
  { label: 'Patio', value: '6' },
  { label: 'Pet-Friendly', value: '40' },
  { label: 'Picnic Table', value: '27' },
  { label: 'Pull-Through', value: '16' },
  { label: 'Water Hook-Up', value: '27' },
] satisfies CampspotMetric[];

export const localHighlights = [
  {
    title: 'Lake Cadillac',
    text: 'A Cadillac-area lake for fishing, boating, paddling, and town-side recreation.',
  },
  {
    title: 'Lake Mitchell',
    text: 'A nearby sister lake connected to Lake Cadillac by the Clam Lake Canal.',
  },
  {
    title: 'Clam Lake Canal',
    text: 'A distinctive local waterway that connects the two lakes and gives the area its own story.',
  },
  {
    title: 'Cadillac Area',
    text: 'Golf, biking, boating, fishing, and small-town stops close enough for an easy basecamp day.',
  },
];

export const bookingTruths: ContentNote[] = [
  {
    label: 'Rates',
    status: 'web-researched',
    text: campspotSnapshot.priceRangeSentence,
  },
  {
    label: 'Availability',
    status: 'web-researched',
    text: 'Campspot shows current site options and open dates when you start a booking.',
  },
  {
    label: 'Questions',
    status: 'confirmed',
    text: 'Call or email Cadillac Woods for help choosing the right site before booking.',
  },
  {
    label: 'Park Map',
    status: 'web-researched',
    text: 'Use the Campspot map for current site selection, or call the office for help choosing a spot.',
  },
];

export const policyQuickFacts: PolicyQuickFact[] = [
  {
    label: 'Age',
    text: 'Reservations must be made by an adult 18 or older.',
  },
  {
    label: 'Check-in',
    text: 'RV and tent check-in is 1 PM. Cabin check-in is 2 PM.',
  },
  {
    label: 'Checkout',
    text: 'RV, tent, and cabin checkout is 11 AM.',
  },
  {
    label: 'Quiet hours',
    text: 'Quiet hours are 10 PM to 8 AM.',
  },
  {
    label: 'Pets',
    text: 'Maximum two pets per site, kept on leash or contained at the campsite.',
  },
  {
    label: 'Speed',
    text: 'Campground speed limit is 7 MPH.',
  },
];

export const policyItems: PolicyItem[] = [
  {
    category: 'Booking & rates',
    question: 'Where do I book or check availability?',
    answer:
      'Use the Book Now links to open Campspot for current availability, site options, starting rates, dates, fees, and final booking totals.',
  },
  {
    category: 'Booking & rates',
    question: 'What are the current starting rates?',
    answer:
      'Rustic Tent Sites start at $25.00/night, 30 AMP/Water and 30/50 AMP/Water RV Sites start at $45.00/night, and cabin/log-cabin options start at $75.00/night. Final totals depend on your selected dates and booking details.',
  },
  {
    category: 'Booking & rates',
    question: 'How do cancellations work?',
    answer:
      'Cancellations 30 or more days before check-in receive a full refund. Cancellations 7 or more days before check-in receive a 50% refund. Cancellations less than 7 days before check-in receive no refund. Early departures and inclement weather are not refundable.',
  },
  {
    category: 'Booking & rates',
    question: 'How do refunds work outside the cancellation window?',
    answer:
      'Refunds follow the cancellation policy. If a guest is asked to leave for a rule violation, no refund is due. Other refund questions are handled case by case by campground management.',
  },
  {
    category: 'Arrival & sites',
    question: 'When is check-in and checkout?',
    answer:
      'RV and tent check-in is 1 PM. Cabin check-in is 2 PM. RV, tent, and cabin checkout is 11 AM. Late checkout may be allowed only when available and approved, at $10 per hour; remaining past 3 PM can be charged as an additional night.',
  },
  {
    category: 'Arrival & sites',
    question: 'Who can make a reservation, and how many people are allowed?',
    answer:
      'Reservations must be made by an adult 18 or older. Campsites allow up to 8 people at one time. RVs are subject to management approval based on condition, and one RV is allowed per campsite.',
  },
  {
    category: 'Arrival & sites',
    question: 'What are the vehicle and driving rules?',
    answer:
      'The campground speed limit is 7 MPH. Each site is permitted 2 vehicles. Additional vehicles may be allowed by management if space is available for $5. Parking in roadways is not allowed. Motorized vehicles require a valid driver license, and operating any motorized vehicle while intoxicated can lead to immediate removal.',
  },
  {
    category: 'Pets & conduct',
    question: 'What are quiet hours and conduct rules?',
    answer:
      'Quiet hours are 10 PM to 8 AM. Children must be at their own campsites by 9 PM, and parents are responsible for their children. Campsites must be kept tidy and free of litter. Profanity, violence, and inconsiderate behavior toward guests or staff are not tolerated.',
  },
  {
    category: 'Pets & conduct',
    question: 'Are drugs, marijuana, or fireworks allowed?',
    answer:
      'Drugs and illegal substances, including marijuana, are not allowed. Fireworks are also not allowed.',
  },
  {
    category: 'Pets & conduct',
    question: 'What are the pet rules?',
    answer:
      'Pets must be kept on leash or contained within a temporary fence at the campsite at all times. Guests must pick up and properly dispose of pet waste. A maximum of 2 pets is allowed per site.',
  },
  {
    category: 'Arrival & sites',
    question: 'What should I know about fires, grills, and site setup?',
    answer:
      'Picnic tables should be returned to their original spot before checkout if moved. Portable grills should not be used on picnic tables without heat protection. Campfires must never be left unattended and must be fully extinguished before leaving.',
  },
  {
    category: 'Utilities & services',
    question: 'Are portable heaters, furnaces, or AC units allowed?',
    answer:
      'Heaters, furnaces, and AC units are not allowed unless they were installed by the RV manufacturer.',
  },
  {
    category: 'Arrival & sites',
    question: 'What cabin rules should I know?',
    answer:
      'Cabins and rental units are non-smoking inside. Furnishings, equipment, and items inside those units are campground property; damage or removal can result in charges.',
  },
  {
    category: 'Pets & conduct',
    question: 'What happens if rules are violated?',
    answer:
      'Violations may result in immediate removal without refund. Management may also terminate a rental and require guests to vacate at its discretion.',
  },
  {
    category: 'Utilities & services',
    question: 'Do sites include WiFi?',
    answer:
      'Cadillac Woods does not have public WiFi that reaches the sites. WiFi use in the camp office may be available on a case-by-case basis.',
  },
  {
    category: 'Utilities & services',
    question: 'Do RV sites include sewer hookups?',
    answer:
      'Sites do not include sewer hookups. A dump station is available to all registered guests, and a portable honey wagon service is available for a fee.',
  },
  {
    category: 'Utilities & services',
    question: 'Can I request wood delivery?',
    answer: 'Yes, wood delivery to campsites is available on request.',
  },
  {
    category: 'Arrival & sites',
    question: 'What should I do if I need a specific site type?',
    answer:
      'Book through Campspot for current site options, or call the office and ask for help choosing the right fit. Current options include cabin/log-cabin variants, 30 AMP/Water RV sites, 30/50 AMP/Water RV sites, and Rustic Tent Sites.',
  },
  {
    category: 'Booking & rates',
    question: 'Who should I call with trip-specific questions?',
    answer:
      'Call Cadillac Woods before booking if your trip depends on a payment detail, rule interpretation, site request, accessibility need, or any policy detail that could affect your stay.',
  },
];

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'arrival',
    label: 'Arrival',
    description: 'Office, entrance, roads, and the first feel of Cadillac Woods.',
  },
  {
    id: 'sites',
    label: 'Sites',
    description: 'RV and rustic site examples under the trees.',
  },
  {
    id: 'cabins',
    label: 'Cabins',
    description: 'Cabin exteriors, porches, and simple outdoor setup details.',
  },
  {
    id: 'amenities',
    label: 'Amenities',
    description: 'Camp-day spaces such as the pavilion, playground, and wood delivery.',
  },
  {
    id: 'events',
    label: 'Events',
    description: 'Seasonal campground moments and family activities.',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'office-building',
    src: '/images/gallery/office-building.jpeg',
    alt: 'Cadillac Woods office building surrounded by trees',
    title: 'The camp office',
    caption: 'The arrival point for questions, directions, and campground essentials.',
    category: 'arrival',
  },
  {
    id: 'office-with-flag',
    src: '/images/gallery/office-with-flag.jpeg',
    alt: 'Cadillac Woods office with the American flag and wooded campsites nearby',
    title: 'Arriving off M-115',
    caption: 'A wooded campground entrance with the office and sites close by.',
    category: 'arrival',
  },
  {
    id: 'office-wide',
    src: '/images/gallery/office-wide-view.jpeg',
    alt: 'Wide view of the Cadillac Woods office and camping area',
    title: 'A wooded basecamp',
    caption: 'Tall trees, gravel roads, and a practical place to settle in.',
    category: 'arrival',
  },
  {
    id: 'campground-drive-flag',
    src: '/images/gallery/new/campground-drive-flag.jpg',
    alt: 'American flag and wooded campground drive at Cadillac Woods',
    title: 'M-115 arrival',
    caption: 'A quiet entrance, tall trees, and the first glimpse of the campground.',
    category: 'arrival',
  },
  {
    id: 'rv-one',
    src: '/images/accommodations/new/fall-rv-sites.jpg',
    alt: 'RV sites under autumn trees at Cadillac Woods',
    title: 'RV stays',
    caption: 'Wooded RV sites with electric and water options listed through Campspot.',
    category: 'sites',
  },
  {
    id: 'rv-two',
    src: '/images/accommodations/new/wooded-rv-pad.jpg',
    alt: 'Wooded RV pad with campers in the distance at Cadillac Woods',
    title: 'Room to settle',
    caption: 'Site examples with shade, gravel, and room to plan your setup.',
    category: 'sites',
  },
  {
    id: 'rv-three',
    src: '/images/accommodations/new/wooded-site-a.jpg',
    alt: 'Wooded rustic site with a gravel pull-in at Cadillac Woods',
    title: 'Wooded site example',
    caption: 'A simple wooded setup for guests who want a classic camp feel.',
    category: 'sites',
  },
  {
    id: 'wooded-site-b',
    src: '/images/accommodations/new/wooded-site-b.jpg',
    alt: 'Rustic wooded campsite with a site marker at Cadillac Woods',
    title: 'Under the canopy',
    caption: 'Tall trees and a quiet site edge for a more tucked-in stay.',
    category: 'sites',
  },
  {
    id: 'wooded-site-fire-ring',
    src: '/images/accommodations/new/wooded-site-fire-ring.jpg',
    alt: 'Wooded campsite with fire ring at Cadillac Woods',
    title: 'Campfire setup',
    caption: 'A wooded site example with a fire ring and open ground around it.',
    category: 'sites',
  },
  {
    id: 'wooded-site-c',
    src: '/images/accommodations/new/wooded-site-c.jpg',
    alt: 'Wooded campsite surrounded by green trees at Cadillac Woods',
    title: 'Green season camping',
    caption: 'A quiet site view from inside the campground.',
    category: 'sites',
  },
  {
    id: 'wooded-site-path',
    src: '/images/accommodations/new/wooded-site-path.jpg',
    alt: 'Wooded campsite path and tree line at Cadillac Woods',
    title: 'Site approach',
    caption: 'A closer look at the natural tree cover around the sites.',
    category: 'sites',
  },
  {
    id: 'cabin-one',
    src: '/images/accommodations/new/cabin-porch-wide.jpg',
    alt: 'Rustic cabin with covered porch and picnic area in the woods',
    title: 'Cabin option',
    caption: 'A roof overhead while staying inside the campground setting.',
    category: 'cabins',
  },
  {
    id: 'cabin-two',
    src: '/images/accommodations/new/cabin-front.jpg',
    alt: 'Front of a Cadillac Woods cabin surrounded by trees',
    title: 'Cabin area',
    caption: 'A quieter way to stay close to the trees and on-site activities.',
    category: 'cabins',
  },
  {
    id: 'cabin-porch-close',
    src: '/images/accommodations/new/cabin-porch-close.jpg',
    alt: 'Covered cabin porch with chairs at Cadillac Woods',
    title: 'Porch time',
    caption: 'A sheltered cabin porch for slow mornings and easy evenings.',
    category: 'cabins',
  },
  {
    id: 'cabin-and-rv',
    src: '/images/accommodations/new/cabin-and-rv.jpg',
    alt: 'Cabin and RV site near a stone edge at Cadillac Woods',
    title: 'Cabin and camping mix',
    caption: 'Cabins and camping areas sit close to the wooded campground rhythm.',
    category: 'cabins',
  },
  {
    id: 'cabin-site-picnic',
    src: '/images/accommodations/new/cabin-site-picnic.jpg',
    alt: 'Cabin site with picnic table and fire ring at Cadillac Woods',
    title: 'Cabin site details',
    caption: 'Outdoor space near a cabin for meals and camp time.',
    category: 'cabins',
  },
  {
    id: 'cabin-rock-path',
    src: '/images/accommodations/new/cabin-rock-path.jpg',
    alt: 'Cabin with stone path and wooded surroundings at Cadillac Woods',
    title: 'Cabin approach',
    caption: 'A wooded cabin view with a simple path through the trees.',
    category: 'cabins',
  },
  {
    id: 'playground',
    src: '/images/amenities/new/playground-seesaw.jpg',
    alt: 'Children playing on a seesaw at Cadillac Woods',
    title: 'Family space',
    caption: 'On-site play space for families spending the day around camp.',
    category: 'amenities',
  },
  {
    id: 'pavilion-picnic',
    src: '/images/amenities/new/pavilion-picnic.jpg',
    alt: 'Covered pavilion and picnic tables under trees at Cadillac Woods',
    title: 'Covered pavilion',
    caption: 'A shaded gathering spot for meals, breaks, and group time.',
    category: 'amenities',
  },
  {
    id: 'wood-delivery',
    src: '/images/amenities/new/wood-delivery.jpg',
    alt: 'Firewood delivery outside the campground office at Cadillac Woods',
    title: 'Wood delivery',
    caption: 'Wood delivery is available to campsites on request.',
    category: 'amenities',
  },
  {
    id: 'fall-camp-road',
    src: '/images/gallery/new/fall-camp-road.jpg',
    alt: 'Fall campground road with guests and wooded sites at Cadillac Woods',
    title: 'Fall weekends',
    caption: 'Seasonal color, gravel roads, and guests moving through the campground.',
    category: 'arrival',
  },
  {
    id: 'family-campfire',
    src: '/images/gallery/new/family-campfire.jpg',
    alt: 'Family walking near a campfire at Cadillac Woods',
    title: 'Family camp nights',
    caption: 'Campfire time and family walks are part of the campground pace.',
    category: 'amenities',
  },
  {
    id: 'decorated-campsite',
    src: '/images/gallery/new/decorated-campsite.jpg',
    alt: 'Decorated campsite trunk during a campground event at Cadillac Woods',
    title: 'Seasonal fun',
    caption: 'Decorated campsites and event moments bring the campground to life.',
    category: 'events',
  },
  {
    id: 'halloween-shark',
    src: '/images/gallery/new/halloween-shark.jpg',
    alt: 'Costumed guests beside a decorated campsite at Cadillac Woods',
    title: 'Campground events',
    caption: 'Family-friendly seasonal moments around the campground.',
    category: 'events',
  },
  {
    id: 'halloween-campsite',
    src: '/images/gallery/new/halloween-campsite.jpg',
    alt: 'Decorated car and costumed guests at a Cadillac Woods event',
    title: 'Trunk-or-treat style fun',
    caption: 'A real campground event moment from Cadillac Woods.',
    category: 'events',
  },
  {
    id: 'hayride',
    src: '/images/gallery/new/hayride.jpg',
    alt: 'Guests riding in a wagon during a Cadillac Woods hayride',
    title: 'Hayride',
    caption: 'A seasonal wagon ride through the campground.',
    category: 'events',
  },
  {
    id: 'tractor-wagon',
    src: '/images/gallery/new/tractor-wagon.jpg',
    alt: 'Tractor and wagon parked at Cadillac Woods',
    title: 'Wagon ride setup',
    caption: 'A tractor and wagon ready for a campground ride.',
    category: 'events',
  },
];

export function generateHomeGallery() {
  return [
    galleryImages.find((image) => image.id === 'campground-drive-flag') || galleryImages[0],
    galleryImages.find((image) => image.id === 'rv-three') || galleryImages[3],
    galleryImages.find((image) => image.id === 'cabin-one') || galleryImages[6],
  ];
}

export const doNotClaim = [
  'Free WiFi',
  'Camper WiFi',
  'Cable TV',
  'Sewer hookups',
  'Real-time availability on this site',
  'Unverified rates beyond current Campspot starting-rate copy',
  'Exact Campspot map copied without permission',
  'Campspot photos reused without owner approval',
  'Fake contact form delivery',
  'Lakefront sites',
  'Private beach or waterfront campground',
];

export const unresolvedNotes = [
  'The screenshot note "Change x to y" is unclear and remains unresolved until clarified.',
  'A real public park map asset is still needed before this site can show an exact owned site-layout image.',
  'The screenshot rate sheet was not provided, so this launch uses current Campspot starting rates and links to Campspot for final totals.',
  'Campspot gallery photos need campground approval before they can be copied into this site.',
  'Sanity is intentionally deferred for the launch and preserved as a future CMS lane.',
];
