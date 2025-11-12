import { MagnifyingGlass, Blueprint, Rocket, Headset } from '@phosphor-icons/react'

const steps = [
  {
    icon: MagnifyingGlass,
    number: '01',
    title: 'Assess',
    description: 'Deep-dive discovery to understand your challenges, infrastructure, and goals',
    color: 'var(--aurora-violet)'
  },
  {
    icon: Blueprint,
    number: '02',
    title: 'Architect',
    description: 'Design scalable, secure solutions tailored to your business requirements',
    color: 'var(--aurora-cyan)'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Implement',
    description: 'Rapid deployment with minimal disruption and comprehensive testing',
    color: 'var(--aurora-peach)'
  },
  {
    icon: Headset,
    number: '04',
    title: 'Operate',
    description: 'Ongoing managed services with 24/7 monitoring and continuous optimization',
    color: 'var(--neon-cyan)'
  }
]

export function Process() {
  return (
    <section id="process" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">How We Work</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            A proven methodology that delivers results on time and within budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div 
                  className="glass-panel glass-panel-hover rounded-xl p-6 h-full"
                  style={{
                    boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${step.color}20`
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}30, ${step.color}10)`,
                        boxShadow: `0 0 25px ${step.color}40`
                      }}
                    >
                      <Icon size={24} weight="duotone" style={{ color: step.color }} />
                    </div>
                    <div 
                      className="text-4xl font-bold opacity-80"
                      style={{ color: step.color }}
                    >
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[var(--text-60)] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div 
                      className="w-6 h-0.5"
                      style={{
                        background: `linear-gradient(to right, ${step.color}, ${steps[index + 1].color})`
                      }}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
