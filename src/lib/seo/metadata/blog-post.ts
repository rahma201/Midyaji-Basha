import type { Metadata } from 'next'
import { getBlogPostBySlug } from '@/lib/data/api'
import { business } from '@/lib/seo/business'

export async function buildBlogPostMetadata(locale: string, slug: string): Promise<Metadata> {
  const post = await getBlogPostBySlug(slug)
  if (!post) return {}
  const isAr = locale === 'ar'
  const canonical = `${business.url}/${locale}/blog/${slug}`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical,
      languages: {
        en: `${business.url}/en/blog/${slug}`,
        ar: `${business.url}/ar/blog/${slug}`,
        'x-default': `${business.url}/en/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonical,
      siteName: 'Midyaji Basha',
      locale: isAr ? 'ar_JO' : 'en_US',
      publishedTime: post.date,
      authors: ['Midyaji Basha'],
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    robots: { index: true, follow: true },
  }
}
