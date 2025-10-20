import { useEffect, useRef } from 'react'

export function AuroraBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    let animationId: number
    let time = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const colors = [
      { r: 123, g: 97, b: 255, a: 0.15 },
      { r: 255, g: 107, b: 205, a: 0.12 },
      { r: 34, g: 211, b: 238, a: 0.1 },
      { r: 255, g: 216, b: 115, a: 0.08 }
    ]

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (prefersReducedMotion) {
        colors.forEach((color, i) => {
          const gradient = ctx.createRadialGradient(
            canvas.width * (0.3 + i * 0.2),
            canvas.height * 0.3,
            0,
            canvas.width * (0.3 + i * 0.2),
            canvas.height * 0.3,
            canvas.width * 0.5
          )
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        })
      } else {
        time += 0.001

        colors.forEach((color, i) => {
          const angle = time + i * Math.PI * 0.5
          const x = canvas.width * 0.5 + Math.cos(angle) * canvas.width * 0.2
          const y = canvas.height * 0.4 + Math.sin(angle * 0.7) * canvas.height * 0.15
          
          const gradient = ctx.createRadialGradient(
            x,
            y,
            0,
            x,
            y,
            canvas.width * 0.6
          )
          gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`)
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)
        })

        animationId = requestAnimationFrame(draw)
      }
    }

    draw()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationId) cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}