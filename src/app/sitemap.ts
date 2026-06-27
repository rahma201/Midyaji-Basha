import { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { blogPosts } from "@/lib/data/blog-posts";

const BASE = "https://midyajibasha.com";
const locales = ["en", "ar"] as const;

function localeUrl(
  locale: (typeof locales)[number],
  path: string,
  date?: Date,
) {
  return {
    url: `${BASE}/${locale}${path}`,
    lastModified: date ?? new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];

  // Core pages per locale
  for (const locale of locales) {
    urls.push(localeUrl(locale, ""));
    urls.push({
      ...localeUrl(locale, "/menu"),
      priority: 0.9,
      changeFrequency: "weekly",
    });
    urls.push({
      ...localeUrl(locale, "/blog"),
      priority: 0.8,
      changeFrequency: "weekly",
    });
    urls.push({
      ...localeUrl(locale, "/about"),
      priority: 0.7,
      changeFrequency: "monthly",
    });
    urls.push({
      ...localeUrl(locale, "/contact"),
      priority: 0.7,
      changeFrequency: "monthly",
    });
    urls.push({
      ...localeUrl(locale, "/faq"),
      priority: 0.7,
      changeFrequency: "monthly",
    });
    urls.push({
      ...localeUrl(locale, "/knowledge-hub"),
      priority: 0.9,
      changeFrequency: "weekly",
    });
  }

  // Locale product pages
  for (const locale of locales) {
    for (const p of products) {
      urls.push({
        url: `${BASE}/${locale}/menu/${p.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }
  }

  // Locale blog pages
  for (const locale of locales) {
    for (const b of blogPosts) {
      urls.push({
        url: `${BASE}/${locale}/blog/${b.slug}`,
        lastModified: new Date(b.date),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return urls;
}
