'use client'

import type { Dictionary } from '@/lib/i18n/en'
import { MidyeDolmaHero } from '@/components/hero/MidyeDolmaHero'

export function LocaleHero({ dict, locale }: { dict: Dictionary; locale: string }) {
  return <MidyeDolmaHero locale={locale} localizedDict={dict} />
}
