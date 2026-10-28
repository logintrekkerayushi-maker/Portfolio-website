import { NavBar } from './components/ui/NavBar'
import { DayCycle } from './components/journey/DayCycle'
import { useJourney } from './hooks/useJourney'
import { Hero } from './scenes/Hero'
import { Approach } from './scenes/Approach'
import { Library } from './scenes/Library'
import { StrategyLab } from './scenes/StrategyLab'
import { NextScene } from './scenes/NextScene'

export default function App() {
  const { progress } = useJourney()
  return (
    <>
      <a href="#main" className="visually-hidden">Skip to content</a>
      <NavBar />
      <main id="main">
        <Hero />
        <Approach />
        <Library />
        <StrategyLab />
        {/* Placeholders so navigation works. Replaced in Stages 6–7. */}
        <NextScene id="visual-studio" title="The Workshop" note="Visual Studio arrives in Stage 6." />
        <NextScene id="about" title="The Viewpoint" note="About, contact and CV arrive in Stage 7." />
      </main>
      <DayCycle progress={progress} />
    </>
  )
}
