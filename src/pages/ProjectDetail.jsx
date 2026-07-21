import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SEO from '../components/seo/SEO'
import { PROJECTS } from '../data/projects'
import Reveal from '../components/animations/Reveal'
import Button from '../components/ui/Button'
import CTABanner from '../components/ui/CTABanner'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) return <Navigate to="/portfolio" replace />

  return (
    <>
      <SEO
        title={project.title}
        description={project.tagline}
        path={`/portfolio/${project.id}`}
        type="article"
      />

      <article>
        <header className="relative overflow-hidden pt-28 lg:pt-32">
          <div
            className="absolute inset-0 opacity-60"
            style={{ background: project.cover }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sion-bg/60 via-sion-bg/80 to-sion-bg" />
          <div className="section-pad relative container-max pb-16 pt-10">
            <Link
              to="/portfolio"
              className="mb-8 inline-flex items-center gap-2 text-sm text-sion-muted transition hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Portfolio
            </Link>
            <p className="mb-3 text-xs uppercase tracking-[0.18em] text-sion-cyan">
              {project.category} · {project.year} · {project.client}
            </p>
            <h1 className="text-display font-semibold max-w-3xl">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-lg text-sion-muted">{project.tagline}</p>
          </div>
        </header>

        <div className="section-pad container-max space-y-20 py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <h2 className="text-2xl font-semibold mb-4">Problem</h2>
              <p className="text-sion-muted leading-relaxed">{project.problem}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl font-semibold mb-4">Solution</h2>
              <p className="text-sion-muted leading-relaxed">{project.solution}</p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-2xl font-semibold mb-6">Technology Stack</h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold mb-6">Development Process</h2>
            <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {project.process.map((step, i) => (
                <li key={step} className="rounded-2xl border border-white/[0.08] p-5">
                  <span className="text-xs text-sion-cyan">0{i + 1}</span>
                  <p className="mt-2 text-sm font-medium">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold mb-6">Screenshots</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {[0.85, 0.7, 0.55].map((opacity, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl border border-white/[0.08]"
                  style={{
                    background: project.cover,
                    opacity,
                  }}
                  role="img"
                  aria-label={`${project.title} screenshot ${i + 1}`}
                />
              ))}
            </div>
          </Reveal>

          <Reveal>
            <h2 className="text-2xl font-semibold mb-6">Results</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-white/[0.08] bg-sion-secondary p-6 text-center">
                  <p className="text-3xl font-semibold text-gradient">{r.metric}</p>
                  <p className="mt-2 text-sm text-sion-muted">{r.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <blockquote className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 sm:p-10">
              <p className="text-xl leading-relaxed text-white/90 sm:text-2xl">
                &ldquo;{project.testimonial.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-sion-muted">
                <cite className="not-italic font-semibold text-white">{project.testimonial.name}</cite>
                {' — '}
                {project.testimonial.role}
              </footer>
            </blockquote>
          </Reveal>

          <div className="flex flex-wrap gap-4">
            <Button to="/contact" icon>
              Start a Similar Project
            </Button>
            <Button to="/portfolio" variant="secondary">
              More Projects
            </Button>
          </div>
        </div>

        <CTABanner />
      </article>
    </>
  )
}
