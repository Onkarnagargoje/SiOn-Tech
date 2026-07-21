import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/** Character / word reveal for headlines */
export default function TextReveal({ children, className = '', as: Tag = 'h2', split = 'words' }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      const el = ref.current
      if (!el) return

      const text = el.textContent
      el.setAttribute('aria-label', text)

      if (split === 'chars') {
        el.innerHTML = text
          .split('')
          .map((c) =>
            c === ' '
              ? '<span class="inline-block">&nbsp;</span>'
              : `<span class="inline-block overflow-hidden"><span class="tr-char inline-block">${c}</span></span>`
          )
          .join('')
        gsap.from('.tr-char', {
          yPercent: 110,
          duration: 0.7,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      } else {
        el.innerHTML = text
          .split(' ')
          .map((w) => `<span class="inline-block overflow-hidden mr-[0.28em]"><span class="tr-word inline-block">${w}</span></span>`)
          .join('')
        gsap.from('.tr-word', {
          yPercent: 110,
          duration: 0.85,
          stagger: 0.04,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        })
      }
    },
    { scope: ref }
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
