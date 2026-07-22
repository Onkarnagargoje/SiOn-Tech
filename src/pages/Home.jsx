import SEO from '../components/seo/SEO'
import Hero from '../components/home/Hero'
import ServicesGrid from '../components/home/ServicesGrid'
import AboutPreview from '../components/home/AboutPreview'
import ProcessPreview from '../components/home/ProcessPreview'
import Industries from '../components/home/Industries'
import WhyChooseUs from '../components/home/WhyChooseUs'
import HomeFaq from '../components/home/HomeFaq'
import ContactInquiry from '../components/home/ContactInquiry'
import { CTASection } from '../components/ui'
import { SITE } from '../data/site'
import {
  breadcrumbJsonLd,
  defaultGraphJsonLd,
  faqJsonLd,
} from '../lib/seo'

export default function Home() {
  const title = 'Custom Websites, Portals & Maintenance in India'
  const description = SITE.description

  return (
    <>
      <SEO
        path="/"
        title={title}
        description={description}
        jsonLd={defaultGraphJsonLd({
          title: `${title} | ${SITE.name}`,
          description,
          path: '/',
          extra: [
            breadcrumbJsonLd([{ name: 'Home', path: '/' }]),
            faqJsonLd(),
          ],
        })}
      />
      <Hero />
      <ServicesGrid />
      <AboutPreview />
      <ProcessPreview />
      <Industries />
      <WhyChooseUs />
      <HomeFaq />
      <ContactInquiry />
      <CTASection />
    </>
  )
}
