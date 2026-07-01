import Link from 'next/link'
import { Reveal } from '@/components/shared/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  ab: Dictionary['about']
  locale: string
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function AboutCta({ ab, locale, arabicFont, headingFont }: Props) {
  return (
    <section className="py-20 px-4 text-center">
      <Reveal delay={0.1}>
        <h2
          className="text-3xl font-bold mb-8"
          style={{ color: '#F8F6F1', ...headingFont }}
        >
          {ab.ctaTitle}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/${locale}/menu`}
            className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#E51E2A', ...arabicFont }}
          >
            {ab.ctaMenu}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-70"
            style={{
              border: '1.5px solid rgba(248,246,241,0.25)',
              color: '#F8F6F1',
              ...arabicFont,
            }}
          >
            {ab.ctaOrder}
          </Link>
        </div>
      </Reveal>
    </section>
  )
}
