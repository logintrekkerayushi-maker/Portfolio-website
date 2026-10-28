import { NavBar } from './components/ui/NavBar'
import { DayCycle } from './components/journey/DayCycle'
import { useJourney } from './hooks/useJourney'
import { Hero } from './scenes/Hero'
import { Approach } from './scenes/Approach'
import { Library } from './scenes/Library'
import { StrategyLab } from './scenes/StrategyLab'
import { VisualStudio } from './scenes/VisualStudio'
import { Viewpoint } from './scenes/Viewpoint'

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
        <VisualStudio />
        <Viewpoint />
      </main>
      <DayCycle progress={progress} />
    </>
  )
}
