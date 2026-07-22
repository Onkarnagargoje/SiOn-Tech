import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

/** Google Analytics 4 — active only when VITE_GA_MEASUREMENT_ID is set in .env */
export default function Analytics() {
  const location = useLocation()

  useEffect(() => {
    if (!MEASUREMENT_ID || typeof window === 'undefined') return
    if (window.__sionGaLoaded) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', MEASUREMENT_ID, {
      anonymize_ip: true,
      send_page_view: false,
    })
    window.__sionGaLoaded = true
  }, [])

  useEffect(() => {
    if (!MEASUREMENT_ID || typeof window === 'undefined' || typeof window.gtag !== 'function') return
    const page_path = `${location.pathname}${location.search}${location.hash}`
    window.gtag('event', 'page_view', {
      page_path,
      page_title: document.title,
      page_location: window.location.href,
    })
  }, [location.pathname, location.search, location.hash])

  return null
}
