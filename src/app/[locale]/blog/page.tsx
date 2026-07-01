import type { Metadata } from 'next'
import { BlogPage } from '@/features/blog'
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
  const title = isAr ? 'المدونة | مضياجي باشا' : 'Blog | Midyaji Basha'
  const description = isAr
    ? 'مقالات عن الأكل التركي في الشوارع، ميدي دولما، وثقافة المطبخ التركي في الأردن.'
    : 'Articles about Turkish street food, Midye Dolma, and Turkish culinary culture in Jordan.'
  const canonical = `${business.url}/${locale}/blog`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/blog`,
        ar: `${business.url}/ar/blog`,
        'x-default': `${business.url}/en/blog`,
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

export default async function LocaleBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <BlogPage locale={locale} />
}
