import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import SEO from '../components/seo/SEO'
import { SITE } from '../data/site'
import Reveal from '../components/animations/Reveal'
import ContactForm from '../components/forms/ContactForm'
import {
  Card,
  Container,
  Heading,
  IconBox,
  Section,
  SectionHeader,
  Text,
} from '../components/ui'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="Contact SiOn Tech Solutions for website, portal, redesign or maintenance projects."
        path="/contact"
      />

      <Section tone="cream" className="!pb-6 !pt-6 sm:!pb-8 sm:!pt-10">
        <Container>
          <SectionHeader
            eyebrow="Contact"
            accent="coral"
            title="Let's build your next website"
            description="Tell us about your business, college or school project. We typically reply within 24 hours."
          />
        </Container>
      </Section>

      <Section tone="white" className="!pt-2 sm:!pt-4">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7 min-w-0">
            <Card className="p-6 sm:p-10 lg:p-11">
              <ContactForm idPrefix="contact" submitLabel="Send message" />
            </Card>
          </Reveal>

          <div className="space-y-5 lg:col-span-5 min-w-0">
            {[
              {
                Icon: Mail,
                label: 'Email',
                value: SITE.email,
                href: `mailto:${SITE.email}`,
                tone: 'teal',
              },
              {
                Icon: Phone,
                label: 'Phone',
                value: SITE.phoneDisplay || SITE.phone,
                href: `tel:${SITE.phoneTel}`,
                tone: 'coral',
              },
              { Icon: Clock, label: 'Response', value: 'Within 24 hours', tone: 'amber' },
              { Icon: MapPin, label: 'Coverage', value: SITE.address, tone: 'navy' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 0.04}>
                <Card className="flex items-start gap-5 p-6 sm:p-7">
                  <IconBox tone={item.tone}>
                    <item.Icon className="h-5 w-5" />
                  </IconBox>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block break-all font-semibold text-brand-ink hover:text-brand-teal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <Heading as="p" size="sm" className="mt-2">
                        {item.value}
                      </Heading>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
            <Text size="sm" className="!mt-2">
              We work remote-first with clients worldwide.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  )
}
