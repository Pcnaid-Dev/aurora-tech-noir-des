import { 
  Lightning, 
  ChartBar,
  Strategy,
  Calculator,
  Phone
} from '@phosphor-icons/react'
import { Check } from '@phosphor-icons/react'

const solutions = [
  {
    icon: Lightning,
    title: 'Payments & POS',
    description: 'Advanced payment processing and point-of-sale systems with real-time transaction monitoring and fraud detection.',
    features: ['Real-time processing', 'Fraud detection', 'Multi-channel support', 'Compliance ready'],
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
    icon: Phone,
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
    title: 'Business Strategy',
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
            <span className="gradient-text">Comprehensive Solutions</span>
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
                className="glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-300"
              >
                <div 
                  className="w-14 h-14 rounded-xl mb-6 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${solution.color}, ${solution.color}80)`,
                    boxShadow: `0 0 20px ${solution.color}40`
                  }}
                >
                  <Icon size={28} weight="duotone" color="white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-[var(--text-100)]">
                  {solution.title}
                </h3>
                
                <p className="text-[var(--text-60)] mb-6 leading-relaxed">
                  {solution.description}
                </p>
                
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check 
                        size={20} 
                        weight="bold" 
                        className="text-[var(--neon-cyan)] mt-0.5 flex-shrink-0" 
                      />
                      <span className="text-[var(--text-100)] text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="w-full py-3 rounded-lg font-semibold transition-all duration-300 bg-[var(--bg-800)] text-[var(--text-100)] hover:bg-[var(--brand)] hover:shadow-lg hover:shadow-[var(--brand)]30"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Learn More
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
