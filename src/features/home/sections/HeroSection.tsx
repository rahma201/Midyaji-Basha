import type { Dictionary } from '@/lib/i18n/en'
import { MidyeDolmaHero } from './MidyeDolmaHero'

export function HeroSection({ dict, locale }: { dict: Dictionary; locale: string }) {
  return <MidyeDolmaHero locale={locale} localizedDict={dict} />
}
