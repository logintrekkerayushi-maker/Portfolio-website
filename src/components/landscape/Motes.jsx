import { useMemo } from 'react'
import './Motes.css'

function seeded(seed) {
  let s = seed
  return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
}

/** Soft specks of dust floating slowly upward through sunlight. */
export function Motes({ count = 18, active = true, tint = 'rgba(255, 236, 190, 0.9)' }) {
  const motes = useMemo(() => {
    const rand = seeded(99 + count)
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: rand() * 100,
      top: 20 + rand() * 80,
      size: 2 + rand() * 4,
      duration: 18 + rand() * 20,
      delay: -(rand() * 30),
      drift: (rand() - 0.5) * 60,
    }))
  }, [count])

  return (
    <div className={`motes ${active ? '' : 'motes--paused'}`} aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="mote"
          style={{
            left: `${m.left}%`, top: `${m.top}%`,
            width: m.size, height: m.size,
            background: tint,
            '--dur': `${m.duration}s`, '--delay': `${m.delay}s`, '--drift': `${m.drift}px`,
          }}
        />
      ))}
    </div>
  )
}
