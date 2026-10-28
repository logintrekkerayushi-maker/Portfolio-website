import { useRef } from 'react'
import { images } from '../content/images'
import { library } from '../content/library'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Reveal } from '../components/ui/Reveal'
import './Library.css'

/** Scene 3 — the library. Three doors, written in light on the painting. */
export function Library() {
  const ref = useRef(null)
  useSceneProgress(ref)
  const onScreen = useInView(ref, { once: false, rootMargin: '0px' })

  return (
    <section id="library" ref={ref} className="library" aria-labelledby="library-title">
      <div className="library__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.library.interiorMobile} />
          <img src={images.library.interior} alt="" className="library__image" loading="lazy" decoding="async" draggable="false" />
        </picture>
        <div className="library__rays" />
        <Motes count={20} active={onScreen} />
      </div>
      <div className="library__shade" aria-hidden="true" />

      <div className="library__content">
        <Reveal className="library__head">
          <h2 id="library-title" className="library__title">{library.title}</h2>
          <p className="library__intro">{library.intro}</p>
        </Reveal>
        <Reveal delay={200}>
          <ul className="doors" aria-label="Where to go next">
            {library.doors.map((d, i) => (
              <li key={d.href} className="door" style={{ '--left': `${d.left}%`, '--top': `${d.top}%`, '--tilt': `${d.tilt}deg`, '--i': i }}>
                <a href={d.href} className="door__link">
                  <span className="door__glow" aria-hidden="true" />
                  <span className="door__label">{d.label}</span>
                  <span className="door__title">{d.title}</span>
                  <span className="door__hint">{d.hint}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
