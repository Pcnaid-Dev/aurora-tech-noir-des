import { 
  ShoppingBag, 
  ShieldCheck, 
  Lightning, 
  Phone, 
  Bank, 
  Rocket,
  Hospital,
  GraduationCap,
  Building,
  Car,
  AirplaneTilt,
  Factory
} from '@phosphor-icons/react'

const industries = [
  { name: 'Retail', icon: ShoppingBag, description: 'Point of sale & inventory management' },
  { name: 'Government', icon: ShieldCheck, description: 'Secure compliance solutions' },
  { name: 'Energy', icon: Lightning, description: 'Utilities & renewable energy' },
  { name: 'Telecom', icon: Phone, description: 'Carrier & ISP platforms' },
  { name: 'Financial Services', icon: Bank, description: 'Banking & fintech solutions' },
  { name: 'Startups', icon: Rocket, description: 'Growth-stage businesses' },
  { name: 'Healthcare', icon: Hospital, description: 'Medical & patient systems' },
  { name: 'Education', icon: GraduationCap, description: 'Learning management platforms' },
  { name: 'Real Estate', icon: Building, description: 'Property & asset management' },
  { name: 'Automotive', icon: Car, description: 'Dealership & fleet systems' },
  { name: 'Aerospace', icon: AirplaneTilt, description: 'Aviation & logistics' },
  { name: 'Manufacturing', icon: Factory, description: 'Production & supply chain' },
]

export function IndustriesGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Industries We Serve</h2>
          <p className="text-muted-foreground max-w-2xl">
            Deep vertical expertise across diverse sectors, from retail to government to emerging tech startups
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 md:gap-8">
          {industries.map((industry, i) => {
            const Icon = industry.icon
            const isWide = i === 0 || i === 5 || i === 8
            return (
              <div
                key={industry.name}
                className={`glass-panel glass-panel-hover rounded-lg border border-border p-6 flex flex-col items-start gap-4 ${
                  isWide ? 'md:col-span-2' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--aurora-violet)] to-[var(--aurora-cyan)] flex items-center justify-center">
                  <Icon size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{industry.name}</h3>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
