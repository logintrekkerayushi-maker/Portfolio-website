import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { strategyLab, findProject } from '../content/strategyLab'
import { profile } from '../content/profile'
import { NavBar } from '../components/ui/NavBar'
import { Icon } from '../components/ui/Icons'
import './CaseStudy.css'

const SECTIONS = [
  ['problem', 'Business problem'],
  ['context', 'Context & research'],
  ['approach', 'Analytical approach'],
  ['insights', 'Key insights'],
  ['recommendations', 'Strategic recommendations'],
]

/** One case study, in the six-part structure. Content comes from content/strategyLab.js. */
export function CaseStudy() {
  const { slug } = useParams()
  const project = findProject(slug)

  useEffect(() => {
    document.title = project ? `${project.title} — ${profile.siteName}` : `Not found — ${profile.siteName}`
    window.scrollTo(0, 0)
    return () => { document.title = `${profile.siteName} — ${profile.name}` }
  }, [project])

  if (!project) {
    return (
      <>
        <NavBar />
        <main id="main" className="case case--missing">
          <p className="case__eyebrow">Strategy Lab</p>
          <h1 className="case__title">That page isn’t on the map.</h1>
          <Link to="/#strategy-lab" className="case__back"><Icon name="arrow" size={16} className="flip" /> Back to Strategy Lab</Link>
        </main>
      </>
    )
  }

  const index = strategyLab.projects.indexOf(project)
  const next = strategyLab.projects[(index + 1) % strategyLab.projects.length]
  const s = project.sections
  const isDraft = project.status !== 'complete'

  return (
    <>
      <NavBar />
      <main id="main" className="case">
        <header className="case__header">
          <div className="case__header-inner">
            <Link to="/#strategy-lab" className="case__back"><Icon name="arrow" size={16} className="flip" /> Strategy Lab</Link>
            <p className="case__eyebrow">{project.category}{isDraft && <span className="case__status">In progress</span>}</p>
            <h1 className="case__title">{project.title}</h1>
            <p className="case__subtitle">{project.subtitle}</p>
            <dl className="case__meta">
              {project.meta.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
            {project.note && <p className="case__note">{project.note}</p>}
          </div>
        </header>

        <div className="case__layout">
          <nav className="case__toc" aria-label="Sections of this case study">
            <ol>
              {strategyLab.method.map((m, i) => (
                <li key={m.n}><a href={`#s-${i + 1}`}><span>{m.n}</span>{m.label}</a></li>
              ))}
            </ol>
          </nav>

          <article className="case__body">
            {SECTIONS.map(([key, label], i) => {
              const paras = s[key] || []
              if (isDraft && paras.length === 0) return null
              return (
                <section key={key} id={`s-${i + 1}`} className="case__section" aria-labelledby={`h-${key}`}>
                  <p className="case__n" aria-hidden="true">{String(i + 1).padStart(2, '0')}</p>
                  <h2 id={`h-${key}`}>{label}</h2>
                  {paras.length ? paras.map((t, j) => <p key={j}>{t}</p>) : <p className="case__todo">To be written.</p>}
                </section>
              )
            })}

            <section id="s-6" className="case__section case__section--evidence" aria-labelledby="h-evidence">
              <p className="case__n" aria-hidden="true">06</p>
              <h2 id="h-evidence">Supporting evidence</h2>
              {s.evidence?.note && <p>{s.evidence.note}</p>}
              {s.evidence?.items?.length > 0 && (
                <ul className="case__evidence">
                  {s.evidence.items.map((it) => <li key={it}>{it}</li>)}
                </ul>
              )}
              {project.fullPage ? (
                <a href={project.fullPage} className="case__full" target="_blank" rel="noopener">
                  <Icon name="book" size={20} /> Open the full case study <span className="visually-hidden">(opens in a new tab)</span>
                </a>
              ) : (
                <p className="case__todo">Full write-up coming soon.</p>
              )}
            </section>

            <footer className="case__footer">
              <Link to="/#strategy-lab" className="case__back"><Icon name="arrow" size={16} className="flip" /> All projects</Link>
              {next !== project && (
                <Link to={`/strategy-lab/${next.slug}`} className="case__next">
                  <span>Next case</span><strong>{next.title}</strong>
                </Link>
              )}
            </footer>
          </article>
        </div>
      </main>
    </>
  )
}
