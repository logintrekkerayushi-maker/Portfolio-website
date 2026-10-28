import { useRef } from 'react'
import { images } from '../content/images'
import { approach } from '../content/library'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Petals } from '../components/landscape/Petals'
import { Trail } from '../components/journey/Trail'
import { Reveal } from '../components/ui/Reveal'
import './Approach.css'

/** Scene 2 — the road: the trail draws itself through the trees toward the library. */
export function Approach() {
  const ref = useRef(null)
  useSceneProgress(ref)
  const onScreen = useInView(ref, { once: false, rootMargin: '0px' })
  const reduced = useReducedMotion()

  return (
    <section ref={ref} className="approach" aria-label="The road to the library">
      <div className="approach__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.approach.exteriorMobile} />
          <img src={images.approach.exterior} alt="" className="approach__image" loading="lazy" decoding="async" draggable="false" />
        </picture>
      </div>
      <div className="approach__shade" aria-hidden="true" />
      {!reduced && <Petals count={7} variant="leaves" active={onScreen} />}
      <Trail shape="down" uid="road" />

      <div className="approach__content">
        <Reveal className="approach__copy" delay={150}>
          <p className="approach__line">{approach.line}</p>
          <p className="approach__sub">{approach.sub}</p>
        </Reveal>
      </div>
    </section>
  )
}
