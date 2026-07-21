import { FEATURES } from '../../data/home'
import Reveal from '../animations/Reveal'

export default function FeaturesOrbit() {
  return (
    <section className="relative overflow-hidden bg-sion-ink py-20 text-white lg:py-28" aria-labelledby="features-heading">
      <div className="pointer-events-none absolute left-0 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-white/5" aria-hidden />
      <div className="pointer-events-none absolute left-16 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full border border-dashed border-white/10" aria-hidden />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-sion-violet/20 blur-[120px]" aria-hidden />

      <div className="section-pad container-wide relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow text-sion-lilac">
            <span className="mr-2 inline-block h-1.5 w-1.5 rounded-[2px] bg-sion-lilac" />
            Platform
          </p>
          <h2 id="features-heading" className="mt-4 text-headline text-white">
            Platform features
          </h2>
          <p className="mt-4 max-w-md text-zinc-400 leading-relaxed">
            Everything you need to launch, manage and grow a professional website — with clarity at every step.
          </p>
        </div>

        <div className="space-y-3">
          {FEATURES.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.04}>
              <div className="flex items-start gap-4 rounded-full border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur transition hover:border-sion-lilac/40 hover:bg-white/[0.07]">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-sion-ink">
                  {f.n}
                </span>
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-0.5 text-sm text-zinc-400">{f.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
