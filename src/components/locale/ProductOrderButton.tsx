'use client'
import { useState } from 'react'
import { LocaleOrderModal } from '@/components/ui/LocaleOrderModal'
import type { Dictionary } from '@/lib/i18n/en'
import { HoverGlow } from '@/components/ui/HoverGlow'

export function ProductOrderButton({ dict, isRTL }: { dict: Dictionary; isRTL: boolean }) {
  const [open, setOpen] = useState(false)
  const arabicFont: React.CSSProperties = isRTL ? { fontFamily: 'var(--font-arabic), sans-serif' } : {}
  return (
    <>
      <HoverGlow className="mb-4 rounded-xl">
        <button onClick={() => setOpen(true)} className="premium-button-glow w-full py-4 rounded-xl font-semibold text-white" style={{ backgroundColor: '#E51E2A', ...arabicFont }}>
          {dict.product.orderNow}
        </button>
      </HoverGlow>
      <LocaleOrderModal open={open} onOpenChange={setOpen} dict={dict.orderModal} />
    </>
  )
}
