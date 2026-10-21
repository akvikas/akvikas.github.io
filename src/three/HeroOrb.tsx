import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import { useReducedMotion } from 'framer-motion'
import type { Mesh, Group } from 'three'
import { useIsMobile } from '../hooks/useIsMobile'
import { usePointer } from '../hooks/usePointer'

const SATS = [
  { d: 1.75, a: 0, sp: 0.012, t: 0.4 },
  { d: 2.1, a: 2.1, sp: 0.008, t: 0.9 },
  { d: 1.45, a: 4.2, sp: 0.016, t: 1.4 },
]

function Orb({ mobile, reduced }: { mobile: boolean; reduced: boolean }) {
  const pointer = usePointer()
  const group = useRef<Group>(null)
  const core = useRef<Mesh>(null)
  const ring1 = useRef<Mesh>(null)
  const ring2 = useRef<Mesh>(null)
  const sats = useRef<(Mesh | null)[]>([])
  const angles = useRef(SATS.map((s) => s.a))

  useFrame(({ clock }) => {
    const g = group.current
    if (!g) return
    if (!reduced) {
      g.rotation.y += 0.0035
      if (ring1.current) ring1.current.rotation.z += 0.004
      if (ring2.current) ring2.current.rotation.x += 0.003
      core.current?.scale.setScalar(1 + 0.07 * Math.sin(clock.elapsedTime * 1.4))
      angles.current = angles.current.map((a, i) => a + SATS[i].sp)
    }
    SATS.forEach((s, i) => {
      const a = angles.current[i]
      sats.current[i]?.position.set(Math.cos(a) * s.d, Math.sin(a) * s.d * Math.sin(s.t), Math.sin(a) * s.d * Math.cos(s.t))
    })
    g.rotation.x += (pointer.current.y * 0.3 - g.rotation.x) * 0.04
    g.position.x += (pointer.current.x * 0.5 - g.position.x) * 0.04
  })

  return (
    <>
      <group ref={group}>
        <mesh>
          <icosahedronGeometry args={[1.15, mobile ? 1 : 2]} />
          <meshBasicMaterial color="#4de1ff" wireframe transparent opacity={0.5} />
        </mesh>
        <mesh ref={core}>
          <sphereGeometry args={[0.6, 24, 24]} />
          <meshBasicMaterial color="#2a7fff" transparent opacity={0.35} />
        </mesh>
        <mesh ref={ring1} rotation={[1.2, 0, 0]}>
          <torusGeometry args={[1.75, 0.012, 8, 96]} />
          <meshBasicMaterial color="#4de1ff" transparent opacity={0.6} />
        </mesh>
        <mesh ref={ring2} rotation={[0, 1.1, 0]}>
          <torusGeometry args={[2.1, 0.008, 8, 96]} />
          <meshBasicMaterial color="#3b82f6" transparent opacity={0.45} />
        </mesh>
        {SATS.map((_, i) => (
          <mesh key={i} ref={(el) => { sats.current[i] = el }}>
            <sphereGeometry args={[0.06, 12, 12]} />
            <meshBasicMaterial color="#bff4ff" />
          </mesh>
        ))}
      </group>
      <Sparkles count={mobile ? 25 : 60} scale={5} size={2} speed={0.3} color="#8fe9ff" />
    </>
  )
}

export default function HeroOrb() {
  const mobile = useIsMobile()
  const reduced = !!useReducedMotion()
  const box = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(true)

  // Stop rendering when the hero scrolls out of view
  useEffect(() => {
    const el = box.current
    if (!el) return
    const io = new IntersectionObserver((e) => setVisible(e[0].isIntersecting))
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div ref={box} className="orbcanvas">
      <Canvas
        dpr={[1, mobile ? 1.5 : 2]}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        gl={{ alpha: true, antialias: !mobile }}
        frameloop={!visible ? 'never' : reduced ? 'demand' : 'always'}
      >
        <Orb mobile={mobile} reduced={reduced} />
      </Canvas>
    </div>
  )
}
