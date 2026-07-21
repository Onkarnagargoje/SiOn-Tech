import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export function useCountUp(end, { duration = 2, start = 0, enabled = true } = {}) {
  const [value, setValue] = useState(start)
  const ref = useRef(null)
  const hasRun = useRef(false)

  useEffect(() => {
    if (!enabled || hasRun.current) return
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true
          const obj = { val: start }
          gsap.to(obj, {
            val: end,
            duration,
            ease: 'power2.out',
            onUpdate: () => setValue(Math.round(obj.val)),
          })
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration, start, enabled])

  return { value, ref }
}
