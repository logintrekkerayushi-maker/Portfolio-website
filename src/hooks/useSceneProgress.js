import { useEffect } from 'react'
import { useReducedMotion } from './useReducedMotion'

/**
 * Tracks how far a scene has scrolled through the viewport and writes the
 * result to a CSS variable `--p` on that element:
 *   -1 = scene is fully below the screen, 0 = its top touches the top of the
 *   screen, 1 = it has scrolled fully past. CSS reads --p for parallax.
 *
 * One passive scroll listener, one requestAnimationFrame per scroll event,
 * and nothing runs while the scene is off-screen or motion is reduced.
 */
export function useSceneProgress(ref) {
  const reduced = useReducedMotion()
  useEffect(() => {
    const el = ref.current
    if (!el || reduced) return

    let top = 0, height = 1, ticking = false, active = false

    const measure = () => {
      const rect = el.getBoundingClientRect()
      top = rect.top + window.scrollY
      height = rect.height || 1
    }
    const update = () => {
      ticking = false
      const p = Math.max(-1, Math.min(1, (window.scrollY - top) / height))
      el.style.setProperty('--p', p.toFixed(4))
    }
    const onScroll = () => {
      if (!active || ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    const onResize = () => { measure(); update() }

    const io = new IntersectionObserver(([entry]) => {
      active = entry.isIntersecting
      el.classList.toggle('is-onscreen', active)
      if (active) onScroll()
    }, { rootMargin: '10% 0px' })

    measure(); update()
    io.observe(el)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    return () => {
      io.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [ref, reduced])
}
