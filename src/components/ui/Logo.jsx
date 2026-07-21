import { Link } from 'react-router-dom'
import { SITE } from '../../data/site'

/**
 * SiOn wordmark — Montserrat “Sı” + pill “O” + “n”, teal square tittle.
 */
export default function Logo({
  to = '/',
  showUrl = false,
  light = false,
  size = 'md',
  className = '',
}) {
  const sizes = {
    sm: {
      text: 'text-[1.5rem]',
      pillH: 16,
      pillW: 40,
      stroke: 3.2,
      tittle: 6,
      url: 'text-[8px]',
      gap: 'gap-[0.12em]',
    },
    md: {
      text: 'text-[2.15rem] sm:text-[2.35rem]',
      pillH: 22,
      pillW: 60,
      stroke: 4,
      tittle: 8,
      url: 'text-[10px]',
      gap: 'gap-[0.14em]',
    },
    nav: {
      text: 'text-[2.85rem] sm:text-[3.25rem]',
      pillH: 30,
      pillW: 80,
      stroke: 5,
      tittle: 10,
      url: 'text-[11px]',
      gap: 'gap-[0.16em]',
    },
    lg: {
      text: 'text-5xl sm:text-6xl',
      pillH: 32,
      pillW: 78,
      stroke: 5,
      tittle: 11,
      url: 'text-xs sm:text-sm',
      gap: 'gap-[0.16em]',
    },
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
              className="absolute left-1/2 rounded-[2px]"
              style={{
                width: s.tittle,
                height: s.tittle,
                background: teal,
                top: '0.08em',
                transform: 'translateX(-50%)',
              }}
            />
          </span>
          <span className="sr-only">i</span>
        </span>

        <svg
          width={s.pillW}
          height={s.pillH}
          viewBox={`0 0 ${s.pillW} ${s.pillH}`}
          fill="none"
          aria-hidden
          className="shrink-0"
        >
          <rect
            x={s.stroke / 2}
            y={s.stroke / 2}
            width={s.pillW - s.stroke}
            height={s.pillH - s.stroke}
            rx={(s.pillH - s.stroke) / 2}
            stroke={ink}
            strokeWidth={s.stroke}
          />
        </svg>

        <span>n</span>
      </span>

      {showUrl && (
        <span
          className={`mt-1.5 font-logo font-semibold tracking-[0.06em] ${s.url}`}
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
    <Link to={to} className="inline-flex transition-opacity hover:opacity-85" aria-label={`${SITE.name} home`}>
      {mark}
    </Link>
  )
}
