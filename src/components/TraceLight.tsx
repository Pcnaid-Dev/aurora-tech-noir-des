import { ReactNode } from 'react'

interface TraceLightProps {
  children: ReactNode
  speed?: number
  glowColor?: string
  borderRadius?: string
  className?: string
}

export function TraceLight({ 
  children, 
  speed = 3, 
  glowColor = 'var(--neon-cyan)', 
  borderRadius = '1rem',
  className = ''
}: TraceLightProps) {
  return (
    <div className={`relative ${className}`} style={{ borderRadius }}>
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius,
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0%, ${glowColor} 10%, transparent 20%, transparent 100%)`,
          animation: `trace-light-rotate ${speed}s linear infinite`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
          WebkitMaskComposite: 'xor',
          padding: '1px'
        }}
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
