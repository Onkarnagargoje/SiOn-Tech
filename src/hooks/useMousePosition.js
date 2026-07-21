import { useEffect, useState } from 'react'

export function useMousePosition(enabled = true) {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    if (!enabled) return

    const handle = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [enabled])

  return position
}
