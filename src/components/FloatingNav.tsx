import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { List, X } from '@phosphor-icons/react'
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
  const [isOpen, setIsOpen] = useState(false)

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
      setIsOpen(false)
    }
  }

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className="container mx-auto px-4">
        <div className={cn(
          'glass-panel rounded-2xl px-4 lg:px-6 py-3 mx-auto',
          'flex items-center justify-between gap-4'
        )}>
          <div className="flex items-center gap-2 shrink-0">
            <img src={logoIcon} alt="Pcnaid Logo" className="w-8 h-8 object-contain" />
            <span className="font-bold text-lg">Pcnaid</span>
          </div>

          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  'px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap',
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

          <div className="flex items-center gap-2 shrink-0">
            <Button
              onClick={() => scrollToSection('final-cta')}
              size="sm"
              className="hidden sm:flex bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] hover:shadow-[0_0_20px_var(--brand)] transition-all duration-300"
            >
              Schedule a Consultation
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="xl:hidden"
                >
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] glass-panel border-l border-[var(--glass-border)]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={cn(
                          'px-4 py-3 rounded-lg text-left font-medium transition-all duration-200',
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
                    className="w-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] hover:shadow-[0_0_20px_var(--brand)] transition-all duration-300"
                  >
                    Schedule a Consultation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}