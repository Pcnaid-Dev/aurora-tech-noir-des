import { 
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
  Briefcase,
  Cpu,
  Wrench,
  ShieldCheck,
  Robot,
  Lightning,
  Check
} from '@phosphor-icons/react'
import { Button } from './ui/button'
import { Section } from './Section'

const allSolutions = [
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
    description: 'Enterprise-grade security solutions with threat detection and compliance management.',
    features: ['Threat detection', 'Compliance management', 'Security audits'],
    color: 'var(--aurora-magenta)'
  },
  {
    icon: CloudArrowUp,
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions for data-driven decisions.',
    features: ['Real-time insights', 'Predictive analytics', 'Custom dashboards'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Scalable database solutions with performance optimization and disaster recovery.',
    features: ['Performance tuning', 'Backup solutions', 'Migration services'],
    color: 'var(--neon-cyan)'
  },
  {
    icon: Headset,
    title: 'IT Support',
    description: 'Comprehensive IT support services with 24/7 monitoring and rapid response.',
    features: ['24/7 support', 'Remote assistance', 'On-site services'],
    color: 'var(--brand-300)'
  },
  {
    icon: Briefcase,
    title: 'Managed Services',
    description: 'Complete IT management services including monitoring, maintenance, and optimization.',
    features: ['24/7 monitoring', 'Proactive maintenance', 'Cost optimization'],
    color: 'var(--aurora-violet)'
  },
  {
    icon: Cpu,
    title: 'IoT Solutions',
    description: 'Connected device solutions with real-time monitoring and automation.',
    features: ['Device management', 'Real-time data', 'Automation'],
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Wrench,
    title: 'DevOps Services',
    description: 'Rapid deployment and continuous integration solutions for modern development.',
    features: ['Pipeline automation', 'Container orchestration', 'CI/CD implementation'],
    color: 'var(--aurora-magenta)'
  },
  {
    icon: ShieldCheck,
    title: 'Disaster Recovery',
    description: 'Business continuity solutions with automated backup and rapid recovery.',
    features: ['Backup automation', 'Quick recovery', 'Business continuity'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: Robot,
    title: 'AI & Automation',
    description: 'Intelligent automation solutions powered by machine learning and AI.',
    features: ['ML model development', 'Process automation', 'Intelligent workflows'],
    color: 'var(--neon-cyan)'
  }
]

const featuredSolutions = allSolutions.slice(0, 6)

export function Solutions() {
  return (
    <Section id="solutions">
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          <span className="gradient-text inline-block">Enterprise Solutions</span>
        </h2>
        <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
          Enterprise-grade technology solutions tailored to your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {featuredSolutions.map((solution, index) => {
          const Icon = solution.icon
          return (
            <div
              key={index}
              className="glass-panel glass-panel-hover p-6 rounded-2xl group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ 
                    backgroundColor: `${solution.color}20`,
                    color: solution.color 
                  }}
                >
                  <Icon size={24} weight="duotone" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-[var(--text-60)] mb-4">
                    {solution.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2 mb-4">
                {solution.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-[var(--text-60)]">
                    <Check 
                      size={16} 
                      weight="bold" 
                      className="flex-shrink-0 mt-0.5"
                      style={{ color: solution.color }}
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant="ghost" 
                className="w-full group-hover:bg-white/5"
                onClick={() => {
                  window.location.hash = '#contact'
                }}
              >
                Learn More
              </Button>
            </div>
          )
        })}
      </div>

      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          All Services & Solutions
        </h2>
        <p className="text-[var(--text-60)] mb-8">
          Explore our complete range of technology solutions and services
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allSolutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="glass-panel p-4 rounded-xl hover:border-[var(--neon-cyan)] transition-all cursor-pointer"
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                  style={{ 
                    backgroundColor: `${solution.color}20`,
                    color: solution.color 
                  }}
                >
                  <Icon size={20} weight="duotone" />
                </div>
                <h4 className="text-sm font-semibold text-center">
                  {solution.title}
                </h4>
              </div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
