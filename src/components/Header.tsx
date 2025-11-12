import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { List, X, CaretDown } from '@phosphor-icons/react'
import { cn } from '@/lib/utils'

const solutions = [
  { name: 'Payments & POS', href: '#solutions', description: 'Modern payment solutions' },
  { name: 'Energy Solutions', href: '#solutions', description: 'Smart energy management' },
  { name: 'Telecom Services', href: '#solutions', description: 'Connected communications' },
  { name: 'Web & Marketing', href: '#solutions', description: 'Digital presence' },
  { name: 'Accounting & Taxes', href: '#solutions', description: 'Financial management' },
  { name: 'Business Strategy', href: '#solutions', description: 'Strategic consulting' },
  { name: 'Cloud Infrastructure', href: '#solutions', description: 'Scalable cloud platforms' },
  { name: 'E-Commerce', href: '#solutions', description: 'Online retail solutions' },
]

const industries = [
  { name: 'Retail', href: '#industries', description: 'Point of sale & inventory' },
  { name: 'Government', href: '#industries', description: 'Secure compliance solutions' },
  { name: 'Energy', href: '#industries', description: 'Utilities & renewables' },
  { name: 'Telecom', href: '#industries', description: 'Carrier & ISP platforms' },
  { name: 'Financial Services', href: '#industries', description: 'Banking & fintech' },
  { name: 'SMB & Startups', href: '#industries', description: 'Growth-stage businesses' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [solutionsOpen, setSolutionsOpen] = useState(false)
  const [industriesOpen, setIndustriesOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-border">
      <div className="max-w-[120rem] mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--aurora-violet)] to-[var(--aurora-cyan)] flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-bold">Pcnaid</span>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium flex items-center gap-1 hover:text-accent transition-colors">
                Solutions
                <CaretDown size={16} className={cn('transition-transform', solutionsOpen && 'rotate-180')} />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-[600px] glass-panel border border-border rounded-lg p-4 grid grid-cols-2 gap-2">
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="font-medium text-sm group-hover:text-accent transition-colors">{solution.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{solution.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div 
              className="relative"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button className="px-4 py-2 text-sm font-medium flex items-center gap-1 hover:text-accent transition-colors">
                Industries
                <CaretDown size={16} className={cn('transition-transform', industriesOpen && 'rotate-180')} />
              </button>
              {industriesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[400px] glass-panel border border-border rounded-lg p-4 grid grid-cols-2 gap-2">
                  {industries.map((industry) => (
                    <a
                      key={industry.name}
                      href={industry.href}
                      className="p-3 rounded-lg hover:bg-muted/50 transition-colors group"
                    >
                      <div className="font-medium text-sm group-hover:text-accent transition-colors">{industry.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">{industry.description}</div>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#integrations" className="px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Integrations
            </a>
            <a href="#testimonials" className="px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="px-4 py-2 text-sm font-medium hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90">Get Started</Button>
          </div>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <List size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] glass-panel border-l border-border">
              <div className="flex flex-col gap-6 mt-8">
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Solutions</div>
                  {solutions.map((solution) => (
                    <a
                      key={solution.name}
                      href={solution.href}
                      className="text-sm font-medium hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {solution.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Industries</div>
                  {industries.map((industry) => (
                    <a
                      key={industry.name}
                      href={industry.href}
                      className="text-sm font-medium hover:text-accent transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {industry.name}
                    </a>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <a href="#integrations" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                    Integrations
                  </a>
                  <a href="#testimonials" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                    Testimonials
                  </a>
                  <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors" onClick={() => setMobileOpen(false)}>
                    Contact
                  </a>
                </div>
                <div className="flex flex-col gap-2 pt-4 border-t border-border">
                  <Button variant="outline" className="w-full">Sign In</Button>
                  <Button className="w-full bg-primary hover:bg-primary/90">Get Started</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
