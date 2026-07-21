import { PROCESS } from '../../data/home'
import { Container, Section, SectionHeader, ProcessStep } from '../ui'

export default function ProcessPreview() {
  return (
    <Section tone="white" ariaLabelledby="process-heading">
      <Container wide className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
          <SectionHeader
            titleId="process-heading"
            eyebrow="Process"
            accent="amber"
            title="How we work with you"
            description="Five clear stages from first conversation to ongoing support — so you always know what happens next."
          />
        </div>
        <div className="lg:col-span-7">
          {PROCESS.map((step, i) => (
            <ProcessStep key={step.title} step={step} index={i} total={PROCESS.length} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
