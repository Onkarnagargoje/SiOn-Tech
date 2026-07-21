import Container from './Container'
import Section from './Section'
import Button from './Button'
import Reveal from '../animations/Reveal'
import MagneticButton from '../animations/MagneticButton'

export default function CTASection({
  title = 'Ready to start your project?',
  description = 'Tell us about your website, portal, redesign or maintenance needs — we will reply with a clear next step.',
  primaryLabel = 'Book a free consultation',
  primaryTo = '/contact',
  secondaryLabel = 'Explore services',
  secondaryTo = '/services',
}) {
  return (
    <Section tone="cream" className="!py-12 sm:!py-14 lg:!py-16">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-brand-ink px-5 py-10 text-center sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="hero-orb pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-brand-teal/35 blur-3xl" />
            <div className="hero-orb-delay pointer-events-none absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-brand-coral/25 blur-3xl" />
            <div className="hero-grain pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-overlay" />

            <p className="relative text-sm font-semibold uppercase tracking-[0.18em] text-brand-aqua">
              SiOn Tech Solutions
            </p>

            <h2 className="relative mt-3 font-display text-[clamp(1.65rem,5vw,2.75rem)] font-bold tracking-tight text-white">
              {title}
            </h2>

            <p className="relative mx-auto mt-3 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg lg:text-xl">
              {description}
            </p>

            <div className="relative mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
              <MagneticButton className="w-full sm:w-auto">
                <Button
                  to={primaryTo}
                  variant="soft"
                  className="!w-full !rounded-full !px-8 !py-3.5 !text-base !shadow-[0_0_36px_rgba(45,212,191,0.22)] sm:!w-auto"
                  icon
                >
                  {primaryLabel}
                </Button>
              </MagneticButton>
              <MagneticButton strength={0.2} className="w-full sm:w-auto">
                <Button
                  to={secondaryTo}
                  variant="ghost"
                  className="!w-full !rounded-full !px-8 !py-3.5 !text-base sm:!w-auto"
                >
                  {secondaryLabel}
                </Button>
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  )
}
