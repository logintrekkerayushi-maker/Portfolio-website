import { useRef } from 'react'
import { images } from '../content/images'
import { library } from '../content/library'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Reveal } from '../components/ui/Reveal'
import { Icon } from '../components/ui/Icons'
import './Library.css'

/** Scene 3 — the library hub. The central crossroads of the portfolio. */
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
          <p className="library__eyebrow">{library.eyebrow}</p>
          <h2 id="library-title" className="library__title">{library.title}</h2>
          <p className="library__intro">{library.intro}</p>
        </Reveal>

        <div className="library__wings">
          {library.wings.map((wing, i) => (
            <Reveal key={wing.id} delay={150 + i * 150}>
              <a href={wing.href} className={`wing wing--${wing.id}`}>
                <span className="wing__spine" aria-hidden="true" />
                <span className="wing__label">{wing.label}</span>
                <span className="wing__icon"><Icon name={wing.icon} size={28} /></span>
                <span className="wing__title">{wing.title}</span>
                <span className="wing__desc">{wing.description}</span>
                <ul className="wing__areas">
                  {wing.areas.map((a) => <li key={a}>{a}</li>)}
                </ul>
                <span className="wing__cta">
                  {wing.cta} <Icon name="arrow" size={18} className="wing__arrow" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="library__foot" delay={450}>
          {library.footnotes.map((f) => (
            <a key={f.label} href={f.href} className="library__footlink">
              <Icon name={f.icon} size={18} /> {f.label}
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
