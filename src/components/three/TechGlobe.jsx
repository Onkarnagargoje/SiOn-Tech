import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from '../../hooks/useMediaQuery'

function Globe() {
  const group = useRef()
  const points = useMemo(() => {
    const arr = []
    for (let i = 0; i < 180; i++) {
      const phi = Math.acos(-1 + (2 * i) / 180)
      const theta = Math.sqrt(180 * Math.PI) * phi
      arr.push([
        1.6 * Math.cos(theta) * Math.sin(phi),
        1.6 * Math.sin(theta) * Math.sin(phi),
        1.6 * Math.cos(phi),
      ])
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15
  })

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.55, 32, 32]} />
        <meshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.15} />
      </mesh>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.02, 6, 6]} />
          <meshBasicMaterial color={i % 3 === 0 ? '#06B6D4' : '#3B82F6'} />
        </mesh>
      ))}
    </group>
  )
}

export default function TechGlobe({ className = '' }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={`rounded-full bg-glow-radial ${className}`} aria-hidden />
  }

  return (
    <div className={className} aria-hidden>
      <Canvas camera={{ position: [0, 0, 4.2], fov: 40 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <Globe />
        </Suspense>
      </Canvas>
    </div>
  )
}
