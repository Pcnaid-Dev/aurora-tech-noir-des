import { CheckCircle, TrendUp, Lightning, Shield } from '@phosphor-icons/react'
import { Section } from './Section'

const outcomes = [
  {
    icon: TrendUp,
    problem: 'High operational costs',
    outcome: 'Reduce infrastructure spend by 40%',
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Shield,
    problem: 'System downtime & reliability issues',
    outcome: 'Achieve 99.9% uptime with 24/7 monitoring',
    color: 'var(--aurora-violet)'
  },
  {
    icon: Lightning,
    problem: 'Slow deployment cycles',
    outcome: 'Deploy solutions 5x faster with automation',
    color: 'var(--aurora-peach)'
  },
  {
    icon: CheckCircle,
    problem: 'Compliance & security concerns',
    outcome: 'Meet PCI DSS, SOC2, and HIPAA standards',
    color: 'var(--neon-cyan)'
  }
]

export function ProblemOutcome() {
  return (
    <Section id="problem-outcome" contentAlign="center">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          <span className="gradient-text">Transform Challenges Into Results</span>
        </h2>
        <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
          We solve the complex problems that hold your business back
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {outcomes.map((item, index) => {
          const Icon = item.icon
          return (
            <div 
              key={index}
              className="glass-panel glass-panel-hover rounded-xl p-6 flex items-start gap-4"
              style={{
                boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${item.color}20`
              }}
            >
              <div 
                className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                  boxShadow: `0 0 20px ${item.color}40`
                }}
              >
                <Icon size={24} weight="duotone" style={{ color: item.color }} />
              </div>
              <div>
                <div className="text-sm text-[var(--text-60)] mb-2">
                  {item.problem}
                </div>
                <div className="text-base font-semibold text-white">
                  → {item.outcome}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
