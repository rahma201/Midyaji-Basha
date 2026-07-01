import type { Metadata } from 'next'
import { FaqPage } from '@/features/faq'
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
  const title = isAr ? 'أسئلة شائعة | مضياجي باشا' : 'FAQ | Midyaji Basha'
  const description = isAr
    ? 'إجابات على الأسئلة الشائعة حول مضياجي باشا، ميدي دولما، والأكل التركي في عمّان.'
    : 'Answers to common questions about Midyaji Basha, Midye Dolma, and Turkish street food in Amman.'
  const canonical = `${business.url}/${locale}/faq`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/faq`,
        ar: `${business.url}/ar/faq`,
        'x-default': `${business.url}/en/faq`,
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

export default async function LocaleFaqPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <FaqPage locale={locale} />
}
