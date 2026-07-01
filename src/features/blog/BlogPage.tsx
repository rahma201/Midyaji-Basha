import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getBlogPosts } from '@/lib/data/api'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { breadcrumbSchema, graphSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { BlogSearchSection } from './components/BlogSearchSection'

export async function BlogPage({ locale }: { locale: string }) {
  if (!isValidLocale(locale)) notFound()
  const [dict, posts] = await Promise.all([
    getDictionary(locale),
    getBlogPosts(),
  ])
  const isRTL = locale === 'ar'
  return (
    <div style={{ backgroundColor: '#0D0D0D' }} dir={isRTL ? 'rtl' : 'ltr'}>
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
          ]),
          webPageSchema({
            name: isRTL ? 'المدونة | مضياجي باشا' : 'Blog | Midyaji Basha',
            description: dict.blog.heroSub,
            url: `${business.url}/${locale}/blog`,
            locale: isRTL ? 'ar' : 'en',
          }),
        ])}
      />
      <BlogSearchSection posts={posts} dict={dict} locale={locale} />
    </div>
  )
}
