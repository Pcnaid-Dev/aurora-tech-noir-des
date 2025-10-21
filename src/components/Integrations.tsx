import { CloudArrowUp } from '@phosphor-icons/react'

const platforms = [
  { name: 'Cloudflare', category: 'Infrastructure' },
  { name: 'Microsoft Azure', category: 'Cloud' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Google Cloud', category: 'Cloud' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Oracle', category: 'Enterprise' },
  { name: 'Matrix/Beeper', category: 'Communications' },
  { name: 'Clover', category: 'Payments' },
  { name: 'Shopify', category: 'E-commerce' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'QuickBooks', category: 'Accounting' },
  { name: 'Xero', category: 'Accounting' }
]

export function Integrations() {
  return (
    <section id="integrations" className="relative py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full mb-6">
            <CloudArrowUp size={16} weight="fill" className="text-[var(--aurora-cyan)]" />
            <span className="text-sm font-medium text-[var(--text-60)]">
              Seamless Integration
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Platforms & Integrations</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Connect with the tools and platforms you already use
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {platforms.map((platform, index) => (
            <div 
              key={index}
              className="glass-panel glass-panel-hover rounded-xl p-4 text-center group cursor-pointer"
            >
              <div className="font-semibold text-white mb-1 text-sm">
                {platform.name}
              </div>
              <div className="text-xs text-[var(--text-60)]">
                {platform.category}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--text-60)]">
            + Many more enterprise integrations available
          </p>
        </div>
      </div>
    </section>
  )
}
