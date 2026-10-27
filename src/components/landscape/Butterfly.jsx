import { useEffect, useRef } from 'react'
import './Butterfly.css'

/**
 * A butterfly that drifts toward the cursor, lazily, with a wander of its own.
 * Desktop only (needs a hovering pointer). Runs only while `active`.
 */
export function Butterfly({ active = true, containerRef }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current, box = containerRef?.current
    if (!el || !box || !active) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let target = null, pos = { x: box.clientWidth * 0.6, y: box.clientHeight * 0.45 }, raf, t0 = performance.now(), last = pos
    const onMove = (e) => { const r = box.getBoundingClientRect(); target = { x: e.clientX - r.left, y: e.clientY - r.top } }
    const tick = (now) => {
      const t = (now - t0) / 1000
      const goal = target || { x: box.clientWidth * (0.55 + 0.25 * Math.sin(t * 0.21)), y: box.clientHeight * (0.45 + 0.15 * Math.cos(t * 0.17)) }
      // hover a little away from the cursor, never on it
      const gx = goal.x + Math.sin(t * 1.3) * 60 - 40, gy = goal.y + Math.cos(t * 1.1) * 40 - 50
      pos = { x: pos.x + (gx - pos.x) * 0.025, y: pos.y + (gy - pos.y) * 0.025 }
      const dir = pos.x < last.x ? -1 : 1
      el.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) scaleX(${dir})`
      last = pos
      raf = requestAnimationFrame(tick)
    }
    box.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(tick)
    el.style.opacity = 1
    return () => { cancelAnimationFrame(raf); box.removeEventListener('pointermove', onMove); el.style.opacity = 0 }
  }, [active, containerRef])

  return (
    <div ref={ref} className="butterfly" aria-hidden="true">
      <svg viewBox="0 0 40 32" width="34" height="28">
        <g className="butterfly__wing butterfly__wing--l">
          <path d="M20 16 C 10 2, 0 6, 2 14 C 0 22, 10 28, 20 16 Z" fill="#ff9d7e" />
          <circle cx="8" cy="13" r="2.2" fill="#fff1c9" />
        </g>
        <g className="butterfly__wing butterfly__wing--r">
          <path d="M20 16 C 30 2, 40 6, 38 14 C 40 22, 30 28, 20 16 Z" fill="#ffb07a" />
          <circle cx="32" cy="13" r="2.2" fill="#fff1c9" />
        </g>
        <path d="M20 8v16" stroke="#4a3119" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}
