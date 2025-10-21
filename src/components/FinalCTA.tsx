import { CalendarBlank, ArrowRight } from '@phosphor-icons/react'
import { Button } from './ui/button'

export function FinalCTA() {
  return (
    <section id="final-cta" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div 
          className="glass-panel rounded-2xl p-12 text-center"
          style={{
            boxShadow: 'inset 0 1px 0 0 var(--glass-inner), 0 0 60px 0 var(--brand)30'
          }}
        >
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <CalendarBlank size={16} weight="fill" className="text-[var(--aurora-cyan)]" />
            <span className="text-sm font-medium text-[var(--text-60)]">
              Ready to Transform?
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text gradient-text-shimmer">
              Let's Build Something Extraordinary
            </span>
          </h2>

          <p className="text-lg text-[var(--text-60)] mb-10 max-w-2xl mx-auto">
            Schedule a complimentary strategy call to discuss your challenges and explore how we can help you achieve your goals.
          </p>

          <Button
            size="lg"
            className="relative group overflow-hidden bg-gradient-to-r from-[var(--brand)] via-[var(--aurora-violet)] to-[var(--aurora-magenta)] hover:shadow-[0_0_50px_var(--brand)] transition-all duration-300 text-lg px-8 py-6"
          >
            <span className="relative z-10 flex items-center gap-2">
              <CalendarBlank size={20} weight="fill" />
              Book a Strategy Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:animate-[light-sweep_1s_ease-in-out]" />
          </Button>

          <p className="text-sm text-[var(--text-60)] mt-6">
            No obligation • Free consultation • Typical response within 24 hours
          </p>
        </div>
      </div>
    </section>
  )
}
