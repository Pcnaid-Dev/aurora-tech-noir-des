import { useState, useEffect } from 'react'
import { 
  CreditCard, 
  Lightning, 
  Phone,
  ChartBar,
  Calculator,
  Strategy,
  Storefront,
  Cloud,
  CaretLeft,
  CaretRight,
  Pause,
  Play
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
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud architecture and migration services for modern, resilient operations.',
    features: ['Cloud migration', 'Scalable architecture', 'High availability', 'Cost optimization'],
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Storefront,
    title: 'E-commerce Solutions',
    description: 'Complete online retail platforms with integrated payments, inventory, and analytics.',
    features: ['Payment integration', 'Inventory management', 'Analytics dashboard', 'Mobile-first design'],
    color: 'var(--aurora-violet)'
  }
]

export function Solutions() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % solutions.length)
  }

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + solutions.length) % solutions.length)
  }

  const activeSolution = solutions[activeIndex]

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

        <div className="max-w-5xl mx-auto mb-12">
          <div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-4 right-4 flex gap-2 z-20">
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="w-10 h-10 rounded-lg flex items-center justify-center glass-panel hover:bg-white/10 transition-all"
                aria-label={isAutoPlay ? 'Pause autoplay' : 'Play autoplay'}
              >
                {isAutoPlay ? (
                  <Pause size={18} weight="fill" className="text-white" />
                ) : (
                  <Play size={18} weight="fill" className="text-white" />
                )}
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${activeSolution.color}30, ${activeSolution.color}10)`,
                    boxShadow: `0 0 40px ${activeSolution.color}60`
                  }}
                >
                  <activeSolution.icon size={40} weight="duotone" style={{ color: activeSolution.color }} />
                </div>

                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">
                    {activeSolution.title}
                  </h3>
                  <p className="text-[var(--text-60)] leading-relaxed">
                    {activeSolution.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {activeSolution.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div 
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: activeSolution.color }}
                      />
                      <span className="text-white/80">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="px-6 py-3 rounded-lg font-medium flex items-center gap-2 group/btn transition-all hover:gap-3"
                  style={{ 
                    background: `linear-gradient(135deg, ${activeSolution.color}40, ${activeSolution.color}20)`,
                    color: activeSolution.color,
                    border: `1px solid ${activeSolution.color}30`
                  }}
                >
                  Explore Solution
                  <span className="transform transition-transform">→</span>
                </button>
              </div>

              <div className="hidden md:block relative h-80">
                <div 
                  className="absolute inset-0 rounded-2xl opacity-20"
                  style={{
                    background: `radial-gradient(circle at center, ${activeSolution.color}, transparent 70%)`
                  }}
                />
              </div>
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <button
                onClick={goToPrev}
                className="w-12 h-12 rounded-full flex items-center justify-center glass-panel hover:bg-white/10 transition-all"
                aria-label="Previous solution"
              >
                <CaretLeft size={24} weight="bold" className="text-white" />
              </button>
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <button
                onClick={goToNext}
                className="w-12 h-12 rounded-full flex items-center justify-center glass-panel hover:bg-white/10 transition-all"
                aria-label="Next solution"
              >
                <CaretRight size={24} weight="bold" className="text-white" />
              </button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="relative h-2 rounded-full transition-all overflow-hidden"
                style={{ 
                  width: index === activeIndex ? '40px' : '20px',
                  backgroundColor: index === activeIndex ? activeSolution.color : 'rgba(255, 255, 255, 0.2)'
                }}
                aria-label={`Go to solution ${index + 1}`}
              >
                {index === activeIndex && isAutoPlay && (
                  <div 
                    className="absolute inset-0 origin-left animate-[progress_5s_linear]"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`glass-panel rounded-xl p-4 transition-all ${
                  index === activeIndex 
                    ? 'ring-2' 
                    : 'hover:bg-white/5'
                }`}
                style={{
                  ringColor: index === activeIndex ? solution.color : 'transparent',
                  boxShadow: index === activeIndex 
                    ? `inset 0 1px 0 0 var(--glass-inner), 0 0 30px 0 ${solution.color}40`
                    : `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${solution.color}20`
                }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-2 mx-auto"
                  style={{
                    background: `linear-gradient(135deg, ${solution.color}25, ${solution.color}10)`,
                    boxShadow: `0 0 20px ${solution.color}40`
                  }}
                >
                  <Icon size={20} weight="duotone" style={{ color: solution.color }} />
                </div>

                <h3 className="text-sm font-bold text-white text-center">
                  {solution.title}
                </h3>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
