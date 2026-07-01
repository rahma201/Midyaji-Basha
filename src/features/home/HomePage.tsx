import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { faqSchema, graphSchema, restaurantSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { HeroSection } from './sections/HeroSection'
import { BrandStorySection } from './sections/BrandStorySection'
import { MenuPreviewSection } from './sections/MenuPreviewSection'
import { BlogPreviewSection } from './sections/BlogPreviewSection'
import { WhySection } from './sections/WhySection'
import { MusselsAuthoritySection } from './sections/MusselsAuthoritySection'
import { TurkishStreetFoodSection } from './sections/TurkishStreetFoodSection'
import { GeoSection } from './sections/GeoSection'
import { FaqSection } from './sections/FaqSection'
import { FinalCtaSection } from './sections/FinalCtaSection'

export async function HomePage({ locale }: { locale: string }) {
  if (!isValidLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const isAr = locale === 'ar'

  return (
    <>
      <SchemaJsonLd
        data={graphSchema([
          restaurantSchema(),
          webPageSchema({
            name: isAr
              ? 'ملك المحار التركي الأصلي | ميديجي باشا'
              : 'The Original Turkish Mussel King | Midyaji Basha',
            description: isAr
              ? 'ميديجي باشا مطعم أكل تركي في عمّان يركّز على المحار، ميدي دولما، فتة يالنجي، وتشيغ كوفتة.'
              : 'Midyaji Basha is a Turkish street food restaurant in Amman focused on mussels, Midye Dolma, Fatteh Yalanji, and Çiğ Köfte.',
            url: `${business.url}/${locale}`,
            locale: isAr ? 'ar' : 'en',
          }),
          faqSchema(dict.faq.items.map((item) => ({
            question: item.q,
            answer: item.a,
          }))),
        ])}
      />
      <HeroSection dict={dict} locale={locale} />
      <BrandStorySection dict={dict} locale={locale} />
      <MenuPreviewSection dict={dict} locale={locale} />
      <BlogPreviewSection dict={dict} locale={locale} />
      <WhySection dict={dict} locale={locale} />
      <MusselsAuthoritySection locale={locale} />
      <TurkishStreetFoodSection locale={locale} />
      <GeoSection dict={dict} locale={locale} />
      <FaqSection dict={dict} locale={locale} />
      <FinalCtaSection dict={dict} locale={locale} />
    </>
  )
}
