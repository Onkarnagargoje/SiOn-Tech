import SEO from '../components/seo/SEO'
import { JOBS } from '../data/careers'
import Reveal from '../components/animations/Reveal'
import TextReveal from '../components/animations/TextReveal'
import Button from '../components/ui/Button'
import { MapPin, Briefcase } from 'lucide-react'
import { SITE } from '../data/site'

export default function Careers() {
  return (
    <>
      <SEO
        title="Careers"
        description="Join SiOn Tech Solutions — open roles for engineers, designers, and delivery leaders."
        path="/careers"
      />

      <section className="section-pad pb-12 pt-32 lg:pt-40">
        <div className="container-max max-w-3xl">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sion-cyan">Careers</p>
          <TextReveal className="text-display font-semibold" as="h1">
            Build the future with us
          </TextReveal>
          <p className="mt-6 text-lg text-sion-muted leading-relaxed">
            We hire people with taste, ownership, and a bias for shipping. Remote-friendly. High trust. Real impact.
          </p>
        </div>
      </section>

      <section className="section-pad pb-24">
        <div className="container-max space-y-4">
          {JOBS.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.05}>
              <article className="flex flex-col gap-6 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-sion-accent/25 sm:flex-row sm:items-center sm:justify-between sm:p-8">
                <div>
                  <p className="mb-1 text-xs uppercase tracking-[0.14em] text-sion-cyan">{job.department}</p>
                  <h2 className="text-xl font-semibold sm:text-2xl">{job.title}</h2>
                  <p className="mt-2 max-w-xl text-sm text-sion-muted">{job.description}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-sion-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" /> {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5" /> {job.type}
                    </span>
                  </div>
                </div>
                <Button
                  href={`mailto:${SITE.email}?subject=Application: ${job.title}`}
                  className="shrink-0"
                  icon
                >
                  Apply
                </Button>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="container-max mt-16 rounded-3xl border border-dashed border-white/15 p-10 text-center">
          <h2 className="text-2xl font-semibold">Don&apos;t see your role?</h2>
          <p className="mt-3 text-sion-muted">
            We&apos;re always interested in exceptional people. Send an open application.
          </p>
          <div className="mt-6">
            <Button href={`mailto:${SITE.email}?subject=Open Application`} variant="secondary" icon>
              Introduce Yourself
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
