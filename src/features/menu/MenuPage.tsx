import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getProducts } from '@/lib/data/api'
import { getPageFonts } from '@/lib/utils/fonts'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { breadcrumbSchema, faqSchema, graphSchema, menuSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { ProductCard } from './components/ProductCard'

export async function MenuPage({ locale }: { locale: string }) {
  if (!isValidLocale(locale)) notFound()
  const [dict, products] = await Promise.all([
    getDictionary(locale),
    getProducts(),
  ])
  const isRTL = locale === 'ar'
  const { arabicFont, headingFont } = getPageFonts(isRTL)
  const showcaseFaqs = products.flatMap((product) =>
    (isRTL ? product.faqsAr : product.faqs).slice(0, 2),
  )

  return (
    <>
      <SchemaJsonLd data={menuSchema(locale as 'en' | 'ar')} />
      <SchemaJsonLd data={faqSchema(showcaseFaqs)} />
      <SchemaJsonLd
        data={graphSchema([
          breadcrumbSchema([
            {
              name: locale === 'ar' ? 'الرئيسية' : 'Home',
              url: `${business.url}/${locale}`,
            },
            {
              name: locale === 'ar' ? 'قائمة الطعام' : 'Menu',
              url: `${business.url}/${locale}/menu`,
            },
          ]),
          webPageSchema({
            name: isRTL ? 'قائمتنا | مضياجي باشا' : 'Menu | Midyaji Basha',
            description: dict.menu.pageDesc,
            url: `${business.url}/${locale}/menu`,
            locale: isRTL ? 'ar' : 'en',
          }),
        ])}
      />
      <div
        className="pt-32 pb-24 px-4"
        style={{ backgroundColor: '#0D0D0D' }}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#B58B47', ...arabicFont }}
            >
              {dict.menu.badge}
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: '#F8F6F1', ...headingFont }}
            >
              {dict.menu.pageTitle}
            </h1>
            <p
              className="text-xl mb-2"
              style={{ color: '#9ca3af', ...arabicFont }}
            >
              {dict.menu.pageSubtitle}
            </p>
            <p
              className="text-base"
              style={{ color: '#9ca3af', ...arabicFont }}
            >
              {dict.menu.pageDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} dict={dict} locale={locale} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
