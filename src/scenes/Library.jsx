import { useRef } from 'react'
import { images } from '../content/images'
import { library } from '../content/library'
import { useSceneProgress } from '../hooks/useSceneProgress'
import { useInView } from '../hooks/useInView'
import { Motes } from '../components/landscape/Motes'
import { Bookshelf } from '../components/library/Bookshelf'
import { ChapterCard } from '../components/journey/ChapterCard'
import { Secret } from '../components/journey/Secret'
import { Reveal } from '../components/ui/Reveal'
import './Library.css'

/** Scene 3 — the library. The bookshelf is the way onward. */
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
        <ChapterCard id="library" />
        <Reveal className="library__head" delay={120}>
          <h2 id="library-title" className="library__title">{library.title}</h2>
          <p className="library__intro">{library.intro}</p>
        </Reveal>
        <Reveal delay={240} className="library__shelf">
          <Bookshelf>
            <Secret id="cat" className="library__cat" />
          </Bookshelf>
        </Reveal>
      </div>
    </section>
  )
}
