import SEO from '../components/seo/SEO'
import { SITE } from '../data/site'
import {
  Container,
  CTASection,
  Heading,
  Section,
  SectionHeader,
  Text,
} from '../components/ui'

const SECTIONS = [
  {
    title: 'Acceptance',
    body: `By accessing ${SITE.url}, you agree to these Terms of Service. If you do not agree, please do not use the site.`,
  },
  {
    title: 'Services',
    body: 'Website content is informational and does not create a binding offer. Custom website, portal, redesign, and maintenance work are governed by separate proposals, statements of work, or service agreements.',
  },
  {
    title: 'Intellectual property',
    body: `Branding, copy, layouts, and design on this site are owned by ${SITE.name} unless otherwise noted. You may not copy or reuse materials without written permission.`,
  },
  {
    title: 'Acceptable use',
    body: 'You agree not to misuse the site — including attempting to disrupt service, scrape content at scale, or submit malicious or unlawful content through forms.',
  },
  {
    title: 'Limitation of liability',
    body: `To the fullest extent permitted by law, ${SITE.name} is not liable for indirect, incidental, or consequential damages arising from use of this website. Project liability is defined in your signed agreement.`,
  },
  {
    title: 'Changes',
    body: 'We may update these Terms from time to time. Continued use of the site after changes means you accept the revised Terms. The “Last updated” date at the top reflects the latest revision.',
  },
  {
    title: 'Contact',
    body: null,
  },
]

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for SiOn Tech Solutions website and engagements."
        path="/terms"
      />

      <Section tone="mist" className="!pt-8 sm:!pt-10" ariaLabelledby="terms-heading">
        <Container className="max-w-3xl">
          <SectionHeader
            titleId="terms-heading"
            eyebrow="Legal"
            accent="coral"
            title="Terms of Service"
            description={`Last updated: July 1, 2026 · Governs use of ${SITE.url} and related site content.`}
          />
        </Container>
      </Section>

      <Section tone="white" className="!pt-4 sm:!pt-6">
        <Container className="max-w-3xl space-y-8">
          {SECTIONS.map((block, i) => (
            <article
              key={block.title}
              className="rounded-[1.5rem] border border-brand-line bg-white p-6 shadow-soft sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-coral">
                {String(i + 1).padStart(2, '0')}
              </p>
              <Heading as="h2" size="md" className="mt-2">
                {block.title}
              </Heading>
              {block.body ? (
                <Text className="mt-3">{block.body}</Text>
              ) : (
                <Text className="mt-3">
                  Questions about these Terms:{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="whitespace-nowrap font-semibold text-brand-teal underline-offset-2 hover:underline"
                  >
                    {SITE.email}
                  </a>{' '}
                  ·{' '}
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="whitespace-nowrap font-semibold text-brand-teal underline-offset-2 hover:underline"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </Text>
              )}
            </article>
          ))}
        </Container>
      </Section>

      <CTASection
        title="Ready to start a project?"
        description="Tell us what you need built — we will reply with a clear next step."
        primaryLabel="Get a quote"
        primaryTo="/contact"
        secondaryLabel="View services"
        secondaryTo="/services"
      />
    </>
  )
}
