import { KnowledgeHubPage } from '@/components/shared/seo/KnowledgeHubPage'
import type { HubLocale } from '@/lib/seo/knowledge-hub'

export function GuidesPage({ locale }: { locale: string }) {
  return (
    <KnowledgeHubPage
      locale={locale as HubLocale}
      canonicalPath={`/${locale}/guides`}
    />
  )
}
