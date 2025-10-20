import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion'

const faqs = [
  {
    question: 'What makes Pcnaid different from other technology providers?',
    answer: 'We combine cutting-edge technology with deep industry expertise across multiple domains. Our Aurora Tech-Noir approach delivers not just solutions, but immersive experiences that transform how businesses operate. With 99.9% uptime, 24/7 support, and proven results across 500+ enterprises, we\'re committed to your success.'
  },
  {
    question: 'How quickly can we get started with your solutions?',
    answer: 'Most implementations begin within 2 weeks of initial consultation. Our streamlined onboarding process includes dedicated success managers, comprehensive training, and phased rollouts to minimize disruption. Critical systems can often be operational within 30 days, with full integration completed in 60-90 days depending on complexity.'
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7/365 enterprise-grade support with dedicated account managers, priority ticket resolution, and proactive system monitoring. Our average response time is under 15 minutes for critical issues, with 99% of tickets resolved within 24 hours. You\'ll also have access to our extensive knowledge base, video tutorials, and quarterly business reviews.'
  },
  {
    question: 'Can your solutions integrate with our existing systems?',
    answer: 'Absolutely. Our platform-agnostic approach supports integration with virtually any enterprise system through REST APIs, webhooks, and custom connectors. We have pre-built integrations with major ERP, CRM, and accounting platforms, and our solutions team can develop custom integrations for specialized requirements.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve a diverse range of industries including financial services, energy & utilities, telecommunications, retail, healthcare, and professional services. Our solutions are designed to be flexible and customizable to meet the unique regulatory, operational, and technical requirements of each sector.'
  },
  {
    question: 'How do you ensure data security and compliance?',
    answer: 'Security is built into every layer of our solutions. We maintain SOC 2 Type II, ISO 27001, and industry-specific certifications (PCI DSS for payments, HIPAA for healthcare). All data is encrypted at rest and in transit, with regular security audits, penetration testing, and compliance monitoring. We also offer dedicated private cloud options for organizations with enhanced security requirements.'
  }
]

export function FAQ() {
  return (
    <section id="faq" className="relative py-32 px-4">
      <div className="relative z-10 container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-[var(--text-60)]">
            Everything you need to know about partnering with Pcnaid.
          </p>
        </div>

        <div className="glass-panel rounded-2xl p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[var(--glass-border)] rounded-xl px-6 data-[state=open]:border-[var(--neon-cyan)] data-[state=open]:shadow-[0_0_20px_var(--neon-cyan)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-[var(--neon-cyan)] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--text-60)] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center glass-panel rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4 text-white">
            Still have questions?
          </h3>
          <p className="text-[var(--text-60)] mb-6">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <button
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[var(--brand)] via-[var(--aurora-violet)] to-[var(--aurora-magenta)] font-semibold hover:shadow-[0_0_40px_var(--brand)] transition-all duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}