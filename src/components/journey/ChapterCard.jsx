import { chapters } from '../../content/journey'
import { Reveal } from '../ui/Reveal'
import './ChapterCard.css'

const SKETCH = {
  path: <path d="M4 26 C 12 20, 8 12, 16 10 S 26 4, 28 2" />,
  book: <><path d="M4 6h10a3 3 0 0 1 3 3v17a3 3 0 0 0-3-3H4z" /><path d="M28 6H18a3 3 0 0 0-3 3v17a3 3 0 0 1 3-3h10z" /></>,
  compass: <><circle cx="16" cy="16" r="12" /><path d="M21 11l-3 7-7 3 3-7z" /></>,
  lantern: <><path d="M11 6h10M16 6V3M9 10h14l1 12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z" /><path d="M16 14v6" /></>,
  mountain: <path d="M2 26L12 8l6 10 4-5 8 13z" />,
}

/** A journal note that opens each place: "Day 2 · The Library", a sketch, an ink stamp. */
export function ChapterCard({ id, align = 'left' }) {
  const c = chapters[id]
  if (!c) return null
  return (
    <Reveal className={`chapter chapter--${align}`}>
      <div className="chapter__paper">
        <svg className="chapter__sketch" viewBox="0 0 32 32" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          {SKETCH[c.sketch]}
        </svg>
        <p className="chapter__text">
          <span className="chapter__day">{c.day}</span>
          <span className="chapter__place">{c.place}</span>
        </p>
        <span className="chapter__stamp" aria-hidden="true"><span>atlas</span></span>
      </div>
    </Reveal>
  )
}
