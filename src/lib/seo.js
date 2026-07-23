import { SITE, SITE_FAQS } from '../data/site'

const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return SITE.url
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

const logoImage = {
  '@type': 'ImageObject',
  url: `${SITE.url}/icon-192.png`,
  contentUrl: `${SITE.url}/icon-192.png`,
  width: 192,
  height: 192,
  caption: SITE.name,
}

/** Single brand entity — avoids duplicate Organisation / LocalBusiness warnings */
export function organizationJsonLd() {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [
      'Sion Tech Solutions',
      'SiOn Technologies',
      'siontechsolutions',
    ],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: logoImage,
    image: [`${SITE.url}/og-image.png`, `${SITE.url}/icon-192.png`],
    email: SITE.email,
    telephone: SITE.phoneTel,
    foundingDate: SITE.foundingDate,
    description: SITE.description,
    slogan: SITE.tagline,
    priceRange: '$$',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Invoice, UPI, Bank Transfer',
    sameAs: Object.values(SITE.social).filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'IN',
      addressLocality: 'Remote-first',
    },
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    serviceType: [
      'Custom Website Development',
      'College Website Development',
      'School Website Design',
      'Business Website Design',
      'Portal Development',
      'Website Redesign',
      'Website Management',
      'Website Maintenance',
    ],
    knowsAbout: SITE.keywords,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phoneTel,
        contactType: 'customer service',
        email: SITE.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
      {
        '@type': 'ContactPoint',
        telephone: SITE.phoneTel,
        contactType: 'sales',
        email: SITE.email,
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  }
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    alternateName: ['Sion Tech Solutions', 'siontechsolutions.com'],
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.geo.language,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE.url}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webpageJsonLd({ title, description, path = '/', type = 'WebPage' }) {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    isPartOf: { '@id': `${SITE.url}/#website` },
    about: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.geo.language,
  }
}

export function breadcrumbJsonLd(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function faqJsonLd(faqs = SITE_FAQS) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  }
}

export function serviceJsonLd({ name, description, path }) {
  return {
    '@type': 'Service',
    name,
    description,
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: SITE.geo.areaServed,
    url: absoluteUrl(path),
  }
}

export function articleJsonLd(post) {
  return {
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@id': `${SITE.url}/#organization` },
    publisher: {
      '@id': `${SITE.url}/#organization`,
      '@type': 'Organization',
      name: SITE.name,
      logo: logoImage,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': absoluteUrl(`/blog/${post.id}`),
    },
    articleSection: post.category,
    inLanguage: SITE.geo.language,
    image: `${SITE.url}/og-image.png`,
  }
}

export function defaultGraphJsonLd({ title, description, path = '/', extra = [] }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(),
      websiteJsonLd(),
      webpageJsonLd({ title, description, path }),
      ...extra,
    ],
  }
}

// Keep export name used by older imports
export function professionalServiceJsonLd() {
  return organizationJsonLd()
}

export { absoluteUrl }
