import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useLenis } from '../../hooks/useLenis'
import PageTransition from './PageTransition'

export default function Layout() {
  useLenis()
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      const timer = window.setTimeout(() => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.getBoundingClientRect().top + window.scrollY - 96
        window.scrollTo({ top, behavior: 'smooth' })
      }, 80)
      return () => window.clearTimeout(timer)
    }
    window.scrollTo(0, 0)
  }, [location.pathname, location.hash])

  return (
    <div className="relative min-h-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-teal focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <PageTransition key={location.pathname}>
        <main id="main-content" className={isHome ? '' : 'pt-20'}>
          <Outlet />
        </main>
      </PageTransition>
      <Footer />
    </div>
  )
}
