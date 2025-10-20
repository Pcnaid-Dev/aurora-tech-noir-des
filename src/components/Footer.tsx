import { 
  GithubLogo, 
  TwitterLogo, 
  LinkedinLogo, 
  InstagramLogo,
  FacebookLogo,
  YoutubeLogo
} from '@phosphor-icons/react'

const footerLinks = {
  solutions: [
    'Payments & POS',
    'Energy Solutions',
    'Telecom Services',
    'Web & Marketing',
    'Accounting & Taxes',
    'Strategy & Formation'
  ],
  company: [
    'About Us',
    'Careers',
    'Press',
    'Partners',
    'Contact'
  ],
  resources: [
    'Documentation',
    'API Reference',
    'Case Studies',
    'Blog',
    'Support'
  ],
  legal: [
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy',
    'Security',
    'Compliance'
  ]
}

const socialLinks = [
  { icon: GithubLogo, href: '#', label: 'GitHub' },
  { icon: TwitterLogo, href: '#', label: 'Twitter' },
  { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
  { icon: InstagramLogo, href: '#', label: 'Instagram' },
  { icon: FacebookLogo, href: '#', label: 'Facebook' },
  { icon: YoutubeLogo, href: '#', label: 'YouTube' }
]

export function Footer() {
  return (
    <footer className="relative py-20 px-4 border-t border-[var(--glass-border)]">
      <div className="relative z-10 container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[var(--brand)] to-[var(--aurora-violet)] flex items-center justify-center font-bold text-white text-xl">
                P
              </div>
              <span className="font-bold text-xl">Pcnaid</span>
            </div>
            <p className="text-[var(--text-60)] text-sm leading-relaxed mb-6">
              Next-generation technology solutions for enterprise innovation and growth.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg glass-panel flex items-center justify-center hover:glass-panel-hover transition-all duration-300"
                  >
                    <Icon size={20} weight="fill" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-[var(--text-60)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-[var(--text-60)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-[var(--text-60)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-sm text-[var(--text-60)] hover:text-[var(--neon-cyan)] transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--text-60)]">
            © {new Date().getFullYear()} Pcnaid. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--text-60)]">
            <a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[var(--neon-cyan)] transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}