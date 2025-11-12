import { LinkedinLogo, TwitterLogo, GithubLogo, EnvelopeSimple } from '@phosphor-icons/react'

export function FooterWide() {
  return (
    <footer className="glass-panel border-t border-border py-16">
      <div className="max-w-[120rem] mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--aurora-violet)] to-[var(--aurora-cyan)] flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Pcnaid</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mb-4">
              Full-service technology solutions provider specializing in enterprise-grade systems and innovation.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg glass-panel border border-border flex items-center justify-center hover:border-accent transition-colors">
                <LinkedinLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-panel border border-border flex items-center justify-center hover:border-accent transition-colors">
                <TwitterLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-panel border border-border flex items-center justify-center hover:border-accent transition-colors">
                <GithubLogo size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg glass-panel border border-border flex items-center justify-center hover:border-accent transition-colors">
                <EnvelopeSimple size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Payments & POS</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Energy Solutions</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Telecom</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Cloud Infrastructure</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Retail</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Government</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Financial Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Healthcare</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Pcnaid. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms</a>
              <a href="#" className="hover:text-accent transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
