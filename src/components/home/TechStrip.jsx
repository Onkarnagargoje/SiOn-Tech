import { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom'
import { TECHNOLOGIES } from '../../data/technologies'
import SectionHeading from '../ui/SectionHeading'
import Marquee from '../animations/Marquee'
import Reveal from '../animations/Reveal'

const TechGlobe = lazy(() => import('../three/TechGlobe'))

export default function TechStrip() {
  return (
    <section className="section-pad overflow-hidden py-24 lg:py-32">
      <div className="container-max">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Technology"
              title="A stack chosen for speed, scale, and longevity"
              description="We pick tools that compound — modern frameworks, cloud-native platforms, and AI systems ready for production."
            />
            <Reveal className="mt-8">
              <Link to="/technologies" className="btn-secondary">
                Explore Our Stack
              </Link>
            </Reveal>
          </div>
          <Suspense fallback={<div className="aspect-square max-h-[360px] rounded-full bg-glow-radial mx-auto" />}>
            <TechGlobe className="mx-auto aspect-square w-full max-w-[360px]" />
          </Suspense>
        </div>
      </div>

      <div className="mt-16">
        <Marquee speed="50s">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.03] px-6 py-3"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: tech.color === '#000000' || tech.color === '#FFFFFF' ? '#3B82F6' : tech.color }}
              />
              <span className="whitespace-nowrap text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  )
}
