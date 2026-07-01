import type { Dictionary } from './en'

export async function getDictionary(locale: string): Promise<Dictionary> {
  if (locale === 'ar') {
    const { ar } = await import('./ar')
    return ar
  }

  const { en } = await import('./en')
  return en
}
