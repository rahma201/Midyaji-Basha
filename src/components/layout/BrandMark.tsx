import Image from 'next/image'
import Link from 'next/link'

interface BrandMarkProps {
  href: string
  locale?: string
  className?: string
}

export function BrandMark({ href, locale = 'en', className = '' }: BrandMarkProps) {
  const isRTL = locale === 'ar'

  return (
    <Link href={href} dir={isRTL ? 'rtl' : 'ltr'} className={`brand-lockup flex items-center gap-3 leading-none ${className}`}>
      <span className="brand-logo">
        <Image
          src="/logo.png"
          alt={isRTL ? 'شعار ميديجي باشا' : 'Midyaji Basha logo'}
          width={42}
          height={42}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="flex flex-col">
        <span
          className="text-xl font-bold tracking-wide"
          style={{ fontFamily: isRTL ? 'var(--font-arabic), sans-serif' : 'var(--font-playfair), serif', color: '#F8F6F1' }}
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
