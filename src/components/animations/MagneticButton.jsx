import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function MagneticButton({ children, className = '', strength = 0.35 }) {
  const ref = useRef(null)

  useGSAP(() => {
    const el = ref.current
    if (!el || window.matchMedia('(pointer: coarse)').matches) return

    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2
      gsap.to(el, { x: x * strength, y: y * strength, duration: 0.4, ease: 'power2.out' })
    }

    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
    }

    el.addEventListener('mousemove', onMove)
    el.addEventListener('mouseleave', onLeave)
    return () => {
      el.removeEventListener('mousemove', onMove)
      el.removeEventListener('mouseleave', onLeave)
    }
  }, { scope: ref })

  return (
    <div ref={ref} className={`inline-block will-change-transform ${className}`}>
      {children}
    </div>
  )
}
