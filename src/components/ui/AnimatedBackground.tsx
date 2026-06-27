'use client'

function Shell({ x, y, size, opacity, delay }: { x: number; y: number; size: number; opacity: number; delay: number }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size * 1.33,
        opacity,
        color: 'rgba(229,30,42,1)',
        animationDelay: `${delay}s`,
        pointerEvents: 'none',
      }}
      className="shell-drift"
      aria-hidden="true"
    >
      <path d="M60 8 C82 8 108 34 108 82 C108 122 88 152 60 152 C32 152 12 122 12 82 C12 34 38 8 60 8Z" stroke="currentColor" strokeWidth="0.6" />
      <path d="M60 8 L60 152" stroke="currentColor" strokeWidth="0.3" />
      <path d="M60 8 L12 82" stroke="currentColor" strokeWidth="0.3" />
      <path d="M60 8 L108 82" stroke="currentColor" strokeWidth="0.3" />
      <path d="M60 8 L22 128" stroke="currentColor" strokeWidth="0.2" />
      <path d="M60 8 L98 128" stroke="currentColor" strokeWidth="0.2" />
    </svg>
  )
}

const SHELLS = [
  { x: 5,  y: 15, size: 120, opacity: 0.022, delay: 0 },
  { x: 88, y: 8,  size: 80,  opacity: 0.018, delay: 3 },
  { x: 45, y: 65, size: 100, opacity: 0.015, delay: 6 },
  { x: 72, y: 55, size: 60,  opacity: 0.02,  delay: 9 },
  { x: 18, y: 75, size: 90,  opacity: 0.017, delay: 4 },
  { x: 93, y: 72, size: 70,  opacity: 0.016, delay: 7 },
]

export function AnimatedShellPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {SHELLS.map((s, i) => (
        <Shell key={i} {...s} />
      ))}
    </div>
  )
}

export function RedAmbientGlow({ intensity = 'normal' }: { intensity?: 'low' | 'normal' | 'high' }) {
  const opacityMap = { low: 0.08, normal: 0.13, high: 0.2 }
  const sizeMap = { low: 600, normal: 800, high: 1000 }
  const opacity = opacityMap[intensity]
  const size = sizeMap[intensity]

  return (
    <div
      className="absolute pointer-events-none red-pulse-glow"
      style={{
        top: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: size,
        height: size * 0.6,
        background: `radial-gradient(ellipse, rgba(229,30,42,${opacity * 3}) 0%, rgba(229,30,42,${opacity}) 30%, transparent 70%)`,
        filter: 'blur(80px)',
      }}
    />
  )
}
