import { Reveal } from '@/components/shared/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  ab: Dictionary['about']
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function AboutHero({ ab, arabicFont, headingFont }: Props) {
  return (
    <section className="pt-36 pb-24 px-4 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(229,30,42,0.06) 0%, transparent 60%)',
        }}
      />
      <div className="max-w-3xl mx-auto text-center">
        <Reveal delay={0.05}>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: '#B58B47', ...arabicFont }}
          >
            {ab.heroLabel}
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h1
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {ab.heroTitle}
          </h1>
        </Reveal>
        <Reveal delay={0.25}>
          <p className="text-lg" style={{ color: '#9ca3af', ...arabicFont }}>
            {ab.heroSub}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
