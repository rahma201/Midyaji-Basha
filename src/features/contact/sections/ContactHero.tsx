import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  c: Dictionary['contact']
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function ContactHero({ c, arabicFont, headingFont }: Props) {
  return (
    <section className="pt-36 pb-16 px-4 text-center">
      <span
        className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
        style={{ color: '#B58B47', ...arabicFont }}
      >
        {c.heroLabel}
      </span>
      <h1
        className="text-5xl md:text-6xl font-bold mb-4"
        style={{ color: '#F8F6F1', ...headingFont }}
      >
        {c.heroTitle}
      </h1>
      <p
        className="text-lg max-w-xl mx-auto"
        style={{ color: '#9ca3af', ...arabicFont }}
      >
        {c.heroSub}
      </p>
    </section>
  )
}
