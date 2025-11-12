import { TrustedMarquee } from './TrustedMarquee'

const partners = [
  { name: 'Stripe', logo: 'ST' },
  { name: 'AWS', logo: 'AW' },
  { name: 'Microsoft', logo: 'MS' },
  { name: 'Google Cloud', logo: 'GC' },
  { name: 'Salesforce', logo: 'SF' },
  { name: 'SAP', logo: 'SA' },
  { name: 'Adobe', logo: 'AD' 
  { name: 'Slack', logo: 'SL' 
  { name: 'Square', logo: 'SQ' }

  return (
      <div className="relative z
          <h3 className="text-2xl 
  { name: 'Square', logo: 'SQ' }
]

export function TrustedPartners() {
  return (
    <section className="relative py-20 px-4">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            <span className="gradient-text">Trusted by leading organizations</span>
          </h3>
          <p className="text-[var(--text-60)]">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>

        <TrustedMarquee partners={partners} />
      </div>
    </section>
  )
}
            <span className="gradient-text">Trusted by leading organizations</span>
          </h3>
          <p className="text-[var(--text-60)]">
            Collaborating with industry leaders to deliver excellence
          </p>
        </div>

        <TrustedMarquee partners={partners} />
      </div>
    </section>
  )
}
