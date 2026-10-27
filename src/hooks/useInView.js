import { useEffect, useState } from 'react'

/** True once the element has entered the viewport (optionally stays true after the first time). */
export function useInView(ref, { once = true, rootMargin = '0px 0px -10% 0px' } = {}) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (once) io.disconnect()
      } else if (!once) {
        setInView(false)
      }
    }, { rootMargin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, once, rootMargin])
  return inView
}
