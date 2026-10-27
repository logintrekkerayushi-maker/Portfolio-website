import './Button.css'

/**
 * Pill button. `variant` is "primary" (solid forest green) or "secondary" (frosted glass).
 * Renders an <a> when given `href`, otherwise a <button>.
 */
export function Button({ href, variant = 'primary', children, arrow = false, ...rest }) {
  const className = `btn btn--${variant}`
  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <svg className="btn__arrow" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </>
  )
  if (href) {
    return (
      <a href={href} className={className} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button type="button" className={className} {...rest}>
      {content}
    </button>
  )
}
