import { useRef } from 'react'
import { images } from '../content/images'
import { strategyLab } from '../content/strategyLab'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Grass } from '../components/landscape/Grass'
import { Butterfly } from '../components/landscape/Butterfly'
import { Waypoints } from '../components/lab/Waypoints'
import { ChapterCard } from '../components/journey/ChapterCard'
import { Secret } from '../components/journey/Secret'
import { Reveal } from '../components/ui/Reveal'
import './StrategyLab.css'

/** Scene 4 — the clearing. An expedition map on a stone; each seal is a project. */
export function StrategyLab() {
  const ref = useRef(null)
  useSceneProgress(ref)
  const onScreen = useInView(ref, { once: false, rootMargin: '0px' })

  return (
    <section id="strategy-lab" ref={ref} className="lab" aria-labelledby="lab-title">
      <div className="lab__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.strategy.clearingMobile} />
          <img src={images.strategy.clearing} alt="" className="lab__image" loading="lazy" decoding="async" draggable="false" />
        </picture>
        <div className="lab__rays" />
        <Motes count={16} active={onScreen} tint="rgba(255, 230, 150, 0.95)" />
      </div>
      <div className="lab__shade" aria-hidden="true" />
      <Butterfly active={onScreen} containerRef={ref} />

      <div className="lab__content">
        <ChapterCard id="clearing" />
        <Reveal className="lab__head" delay={120}>
          <h2 id="lab-title" className="lab__title">{strategyLab.title}</h2>
          <p className="lab__intro">{strategyLab.mapHint}</p>
        </Reveal>
        <Reveal delay={240}>
          <Waypoints />
        </Reveal>
      </div>

      <Secret id="boat" className="lab__boat" />
      <div className="lab__grass" aria-hidden="true"><Grass count={110} /></div>
      <div className="lab__fade" aria-hidden="true" />
    </section>
  )
}
