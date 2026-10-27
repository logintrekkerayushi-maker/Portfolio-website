import { useEffect, useRef, useState } from 'react'
import { secrets } from '../../content/journey'
import './Secret.css'

const OBJECTS = {
  mushroom: (
    <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
      <path d="M20 44c0-8 1-14 4-14s4 6 4 14z" fill="#e9dcc3" stroke="#8a6238" strokeWidth="1.5" />
      <path d="M6 28c0-12 8-20 18-20s18 8 18 20c0 2-2 3-4 3H10c-2 0-4-1-4-3z" fill="#d9513f" stroke="#8a2f22" strokeWidth="1.5" />
      <circle cx="16" cy="20" r="3" fill="#fff3df" /><circle cx="27" cy="15" r="2.4" fill="#fff3df" /><circle cx="32" cy="24" r="2" fill="#fff3df" />
    </svg>
  ),
  cat: (
    <svg viewBox="0 0 64 40" width="64" height="40" aria-hidden="true">
      <path d="M10 34c0-10 6-16 16-16h12c8 0 12 6 12 12v4z" fill="#3a302b" stroke="#d9c4a5" strokeWidth="1" />
      <path d="M42 20c0-6 4-8 8-8l2 4-2 2 3 5c0 4-3 7-7 7z" fill="#3a302b" stroke="#d9c4a5" strokeWidth="1" />
      <path d="M46 10l1-6 5 5zM54 10l5-5 1 6z" fill="#3a302b" stroke="#d9c4a5" strokeWidth="1" />
      <circle cx="50" cy="15" r="1.4" fill="#ffd97a" /><circle cx="55" cy="15" r="1.4" fill="#ffd97a" />
      <path className="secret__tail" d="M12 30c-6 0-10-4-8-10" fill="none" stroke="#3a302b" strokeWidth="4" strokeLinecap="round" />
      <path className="secret__tail" d="M12 30c-6 0-10-4-8-10" fill="none" stroke="#d9c4a5" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
    </svg>
  ),
  boat: (
    <svg viewBox="0 0 48 36" width="46" height="34" aria-hidden="true">
      <path d="M4 22h40l-6 10H10z" fill="#fff6e3" stroke="#8a6238" strokeWidth="1.5" />
      <path d="M24 4v18M24 4l12 12H24M24 4L12 16h12" fill="#fde9d6" stroke="#8a6238" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
}

/**
 * A hidden object in the scene. Click it and a field note unfolds.
 * Finding one tells the compass HUD so it can count it.
 */
export function Secret({ id, style, className = '' }) {
  const s = secrets.find((x) => x.id === id)
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    if (!open) return
    const close = (e) => { if (e.key === 'Escape' || (e.type === 'pointerdown' && !ref.current.contains(e.target))) setOpen(false) }
    window.addEventListener('keydown', close); window.addEventListener('pointerdown', close)
    return () => { window.removeEventListener('keydown', close); window.removeEventListener('pointerdown', close) }
  }, [open])

  if (!s) return null
  const toggle = () => {
    setOpen((v) => !v)
    window.dispatchEvent(new CustomEvent('atlas:secret', { detail: id }))
  }

  return (
    <div ref={ref} className={`secret secret--${s.object} ${open ? 'secret--open' : ''} ${className}`} style={style}>
      <button type="button" className="secret__object" onClick={toggle} aria-expanded={open} aria-label={`Hidden object: ${s.title}`}>
        {OBJECTS[s.object]}
      </button>
      <div className="secret__note" role="note" hidden={!open}>
        <p className="secret__title">{s.title}</p>
        <p className="secret__text">{s.text}</p>
      </div>
    </div>
  )
}
