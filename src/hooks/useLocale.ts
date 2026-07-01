export function useLocale(locale: string) {
  const isRTL = locale === 'ar'
  const dir: 'rtl' | 'ltr' = isRTL ? 'rtl' : 'ltr'
  const otherLocale = isRTL ? 'en' : 'ar'
  const switchLabel = isRTL ? 'EN' : 'AR'
  return { isRTL, dir, otherLocale, switchLabel }
}
