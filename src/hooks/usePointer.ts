import { useEffect, useRef } from 'react'

/** Window-wide pointer position in -1..1, kept in a ref so it never re-renders. */
export function usePointer() {
  const p = useRef({ x: 0, y: 0 })
  useEffect(() => {
    const on = (e: PointerEvent) => {
      p.current.x = (e.clientX / innerWidth - 0.5) * 2
      p.current.y = (e.clientY / innerHeight - 0.5) * 2
    }
    addEventListener('pointermove', on)
    return () => removeEventListener('pointermove', on)
  }, [])
  return p
}
