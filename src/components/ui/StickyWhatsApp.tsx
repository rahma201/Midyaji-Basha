'use client'
import { MessageCircle } from 'lucide-react'
import { business } from '@/lib/seo/business'

export function StickyWhatsApp() {
  return (
    <a
      href={`https://wa.me/${business.phoneIntl.replace('+', '')}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-whatsapp fixed bottom-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  )
}
