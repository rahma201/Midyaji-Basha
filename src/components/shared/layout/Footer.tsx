import Link from 'next/link'
import { MapPin, Clock, Camera, PlayCircle } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/en'
import { BrandMark } from '@/components/shared/layout/BrandMark'
import { business } from '@/lib/seo/business'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import { getPageFonts } from '@/lib/utils/fonts'

export function Footer({ locale, dict }: { locale: string; dict: Dictionary }) {
  const isRTL = locale === 'ar'
  const { arabicFont, headingFont } = getPageFonts(isRTL)

  const links = [
    { href: `/${locale}`, label: dict.nav.home },
    { href: `/${locale}/menu`, label: dict.nav.menu },
    { href: `/${locale}/blog`, label: dict.nav.blog },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/faq`, label: dict.nav.faq },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ]

  return (
    <footer style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid rgba(255,255,255,0.07)' }} dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 locale-text-start">

          {/* Brand */}
          <div>
            <BrandMark href={`/${locale}`} locale={locale} className="mb-5" />
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#d1d5db', ...arabicFont }}>{dict.footer.tagline}</p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm" style={{ color: '#d1d5db' }}>
                <MapPin className="w-4 h-4 flex-shrink-0" style={{ color: '#B58B47' }} aria-hidden="true" />
                <span style={arabicFont}>{dict.footer.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: '#d1d5db' }}>
                <Clock className="w-4 h-4 flex-shrink-0" style={{ color: '#B58B47' }} aria-hidden="true" />
                <span style={arabicFont}>{dict.footer.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: '#B58B47', ...arabicFont }}>{dict.footer.quickLinks}</h3>
            <nav className="space-y-3">
              {links.map((l) => (
                <div key={l.href}>
                  <Link href={l.href} className="footer-link text-sm" style={arabicFont}>{l.label}</Link>
                </div>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: '#B58B47', ...arabicFont }}>{dict.footer.follow}</h3>
            <div className="space-y-3">
              <a href={business.sameAs[0]} target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-3 text-sm" style={arabicFont}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1A1A1A' }}>
                  <Camera className="w-4 h-4" aria-hidden="true" />
                </span>
                <span style={arabicFont}>@midyaji.basha</span>
              </a>
              <a href="https://www.youtube.com/@MidyajiBasha" target="_blank" rel="noopener noreferrer" className="footer-link flex items-center gap-3 text-sm" style={arabicFont}>
                <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#1A1A1A' }}>
                  <PlayCircle className="w-4 h-4" aria-hidden="true" />
                </span>
                <span style={arabicFont}>@MidyajiBasha</span>
              </a>
            </div>
          </div>
        </div>

        <div
          className="mb-12 rounded-2xl p-6 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-5 locale-text-start"
          style={{
            backgroundColor: '#1A1A1A',
            border: '1px solid rgba(181,139,71,0.18)',
          }}
        >
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F8F6F1', ...headingFont }}>
              {dict.footer.questionsTitle}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: '#9ca3af', ...arabicFont }}>
              {dict.footer.questionsText}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <HoverGlow as="span" className="rounded-xl">
              <Link
                href={`/${locale}/faq`}
                className="premium-button-glow block rounded-xl px-5 py-3 text-sm font-semibold text-center"
                style={{ color: '#F8F6F1', border: '1px solid rgba(229,30,42,0.35)', backgroundColor: 'rgba(229,30,42,0.08)', ...arabicFont }}
              >
                {dict.nav.faq}
              </Link>
            </HoverGlow>
            <HoverGlow as="span" className="rounded-xl">
              <Link
                href={`/${locale}/contact`}
                className="premium-button-glow block rounded-xl px-5 py-3 text-sm font-semibold text-center"
                style={{ color: '#0D0D0D', backgroundColor: '#B58B47', ...arabicFont }}
              >
                {dict.nav.contact}
              </Link>
            </HoverGlow>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center sm:justify-between gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <p className="text-xs" style={{ color: '#9ca3af', ...arabicFont }}>{dict.footer.rights}</p>
          <p className="text-xs" style={{ color: '#9ca3af', ...arabicFont }}>{dict.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  )
}
