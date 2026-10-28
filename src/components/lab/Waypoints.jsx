import { strategyLab } from '../../content/strategyLab'
import './Waypoints.css'

/* Where each project's note floats over the painting, in % of the scene. */
const SPOTS = [
  { left: 12, top: 18, tilt: -4 },
  { left: 52, top: 40, tilt: 2 },
  { left: 22, top: 66, tilt: -2 },
]

/**
 * Three handwritten notes floating in the clearing, one per project.
 * Nothing drawn: just the painting, light, and words. Each note opens the report.
 */
export function Waypoints() {
  const projects = strategyLab.projects.slice(0, 3)
  return (
    <ul className="waypoints" aria-label="Projects in the clearing">
      {projects.map((p, i) => (
        <li key={p.href} className="waypoint" style={{ '--left': `${SPOTS[i].left}%`, '--top': `${SPOTS[i].top}%`, '--tilt': `${SPOTS[i].tilt}deg`, '--i': i }}>
          <a href={p.href} className="waypoint__link" target="_blank" rel="noopener">
            <span className="waypoint__glow" aria-hidden="true" />
            <span className="waypoint__category">{p.category}</span>
            <span className="waypoint__title">{p.title}</span>
            <span className="waypoint__cta">{p.cta} →<span className="visually-hidden"> (opens in a new tab)</span></span>
          </a>
        </li>
      ))}
    </ul>
  )
}
