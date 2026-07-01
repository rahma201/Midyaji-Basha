import Image from 'next/image'
import Link from 'next/link'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import type { Product } from '@/types'
import type { Dictionary } from '@/lib/i18n/en'
import type React from 'react'

interface Props {
  related: Product[]
  locale: string
  isRTL: boolean
  dict: Dictionary
  headingFont: React.CSSProperties
}

export function RelatedProducts({ related, locale, isRTL, dict, headingFont }: Props) {
  return (
    <div className="mt-20">
      <h2
        className="text-2xl font-bold mb-8"
        style={{ color: '#F8F6F1', ...headingFont }}
      >
        {dict.product.relatedTitle}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {related.map((p) => {
          const relName = isRTL && p.nameAr ? p.nameAr : p.name
          return (
            <HoverGlow key={p.slug} className="h-full rounded-2xl">
              <Link
                href={`/${locale}/menu/${p.slug}`}
                className="premium-hover-glow group rounded-2xl overflow-hidden block h-full"
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={relName}
                    fill
                    className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                    sizes="33vw"
                  />
                </div>
                <div className="p-4" dir={isRTL ? 'rtl' : 'ltr'}>
                  <h3
                    className="font-bold mb-1 transition-colors duration-300"
                    style={{ color: '#F8F6F1', ...headingFont }}
                  >
                    {relName}
                  </h3>
                  <p className="text-xs" style={{ color: '#B58B47' }}>
                    {p.price}
                  </p>
                </div>
              </Link>
            </HoverGlow>
          )
        })}
      </div>
    </div>
  )
}
