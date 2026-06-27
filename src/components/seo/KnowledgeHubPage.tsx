import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SchemaJsonLd } from '@/components/schema/SchemaJsonLd'
import { HoverGlow } from '@/components/ui/HoverGlow'
import { business } from '@/lib/seo/business'
import { articleSchema, breadcrumbSchema, faqSchema, graphSchema } from '@/lib/seo/schema'
import { hubContent, type HubLocale } from '@/lib/seo/knowledge-hub'

export function KnowledgeHubPage({ locale, canonicalPath }: { locale: HubLocale; canonicalPath: string }) {
  const content = hubContent[locale]
  const isRTL = locale === 'ar'
  const homeHref = locale === 'ar' ? '/ar' : '/en'
  const url = `${business.url}${canonicalPath}`
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: 'var(--font-arabic), sans-serif' }
    : { fontFamily: 'var(--font-playfair), serif' }
  const bodyFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}

  const schema = graphSchema([
    breadcrumbSchema([
      { name: locale === 'ar' ? 'الرئيسية' : 'Home', url: `${business.url}${homeHref}` },
      { name: content.eyebrow, url },
    ]),
    articleSchema({
      title: content.title,
      description: content.description,
      url,
      locale,
    }),
    faqSchema(content.faqs),
  ])

  return (
    <main dir={isRTL ? 'rtl' : 'ltr'} style={{ backgroundColor: '#0D0D0D' }}>
      <SchemaJsonLd data={schema} />
      <article>
        <section className="relative overflow-hidden pt-36 pb-20 px-4">
          <div className="absolute inset-0 opacity-35" style={{ background: 'radial-gradient(circle at 50% 20%, rgba(229,30,42,0.32), transparent 36%)' }} />
          <div className={`relative max-w-4xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <nav aria-label={isRTL ? 'مسار الصفحة' : 'Breadcrumb'} className="mb-8 text-sm" style={{ color: '#9ca3af', ...bodyFont }}>
              <Link href={homeHref} className="footer-link">{isRTL ? 'الرئيسية' : 'Home'}</Link>
              <span className="mx-2">/</span>
              <span style={{ color: '#B58B47' }}>{content.eyebrow}</span>
            </nav>
            <p className="text-sm font-semibold mb-5" style={{ color: '#B58B47', ...bodyFont }}>{content.eyebrow}</p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-balance" style={{ color: '#F8F6F1', ...headingFont }}>
              {content.title}
            </h1>
            <p className="mt-7 text-lg md:text-xl leading-9 max-w-3xl text-pretty" style={{ color: '#d1d5db', ...bodyFont }}>
              {content.intro}
            </p>
          </div>
        </section>

        <section className="px-4 pb-16">
          <div className={`max-w-4xl mx-auto space-y-14 ${isRTL ? 'text-right' : ''}`}>
            {content.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl md:text-3xl font-bold mb-5 text-balance" style={{ color: '#F8F6F1', ...headingFont }}>
                  {section.heading}
                </h2>
                <div className="space-y-5">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base md:text-lg leading-8 text-pretty" style={{ color: '#c9c9c9', ...bodyFont }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="px-4 py-14" style={{ backgroundColor: '#141414' }}>
          <div className={`max-w-5xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#F8F6F1', ...headingFont }}>
              {isRTL ? 'روابط مفيدة داخل الموقع' : 'Helpful internal guides'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {content.links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <HoverGlow className={`premium-hover-glow rounded-2xl p-5 flex items-center justify-between gap-4 h-full ${isRTL ? 'flex-row-reverse' : ''}`} style={{ backgroundColor: '#0D0D0D', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span className="font-semibold" style={{ color: '#F8F6F1', ...bodyFont }}>{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 flex-shrink-0" style={{ color: '#E51E2A' }} aria-hidden="true" />
                  </HoverGlow>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className={`max-w-4xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            <h2 className="text-2xl md:text-3xl font-bold mb-8" style={{ color: '#F8F6F1', ...headingFont }}>
              {isRTL ? 'أسئلة شائعة' : 'Frequently asked questions'}
            </h2>
            <div className="space-y-4">
              {content.faqs.map((item) => (
                <HoverGlow key={item.question} className="premium-hover-glow rounded-2xl p-6" style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}>
                  <h3 className="text-lg font-bold mb-3" style={{ color: '#F8F6F1', ...headingFont }}>{item.question}</h3>
                  <p className="leading-8" style={{ color: '#d1d5db', ...bodyFont }}>{item.answer}</p>
                </HoverGlow>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
