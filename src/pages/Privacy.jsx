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
    title: 'Introduction',
    body: `${SITE.name} (“we”, “us”) respects your privacy. This policy explains how we collect, use, and safeguard information when you visit ${SITE.url} or contact us about websites, portals, redesign or maintenance.`,
  },
  {
    title: 'Information we collect',
    body: 'We may collect personal information you provide — name, email, organization, and message content — via contact forms. We may also collect anonymous analytics such as pages visited, device type, and approximate location.',
  },
  {
    title: 'How we use information',
    body: 'We use information to respond to inquiries, prepare project proposals, improve our website, and fulfill contracted work. We do not sell personal data. We only share information with providers needed to operate the site (for example, email delivery) under appropriate safeguards.',
  },
  {
    title: 'Cookies & analytics',
    body: 'We may use essential cookies for site function and optional analytics cookies to understand traffic. You can control cookies through your browser settings. Disabling cookies may limit some site features.',
  },
  {
    title: 'Data retention',
    body: 'Contact messages are kept only as long as needed to respond and manage the relationship, unless a longer period is required for legal or contractual reasons.',
  },
  {
    title: 'Your rights',
    body: 'Depending on your location, you may request access, correction, or deletion of personal information we hold. Contact us and we will respond within a reasonable time.',
  },
  {
    title: 'Contact',
    body: null,
  },
]

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for SiOn Tech Solutions — how we collect, use, and protect your information."
        path="/privacy"
      />

      <Section tone="mist" className="!pt-8 sm:!pt-10" ariaLabelledby="privacy-heading">
        <Container className="max-w-3xl">
          <SectionHeader
            titleId="privacy-heading"
            eyebrow="Legal"
            accent="teal"
            title="Privacy Policy"
            description={`Last updated: July 1, 2026 · Applies to ${SITE.url} and related inquiries.`}
          />
        </Container>
      </Section>

      <Section tone="white" className="!pt-4 sm:!pt-6">
        <Container className="max-w-3xl space-y-8">
          {SECTIONS.map((block, i) => (
            <article
              key={block.title}
              className="rounded-[1.5rem] border border-brand-line bg-brand-mist/40 p-6 sm:p-8"
            >
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-brand-teal">
                {String(i + 1).padStart(2, '0')}
              </p>
              <Heading as="h2" size="md" className="mt-2">
                {block.title}
              </Heading>
              {block.body ? (
                <Text className="mt-3">{block.body}</Text>
              ) : (
                <Text className="mt-3">
                  For privacy requests, email{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="whitespace-nowrap font-semibold text-brand-teal underline-offset-2 hover:underline"
                  >
                    {SITE.email}
                  </a>{' '}
                  or call{' '}
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="whitespace-nowrap font-semibold text-brand-teal underline-offset-2 hover:underline"
                  >
                    {SITE.phoneDisplay}
                  </a>
                  .
                </Text>
              )}
            </article>
          ))}
        </Container>
      </Section>

      <CTASection
        title="Questions about your data?"
        description="Reach out anytime — we will clarify how we handle information for your project."
        primaryLabel="Contact us"
        primaryTo="/contact"
        secondaryLabel="Back to home"
        secondaryTo="/"
      />
    </>
  )
}
