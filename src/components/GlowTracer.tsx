import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlowTracerProps {
  children: ReactNode
  className?: string
  radius?: number
}

export function GlowTracer({ children, className, radius = 16 }: GlowTracerProps) {
  const uniqueId = `glow-${Math.random().toString(36).substring(7)}`
  
  return (
    <div className={cn('relative', className)}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--aurora-violet)" />
            <stop offset="50%" stopColor="var(--aurora-cyan)" />
            <stop offset="100%" stopColor="var(--aurora-magenta)" />
          </linearGradient>
        </defs>
        <rect
          x="1"
          y="1"
          width="calc(100% - 2px)"
          height="calc(100% - 2px)"
          rx={radius}
          fill="none"
          stroke={`url(#${uniqueId})`}
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset="1000"
          className="animate-[tracer-dash_4s_linear_infinite]"
        />
      </svg>
      {children}
    </div>
  )
}
