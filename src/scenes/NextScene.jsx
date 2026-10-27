import { Reveal } from '../components/ui/Reveal'
import './NextScene.css'

/**
 * Temporary stand-in for the scenes that arrive in later stages.
 * It exists so the hero buttons and navigation have somewhere to scroll.
 * Delete this file once the real scenes are built.
 */
export function NextScene({ id, title, note }) {
  return (
    <section id={id} className="next-scene" aria-labelledby={`${id}-title`}>
      <Reveal className="next-scene__inner">
        <p className="next-scene__eyebrow">Coming in a later stage</p>
        <h2 id={`${id}-title`} className="next-scene__title">{title}</h2>
        <p className="next-scene__note">{note}</p>
      </Reveal>
    </section>
  )
}
