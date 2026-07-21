import { TESTIMONIALS } from '../../data/home'
import { Container, Section, SectionHeader, TestimonialCard } from '../ui'
import Reveal from '../animations/Reveal'

export default function Testimonials() {
  return (
    <Section tone="cream" ariaLabelledby="testimonials-heading">
      <Container wide>
        <SectionHeader
          titleId="testimonials-heading"
          eyebrow="Testimonials"
          accent="coral"
          title="What clients say about working with SiOn"
          description="Clear communication, thoughtful design and dependable delivery."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <TestimonialCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
