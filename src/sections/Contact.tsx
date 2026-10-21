import Reveal from '../components/Reveal'
import { links } from '../data/links'

function Item({ label, href, text }: { label: string; href: string; text: string }) {
  return href
    ? <a className="btn" href={href} target={href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener noreferrer">{label}<small>{text}</small></a>
    : <span className="btn" aria-disabled="true">{label}<small>not added yet</small></span>
}

export default function Contact() {
  return (
    <Reveal id="contact" title="Contact">
      <div className="links">
        <Item label="GitHub" href={links.github} text="github.com/akvikas" />
        <Item label="LinkedIn" href={links.linkedin} text="Open profile" />
        <Item label="Email" href={links.email ? `mailto:${links.email}` : ''} text={links.email} />
        <Item label="Resume" href={links.resume} text="Open resume" />
      </div>
    </Reveal>
  )
}
