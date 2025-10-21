import { 
  ShoppingCart, 
  ShieldCheck, 
  Lightning, 
  Phone, 
  Bank, 
  Rocket 
} from '@phosphor-icons/react'

const industries = [
  {
    icon: ShoppingCart,
    title: 'Retail',
    description: 'Point-of-sale, inventory, and omnichannel commerce solutions',
    color: 'var(--aurora-violet)'
  },
  {
    icon: ShieldCheck,
    title: 'Government & Defense',
    description: 'Secure, compliant systems for public sector operations',
    color: 'var(--brand-300)'
  },
  {
    icon: Lightning,
    title: 'Energy',
    description: 'Smart grid management and energy optimization platforms',
    color: 'var(--aurora-peach)'
  },
  {
    icon: Phone,
    title: 'Telecom',
    description: 'Carrier-grade infrastructure and unified communications',
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Bank,
    title: 'Financial Services',
    description: 'Secure payment processing and financial management systems',
    color: 'var(--aurora-magenta)'
  },
  {
    icon: Rocket,
    title: 'SMB & Startups',
    description: 'Scalable technology foundations for growing businesses',
    color: 'var(--neon-cyan)'
  }
]

export function Industries() {
  return (
    <section id="industries" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Industries We Serve</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Deep expertise across verticals with tailored solutions for your industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon
            return (
              <div 
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-6 group cursor-pointer"
                style={{
                  boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${industry.color}20`
                }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${industry.color}25, ${industry.color}10)`,
                    boxShadow: `0 0 25px ${industry.color}50`
                  }}
                >
                  <Icon size={28} weight="duotone" style={{ color: industry.color }} />
                </div>

                <h3 className="text-xl font-bold mb-2 text-white">
                  {industry.title}
                </h3>

                <p className="text-sm text-[var(--text-60)] leading-relaxed">
                  {industry.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
