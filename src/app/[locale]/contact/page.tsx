import type { Metadata } from 'next'
import { ContactPage } from '@/features/contact'
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
  const title = isAr ? 'اتصل بنا | مضياجي باشا' : 'Contact | Midyaji Basha'
  const description = isAr
    ? 'تواصل مع مضياجي باشا للطلبات، الاتجاهات، والاستفسارات في عمّان، الأردن.'
    : 'Contact Midyaji Basha for orders, directions, and inquiries in Amman, Jordan.'
  const canonical = `${business.url}/${locale}/contact`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/contact`,
        ar: `${business.url}/ar/contact`,
        'x-default': `${business.url}/en/contact`,
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

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <ContactPage locale={locale} />
}
