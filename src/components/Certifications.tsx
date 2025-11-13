import { Section } from './Section'
import { Badge } from './ui/badge'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { CheckCircle, Shield, Medal, Certificate, Globe, Lock } from '@phosphor-icons/react'

interface CertBadge {
  id: string
  name: string
  description: string
  icon: React.ReactNode
  type: 'color' | 'monochrome'
  colorScheme?: {
    bg: string
    border: string
    text: string
  }
}

const certifications: CertBadge[] = [
  {
    id: 'pci-dss',
    name: 'PCI DSS 4.0',
    description: 'Payment Card Industry Data Security Standard compliant for secure payment processing',
    icon: <Shield weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.35 0.15 254)',
      border: 'oklch(0.50 0.18 254)',
      text: 'oklch(0.98 0 0)'
    }
  },
  {
    id: 'soc2',
    name: 'SOC 2 Type II',
    description: 'System and Organization Controls certification demonstrating security, availability, and confidentiality',
    icon: <Certificate weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.55 0.25 290)',
      border: 'oklch(0.65 0.28 290)',
      text: 'oklch(0.98 0 0)'
    }
  },
  {
    id: 'iso-27001',
    name: 'ISO 27001',
    description: 'International standard for information security management systems',
    icon: <Medal weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.75 0.18 195)',
      border: 'oklch(0.80 0.20 195)',
      text: 'oklch(0.10 0.02 254)'
    }
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act compliant for healthcare data',
    icon: <Lock weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'gdpr',
    name: 'GDPR Ready',
    description: 'General Data Protection Regulation compliant for EU data privacy',
    icon: <Globe weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'fisma',
    name: 'FISMA',
    description: 'Federal Information Security Management Act compliant for government systems',
    icon: <Shield weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.65 0.28 340)',
      border: 'oklch(0.75 0.30 340)',
      text: 'oklch(0.98 0 0)'
    }
  },
  {
    id: 'fedramp',
    name: 'FedRAMP',
    description: 'Federal Risk and Authorization Management Program for cloud services',
    icon: <Certificate weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'iso-9001',
    name: 'ISO 9001',
    description: 'Quality management system certification for consistent service delivery',
    icon: <Medal weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'aws-partner',
    name: 'AWS Partner',
    description: 'Amazon Web Services certified partner with expertise in cloud infrastructure',
    icon: <Globe weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.80 0.15 65)',
      border: 'oklch(0.85 0.18 65)',
      text: 'oklch(0.10 0.02 254)'
    }
  },
  {
    id: 'azure-certified',
    name: 'Azure Certified',
    description: 'Microsoft Azure certified for enterprise cloud solutions',
    icon: <CheckCircle weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'gcp-partner',
    name: 'GCP Partner',
    description: 'Google Cloud Platform certified partner for scalable cloud infrastructure',
    icon: <Globe weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'ccpa',
    name: 'CCPA',
    description: 'California Consumer Privacy Act compliant for consumer data protection',
    icon: <Lock weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'nist',
    name: 'NIST CSF',
    description: 'National Institute of Standards and Technology Cybersecurity Framework aligned',
    icon: <Shield weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.35 0.15 254)',
      border: 'oklch(0.50 0.18 254)',
      text: 'oklch(0.98 0 0)'
    }
  },
  {
    id: 'cmmc',
    name: 'CMMC Level 2',
    description: 'Cybersecurity Maturity Model Certification for defense contractors',
    icon: <Certificate weight="fill" />,
    type: 'monochrome',
  },
  {
    id: 'pci-pin',
    name: 'PCI PIN',
    description: 'PCI PIN Transaction Security certification for secure PIN handling',
    icon: <Lock weight="fill" />,
    type: 'color',
    colorScheme: {
      bg: 'oklch(0.55 0.25 290)',
      border: 'oklch(0.65 0.28 290)',
      text: 'oklch(0.98 0 0)'
    }
  },
  {
    id: 'iso-20000',
    name: 'ISO 20000',
    description: 'IT Service Management certification for quality service delivery',
    icon: <Medal weight="fill" />,
    type: 'monochrome',
  },
]

export function Certifications() {
  return (
    <Section fullBleed contentAlign="center">
      <div className="full-bleed-grid">
        <div className="grid-content">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text gradient-text-shimmer">
              Certifications & Industry Badges
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Trusted credentials and compliance certifications ensuring enterprise-grade security, 
              privacy, and operational excellence across all our services.
            </p>
          </div>

          <TooltipProvider delayDuration={200}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <Tooltip key={cert.id}>
                  <TooltipTrigger asChild>
                    <div
                      className="cert-badge group"
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="cert-badge-inner">
                        <div className="cert-icon">
                          {cert.icon}
                        </div>
                        <div className="cert-name">
                          {cert.name}
                        </div>
                        {cert.type === 'color' && cert.colorScheme && (
                          <div 
                            className="cert-accent"
                            style={{
                              background: `linear-gradient(135deg, ${cert.colorScheme.bg}, ${cert.colorScheme.border})`,
                            }}
                          />
                        )}
                        <div className="light-sweep" />
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent 
                    side="top" 
                    className="max-w-xs glass-panel border-border/50"
                    sideOffset={8}
                  >
                    <p className="text-sm font-medium mb-1">{cert.name}</p>
                    <p className="text-xs text-muted-foreground">{cert.description}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </div>
      </div>
    </Section>
  )
}
