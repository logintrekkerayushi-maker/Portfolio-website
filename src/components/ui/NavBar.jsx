import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { profile, navigation } from '../../content/profile'
import './NavBar.css'

/** Fixed top bar: wordmark on the left, section links on the right, a menu button on phones. */
export function NavBar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <Link to="/" className="nav__wordmark" aria-label={`${profile.name} — home`}>
        {profile.wordmark}
      </Link>

      <nav className="nav__links" aria-label="Sections">
        {navigation.map((item) => (
          <Link key={item.href} to={`/${item.href}`}>{item.label}</Link>
        ))}
      </nav>

      <button
        type="button"
        className="nav__toggle"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="nav__burger" aria-hidden="true" />
      </button>

      <div id="mobile-menu" className={`nav__sheet ${open ? 'nav__sheet--open' : ''}`} hidden={!open}>
        <nav aria-label="Sections">
          {navigation.map((item) => (
            <Link key={item.href} to={`/${item.href}`} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
