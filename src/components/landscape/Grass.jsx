import { useMemo } from 'react'
import './Grass.css'

/*
  A strip of grass blades drawn as vector shapes along the bottom edge.
  Blades are generated once from a fixed seed so the layout never changes
  between visits. They sit in six groups; each group sways on its own timer.
*/
const COLOURS = ['#163d2f', '#1c4d3a', '#25604a', '#2f7355', '#3a8562']
const FLOWERS = ['#FF8A7A', '#fff5ec', '#ffd97a', '#f6c6d8']

function seeded(seed) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

function buildBlades(count, rand) {
  const blades = []
  for (let i = 0; i < count; i++) {
    const x = rand() * 1000
    const h = 28 + rand() * 70
    const lean = (rand() - 0.5) * 50
    const w = 3 + rand() * 4
    const colour = COLOURS[Math.floor(rand() * COLOURS.length)]
    const flower = rand() < 0.08 ? FLOWERS[Math.floor(rand() * FLOWERS.length)] : null
    const flowerSize = 1.8 + rand() * 1.6
    // base at y=120, tip curves up and sideways
    const d = `M${x - w / 2} 120 Q${x + lean * 0.4} ${120 - h * 0.55} ${x + lean} ${120 - h} Q${x + lean * 0.5} ${120 - h * 0.5} ${x + w / 2} 120 Z`
    blades.push({ d, colour, flower, flowerSize, tip: [x + lean, 120 - h], group: i % 6 })
  }
  return blades
}

export function Grass({ count = 150 }) {
  const groups = useMemo(() => {
    const blades = buildBlades(count, seeded(20261027))
    return Array.from({ length: 6 }, (_, g) => blades.filter((b) => b.group === g))
  }, [count])

  return (
    <div className="grass" aria-hidden="true">
      <svg className="grass__svg" viewBox="0 0 1000 120" preserveAspectRatio="none">
        {groups.map((blades, g) => (
          <g key={g} className="grass__group" style={{ '--i': g }}>
            {blades.map((b, i) => (
              <path key={i} d={b.d} fill={b.colour} />
            ))}
            {blades.filter((b) => b.flower).map((b, i) => (
              <circle key={`f${i}`} cx={b.tip[0]} cy={b.tip[1]} r={b.flowerSize} fill={b.flower} />
            ))}
          </g>
        ))}
      </svg>
    </div>
  )
}
