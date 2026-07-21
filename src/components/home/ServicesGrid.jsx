import { SERVICES } from '../../data/home'
import { Container, Section, SectionHeader, ServiceCard } from '../ui'
import Reveal from '../animations/Reveal'

export default function ServicesGrid() {
  return (
    <Section id="services" tone="mist" ariaLabelledby="services-heading">
      <Container wide>
        <SectionHeader
          titleId="services-heading"
          eyebrow="Services"
          accent="teal"
          title="Four ways we help you go live — and stay live"
          description="From custom builds to long-term care, every engagement is shaped around your organization."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.06}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
