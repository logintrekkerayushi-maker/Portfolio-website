import { profile } from '../content/profile'
import { images } from '../content/images'
import { Clouds } from '../components/landscape/Clouds'
import { Button } from '../components/ui/Button'
import { ScrollIndicator } from '../components/ui/ScrollIndicator'
import './Hero.css'

/** Scene 1 — the open landscape. Full screen, wordmark, headline, intro, two actions. */
export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.hero.landscapeMobile} />
          <img
            src={images.hero.landscape}
            alt=""
            className="hero__image"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <div className="hero__haze" />
        <Clouds />
        <div className="hero__scrim" />
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
