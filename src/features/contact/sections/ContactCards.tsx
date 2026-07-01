import {
  MapPin,
  Phone,
  MessageCircle,
  Camera,
  PlayCircle,
  Clock,
} from 'lucide-react'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import { business } from '@/lib/seo/business'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

const contactIcons = {
  location: MapPin,
  phone: Phone,
  whatsapp: MessageCircle,
  instagram: Camera,
  youtube: PlayCircle,
  hours: Clock,
}
const contactHrefs: Record<string, string | null> = {
  location: business.mapUrl,
  phone: `tel:${business.phoneIntl}`,
  whatsapp: `https://wa.me/${business.phoneIntl.replace('+', '')}`,
  instagram: business.sameAs[0],
  youtube: 'https://www.youtube.com/@MidyajiBasha',
  hours: null,
}

interface Props {
  c: Dictionary['contact']
  isRTL: boolean
  arabicFont: React.CSSProperties
}

export function ContactCards({ c, isRTL, arabicFont }: Props) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {(Object.keys(c.cards) as Array<keyof typeof c.cards>).map((key) => {
          const card = c.cards[key]
          const Icon = contactIcons[key]
          const href = contactHrefs[key]
          const content = (
            <HoverGlow
              className={`premium-hover-glow rounded-2xl p-6 h-full flex items-center gap-5 ${isRTL ? 'flex-row-reverse' : 'flex-row'}`}
              style={{
                backgroundColor: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(181,139,71,0.15)' }}
              >
                <Icon
                  className="w-5 h-5"
                  style={{ color: '#B58B47' }}
                  aria-hidden="true"
                />
              </div>
              <div className={isRTL ? 'text-right' : 'text-left'}>
                <p
                  className="text-xs uppercase tracking-widest font-semibold mb-1"
                  style={{ color: '#B58B47', ...arabicFont }}
                >
                  {card.title}
                </p>
                <p
                  className="text-sm font-medium"
                  style={{ color: '#F8F6F1', ...arabicFont }}
                >
                  {card.value}
                </p>
              </div>
            </HoverGlow>
          )
          return href ? (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {content}
            </a>
          ) : (
            <div key={key}>{content}</div>
          )
        })}
      </div>
    </section>
  )
}
