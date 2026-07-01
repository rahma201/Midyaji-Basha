import { HomePage } from '@/features/home'

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  return <HomePage locale={locale} />
}
