'use client'
import { useState } from 'react'
import { OrderModal } from '@/components/shared/ui/OrderModal'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import type { Dictionary } from '@/lib/i18n/en'
import { getPageFonts } from '@/lib/utils/fonts'

export function ProductOrderButton({ dict, isRTL }: { dict: Dictionary; isRTL: boolean }) {
  const [open, setOpen] = useState(false)
  const { arabicFont } = getPageFonts(isRTL)
  return (
    <>
      <HoverGlow className="mb-4 rounded-xl">
        <button onClick={() => setOpen(true)} data-cta="product-order" className="premium-button-glow w-full py-4 rounded-xl font-semibold text-white" style={{ backgroundColor: '#E51E2A', ...arabicFont }}>
          {dict.product.orderNow}
        </button>
      </HoverGlow>
      {open ? <OrderModal open={open} onOpenChange={setOpen} dict={dict.orderModal} /> : null}
    </>
  )
}
