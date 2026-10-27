/* Small line icons drawn as SVG so they stay crisp at any size and take the text colour. */
const base = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

const paths = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" fill="currentColor" stroke="none" />
    </>
  ),
  lantern: (
    <>
      <path d="M9 3h6M12 3v2M8 7h8l1 9a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z" />
      <path d="M10 21h4M12 18v3" />
      <path d="M12 10.5a2 2 0 0 1 1.5 3.3L12 15l-1.5-1.2A2 2 0 0 1 12 10.5z" fill="currentColor" stroke="none" />
    </>
  ),
  book: (
    <>
      <path d="M4 5a2 2 0 0 1 2-2h12v16H6a2 2 0 0 0-2 2z" />
      <path d="M4 19a2 2 0 0 1 2-2h12M8 7h6" />
    </>
  ),
  person: (
    <>
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11M7 10l5 5 5-5M4 19h16" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M8 10v7M8 7v.5M12 17v-4a2 2 0 0 1 4 0v4M12 10v7" />
    </>
  ),
}

export function Icon({ name, size = 22, className = '' }) {
  return (
    <svg {...base} width={size} height={size} className={className}>
      {paths[name]}
    </svg>
  )
}
