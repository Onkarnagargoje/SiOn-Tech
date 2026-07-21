import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS } from '../../data/site'
import { Button, Logo } from '../ui'

function linkClass(overHero, floating, isActive) {
  const base =
    'relative inline-flex items-center rounded-full px-3.5 py-2 text-[15px] font-bold tracking-[-0.015em] transition-all duration-300 sm:px-4 sm:text-base'
  if (overHero) {
    return `${base} ${isActive ? 'text-white' : 'text-white/65 hover:text-white'}`
  }
  return `${base} ${
    isActive
      ? 'bg-brand-mist text-brand-ink'
      : 'text-brand-slate hover:bg-black/[0.04] hover:text-brand-ink'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => setOpen(false), [location.pathname, location.hash])

  useEffect(() => {
    let ticking = false

    const update = () => {
      const y = window.scrollY
      setScrolled((prev) => (prev ? y > 20 : y > 64))
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const scrollToHash = (hash) => {
    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const offset = 96
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  const goToHash = (path, hash) => (e) => {
    e.preventDefault()
    setOpen(false)
    const target = `#${hash}`
    if (location.pathname === path) {
      navigate({ pathname: path, hash: target }, { replace: true })
      requestAnimationFrame(() => scrollToHash(target))
    } else {
      navigate({ pathname: path, hash: target })
    }
  }

  const overHero = isHome && !scrolled
  const floating = scrolled
  const industriesActive = isHome && location.hash === '#industries'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
        floating ? 'px-3 pt-3 sm:px-5 sm:pt-4' : 'px-0 pt-0'
      }`}
    >
      <nav
        className={`mx-auto flex w-full items-center transition-all duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          floating
            ? 'h-[72px] max-w-[1040px] rounded-full border border-black/[0.06] bg-white/90 px-3 text-brand-ink shadow-[0_8px_30px_rgba(11,18,32,0.1)] backdrop-blur-xl sm:h-[84px] sm:px-5 lg:h-[92px] lg:px-6'
            : overHero
              ? 'h-[72px] border-b border-white/10 bg-transparent px-4 text-white sm:h-[88px] sm:px-8 lg:h-28 lg:px-12'
              : 'h-[72px] border-b border-brand-line/80 bg-brand-cream/90 px-4 text-brand-ink backdrop-blur-md sm:h-[88px] sm:px-8 lg:h-28 lg:px-12'
        }`}
        aria-label="Primary"
      >
        <div
          className={`flex w-full items-center justify-between gap-4 ${
            floating ? '' : 'mx-auto max-w-7xl'
          }`}
        >
          <Logo size="nav" light={overHero} />

          <ul
            className={`hidden items-center lg:flex ${
              floating ? 'gap-0.5' : 'gap-1'
            }`}
          >
            {NAV_LINKS.map((link) => (
              <li key={`${link.path}-${link.hash || link.label}`}>
                {link.hash ? (
                  <Link
                    to={{ pathname: link.path, hash: `#${link.hash}` }}
                    onClick={goToHash(link.path, link.hash)}
                    className={linkClass(overHero, floating, industriesActive)}
                  >
                    {link.label}
                    {industriesActive && overHero && (
                      <span className="absolute inset-x-3.5 bottom-1 h-[2px] rounded-full bg-brand-aqua" />
                    )}
                  </Link>
                ) : (
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      linkClass(
                        overHero,
                        floating,
                        link.path === '/' ? isActive && !location.hash : isActive
                      )
                    }
                  >
                    {({ isActive }) => {
                      const active =
                        link.path === '/' ? isActive && !location.hash : isActive
                      return (
                        <>
                          {link.label}
                          {active && overHero && (
                            <span className="absolute inset-x-3.5 bottom-1 h-[2px] rounded-full bg-brand-aqua" />
                          )}
                        </>
                      )
                    }}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button
              to="/contact"
              variant={overHero ? 'soft' : 'primary'}
              className={`hidden !rounded-full !font-bold lg:inline-flex ${
                floating
                  ? '!px-7 !py-3.5 !text-base sm:!text-lg'
                  : '!px-8 !py-4 !text-lg'
              }`}
            >
              Get a quote
            </Button>

            <button
              type="button"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden ${
                overHero
                  ? 'border-white/25 text-white hover:bg-white/10'
                  : 'border-brand-line bg-white text-brand-ink hover:bg-brand-mist'
              }`}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`mx-auto overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          open
            ? 'mt-2 max-h-[min(520px,calc(100dvh-6rem))] opacity-100'
            : 'pointer-events-none mt-0 max-h-0 opacity-0'
        } ${floating ? 'max-w-[960px]' : 'max-w-7xl px-3'}`}
      >
        <div className="max-h-[min(520px,calc(100dvh-6rem))] overflow-y-auto rounded-2xl border border-brand-line bg-white p-3 shadow-[0_12px_40px_rgba(11,18,32,0.12)]">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={`m-${link.path}-${link.hash || link.label}`}>
                {link.hash ? (
                  <Link
                    to={{ pathname: link.path, hash: `#${link.hash}` }}
                    onClick={goToHash(link.path, link.hash)}
                    className={`block rounded-xl px-4 py-3 text-base font-bold ${
                      industriesActive
                        ? 'bg-brand-mist text-brand-teal'
                        : 'text-brand-slate hover:bg-brand-mist/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    className={({ isActive }) =>
                      `block rounded-xl px-4 py-3 text-base font-bold ${
                        (link.path === '/' ? isActive && !location.hash : isActive)
                          ? 'bg-brand-mist text-brand-teal'
                          : 'text-brand-slate hover:bg-brand-mist/70'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
          <Button to="/contact" className="mt-2 w-full !rounded-full !py-3.5 !text-base !font-bold">
            Get a quote
          </Button>
        </div>
      </div>
    </header>
  )
}
