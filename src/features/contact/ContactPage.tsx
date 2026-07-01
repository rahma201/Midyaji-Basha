import { notFound } from 'next/navigation'
import { isValidLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/getDictionary'
import { getPageFonts } from '@/lib/utils/fonts'
import { SchemaJsonLd } from '@/components/shared/schema/SchemaJsonLd'
import { graphSchema, restaurantSchema, breadcrumbSchema, webPageSchema } from '@/lib/seo/schema'
import { business } from '@/lib/seo/business'
import { ContactHero } from './sections/ContactHero'
import { ContactCards } from './sections/ContactCards'
import { ContactMapForm } from './sections/ContactMapForm'

export async function ContactPage({ locale }: { locale: string }) {
  if (!isValidLocale(locale)) notFound()
  const dict = await getDictionary(locale)
  const isRTL = locale === 'ar'
  const c = dict.contact
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
              name: locale === 'ar' ? 'اتصل بنا' : 'Contact',
              url: `${business.url}/${locale}/contact`,
            },
          ]),
          restaurantSchema(),
          webPageSchema({
            name: isRTL ? 'اتصل بنا | مضياجي باشا' : 'Contact | Midyaji Basha',
            description: c.heroSub,
            url: `${business.url}/${locale}/contact`,
            locale: isRTL ? 'ar' : 'en',
          }),
        ])}
      />
      <ContactHero c={c} arabicFont={arabicFont} headingFont={headingFont} />
      <ContactCards c={c} isRTL={isRTL} arabicFont={arabicFont} />
      <ContactMapForm c={c} dict={dict} isRTL={isRTL} arabicFont={arabicFont} headingFont={headingFont} />
    </div>
  )
}
