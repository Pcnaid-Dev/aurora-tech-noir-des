import { Button } from './ui/button'
import { Sparkle, ShieldCheck } from '@phosphor-icons/react'

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
            Transforming Businesses
          </span>
          <br />
          <span className="text-white">
            with Cutting-Edge Technology
          </span>
        </h1>

        <p className="text-lg md:text-xl text-[var(--text-60)] mb-8 max-w-2xl mx-auto leading-relaxed">
          Full-service technology solutions that reduce costs, increase uptime, and accelerate your digital transformation.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12 flex-wrap">
          <div className="inline-flex items-center gap-2 glass-panel px-3 py-1.5 rounded-lg">
            <ShieldCheck size={14} weight="fill" className="text-[var(--aurora-cyan)]" />
            <span className="text-xs font-medium text-[var(--text-60)]">PCI DSS</span>
          </div>
          <div className="inline-flex items-center gap-2 glass-panel px-3 py-1.5 rounded-lg">
            <ShieldCheck size={14} weight="fill" className="text-[var(--aurora-violet)]" />
            <span className="text-xs font-medium text-[var(--text-60)]">SOC 2</span>
          </div>
          <div className="inline-flex items-center gap-2 glass-panel px-3 py-1.5 rounded-lg">
            <ShieldCheck size={14} weight="fill" className="text-[var(--aurora-peach)]" />
            <span className="text-xs font-medium text-[var(--text-60)]">ISO 27001</span>
          </div>
          <div className="inline-flex items-center gap-2 glass-panel px-3 py-1.5 rounded-lg">
            <ShieldCheck size={14} weight="fill" className="text-[var(--neon-cyan)]" />
            <span className="text-xs font-medium text-[var(--text-60)]">Gov-Ready</span>
          </div>
        </div>

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
            onClick={() => document.getElementById('final-cta')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  )
}