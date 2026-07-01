import Image from 'next/image'
import Link from 'next/link'
import { HoverGlow } from '@/components/shared/ui/HoverGlow'
import { getPageFonts } from '@/lib/utils/fonts'
import type { Dictionary } from '@/lib/i18n/en'
import type { Product } from '@/types'

interface Props {
  product: Product
  dict: Dictionary
  locale: string
}

export function ProductCard({ product, dict, locale }: Props) {
  const isRTL = locale === 'ar'
  const { arabicFont, headingFont } = getPageFonts(isRTL)
  const arabicName = product.nameAr ?? product.name

  return (
    <HoverGlow className="h-full rounded-2xl">
      <Link
        href={`/${locale}/menu/${product.slug}`}
        className="premium-hover-glow group rounded-2xl overflow-hidden block h-full"
        style={{
          backgroundColor: '#1A1A1A',
          border: '1px solid rgba(255,255,255,0.07)',
        }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={product.image}
            alt={`${product.name} - ${arabicName}`}
            fill
            className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="rtl-price-badge absolute top-4">
            <span
              className="text-sm font-bold px-3 py-1.5 rounded-full"
              style={{ backgroundColor: '#E51E2A', color: 'white' }}
            >
              {product.price}
            </span>
          </div>
        </div>
        <div className="p-6" dir={isRTL ? 'rtl' : 'ltr'}>
          <h2
            className="text-xl font-bold mb-1 transition-colors duration-300"
            style={{ color: '#F8F6F1', ...headingFont }}
          >
            {product.name}
          </h2>
          <p
            lang="ar"
            dir="rtl"
            className="mb-4 text-lg font-semibold"
            style={{ color: '#F8F6F1', ...arabicFont }}
          >
            {arabicName}
          </p>
          <p
            className="text-sm leading-relaxed mb-3"
            style={{ color: '#9ca3af' }}
          >
            {product.description}
          </p>
          <p
            lang="ar"
            dir="rtl"
            className="text-sm leading-relaxed mb-5"
            style={{ color: '#9ca3af', ...arabicFont }}
          >
            {product.descriptionAr}
          </p>
          <span
            className="locale-inline text-sm font-semibold"
            style={{ color: '#B58B47', ...arabicFont }}
          >
            {dict.menu.viewDetails} <span className="locale-arrow">→</span>
          </span>
        </div>
      </Link>
    </HoverGlow>
  )
}
