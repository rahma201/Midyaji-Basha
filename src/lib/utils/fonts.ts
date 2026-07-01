import type React from 'react'

export function getPageFonts(isRTL: boolean): {
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
} {
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: 'var(--font-arabic), sans-serif' }
    : {}
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: 'var(--font-arabic), sans-serif' }
    : { fontFamily: 'var(--font-playfair), serif' }
  return { arabicFont, headingFont }
}
