import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, Clock } from 'lucide-react'
import SEO from '../components/seo/SEO'
import { BLOG_POSTS } from '../data/blog'
import { Button, Container, Section } from '../components/ui'

export default function BlogPost() {
  const { id } = useParams()
  const post = BLOG_POSTS.find((p) => p.id === id)

  if (!post) return <Navigate to="/blog" replace />

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.id}`}
        type="article"
      />

      <Section tone="mist" className="!pt-32 lg:!pt-40" ariaLabelledby="post-title">
        <Container className="max-w-3xl">
          <Link
            to="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-slate transition hover:text-brand-teal"
          >
            <ArrowLeft className="h-4 w-4" /> All articles
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-brand-slate">
            <span className="rounded-full bg-brand-teal/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-teal">
              {post.category}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {post.readTime} read
            </span>
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
            className="font-display text-title font-bold tracking-tight text-brand-ink"
          >
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-brand-slate">{post.excerpt}</p>
          <p className="mt-6 text-sm font-semibold text-brand-ink">By {post.author}</p>
        </Container>
      </Section>

      <Section tone="white" className="!pt-0">
        <Container className="max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-brand-slate">
            <p>
              At SiOn Tech Solutions, we believe the best websites emerge when strategy, design, and
              engineering share the same table. This piece expands on how we approach{' '}
              {post.category.toLowerCase()} work with clients — and what we&apos;ve learned shipping
              sites and portals that stay useful after launch.
            </p>
            <p>
              The teams that win aren&apos;t the ones with the most features. They&apos;re the ones
              who ruthlessly prioritize outcomes, measure relentlessly, and treat craft as a
              competitive advantage. Whether you&apos;re launching a college site, redesigning a
              company presence, or building a secure portal, the principles stay consistent: clarity
              first, then velocity.
            </p>
            <h2 className="pt-4 font-display text-2xl font-bold text-brand-ink">Key takeaways</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Start with the business outcome, not the technology choice.</li>
              <li>Ship thin vertical slices that prove value in weeks, not quarters.</li>
              <li>Invest in performance and editing workflows early — they compound forever.</li>
              <li>Design hierarchy that communicates trust at a glance.</li>
            </ul>
            <p>
              If you&apos;re exploring a similar initiative, we&apos;d love to compare notes. Book a
              free consultation and we&apos;ll share what we&apos;ve seen work for businesses,
              colleges and schools.
            </p>
          </div>

          <div className="mt-12">
            <Button to="/contact" icon className="!rounded-full">
              Talk to our team
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
