import { NavBar } from './components/ui/NavBar'
import { Hero } from './scenes/Hero'
import { Approach } from './scenes/Approach'
import { Library } from './scenes/Library'
import { NextScene } from './scenes/NextScene'

export default function App() {
  return (
    <>
      <a href="#main" className="visually-hidden">Skip to content</a>
      <NavBar />
      <main id="main">
        <Hero />
        <Approach />
        <Library />
        {/* Placeholders so navigation works. Replaced in Stages 5–7. */}
        <NextScene id="strategy-lab" title="Strategy Lab" note="Case studies arrive in Stage 5." />
        <NextScene id="visual-studio" title="Visual Studio" note="The creative workshop arrives in Stage 6." />
        <NextScene id="about" title="The Viewpoint" note="About, contact and CV arrive in Stage 7." />
      </main>
    </>
  )
}
