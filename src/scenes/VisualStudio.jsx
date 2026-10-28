import { useRef } from 'react'
import { images } from '../content/images'
import { visualStudio } from '../content/visualStudio'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Reveal } from '../components/ui/Reveal'
import './VisualStudio.css'

/** Scene 5 — the workshop. Three corners of the studio, written in light. */
export function VisualStudio() {
  const ref = useRef(null)
  useSceneProgress(ref)
  const onScreen = useInView(ref, { once: false, rootMargin: '0px' })

  return (
    <section id="visual-studio" ref={ref} className="studio" aria-labelledby="studio-title">
      <div className="studio__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.studio.interiorMobile} />
          <img src={images.studio.interior} alt="" className="studio__image" loading="lazy" decoding="async" draggable="false" />
        </picture>
        <div className="studio__window-light" />
        <Motes count={14} active={onScreen} tint="rgba(255, 220, 170, 0.9)" />
      </div>
      <div className="studio__shade" aria-hidden="true" />

      <div className="studio__content">
        <Reveal className="studio__head">
          <h2 id="studio-title" className="studio__title">{visualStudio.title}</h2>
          <p className="studio__intro">{visualStudio.intro}</p>
        </Reveal>

        <Reveal delay={200}>
          <ul className="corners" aria-label="Corners of the studio">
            {visualStudio.categories.map((c, i) => (
              <li key={c.id} className="corner" style={{ '--left': `${c.left}%`, '--top': `${c.top}%`, '--tilt': `${c.tilt}deg`, '--i': i }}>
                <span className="corner__glow" aria-hidden="true" />
                <span className="corner__label">{c.label}</span>
                <h3 className="corner__title">{c.title}</h3>
                <p className="corner__hint">{c.hint}</p>
                {c.pieces.length ? (
                  <ul className="corner__pieces">
                    {c.pieces.map((p) => (
                      <li key={p.href}>
                        <a href={p.href} className="corner__piece" target="_blank" rel="noopener">
                          <span className="corner__piece-title">{p.title}</span>
                          <span className="corner__piece-cta">{p.cta} →<span className="visually-hidden"> (opens in a new tab)</span></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="corner__soon">In progress</p>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="studio__status" delay={350}>
          <p>{visualStudio.status}</p>
        </Reveal>
      </div>
    </section>
  )
}
