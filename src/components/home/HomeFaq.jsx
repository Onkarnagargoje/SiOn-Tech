import { SITE_FAQS } from '../../data/site'
import { Container, Section, SectionHeader } from '../ui'
import Reveal from '../animations/Reveal'

/** Visible FAQ block — supports GEO/AI citation + FAQ schema on Home */
export default function HomeFaq() {
  return (
    <Section tone="mist" ariaLabelledby="faq-heading">
      <Container className="max-w-3xl">
        <SectionHeader
          titleId="faq-heading"
          eyebrow="FAQ"
          accent="teal"
          title="Questions teams ask us"
          description="Clear answers for businesses, colleges and schools exploring a new website or portal."
        />
        <div className="mt-10 space-y-4">
          {SITE_FAQS.map((item, i) => (
            <Reveal key={item.question} delay={i * 0.04}>
              <details className="group rounded-[1.35rem] border border-brand-line bg-white px-5 py-4 open:shadow-soft sm:px-6 sm:py-5">
                <summary className="cursor-pointer list-none font-display text-lg font-bold tracking-tight text-brand-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-4">
                    {item.question}
                    <span
                      aria-hidden
                      className="mt-1 text-brand-teal transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="mt-3 text-base leading-relaxed text-brand-slate sm:text-lg sm:leading-8">
                  {item.answer}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
