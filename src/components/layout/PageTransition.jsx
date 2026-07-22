import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

/** Fade only — never leave a transform on ancestors (breaks position:sticky). */
export default function PageTransition({ children }) {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        ref.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: 'power2.out', clearProps: 'opacity' },
      )
    },
    { scope: ref },
  )

  return <div ref={ref}>{children}</div>
}
