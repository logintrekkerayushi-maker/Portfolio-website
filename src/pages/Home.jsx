import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { NavBar } from '../components/ui/NavBar'
import { Hero } from '../scenes/Hero'
import { Approach } from '../scenes/Approach'
import { Library } from '../scenes/Library'
import { StrategyLab } from '../scenes/StrategyLab'
import { NextScene } from '../scenes/NextScene'

/** The world itself: every scene stacked in scroll order. */
export function Home() {
  const { hash } = useLocation()

  // When arriving at /#library (from a case-study page, for example) scroll to that scene.
  useEffect(() => {
    if (!hash) return
    const el = document.querySelector(hash)
    if (!el) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const t = setTimeout(() => el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' }), 50)
    return () => clearTimeout(t)
  }, [hash])

  return (
    <>
      <NavBar />
      <main id="main">
        <Hero />
        <Approach />
        <Library />
        <StrategyLab />
        {/* Placeholders so navigation works. Replaced in Stages 6–7. */}
        <NextScene id="visual-studio" title="Visual Studio" note="The creative workshop arrives in Stage 6." />
        <NextScene id="about" title="The Viewpoint" note="About, contact and CV arrive in Stage 7." />
      </main>
    </>
  )
}
