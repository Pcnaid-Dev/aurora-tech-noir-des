import { AuroraBackground } from './components/AuroraBackground'
import { ParticleField } from './components/ParticleField'
import { FloatingNav } from './components/FloatingNav'
import { Hero } from './components/Hero'
import { TrustedPartners } from './components/TrustedPartners'
import { ProblemOutcome } from './components/ProblemOutcome'
import { Solutions } from './components/Solutions'
import { Industries } from './components/Industries'
import { Metrics } from './components/Metrics'
import { CaseStudy } from './components/CaseStudy'
import { Process } from './components/Process'
import { Security } from './components/Security'
import { Certifications } from './components/Certifications'
import { Integrations } from './components/Integrations'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
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
        <ProblemOutcome />
        <Solutions />
        <Industries />
        <Metrics />
        <CaseStudy />
        <Process />
        <Security />
        <Certifications />
        <Integrations />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>

      <Toaster />
    </div>
  )
}

export default App