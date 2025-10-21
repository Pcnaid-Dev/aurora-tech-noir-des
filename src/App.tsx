import { AuroraBackground } from './components/AuroraBackground'
import { ParticleField } from './components/ParticleField'
import { FloatingNav } from './components/FloatingNav'
import { Hero } from './components/Hero'
import { TrustedPartners } from './components/TrustedPartners'
import { Solutions } from './components/Solutions'
import { Metrics } from './components/Metrics'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Toaster } from './components/ui/sonner'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <ParticleField />
      
      <div className="relative z-10">
        <FloatingNav />
        <Hero />
        <TrustedPartners />
        <Solutions />
        <Metrics />
        <Testimonials />
        <FAQ />
        <Footer />
      </div>

      <Toaster />
    </div>
  )
}

export default App