import { WHY } from '../../data/home'
import { Container, Section, SectionHeader, WhyCard } from '../ui'
import Reveal from '../animations/Reveal'

export default function WhyChooseUs() {
  return (
    <Section tone="white" ariaLabelledby="why-heading">
      <Container wide>
        <SectionHeader
          titleId="why-heading"
          eyebrow="Why SiOn"
          accent="teal"
          title="Why organizations choose SiOn Tech"
          description="A practical partner for websites that need to look professional and keep working."
          align="center"
          className="mx-auto"
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WHY.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <WhyCard item={item} index={i} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
