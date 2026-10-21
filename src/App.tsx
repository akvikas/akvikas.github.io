import { lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Achievements from './sections/Achievements'
import About from './sections/About'
import Journey from './sections/Journey'
import Contact from './sections/Contact'

const Background = lazy(() => import('./three/Background'))

export default function App() {
  return (
    <>
      <a className="skip" href="#projects">Skip to projects</a>
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
