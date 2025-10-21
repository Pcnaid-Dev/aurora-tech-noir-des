import { useEffect, useState } from 'react'

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

export function TrustedPartners() {
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)

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
    <section className="relative py-20 px-4">
      <div className="relative z-10 container mx-auto max-w-7xl">
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
    </section>
  )
}
