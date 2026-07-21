import { TRUST_LOGOS } from '../../data/site'
import { Container } from '../ui'

export default function LogoCloud() {
  const logos = [...TRUST_LOGOS, ...TRUST_LOGOS]
  return (
    <div
      className="overflow-hidden border-b border-white/5 bg-[#09090b] py-10"
      aria-label="Organizations we work with"
    >
      <Container>
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Trusted by growing organizations
        </p>
      </Container>
      <div className="flex w-max animate-marquee gap-14 px-4">
        {logos.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="text-base font-bold tracking-[0.28em] text-zinc-600 sm:text-lg"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}
