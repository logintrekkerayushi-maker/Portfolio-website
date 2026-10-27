import { useEffect, useRef } from 'react'
import './DayCycle.css'

/* Light changes as the journey goes on: morning → golden afternoon → dusk → nightfall. */
const STOPS = [
  [0.0,  [255, 255, 255, 0.00]],
  [0.25, [255, 214, 140, 0.07]],
  [0.5,  [255, 190, 120, 0.10]],
  [0.72, [255, 140, 100, 0.13]],
  [0.88, [90, 60, 120, 0.18]],
  [1.0,  [20, 30, 70, 0.28]],
]

export function DayCycle({ progress = 0 }) {
  const ref = useRef(null)
  useEffect(() => {
    let a = STOPS[0], b = STOPS[STOPS.length - 1]
    for (let i = 0; i < STOPS.length - 1; i++) {
      if (progress >= STOPS[i][0] && progress <= STOPS[i + 1][0]) { a = STOPS[i]; b = STOPS[i + 1]; break }
    }
    const t = (progress - a[0]) / Math.max(0.0001, b[0] - a[0])
    const c = a[1].map((v, i) => v + (b[1][i] - v) * t)
    if (ref.current) ref.current.style.background = `rgba(${c[0] | 0}, ${c[1] | 0}, ${c[2] | 0}, ${c[3].toFixed(3)})`
  }, [progress])
  return <div ref={ref} className="daycycle" aria-hidden="true" />
}
