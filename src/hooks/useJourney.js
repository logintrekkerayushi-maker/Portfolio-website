import { useEffect, useState } from 'react'
import { waypoints } from '../content/journey'

/**
 * Follows the visitor along the trail.
 * Returns the index of the place currently on screen, a smooth compass
 * bearing (degrees), the set of places already visited, and page progress 0..1.
 * One passive scroll listener, work done inside requestAnimationFrame.
 */
export function useJourney() {
  const [state, setState] = useState({ current: 0, bearing: 0, visited: new Set([0]), progress: 0 })

  useEffect(() => {
    let ticking = false
    let tops = []
    const measure = () => {
      tops = waypoints.map((w) => {
        const el = document.getElementById(w.id)
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity
      })
    }
    const update = () => {
      ticking = false
      const y = window.scrollY + window.innerHeight * 0.45
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      let i = 0
      for (let k = 0; k < tops.length; k++) if (y >= tops[k]) i = k
      const next = Math.min(i + 1, tops.length - 1)
      const span = Math.max(1, tops[next] - tops[i])
      const t = next === i ? 0 : Math.min(1, Math.max(0, (y - tops[i]) / span))
      const bearing = waypoints[i].bearing + (waypoints[next].bearing - waypoints[i].bearing) * t
      setState((s) => {
        const visited = s.visited.has(i) ? s.visited : new Set([...s.visited, i])
        if (s.current === i && Math.abs(s.bearing - bearing) < 0.5 && visited === s.visited && Math.abs(s.progress - progress) < 0.002) return s
        return { current: i, bearing, visited, progress }
      })
    }
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update) } }
    const onResize = () => { measure(); onScroll() }
    measure(); update()
    const t = setTimeout(onResize, 800) // images settle
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => { clearTimeout(t); window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize) }
  }, [])

  return state
}
