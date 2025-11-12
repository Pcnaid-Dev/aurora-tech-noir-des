import { Button } from '@/components/ui/button'
import { ArrowRight, Play } from '@phosphor-icons/react'
import { GlowTracer } from './GlowTracer'

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text gradient-text-shimmer">
              Transform Your Business
            </span>
            <br />
            <span className="text-foreground">
              With Cutting-Edge Tech Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Full-service technology provider delivering enterprise-grade solutions across payments, energy, telecom, and cloud infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Get Started
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Play size={20} className="mr-2" weight="fill" />
              Watch Demo
            </Button>
          </div>

          <GlowTracer className="max-w-3xl mx-auto">
            <div className="glass-panel rounded-2xl border border-border p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime SLA</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div>
            </div>
          </GlowTracer>
        </div>
      </div>
    </section>
  )
}
