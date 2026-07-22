import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

/**
 * Premium SiOn wordmark — refined Montserrat letters, dual-stroke pill O,
 * jewel teal tittle. Optical spacing tuned for nav / footer / hero use.
 */
export default function Logo({
  to = '/',
  showUrl = false,
  light = false,
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: { text: 'text-[1.4rem]', url: 'text-[7px]', gap: 'gap-[0.08em]' },
    md: { text: 'text-[1.7rem] sm:text-[2.05rem]', url: 'text-[9px]', gap: 'gap-[0.1em]' },
    nav: {
      text: 'text-[1.45rem] sm:text-[2rem] lg:text-[2.35rem]',
      url: 'text-[10px]',
      gap: 'gap-[0.1em]',
    },
    lg: { text: 'text-[2.5rem] sm:text-5xl', url: 'text-xs sm:text-sm', gap: 'gap-[0.12em]' },
  }
  const s = sizes[size] || sizes.md
  const ink = light ? '#FFFFFF' : '#0B1220'
  const inkSoft = light ? 'rgba(255,255,255,0.35)' : 'rgba(11,18,32,0.14)'
  const teal = light ? '#5EEAD4' : '#0D9488'
  const tealDeep = light ? '#2DD4BF' : '#0F766E'
  const uid = light ? 'logoLight' : 'logoDark'

  const mark = (
    <span className={`group/logo inline-flex flex-col items-start ${className}`}>
      <span
        className={`inline-flex items-center font-logo font-medium leading-none tracking-[-0.04em] ${s.text} ${s.gap}`}
        style={{ color: ink }}
      >
        {/* Si — optical pair with jewel tittle */}
        <span className="relative inline-flex items-baseline">
          <span className="transition-colors duration-300">S</span>
          <span className="relative inline-block">
            <span aria-hidden className="transition-colors duration-300">
              ı
            </span>
            <span
              aria-hidden
              className="absolute left-1/2 top-[0.06em] h-[0.2em] w-[0.2em] -translate-x-1/2 rounded-[0.04em] shadow-[0_0_0_1px_rgba(13,148,136,0.12)] transition duration-300 group-hover/logo:scale-110 group-hover/logo:shadow-[0_0_10px_rgba(13,148,136,0.45)]"
              style={{
                background: `linear-gradient(145deg, ${teal} 0%, ${tealDeep} 100%)`,
              }}
            />
          </span>
          <span className="sr-only">i</span>
        </span>

        {/* Pill O — dual stroke for depth */}
        <svg
          viewBox="0 0 88 32"
          fill="none"
          aria-hidden
          className="mx-[0.04em] h-[0.82em] w-[2.2em] shrink-0 translate-y-[0.08em] transition duration-300 group-hover/logo:translate-y-[0.06em]"
        >
          <defs>
            <linearGradient id={`${uid}-pill`} x1="0" y1="0" x2="88" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor={ink} stopOpacity="0.92" />
              <stop offset="0.5" stopColor={ink} stopOpacity="1" />
              <stop offset="1" stopColor={ink} stopOpacity="0.88" />
            </linearGradient>
            <linearGradient id={`${uid}-sheen`} x1="12" y1="4" x2="76" y2="28" gradientUnits="userSpaceOnUse">
              <stop stopColor={teal} stopOpacity={light ? '0.35' : '0.22'} />
              <stop offset="1" stopColor={teal} stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* Soft outer halo */}
          <rect
            x="2.5"
            y="2.5"
            width="83"
            height="27"
            rx="13.5"
            stroke={inkSoft}
            strokeWidth="5.5"
          />
          {/* Crisp capsule */}
          <rect
            x="4"
            y="4"
            width="80"
            height="24"
            rx="12"
            stroke={`url(#${uid}-pill)`}
            strokeWidth="3.25"
          />
          {/* Inner sheen arc */}
          <path
            d="M18 9.5C28 7.5 60 7.5 70 9.5"
            stroke={`url(#${uid}-sheen)`}
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>

        <span className="transition-colors duration-300">n</span>
      </span>

      {showUrl && (
        <span
          className={`mt-2 max-w-full font-logo text-[0.55em] font-medium uppercase tracking-[0.12em] sm:tracking-[0.16em] ${s.url}`}
          style={{ color: light ? 'rgba(255,255,255,0.55)' : '#64748B' }}
        >
          www.siontechsolutions.com
        </span>
      )}
    </span>
  )

  if (!to) {
    return (
      <span className="inline-flex" role="img" aria-label={SITE.name}>
        {mark}
      </span>
    )
  }

  return (
    <Link
      to={to}
      className="inline-flex min-w-0 max-w-[72%] shrink transition duration-300 hover:opacity-95 sm:max-w-none"
      aria-label={`${SITE.name} home`}
    >
      {mark}
    </Link>
  )
}
