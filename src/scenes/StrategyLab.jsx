import { useRef } from 'react'
import { images } from '../content/images'
import { strategyLab } from '../content/strategyLab'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { Reveal } from '../components/ui/Reveal'
import { Icon } from '../components/ui/Icons'
import './StrategyLab.css'

/** Scene 4 — the Strategy Lab: a forest clearing, then editorial research notes. */
export function StrategyLab() {
  const ref = useRef(null)
  useSceneProgress(ref)

  return (
    <section id="strategy-lab" ref={ref} className="lab" aria-labelledby="lab-title">
      {/* painted header band */}
      <div className="lab__band" aria-hidden="true">
        <div className="lab__art">
          <picture>
            <source media="(max-width: 700px)" srcSet={images.strategy.clearingMobile} />
            <img src={images.strategy.clearing} alt="" className="lab__image" loading="lazy" decoding="async" draggable="false" />
          </picture>
        </div>
        <div className="lab__band-shade" />
      </div>

      <div className="lab__content">
        <Reveal className="lab__head">
          <p className="lab__eyebrow">{strategyLab.eyebrow}</p>
          <h2 id="lab-title" className="lab__title">{strategyLab.title}</h2>
          <p className="lab__intro">{strategyLab.intro}</p>
        </Reveal>

        <div className="lab__grid">
          <ol className="lab__projects">
            {strategyLab.projects.map((p, i) => (
              <Reveal as="li" key={p.href} delay={i * 120} className="project">
                <span className="project__index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div className="project__body">
                  <p className="project__category">
                    {p.category}
                    {p.status === 'draft' && <span className="project__status">In progress</span>}
                  </p>
                  <h3 className="project__title">
                    <a href={p.href} className="project__link" target="_blank" rel="noopener">{p.title}<span className="visually-hidden"> (opens in a new tab)</span></a>
                  </h3>
                  <p className="project__subtitle">{p.subtitle}</p>
                  <ul className="project__tags" aria-label="Methods and themes">
                    {p.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                  <div className="project__actions">
                    <a href={p.href} className="project__cta" target="_blank" rel="noopener">
                      {p.cta} <Icon name="arrow" size={16} /><span className="visually-hidden"> (opens in a new tab)</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal as="aside" className="lab__method" delay={300} aria-labelledby="lab-method-title">
            <p id="lab-method-title" className="lab__method-title">{strategyLab.aside.title}</p>
            {strategyLab.aside.lines.map((l) => <p key={l} className="lab__method-note">{l}</p>)}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
