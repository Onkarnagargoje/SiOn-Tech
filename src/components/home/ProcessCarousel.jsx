import {
  Search,
  Palette,
  Code2,
  Rocket,
  HeartHandshake,
} from 'lucide-react'
import { PROCESS_STEPS } from '../../data/about'
import Reveal from '../animations/Reveal'
import { Container, Section, SectionHeader } from '../ui'

const ICONS = [Search, Palette, Code2, Rocket, HeartHandshake]

const LABELS = [
  'Brief & discovery',
  'Visual direction',
  'Build & performance',
  'Go-live handover',
  'Care after launch',
]

const TONES = [
  {
    card: 'bg-brand-coral text-white shadow-[0_20px_50px_rgba(240,98,77,0.28)]',
    muted: 'text-white/85',
    number: 'text-white/50',
    label: 'text-white/80',
    iconWrap: 'border-white/25 bg-white/15 text-white',
    pattern: 'dots',
    dark: true,
  },
  {
    card: 'bg-brand-teal text-white shadow-teal',
    muted: 'text-white/85',
    number: 'text-white/50',
    label: 'text-white/80',
    iconWrap: 'border-white/25 bg-white/15 text-white',
    pattern: 'waves',
    dark: true,
  },
  {
    card: 'bg-brand-navy text-white shadow-mid',
    muted: 'text-white/75',
    number: 'text-white/45',
    label: 'text-white/70',
    iconWrap: 'border-white/20 bg-white/10 text-white',
    pattern: 'none',
    dark: true,
  },
  {
    card: 'bg-brand-amber text-brand-ink shadow-[0_20px_50px_rgba(240,180,41,0.3)]',
    muted: 'text-brand-ink/75',
    number: 'text-brand-ink/40',
    label: 'text-brand-ink/70',
    iconWrap: 'border-brand-ink/15 bg-brand-ink/10 text-brand-ink',
    pattern: 'lines',
    dark: false,
  },
  {
    card: 'bg-brand-aqua text-[#052e2b] shadow-[0_20px_50px_rgba(45,212,191,0.28)]',
    muted: 'text-[#052e2b]/75',
    number: 'text-[#052e2b]/45',
    label: 'text-[#052e2b]/70',
    iconWrap: 'border-[#052e2b]/15 bg-[#052e2b]/10 text-[#052e2b]',
    pattern: 'waves',
    dark: false,
  },
]

function CardPattern({ type, dark }) {
  if (type === 'none') return null

  if (type === 'dots') {
    return (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-36 opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, ${dark ? 'rgba(255,255,255,0.4)' : 'rgba(11,18,32,0.18)'} 1.2px, transparent 1.3px)`,
          backgroundSize: '12px 12px',
          maskImage: 'linear-gradient(to top, black, transparent)',
        }}
      />
    )
  }

  if (type === 'lines') {
    return (
      <span
        aria-hidden
        className="pointer-events-none absolute inset-y-10 right-0 w-20 opacity-45"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, ${dark ? 'rgba(255,255,255,0.25)' : 'rgba(11,18,32,0.12)'} 0 1px, transparent 1px 7px)`,
          maskImage: 'linear-gradient(to left, black, transparent)',
        }}
      />
    )
  }

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 h-28 w-full opacity-[0.28]"
      viewBox="0 0 320 96"
      preserveAspectRatio="none"
    >
      <path
        d="M0 60c40-24 80-24 120 0s80 24 120 0 80-24 120 0v36H0V60z"
        fill={dark ? 'rgba(255,255,255,0.55)' : 'rgba(11,18,32,0.3)'}
      />
      <path
        d="M0 72c40-18 80-18 120 0s80 18 120 0 80-18 120 0v24H0V72z"
        fill={dark ? 'rgba(255,255,255,0.35)' : 'rgba(11,18,32,0.18)'}
      />
    </svg>
  )
}

export default function ProcessCarousel({
  eyebrow = 'Process',
  title = 'How we deliver',
  description = 'Five clear stages from first conversation to ongoing support — so you always know what happens next.',
  steps = PROCESS_STEPS,
}) {
  return (
    <Section tone="mist" ariaLabelledby="process-heading">
      <Container wide>
        <SectionHeader
          titleId="process-heading"
          eyebrow={eyebrow}
          accent="teal"
          title={title}
          description={description}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-5">
          {steps.map((step, i) => {
            const Icon = ICONS[i] || Search
            const tone = TONES[i % TONES.length]

            return (
              <Reveal key={step.step} delay={i * 0.05} className="h-full">
                <article
                  className={`relative flex h-full min-h-0 flex-col overflow-hidden rounded-[2rem] p-6 sm:min-h-[26rem] sm:p-8 lg:min-h-[28rem] lg:p-9 ${tone.card}`}
                >
                  <CardPattern type={tone.pattern} dark={tone.dark} />

                  <p className={`relative text-base font-semibold tracking-wide ${tone.number}`}>
                    {step.step}
                  </p>

                  <h3 className="relative mt-5 font-display text-[1.55rem] font-bold leading-[1.15] tracking-tight sm:mt-6 sm:text-[2rem]">
                    {step.title}
                  </h3>

                  <div
                    className={`relative mt-8 flex h-12 w-12 items-center justify-center rounded-2xl border sm:mt-10 ${tone.iconWrap}`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </div>

                  <p
                    className={`relative mt-6 text-xs font-bold uppercase tracking-[0.16em] ${tone.label}`}
                  >
                    {LABELS[i]}
                  </p>

                  <p className={`relative mt-3 flex-1 text-base leading-relaxed ${tone.muted}`}>
                    {step.description}
                  </p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
