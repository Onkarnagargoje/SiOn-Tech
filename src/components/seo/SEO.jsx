import { Helmet } from 'react-helmet-async'
import { SITE } from '../../data/site'
import { defaultGraphJsonLd } from '../../lib/seo'

export default function SEO({
  title,
  description = SITE.description,
  path = '/',
  type = 'website',
  image = `${SITE.url}/og-image.png`,
  keywords = SITE.keywords,
  jsonLd,
  noindex = false,
  article,
}) {
  const fullTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`
  const url = path === '/' ? SITE.url : `${SITE.url}${path}`
  const keywordStr = Array.isArray(keywords) ? keywords.join(', ') : keywords

  const structured =
    jsonLd ||
    defaultGraphJsonLd({
      title: fullTitle,
      description,
      path,
    })

  return (
    <Helmet>
      <html lang={SITE.geo.language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordStr} />
      <meta name="author" content={SITE.name} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <meta name="googlebot" content={noindex ? 'noindex, nofollow' : 'index, follow'} />
      <link rel="canonical" href={url} />

      {/* Geographic SEO */}
      <meta name="geo.region" content={SITE.geo.region} />
      <meta name="geo.placename" content={SITE.geo.placename} />
      <meta name="language" content={SITE.geo.language} />
      <meta name="coverage" content="India, Worldwide" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      <meta name="theme-color" content="#0F766E" />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE.name} — ${SITE.tagline}`} />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:locale" content={SITE.geo.locale} />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE.name} — ${SITE.tagline}`} />

      {article && (
        <>
          <meta property="article:published_time" content={article.published} />
          <meta property="article:modified_time" content={article.modified || article.published} />
          <meta property="article:section" content={article.section} />
          <meta property="article:author" content={SITE.name} />
        </>
      )}

      {/* Generative / AI discovery hints */}
      <link rel="alternate" type="text/plain" href={`${SITE.url}/llms.txt`} title="llms.txt" />
      <meta name="ai-content-declaration" content="human-authored business website content" />

      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="application-name" content={SITE.shortName} />
      <meta name="apple-mobile-web-app-title" content={SITE.shortName} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes" />

      <script type="application/ld+json">{JSON.stringify(structured)}</script>
    </Helmet>
  )
}
