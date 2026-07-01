import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getPageFonts } from '@/lib/utils/fonts'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { breadcrumbSchema, graphSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { AboutHero } from './sections/AboutHero'
import { AboutStory } from './sections/AboutStory'
import { AboutMission } from './sections/AboutMission'
import { AboutValues } from './sections/AboutValues'
import { AboutCta } from './sections/AboutCta'

export async function AboutPage({ locale }: { locale: string }) {
  if (!isValidLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const isRTL = locale === 'ar'
  const ab = dict.about
  const { arabicFont, headingFont } = getPageFonts(isRTL)

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
            name: locale === 'ar' ? 'من نحن' : 'About',
            url: `${business.url}/${locale}/about`,
          },
          ]),
          webPageSchema({
            name: isRTL ? 'عن مضياجي باشا' : 'About Midyaji Basha',
            description: ab.heroSub,
            url: `${business.url}/${locale}/about`,
            locale: isRTL ? 'ar' : 'en',
          }),
        ])}
      />
      <AboutHero ab={ab} arabicFont={arabicFont} headingFont={headingFont} />
      <AboutStory ab={ab} arabicFont={arabicFont} headingFont={headingFont} />
      <AboutMission ab={ab} arabicFont={arabicFont} headingFont={headingFont} />
      <AboutValues ab={ab} arabicFont={arabicFont} headingFont={headingFont} />
      <AboutCta ab={ab} locale={locale} arabicFont={arabicFont} headingFont={headingFont} />
    </div>
  )
}
