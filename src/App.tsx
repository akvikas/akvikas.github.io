import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Achievements from './sections/Achievements'
import About from './sections/About'
import Journey from './sections/Journey'
import Contact from './sections/Contact'

const Background = lazy(() => import('./three/Background'))
const sections = ['projects', 'skills', 'achievements', 'about', 'journey', 'contact']

function InterfaceLayer() {
  const [active, setActive] = useState('projects')
  const cursor = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCursor = (event: PointerEvent) => {
      cursor.current?.style.setProperty('transform', `translate(${event.clientX}px, ${event.clientY}px)`)
    }
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) setActive(visible.target.id)
    }, { threshold: 0.35 })
    sections.forEach((id) => document.getElementById(id) && observer.observe(document.getElementById(id)!))
    window.addEventListener('pointermove', updateCursor)
    return () => { observer.disconnect(); window.removeEventListener('pointermove', updateCursor) }
  }, [])

  return <>
    <div className="frame" aria-hidden="true"><i className="c tl"/><i className="c tr"/><i className="c bl"/><i className="c br"/><span className="lb">SYSTEM // VIKAS.AK</span><span className="rb">ONLINE // 01</span></div>
    <nav className="rail" aria-label="Section navigation">{sections.map((id, index) => <a className={active === id ? 'on' : ''} href={`#${id}`} key={id}><i/><span>{String(index + 1).padStart(2, '0')} — {id}</span></a>)}</nav>
    <div className="cursor" ref={cursor} aria-hidden="true" />
  </>
}

export default function App() {
  return (
    <>
      <a className="skip" href="#projects">Skip to projects</a>
      <InterfaceLayer />
      <Suspense fallback={null}><Background /></Suspense>
      <div className="wrap">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Achievements />
          <About />
          <Journey />
          <Contact />
        </main>
        <footer>Vikas AK</footer>
      </div>
    </>
  )
}
