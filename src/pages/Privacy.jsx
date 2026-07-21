import SEO from '../components/seo/SEO'
import { SITE } from '../data/site'

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for SiOn Tech Solutions — how we collect, use, and protect your information."
        path="/privacy"
      />
      <article className="section-pad pb-24 pt-32 lg:pt-40">
        <div className="container-max max-w-3xl prose-sion">
          <h1 className="text-headline font-semibold mb-4">Privacy Policy</h1>
          <p className="text-sion-muted mb-10">Last updated: July 1, 2026</p>

          <div className="space-y-8 text-sion-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Introduction</h2>
              <p>
                {SITE.name} (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy. This policy
                explains how we collect, use, and safeguard information when you visit {SITE.url} or
                contact us.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
              <p>
                We may collect personal information you provide (name, email, company, message content)
                via contact or newsletter forms, as well as anonymous analytics data such as pages visited
                and approximate location.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Information</h2>
              <p>
                Information is used to respond to inquiries, improve our website, send newsletters you
                opt into, and fulfill contractual obligations. We do not sell personal data.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Cookies</h2>
              <p>
                We may use essential and analytics cookies. You can control cookies through your browser
                settings.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
              <p>
                For privacy requests, email{' '}
                <a href={`mailto:${SITE.email}`} className="text-sion-cyan hover:underline">
                  {SITE.email}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
