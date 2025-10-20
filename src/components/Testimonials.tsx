import { Star } from '@phosphor-icons/react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, FinTech Corp',
    content: 'Pcnaid transformed our payment infrastructure with their cutting-edge solutions. The 99.9% uptime is not just a promise—it\'s a reality we experience every day.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Michael Rodriguez',
    role: 'CEO, Energy Solutions Inc',
    content: 'Their energy management platform helped us reduce costs by 30% while improving sustainability. The real-time analytics are game-changing.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Emily Thompson',
    role: 'VP Operations, TeleGlobal',
    content: 'Best decision we made was partnering with Pcnaid. Their telecom solutions scaled seamlessly with our growth, and support is always there when we need them.',
    rating: 5,
    avatar: 'ET'
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-32 px-4">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-lg text-[var(--text-60)] max-w-2xl mx-auto">
            Don't just take our word for it—hear from the enterprises that rely on our solutions every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-panel glass-panel-hover rounded-2xl p-8"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={20} weight="fill" className="text-[var(--aurora-peach)]" />
                ))}
              </div>

              <p className="text-[var(--text-60)] leading-relaxed mb-8 text-lg">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-[var(--glass-border)]">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white"
                  style={{
                    background: `linear-gradient(135deg, var(--aurora-violet), var(--aurora-magenta))`
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[var(--text-60)]">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}