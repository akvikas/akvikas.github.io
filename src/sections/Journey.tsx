import Reveal from '../components/Reveal'
import { journey } from '../data/skills'

export default function Journey() {
  return (
    <Reveal id="journey" title="Journey">
      <ol className="tl">
        {journey.map((j) => <li key={j.title}><b>{j.title}</b><span>{j.note}</span></li>)}
      </ol>
    </Reveal>
  )
}
