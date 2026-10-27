import './Birds.css'

/** A small flock crossing the sky now and then. Three silhouettes, one long loop. */
export function Birds() {
  return (
    <div className="birds" aria-hidden="true">
      <svg viewBox="0 0 120 40" width="120" height="40" className="birds__flock">
        {[[10, 20, 0], [48, 8, 0.25], [80, 24, 0.5]].map(([x, y, d], i) => (
          <g key={i} transform={`translate(${x} ${y})`} className="bird" style={{ '--d': `${d}s` }}>
            <path className="bird__wing bird__wing--l" d="M0 0 C -6 -6, -12 -6, -16 -2" />
            <path className="bird__wing bird__wing--r" d="M0 0 C 6 -6, 12 -6, 16 -2" />
          </g>
        ))}
      </svg>
    </div>
  )
}
