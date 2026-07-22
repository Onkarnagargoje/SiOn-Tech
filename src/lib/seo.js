import { SITE, SITE_FAQS } from '../data/site'

const absoluteUrl = (path = '/') => {
  if (!path || path === '/') return SITE.url
  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`
}

export function organizationJsonLd() {
  return {
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    alternateName: [
      'SiOn Tech Solutions',
      'Sion Tech Solutions',
      'SiOn Technologies',
      'siontechsolutions',
    ],
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE.url}/icon-192.png`,
      width: 192,
      height: 192,
    },
    image: `${SITE.url}/og-image.png`,
    email: SITE.email,
    telephone: SITE.phoneTel,
    foundingDate: SITE.foundingDate,
    description: SITE.description,
    sameAs: Object.values(SITE.social).filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressCountry: SITE.geo.countryCode,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE.phoneTel,
        contactType: 'sales',
        email: SITE.email,
        areaServed: SITE.geo.areaServed,
        availableLanguage: ['English', 'Hindi'],
      },
    ],
  }
}

export function professionalServiceJsonLd() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#business`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}/og-image.png`,
    description: SITE.description,
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: '$$',
    foundingDate: SITE.foundingDate,
    areaServed: SITE.geo.areaServed.map((name) => ({
      '@type': name === 'Worldwide' ? 'Place' : 'Country',
      name,
    })),
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
    address: {
      '@type': 'PostalAddress',
      addressCountry: SITE.geo.countryCode,
      addressRegion: SITE.geo.region,
    },
    geo: {
      '@type': 'GeoCoordinates',
      /** India centroid — remote-first national service */
      latitude: 20.5937,
      longitude: 78.9629,
    },
    sameAs: Object.values(SITE.social).filter(Boolean),
    parentOrganization: { '@id': `${SITE.url}/#organization` },
  }
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    alternateName: ['Sion Tech Solutions', 'siontechsolutions.com', 'SiOn Technologies'],
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: SITE.geo.language,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE.url}/blog?q={search_term_string}`,
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
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE.url}/favicon.svg`,
      },
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.id}`),
    articleSection: post.category,
    inLanguage: SITE.geo.language,
  }
}

export function defaultGraphJsonLd({ title, description, path = '/', extra = [] }) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(),
      professionalServiceJsonLd(),
      websiteJsonLd(),
      webpageJsonLd({ title, description, path }),
      ...extra,
    ],
  }
}

export { absoluteUrl }
