'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { X, MessageCircle, Camera, PlayCircle } from 'lucide-react'
import type { Dictionary } from '@/lib/i18n/en'
import { business } from '@/lib/seo/business'

type ModalDict = Dictionary['orderModal']

export function LocaleOrderModal({ open, onOpenChange, dict }: { open: boolean; onOpenChange: (v: boolean) => void; dict: ModalDict }) {
  const isRTL = dict.title === 'اطلب الآن'
  const directionalFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 w-full max-w-md rounded-2xl p-8 shadow-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          style={{ backgroundColor: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)' }}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <Dialog.Close className="absolute top-4 rounded-full p-2 opacity-70 hover:opacity-100 focus:outline-none" style={{ color: '#F8F6F1', insetInlineEnd: 16 }}>
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Dialog.Close>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: isRTL ? 'var(--font-arabic), sans-serif' : 'var(--font-playfair), serif', color: '#F8F6F1' }}>{dict.title}</h2>
            <p style={{ color: '#9ca3af', ...directionalFont }}>{dict.subtitle}</p>
          </div>
          <div className="space-y-4">
            <a href={`https://wa.me/${business.phoneIntl.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full rounded-xl p-4 hover:scale-105 transition-transform" style={{ backgroundColor: '#25D366' }}>
              <MessageCircle className="w-8 h-8 text-white flex-shrink-0" />
              <div style={{ textAlign: 'start', ...directionalFont }}>
                <div className="font-semibold text-white text-lg">{dict.whatsappLabel}</div>
                <div className="text-green-100 text-sm">{dict.whatsappSub}</div>
              </div>
            </a>
            <a href={business.sameAs[0]} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full rounded-xl p-4 hover:scale-105 transition-transform" style={{ background: 'linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)' }}>
              <Camera className="w-8 h-8 text-white flex-shrink-0" />
              <div style={{ textAlign: 'start', ...directionalFont }}>
                <div className="font-semibold text-white text-lg">{dict.instaLabel}</div>
                <div className="text-pink-100 text-sm">{dict.instaSub}</div>
              </div>
            </a>
            <a href="https://www.youtube.com/@MidyajiBasha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 w-full rounded-xl p-4 hover:scale-105 transition-transform" style={{ backgroundColor: '#010101' }}>
              <PlayCircle className="w-8 h-8 text-white flex-shrink-0" />
              <div style={{ textAlign: 'start', ...directionalFont }}>
                <div className="font-semibold text-white text-lg">{dict.youtubeLabel}</div>
                <div className="text-gray-400 text-sm">{dict.youtubeSub}</div>
              </div>
            </a>
          </div>
          <p className="text-center mt-6 text-sm" style={{ color: '#9ca3af', ...directionalFont }}>{dict.hours}<br />{dict.location}</p>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
