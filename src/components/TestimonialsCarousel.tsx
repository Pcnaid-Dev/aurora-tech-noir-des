import { useState, useEffect } from 'react'
import { Star } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

interface Testimonial {
  name: string
  role: string
  content: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO, RetailFlow',
    content: 'Pcnaid transformed our payment infrastructure. We saw a 40% reduction in transaction failures within the first month.',
    rating: 5,
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director of IT, Energy Solutions Inc',
    content: 'Their expertise in energy management systems is unmatched. The ROI was evident within the first quarter.',
    rating: 5,
  },
  {
    name: 'Jennifer Park',
    role: 'Founder, TechStart',
    content: 'As a startup, we needed a partner who could scale with us. Pcnaid delivered on every front.',
    rating: 5,
  },
  {
    name: 'David Thompson',
    role: 'VP Operations, SecureBank',
    content: 'Outstanding security and compliance support. They helped us achieve SOC 2 certification ahead of schedule.',
    rating: 5,
  },
  {
    name: 'Lisa Wang',
    role: 'CMO, E-Commerce Plus',
    content: 'Our online sales increased 65% after implementing their e-commerce solutions. Highly recommend.',
    rating: 5,
  },
  {
    name: 'James Miller',
    role: 'CFO, Financial Corp',
    content: 'The accounting integration saved us countless hours. Their team is responsive and knowledgeable.',
    rating: 5,
  },
]

export function TestimonialsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isPaused])

  const visibleTestimonials = (): Testimonial[] => {
    const items: Testimonial[] = []
    for (let i = 0; i < 4; i++) {
      items.push(testimonials[(activeIndex + i) % testimonials.length])
    }
    return items
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl">
            Real results from real partnerships
          </p>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleTestimonials().map((testimonial, i) => (
              <div
                key={`${testimonial.name}-${activeIndex}-${i}`}
                className="glass-panel rounded-lg border border-border p-6 flex flex-col gap-4 animate-[float-up_0.5s_ease-out]"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} weight="fill" className="text-[var(--aurora-peach)]" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground flex-1">{testimonial.content}</p>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  i === activeIndex 
                    ? 'bg-accent w-8' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
