import { useEffect, useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/** Draggable 3D sphere of skill labels, drawn with CSS transforms (no WebGL). */
export default function SkillSphere({ names }: { names: string[] }) {
  const box = useRef<HTMLDivElement>(null)
  const reduced = !!useReducedMotion()

  useEffect(() => {
    const el = box.current
    if (!el) return
    const spans = Array.from(el.children) as HTMLElement[]
    const pts = spans.map((_, i) => {
      const k = (i + 0.5) / spans.length
      const ph = Math.acos(1 - 2 * k)
      const th = Math.PI * (1 + Math.sqrt(5)) * i
      return { x: Math.cos(th) * Math.sin(ph), y: Math.cos(ph), z: Math.sin(th) * Math.sin(ph) }
    })
    let rx = 0.3, ry = 0, drag = false, lx = 0, ly = 0, visible = true, raf = 0

    const draw = () => {
      const R = Math.min(el.clientWidth * 0.3, 130)
      const cy = Math.cos(ry), sy = Math.sin(ry), cx = Math.cos(rx), sx = Math.sin(rx)
      spans.forEach((s, i) => {
        const o = pts[i]
        const x = o.x * cy + o.z * sy
        const z0 = -o.x * sy + o.z * cy
        const y = o.y * cx - z0 * sx
        const z = o.y * sx + z0 * cx
        const d = (z + 1) / 2
        s.style.transform = `translate(-50%,-50%) translate3d(${x * R * 1.6}px,${y * R}px,0) scale(${0.7 + 0.3 * d})`
        s.style.opacity = String(0.3 + 0.7 * d)
        s.style.zIndex = String(Math.round(d * 10))
      })
    }
    const tick = () => {
      raf = requestAnimationFrame(tick)
      if (!visible) return
      if (!reduced && !drag) ry += 0.006
      draw()
    }
    const down = (e: PointerEvent) => { drag = true; lx = e.clientX; ly = e.clientY; el.setPointerCapture(e.pointerId) }
    const move = (e: PointerEvent) => {
      if (!drag) return
      ry += (e.clientX - lx) * 0.01
      rx = Math.max(-1, Math.min(1, rx + (e.clientY - ly) * 0.01))
      lx = e.clientX; ly = e.clientY
    }
    const up = () => { drag = false }
    el.addEventListener('pointerdown', down)
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerup', up)
    el.addEventListener('pointercancel', up)
    const io = new IntersectionObserver((e) => { visible = e[0].isIntersecting })
    io.observe(el)
    tick()
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      el.removeEventListener('pointerdown', down)
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerup', up)
      el.removeEventListener('pointercancel', up)
    }
  }, [names, reduced])

  return (
    <div ref={box} className="sphere" aria-hidden="true" title="Drag to rotate">
      {names.map((n) => <span key={n}>{n}</span>)}
    </div>
  )
}
