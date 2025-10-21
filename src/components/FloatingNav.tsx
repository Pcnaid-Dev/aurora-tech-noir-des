import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import logoIcon from '@/assets/images/base_icon_transparent_background_(1).png'

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'industries', label: 'Industries' },
  { id: 'metrics', label: 'Impact' },
  { id: 'case-study', label: 'Case Studies' },
  { id: 'testimonials', label: 'Resources' },
  { id: 'faq', label: 'Company' },
  { id: 'final-cta', label: 'Contact' },
]

export function FloatingNav() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn(
          'glass-panel rounded-2xl px-6 py-3 max-w-4xl mx-auto',
          'flex items-center justify-between'
        )}>
          <div className="flex items-center gap-2">
            <img src={logoIcon} alt="Pcnaid Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg">Pcnaid</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                  'hover:bg-white/5',
                  activeSection === item.id
                    ? 'text-[var(--brand-300)] bg-[var(--brand)]/20 shadow-[0_0_15px_var(--brand)]'
                    : 'text-[var(--text-60)] hover:text-white'
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection('final-cta')}
            size="sm"
            className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] hover:shadow-[0_0_20px_var(--brand)] transition-all duration-300"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </nav>
  )
}