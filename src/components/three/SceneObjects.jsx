import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function ParticleField({ count = 800 }) {
  const points = useRef()
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [count])

  useFrame(({ clock }) => {
    if (!points.current) return
    points.current.rotation.y = clock.elapsedTime * 0.02
    points.current.rotation.x = Math.sin(clock.elapsedTime * 0.05) * 0.05
  })

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#06B6D4"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export function FloatingCube({ position, scale = 1, color = '#3B82F6' }) {
  const mesh = useRef()
  const offset = useMemo(() => Math.random() * Math.PI * 2, [])

  useFrame(({ clock }) => {
    const t = clock.elapsedTime
    mesh.current.rotation.x = t * 0.3 + offset
    mesh.current.rotation.y = t * 0.4 + offset
    mesh.current.position.y = position[1] + Math.sin(t * 0.8 + offset) * 0.25
  })

  return (
    <mesh ref={mesh} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.35}
        metalness={0.8}
        roughness={0.2}
        emissive={color}
        emissiveIntensity={0.4}
        wireframe
      />
    </mesh>
  )
}

export function LightBeams() {
  const group = useRef()

  useFrame(({ clock }) => {
    if (group.current) {
      group.current.rotation.z = Math.sin(clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <group ref={group}>
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[i * 1.2 - 1.2, 0, -2]} rotation={[0, 0, Math.PI / 6 + i * 0.2]}>
          <planeGeometry args={[0.08, 8]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#3B82F6' : '#06B6D4'}
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
    </group>
  )
}

export function DigitalGrid() {
  const ref = useRef()

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.position.z = (clock.elapsedTime * 0.15) % 2
    }
  })

  return (
    <group ref={ref} position={[0, -2.5, 0]} rotation={[-Math.PI / 2.4, 0, 0]}>
      <gridHelper args={[30, 40, '#1e3a5f', '#0f172a']} />
    </group>
  )
}

export function NetworkNodes({ count = 12 }) {
  const group = useRef()
  const nodes = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        pos: [
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 4,
        ],
        speed: 0.2 + Math.random() * 0.4,
      })),
    [count]
  )

  const linePositions = useMemo(() => {
    const pts = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const a = nodes[i].pos
        const b = nodes[j].pos
        const dist = Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2])
        if (dist < 3.5) {
          pts.push(...a, ...b)
        }
      }
    }
    return new Float32Array(pts)
  }, [nodes])

  useFrame(({ clock }) => {
    if (!group.current) return
    group.current.rotation.y = clock.elapsedTime * 0.08
    group.current.children.forEach((child, i) => {
      if (child.isMesh && nodes[i]) {
        child.position.y = nodes[i].pos[1] + Math.sin(clock.elapsedTime * nodes[i].speed + i) * 0.15
      }
    })
  })

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh key={i} position={n.pos}>
          <sphereGeometry args={[0.06, 12, 12]} />
          <meshBasicMaterial color="#3B82F6" />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#06B6D4" transparent opacity={0.25} />
      </lineSegments>
    </group>
  )
}
