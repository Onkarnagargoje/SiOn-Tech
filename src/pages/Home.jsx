import SEO from '../components/seo/SEO'
import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import AboutPreview from '../components/home/AboutPreview'
import ProcessPreview from '../components/home/ProcessPreview'
import Industries from '../components/home/Industries'
import WhyChooseUs from '../components/home/WhyChooseUs'
import ContactInquiry from '../components/home/ContactInquiry'
import { CTASection } from '../components/ui'
import { SITE } from '../data/site'

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="Custom Websites, Portals & Maintenance"
        description={SITE.description}
        jsonLd={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              name: SITE.name,
              url: SITE.url,
              email: SITE.email,
              telephone: SITE.phone,
              description: SITE.description,
              sameAs: Object.values(SITE.social),
            },
            {
              '@type': 'ProfessionalService',
              name: SITE.name,
              url: SITE.url,
              description: SITE.description,
              areaServed: 'Worldwide',
              serviceType: [
                'Custom Website Development',
                'Portal Development',
                'Website Management',
                'Website Redesign',
                'Website Maintenance',
              ],
            },
          ],
        }}
      />
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <ProcessPreview />
      <Industries />
      <WhyChooseUs />
      <ContactInquiry />
      <CTASection />
    </>
  )
}
