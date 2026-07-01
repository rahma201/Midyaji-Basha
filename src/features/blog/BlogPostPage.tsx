import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getBlogPostBySlug, getRelatedBlogPosts } from '@/lib/data/api'
import { getPageFonts } from '@/lib/utils/fonts'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import { articleSchema, breadcrumbSchema, faqSchema, graphSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { MarkdownRenderer } from './components/MarkdownRenderer'

export async function BlogPostPage({
  locale,
  slug,
}: {
  locale: string
  slug: string
}) {
  if (!isValidLocale(locale)) notFound()
  const post = await getBlogPostBySlug(slug)
  if (!post) notFound()

  const [dict, related] = await Promise.all([
    getDictionary(locale),
    getRelatedBlogPosts(slug),
  ])
  const isRTL = locale === 'ar'
  const { arabicFont, headingFont } = getPageFonts(isRTL)

  const faqItems = post.faqs ?? []

  return (
    <>
      <SchemaJsonLd
        data={graphSchema([
          breadcrumbSchema([
            {
              name: locale === 'ar' ? 'الرئيسية' : 'Home',
              url: `${business.url}/${locale}`,
            },
            {
              name: locale === 'ar' ? 'المدونة' : 'Blog',
              url: `${business.url}/${locale}/blog`,
            },
            {
              name: post.title,
              url: `${business.url}/${locale}/blog/${slug}`,
            },
          ]),
          articleSchema({
            title: post.title,
            description: post.excerpt,
            url: `${business.url}/${locale}/blog/${slug}`,
            image: post.image,
            locale: isRTL ? 'ar' : 'en',
            datePublished: post.date,
            dateModified: post.date,
            keywords: post.tags,
          }),
          webPageSchema({
            name: post.title,
            description: post.excerpt,
            url: `${business.url}/${locale}/blog/${slug}`,
            locale: isRTL ? 'ar' : 'en',
          }),
        ])}
      />
      {faqItems.length > 0 ? <SchemaJsonLd data={faqSchema(faqItems)} /> : null}
      <div style={{ backgroundColor: '#0D0D0D' }} dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,13,13,0.4), rgba(13,13,13,0.9))',
            }}
          />
          <div className="absolute bottom-10 inset-x-0 px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                href={`/${locale}/blog`}
                className="locale-inline text-sm mb-4 transition-opacity hover:opacity-70"
                style={{ color: '#B58B47', ...arabicFont }}
              >
                <span className="locale-arrow">←</span> {dict.blog.heroLabel}
              </Link>
              <div
                className="flex items-center gap-3 mb-3 text-xs"
                style={{ color: '#9ca3af' }}
              >
                <span
                  className="px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: 'rgba(229,30,42,0.2)',
                    color: '#E51E2A',
                    ...arabicFont,
                  }}
                >
                  {post.category}
                </span>
                <span>·</span>
                <span style={arabicFont}>{post.readingTime}</span>
                <span>·</span>
                <span style={arabicFont}>
                  {dict.blog.by} {post.author}
                </span>
              </div>
              <h1
                className="text-3xl md:text-5xl font-bold leading-snug"
                style={{ color: '#F8F6F1', ...headingFont }}
              >
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <aside
            role="note"
            aria-label={isRTL ? 'إجابة مباشرة' : 'Direct Answer'}
            itemScope
            itemType="https://schema.org/Answer"
            className="mb-8 rounded-2xl p-6"
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid rgba(181,139,71,0.22)',
            }}
          >
            <h2
              className="text-lg font-bold mb-3"
              style={{ color: '#F8F6F1', ...headingFont }}
            >
              {isRTL ? 'إجابة مباشرة' : 'Direct Answer'}
            </h2>
            <p
              itemProp="text"
              className="leading-relaxed"
              style={{ color: '#d1d5db', ...arabicFont }}
            >
              {post.excerpt}
            </p>
          </aside>
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: '#9ca3af', ...arabicFont }}
          >
            {post.excerpt}
          </p>
          <div className="text-base" style={{ color: '#9ca3af' }}>
            <MarkdownRenderer
              content={post.content.trim()}
              headingFont={headingFont}
              arabicFont={arabicFont}
            />
          </div>
          {faqItems.length > 0 ? (
            <section className="mt-12">
              <h2
                className="text-2xl font-bold mb-5"
                style={{ color: '#F8F6F1', ...headingFont }}
              >
                {isRTL ? 'أسئلة مختصرة' : 'Quick Questions'}
              </h2>
              <div className="space-y-4">
                {faqItems.slice(0, 4).map((faq) => (
                  <div
                    key={faq.question}
                    className="rounded-xl p-5"
                    style={{
                      backgroundColor: '#1A1A1A',
                      border: '1px solid rgba(255,255,255,0.07)',
                    }}
                  >
                    <h3
                      className="font-semibold mb-2"
                      style={{ color: '#F8F6F1', ...headingFont }}
                    >
                      {faq.question}
                    </h3>
                    <p
                      className="text-sm leading-7"
                      style={{ color: '#d1d5db', ...arabicFont }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}
        </div>

        {/* Related posts */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div
            className="h-px mb-12"
            style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
          />
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {dict.blog.latestLabel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <HoverGlow key={p.slug} className="h-full rounded-2xl">
                <Link
                  href={`/${locale}/blog/${p.slug}`}
                  className="premium-hover-glow group rounded-2xl overflow-hidden block h-full"
                  style={{
                    backgroundColor: '#1A1A1A',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-bold text-sm leading-snug mb-1 transition-colors duration-300"
                      style={{ color: '#F8F6F1', ...headingFont }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: '#B58B47', ...arabicFont }}
                    >
                      {p.readingTime}
                    </p>
                  </div>
                </Link>
              </HoverGlow>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
