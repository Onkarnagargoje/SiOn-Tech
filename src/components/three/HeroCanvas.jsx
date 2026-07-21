import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, PerspectiveCamera } from '@react-three/drei'
import {
  DigitalGrid,
  FloatingCube,
  LightBeams,
  NetworkNodes,
  ParticleField,
} from './SceneObjects'
import { useIsMobile, useReducedMotion } from '../../hooks/useMediaQuery'

function CameraRig({ mouse }) {
  const cam = useRef()

  useFrame(() => {
    if (!cam.current) return
    cam.current.position.x += (mouse.current.x * 1.2 - cam.current.position.x) * 0.04
    cam.current.position.y += (mouse.current.y * 0.6 + 0.4 - cam.current.position.y) * 0.04
    cam.current.lookAt(0, 0, 0)
  })

  return <PerspectiveCamera ref={cam} makeDefault position={[0, 0.4, 7]} fov={45} />
}

function SceneContent({ mouse }) {
  return (
    <>
      <CameraRig mouse={mouse} />
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={1.2} color="#3B82F6" />
      <pointLight position={[-4, -2, 2]} intensity={0.8} color="#06B6D4" />
      <DigitalGrid />
      <ParticleField count={600} />
      <LightBeams />
      <NetworkNodes count={10} />
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.6}>
        <FloatingCube position={[-2.8, 1.2, 0]} scale={0.7} color="#3B82F6" />
      </Float>
      <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.8}>
        <FloatingCube position={[3, 0.2, -1]} scale={0.9} color="#06B6D4" />
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.5}>
        <FloatingCube position={[1.5, 1.8, 1]} scale={0.45} color="#3B82F6" />
      </Float>
    </>
  )
}

export default function HeroCanvas() {
  const mouse = useRef({ x: 0, y: 0 })
  const reduced = useReducedMotion()
  const mobile = useIsMobile()

  if (reduced) {
    return (
      <div className="absolute inset-0 bg-hero-mesh" aria-hidden>
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>
    )
  }

  return (
    <div
      className="absolute inset-0 z-0"
      onMouseMove={(e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1
        const y = -(e.clientY / window.innerHeight) * 2 + 1
        mouse.current = { x, y }
      }}
      aria-hidden
    >
      <Canvas
        dpr={mobile ? [1, 1.25] : [1, 1.75]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent mouse={mouse} />
        </Suspense>
      </Canvas>
    </div>
  )
}
