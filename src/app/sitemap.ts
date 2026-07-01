import type { MetadataRoute } from "next";
import { getBlogPosts, getProducts } from "@/lib/data/api";

const BASE = "https://midyajibasha.com";
const locales = ["en", "ar"] as const;

type Locale = (typeof locales)[number];

function makeEntry(
  locale: Locale,
  path: string,
  options: {
    priority?: number;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    lastModified?: Date;
  } = {},
): MetadataRoute.Sitemap[number] {
  const otherLocale = locale === "en" ? "ar" : "en";

  return {
    url: `${BASE}/${locale}${path}`,
    lastModified: options.lastModified ?? new Date(),
    changeFrequency: options.changeFrequency ?? "weekly",
    priority: options.priority ?? 0.8,
    alternates: {
      languages: {
        [locale]: `${BASE}/${locale}${path}`,
        [otherLocale]: `${BASE}/${otherLocale}${path}`,
        "x-default": `${BASE}/en${path}`,
      },
    },
  };
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, products] = await Promise.all([getBlogPosts(), getProducts()]);
  const urls: MetadataRoute.Sitemap = [];

  const corePages = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/menu", priority: 0.95, changeFrequency: "weekly" as const },
    { path: "/guides", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/blog", priority: 0.85, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/faq", priority: 0.75, changeFrequency: "monthly" as const },
  ];

  for (const locale of locales) {
    for (const page of corePages) {
      urls.push(
        makeEntry(locale, page.path, {
          priority: page.priority,
          changeFrequency: page.changeFrequency,
        }),
      );
    }

    for (const product of products) {
      urls.push(
        makeEntry(locale, `/menu/${product.slug}`, {
          priority: 0.85,
          changeFrequency: "monthly",
        }),
      );
    }

    for (const post of posts) {
      urls.push(
        makeEntry(locale, `/blog/${post.slug}`, {
          priority: 0.7,
          changeFrequency: "monthly",
          lastModified: new Date(post.date),
        }),
      );
    }
  }

  return urls;
}
