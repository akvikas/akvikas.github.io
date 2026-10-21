import Reveal from '../components/Reveal'
import SkillSphere from '../components/SkillSphere'
import { skills, sphereSkills } from '../data/skills'

export default function Skills() {
  return (
    <Reveal id="skills" title="Skills">
      <SkillSphere names={sphereSkills} />
      <div className="skills">
        {Object.entries(skills).map(([group, list]) => (
          <div className="glass" key={group}>
            <h3>{group}</h3>
            <div className="chips">{list.map((s) => <span className="chip" key={s}>{s}</span>)}</div>
          </div>
        ))}
      </div>
    </Reveal>
  )
}
