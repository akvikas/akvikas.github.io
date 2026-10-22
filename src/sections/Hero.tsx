import { lazy, Suspense } from 'react'
import { links } from '../data/links'

const HeroOrb = lazy(() => import('../three/HeroOrb'))

export default function Hero() {
  return (
    <div className="hero">
      <div>
        <h1 className="glitch" data-text="MR. VIKAS AK">MR. VIKAS AK</h1>
        <p className="role">Computer Science Engineer | Python | Full-Stack | AI &amp; Backend</p>
        <p className="lede">I build full-stack and real-time applications with Node.js and Python. LeetCode contest rating 1849, GATE qualified.</p>
        <form className="hero-search" action="https://www.google.com/search" method="get" target="_blank" role="search">
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 4a6 6 0 1 0 3.74 10.69l4.78 4.78 1.41-1.41-4.78-4.78A6 6 0 0 0 10 4m0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8" /></svg>
          <input name="q" aria-label="Search Google" placeholder="Search Google or type a URL" autoComplete="off" />
          <button type="submit" aria-label="Search Google">↗</button>
        </form>
        <div className="btns">
          <a className="btn main" href="#projects">View Projects</a>
          <a className="btn" href={links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {links.resume
            ? <a className="btn" href={links.resume} target="_blank" rel="noopener noreferrer">Resume</a>
            : <span className="btn" aria-disabled="true" title="Resume link not added yet">Resume</span>}
          <a className="btn" href="#contact">Contact</a>
        </div>
        <div className="stats" aria-label="Portfolio statistics">
          <div className="stat glass"><b>1849</b><span>LeetCode rating</span></div>
          <div className="stat glass"><b>800</b><span>Problems solved</span></div>
          <div className="stat glass"><b>8.34</b><span>CGPA</span></div>
          <div className="stat glass"><b>04</b><span>Projects</span></div>
        </div>
      </div>
      <div className="orbbox" role="img" aria-label="Rotating holographic AI core">
        <Suspense fallback={null}><HeroOrb /></Suspense>
        <div className="hud">CORE // ONLINE</div>
        <div className="hud b">PY · JS · SQL · RL</div>
      </div>
    </div>
  )
}
