import { FolderOpen, Headset, Calendar, TrendUp, ArrowRight } from '@phosphor-icons/react'
import { Button } from './ui/button'

const models = [
  {
    icon: FolderOpen,
    title: 'Project-Based',
    description: 'Fixed-scope engagements with clear deliverables and milestones',
    features: ['Defined timeline', 'Fixed budget', 'Turnkey delivery'],
    color: 'var(--aurora-violet)'
  },
  {
    icon: Headset,
    title: 'Managed Services',
    description: 'Ongoing support and operations with predictable monthly pricing',
    features: ['24/7 monitoring', 'Proactive maintenance', 'Dedicated team'],
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Calendar,
    title: 'Retainer',
    description: 'Pre-purchased hours for flexible on-demand technical resources',
    features: ['Priority support', 'Flexible allocation', 'Roll-over hours'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: TrendUp,
    title: 'Performance-Based',
    description: 'Profit-share and commission models aligned with your success',
    features: ['Revenue share options', 'Performance incentives', 'Long-term partnership'],
    color: 'var(--neon-cyan)'
  }
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Engagement Models</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Flexible pricing structures designed to fit your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {models.map((model, index) => {
            const Icon = model.icon
            return (
              <div 
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-6"
                style={{
                  boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${model.color}20`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${model.color}30, ${model.color}10)`,
                    boxShadow: `0 0 25px ${model.color}40`
                  }}
                >
                  <Icon size={24} weight="duotone" style={{ color: model.color }} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">
                  {model.title}
                </h3>

                <p className="text-sm text-[var(--text-60)] mb-4 leading-relaxed">
                  {model.description}
                </p>

                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-[var(--text-60)] flex items-start gap-2">
                      <span className="text-[var(--neon-cyan)] mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[var(--brand)] via-[var(--aurora-violet)] to-[var(--aurora-magenta)] hover:shadow-[0_0_40px_var(--brand)] transition-all duration-300 group"
          >
            Get a Custom Quote
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
