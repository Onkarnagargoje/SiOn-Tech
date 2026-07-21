import SEO from '../components/seo/SEO'
import Reveal from '../components/animations/Reveal'
import { CalendarDays, Target, Users, Rocket } from 'lucide-react'
import { COMPANY, TEAM, VALUES, TIMELINE } from '../data/about'
import ProcessCarousel from '../components/home/ProcessCarousel'
import {
  Avatar,
  Button,
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

      <Section tone="cream" className="!pt-10">
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

      <Section tone="white" className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-teal/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand-navy/10 blur-3xl"
        />
        <Container className="relative grid auto-rows-fr gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal className="h-full">
            <Card className="relative flex h-full min-h-[22rem] flex-col overflow-hidden !border-transparent !bg-brand-teal p-8 text-white sm:min-h-[24rem] sm:p-11 lg:p-12">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full border border-white/15"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute bottom-0 left-0 h-28 w-full opacity-30"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, rgba(255,255,255,0.45) 1px, transparent 1.2px)',
                  backgroundSize: '14px 14px',
                  maskImage: 'linear-gradient(to top, black, transparent)',
                }}
              />
              <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-white/70">
                Our purpose
              </p>
              <Heading as="h2" size="title" light className="relative mt-4 !text-white">
                Mission
              </Heading>
              <Text light className="relative mt-6 max-w-xl flex-1 !text-lg leading-relaxed !text-white/90 sm:!text-xl">
                Help every client launch a professional digital presence that matches their brand and
                stays reliable over time — with clear communication from brief to launch.
              </Text>
              <p className="relative mt-8 text-sm font-semibold text-white/80 sm:text-base">
                Clarity · Craft · Care after launch
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <Card className="relative flex h-full min-h-[22rem] flex-col overflow-hidden !border-transparent !bg-brand-navy p-8 text-white sm:min-h-[24rem] sm:p-11 lg:p-12">
              <span
                aria-hidden
                className="pointer-events-none absolute -right-10 bottom-10 h-48 w-48 rounded-full bg-brand-aqua/15 blur-2xl"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-10 right-0 w-16 opacity-30"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(90deg, rgba(255,255,255,0.2) 0 1px, transparent 1px 7px)',
                  maskImage: 'linear-gradient(to left, black, transparent)',
                }}
              />
              <p className="relative text-xs font-bold uppercase tracking-[0.18em] text-white/65">
                Where we&apos;re headed
              </p>
              <Heading as="h2" size="title" light className="relative mt-4 !text-white">
                Vision
              </Heading>
              <Text light className="relative mt-6 max-w-xl flex-1 !text-lg leading-relaxed !text-white/90 sm:!text-xl">
                Become a trusted website and portal partner for growing organizations — starting with
                businesses, colleges and schools worldwide.
              </Text>
              <p className="relative mt-8 text-sm font-semibold text-brand-aqua sm:text-base">
                Businesses · Colleges · Schools
              </p>
            </Card>
          </Reveal>
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

      <Section tone="white">
        <Container>
          <SectionHeader eyebrow="Team" title="People behind the craft" />
          <div className="mt-10 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.04} className="h-full">
                <Card className="flex h-full min-h-[15rem] flex-col p-6">
                  <Avatar initials={member.initials} index={i} className="!h-12 !w-12 !text-sm" />
                  <Heading as="h3" size="md" className="mt-4">
                    {member.name}
                  </Heading>
                  <p className="text-sm font-semibold text-brand-teal sm:text-base">{member.role}</p>
                  <Text size="sm" className="mt-2 flex-1 !text-base">
                    {member.bio}
                  </Text>
                </Card>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Button to="/contact" icon className="!rounded-full">
              Work with us
            </Button>
          </div>
        </Container>
      </Section>

      <ProcessCarousel />

      <CTASection />
    </>
  )
}
