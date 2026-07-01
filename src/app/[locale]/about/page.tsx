import type { Metadata } from 'next'
import { AboutPage } from '@/features/about'
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
  const title = isAr ? 'من نحن | مضياجي باشا' : 'About | Midyaji Basha'
  const description = isAr
    ? 'قصة مضياجي باشا — كيف جلبنا أصيل الأكل التركي في الشوارع إلى عمّان، الأردن.'
    : 'The story of Midyaji Basha — how we brought authentic Turkish street food to Amman, Jordan.'
  const canonical = `${business.url}/${locale}/about`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/about`,
        ar: `${business.url}/ar/about`,
        'x-default': `${business.url}/en/about`,
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
    twitter: { card: 'summary_large_image', title, description, images: [business.ogImage] },
    robots: { index: true, follow: true },
  }
}

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <AboutPage locale={locale} />
}
