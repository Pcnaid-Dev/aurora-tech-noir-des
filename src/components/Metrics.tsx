import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter } from './AnimatedCounter'

const metrics = [
  {
    value: 500,
    suffix: '+',
    label: 'Enterprise Clients',
    description: 'Trusted by leading organizations'
  },
  {
    value: 99.9,
    suffix: '%',
    label: 'System Uptime',
    description: 'Industry-leading reliability'
  },
  {
    value: 50,
    suffix: 'M+',
    label: 'Transactions Processed',
    description: 'Secure and scalable infrastructure'
  },
  {
    value: 24,
    suffix: '/7',
    label: 'Expert Support',
    description: 'Always available when you need us'
  }
]

const partners = [
  { name: 'Stripe', logo: 'ST' },
  { name: 'AWS', logo: 'AW' },
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Google Cloud', logo: 'GC' },
  { name: 'Salesforce', logo: 'SF' },
  { name: 'Oracle', logo: 'OR' },
  { name: 'IBM', logo: 'IB' },
  { name: 'SAP', logo: 'SA' },
  { name: 'Cisco', logo: 'CI' },
  { name: 'Adobe', logo: 'AD' }
]

export function Metrics() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 1) % partners.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getVisiblePartners = () => {
    const visible: Array<typeof partners[0] & { key: string }> = []
    for (let i = 0; i < 5; i++) {
      const index = (currentPartnerIndex + i) % partners.length
      visible.push({ ...partners[index], key: `${partners[index].name}-${index}` })
    }
    return visible
  }

  return (
    <section id="metrics" ref={sectionRef} className="relative py-32 px-4">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Measurable Impact</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Real results that demonstrate our commitment to excellence and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="glass-panel rounded-2xl p-8 text-center relative overflow-hidden group"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle at center, var(--aurora-cyan)10, transparent 70%)`
                }}
              />

              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold mb-3">
                  {isVisible ? (
                    <AnimatedCounter
                      end={metric.value}
                      suffix={metric.suffix}
                      className="gradient-text"
                    />
                  ) : (
                    <span className="gradient-text">0{metric.suffix}</span>
                  )}
                </div>

                <div className="text-lg font-semibold text-white mb-2">
                  {metric.label}
                </div>

                <p className="text-sm text-[var(--text-60)]">
                  {metric.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--aurora-violet)] via-[var(--aurora-cyan)] to-[var(--aurora-magenta)] opacity-50" />
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              <span className="gradient-text">Trusted Partners</span>
            </h3>
            <p className="text-[var(--text-60)]">
              Collaborating with industry leaders to deliver excellence
            </p>
          </div>

          <div className="relative overflow-hidden py-8">
            <div className="flex justify-center items-center gap-8">
              {getVisiblePartners().map((partner, index) => (
                <div
                  key={partner.key}
                  className={`glass-panel rounded-xl p-6 flex-shrink-0 w-32 h-32 flex flex-col items-center justify-center transition-all duration-700 ${
                    index === 2 ? 'scale-110 shadow-[0_0_30px_var(--brand)]' : 'scale-100 opacity-70'
                  }`}
                >
                  <div 
                    className="w-16 h-16 rounded-lg flex items-center justify-center font-bold text-2xl text-white mb-2"
                    style={{
                      background: 'linear-gradient(135deg, var(--aurora-violet), var(--aurora-cyan))'
                    }}
                  >
                    {partner.logo}
                  </div>
                  <div className="text-xs text-center text-[var(--text-60)] font-medium">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 glass-panel rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Ready to Transform Your Business?
          </h3>
          <p className="text-lg text-[var(--text-60)] mb-8 max-w-2xl mx-auto">
            Join hundreds of enterprises that trust Pcnaid for their mission-critical technology solutions.
          </p>
          <button
            onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--brand)] via-[var(--aurora-violet)] to-[var(--aurora-magenta)] font-semibold hover:shadow-[0_0_40px_var(--brand)] transition-all duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}