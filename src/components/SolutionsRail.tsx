import { CreditCard, Lightning, Globe, ChartBar, Strategy, Cloud, ShoppingCart, Phone, Cpu, Database, Shield, Rocket } from '@phosphor-icons/react'

const solutions = [
  { name: 'Payments & POS', icon: CreditCard, description: 'Modern payment processing', href: '#' },
  { name: 'Energy Solutions', icon: Lightning, description: 'Smart energy management', href: '#' },
  { name: 'Telecom Services', icon: Phone, description: 'Connected communications', href: '#' },
  { name: 'Web & Marketing', icon: Globe, description: 'Digital presence solutions', href: '#' },
  { name: 'Accounting & Taxes', icon: ChartBar, description: 'Financial management', href: '#' },
  { name: 'Business Strategy', icon: Strategy, description: 'Strategic consulting', href: '#' },
  { name: 'Cloud Infrastructure', icon: Cloud, description: 'Scalable platforms', href: '#' },
  { name: 'E-Commerce', icon: ShoppingCart, description: 'Online retail solutions', href: '#' },
  { name: 'AI & Analytics', icon: Cpu, description: 'Data-driven insights', href: '#' },
  { name: 'Data Management', icon: Database, description: 'Enterprise data solutions', href: '#' },
  { name: 'Security & Compliance', icon: Shield, description: 'Protection & governance', href: '#' },
  { name: 'Digital Transformation', icon: Rocket, description: 'Modernization services', href: '#' },
]

export function SolutionsRail() {
  return (
    <section className="py-16 overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Solutions</h2>
        <p className="text-muted-foreground">Comprehensive technology services tailored to your needs</p>
      </div>
      <div className="relative">
        <div className="solutions-container group">
          <div className="solutions-rail flex gap-6 group-hover:[animation-play-state:paused]">
            {[...solutions, ...solutions].map((solution, i) => {
              const Icon = solution.icon
              return (
                <a
                  key={`${solution.name}-${i}`}
                  href={solution.href}
                  className="flex-shrink-0 w-[300px] glass-panel rounded-lg border border-border p-6 hover:border-accent transition-colors group/card"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--aurora-violet)] to-[var(--aurora-cyan)] flex items-center justify-center flex-shrink-0">
                      <Icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg mb-1 group-hover/card:text-accent transition-colors">{solution.name}</h3>
                      <p className="text-sm text-muted-foreground">{solution.description}</p>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
        <style>{`
          .solutions-container {
            display: flex;
            width: 100%;
          }
          .solutions-rail {
            animation: marquee 60s linear infinite;
            width: fit-content;
          }
        `}</style>
      </div>
    </section>
  )
}
