import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { SITE } from '../../data/site'
import {
  Card,
  Container,
  Heading,
  IconBox,
  Section,
  SectionHeader,
} from '../ui'
import Reveal from '../animations/Reveal'
import ContactForm from '../forms/ContactForm'

export default function ContactInquiry() {
  return (
    <Section
      id="contact"
      tone="mist"
      ariaLabelledby="contact-heading"
      className="!py-12 sm:!py-14 lg:!py-16"
    >
      <Container wide>
        <SectionHeader
          titleId="contact-heading"
          eyebrow="Contact"
          accent="coral"
          title="Tell us what you need built"
          description="Share your website, portal, redesign or maintenance requirements."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
          <Reveal className="min-w-0 lg:col-span-7">
            <Card className="p-6 sm:p-9 lg:p-10">
              <ContactForm
                variant="compact"
                idPrefix="home"
                submitLabel="Send inquiry"
              />
            </Card>
          </Reveal>

          <div className="min-w-0 space-y-4 lg:col-span-5">
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
              <Reveal key={item.label} delay={i * 0.05}>
                <Card className="flex items-start gap-5 p-5 sm:p-6">
                  <IconBox tone={item.tone} className="!h-12 !w-12 shrink-0">
                    <item.Icon className="h-5 w-5" />
                  </IconBox>
                  <div className="min-w-0">
                    <p className="text-sm font-bold uppercase tracking-[0.12em] text-brand-slate sm:text-base">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="mt-2 block break-all text-base font-bold text-brand-ink hover:text-brand-teal sm:text-lg"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <Heading as="p" size="md" className="mt-2 !text-base sm:!text-lg">
                        {item.value}
                      </Heading>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
