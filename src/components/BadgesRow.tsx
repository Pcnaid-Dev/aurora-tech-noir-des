import { ShieldCheck, Certificate, Lock, CheckCircle } from '@phosphor-icons/react'

const badges = [
  { name: 'PCI DSS Compliant', icon: Lock },
  { name: 'SOC 2 Type II', icon: ShieldCheck },
  { name: 'ISO 27001 Certified', icon: Certificate },
  { name: 'Gov-Ready', icon: CheckCircle },
]

export function BadgesRow() {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-muted-foreground text-sm mb-8 tracking-wide uppercase">
          Certified & Compliant
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon
            return (
              <div
                key={badge.name}
                className="flex items-center gap-3 glass-panel rounded-lg border border-border px-6 py-3"
              >
                <Icon size={24} className="text-accent" />
                <span className="text-sm font-medium">{badge.name}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
