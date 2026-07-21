import { CheckCircle2 } from 'lucide-react'
import { COMPANY } from '../../data/about'
import { Button, Container, Section, SectionHeader, Text, Card, Heading } from '../ui'
import Reveal from '../animations/Reveal'

const points = [
  'Demand-driven websites for businesses, colleges and schools',
  'Portals with secure access and clear workflows',
  'Transparent timelines and collaborative delivery',
  'Management and maintenance after launch',
]

export default function AboutPreview() {
  return (
    <Section tone="cream" ariaLabelledby="about-heading">
      <Container wide className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Card className="overflow-hidden !rounded-[2rem] p-0 shadow-mid">
            <div className="bg-gradient-to-br from-brand-teal to-brand-navy px-8 py-10 text-white sm:px-10 sm:py-12">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-white/70">About SiOn</p>
              <Heading as="h3" size="title" light className="mt-4 !text-white">
                Founded in {COMPANY.founded}. Built for clarity and craft.
              </Heading>
              <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  [String(COMPANY.founded), 'Founded'],
                  ['4', 'Core services'],
                  ['3', 'Client types'],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl bg-white/15 px-3 py-4 backdrop-blur sm:px-4">
                    <p className="text-2xl font-extrabold sm:text-3xl">{v}</p>
                    <p className="mt-1 text-sm text-white/70 sm:text-base">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </Reveal>

        <div>
          <SectionHeader
            titleId="about-heading"
            eyebrow="About"
            accent="coral"
            title="A client-focused partner for serious web work"
            description={`SiOn Tech Solutions was founded in ${COMPANY.founded} to help organizations launch and care for professional websites and portals — with craft, clarity and accountability.`}
          />
          <ul className="mt-10 space-y-4">
            {points.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <li className="flex items-start gap-4 rounded-2xl border border-brand-line bg-white px-5 py-4 shadow-soft">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-brand-teal" />
                  <Text className="!text-base font-semibold !text-brand-ink sm:!text-lg">{p}</Text>
                </li>
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Button to="/about" variant="outline" className="!rounded-full" icon>
              Learn more about us
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  )
}
