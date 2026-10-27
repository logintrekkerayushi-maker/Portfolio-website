import { useRef } from 'react'
import { profile } from '../content/profile'
import { images } from '../content/images'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { useReducedMotion } from '../hooks/useReducedMotion'
import { Clouds } from '../components/landscape/Clouds'
import { Canopy } from '../components/landscape/Canopy'
import { Grass } from '../components/landscape/Grass'
import { Petals } from '../components/landscape/Petals'
import { Birds } from '../components/landscape/Birds'
import { Button } from '../components/ui/Button'
import { ScrollIndicator } from '../components/ui/ScrollIndicator'
import './Hero.css'

/*
  Scene 1 — the open landscape.
  Depth layers, back to front:
    sky      — the full painting, moves slowest
    clouds   — drifting sprites
    mid      — the same painting masked to the land, moves a little faster
    fore     — masked to the meadow and path, moves with the page
    grass    — vector blades along the bottom edge, swaying
    petals   — occasional drifting petals
    canopy   — hanging branches in the corner, moves fastest
  The hook writes --p (scroll progress) on the section; CSS turns it into motion.
*/
function Painting({ className }) {
  return (
    <picture className={className}>
      <source media="(max-width: 700px)" srcSet={images.hero.landscapeMobile} />
      <img src={images.hero.landscape} alt="" className="hero__image" fetchPriority="high" decoding="async" draggable="false" />
    </picture>
  )
}

export function Hero() {
  const ref = useRef(null)
  useSceneProgress(ref)
  const onScreen = useInView(ref, { once: false, rootMargin: '0px' })
  const reduced = useReducedMotion()
  const isPhone = typeof window !== 'undefined' && window.matchMedia('(max-width: 700px)').matches

  return (
    <section id="top" ref={ref} className="hero" aria-labelledby="hero-title">
      <div className="hero__art" aria-hidden="true">
        <div className="hero__layer hero__layer--sky"><Painting /></div>
        <div className="hero__layer hero__layer--clouds"><Clouds />{!reduced && <Birds />}</div>
        <div className="hero__layer hero__layer--mid"><Painting /></div>
        <div className="hero__layer hero__layer--fore"><Painting /></div>
        <div className="hero__haze" />
        <div className="hero__scrim" />
        <div className="hero__layer hero__layer--grass"><Grass count={isPhone ? 80 : 150} /></div>
        {!reduced && <Petals count={isPhone ? 6 : 10} active={onScreen} />}
        <div className="hero__layer hero__layer--canopy"><Canopy /></div>
        <div className="hero__fade" />
      </div>

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__eyebrow-rule" aria-hidden="true" />
          <span>{profile.name}</span>
        </p>
        <h1 id="hero-title" className="hero__title">
          {profile.headline.split('\n').map((line, i) => (
            <span key={i} className="hero__title-line">{line}</span>
          ))}
        </h1>
        <p className="hero__intro">{profile.intro}</p>
        <p className="hero__focus">{profile.focus.join(' · ')}</p>
        <div className="hero__actions">
          <Button href="#library" arrow>Begin exploring</Button>
          <Button href="#strategy-lab" variant="secondary">View my work</Button>
        </div>
      </div>

      <p className="hero__tagline" aria-hidden="true">{profile.tagline}</p>
      <ScrollIndicator href="#library" />
    </section>
  )
}
