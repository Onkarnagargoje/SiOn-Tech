import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function PageTransition({ children }) {
  const ref = useRef(null)

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
    )
  }, { scope: ref })

  return <div ref={ref}>{children}</div>
}
