import type { Metadata } from 'next'
import { MenuItemPage } from '@/features/menu'
import { getProducts } from '@/lib/data/api'
import { buildMenuItemMetadata } from '@/lib/seo/metadata/menu-item'

export async function generateStaticParams() {
  const products = await getProducts()
  return ['en', 'ar'].flatMap((locale) =>
    products.map((product) => ({ locale, slug: product.slug })),
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  return buildMenuItemMetadata(locale, slug)
}

export default async function LocaleProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}) {
  const { locale, slug } = await params
  return <MenuItemPage locale={locale} slug={slug} />
}
