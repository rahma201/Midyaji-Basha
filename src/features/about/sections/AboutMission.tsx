import { Reveal } from '@/components/shared/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  ab: Dictionary['about']
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function AboutMission({ ab, arabicFont, headingFont }: Props) {
  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <Reveal delay={0.05}>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: '#B58B47', ...arabicFont }}
          >
            {ab.missionLabel}
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {ab.missionTitle}
          </h2>
        </Reveal>
        <Reveal delay={0.25}>
          <p
            className="text-lg leading-relaxed"
            style={{ color: '#9ca3af', ...arabicFont }}
          >
            {ab.missionContent}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
