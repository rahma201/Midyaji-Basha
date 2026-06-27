import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { KnowledgeHubPage } from '@/components/seo/KnowledgeHubPage'
import { isValidLocale } from '@/lib/i18n/config'
import { business, seoKeywords } from '@/lib/seo/business'
import { hubContent, type HubLocale } from '@/lib/seo/knowledge-hub'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isValidLocale(locale)) return {}
  const hubLocale = locale as HubLocale
  const content = hubContent[hubLocale]
  const canonical = `${business.url}/${locale}/knowledge-hub`

  return {
    title: `${content.title} | ${business.name}`,
    description: content.description,
    keywords: seoKeywords,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/knowledge-hub`,
        ar: `${business.url}/ar/knowledge-hub`,
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      locale: hubLocale === 'ar' ? 'ar_JO' : 'en_US',
      images: [{ url: business.ogImage, width: 1200, height: 630, alt: `${business.name} knowledge hub` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [business.ogImage],
    },
  }
}

export default async function LocaleKnowledgeHub({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  return <KnowledgeHubPage locale={locale as HubLocale} canonicalPath={`/${locale}/knowledge-hub`} />
}
