import type { Metadata } from 'next'
import { getProductBySlug } from '@/lib/data/api'
import { business } from '@/lib/seo/business'

export async function buildMenuItemMetadata(locale: string, slug: string): Promise<Metadata> {
  const product = await getProductBySlug(slug)
  if (!product) return {}
  const isAr = locale === 'ar'
  const name = isAr && product.nameAr ? product.nameAr : product.name
  const title = isAr ? product.seo.titleAr : product.seo.title
  const description = isAr ? product.seo.descriptionAr : product.seo.description
  const canonical = `${business.url}/${locale}/menu/${product.slug}`
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/menu/${product.slug}`,
        ar: `${business.url}/ar/menu/${product.slug}`,
        'x-default': `${business.url}/en/menu/${product.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'Midyaji Basha',
      locale: isAr ? 'ar_JO' : 'en_US',
      type: 'website',
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [product.image],
    },
    robots: { index: true, follow: true },
  }
}
