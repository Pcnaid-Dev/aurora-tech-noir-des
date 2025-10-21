import { 
  CreditCard, 
  Lightning, 
  Globe, 
  ChartBar, 
  Calculator, 
  Strategy 
} from '@phosphor-icons/react'

const solutions = [
  {
    icon: CreditCard,
    title: 'Payments & POS',
    description: 'Secure, scalable payment processing solutions with real-time transaction monitoring and multi-channel support.',
    features: ['Real-time processing', 'Multi-channel support', 'Fraud detection', 'PCI compliance'],
    color: 'var(--aurora-violet)'
  },
  {
    icon: Lightning,
    title: 'Energy Solutions',
    description: 'Smart energy management systems with real-time monitoring, optimization, and predictive analytics.',
    features: ['Smart monitoring', 'Usage optimization', 'Predictive analytics', 'Cost reduction'],
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Globe,
    title: 'Telecom Services',
    description: 'Enterprise telecommunications infrastructure with high-availability networks and unified communications.',
    features: ['High availability', 'Unified communications', 'Scalable infrastructure', '24/7 support'],
    color: 'var(--aurora-magenta)'
  },
  {
    icon: ChartBar,
    title: 'Web & Marketing',
    description: 'Full-stack web development and digital marketing solutions that drive engagement and growth.',
    features: ['Full-stack development', 'SEO optimization', 'Analytics & insights', 'Growth strategies'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: Calculator,
    title: 'Accounting & Taxes',
    description: 'Automated financial management and tax compliance solutions with real-time reporting and insights.',
    features: ['Automated bookkeeping', 'Tax compliance', 'Real-time reporting', 'Financial insights'],
    color: 'var(--neon-cyan)'
  },
  {
    icon: Strategy,
    title: 'Strategy & Formation',
    description: 'Business strategy consulting and formation services to accelerate growth and operational excellence.',
    features: ['Strategic planning', 'Business formation', 'Growth acceleration', 'Operational excellence'],
    color: 'var(--brand-300)'
  }
]

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 px-4">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Solutions Overview</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Enterprise-grade technology services designed to transform your business operations 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-2xl p-8 transition-all"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${solution.color}30, ${solution.color}10)`,
                    boxShadow: `0 0 40px ${solution.color}40`
                  }}
                >
                  <Icon size={32} weight="duotone" style={{ color: solution.color }} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {solution.title}
                </h3>

                <p className="text-[var(--text-60)] mb-6 leading-relaxed">
                  {solution.description}
                </p>

                <div className="space-y-2">
                  {solution.features.map((feature, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: solution.color }}
                      />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}