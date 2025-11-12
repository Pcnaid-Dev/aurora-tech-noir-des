import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  wide?: boolean
  bleed?: boolean
  id?: string
}

export function Section({ children, className, wide = false, bleed = false, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'py-16 md:py-24',
        bleed && 'full-bleed',
        className
      )}
    >
      <div className={cn(
        'mx-auto px-4 md:px-6',
        wide ? 'max-w-[120rem]' : 'max-w-7xl'
      )}>
        {children}
      </div>
    </section>
  )
}
