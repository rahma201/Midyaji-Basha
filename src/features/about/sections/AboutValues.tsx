import { Award, Leaf, Heart, Globe } from 'lucide-react'
import { Reveal, Stagger } from '@/components/shared/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

const icons = [Award, Leaf, Heart, Globe]

interface Props {
  ab: Dictionary['about']
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function AboutValues({ ab, arabicFont, headingFont }: Props) {
  return (
    <section className="py-20 px-4" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#B58B47', ...arabicFont }}
            >
              {ab.valuesLabel}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ color: '#F8F6F1', ...headingFont }}
            >
              {ab.valuesTitle}
            </h2>
          </Reveal>
        </div>
        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.1}
        >
          {ab.values.map((val, i) => {
            const Icon = icons[i]
            return (
              <div
                key={val.title}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: '#0D0D0D',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(181,139,71,0.12)' }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: '#B58B47' }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#F8F6F1', ...headingFont }}
                >
                  {val.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: '#9ca3af', ...arabicFont }}
                >
                  {val.desc}
                </p>
              </div>
            )
          })}
        </Stagger>
      </div>
    </section>
  )
}
