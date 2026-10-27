import { useRef } from 'react'
import { images } from '../content/images'
import { approach } from '../content/library'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { Reveal } from '../components/ui/Reveal'
import './Approach.css'

/** Scene 2 — the walk from the valley to the library doors. Short, mostly picture. */
export function Approach() {
  const ref = useRef(null)
  useSceneProgress(ref)
  return (
    <section ref={ref} className="approach" aria-label="The path to the library">
      <div className="approach__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.approach.exteriorMobile} />
          <img src={images.approach.exterior} alt="" className="approach__image" loading="lazy" decoding="async" draggable="false" />
        </picture>
      </div>
      <div className="approach__shade" aria-hidden="true" />
      <Reveal className="approach__copy">
        <p className="approach__line">{approach.line}</p>
        <p className="approach__sub">{approach.sub}</p>
      </Reveal>
    </section>
  )
}
