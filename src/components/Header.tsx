const items = ['projects', 'skills', 'achievements', 'about', 'journey', 'contact']

export default function Header() {
  return (
    <header>
      <b>VIKAS AK</b>
      <nav aria-label="Main">
        {items.map((i) => <a key={i} href={`#${i}`}>{i[0].toUpperCase() + i.slice(1)}</a>)}
      </nav>
    </header>
  )
}
