import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ArrowRight } from 'lucide-react'
import { PROCESS } from '../../data/home'
import { Button, Container } from '../ui'
import MagneticButton from '../animations/MagneticButton'

const metrics = [
  { value: '01', label: 'Custom websites' },
  { value: '02', label: 'Secure portals' },
  { value: '03', label: 'Site management' },
  { value: '04', label: 'Redesign & care' },
]

export default function Hero() {
  const root = useRef(null)
  const spot = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero-in', { y: 22, opacity: 0, duration: 0.75, stagger: 0.08 })
        .from('.hero-panel', { y: 36, opacity: 0, duration: 0.9 }, 0.25)

      const el = root.current
      const light = spot.current
      if (!el || !light || window.matchMedia('(pointer: coarse)').matches) return

      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        gsap.to(light, {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
          duration: 0.55,
          ease: 'power2.out',
          overwrite: 'auto',
        })
      }

      el.addEventListener('pointermove', onMove)
      return () => el.removeEventListener('pointermove', onMove)
    },
    { scope: root },
  )

  return (
    <section
      ref={root}
      className="relative overflow-hidden bg-[#09090b] text-zinc-100"
      aria-labelledby="hero-heading"
    >
      {/* Ambient layers */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-0 h-[480px] w-[800px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(45,212,191,0.14),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_45%_at_50%_-5%,rgba(255,255,255,0.05),transparent)]" />

        {/* Soft floating orbs */}
        <div className="hero-orb absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-teal/20 blur-[90px]" />
        <div className="hero-orb-delay absolute -right-16 bottom-32 h-80 w-80 rounded-full bg-brand-coral/15 blur-[100px]" />

        {/* Cursor spotlight */}
        <div
          ref={spot}
          className="absolute left-0 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(45,212,191,0.18) 0%, rgba(45,212,191,0.06) 35%, transparent 70%)',
          }}
        />

        {/* Fine grain */}
        <div className="hero-grain absolute inset-0 opacity-[0.035]" />
      </div>

      <Container wide className="relative flex flex-col items-center pt-28 text-center lg:pt-36">
        <p className="hero-in text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          SiOn Tech Solutions
        </p>

        <h1
          id="hero-heading"
          className="hero-in mt-5 max-w-4xl font-display text-[clamp(2.5rem,6.2vw,4.5rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-white"
        >
          Custom websites that look{' '}
          <span className="bg-gradient-to-r from-white via-brand-aqua to-white bg-[length:200%_100%] bg-clip-text text-transparent animate-shimmer-text">
            premium
          </span>{' '}
          — and convert
        </h1>

        <p className="hero-in mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          We design and build websites and portals for businesses, colleges and schools — then manage
          and maintain them after launch.
        </p>

        <div className="hero-in mt-9 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton>
            <Button
              to="/contact"
              className="!rounded-full !bg-brand-aqua !px-7 !py-3.5 !text-[15px] !font-semibold !text-[#052e2b] !shadow-[0_0_40px_rgba(45,212,191,0.35)] hover:!bg-teal-300"
            >
              Book a free call
            </Button>
          </MagneticButton>
          <MagneticButton strength={0.2}>
            <Button
              to="/services"
              variant="ghost"
              className="!rounded-full !border-white/15 !bg-transparent !px-7 !py-3.5 !text-[15px] !text-zinc-200 hover:!bg-white/[0.06]"
            >
              View services
            </Button>
          </MagneticButton>
        </div>

        <div className="hero-in mt-5 text-sm text-zinc-500">
          Businesses · Colleges · Schools
        </div>

        {/* Professional proof panel */}
        <div className="hero-panel relative mt-14 w-full max-w-5xl pb-16 lg:mt-16 lg:pb-20">
          <div className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-brand-aqua/40 via-white/10 to-brand-coral/30 opacity-80 blur-[1px] sm:rounded-[1.6rem]" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white text-left shadow-[0_30px_80px_-24px_rgba(0,0,0,0.55)] sm:rounded-3xl">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-aqua/80 to-transparent" />

            {/* Metrics */}
            <div className="grid grid-cols-2 divide-x divide-y divide-zinc-100 border-b border-zinc-100 sm:grid-cols-4 sm:divide-y-0">
              {metrics.map((item) => (
                <div
                  key={item.label}
                  className="px-5 py-6 transition-colors duration-300 hover:bg-brand-mist/50 sm:px-6 sm:py-7"
                >
                  <p className="font-display text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
                    {item.value}
                  </p>
                  <p className="mt-2 text-base text-brand-slate sm:text-lg">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Process */}
            <div className="border-b border-zinc-100 bg-brand-mist/40 px-5 py-6 sm:px-8 sm:py-7">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-slate">
                  Delivery process
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-brand-teal hover:text-brand-ink"
                >
                  How we work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <ol className="grid gap-4 sm:grid-cols-5 sm:gap-3">
                {PROCESS.map((step, i) => (
                  <li key={step.title} className="relative flex flex-col sm:items-start">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-ink text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <p className="mt-3 text-base font-bold text-brand-ink sm:text-lg">{step.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-brand-slate sm:text-base">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Focus areas */}
            <div className="flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
              <div className="max-w-xl">
                <p className="text-base leading-relaxed text-brand-ink sm:text-lg">
                  Tell us what you need — a new site, a portal, a redesign, or ongoing care. We’ll
                  reply with a clear scope and next step.
                </p>
              </div>
              <MagneticButton strength={0.25}>
                <Link
                  to="/contact"
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-brand-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-navy"
                >
                  Start your project
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
