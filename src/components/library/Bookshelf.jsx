import { useMemo } from 'react'
import { library } from '../../content/library'
import './Bookshelf.css'

/* Decorative books fill the gaps between the four that matter. Seeded so the shelf never changes. */
const FILLER_TONES = ['#5a4636', '#7a6a52', '#3f4c5c', '#6b4a3a', '#4e5d4a', '#8a7a5a', '#44403c', '#6a5a7a']
function seeded(seed) { let s = seed; return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 } }

export function Bookshelf({ children }) {
  const books = useMemo(() => {
    const rand = seeded(2027)
    const out = []
    const labelled = [...library.books]
    const slots = [1, 4, 8, 12] // where the labelled books sit
    for (let i = 0; i < 15; i++) {
      const k = slots.indexOf(i)
      if (k >= 0) { out.push({ ...labelled[k], real: true, h: 180 + rand() * 30, w: 54 }); continue }
      out.push({ real: false, h: 120 + rand() * 80, w: 22 + rand() * 18, tone: FILLER_TONES[Math.floor(rand() * FILLER_TONES.length)], lean: rand() < 0.18 ? (rand() < 0.5 ? -7 : 7) : 0, bands: rand() < 0.6 })
    }
    return out
  }, [])

  return (
    <div className="shelf" role="navigation" aria-label="Shelf: where to go next">
      <div className="shelf__back" aria-hidden="true" />
      <ul className="shelf__row">
        {books.map((b, i) => b.real ? (
          <li key={i} className="shelf__slot">
            <a href={b.href} className={`book book--real book--${b.tone}`} style={{ '--h': `${b.h}px`, '--w': `${b.w}px` }}>
              <span className="book__band book__band--top" aria-hidden="true" />
              <span className="book__title">{b.label}</span>
              <span className="book__band book__band--bottom" aria-hidden="true" />
              <span className="book__hint" aria-hidden="true">{b.hint}</span>
            </a>
          </li>
        ) : (
          <li key={i} className="shelf__slot" aria-hidden="true">
            <span className={`book ${b.bands ? 'book--bands' : ''}`} style={{ '--h': `${b.h}px`, '--w': `${b.w}px`, '--tone': b.tone, '--lean': `${b.lean}deg` }} />
          </li>
        ))}
        <li className="shelf__slot shelf__plant" aria-hidden="true">
          <svg viewBox="0 0 60 80" width="60" height="80">
            <path d="M18 56h24l-3 20H21z" fill="#b5634a" /><path d="M16 52h28v6H16z" fill="#c9765a" />
            <g fill="#4f8f5c" stroke="#2f6b3e" strokeWidth="1">
              <path d="M30 54 C 20 40, 8 42, 6 30 C 18 30, 28 40, 30 54Z" /><path d="M30 54 C 40 40, 52 42, 54 30 C 42 30, 32 40, 30 54Z" />
              <path d="M30 54 C 26 36, 30 22, 34 10 C 38 24, 36 40, 30 54Z" /><path d="M30 54 C 22 44, 14 38, 12 24 C 24 28, 30 42, 30 54Z" />
            </g>
          </svg>
        </li>
      </ul>
      <div className="shelf__plank" aria-hidden="true" />
      {children}
    </div>
  )
}
