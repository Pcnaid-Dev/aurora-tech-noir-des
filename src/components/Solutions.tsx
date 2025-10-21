import { useEffect, useState } from 'react'
import { 
  CreditCard, 
  Lightning, 
  Globe, 
  ChartBar, 
  Calculator, 
  Strategy 
} from '@phosphor-icons/react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from './ui/button'

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
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, 1000)

    return () => clearInterval(interval)
  }, [currentIndex, isPaused])

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === 0 ? solutions.length - 1 : prev - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev === solutions.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleSolutions = () => {
    const visible: Array<typeof solutions[0] & { index: number }> = []
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % solutions.length
      visible.push({ ...solutions[index], index })
    }
    return visible
  }

  return (
    <section 
      id="solutions" 
      className="relative py-32 px-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
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

        <div className="relative max-w-7xl mx-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 z-20 w-12 h-12 rounded-full glass-panel hover:glass-panel-hover"
            aria-label="Previous solution"
          >
            <CaretLeft size={24} weight="bold" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 z-20 w-12 h-12 rounded-full glass-panel hover:glass-panel-hover"
            aria-label="Next solution"
          >
            <CaretRight size={24} weight="bold" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {getVisibleSolutions().map((solution, displayIndex) => {
              const Icon = solution.icon
              return (
                <div 
                  key={solution.index}
                  className={`glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-500 ${
                    isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
                  }`}
                  style={{
                    boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 30px 0 ${solution.color}33`
                  }}
                >
                  <div className="text-center">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                      style={{
                        background: `linear-gradient(135deg, ${solution.color}20, ${solution.color}10)`,
                        boxShadow: `0 0 40px ${solution.color}60`
                      }}
                    >
                      <Icon size={32} weight="duotone" style={{ color: solution.color }} />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-white">
                      {solution.title}
                    </h3>

                    <p className="text-[var(--text-60)] leading-relaxed text-sm mb-6">
                      {solution.description}
                    </p>

                    <button 
                      className="text-xs font-medium flex items-center gap-2 group mx-auto"
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

          <div className="flex justify-center gap-2 mt-8">
            {solutions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentIndex(index)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-[var(--brand-300)]'
                    : 'w-2 bg-[var(--text-60)]'
                }`}
                aria-label={`Go to ${solutions[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}