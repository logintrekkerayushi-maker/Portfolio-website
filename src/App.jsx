import { NavBar } from './components/ui/NavBar'
import { Hero } from './scenes/Hero'
import { NextScene } from './scenes/NextScene'

export default function App() {
  return (
    <>
      <a href="#main" className="visually-hidden">Skip to content</a>
      <NavBar />
      <main id="main">
        <Hero />
        {/* Placeholders so navigation works. Replaced in Stages 4–7. */}
        <NextScene id="library" title="The Library" note="The enchanted library hub arrives in Stage 4." />
        <NextScene id="strategy-lab" title="Strategy Lab" note="Case studies arrive in Stage 5." />
      </main>
    </>
  )
}
