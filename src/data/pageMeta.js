// Per-page SEO metadata. Used at runtime by usePageMeta and at build time by
// the prerender step in vite.config.js, which writes one HTML file per page so
// crawlers and link previews (WhatsApp, Facebook) see the right title and description.
// Keep this file free of imports so Node can load it during the build.

export const SITE = {
  name: "Blessed Hope SDA Church",
  url: "https://www.bhsdac.com",
  image: "https://www.bhsdac.com/og-image.png",
  locale: "en_GB",
};

export const PAGES = {
  "/": {
    title: "Blessed Hope Seventh-day Adventist Church | Dartford, Kent",
    description:
      "Blessed Hope SDA Church in Dartford, Kent: a house of faith where praise is vibrant, prayer is heartfelt and community is family. Worship with us every Saturday.",
  },
  "/about": {
    title: "About Us",
    description:
      "Learn about Blessed Hope Seventh-day Adventist Church in Dartford: our pastoral team, our beliefs, our worship and how to join us.",
  },
  "/programs": {
    title: "Programs & Service Times",
    description:
      "Service times at Blessed Hope SDA Church, Dartford: Sabbath School and Divine Service every Saturday, midweek Bible study on Wednesdays and daily morning prayers.",
  },
  "/events": {
    title: "Events",
    description:
      "Upcoming events and special services at Blessed Hope SDA Church in Dartford, plus our regular weekly gatherings.",
  },
  "/media": {
    title: "Media & Sermons",
    description:
      "Watch Blessed Hope SDA Church services and sermons on YouTube, and listen to BHBS live on Mixlr or our podcast on Spotify.",
  },
  "/community-outreach": {
    title: "Community Outreach",
    description:
      "How Blessed Hope SDA Church serves Dartford: care home visits, Christmas gift giving and community support programmes.",
  },
  "/empowerment": {
    title: "Empowerment",
    description:
      "Equipping our community with resources in financial literacy, immigration support, and health and wellness.",
  },
  "/adventurer-pathfinder": {
    title: "Adventurer & Pathfinder Clubs",
    description:
      "Youth clubs at Blessed Hope SDA Church, Dartford: Adventurers (ages 6–9) and Pathfinders (ages 10–15), building character and faith.",
  },
  "/convention": {
    title: "Annual Convention",
    description:
      "Beyond Comprehension: the Blessed Hope SDA Church annual convention for worship, fellowship and spiritual renewal.",
  },
  "/giving": {
    title: "Giving",
    description:
      "Support the mission of Blessed Hope SDA Church through tithes, offerings and donations, online by card or by bank transfer.",
  },
  "/contact": {
    title: "Contact Us",
    description:
      "Contact Blessed Hope SDA Church, Priory Hill, Dartford DA1 2ES. Find our address and phone number, or send us a message.",
  },
};

export const NOT_FOUND = {
  title: "Page Not Found",
  description: "Sorry, we couldn't find that page.",
};

// Home page titles stand alone; every other page gets the site name appended.
export const fullTitle = (path, meta) =>
  path === "/" ? meta.title : `${meta.title} | ${SITE.name}`;

// schema.org structured data for the church, emitted on the home page.
export const CHURCH_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Blessed Hope Seventh-day Adventist Church",
  alternateName: ["Blessed Hope SDA Church", "BHSDAC"],
  url: `${SITE.url}/`,
  logo: `${SITE.url}/icon-512.png`,
  image: SITE.image,
  telephone: "+44 1322 838191",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1 Zion Cottage Drive, Priory Hill",
    addressLocality: "Dartford",
    addressRegion: "Kent",
    postalCode: "DA1 2ES",
    addressCountry: "GB",
  },
  sameAs: [
    "https://www.facebook.com/blessedhope.sdac",
    "https://www.instagram.com/blessedhope.sda/",
    "https://twitter.com/blessedhopesda",
    "https://www.youtube.com/@BHSDAC",
  ],
};
