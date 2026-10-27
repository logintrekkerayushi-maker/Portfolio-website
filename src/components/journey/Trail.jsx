import './Trail.css'

/* Winding path shapes, in a 1000×600 drawing space. */
const PATHS = {
  down:  'M 120 20 C 260 120, 60 260, 300 330 S 700 300, 640 440 S 820 560, 900 590',
  cross: 'M 60 80 C 220 40, 260 260, 480 240 S 760 120, 940 300',
}

/**
 * A dotted trail that draws itself as the scene scrolls, with a glowing
 * marker walking along it. Reads --p from the nearest scene section.
 * `uid` keeps SVG ids unique when several trails are on one page.
 */
export function Trail({ shape = 'down', uid = 't', className = '' }) {
  const d = PATHS[shape]
  return (
    <svg className={`trail ${className}`} viewBox="0 0 1000 600" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <mask id={`trail-mask-${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="1000" height="600">
          <path d={d} className="trail__reveal" pathLength="1" />
        </mask>
      </defs>
      <path d={d} className="trail__faint" />
      <path d={d} className="trail__bright" mask={`url(#trail-mask-${uid})`} />
      <g className="trail__marker" style={{ offsetPath: `path('${d}')` }}>
        <circle r="7" className="trail__marker-glow" />
        <circle r="3.5" className="trail__marker-dot" />
      </g>
    </svg>
  )
}
