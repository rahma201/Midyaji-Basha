import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { arFaqItems, enFaqItems } from '@/lib/i18n/faq'
import { getPageFonts } from '@/lib/utils/fonts'
import { Reveal } from '@/components/shared/ui/Reveal'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { breadcrumbSchema, faqSchema, graphSchema, speakableSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { FaqAccordion } from './components/FaqAccordion'

export async function FaqPage({ locale }: { locale: string }) {
  if (!isValidLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const isRTL = locale === 'ar'
  const { arabicFont, headingFont } = getPageFonts(isRTL)
  const items = isRTL ? arFaqItems : enFaqItems

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
              name: locale === 'ar' ? 'الأسئلة الشائعة' : 'FAQ',
              url: `${business.url}/${locale}/faq`,
            },
          ]),
          faqSchema(items.map((item) => ({ question: item.q, answer: item.a }))),
          webPageSchema({
            name: isRTL ? 'أسئلة شائعة | مضياجي باشا' : 'FAQ | Midyaji Basha',
            description: dict.faqPage.heroSub,
            url: `${business.url}/${locale}/faq`,
            locale: isRTL ? 'ar' : 'en',
          }),
          speakableSchema(['h1', '.faq-question', '.faq-answer']),
        ])}
      />
      <div style={{ backgroundColor: '#0D0D0D' }} dir={isRTL ? 'rtl' : 'ltr'}>
        <section className="pt-36 pb-16 px-4 text-center">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: '#B58B47', ...arabicFont }}
            >
              {dict.faqPage.heroLabel}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: '#F8F6F1', ...headingFont }}
            >
              {dict.faqPage.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: '#9ca3af', ...arabicFont }}
            >
              {dict.faqPage.heroSub}
            </p>
          </Reveal>
        </section>
        <section className="pb-24 px-4">
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={items} isRTL={isRTL} />
          </div>
        </section>
      </div>
    </>
  )
}
