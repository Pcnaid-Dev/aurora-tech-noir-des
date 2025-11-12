const partners = [
  'Acme Corp',
  'TechFlow',
  'DataSync',
  'CloudVault',
  'SecureNet',
  'PayStream',
  'EnergyPlus',
  'TeleLink',
  'RetailPro',
  'FinanceHub',
  'GovSecure',
  'StartupLab',
]

export function TrustedMarquee() {
  return (
    <section className="py-16 border-y border-border/50 overflow-hidden">
      <div className="mb-8">
        <p className="text-center text-muted-foreground text-sm tracking-wide uppercase">
          Trusted by Leading Organizations
        </p>
      </div>
      <div className="relative">
        <div className="marquee-container group">
          <div className="marquee-track flex gap-12 group-hover:[animation-play-state:paused]">
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="flex-shrink-0 flex items-center justify-center px-8 py-4 glass-panel rounded-lg border border-border min-w-[200px]"
              >
                <span className="text-sm font-medium whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          .marquee-container {
            display: flex;
            width: 100%;
          }
          .marquee-track {
            animation: marquee 40s linear infinite;
            width: fit-content;
          }
        `}</style>
      </div>
    </section>
  )
}
