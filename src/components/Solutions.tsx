import { useEffect, useRef, useState } from 'react'
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
    icon: Globe,
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
  }
]

export function Solutions() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('[data-card]')
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 100)
            })
            observer.disconnect()
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="solutions" ref={sectionRef} className="relative py-32 px-4">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Comprehensive Solutions</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Enterprise-grade technology services designed to transform your business operations 
            and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            const isVisible = visibleCards.includes(index)

            return (
              <div
                key={index}
                data-card
                className={`glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-5 scale-98'
                }`}
                style={{
                  boxShadow: isVisible 
                    ? `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${solution.color}33`
                    : undefined
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `linear-gradient(135deg, ${solution.color}20, ${solution.color}10)`,
                    boxShadow: `0 0 20px ${solution.color}40`
                  }}
                >
                  <Icon size={24} weight="duotone" style={{ color: solution.color }} />
                </div>

                <h3 className="text-xl font-semibold mb-3 text-white">
                  {solution.title}
                </h3>

                <p className="text-[var(--text-60)] leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 pt-6 border-t border-[var(--glass-border)]">
                  <button 
                    className="text-sm font-medium flex items-center gap-2 group"
                    style={{ color: solution.color }}
                  >
                    Learn More
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}