'use client'
import { MessageCircle } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { business } from '@/lib/seo/business'

export function StickyWhatsApp() {
  const pathname = usePathname()
  const isRTL = pathname.startsWith('/ar')

  return (
    <a
      href={`https://wa.me/${business.phoneIntl.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      data-cta="sticky-whatsapp"
      className="sticky-whatsapp fixed bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ backgroundColor: '#25D366' }}
      aria-label={isRTL ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
