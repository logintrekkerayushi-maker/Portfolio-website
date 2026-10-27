import './ScrollIndicator.css'

/** Small "scroll" cue at the bottom of the hero. Links to the next scene. */
export function ScrollIndicator({ href = '#library', label = 'Scroll to begin' }) {
  return (
    <a href={href} className="scroll-cue" aria-label={label}>
      <span className="scroll-cue__text" aria-hidden="true">scroll</span>
      <span className="scroll-cue__line" aria-hidden="true" />
    </a>
  )
}
