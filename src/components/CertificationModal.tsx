import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Badge } from './ui/badge'
import { CheckCircle, Calendar, FileText, Link as LinkIcon, X } from '@phosphor-icons/react'
import { motion, AnimatePresence } from 'framer-motion'

interface CertificationModalProps {
  isOpen: boolean
  onClose: () => void
  certification: {
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
  } | null
}

const mockVerificationData = {
  'pci-dss': {
    issuer: 'PCI Security Standards Council',
    issueDate: 'January 15, 2024',
    expiryDate: 'January 15, 2025',
    certificateId: 'PCI-DSS-2024-001847',
    scope: 'Payment processing, card data storage, and transaction management',
    verificationUrl: '#verify-pci-dss'
  },
  'soc2': {
    issuer: 'American Institute of CPAs',
    issueDate: 'March 1, 2024',
    expiryDate: 'March 1, 2025',
    certificateId: 'SOC2-TYPE2-2024-5829',
    scope: 'Security, availability, processing integrity, confidentiality, and privacy',
    verificationUrl: '#verify-soc2'
  },
  'iso-27001': {
    issuer: 'International Organization for Standardization',
    issueDate: 'February 10, 2024',
    expiryDate: 'February 10, 2027',
    certificateId: 'ISO27001-2024-19273',
    scope: 'Information security management across all business operations',
    verificationUrl: '#verify-iso27001'
  },
  'hipaa': {
    issuer: 'U.S. Department of Health and Human Services',
    issueDate: 'April 5, 2024',
    expiryDate: 'Ongoing Compliance',
    certificateId: 'HIPAA-COMP-2024-7362',
    scope: 'Protected health information handling and storage',
    verificationUrl: '#verify-hipaa'
  },
  'gdpr': {
    issuer: 'European Data Protection Board',
    issueDate: 'May 25, 2023',
    expiryDate: 'Ongoing Compliance',
    certificateId: 'GDPR-READY-2023-4821',
    scope: 'EU citizen data processing and privacy protection',
    verificationUrl: '#verify-gdpr'
  },
  'fisma': {
    issuer: 'National Institute of Standards and Technology',
    issueDate: 'June 12, 2024',
    expiryDate: 'June 12, 2025',
    certificateId: 'FISMA-2024-3947',
    scope: 'Federal information systems security',
    verificationUrl: '#verify-fisma'
  },
  'fedramp': {
    issuer: 'FedRAMP Program Management Office',
    issueDate: 'July 20, 2024',
    expiryDate: 'July 20, 2027',
    certificateId: 'FEDRAMP-MOD-2024-6184',
    scope: 'Cloud services for federal agencies',
    verificationUrl: '#verify-fedramp'
  },
  'iso-9001': {
    issuer: 'International Organization for Standardization',
    issueDate: 'August 8, 2024',
    expiryDate: 'August 8, 2027',
    certificateId: 'ISO9001-2024-8362',
    scope: 'Quality management systems',
    verificationUrl: '#verify-iso9001'
  },
  'aws-partner': {
    issuer: 'Amazon Web Services',
    issueDate: 'September 15, 2024',
    expiryDate: 'September 15, 2025',
    certificateId: 'AWS-PARTNER-2024-5021',
    scope: 'Cloud infrastructure and managed services',
    verificationUrl: '#verify-aws'
  },
  'azure-certified': {
    issuer: 'Microsoft Corporation',
    issueDate: 'October 3, 2024',
    expiryDate: 'October 3, 2025',
    certificateId: 'AZURE-CERT-2024-7193',
    scope: 'Enterprise cloud solutions and architecture',
    verificationUrl: '#verify-azure'
  },
  'gcp-partner': {
    issuer: 'Google Cloud',
    issueDate: 'November 11, 2024',
    expiryDate: 'November 11, 2025',
    certificateId: 'GCP-PARTNER-2024-9274',
    scope: 'Scalable cloud infrastructure and data services',
    verificationUrl: '#verify-gcp'
  },
  'ccpa': {
    issuer: 'California Attorney General',
    issueDate: 'December 1, 2024',
    expiryDate: 'Ongoing Compliance',
    certificateId: 'CCPA-COMP-2024-4628',
    scope: 'California consumer data privacy rights',
    verificationUrl: '#verify-ccpa'
  },
  'nist': {
    issuer: 'National Institute of Standards and Technology',
    issueDate: 'January 22, 2024',
    expiryDate: 'January 22, 2025',
    certificateId: 'NIST-CSF-2024-3571',
    scope: 'Cybersecurity framework implementation',
    verificationUrl: '#verify-nist'
  },
  'cmmc': {
    issuer: 'Cyber AB (CMMC Accreditation Body)',
    issueDate: 'February 28, 2024',
    expiryDate: 'February 28, 2027',
    certificateId: 'CMMC-L2-2024-8492',
    scope: 'Defense contractor cybersecurity practices',
    verificationUrl: '#verify-cmmc'
  },
  'pci-pin': {
    issuer: 'PCI Security Standards Council',
    issueDate: 'March 15, 2024',
    expiryDate: 'March 15, 2025',
    certificateId: 'PCI-PIN-2024-6183',
    scope: 'Secure PIN entry device management',
    verificationUrl: '#verify-pci-pin'
  },
  'iso-20000': {
    issuer: 'International Organization for Standardization',
    issueDate: 'April 19, 2024',
    expiryDate: 'April 19, 2027',
    certificateId: 'ISO20000-2024-5937',
    scope: 'IT service management systems',
    verificationUrl: '#verify-iso20000'
  }
}

export function CertificationModal({ isOpen, onClose, certification }: CertificationModalProps) {
  if (!certification) return null

  const verificationData = mockVerificationData[certification.id as keyof typeof mockVerificationData]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl glass-panel border-border/50 p-0 overflow-hidden">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 opacity-10"
                style={{
                  background: certification.type === 'color' && certification.colorScheme
                    ? `linear-gradient(135deg, ${certification.colorScheme.bg}, ${certification.colorScheme.border})`
                    : 'linear-gradient(135deg, var(--brand), var(--neon-cyan))'
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              />

              <div className="relative p-8">
                <DialogHeader className="space-y-4 mb-6">
                  <div className="flex items-start justify-between">
                    <motion.div 
                      className="flex items-center gap-4"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <motion.div 
                        className="text-5xl flex items-center justify-center p-4 rounded-2xl"
                        style={{
                          background: certification.type === 'color' && certification.colorScheme
                            ? certification.colorScheme.bg
                            : 'var(--glass-base)',
                          color: certification.type === 'color' && certification.colorScheme
                            ? certification.colorScheme.text
                            : 'var(--neon-cyan)'
                        }}
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {certification.icon}
                      </motion.div>
                      <div>
                        <DialogTitle className="text-3xl font-bold mb-2">
                          {certification.name}
                        </DialogTitle>
                        <Badge 
                          variant="secondary" 
                          className="flex items-center gap-1.5 w-fit"
                        >
                          <CheckCircle weight="fill" className="text-green-500" size={14} />
                          <span className="text-xs">Verified & Active</span>
                        </Badge>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    <DialogDescription className="text-base text-muted-foreground">
                      {certification.description}
                    </DialogDescription>
                  </motion.div>
                </DialogHeader>

                <motion.div 
                  className="space-y-6"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <FileText size={16} className="text-accent" />
                        Issuing Authority
                      </div>
                      <div className="text-base font-semibold">{verificationData.issuer}</div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        Issue Date
                      </div>
                      <div className="text-base font-semibold">{verificationData.issueDate}</div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <Calendar size={16} className="text-accent" />
                        Expiry Date
                      </div>
                      <div className="text-base font-semibold">{verificationData.expiryDate}</div>
                    </motion.div>

                    <motion.div 
                      className="space-y-2"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                        <CheckCircle size={16} className="text-accent" />
                        Certificate ID
                      </div>
                      <div className="text-base font-semibold font-mono text-sm">{verificationData.certificateId}</div>
                    </motion.div>
                  </div>

                  <motion.div 
                    className="space-y-2 pt-4 border-t border-border/50"
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <div className="text-sm font-medium text-muted-foreground">Certification Scope</div>
                    <div className="text-base leading-relaxed">{verificationData.scope}</div>
                  </motion.div>

                  <motion.div 
                    className="flex items-center justify-between pt-6 border-t border-border/50"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                  >
                    <motion.a
                      href={verificationData.verificationUrl}
                      className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <LinkIcon size={18} />
                      Verify Certification Online
                    </motion.a>
                    
                    <Badge variant="outline" className="text-xs">
                      Last verified: {new Date().toLocaleDateString()}
                    </Badge>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 opacity-5 pointer-events-none"
                  style={{
                    background: certification.type === 'color' && certification.colorScheme
                      ? `radial-gradient(circle, ${certification.colorScheme.border}, transparent)`
                      : 'radial-gradient(circle, var(--neon-cyan), transparent)'
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
