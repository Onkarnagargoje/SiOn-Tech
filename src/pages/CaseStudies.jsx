import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import { CASE_STUDIES } from '../data/projects'
import Reveal from '../components/animations/Reveal'
import TextReveal from '../components/animations/TextReveal'
import CTABanner from '../components/ui/CTABanner'
import { ArrowUpRight } from 'lucide-react'

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies"
        description="In-depth case studies showing how SiOn Tech Solutions solved complex product challenges."
        path="/case-studies"
      />

      <section className="section-pad pb-12 pt-32 lg:pt-40">
        <div className="container-max max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sion-cyan">Case Studies</p>
          <TextReveal className="text-display font-semibold" as="h1">
            Deep dives into impact
          </TextReveal>
          <p className="mt-6 text-lg text-sion-muted">
            Problem, approach, and measurable results — the stories behind our most transformative engagements.
          </p>
        </div>
      </section>

      <section className="section-pad pb-24">
        <div className="container-max space-y-8">
          {CASE_STUDIES.map((study) => (
            <Reveal key={study.id}>
              <Link
                to={`/portfolio/${study.id}`}
                className="group grid overflow-hidden rounded-3xl border border-white/[0.08] transition hover:border-sion-accent/30 lg:grid-cols-5"
              >
                <div
                  className="aspect-video lg:col-span-2 lg:aspect-auto min-h-[220px]"
                  style={{ background: study.cover }}
                  role="img"
                  aria-label={`${study.title} visual`}
                />
                <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-10">
                  <p className="text-xs uppercase tracking-[0.16em] text-sion-cyan mb-3">
                    {study.category} · {study.client}
                  </p>
                  <h2 className="text-2xl font-semibold sm:text-3xl flex items-center gap-3">
                    {study.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 transition group-hover:opacity-100" />
                  </h2>
                  <p className="mt-3 text-sion-muted leading-relaxed max-w-xl">{study.problem}</p>
                  <div className="mt-6 flex flex-wrap gap-6">
                    {study.results.slice(0, 2).map((r) => (
                      <div key={r.label}>
                        <p className="text-xl font-semibold text-sion-cyan">{r.metric}</p>
                        <p className="text-xs text-sion-muted">{r.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  )
}
