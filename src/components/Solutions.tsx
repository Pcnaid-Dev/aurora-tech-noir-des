import { 
  CreditCard, 
  Lightning, 
  Globe, 
  ChartBar, 
  Calculator, 
  Strategy,
  Storefront,
  Cloud
} from '@phosphor-icons/react'

const solutions = [
  {
    icon: CreditCard,
    title: 'Payments & POS',
    description: 'Secure, scalable payment processing solutions with real-time transaction monitoring and multi-channel support.',
    color: 'var(--aurora-violet)'
  },
  {
    icon: Lightning,
    title: 'Energy Solutions',
    description: 'Smart energy management systems with real-time monitoring, optimization, and predictive analytics.',
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Globe,
    title: 'Telecom Services',
    description: 'Enterprise telecommunications infrastructure with high-availability networks and unified communications.',
    color: 'var(--aurora-magenta)'
  },
  {
    icon: ChartBar,
    title: 'Web & Marketing',
    description: 'Full-stack web development and digital marketing solutions that drive engagement and growth.',
    color: 'var(--aurora-peach)'
  },
  {
    icon: Calculator,
    title: 'Accounting & Taxes',
    description: 'Automated financial management and tax compliance solutions with real-time reporting and insights.',
    color: 'var(--neon-cyan)'
  },
  {
    icon: Strategy,
    title: 'Strategy & Formation',
    description: 'Business strategy consulting and formation services to accelerate growth and operational excellence.',
    color: 'var(--brand-300)'
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture and migration services for modern, resilient operations.',
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Storefront,
    title: 'E-Commerce Solutions',
    description: 'Complete online retail platforms with integrated payments, inventory, and analytics.',
    color: 'var(--aurora-violet)'
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div 
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-6 group cursor-pointer"
                style={{
                  boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${solution.color}20`
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${solution.color}25, ${solution.color}10)`,
                    boxShadow: `0 0 25px ${solution.color}50`
                  }}
                >
                  <Icon size={28} weight="duotone" style={{ color: solution.color }} />
                </div>

                <h3 className="text-lg font-bold mb-2 text-white">
                  {solution.title}
                </h3>

                <p className="text-sm text-[var(--text-60)] leading-relaxed mb-4">
                  {solution.description}
                </p>

                <button 
                  className="text-xs font-medium flex items-center gap-2 group/btn"
                  style={{ color: solution.color }}
                >
                  Learn More
                  <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}