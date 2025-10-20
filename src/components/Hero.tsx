import { Button } from './ui/button'
import { Sparkle } from '@phosphor-icons/react'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="relative z-10 text-center max-w-5xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-8">
          <Sparkle size={16} weight="fill" className="text-[var(--aurora-cyan)]" />
          <span className="text-sm font-medium text-[var(--text-60)]">
            Next-Generation Technology Solutions
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text gradient-text-shimmer inline-block">
            Aurora Tech-Noir
          </span>
          <br />
          <span className="text-white">
            Innovation Delivered
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-60)] mb-12 max-w-2xl mx-auto leading-relaxed">
          Full-service technology solutions specializing in Payments & POS, Energy, Telecom, 
          Web Marketing, Accounting, and Business Strategy. Experience the future of enterprise technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="relative group overflow-hidden bg-gradient-to-r from-[var(--brand)] via-[var(--aurora-violet)] to-[var(--aurora-magenta)] hover:shadow-[0_0_40px_var(--brand)] transition-all duration-300"
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">Explore Solutions</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:animate-[light-sweep_1s_ease-in-out]" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="glass-panel hover:glass-panel-hover border-[var(--glass-border)]"
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {[
            { value: '500+', label: 'Clients' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
            { value: '10+', label: 'Years' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[var(--text-60)]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}