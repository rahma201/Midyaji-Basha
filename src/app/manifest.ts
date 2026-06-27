import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Midyaji Basha',
    short_name: 'Midyaji Basha',
    description: 'The Original Turkish Mussel King at Mecca Mall, Amman.',
    start_url: '/en',
    display: 'standalone',
    background_color: '#0D0D0D',
    theme_color: '#E51E2A',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
