import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ backgroundColor: '#0D0D0D' }}>
      <div className="text-center max-w-lg">
        <p className="text-8xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif', color: '#E51E2A' }}>404</p>
        <h1 className="text-3xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif', color: '#F8F6F1' }}>
          Page Not Found
        </h1>
        <p className="mb-8" style={{ color: '#9ca3af' }}>
          The page you are looking for doesn&apos;t exist. Perhaps you were looking for our menu or food guides?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/en" className="px-8 py-4 rounded-xl font-semibold text-white transition-all hover:opacity-90" style={{ backgroundColor: '#E51E2A' }}>
            Go Home
          </Link>
          <Link href="/en/menu" className="px-8 py-4 rounded-xl font-semibold transition-all hover:opacity-80" style={{ border: '1px solid rgba(255,255,255,0.2)', color: '#F8F6F1' }}>
            View Menu
          </Link>
        </div>
      </div>
    </div>
  )
}
