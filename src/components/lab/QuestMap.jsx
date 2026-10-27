import { useState } from 'react'
import { strategyLab } from '../../content/strategyLab'
import { Icon } from '../ui/Icons'
import './QuestMap.css'

/* Where the three wax seals sit on the map, in % of its width and height. */
const SPOTS = [
  { x: 24, y: 70 },
  { x: 52, y: 46 },
  { x: 77, y: 27 },
]
const WAX = ['#b4372e', '#1f5a45', '#c9962b']
const NUMERAL = ['I', 'II', 'III']

/**
 * An expedition map unrolled on a stone. Each wax seal marks a project;
 * hover or press a seal and its note unrolls. Phones list the notes below.
 */
export function QuestMap() {
  const [active, setActive] = useState(null)
  const projects = strategyLab.projects.slice(0, 3)

  return (
    <div className="questmap">
      <div className="questmap__table">
      <div className="questmap__stone" aria-hidden="true" />
      <div className="questmap__paper">
        <svg className="questmap__svg" viewBox="0 0 900 620" aria-hidden="true">
          <defs>
            <linearGradient id="parch" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f1e3c2" /><stop offset="0.5" stopColor="#e6d2a6" /><stop offset="1" stopColor="#d6bb86" />
            </linearGradient>
            <radialGradient id="burn" cx="50%" cy="50%" r="70%">
              <stop offset="0.55" stopColor="rgba(120,80,30,0)" /><stop offset="1" stopColor="rgba(120,80,30,0.35)" />
            </radialGradient>
          </defs>
          {/* parchment with torn edges */}
          <path className="questmap__sheet" d="M28 36 C 120 18, 260 44, 380 26 S 640 40, 760 22 S 880 50, 872 110 C 884 220, 860 330, 880 440 S 866 580, 850 592 C 720 606, 560 580, 420 598 S 160 586, 60 600 C 22 560, 36 420, 24 300 S 10 120, 28 36 Z" fill="url(#parch)" stroke="#b89a67" strokeWidth="3" />
          <path d="M28 36 C 120 18, 260 44, 380 26 S 640 40, 760 22 S 880 50, 872 110 C 884 220, 860 330, 880 440 S 866 580, 850 592 C 720 606, 560 580, 420 598 S 160 586, 60 600 C 22 560, 36 420, 24 300 S 10 120, 28 36 Z" fill="url(#burn)" />
          {/* title */}
          <text x="450" y="78" textAnchor="middle" className="questmap__title">Expedition map · Strategy Lab</text>
          <path d="M300 92 H 600" stroke="#8a6238" strokeWidth="1" strokeDasharray="2 4" />
          {/* mountains */}
          <g fill="none" stroke="#7a5431" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round">
            <path d="M80 250 l40-70 30 48 24-32 44 54" /><path d="M120 180 l10 18" opacity="0.6" />
            <path d="M620 520 l34-60 26 40 20-26 36 46" /><path d="M700 170 l30-50 22 34 18-22 30 38" />
          </g>
          {/* forest */}
          <g fill="#7fae7a" stroke="#3f6b45" strokeWidth="1.4">
            {[[180, 400], [215, 430], [160, 450], [250, 410], [230, 470], [300, 450], [610, 400], [650, 430], [690, 410], [590, 455]].map(([x, y], i) => (
              <g key={i}><circle cx={x} cy={y} r="14" /><path d={`M${x} ${y + 14} v12`} stroke="#5a3d1f" strokeWidth="2.5" /></g>
            ))}
          </g>
          {/* lake */}
          <path d="M470 520 C 500 480, 580 480, 600 520 S 560 580, 500 570 S 440 560, 470 520 Z" fill="#9fd0e8" stroke="#4e8aa6" strokeWidth="1.5" />
          <path d="M500 532 q 14 -8 28 0 q 14 8 28 0" fill="none" stroke="#4e8aa6" strokeWidth="1.2" />
          {/* the route */}
          <path className="questmap__route" d="M110 540 C 170 520, 200 470, 216 434 S 330 320, 468 285 S 600 230, 693 167" />
          {/* compass rose */}
          <g transform="translate(790 520)" fill="#5a3d1f" stroke="#5a3d1f">
            <circle r="34" fill="none" strokeWidth="1.2" /><circle r="26" fill="none" strokeWidth="0.6" strokeDasharray="2 3" />
            <path d="M0 -40 L6 0 L0 10 L-6 0 Z" fill="#b4372e" stroke="none" /><path d="M0 40 L6 0 L0 -10 L-6 0 Z" stroke="none" />
            <path d="M-40 0 L0 6 L10 0 L0 -6 Z" stroke="none" opacity="0.6" /><path d="M40 0 L0 6 L-10 0 L0 -6 Z" stroke="none" opacity="0.6" />
            <text y="-46" textAnchor="middle" fontSize="13" fontFamily="Cormorant Garamond, serif" fontWeight="700" stroke="none">N</text>
          </g>
          {/* legend */}
          <g fontFamily="Caveat, cursive" fontSize="20" fill="#6b4423">
            <text x="60" y="560">Here be insights</text>
            <text x="700" y="110">unexplored</text>
          </g>
        </svg>

        {projects.map((p, i) => (
          <div
            key={p.href}
            className={`mark ${active === i ? 'mark--active' : ''}`}
            style={{ left: `${SPOTS[i].x}%`, top: `${SPOTS[i].y}%` }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive((a) => (a === i ? null : a))}
          >
            <button
              type="button"
              className="mark__seal"
              style={{ '--wax': WAX[i] }}
              aria-expanded={active === i}
              aria-controls={`mark-note-${i}`}
              onClick={() => setActive((a) => (a === i ? null : i))}
              onFocus={() => setActive(i)}
            >
              <span className="mark__numeral" aria-hidden="true">{NUMERAL[i]}</span>
              <span className="visually-hidden">{p.category}: {p.title}</span>
            </button>
            <div id={`mark-note-${i}`} className="mark__note" role="note">
              <p className="mark__category">{p.category}</p>
              <p className="mark__title">{p.title}</p>
              <p className="mark__sub">{p.subtitle}</p>
              <a href={p.href} className="mark__link" target="_blank" rel="noopener">
                {p.cta} <Icon name="arrow" size={14} /><span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        ))}
        <span className="questmap__pebble" aria-hidden="true" />
      </div>
      </div>

      {/* phones: the same three notes as a plain list under the map */}
      <ol className="questmap__list" aria-label="Projects on the map">
        {projects.map((p, i) => (
          <li key={p.href} className="questmap__item" style={{ '--wax': WAX[i] }}>
            <span className="questmap__item-seal" aria-hidden="true">{NUMERAL[i]}</span>
            <div>
              <p className="mark__category">{p.category}</p>
              <p className="mark__title">{p.title}</p>
              <a href={p.href} className="mark__link" target="_blank" rel="noopener">{p.cta} <Icon name="arrow" size={14} /></a>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}
