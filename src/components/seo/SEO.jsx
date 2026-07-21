import { Helmet } from 'react-helmet-async'
import { SITE } from '../../data/site'

export default function SEO({
  title,
  description = SITE.description,
  path = '/',
  type = 'website',
  image = `${SITE.url}/og-image.svg`,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`
  const url = `${SITE.url}${path}`

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    description: SITE.description,
    sameAs: Object.values(SITE.social),
  }

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={SITE.name} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <script type="application/ld+json">{JSON.stringify(jsonLd || defaultJsonLd)}</script>
    </Helmet>
  )
}
