import { useRef } from 'react'
import { images } from '../content/images'
import { strategyLab } from '../content/strategyLab'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Grass } from '../components/landscape/Grass'
import { Reveal } from '../components/ui/Reveal'
import { Icon } from '../components/ui/Icons'
import './StrategyLab.css'

/**
 * Scene 4 — the Strategy Lab: a sunlit clearing with a wooden trail signpost.
 * Each arrow board on the post is a project; following it opens the report.
 */
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

      <div className="lab__content">
        <Reveal className="lab__head">
          <p className="lab__eyebrow">{strategyLab.eyebrow}</p>
          <h2 id="lab-title" className="lab__title">{strategyLab.title}</h2>
          <p className="lab__intro">{strategyLab.intro}</p>
        </Reveal>

        <Reveal className="signpost" delay={150}>
          <div className="signpost__post" aria-hidden="true">
            <span className="signpost__cap" />
            <span className="signpost__lantern"><Icon name="lantern" size={36} /></span>
          </div>
          <ul className="signpost__boards">
            {strategyLab.projects.map((p, i) => (
              <li key={p.href} className={`signboard-row signboard-row--${i % 2 ? 'left' : 'right'}`}>
                <a
                  href={p.href}
                  className={`signboard signboard--${i % 2 ? 'left' : 'right'}`}
                  target="_blank"
                  rel="noopener"
                  style={{ '--i': i }}
                >
                  <span className="signboard__nail signboard__nail--a" aria-hidden="true" />
                  <span className="signboard__nail signboard__nail--b" aria-hidden="true" />
                  <span className="signboard__category">{p.category}</span>
                  <span className="signboard__title">{p.title}</span>
                  <span className="signboard__sub">{p.subtitle}</span>
                  <span className="signboard__cta">
                    {p.cta} <Icon name="arrow" size={14} />
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </span>
                  {p.status === 'draft' && <span className="signboard__status">In progress</span>}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="lab__notes" delay={400}>
          {strategyLab.aside.lines.map((l) => <p key={l}>{l}</p>)}
        </Reveal>
      </div>

      <div className="lab__grass" aria-hidden="true"><Grass count={110} /></div>
      <div className="lab__fade" aria-hidden="true" />
    </section>
  )
}
