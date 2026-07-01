import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { GuidesPage } from '@/features/guides'
import { isValidLocale } from '@/lib/i18n/config'
import { buildGuidesMetadata } from '@/lib/seo/metadata/guides'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  return buildGuidesMetadata(locale)
}

export default async function LocaleGuidesPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isValidLocale(locale)) notFound()
  return <GuidesPage locale={locale} />
}
