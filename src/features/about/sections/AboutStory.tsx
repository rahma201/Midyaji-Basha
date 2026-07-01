import { Reveal } from '@/components/shared/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  ab: Dictionary['about']
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function AboutStory({ ab, arabicFont, headingFont }: Props) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-3xl mx-auto">
        <Reveal delay={0.05}>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
            style={{ color: '#B58B47', ...arabicFont }}
          >
            {ab.storyLabel}
          </span>
        </Reveal>
        <Reveal delay={0.15}>
          <h2
            className="text-3xl md:text-4xl font-bold mb-10"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {ab.storyTitle}
          </h2>
        </Reveal>
        <div className="space-y-6">
          {ab.storyParagraphs.map((para, i) => (
            <Reveal key={i} delay={0.1 + i * 0.08}>
              <p
                className="text-base leading-relaxed"
                style={{ color: '#9ca3af', ...arabicFont }}
              >
                {para}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
