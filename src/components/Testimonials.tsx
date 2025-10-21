import { useState } from 'react'
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react'
import { Button } from './ui/button'

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
  },
  {
    name: 'David Kim',
    role: 'CFO, Global Retail Group',
    content: 'The accounting automation saved us countless hours and reduced errors by 95%. The ROI was evident within the first quarter of implementation.',
    rating: 5,
    avatar: 'DK'
  },
  {
    name: 'Jennifer Martinez',
    role: 'CMO, TechStartup Inc',
    content: 'Their web and marketing solutions drove a 200% increase in our online engagement. The team truly understands modern digital strategies.',
    rating: 5,
    avatar: 'JM'
  },
  {
    name: 'Robert Johnson',
    role: 'COO, Manufacturing Pro',
    content: 'Working with Pcnaid on our business strategy was transformative. They helped us identify growth opportunities we hadn\'t even considered.',
    rating: 5,
    avatar: 'RJ'
  },
  {
    name: 'Lisa Anderson',
    role: 'Director of IT, HealthCare Plus',
    content: 'The reliability and security of their systems give us peace of mind. Patient data is safe, and our operations run smoothly 24/7.',
    rating: 5,
    avatar: 'LA'
  },
  {
    name: 'James Wilson',
    role: 'Founder, E-Commerce Hub',
    content: 'From payment processing to web development, Pcnaid delivered excellence across the board. Our conversion rates have never been higher.',
    rating: 5,
    avatar: 'JW'
  }
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const visibleTestimonials = 3
  const maxIndex = testimonials.length - visibleTestimonials

  const handlePrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const getVisibleTestimonials = () => {
    const visible: typeof testimonials = []
    for (let i = 0; i < visibleTestimonials; i++) {
      const index = (currentIndex + i) % testimonials.length
      visible.push(testimonials[index])
    }
    return visible
  }

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

        <div className="relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full glass-panel hover:glass-panel-hover"
            aria-label="Previous testimonials"
          >
            <CaretLeft size={24} weight="bold" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full glass-panel hover:glass-panel-hover"
            aria-label="Next testimonials"
          >
            <CaretRight size={24} weight="bold" />
          </Button>

          <div className="overflow-hidden">
            <div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(0)` }}
            >
              {getVisibleTestimonials().map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${currentIndex}-${index}`}
                  className={`glass-panel glass-panel-hover rounded-2xl p-8 transition-all duration-500 ${
                    isAnimating ? 'opacity-70 scale-95' : 'opacity-100 scale-100'
                  }`}
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

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(testimonials.length / visibleTestimonials) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true)
                    setCurrentIndex(index * visibleTestimonials > maxIndex ? maxIndex : index * visibleTestimonials)
                    setTimeout(() => setIsAnimating(false), 500)
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / visibleTestimonials) === index
                    ? 'w-8 bg-[var(--brand-300)]'
                    : 'w-2 bg-[var(--text-60)]'
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}