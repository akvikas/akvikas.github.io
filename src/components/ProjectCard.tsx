import { useEffect, useRef, useState, type PointerEvent } from 'react'
import { useReducedMotion } from 'framer-motion'
import type { Project } from '../data/projects'

export default function ProjectCard({ p }: { p: Project }) {
  const [flipped, setFlipped] = useState(false)
  const [touched, setTouched] = useState(false)
  const reduced = useReducedMotion()
  const frontBtn = useRef<HTMLButtonElement>(null)
  const backLink = useRef<HTMLAnchorElement>(null)
  const backBtn = useRef<HTMLButtonElement>(null)

  // Move keyboard focus to the face that is now showing
  useEffect(() => {
    if (!touched) return
    ;(flipped ? (backLink.current ?? backBtn.current) : frontBtn.current)?.focus()
  }, [flipped, touched])

  const toggle = () => { setTouched(true); setFlipped((f) => !f) }
  const tilt = typeof matchMedia !== 'undefined' && matchMedia('(hover: hover)').matches && !reduced

  const onMove = (e: PointerEvent<HTMLElement>) => {
    if (!tilt) return
    const el = e.currentTarget
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg)`
    el.style.setProperty('--mx', `${(x + 0.5) * 100}%`)
    el.style.setProperty('--my', `${(y + 0.5) * 100}%`)
  }

  return (
    <article
      className={'card' + (flipped ? ' flipped' : '')}
      onPointerMove={onMove}
      onPointerLeave={(e) => { e.currentTarget.style.transform = '' }}
    >
      <div className="inner">
        <div className="face front glass" inert={flipped}>
          <h3>{p.name}</h3>
          <p>{p.desc}</p>
          <div className="chips">{p.tech.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          <div className="row" style={{ marginTop: 'auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <button ref={frontBtn} className="btn fb" onClick={toggle} aria-label={`Show details for ${p.name}`}>Details</button>
            {p.demo && <a className="btn main" href={p.demo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>Live demo</a>}
            {p.repo && <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>GitHub</a>}
          </div>
        </div>
        <div className="face back glass" inert={!flipped}>
          <h3>{p.name}</h3>
          <h4>Features</h4>
          <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
          {p.highlight && (<><h4>Technical highlight</h4><p>{p.highlight}</p></>)}
          <div className="row">
            {p.repo && <a ref={backLink} className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">GitHub</a>}
            {p.demo && <a className="btn main" href={p.demo} target="_blank" rel="noopener noreferrer">Live demo</a>}
            <button ref={backBtn} className="btn fb" onClick={toggle} aria-label={`Back to ${p.name} summary`}>Back</button>
          </div>
        </div>
      </div>
    </article>
  )
}
