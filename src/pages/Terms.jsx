import SEO from '../components/seo/SEO'
import { SITE } from '../data/site'

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="Terms of Service for SiOn Tech Solutions website and engagements."
        path="/terms"
      />
      <article className="section-pad pb-24 pt-32 lg:pt-40">
        <div className="container-max max-w-3xl">
          <h1 className="text-headline font-semibold mb-4">Terms of Service</h1>
          <p className="text-sion-muted mb-10">Last updated: July 1, 2026</p>

          <div className="space-y-8 text-sion-muted leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance</h2>
              <p>
                By accessing {SITE.url}, you agree to these Terms. If you do not agree, please do not use
                the site.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Services</h2>
              <p>
                Project engagements are governed by separate statements of work or master service
                agreements. Website content is for informational purposes and does not constitute a binding
                offer.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Intellectual Property</h2>
              <p>
                All branding, copy, and design on this site are owned by {SITE.name} unless otherwise noted.
                You may not reproduce materials without written permission.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, {SITE.name} is not liable for indirect or
                consequential damages arising from use of this website.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Contact</h2>
              <p>
                Questions about these Terms:{' '}
                <a href={`mailto:${SITE.email}`} className="text-sion-cyan hover:underline">
                  {SITE.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </article>
    </>
  )
}
