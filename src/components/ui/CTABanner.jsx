import Button from './Button'
import Reveal from '../animations/Reveal'

export default function CTABanner() {
  return (
    <section className="section-pad bg-sion-paper pb-20 lg:pb-28">
      <div className="container-wide">
        <div className="mb-8 max-w-xl">
          <p className="eyebrow eyebrow-dot">Get started</p>
          <h2 className="mt-4 text-headline text-sion-ink">Ready to start your journey</h2>
        </div>
        <Reveal>
          <div className="relative overflow-hidden rounded-5xl bg-sion-ink px-8 py-14 text-center text-white shadow-lift sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                backgroundSize: '22px 22px',
              }}
              aria-hidden
            />
            <h3 className="relative text-2xl font-bold sm:text-3xl lg:text-4xl">
              Join businesses and institutions who trust SiOn Tech
            </h3>
            <p className="relative mx-auto mt-4 max-w-lg text-zinc-400">
              Custom websites, portals and digital care — delivered with premium craft and clear communication.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Button to="/contact" variant="white" icon>
                Book a free consultation
              </Button>
              <Button to="/services" variant="ghost-light">
                Explore services
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
