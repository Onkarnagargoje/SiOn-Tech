import { useState } from 'react'
import SEO from '../components/seo/SEO'
import { TECHNOLOGIES, TECH_CATEGORIES } from '../data/technologies'
import Reveal from '../components/animations/Reveal'
import TextReveal from '../components/animations/TextReveal'
import CTABanner from '../components/ui/CTABanner'
import { lazy, Suspense } from 'react'

const TechGlobe = lazy(() => import('../components/three/TechGlobe'))

export default function Technologies() {
  const [filter, setFilter] = useState('All')
  const filtered =
    filter === 'All' ? TECHNOLOGIES : TECHNOLOGIES.filter((t) => t.category === filter)

  return (
    <>
      <SEO
        title="Technologies"
        description="React, Next.js, Node, Python, AWS, AI/ML and more — the technology stack behind SiOn Tech Solutions."
        path="/technologies"
      />

      <section className="section-pad pb-8 pt-32 lg:pt-40">
        <div className="container-max grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-sion-cyan">Technologies</p>
            <TextReveal className="text-display font-semibold" as="h1">
              Tools we trust in production
            </TextReveal>
            <p className="mt-6 text-lg text-sion-muted leading-relaxed">
              Modern, battle-tested technologies chosen for developer velocity, reliability, and long-term maintainability.
            </p>
          </div>
          <Suspense fallback={<div className="aspect-square max-h-80 mx-auto w-full bg-glow-radial rounded-full" />}>
            <TechGlobe className="mx-auto aspect-square w-full max-w-sm" />
          </Suspense>
        </div>
      </section>

      <section className="section-pad py-16">
        <div className="container-max">
          <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Technology categories">
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={filter === cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  filter === cat
                    ? 'bg-sion-accent text-white'
                    : 'border border-white/10 text-sion-muted hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((tech, i) => (
              <Reveal key={tech.name} delay={i * 0.03}>
                <div className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-sion-accent/30">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-xl text-xs font-bold"
                    style={{
                      background: `${tech.color === '#000000' || tech.color === '#FFFFFF' ? '#3B82F6' : tech.color}22`,
                      color: tech.color === '#000000' || tech.color === '#FFFFFF' ? '#3B82F6' : tech.color,
                    }}
                  >
                    {tech.name.slice(0, 2).toUpperCase()}
                  </span>
                  <div>
                    <p className="font-semibold">{tech.name}</p>
                    <p className="text-xs text-sion-muted">{tech.category}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
