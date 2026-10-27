import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CaseStudy } from './pages/CaseStudy'

export default function App() {
  return (
    <>
      <a href="#main" className="visually-hidden">Skip to content</a>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/strategy-lab/:slug" element={<CaseStudy />} />
        <Route path="*" element={<CaseStudy />} />
      </Routes>
    </>
  )
}
