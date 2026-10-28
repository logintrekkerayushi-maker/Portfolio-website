import { useRef } from 'react'
import { images } from '../content/images'
import { about } from '../content/about'
import { profile } from '../content/profile'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Reveal } from '../components/ui/Reveal'
import { Icon } from '../components/ui/Icons'
import './Viewpoint.css'

const HREFS = {
  linkedin: () => profile.links.linkedin,
  email: () => `mailto:${profile.links.email}`,
  cv: () => profile.links.cv,
}
const ICONS = { linkedin: 'linkedin', email: 'mail', cv: 'download' }

/** Scene 6 — the viewpoint at sunset. About, contact, CV. The end of the trail. */
export function Viewpoint() {
  const ref = useRef(null)
  useSceneProgress(ref)
  const onScreen = useInView(ref, { once: false, rootMargin: '0px' })

  return (
    <section id="about" ref={ref} className="viewpoint" aria-labelledby="about-title">
      <div className="viewpoint__art" aria-hidden="true">
        <picture>
          <source media="(max-width: 700px)" srcSet={images.viewpoint.sceneMobile} />
          <img src={images.viewpoint.scene} alt="" className="viewpoint__image" loading="lazy" decoding="async" draggable="false" />
        </picture>
        <div className="viewpoint__sunset" />
        <div className="viewpoint__stars" />
        <Motes count={10} active={onScreen} tint="rgba(255, 210, 150, 0.9)" />
      </div>
      <div className="viewpoint__shade" aria-hidden="true" />

      <div className="viewpoint__content">
        <Reveal className="viewpoint__head">
          <p className="viewpoint__eyebrow">{profile.name}</p>
          <h2 id="about-title" className="viewpoint__title">{about.title}</h2>
        </Reveal>
        <Reveal className="viewpoint__text" delay={150}>
          {about.paragraphs.map((t) => <p key={t}>{t}</p>)}
          <p className="viewpoint__closing">{about.closing}</p>
        </Reveal>
        <Reveal className="viewpoint__links" delay={300}>
          {about.links.map((l) => (
            <a
              key={l.id}
              href={HREFS[l.id]()}
              className="viewpoint__link"
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener' : undefined}
              download={l.id === 'cv' ? '' : undefined}
            >
              <Icon name={ICONS[l.id]} size={20} />
              <span>{l.label}</span>
              {l.external && <span className="visually-hidden"> (opens in a new tab)</span>}
            </a>
          ))}
        </Reveal>
        <Reveal className="viewpoint__focus" delay={400}>
          <p>{profile.focus.join(' · ')}</p>
        </Reveal>
      </div>

      <footer className="viewpoint__footer">
        <p>{about.footer}</p>
        <a href="#top" className="viewpoint__back">Back to the valley ↑</a>
      </footer>
    </section>
  )
}
