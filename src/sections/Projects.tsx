import Reveal from '../components/Reveal'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <Reveal id="projects" title="Projects">
      <div className="cards">{projects.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
    </Reveal>
  )
}
