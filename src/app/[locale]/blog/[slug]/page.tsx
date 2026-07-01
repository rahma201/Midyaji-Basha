import type { Metadata } from 'next'
import { BlogPostPage } from '@/features/blog'
import { getBlogPosts } from '@/lib/data/api'
import { buildBlogPostMetadata } from '@/lib/seo/metadata/blog-post'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return ['en', 'ar'].flatMap((locale) =>
    posts.map((post) => ({ locale, slug: post.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  return buildBlogPostMetadata(locale, slug)
}

export default async function LocaleBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  return <BlogPostPage locale={locale} slug={slug} />
}
