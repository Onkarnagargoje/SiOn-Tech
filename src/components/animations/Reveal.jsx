import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Reveal({
  children,
  className = '',
  delay = 0,
  y = 48,
  as: Tag = 'div',
}) {
  const ref = useRef(null)

  useGSAP(
    () => {
      gsap.from(ref.current, {
        y,
        opacity: 0,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
        },
      })
    },
    { scope: ref }
  )

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  )
}
