import type { Metadata } from 'next'
import { isValidLocale } from '@/lib/i18n/config'
import { business, seoKeywords } from '@/lib/seo/business'
import { hubContent, type HubLocale } from '@/lib/seo/knowledge-hub'

export function buildGuidesMetadata(locale: string): Metadata {
  if (!isValidLocale(locale)) return {}

  const hubLocale = locale as HubLocale
  const content = hubContent[hubLocale]
  const canonical = `${business.url}/${locale}/guides`
  const title =
    hubLocale === 'ar'
      ? `أدلة الطعام التركي | ${business.name}`
      : `Turkish Food Guides | ${business.name}`

  return {
    title,
    description: content.description,
    keywords: seoKeywords,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/guides`,
        ar: `${business.url}/ar/guides`,
        'x-default': `${business.url}/en/guides`,
      },
    },
    openGraph: {
      title,
      description: content.description,
      url: canonical,
      locale: hubLocale === 'ar' ? 'ar_JO' : 'en_US',
      siteName: 'Midyaji Basha',
      type: 'website',
      images: [
        {
          url: business.ogImage,
          width: 1200,
          height: 630,
          alt: `${business.name} guides`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: content.description,
      images: [business.ogImage],
    },
    robots: { index: true, follow: true },
  }
}
