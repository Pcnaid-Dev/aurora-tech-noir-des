import { useState, useEffect, useCallback } from 'react'
import { Star, CaretLeft, CaretRight } from '@phosphor-icons/react'
import useEmblaCarousel from 'embla-carousel-react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'

interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'CTO',
    company: 'RetailFlow',
    content: 'Pcnaid transformed our payment infrastructure. We saw a 40% reduction in transaction failures within the first month.',
    rating: 5,
    avatar: 'SC',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Director of IT',
    company: 'Energy Solutions Inc',
    content: 'Their expertise in energy management systems is unmatched. The ROI was evident within the first quarter.',
    rating: 5,
    avatar: 'MR',
  },
  {
    name: 'Jennifer Park',
    role: 'Founder',
    company: 'TechStart',
    content: 'As a startup, we needed a partner who could scale with us. Pcnaid delivered on every front.',
    rating: 5,
    avatar: 'JP',
  },
  {
    name: 'David Thompson',
    role: 'VP Operations',
    company: 'SecureBank',
    content: 'Outstanding security and compliance support. They helped us achieve SOC 2 certification ahead of schedule.',
    rating: 5,
    avatar: 'DT',
  },
  {
    name: 'Lisa Wang',
    role: 'CMO',
    company: 'E-Commerce Plus',
    content: 'Our online sales increased 65% after implementing their e-commerce solutions. Highly recommend.',
    rating: 5,
    avatar: 'LW',
  },
  {
    name: 'James Miller',
    role: 'CFO',
    company: 'Financial Corp',
    content: 'The accounting integration saved us countless hours. Their team is responsive and knowledgeable.',
    rating: 5,
    avatar: 'JM',
  },
  {
    name: 'Emily Brooks',
    role: 'CEO',
    company: 'HealthTech Innovations',
    content: 'Working with Pcnaid has been transformative for our operations. Their solutions are innovative and reliable.',
    rating: 5,
    avatar: 'EB',
  },
  {
    name: 'Robert Kim',
    role: 'Operations Director',
    company: 'Logistics Pro',
    content: 'The implementation was seamless and the support team is always available. Couldn\'t ask for a better partner.',
    rating: 5,
    avatar: 'RK',
  },
]

export function TestimonialsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: true,
    skipSnaps: false,
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 4 },
    },
  })
  
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    setScrollSnaps(emblaApi.scrollSnapList())
    onSelect()
    
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        scrollPrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        scrollNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [scrollPrev, scrollNext])

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl">
            Real results from real partnerships
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div 
              className="flex gap-6"
              role="region"
              aria-live="polite"
              aria-label="Customer testimonials carousel"
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)]"
                >
                  <div className="glass-panel rounded-lg border border-border p-6 flex flex-col gap-4 h-full">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} size={16} weight="fill" className="text-[var(--aurora-peach)]" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground flex-1">{testimonial.content}</p>
                    <div className="border-t border-border pt-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-xs shrink-0"
                          style={{
                            background: `linear-gradient(135deg, var(--aurora-violet), var(--aurora-magenta))`
                          }}
                        >
                          {testimonial.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="font-semibold text-sm">{testimonial.name}</div>
                          <div className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              className="w-10 h-10 rounded-full glass-panel transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_0_var(--neon-cyan)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Previous testimonials"
              style={{
                background: 'var(--glass-base)',
                backdropFilter: 'blur(14px)',
                border: '1px solid var(--glass-border)',
              }}
            >
              <CaretLeft size={20} weight="bold" className="text-foreground" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={scrollNext}
              disabled={!canScrollNext}
              className="w-10 h-10 rounded-full glass-panel transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_0_var(--neon-cyan)] disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Next testimonials"
              style={{
                background: 'var(--glass-base)',
                backdropFilter: 'blur(14px)',
                border: '1px solid var(--glass-border)',
              }}
            >
              <CaretRight size={20} weight="bold" className="text-foreground" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  'h-2 rounded-full transition-all duration-300',
                  index === selectedIndex
                    ? 'bg-accent w-8'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2'
                )}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === selectedIndex ? 'true' : 'false'}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
