import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
  dark = false,
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from('.sh-item', {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 85%' },
      })
    },
    { scope: ref }
  )

  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'

  return (
    <div ref={ref} className={`flex flex-col gap-4 max-w-2xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className={`sh-item eyebrow eyebrow-dot ${dark ? 'text-zinc-400' : ''}`}>{eyebrow}</span>
      )}
      <h2 className={`sh-item text-headline ${dark ? 'text-white' : 'text-sion-ink'}`}>{title}</h2>
      {description && (
        <p className={`sh-item leading-relaxed ${dark ? 'text-zinc-400' : 'text-sion-muted'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
