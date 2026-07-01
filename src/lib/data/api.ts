import type { BlogPost, Product } from '@/types'
import { normalizeProductSlug } from './products'

// Blog
//
// TODO (Phase 3): Replace static import with Feelstack API call:
//   const API = process.env.NEXT_PUBLIC_API_URL ?? 'https://feelstack.dfeelings.com/api'
//   const res = await fetch(`${API}/posts/published?projectId=midyaji`, {
//     next: { revalidate: 60, tags: ['blog'] }
//   })
//   return res.json()

export async function getBlogPosts(): Promise<BlogPost[]> {
  const { blogPosts } = await import('./blog-posts')
  return blogPosts
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug) ?? null
}

export async function getRelatedBlogPosts(
  currentSlug: string,
  limit = 3,
): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.slug !== currentSlug).slice(0, limit)
}

// Products

export async function getProducts(): Promise<Product[]> {
  const { products } = await import('./products')
  return products
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getProducts()
  const normalizedSlug = normalizeProductSlug(slug)
  return products.find((product) => product.slug === normalizedSlug) ?? null
}

export async function getRelatedProducts(
  currentSlug: string,
  limit = 3,
): Promise<Product[]> {
  const products = await getProducts()
  const normalizedSlug = normalizeProductSlug(currentSlug)
  return products
    .filter((product) => product.slug !== normalizedSlug)
    .slice(0, limit)
}
