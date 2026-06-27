interface SectionHeaderProps {
  badge?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export function SectionHeader({ badge, title, subtitle, centered = false, light = false }: SectionHeaderProps) {
  return (
    <div className={centered ? 'text-center' : ''}>
      {badge && (
        <span
          className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          style={{ backgroundColor: 'rgba(181,139,71,0.15)', color: '#B58B47', border: '1px solid rgba(181,139,71,0.3)' }}
        >
          {badge}
        </span>
      )}
      <h2
        className="text-4xl md:text-5xl font-bold leading-tight"
        style={{ fontFamily: 'var(--font-playfair), serif', color: light ? '#0D0D0D' : '#F8F6F1' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className="mt-4 text-lg leading-relaxed"
          style={{ color: light ? '#4b5563' : '#9ca3af' }}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
