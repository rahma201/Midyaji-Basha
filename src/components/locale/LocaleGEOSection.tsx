import { Reveal } from '@/components/ui/Reveal'
import type { Dictionary } from '@/lib/i18n/en'

export function LocaleGEOSection({ dict, locale }: { dict: Dictionary; locale: string }) {
  const isRTL = locale === 'ar'
  const arabicFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}
  const headingFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : { fontFamily: 'var(--font-playfair), serif' }
  const g = dict.geo

  return (
    <section className="py-24 px-4" style={{ backgroundColor: '#0D0D0D' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 ${isRTL ? '' : ''}`}>
          <Reveal delay={0.05}><span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4" style={{ color: '#B58B47', ...arabicFont }}>{g.badge}</span></Reveal>
          <Reveal delay={0.15}>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#F8F6F1', ...headingFont }}>{g.title}</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto" style={{ color: '#9ca3af', ...arabicFont }}>{g.subtitle}</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            { label: g.what, title: g.whatTitle, desc: g.whatDesc },
            { label: g.where, title: g.whereTitle, desc: g.whereDesc },
            { label: g.why, title: g.whyTitle, desc: g.whyDesc },
          ].map(({ label, title, desc }) => (
            <Reveal key={label} delay={0.1}>
              <div className="rounded-2xl p-8 text-center h-full" style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="text-4xl font-bold mb-3" style={{ color: '#E51E2A', ...headingFont }}>{label}</div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#F8F6F1', ...headingFont }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#9ca3af', ...arabicFont }}>{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(181,139,71,0.2)' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#F8F6F1', ...headingFont }}>{g.servesTitle}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {g.products.map((item) => (
                <div key={item.name} className={isRTL ? 'locale-text-start' : 'text-center'}>
                  <h4 className="font-bold text-lg mb-2" style={{ color: '#F8F6F1', ...headingFont }}>{item.name}</h4>
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: '#9ca3af', ...arabicFont }}>{item.desc}</p>
                  <span className="text-sm font-bold" style={{ color: '#B58B47' }}>{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
