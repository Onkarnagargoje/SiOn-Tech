import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

/**
 * SiOn wordmark — Montserrat “Sı” + pill “O” + “n”, teal square tittle.
 * Pill SVG uses em units so it scales with text on every breakpoint.
 */
export default function Logo({
  to = '/',
  showUrl = false,
  light = false,
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: { text: 'text-[1.5rem]', url: 'text-[8px]', gap: 'gap-[0.12em]' },
    md: { text: 'text-[1.85rem] sm:text-[2.25rem]', url: 'text-[10px]', gap: 'gap-[0.14em]' },
    nav: {
      text: 'text-[1.85rem] sm:text-[2.45rem] lg:text-[2.9rem]',
      url: 'text-[11px]',
      gap: 'gap-[0.14em]',
    },
    lg: { text: 'text-4xl sm:text-5xl', url: 'text-xs sm:text-sm', gap: 'gap-[0.16em]' },
  }
  const s = sizes[size] || sizes.md
  const ink = light ? '#FFFFFF' : '#0B1220'
  const teal = light ? '#2DD4BF' : '#0D9488'

  const mark = (
    <span className={`inline-flex flex-col items-start ${className}`}>
      <span
        className={`inline-flex items-center font-logo font-bold leading-none tracking-tight ${s.text} ${s.gap}`}
        style={{ color: ink }}
      >
        <span className="relative inline-flex items-center">
          <span>S</span>
          <span className="relative inline-block">
            <span aria-hidden>ı</span>
            <span
              aria-hidden
              className="absolute left-1/2 top-[0.08em] h-[0.28em] w-[0.28em] -translate-x-1/2 rounded-[0.06em]"
              style={{ background: teal }}
            />
          </span>
          <span className="sr-only">i</span>
        </span>

        <svg
          viewBox="0 0 80 30"
          fill="none"
          aria-hidden
          className="mx-[0.02em] h-[0.95em] w-[2.55em] shrink-0"
        >
          <rect
            x="3.5"
            y="3.5"
            width="73"
            height="23"
            rx="11.5"
            stroke={ink}
            strokeWidth="7"
          />
        </svg>

        <span>n</span>
      </span>

      {showUrl && (
        <span
          className={`mt-1.5 max-w-full break-all font-logo font-semibold tracking-[0.06em] ${s.url}`}
          style={{ color: light ? 'rgba(255,255,255,0.7)' : '#4B5C6B' }}
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
      className="inline-flex min-w-0 max-w-[72%] shrink transition-opacity hover:opacity-85 sm:max-w-none"
      aria-label={`${SITE.name} home`}
    >
      {mark}
    </Link>
  )
}
