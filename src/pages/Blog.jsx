import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, Clock } from 'lucide-react'
import SEO from '../components/seo/SEO'
import { BLOG_POSTS, BLOG_CATEGORIES } from '../data/blog'
import Reveal from '../components/animations/Reveal'
import {
  Card,
  Container,
  CTASection,
  Section,
  SectionHeader,
} from '../components/ui'

export default function Blog() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const posts = useMemo(() => {
    return BLOG_POSTS.filter((p) => {
      const matchesCat = category === 'All' || p.category === category
      const q = query.toLowerCase()
      const matchesQ =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q)
      return matchesCat && matchesQ
    })
  }, [query, category])

  return (
    <>
      <SEO
        title="Blog — Websites, Portals & Delivery"
        description="Practical insights on custom websites, portals, design and delivery from SiOn Tech Solutions — for businesses, colleges and schools in India and beyond."
        path="/blog"
      />

      <Section tone="mist" className="!pt-32 lg:!pt-40" ariaLabelledby="blog-heading">
        <Container>
          <SectionHeader
            titleId="blog-heading"
            eyebrow="Blog"
            accent="coral"
            title="Ideas from the studio"
            description="Practical thinking on building websites and portals that look premium — and work hard for your organization."
          />

          <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-slate"
                aria-hidden
              />
              <label htmlFor="blog-search" className="sr-only">
                Search articles
              </label>
              <input
                id="blog-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full rounded-full border border-brand-line bg-white py-3.5 pl-11 pr-5 text-sm text-brand-ink shadow-soft placeholder:text-brand-slate/70 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/20"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Blog categories">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => setCategory(cat)}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${
                    category === cat
                      ? 'bg-brand-teal text-white shadow-teal'
                      : 'border border-brand-line bg-white text-brand-slate hover:border-brand-teal/40 hover:text-brand-ink'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="white" className="!pt-4 sm:!pt-6" ariaLabelledby="blog-list-heading">
        <h2 id="blog-list-heading" className="sr-only">
          Articles
        </h2>
        <Container>
          {posts.length === 0 ? (
            <p className="py-20 text-center text-lg text-brand-slate">
              No articles match your search.
            </p>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 0.04} className="h-full">
                  <Card
                    as={Link}
                    to={`/blog/${post.id}`}
                    hover
                    className="group flex h-full flex-col p-6 sm:p-7"
                  >
                    <div className="mb-4 flex items-center justify-between gap-3 text-xs text-brand-slate">
                      <span className="rounded-full border border-brand-line bg-brand-mist px-2.5 py-1 font-semibold text-brand-teal">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden /> {post.readTime}
                      </span>
                    </div>
                    <h2 className="font-display text-xl font-bold tracking-tight text-brand-ink transition group-hover:text-brand-teal sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-base leading-relaxed text-brand-slate">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 border-t border-brand-line pt-4 text-sm text-brand-slate">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </time>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
