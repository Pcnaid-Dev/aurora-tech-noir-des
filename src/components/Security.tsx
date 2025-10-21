import { ShieldCheck, Lock, FileText, Globe, ArrowRight } from '@phosphor-icons/react'
import { Button } from './ui/button'

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: 'Industry Compliance',
    items: ['PCI DSS Level 1', 'SOC 2 Type II', 'HIPAA Ready', 'ISO 27001'],
    color: 'var(--aurora-violet)'
  },
  {
    icon: Lock,
    title: 'Data Protection',
    items: ['AES-256 Encryption', 'End-to-End Security', 'Zero-Trust Architecture', 'Regular Penetration Testing'],
    color: 'var(--neon-cyan)'
  },
  {
    icon: FileText,
    title: 'Privacy & Governance',
    items: ['GDPR Compliant', 'CCPA Ready', 'Data Residency Options', 'Audit Logging'],
    color: 'var(--aurora-peach)'
  },
  {
    icon: Globe,
    title: 'Infrastructure Security',
    items: ['DDoS Protection', '24/7 Threat Monitoring', 'Automated Backups', 'Disaster Recovery'],
    color: 'var(--aurora-cyan)'
  }
]

export function Security() {
  return (
    <section id="security" className="relative py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Security, Compliance & Trust</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Enterprise-grade security and compliance built into every solution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className="glass-panel rounded-xl p-6"
                style={{
                  boxShadow: `inset 0 1px 0 0 var(--glass-inner), 0 0 20px 0 ${feature.color}20`
                }}
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color}30, ${feature.color}10)`,
                    boxShadow: `0 0 25px ${feature.color}40`
                  }}
                >
                  <Icon size={24} weight="duotone" style={{ color: feature.color }} />
                </div>

                <h3 className="text-lg font-bold mb-4 text-white">
                  {feature.title}
                </h3>

                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[var(--text-60)] flex items-start gap-2">
                      <span className="text-[var(--neon-cyan)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            className="glass-panel hover:glass-panel-hover border-[var(--glass-border)] group"
          >
            Visit Trust Center
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
