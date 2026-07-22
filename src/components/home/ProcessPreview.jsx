import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { PROCESS } from '../../data/home'
import { Container, Section, SectionHeader, ProcessStep, Card, Heading, Text } from '../ui'
import Reveal from '../animations/Reveal'

gsap.registerPlugin(ScrollTrigger)

/**
 * Desktop: sticky left copy + scrubbed teal progress line through steps 1–5.
 * Mobile: card layout only (no timeline / no scrub).
 */
export default function ProcessPreview() {
  const timelineRef = useRef(null)
  const lineRef = useRef(null)

  useGSAP(
    () => {
      const timeline = timelineRef.current
      const line = lineRef.current
      if (!timeline || !line) return

      const mm = gsap.matchMedia()

      mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
        requestAnimationFrame(() => ScrollTrigger.refresh())

        gsap.fromTo(
          line,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: timeline,
              start: 'top 70%',
              end: 'bottom 55%',
              scrub: 0.55,
              invalidateOnRefresh: true,
            },
          },
        )

        gsap.from(timeline.querySelectorAll('.process-step'), {
          y: 36,
          opacity: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: timeline,
            start: 'top 78%',
            once: true,
          },
        })
      })

      return () => mm.revert()
    },
    { scope: timelineRef, dependencies: [] },
  )

  return (
    <Section tone="white" className="overflow-x-clip" ariaLabelledby="process-heading">
      <Container wide className="grid min-w-0 gap-8 sm:gap-10 lg:grid-cols-12 lg:items-start lg:gap-14">
        <div className="min-w-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            titleId="process-heading"
            eyebrow="Process"
            accent="amber"
            title="How we work with you"
            description="Five clear stages from first conversation to ongoing support — so you always know what happens next."
            className="!max-w-full"
          />
        </div>

        <div className="min-w-0 lg:col-span-7">
          {/* Mobile / tablet — stacked / grid (no page-wide horizontal overflow) */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
            {PROCESS.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.04} className="h-full min-w-0">
                <Card className="flex h-full min-h-[10.5rem] flex-col p-5 sm:min-h-[11.5rem] sm:p-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-teal text-sm font-extrabold text-white shadow-teal">
                    {i + 1}
                  </span>
                  <Heading as="h3" size="md" className="mt-4">
                    {step.title}
                  </Heading>
                  <Text size="sm" className="mt-2 flex-1 !text-[15px]">
                    {step.text}
                  </Text>
                </Card>
              </Reveal>
            ))}
          </div>

          {/* Desktop timeline + scroll progress */}
          <div ref={timelineRef} className="relative hidden lg:block">
            <span
              aria-hidden
              className="absolute bottom-8 left-[1.4rem] top-6 w-0.5 origin-top bg-brand-line"
            />
            <span
              ref={lineRef}
              aria-hidden
              className="absolute bottom-8 left-[1.4rem] top-6 w-0.5 origin-top scale-y-0 bg-brand-teal shadow-[0_0_12px_rgba(13,148,136,0.5)]"
            />
            {PROCESS.map((step, i) => (
              <div key={step.title} className="process-step">
                <ProcessStep step={step} index={i} total={PROCESS.length} />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
