import SEO from '../components/seo/SEO'
import { WORK } from '../data/home'
import Reveal from '../components/animations/Reveal'
import { Container, CTASection, Section, SectionHeader, WorkCard } from '../components/ui'

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Work"
        description="Explore websites and portals built by SiOn Tech Solutions."
        path="/portfolio"
      />

      <Section tone="cream" className="!pt-10">
        <Container>
          <SectionHeader
            eyebrow="Work"
            accent="navy"
            title="Selected projects"
            description="Websites and portals crafted for businesses and education clients."
          />
        </Container>
      </Section>

      <Section tone="white" className="!pt-4">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {WORK.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <WorkCard item={item} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
