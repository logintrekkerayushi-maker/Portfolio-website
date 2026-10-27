import { useMemo } from 'react'
import './Petals.css'

const TINTS = {
  petals: ['#FF8A7A', '#ffd3cb', '#fff1e8', '#ffd97a', '#f6c6d8'],
  leaves: ['#c98a3a', '#8fae4a', '#d9a441', '#6f9a3c', '#b86b2e'],
}

function seeded(seed) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

/**
 * A small pool of petals drifting down across the scene. Each one has its
 * own start position, speed, sway and delay, so they appear occasionally
 * rather than as a constant shower. `active` pauses them when off-screen.
 */
export function Petals({ count = 10, active = true, variant = 'petals' }) {
  const petals = useMemo(() => {
    const rand = seeded(7 + count + (variant === 'leaves' ? 13 : 0))
    const tints = TINTS[variant] || TINTS.petals
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: 2 + rand() * 96,
      size: 7 + rand() * 8,
      duration: 16 + rand() * 14,
      delay: -(rand() * 40),
      sway: 2.6 + rand() * 2.4,
      drift: 20 + rand() * 50,
      tint: tints[Math.floor(rand() * tints.length)],
      spin: rand() > 0.5 ? 1 : -1,
    }))
  }, [count, variant])

  return (
    <div className={`petals ${active ? '' : 'petals--paused'}`} aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={{
            left: `${p.left}%`,
            '--size': `${p.size}px`,
            '--dur': `${p.duration}s`,
            '--delay': `${p.delay}s`,
            '--sway': `${p.sway}s`,
            '--drift': `${p.drift}px`,
            '--spin': p.spin,
          }}
        >
          <svg viewBox="0 0 20 20" width={p.size} height={p.size}>
            {variant === 'leaves'
              ? <path d="M2 18 C 4 8, 12 2, 19 2 C 18 10, 12 17, 2 18 Z M2 18 L 14 6" fill={p.tint} stroke="rgba(60,40,10,0.35)" strokeWidth="0.8" />
              : <path d="M10 1 C15 4 18 9 10 19 C2 9 5 4 10 1 Z" fill={p.tint} />}
          </svg>
        </span>
      ))}
    </div>
  )
}
