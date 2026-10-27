import { useRef } from 'react'
import { useInView } from '../../hooks/useInView'
import './Reveal.css'

/** Wraps content that should fade and rise into place when it scrolls into view. */
export function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const inView = useInView(ref)
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'reveal--in' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
