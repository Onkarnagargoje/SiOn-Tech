import { PILLARS } from '../../data/home'
import Reveal from '../animations/Reveal'

const themes = {
  white: 'bg-white text-sion-ink border border-sion-line',
  purple: 'bg-sion-purple text-white',
  dark: 'bg-sion-ink text-white',
  pattern: 'bg-sion-soft text-sion-ink border border-sion-line',
}

export default function Pillars() {
  return (
    <section className="section-pad bg-sion-paper py-20 lg:py-28" aria-labelledby="pillars-heading">
      <div className="container-wide">
        <div className="max-w-2xl">
          <p className="eyebrow eyebrow-dot">Metrics</p>
          <h2 id="pillars-heading" className="mt-4 text-headline text-sion-ink">
            Platform at a glance
          </h2>
          <p className="mt-4 text-sion-muted leading-relaxed">
            Everything you need to launch and care for a professional web presence — for businesses,
            colleges and schools.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((card, i) => (
            <Reveal key={card.id} delay={i * 0.06}>
              <article
                className={`relative flex h-full min-h-[280px] flex-col overflow-hidden rounded-4xl p-6 ${themes[card.theme]}`}
              >
                <div className="flex items-start justify-between">
                  <span className={`text-sm font-medium ${card.theme === 'white' || card.theme === 'pattern' ? 'text-zinc-400' : 'text-white/50'}`}>
                    {card.id}
                  </span>
                  <span
                    className={`rounded-lg px-2 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                      card.theme === 'white' || card.theme === 'pattern'
                        ? 'bg-sion-soft text-sion-muted'
                        : 'bg-white/10 text-white/80'
                    }`}
                  >
                    {card.label}
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-bold leading-snug">{card.title}</h3>
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    card.theme === 'white' || card.theme === 'pattern' ? 'text-sion-muted' : 'text-white/70'
                  }`}
                >
                  {card.description}
                </p>
                {card.theme === 'dark' && (
                  <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-2xl border border-white/10" aria-hidden />
                )}
                {card.theme === 'purple' && (
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/20 to-transparent" aria-hidden />
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
