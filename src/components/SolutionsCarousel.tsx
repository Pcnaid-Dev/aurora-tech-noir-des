import { useState, useEffect, useRef, useCallback } from 'react'
import { CaretLeft, CaretRight, Check } from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

interface Solution {
  icon: Icon
  title: string
  description: string
  features: string[]
  color: string
}

interface SolutionsCarouselProps {
  solutions: Solution[]
}

export function SolutionsCarousel({ solutions }: SolutionsCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const autoAdvanceRef = useRef<NodeJS.Timeout | null>(null)

  const triplicatedSolutions = [...solutions, ...solutions, ...solutions]

  const cardWidth = 320
  const gapWidth = 20

  const getCardsPerView = () => {
    if (typeof window === 'undefined') return 4.5
    const width = window.innerWidth
    if (width < 768) return 1.2
    if (width < 1024) return 2.5
    return 4.5
  }

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView())

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView())
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const scrollToIndex = useCallback((index: number, smooth = true) => {
    if (!carouselRef.current) return
    const scrollPosition = index * (cardWidth + gapWidth)
    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: smooth ? 'smooth' : 'auto'
    })
  }, [])

  const handleNext = useCallback(() => {
    const nextIndex = currentIndex + 1
    setCurrentIndex(nextIndex)
    scrollToIndex(nextIndex)
  }, [currentIndex, scrollToIndex])

  const handlePrev = useCallback(() => {
    const prevIndex = currentIndex - 1
    setCurrentIndex(prevIndex)
    scrollToIndex(prevIndex)
  }, [currentIndex, scrollToIndex])

  useEffect(() => {
    if (!carouselRef.current) return

    const handleScroll = () => {
      if (!carouselRef.current || isDragging) return
      
      const scrollPos = carouselRef.current.scrollLeft
      const newIndex = Math.round(scrollPos / (cardWidth + gapWidth))
      
      if (newIndex >= solutions.length * 2) {
        setCurrentIndex(newIndex - solutions.length)
        scrollToIndex(newIndex - solutions.length, false)
      } else if (newIndex < solutions.length) {
        setCurrentIndex(newIndex + solutions.length)
        scrollToIndex(newIndex + solutions.length, false)
      } else {
        setCurrentIndex(newIndex)
      }
    }

    const carousel = carouselRef.current
    carousel.addEventListener('scroll', handleScroll)
    return () => carousel.removeEventListener('scroll', handleScroll)
  }, [solutions.length, scrollToIndex, isDragging])

  useEffect(() => {
    scrollToIndex(solutions.length, false)
    setCurrentIndex(solutions.length)
  }, [solutions.length, scrollToIndex])

  useEffect(() => {
    if (isHovered || isDragging) {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current)
        autoAdvanceRef.current = null
      }
      return
    }

    autoAdvanceRef.current = setInterval(() => {
      handleNext()
    }, 4000)

    return () => {
      if (autoAdvanceRef.current) {
        clearInterval(autoAdvanceRef.current)
      }
    }
  }, [isHovered, isDragging, handleNext])

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return
    e.preventDefault()
    const x = e.pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft)
    setScrollLeft(carouselRef.current.scrollLeft)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !carouselRef.current) return
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft
    const walk = (x - startX) * 2
    carouselRef.current.scrollLeft = scrollLeft - walk
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const normalizedIndex = ((currentIndex % solutions.length) + solutions.length) % solutions.length

  return (
    <div className="relative">
      <div
        className="overflow-x-hidden select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false)
          handleMouseLeave()
        }}
      >
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {triplicatedSolutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="glass-panel glass-panel-hover rounded-xl p-6 transition-all duration-300 flex flex-col flex-shrink-0"
                style={{
                  width: `${cardWidth}px`,
                  scrollSnapAlign: 'start'
                }}
              >
                <div
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${solution.color}, ${solution.color}80)`,
                    boxShadow: `0 0 20px ${solution.color}40`
                  }}
                >
                  <Icon size={24} weight="duotone" style={{ color: 'white' }} />
                </div>

                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: solution.color }}
                >
                  {solution.title}
                </h3>

                <p className="text-[var(--text-60)] text-sm mb-4 leading-relaxed flex-grow">
                  {solution.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check
                        size={16}
                        weight="bold"
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: solution.color }}
                      />
                      <span className="text-[var(--text-100)] text-xs">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full py-2.5 rounded-lg font-semibold transition-all duration-300 text-sm bg-[var(--bg-800)] text-[var(--text-100)] hover:bg-[var(--brand)] hover:shadow-lg hover:shadow-[var(--brand)]30"
                  onClick={() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Learn More
                </button>
              </div>
            )
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full glass-panel glass-panel-hover flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <CaretLeft size={20} weight="bold" className="text-[var(--text-100)]" />
        </button>

        <div className="flex gap-2">
          {solutions.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(solutions.length + index)
                scrollToIndex(solutions.length + index)
              }}
              className="transition-all duration-300"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === normalizedIndex
                    ? 'w-8 bg-[var(--neon-cyan)]'
                    : 'w-2 bg-[var(--text-60)] opacity-40 hover:opacity-60'
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full glass-panel glass-panel-hover flex items-center justify-center transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <CaretRight size={20} weight="bold" className="text-[var(--text-100)]" />
        </button>
      </div>
    </div>
  )
}
