import { useEffect, useState } from 'react'
import { waypoints, secrets } from '../../content/journey'
import './CompassHud.css'

/**
 * The explorer's compass and trail map, fixed in the corner.
 * Needle swings with scroll; the trail lists every place, stamps the ones
 * visited, and jumps to a place on click. Phones show the compass only and
 * open the trail on tap.
 */
export function CompassHud({ current, bearing, visited, progress = 0 }) {
  const [open, setOpen] = useState(false)
  const [found, setFound] = useState(() => new Set())

  useEffect(() => {
    const onSecret = (e) => setFound((s) => (s.has(e.detail) ? s : new Set([...s, e.detail])))
    window.addEventListener('atlas:secret', onSecret)
    return () => window.removeEventListener('atlas:secret', onSecret)
  }, [])

  const go = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <div className={`hud ${open ? 'hud--open' : ''} ${current > 0 || progress > 0.04 ? 'hud--away' : ''}`}>
      <nav className="hud__trail" id="hud-trail" aria-label="Places on the trail">
        <ol>
          {waypoints.map((w, i) => (
            <li key={w.id} className={`hud__stop ${i === current ? 'hud__stop--here' : ''} ${visited.has(i) ? 'hud__stop--seen' : ''}`}>
              <button type="button" onClick={() => go(w.id)} aria-current={i === current ? 'location' : undefined}>
                <span className="hud__dot" aria-hidden="true" />
                <span className="hud__label">{w.label}</span>
                {visited.has(i) && <span className="visually-hidden"> (visited)</span>}
              </button>
            </li>
          ))}
        </ol>
        <p className="hud__count">
          <span>{visited.size} / {waypoints.length} places</span>
          <span>{found.size} / {secrets.length} secrets</span>
        </p>
      </nav>

      <button
        type="button"
        className="hud__compass"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="hud-trail"
        aria-label={`Compass. You are at ${waypoints[current].label}. Open the trail map.`}
      >
        <svg viewBox="0 0 100 100" width="64" height="64" aria-hidden="true">
          <defs>
            <radialGradient id="hud-face" cx="50%" cy="40%" r="60%">
              <stop offset="0" stopColor="#fff8e8" /><stop offset="1" stopColor="#d9c6a2" />
            </radialGradient>
          </defs>
          <circle cx="50" cy="50" r="47" fill="url(#hud-face)" stroke="#5a3d1f" strokeWidth="3" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#8a6a44" strokeWidth="0.8" strokeDasharray="2 4.3" />
          <g fill="#5a3d1f" fontFamily="Cormorant Garamond, serif" fontSize="11" fontWeight="600" textAnchor="middle">
            <text x="50" y="17">N</text><text x="86" y="54">E</text><text x="50" y="91">S</text><text x="14" y="54">W</text>
          </g>
          <g className="hud__needle" style={{ transform: `rotate(${bearing}deg)` }}>
            <path d="M50 14 L56 50 L50 58 L44 50 Z" fill="#e2493b" />
            <path d="M50 86 L56 50 L50 42 L44 50 Z" fill="#2f3f4a" />
          </g>
          <circle cx="50" cy="50" r="4" fill="#5a3d1f" />
        </svg>
      </button>
    </div>
  )
}
