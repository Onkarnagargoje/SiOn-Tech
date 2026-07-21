import { useEffect } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useLenis() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenis.on('scroll', ScrollTrigger.update)

    let running = true
    const raf = (time) => {
      if (!running) return
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      running = false
      lenis.destroy()
    }
  }, [])
}
