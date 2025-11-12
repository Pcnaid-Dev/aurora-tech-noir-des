import { 
  Lightning, 
  ChartBar,
  Strategy,
  Calculator,
  Phone,
  ShoppingBag,
  Globe,
  Lock,
  CloudArrowUp,
  Database,
  Headset,
  Briefcase
} from '@phosphor-icons/react'
import { Check } from '@phosphor-icons/react'

const solutions = [
  {
    icon: Lightning,
    title: 'Payments & POS',
    description: 'Advanced payment processing and point-of-sale systems with real-time transaction monitoring.',
    features: ['Real-time processing', 'Fraud detection', 'Multi-channel support'],
    color: 'var(--aurora-violet)'
  },
  {
    icon: Lightning,
    title: 'Energy Solutions',
    description: 'Smart energy management systems with real-time monitoring and optimization.',
    features: ['Smart monitoring', 'Usage optimization', 'Cost reduction'],
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Phone,
    title: 'Telecom Services',
    description: 'Enterprise telecommunications infrastructure with high-availability networks.',
    features: ['High availability', 'Unified communications', 'Scalable infrastructure'],
    color: 'var(--aurora-magenta)'
  },
  {
    icon: ChartBar,
    title: 'Web & Marketing',
    description: 'Full-stack web development and digital marketing solutions that drive engagement.',
    features: ['Full-stack development', 'SEO optimization', 'Analytics & insights'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: Calculator,
    title: 'Accounting & Taxes',
    description: 'Automated financial management and tax compliance solutions with real-time reporting.',
    features: ['Automated bookkeeping', 'Tax compliance', 'Real-time reporting'],
    color: 'var(--neon-cyan)'
  },
  {
    icon: Strategy,
    title: 'Business Strategy',
    description: 'Business strategy consulting and formation services to accelerate growth.',
    features: ['Strategic planning', 'Business formation', 'Growth acceleration'],
    color: 'var(--brand-300)'
  },
  {
    icon: ShoppingBag,
    title: 'E-commerce',
    description: 'Complete e-commerce platforms with inventory management and order fulfillment.',
    features: ['Storefront solutions', 'Inventory systems', 'Order processing'],
    color: 'var(--aurora-violet)'
  },
  {
    icon: Globe,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture with multi-region redundancy and optimization.',
    features: ['Multi-cloud strategy', 'Auto-scaling', 'Cost optimization'],
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Lock,
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions with threat monitoring and incident response.',
    features: ['Threat detection', 'Compliance', 'Incident response'],
    color: 'var(--aurora-magenta)'
  },
  {
    icon: CloudArrowUp,
    title: 'Data Analytics',
    description: 'Business intelligence and data analytics platforms for actionable insights.',
    features: ['Real-time analytics', 'Custom dashboards', 'Predictive modeling'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: Database,
    title: 'Data Management',
    description: 'Enterprise data architecture with backup, recovery, and migration services.',
    features: ['Database optimization', 'Data migration', 'Backup & recovery'],
    color: 'var(--neon-cyan)'
  },
  {
    icon: Headset,
    title: 'Managed Services',
    description: '24/7 IT operations management with proactive monitoring and maintenance.',
    features: ['24/7 monitoring', 'Proactive support', 'System optimization'],
    color: 'var(--brand-300)'
  }
]

export function Solutions() {
  return (
    <section id="solutions" className="relative py-24 px-4">
      <div className="relative z-10 container mx-auto max-w-[1600px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive Solutions</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Enterprise-grade technology services designed to transform your business operations 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-6 transition-all duration-300 flex flex-col"
              >
                <div 
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${solution.color}, ${solution.color}80)`,
                    boxShadow: `0 0 20px ${solution.color}40`
                  }}
                >
                  <Icon size={24} weight="duotone" style={{ color: 'white' }} />
                </div>
                
                <h3 
                  className="text-lg font-bold mb-3"
                  style={{ color: solution.color }}
                >
                  {solution.title}
                </h3>
                
                <p className="text-[var(--text-60)] text-sm mb-4 leading-relaxed flex-grow">
                  {solution.description}
                </p>
                
                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check 
                        size={16} 
                        weight="bold" 
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: solution.color }}
                      />
                      <span className="text-[var(--text-100)] text-xs">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className="w-full py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm bg-[var(--bg-800)] text-[var(--text-100)] hover:bg-[var(--brand)] hover:shadow-lg hover:shadow-[var(--brand)]30"
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
