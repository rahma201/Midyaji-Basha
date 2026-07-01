import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import { ContactForm } from '@/components/shared/forms/ContactForm'
import { business } from '@/lib/seo/business'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  c: Dictionary['contact']
  dict: Dictionary
  isRTL: boolean
  arabicFont: React.CSSProperties
  headingFont: React.CSSProperties
}

export function ContactMapForm({ c, dict, isRTL, arabicFont, headingFont }: Props) {
  return (
    <section className="py-16 px-4" style={{ backgroundColor: '#1A1A1A' }}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {c.mapTitle}
          </h2>
          <HoverGlow
            className="premium-hover-glow rounded-2xl min-h-[320px] p-8 flex flex-col justify-between"
            style={{
              backgroundColor: '#0D0D0D',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div>
              <MapPin
                className="w-10 h-10 mb-6"
                style={{ color: '#E51E2A' }}
                aria-hidden="true"
              />
              <p
                className="text-sm leading-7 max-w-md"
                style={{ color: '#d1d5db', ...arabicFont }}
              >
                {isRTL
                  ? 'افتح موقع مضياجي باشا على خرائط جوجل للحصول على الاتجاهات الحالية. راسلنا على واتساب قبل الزيارة لتأكيد التوفر.'
                  : 'Open Midyaji Basha on Google Maps for current directions. Message us on WhatsApp before visiting to confirm availability.'}
              </p>
            </div>
            <div className="w-full">
              <iframe
                title={isRTL ? 'خريطة مضياجي باشا' : 'Midyaji Basha map'}
                src={business.mapEmbedUrl}
                loading="lazy"
                className="w-full h-56 rounded-md border"
                style={{ border: '0' }}
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="mt-4">
                <Link
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="locale-inline text-sm font-semibold"
                  style={{ color: '#F8F6F1', ...arabicFont }}
                >
                  {isRTL ? 'فتح خرائط جوجل' : 'Open Google Maps'}
                  <ArrowUpRight className="locale-arrow w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </HoverGlow>
        </div>
        <div>
          <h2
            className="text-2xl font-bold mb-6"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {c.formTitle}
          </h2>
          <ContactForm dict={dict} isRTL={isRTL} />
        </div>
      </div>
    </section>
  )
}
