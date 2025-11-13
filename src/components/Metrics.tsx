import { useEffect, useRef, useState } from 'react'
import { AnimatedCounter } from './AnimatedCounter'
import { Section } from './Section'

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

export function Metrics() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <Section id="metrics" contentAlign="center">
      <div ref={sectionRef}>
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
    </Section>
  )
}