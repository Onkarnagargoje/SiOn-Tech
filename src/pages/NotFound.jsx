import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'
import { Button, Container, Heading, Text } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="Page not found." path="/404" noindex />
      <div className="flex min-h-[70vh] items-center justify-center py-20">
        <Container className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-coral">Error 404</p>
          <Heading as="h1" size="display" serif className="mt-3">
            Page not found
          </Heading>
          <Text className="mx-auto mt-4 max-w-md">
            This page does not exist — or it moved. Let us get you back.
          </Text>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" icon>
              Back to home
            </Button>
            <Button to="/contact" variant="outline">
              Contact us
            </Button>
          </div>
          <Link to="/portfolio" className="mt-6 inline-block text-sm font-semibold text-brand-teal hover:text-brand-aqua">
            Or explore our work →
          </Link>
        </Container>
      </div>
    </>
  )
}
