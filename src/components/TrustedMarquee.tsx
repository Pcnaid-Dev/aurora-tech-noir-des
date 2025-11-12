import { useEffect, useRef, useState } from 'react'

interface Partner {
  name: string
  logo?: string
  logoUrl?: string
}

interface TrustedMarqueeProps {
  partners: Partner[]
  speed?: number
}

export function TrustedMarquee({ partners, speed = 40 }: TrustedMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const scrollerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const duplicatedPartners = [...partners, ...partners, ...partners]

  return (
    <div 
      className="relative overflow-hidden py-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Trusted organizations"
    >
      <div 
        className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, var(--background) 0%, transparent 100%)'
        }}
      />
      <div 
        className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, var(--background) 0%, transparent 100%)'
        }}
      />

      <div
        ref={scrollerRef}
        className="flex gap-6"
        style={{
          animation: prefersReducedMotion || isPaused 
            ? 'none' 
            : `marquee-scroll ${speed}s linear infinite`,
          willChange: 'transform'
        }}
      >
        {duplicatedPartners.map((partner, index) => (
          <PartnerChip 
            key={`${partner.name}-${index}`} 
            partner={partner}
          />
        ))}
      </div>
    </div>
  )
}

interface PartnerChipProps {
  partner: Partner
}

function PartnerChip({ partner }: PartnerChipProps) {
  return (
    <div
      className="glass-panel rounded-full px-6 py-3 flex-shrink-0 flex items-center gap-3 hover:border-[var(--neon-cyan)] transition-all duration-300"
      role="img"
      aria-label={partner.name}
    >
      {partner.logoUrl ? (
        <img 
          src={partner.logoUrl} 
          alt={`${partner.name} logo`}
          className="w-6 h-6 object-contain"
        />
      ) : partner.logo ? (
        <div 
          className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
          style={{
            background: 'linear-gradient(135deg, var(--aurora-violet), var(--aurora-cyan))'
          }}
          aria-hidden="true"
        >
          {partner.logo}
        </div>
      ) : null}
      <span className="text-sm font-medium text-[var(--text-100)] whitespace-nowrap">
        {partner.name}
      </span>
    </div>
  )
}
