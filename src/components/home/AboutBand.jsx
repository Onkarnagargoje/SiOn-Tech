import { STATS } from '../../data/site'
import Reveal from '../animations/Reveal'

export default function AboutBand() {
  return (
    <section className="section-pad bg-sion-paper py-20 lg:py-28" aria-labelledby="about-band-heading">
      <div className="container-wide">
        <div className="mb-8 max-w-xl">
          <p className="eyebrow eyebrow-dot">Live platform</p>
          <h2 id="about-band-heading" className="mt-4 text-headline text-sion-ink">
            Continuous digital care
          </h2>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-5xl bg-sion-ink text-white shadow-lift">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-10 lg:p-12">
                <h3 className="text-2xl font-bold sm:text-3xl">Websites that never go neglected</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Your site evolves as your organization does. SiOn pairs premium design and development with
                  management and maintenance — so security, speed and content stay sharp long after launch.
                </p>
                <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
                  {STATS.slice(0, 3).map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-bold text-white">{s.value}</p>
                      <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[280px] border-t border-white/10 bg-gradient-to-br from-zinc-900 to-sion-ink p-8 lg:border-l lg:border-t-0">
                <span className="absolute right-6 top-6 rounded-full bg-emerald-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
                  ● Live
                </span>
                <div className="mt-8 space-y-3">
                  {[
                    { label: 'Uptime this month', value: '99.98%' },
                    { label: 'Pages updated', value: '128' },
                    { label: 'Avg. load time', value: '1.2s' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
                    >
                      <span className="text-sm text-zinc-400">{item.label}</span>
                      <span className="text-sm font-semibold text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 h-28 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-full items-end gap-1.5">
                    {[30, 50, 40, 70, 55, 85, 60, 95, 75, 88].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm bg-gradient-to-t from-sion-purple/40 to-sion-lilac"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
