import SEO from '../components/seo/SEO'
import { SERVICES } from '../data/services'
import Reveal from '../components/animations/Reveal'
import {
  Badge,
  Button,
  Card,
  Container,
  CTASection,
  Heading,
  IconBox,
  Section,
  Text,
} from '../components/ui'

export default function Services() {
  return (
    <>
      <SEO
        title="Services — Custom Websites, Portals & Maintenance"
        description="Custom website design, college & school websites, portal development, redesign and maintenance from SiOn Tech Solutions — serving India and worldwide."
        path="/services"
      />

      <Section tone="cream" className="!pt-10">
        <Container>
          <Badge tone="teal">Services</Badge>
          <Heading as="h1" size="display" serif className="mt-4 max-w-3xl">
            Capabilities for build, manage and care
          </Heading>
          <Text size="lg" className="mt-4 max-w-2xl">
            From first launch to long-term maintenance — websites and portals for businesses, colleges and schools.
          </Text>
        </Container>
      </Section>

      <Section tone="white" className="!pt-4">
        <Container className="space-y-5">
          {SERVICES.map((service, i) => {
            const Icon = service.icon
            return (
              <Reveal key={service.id}>
                <Card id={service.id} className="scroll-mt-24 grid gap-6 p-7 lg:grid-cols-12 lg:p-9">
                  <div className="lg:col-span-4">
                    <IconBox tone={service.accent}>
                      <Icon className="h-5 w-5" />
                    </IconBox>
                    <Heading as="h2" size="lg" className="mt-4">
                      {service.title}
                    </Heading>
                    <Text size="sm" className="mt-2">
                      {service.short}
                    </Text>
                  </div>
                  <div className="lg:col-span-5">
                    <Text>{service.description}</Text>
                    <ul className="mt-5 grid grid-cols-2 gap-2">
                      {service.features.map((f) => (
                        <li key={f}>
                          <Badge tone="mist">{f}</Badge>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-end lg:col-span-3 lg:justify-end">
                    <Button to="/contact" variant={i % 2 ? 'ink' : 'primary'} size="lg" icon>
                      Get a quote
                    </Button>
                  </div>
                </Card>
              </Reveal>
            )
          })}
        </Container>
      </Section>

      <CTASection />
    </>
  )
}
