import SEO from '../components/seo/SEO'
import Reveal from '../components/animations/Reveal'
import { CalendarDays, Target, Users, Rocket, Compass, Eye, Check } from 'lucide-react'
import { COMPANY, VALUES, TIMELINE } from '../data/about'
import ProcessCarousel from '../components/home/ProcessCarousel'
import {
  Card,
  Container,
  CTASection,
  Heading,
  Section,
  SectionHeader,
  Text,
} from '../components/ui'

const facts = [
  {
    label: 'Founded',
    icon: CalendarDays,
    tone: 'bg-brand-teal/10 text-brand-teal',
    title: String(COMPANY.founded),
    detail: 'SiOn Tech Solutions launched to build websites that work hard.',
  },
  {
    label: 'Focus',
    icon: Target,
    tone: 'bg-brand-coral/10 text-brand-coral',
    title: 'Websites & portals',
    detail: 'Custom builds, redesign, management and ongoing care.',
  },
  {
    label: 'Clients',
    icon: Users,
    tone: 'bg-brand-amber/15 text-amber-700',
    title: 'Who we serve',
    lines: ['Businesses', 'Colleges', 'Schools'],
  },
  {
    label: 'Delivery',
    icon: Rocket,
    tone: 'bg-brand-navy/10 text-brand-navy',
    title: 'How we work',
    lines: ['Clear scope', 'Tracked delivery', 'Care after launch'],
  },
]

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="About SiOn Tech Solutions — founded in 2025. Custom websites, portals, management, redesign and maintenance for businesses, colleges and schools."
        path="/about"
      />

      <Section tone="cream" className="!pt-6 sm:!pt-10">
        <Container>
          <SectionHeader
            eyebrow="About"
            accent="coral"
            title="A studio for websites that need to work hard"
            description="Founded in 2025, SiOn Tech Solutions partners with businesses, colleges and schools to design, build and care for professional websites and portals."
          />

          <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((fact, i) => {
              const Icon = fact.icon
              return (
                <Reveal key={fact.label} delay={i * 0.04} className="h-full">
                  <Card className="group flex h-full min-h-[15.5rem] flex-col p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-mid sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-slate">
                        {fact.label}
                      </p>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl ${fact.tone}`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </span>
                    </div>

                    <p className="mt-6 font-display text-2xl font-extrabold leading-tight tracking-tight text-brand-ink sm:text-[1.75rem]">
                      {fact.title}
                    </p>

                    {fact.detail && (
                      <p className="mt-3 flex-1 text-base leading-relaxed text-brand-slate">
                        {fact.detail}
                      </p>
                    )}

                    {fact.lines && (
                      <ul className="mt-4 flex-1 space-y-2.5">
                        {fact.lines.map((line) => (
                          <li
                            key={line}
                            className="flex items-center gap-2.5 text-base font-semibold text-brand-ink"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-aqua" aria-hidden />
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                </Reveal>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section tone="mist" className="relative overflow-hidden" ariaLabelledby="purpose-heading">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_20%,rgba(13,148,136,0.12),transparent_50%),radial-gradient(ellipse_at_90%_70%,rgba(15,23,42,0.08),transparent_45%)]"
        />
        <Container className="relative">
          <SectionHeader
            titleId="purpose-heading"
            eyebrow="Purpose"
            accent="teal"
            title="What guides every project"
            description="Mission and vision aren’t posters on a wall — they shape how we scope, design, ship and support every website we build."
          />

          <div className="mt-10 grid auto-rows-fr gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
            <Reveal className="h-full">
              <article className="relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] bg-brand-teal p-8 text-white shadow-teal sm:min-h-[28rem] sm:p-10 lg:p-11">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full border border-white/20"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute -bottom-16 -left-8 h-56 w-56 rounded-full bg-white/10 blur-2xl"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute bottom-0 left-0 h-36 w-full opacity-35"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, rgba(255,255,255,0.5) 1.1px, transparent 1.2px)',
                    backgroundSize: '16px 16px',
                    maskImage: 'linear-gradient(to top, black, transparent)',
                  }}
                />

                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15 text-white backdrop-blur-sm">
                    <Compass className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/75">
                    Our purpose
                  </p>
                </div>

                <Heading as="h2" size="title" light className="relative mt-5 !text-white">
                  Mission
                </Heading>
                <Text light className="relative mt-5 max-w-xl !text-lg leading-relaxed !text-white/92 sm:!text-xl sm:leading-8">
                  Help every client launch a professional digital presence that matches their brand and
                  stays reliable over time — with clear communication from brief to launch.
                </Text>

                <ul className="relative mt-8 space-y-3.5">
                  {[
                    'Honest scope and timelines you can plan around',
                    'Design that feels premium and stays easy to use',
                    'Support that continues after go-live',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base text-white/90 sm:text-lg">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/20">
                        <Check className="h-3.5 w-3.5" strokeWidth={2.5} aria-hidden />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="relative mt-auto pt-10 text-sm font-semibold tracking-wide text-white/85 sm:text-base">
                  Clarity · Craft · Care after launch
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.08} className="h-full">
              <article className="relative flex h-full min-h-[26rem] flex-col overflow-hidden rounded-[1.75rem] bg-brand-navy p-8 text-white shadow-mid sm:min-h-[28rem] sm:p-10 lg:p-11">
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-12 bottom-8 h-56 w-56 rounded-full bg-brand-aqua/20 blur-3xl"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-8 right-0 w-20 opacity-35"
                  style={{
                    backgroundImage:
                      'repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 1px, transparent 1px 8px)',
                    maskImage: 'linear-gradient(to left, black, transparent)',
                  }}
                />

                <div className="relative flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-brand-aqua backdrop-blur-sm">
                    <Eye className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                    Where we&apos;re headed
                  </p>
                </div>

                <Heading as="h2" size="title" light className="relative mt-5 !text-white">
                  Vision
                </Heading>
                <Text light className="relative mt-5 max-w-xl !text-lg leading-relaxed !text-white/92 sm:!text-xl sm:leading-8">
                  Become a trusted website and portal partner for growing organizations — starting with
                  businesses, colleges and schools worldwide.
                </Text>

                <div className="relative mt-8 grid gap-3 sm:grid-cols-3">
                  {['Businesses', 'Colleges', 'Schools'].map((label) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-center backdrop-blur-sm"
                    >
                      <p className="font-display text-sm font-bold tracking-tight text-white sm:text-base">
                        {label}
                      </p>
                      <p className="mt-1 text-xs text-white/55">Sites that convert</p>
                    </div>
                  ))}
                </div>

                <p className="relative mt-auto pt-10 text-sm font-semibold text-brand-aqua sm:text-base">
                  Local craft · Global-ready quality
                </p>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <SectionHeader
            eyebrow="Story"
            accent="teal"
            title="Started in 2025 with a simple idea"
            description="Organizations deserve websites that look premium, convert enquiries, and stay easy to manage — without chaos or vague timelines."
          />
          <div className="mt-10 grid auto-rows-fr gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <Card className="flex h-full min-h-[14rem] flex-col p-7 sm:p-8">
                <Heading as="h3" size="md">
                  Why we exist
                </Heading>
                <Text className="mt-3 flex-1 !text-base leading-relaxed">
                  Too many businesses and institutions settle for outdated sites or rigid templates.
                  SiOn was founded in {COMPANY.founded} to deliver custom websites and portals with
                  craft, accountability and care after go-live.
                </Text>
              </Card>
            </Reveal>
            <Reveal delay={0.06} className="h-full">
              <Card className="flex h-full min-h-[14rem] flex-col p-7 sm:p-8">
                <Heading as="h3" size="md">
                  What we offer
                </Heading>
                <Text className="mt-3 flex-1 !text-base leading-relaxed">
                  {COMPANY.focus}. Every engagement follows a clear process: discover, design,
                  develop, launch and support.
                </Text>
              </Card>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section tone="white">
        <Container>
          <SectionHeader eyebrow="Values" title="What guides every engagement" />
          <div className="mt-10 grid auto-rows-fr gap-4 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.04} className="h-full">
                <Card className="flex h-full min-h-[10.5rem] flex-col p-6">
                  <Heading as="h3" size="md">
                    {v.title}
                  </Heading>
                  <Text size="sm" className="mt-2 flex-1 !text-base">
                    {v.description}
                  </Text>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <SectionHeader eyebrow="Timeline" accent="amber" title="Our journey" />
          <ul className="mt-10 grid gap-4">
            {TIMELINE.map((item, i) => (
              <Reveal key={`${item.year}-${item.title}`} delay={i * 0.04} as="li" className="h-full">
                <Card className="flex h-full min-h-[7.5rem] flex-col gap-2 p-6 sm:flex-row sm:items-center sm:gap-8">
                  <span className="shrink-0 text-base font-bold text-brand-teal sm:w-24">
                    {item.year}
                  </span>
                  <div className="flex-1">
                    <Heading as="h3" size="sm">
                      {item.title}
                    </Heading>
                    <Text size="sm" className="mt-1 !text-base">
                      {item.description}
                    </Text>
                  </div>
                </Card>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <ProcessCarousel />

      <CTASection />
    </>
  )
}
