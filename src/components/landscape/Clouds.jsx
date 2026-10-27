import { images } from '../../content/images'
import './Clouds.css'

/*
  Each cloud: which sprite, vertical position (% of the sky), width (vw),
  seconds for one crossing, and a negative start offset so the sky is
  already populated on first paint instead of empty.
*/
const CLOUD_SET = [
  { sprite: 0, top: 4,  width: 34, duration: 190, offset: -40,  opacity: 0.95 },
  { sprite: 1, top: 14, width: 22, duration: 150, offset: -120, opacity: 0.9 },
  { sprite: 3, top: 9,  width: 18, duration: 170, offset: -75,  opacity: 0.85 },
  { sprite: 2, top: 22, width: 26, duration: 230, offset: -160, opacity: 0.8 },
  { sprite: 1, top: 30, width: 16, duration: 260, offset: -200, opacity: 0.7 },
]

/** Painterly cloud sprites drifting slowly left → right across the top of the scene. */
export function Clouds() {
  return (
    <div className="clouds" aria-hidden="true">
      {CLOUD_SET.map((c, i) => (
        <img
          key={i}
          src={images.clouds[c.sprite]}
          alt=""
          className="clouds__sprite"
          style={{
            top: `${c.top}%`,
            width: `${c.width}vw`,
            opacity: c.opacity,
            '--dur': `${c.duration}s`,
            '--offset': `${c.offset}s`,
          }}
          draggable="false"
        />
      ))}
    </div>
  )
}
