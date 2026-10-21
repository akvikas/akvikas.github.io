import Reveal from '../components/Reveal'
import { achievements, certifications, volunteer } from '../data/achievements'

export default function Achievements() {
  return (
    <Reveal id="achievements" title="Achievements">
      <div className="skills">
        {achievements.map((a) => (
          <div className="glass" key={a.title}><h3>{a.title}</h3><p>{a.note}</p></div>
        ))}
      </div>
      <h3 className="sub">Certifications</h3>
      <ul className="certs">
        {certifications.map((c) => (
          <li key={c.name}>
            <span>{c.name}{c.note && <small>{c.note}</small>}</span>
            <time>{c.date}</time>
          </li>
        ))}
      </ul>
      <h3 className="sub">Volunteer experience</h3>
      <div className="glass about"><b>{volunteer.role}.</b> {volunteer.note}</div>
    </Reveal>
  )
}
