import { ArrowRight, TrendDown, Clock, CheckCircle } from '@phosphor-icons/react'
import { Button } from './ui/button'

export function CaseStudy() {
  return (
    <section id="case-study" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="glass-panel rounded-2xl p-8 md:p-12">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--aurora-peach)] to-[var(--aurora-magenta)] flex items-center justify-center">
              <TrendDown size={24} weight="bold" className="text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-[var(--neon-cyan)] mb-2">
                ENERGY SECTOR CASE STUDY
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Cut Energy Spend 28% in 90 Days
              </h2>
              <p className="text-[var(--text-60)]">
                Regional utility provider transforms operations with smart monitoring
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 my-8">
            <div className="flex items-start gap-3">
              <CheckCircle size={24} weight="fill" className="text-[var(--aurora-cyan)] flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Real-time Analytics</div>
                <div className="text-sm text-[var(--text-60)]">
                  Deployed AI-powered monitoring across 50+ facilities
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock size={24} weight="fill" className="text-[var(--aurora-violet)] flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Fast Implementation</div>
                <div className="text-sm text-[var(--text-60)]">
                  Full rollout completed in under 12 weeks
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <TrendDown size={24} weight="fill" className="text-[var(--aurora-peach)] flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold text-white mb-1">Immediate Savings</div>
                <div className="text-sm text-[var(--text-60)]">
                  $2.4M annual cost reduction achieved
                </div>
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            className="glass-panel hover:glass-panel-hover border-[var(--glass-border)] group"
          >
            Read Full Case Study
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
