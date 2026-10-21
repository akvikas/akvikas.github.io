import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useReducedMotion } from 'framer-motion'
import type { Mesh } from 'three'
import { useIsMobile } from '../hooks/useIsMobile'
import { usePointer } from '../hooks/usePointer'

const SHAPES = ['octa', 'tetra', 'icosa', 'torus', 'octa', 'tetra'] as const

function Scene({ mobile, reduced }: { mobile: boolean; reduced: boolean }) {
  const pointer = usePointer()
  const shapes = useRef<(Mesh | null)[]>([])
  const positions = useMemo(() => {
    const n = mobile ? 80 : 200
    const a = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      a[i * 3] = (Math.random() - 0.5) * 28
      a[i * 3 + 1] = Math.random() * -38 + 4
      a[i * 3 + 2] = (Math.random() - 0.5) * 14 - 3
    }
    return a
  }, [mobile])

  useFrame(({ camera }) => {
    const max = document.documentElement.scrollHeight - innerHeight
    const p = max > 0 ? scrollY / max : 0
    camera.position.y += (-p * 32 - camera.position.y) * 0.08
    camera.position.x += (pointer.current.x * 0.8 - camera.position.x) * 0.04
    if (!reduced) {
      shapes.current.forEach((m, i) => {
        if (!m) return
        m.rotation.x += 0.003 + i * 0.0004
        m.rotation.y += 0.004
      })
    }
  })

  return (
    <>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#6fdcff" size={0.06} transparent opacity={0.55} />
      </points>
      {SHAPES.map((k, i) => (
        <mesh
          key={i}
          ref={(el) => { shapes.current[i] = el }}
          position={[(i % 2 ? 1 : -1) * (mobile ? 2.4 : 7), -i * 6.5 - 1, -2]}
        >
          {k === 'octa' && <octahedronGeometry args={[1.1]} />}
          {k === 'tetra' && <tetrahedronGeometry args={[1.3]} />}
          {k === 'icosa' && <icosahedronGeometry args={[1.2, 0]} />}
          {k === 'torus' && <torusGeometry args={[1, 0.3, 8, 24]} />}
          <meshBasicMaterial color={i % 2 ? '#3b82f6' : '#4de1ff'} wireframe transparent opacity={0.3} />
        </mesh>
      ))}
    </>
  )
}

export default function Background() {
  const mobile = useIsMobile()
  const reduced = !!useReducedMotion()
  return (
    <Canvas
      className="bg3d"
      aria-hidden="true"
      dpr={1}
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ alpha: true, antialias: false }}
    >
      <Scene mobile={mobile} reduced={reduced} />
    </Canvas>
  )
}
