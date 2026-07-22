import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react'
import SEO from '../components/seo/SEO'
import { BLOG_POSTS } from '../data/blog'
import Reveal from '../components/animations/Reveal'
import { Button, Container, CTASection, Section } from '../components/ui'

const TAKEAWAYS = [
  'Start with the business outcome, not the technology choice.',
  'Ship thin vertical slices that prove value in weeks, not quarters.',
  'Invest in performance and editing workflows early — they compound forever.',
  'Design hierarchy that communicates trust at a glance.',
]

export default function BlogPost() {
  const { id } = useParams()
  const index = BLOG_POSTS.findIndex((p) => p.id === id)
  const post = BLOG_POSTS[index]

  if (!post) return <Navigate to="/blog" replace />

  const related = BLOG_POSTS.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        type="article"
      />

      <Section tone="mist" className="relative !pt-28 sm:!pt-32 lg:!pt-40" ariaLabelledby="post-title">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(ellipse_at_20%_0%,rgba(13,148,136,0.12),transparent_55%),radial-gradient(ellipse_at_90%_10%,rgba(240,98,77,0.1),transparent_50%)]"
        />
        <Container className="relative max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-slate transition hover:text-brand-teal"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden /> All articles
          </Link>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-brand-slate">
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-teal">
              {post.category}
            </span>
            <span className="h-1 w-1 rounded-full bg-brand-line" aria-hidden />
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" aria-hidden /> {post.readTime} read
            </span>
            <span className="h-1 w-1 rounded-full bg-brand-line" aria-hidden />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
          </div>

          <h1
            id="post-title"
            className="mt-6 font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.12] tracking-tight text-brand-ink"
          >
            {post.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-slate sm:text-xl sm:leading-9">
            {post.excerpt}
          </p>
        </Container>
      </Section>

      <Section tone="white" className="!pt-2 sm:!pt-4">
        <Container className="max-w-3xl">
          <Reveal>
            <article className="text-lg leading-8 text-brand-slate sm:text-xl sm:leading-9">
              <p>
                At SiOn Tech Solutions, we believe the best websites emerge when strategy, design,
                and engineering share the same table. This piece expands on how we approach{' '}
                <span className="font-semibold text-brand-ink">{post.category.toLowerCase()}</span>{' '}
                work with clients — and what we&apos;ve learned shipping sites and portals that stay
                useful after launch.
              </p>

              <blockquote className="my-10 border-l-[3px] border-brand-teal pl-6 sm:my-12 sm:pl-8">
                <p className="font-display text-xl font-semibold leading-snug tracking-tight text-brand-ink sm:text-2xl sm:leading-snug">
                  Clarity first, then velocity — craft is a competitive advantage, not a finish
                  coat.
                </p>
              </blockquote>

              <p>
                The teams that win aren&apos;t the ones with the most features. They&apos;re the ones
                who ruthlessly prioritize outcomes, measure relentlessly, and treat craft as a lasting
                advantage. Whether you&apos;re launching a college site, redesigning a company
                presence, or building a secure portal, the principles stay consistent.
              </p>

              <h2 className="mt-14 font-display text-2xl font-bold tracking-tight text-brand-ink sm:mt-16 sm:text-3xl">
                Key takeaways
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-slate sm:text-lg sm:leading-8">
                Keep these close when you plan your next website, portal, or redesign.
              </p>

              <ol className="mt-8 space-y-6">
                {TAKEAWAYS.map((item, i) => (
                  <li key={item} className="flex gap-4 sm:gap-5">
                    <span className="mt-0.5 font-display text-sm font-extrabold tabular-nums text-brand-teal sm:text-base">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-base leading-7 text-brand-ink sm:text-lg sm:leading-8">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>

              <p className="mt-12 sm:mt-14">
                If you&apos;re exploring a similar initiative, we&apos;d love to compare notes. Book a
                free consultation and we&apos;ll share what we&apos;ve seen work for businesses,
                colleges and schools.
              </p>
            </article>
          </Reveal>

          <div className="mt-12 flex flex-wrap items-center gap-4 sm:mt-14">
            <Button to="/contact" icon size="lg">
              Talk to our team
            </Button>
            <Link
              to="/blog"
              className="text-sm font-semibold text-brand-slate transition hover:text-brand-teal"
            >
              Back to all articles
            </Link>
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-brand-line pt-10 sm:mt-20 sm:pt-12">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-slate">
                Keep reading
              </p>
              <ul className="mt-6 divide-y divide-brand-line">
                {related.map((item) => (
                  <li key={item.id}>
                    <Link
                      to={`/blog/${item.id}`}
                      className="group flex items-start justify-between gap-4 py-5 transition"
                    >
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-teal">
                          {item.category}
                        </p>
                        <p className="mt-1.5 font-display text-lg font-bold tracking-tight text-brand-ink transition group-hover:text-brand-teal sm:text-xl">
                          {item.title}
                        </p>
                      </div>
                      <ArrowUpRight
                        className="mt-1 h-5 w-5 shrink-0 text-brand-slate transition group-hover:text-brand-teal"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </Section>

      <CTASection
        title="Want this applied to your site?"
        description="Tell us what you're building — we'll reply with a clear next step."
        primaryLabel="Book a free consultation"
        secondaryLabel="Back to blog"
        secondaryTo="/blog"
      />
    </>
  )
}
