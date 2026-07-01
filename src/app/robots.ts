import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/en/knowledge-hub', '/ar/knowledge-hub'],
    },
    sitemap: 'https://midyajibasha.com/sitemap.xml',
  }
}
