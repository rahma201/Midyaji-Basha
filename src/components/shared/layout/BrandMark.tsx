import Image from 'next/image'
import Link from 'next/link'
import { getPageFonts } from '@/lib/utils/fonts'

interface BrandMarkProps {
  href: string
  locale?: string
  className?: string
}

export function BrandMark({ href, locale = 'en', className = '' }: BrandMarkProps) {
  const isRTL = locale === 'ar'
  const { headingFont } = getPageFonts(isRTL)

  return (
    <Link href={href} dir={isRTL ? 'rtl' : 'ltr'} className={`brand-lockup flex items-center gap-3 leading-none ${className}`}>
      <span className="brand-logo">
        <Image
          src="/logo.png"
          alt={isRTL ? 'شعار ميديجي باشا' : 'Midyaji Basha logo'}
          width={42}
          height={42}
          className="h-full w-full object-contain"
        />
      </span>
      <span className="flex flex-col">
        <span
          className="text-xl font-bold tracking-wide"
          style={{ ...headingFont, color: '#F8F6F1' }}
        >
          {isRTL ? 'ميديجي باشا' : 'MIDYAJI BASHA'}
        </span>
        <span className="text-xs tracking-widest" style={{ color: '#B58B47' }}>
          {isRTL ? 'MIDYAJI BASHA' : 'ميديجي باشا'}
        </span>
      </span>
    </Link>
  )
}
