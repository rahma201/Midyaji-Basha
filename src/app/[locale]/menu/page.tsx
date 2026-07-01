import type { Metadata } from 'next'
import { MenuPage } from '@/features/menu'
import { business } from '@/lib/seo/business'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }]
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const isAr = locale === 'ar'
  const title = isAr
    ? 'منتجات ميديجي باشا الأربعة | المحار التركي وفتة اليالنجي وتشي كفتة'
    : 'Four Signature Turkish Street Food Products | Midyaji Basha'
  const description = isAr
    ? 'استكشف المنتجات الأربعة فقط لدى ميديجي باشا في عمّان: المحار التركي، فتة اليالنجي، ساندويتش تشي كفتة، ووجبة تشي كفتة.'
    : 'Explore the only four products at Midyaji Basha in Amman: Turkish Stuffed Mussels, Yalanji Fatteh, Çiğ Köfte Sandwich, and Çiğ Köfte Meal.'
  const canonical = `${business.url}/${locale}/menu`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/menu`,
        ar: `${business.url}/ar/menu`,
        'x-default': `${business.url}/en/menu`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Midyaji Basha',
      locale: isAr ? 'ar_JO' : 'en_US',
      type: 'website',
      images: [{ url: business.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [business.ogImage],
    },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleMenuPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <MenuPage locale={locale} />
}
