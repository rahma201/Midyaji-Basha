import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getBlogPosts, getProductBySlug, getRelatedProducts } from '@/lib/data/api'
import { getPageFonts } from '@/lib/utils/fonts'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { breadcrumbSchema, faqSchema, graphSchema, imageObject, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { ProductOrderButton } from './components/ProductOrderButton'
import { ProductFaqAccordion } from './components/ProductFaqAccordion'
import { RelatedProducts } from './components/RelatedProducts'
import type { ProductSection } from '@/types'
import type React from 'react'

function ProductSectionBlock({
  section,
  arabicFont,
  headingFont,
}: {
  section?: ProductSection
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}) {
  if (!section) return null

  return (
    <section className="space-y-4">
      <h2
        className="text-2xl md:text-3xl font-bold"
        style={{ color: '#F8F6F1', ...headingFont }}
      >
        {section.title}
      </h2>
      {section.paragraphs.map((paragraph) => (
        <p
          key={paragraph}
          className="text-base md:text-lg leading-relaxed"
          style={{ color: '#c7c7c7', ...arabicFont }}
        >
          {paragraph}
        </p>
      ))}
    </section>
  )
}

export async function MenuItemPage({
  locale,
  slug,
}: {
  locale: string
  slug: string
}) {
  if (!isValidLocale(locale)) notFound()
  const product = await getProductBySlug(slug)
  if (!product) notFound()

  const [dict, related, posts] = await Promise.all([
    getDictionary(locale),
    getRelatedProducts(product.slug),
    getBlogPosts(),
  ])
  const isRTL = locale === 'ar'
  const { arabicFont, headingFont } = getPageFonts(isRTL)
  const displayName = isRTL ? product.nameAr ?? product.name : product.name
  const secondaryName = isRTL ? product.name : product.nameAr ?? product.name
  const tagline = isRTL ? product.taglineAr : product.tagline
  const description = isRTL ? product.descriptionAr : product.description
  const directAnswer = isRTL ? product.directAnswerAr : product.directAnswer
  const sections = isRTL ? product.sectionsAr : product.sections
  const sellingPoints = isRTL ? product.sellingPointsAr : product.sellingPoints
  const ingredients = isRTL ? product.ingredientsAr : product.ingredients
  const allergens = isRTL ? product.allergensAr : product.allergens
  const serving = isRTL ? product.servingAr : product.serving
  const faqs = isRTL ? product.faqsAr : product.faqs
  const relatedPosts = posts.filter((post) => product.blogSlugs.includes(post.slug)).slice(0, 4)
  const canonical = `${business.url}/${locale}/menu/${product.slug}`

  const sectionById = (id: string) => sections.find((section) => section.id === id)
  const itemSchema = {
    '@context': 'https://schema.org',
    '@type': 'MenuItem',
    name: displayName,
    alternateName: secondaryName,
    description,
    url: canonical,
    offers: {
      '@type': 'Offer',
      price: product.priceFrom,
      priceCurrency: 'JOD',
      availability: 'https://schema.org/InStock',
    },
    image: imageObject(product.image, displayName),
  }

  return (
    <>
      <SchemaJsonLd data={itemSchema} />
      <SchemaJsonLd data={faqSchema(faqs)} />
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
            { name: displayName, url: canonical },
          ]),
          webPageSchema({
            name: displayName,
            description,
            url: canonical,
            locale: isRTL ? 'ar' : 'en',
          }),
        ])}
      />
      <div style={{ backgroundColor: '#0D0D0D' }} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="relative min-h-[720px] overflow-hidden pt-32 px-4 pb-16">
          <Image
            src={product.image}
            alt={displayName}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(13,13,13,0.94) 0%, rgba(13,13,13,0.76) 48%, rgba(13,13,13,0.34) 100%)',
            }}
          />
          <div className="relative max-w-7xl mx-auto grid min-h-[560px] items-end">
            <div className="max-w-3xl">
              <Link
                href={`/${locale}/menu`}
                className="locale-inline text-sm mb-6 transition-opacity hover:opacity-70"
                style={{ color: '#B58B47', ...arabicFont }}
              >
                {dict.product.backToMenu}
              </Link>
              <p
                className="text-sm font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: '#B58B47', ...arabicFont }}
              >
                {isRTL ? product.categoryAr : product.category}
              </p>
              <h1
                className="text-4xl md:text-7xl font-bold mb-4 leading-tight"
                style={{ color: '#F8F6F1', ...headingFont }}
              >
                {displayName}
              </h1>
              <p
                className="text-xl md:text-2xl mb-4"
                style={{ color: '#F8F6F1', ...arabicFont }}
              >
                {tagline}
              </p>
              <p
                className="text-base md:text-lg leading-relaxed mb-8 max-w-2xl"
                style={{ color: '#d1d5db', ...arabicFont }}
              >
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                <span
                  className="inline-flex w-fit text-lg font-bold px-5 py-3 rounded-full"
                  style={{ backgroundColor: '#E51E2A', color: 'white' }}
                >
                  {product.price}
                </span>
                <div className="w-full sm:w-52">
                  <ProductOrderButton dict={dict} isRTL={isRTL} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <main className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12">
            <div className="space-y-16">
              <aside
                role="note"
                aria-label={isRTL ? 'إجابة مباشرة' : 'Direct Answer'}
                itemScope
                itemType="https://schema.org/Answer"
                className="rounded-2xl p-6 md:p-8"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid rgba(181,139,71,0.24)',
                }}
              >
                <h2
                  className="text-xl font-bold mb-3"
                  style={{ color: '#F8F6F1', ...headingFont }}
                >
                  {isRTL ? 'إجابة مباشرة' : 'Direct Answer'}
                </h2>
                <p
                  itemProp="text"
                  className="text-lg leading-relaxed"
                  style={{ color: '#d1d5db', ...arabicFont }}
                >
                  {directAnswer}
                </p>
              </aside>

              <ProductSectionBlock section={sectionById('what')} arabicFont={arabicFont} headingFont={headingFont} />

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#F8F6F1', ...headingFont }}
                >
                  {dict.product.whyLoveTitle}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {sellingPoints.map((point) => (
                    <div
                      key={point}
                      className="rounded-xl p-5"
                      style={{
                        backgroundColor: '#1A1A1A',
                        border: '1px solid rgba(255,255,255,0.08)',
                      }}
                    >
                      <p className="leading-relaxed" style={{ color: '#d1d5db', ...arabicFont }}>
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <ProductSectionBlock section={sectionById('ingredients')} arabicFont={arabicFont} headingFont={headingFont} />
              <ProductSectionBlock section={sectionById('preparation')} arabicFont={arabicFont} headingFont={headingFont} />
              <ProductSectionBlock section={sectionById('experience')} arabicFont={arabicFont} headingFont={headingFont} />
              <ProductSectionBlock section={sectionById('why-midyaji')} arabicFont={arabicFont} headingFont={headingFont} />

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#F8F6F1', ...headingFont }}
                >
                  {isRTL ? 'معرض المنتج' : 'Gallery'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {product.gallery.map((image, index) => (
                    <div key={`${image}-${index}`} className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={image}
                        alt={`${displayName} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-6"
                  style={{ color: '#F8F6F1', ...headingFont }}
                >
                  {isRTL ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
                </h2>
                <ProductFaqAccordion
                  faqs={faqs}
                  isRTL={isRTL}
                  arabicFont={arabicFont}
                />
              </section>

              {relatedPosts.length > 0 ? (
                <section>
                  <h2
                    className="text-2xl md:text-3xl font-bold mb-6"
                    style={{ color: '#F8F6F1', ...headingFont }}
                  >
                    {isRTL ? 'مقالات مرتبطة' : 'Related Guides'}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {relatedPosts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/${locale}/blog/${post.slug}`}
                        className="rounded-2xl p-5 transition-opacity hover:opacity-80"
                        style={{
                          backgroundColor: '#1A1A1A',
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] mb-3" style={{ color: '#B58B47' }}>
                          {post.category}
                        </p>
                        <h3 className="text-lg font-bold mb-2" style={{ color: '#F8F6F1', ...headingFont }}>
                          {post.title}
                        </h3>
                        <p className="text-sm leading-relaxed" style={{ color: '#9ca3af', ...arabicFont }}>
                          {post.excerpt}
                        </p>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </div>

            <aside>
              <div
                className="rounded-2xl p-6 sticky top-28"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <ProductOrderButton dict={dict} isRTL={isRTL} />
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <Link
                    href={`/${locale}`}
                    className="py-3 rounded-xl text-sm font-medium text-center transition-opacity hover:opacity-70"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F8F6F1', ...arabicFont }}
                  >
                    {dict.nav.home}
                  </Link>
                  <Link
                    href={`/${locale}/faq`}
                    className="py-3 rounded-xl text-sm font-medium text-center transition-opacity hover:opacity-70"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F8F6F1', ...arabicFont }}
                  >
                    {dict.nav.faq}
                  </Link>
                  <Link
                    href={`/${locale}/contact`}
                    className="col-span-2 py-3 rounded-xl text-sm font-medium text-center transition-opacity hover:opacity-70"
                    style={{ border: '1px solid rgba(255,255,255,0.15)', color: '#F8F6F1', ...arabicFont }}
                  >
                    {dict.nav.contact}
                  </Link>
                </div>
                <div className="mt-6 pt-6 space-y-5" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  {[
                    { label: dict.product.ingredients, items: ingredients },
                    { label: dict.product.allergens, items: allergens },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <h3
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: '#B58B47', ...arabicFont }}
                      >
                        {label}
                      </h3>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li
                            key={item}
                            className="text-sm flex items-start gap-2"
                            style={{ color: '#9ca3af' }}
                          >
                            <span style={{ color: '#E51E2A', flexShrink: 0 }}>•</span>
                            <span style={arabicFont}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div>
                    <h3
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: '#B58B47', ...arabicFont }}
                    >
                      {dict.product.serving}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#9ca3af', ...arabicFont }}>
                      {serving}
                    </p>
                  </div>
                  <Link
                    href={`/${locale}/menu`}
                    className="block w-full py-3 rounded-xl text-sm font-medium text-center transition-opacity hover:opacity-70"
                    style={{ backgroundColor: '#E51E2A', color: '#fff', ...arabicFont }}
                  >
                    {dict.product.viewMenu}
                  </Link>
                </div>
              </div>
            </aside>
          </div>

          <RelatedProducts
            related={related}
            locale={locale}
            isRTL={isRTL}
            dict={dict}
            headingFont={headingFont}
          />
        </main>
      </div>
    </>
  )
}
