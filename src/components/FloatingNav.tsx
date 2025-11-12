import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { List, CaretDown, CreditCard, Lightning, Phone, Globe, Calculator, ChartLine, Cloud, ShoppingCart, Cube } from '@phosphor-icons/react'
import logoIcon from '@/assets/images/base_icon_transparent_background_(1).png'

const solutionsCategories = [
  {
    title: 'Payment Solutions',
    items: [
      { name: 'Point of Sale Systems', icon: CreditCard, href: '#solutions' },
      { name: 'Payment Processing', icon: CreditCard, href: '#solutions' },
      { name: 'Mobile Payments', icon: CreditCard, href: '#solutions' },
    ]
  },
  {
    title: 'Infrastructure',
    items: [
      { name: 'Energy Management', icon: Lightning, href: '#solutions' },
      { name: 'Telecom Services', icon: Phone, href: '#solutions' },
      { name: 'Cloud Platforms', icon: Cloud, href: '#solutions' },
    ]
  },
  {
    title: 'Business Services',
    items: [
      { name: 'Web & Marketing', icon: Globe, href: '#solutions' },
      { name: 'Accounting & Taxes', icon: Calculator, href: '#solutions' },
      { name: 'Business Strategy', icon: ChartLine, href: '#solutions' },
      { name: 'E-Commerce', icon: ShoppingCart, href: '#solutions' },
    ]
  }
]

export function FloatingNav() {
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      })
      setIsMobileOpen(false)
      setIsSolutionsOpen(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-[var(--glass-border)]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-18">
            <div className="flex items-center gap-2 shrink-0">
              <img src={logoIcon} alt="Pcnaid Logo" className="w-9 h-9 object-contain" />
              <span className="font-bold text-xl">Pcnaid</span>
            </div>

            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              <div 
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button 
                  className="px-4 py-2 text-sm font-medium flex items-center gap-1 hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-white/5"
                >
                  Solutions
                  <CaretDown 
                    size={14} 
                    weight="bold"
                    className={cn('transition-transform duration-200', isSolutionsOpen && 'rotate-180')} 
                  />
                </button>

                {isSolutionsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[900px]">
                    <div className="glass-panel border border-[var(--glass-border)] rounded-xl p-6 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                      <div className="grid grid-cols-[1fr_1fr_1fr_280px] gap-6">
                        {solutionsCategories.map((category) => (
                          <div key={category.title}>
                            <h3 className="text-xs font-semibold text-[var(--text-60)] uppercase tracking-wider mb-3">
                              {category.title}
                            </h3>
                            <div className="flex flex-col gap-1">
                              {category.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  onClick={(e) => {
                                    e.preventDefault()
                                    scrollToSection('solutions')
                                  }}
                                  className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-white/5 transition-all duration-200"
                                >
                                  <item.icon 
                                    size={18} 
                                    className="text-[var(--brand-300)] shrink-0 mt-0.5 group-hover:text-[var(--accent)] transition-colors" 
                                  />
                                  <span className="text-sm font-medium group-hover:text-white transition-colors">
                                    {item.name}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                        
                        <div className="glass-panel rounded-lg p-4 flex flex-col items-center justify-center text-center bg-gradient-to-br from-[var(--brand)]/20 to-transparent border border-[var(--brand)]/30">
                          <Cube size={40} weight="duotone" className="text-[var(--aurora-cyan)] mb-3" />
                          <h4 className="font-semibold text-sm mb-2">Custom Solutions</h4>
                          <p className="text-xs text-[var(--text-60)] mb-3">
                            Need something unique? We build tailored solutions.
                          </p>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="text-xs h-8"
                            onClick={() => scrollToSection('final-cta')}
                          >
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <button 
                onClick={() => scrollToSection('industries')}
                className="px-4 py-2 text-sm font-medium hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-white/5"
              >
                Industries
              </button>
              <button 
                onClick={() => scrollToSection('integrations')}
                className="px-4 py-2 text-sm font-medium hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-white/5"
              >
                Platforms
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="px-4 py-2 text-sm font-medium hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-white/5"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="px-4 py-2 text-sm font-medium hover:text-[var(--accent)] transition-colors rounded-lg hover:bg-white/5"
              >
                Resources
              </button>
            </div>

            <div className="hidden lg:flex items-center gap-2 shrink-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection('final-cta')}
                className="text-sm"
              >
                Contact
              </Button>
              <Button
                size="sm"
                onClick={() => scrollToSection('final-cta')}
                className="bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] hover:shadow-[0_0_20px_var(--brand)] transition-all duration-300 text-sm"
              >
                Get Started
              </Button>
            </div>

            <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                >
                  <List className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] glass-panel border-l border-[var(--glass-border)] overflow-y-auto">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex flex-col gap-1">
                    <div className="text-xs font-semibold text-[var(--text-60)] uppercase tracking-wider mb-2 px-2">
                      Solutions
                    </div>
                    {solutionsCategories.map((category) => (
                      <div key={category.title} className="mb-4">
                        <div className="text-xs font-medium text-[var(--brand-300)] mb-2 px-2">
                          {category.title}
                        </div>
                        {category.items.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              scrollToSection('solutions')
                            }}
                            className="flex items-center gap-2 px-2 py-2 text-sm rounded-lg hover:bg-white/5 transition-colors"
                          >
                            <item.icon size={16} className="text-[var(--text-60)]" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1 pt-4 border-t border-[var(--glass-border)]">
                    <button 
                      onClick={() => scrollToSection('industries')}
                      className="px-2 py-2 text-sm text-left rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Industries
                    </button>
                    <button 
                      onClick={() => scrollToSection('integrations')}
                      className="px-2 py-2 text-sm text-left rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Platforms
                    </button>
                    <button 
                      onClick={() => scrollToSection('pricing')}
                      className="px-2 py-2 text-sm text-left rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Pricing
                    </button>
                    <button 
                      onClick={() => scrollToSection('testimonials')}
                      className="px-2 py-2 text-sm text-left rounded-lg hover:bg-white/5 transition-colors"
                    >
                      Resources
                    </button>
                  </div>

                  <div className="flex flex-col gap-2 pt-4 border-t border-[var(--glass-border)]">
                    <Button
                      variant="outline"
                      onClick={() => scrollToSection('final-cta')}
                      className="w-full"
                    >
                      Contact
                    </Button>
                    <Button
                      onClick={() => scrollToSection('final-cta')}
                      className="w-full bg-gradient-to-r from-[var(--brand)] to-[var(--brand-600)] hover:shadow-[0_0_20px_var(--brand)] transition-all duration-300"
                    >
                      Get Started
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </>
  )
}