import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  fullBleed?: boolean
  contentAlign?: 'left' | 'center' | 'right'
  noPadding?: boolean
}

export function Section({ 
  children, 
  className, 
  id,
  fullBleed = false,
  contentAlign = 'center',
  noPadding = false
}: SectionProps) {
  return (
    <section 
      id={id}
      className={cn(
        'full-bleed-grid',
        !noPadding && 'py-24 md:py-32',
        className
      )}
    >
      <div className={cn(
        fullBleed ? 'grid-full' : 'grid-content',
        contentAlign === 'left' && 'justify-start',
        contentAlign === 'center' && 'mx-auto',
        contentAlign === 'right' && 'justify-end',
      )}>
        {children}
      </div>
    </section>
  )
}
