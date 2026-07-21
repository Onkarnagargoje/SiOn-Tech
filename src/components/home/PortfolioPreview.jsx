import { WORK } from '../../data/home'
import { Button, Container, Section, SectionHeader, WorkCard } from '../ui'
import Reveal from '../animations/Reveal'

export default function PortfolioPreview() {
  return (
    <Section tone="mist" ariaLabelledby="work-heading">
      <Container wide>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeader
            titleId="work-heading"
            eyebrow="Work"
            accent="navy"
            title="Selected websites and portals"
            description="A snapshot of projects for businesses and education clients."
          />
          <Button to="/portfolio" variant="ink" className="!rounded-full shrink-0 self-start sm:self-auto">
            View all work
          </Button>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {WORK.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.06}>
              <WorkCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
