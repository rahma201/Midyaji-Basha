import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { blogPosts } from "@/lib/data/blog-posts";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { HoverGlow } from "@/components/ui/HoverGlow";
import { articleSchema } from "@/lib/seo/schema";

export function generateStaticParams() {
  return ["en", "ar"].flatMap((locale) =>
    blogPosts.map((post) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/blog/${slug}`,
      languages: {
        en: `https://midyajibasha.com/en/blog/${slug}`,
        ar: `https://midyajibasha.com/ar/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image }],
      type: "article",
    },
  };
}

export default async function LocaleBlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const dict = locale === "ar" ? ar : en;
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SchemaJsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          url: `https://midyajibasha.com/${locale}/blog/${slug}`,
          image: post.image,
          locale,
          datePublished: post.date,
          dateModified: post.date,
          keywords: post.tags,
        })}
      />
      <div style={{ backgroundColor: "#0D0D0D" }} dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[360px] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,13,13,0.4), rgba(13,13,13,0.9))",
            }}
          />
          <div className="absolute bottom-10 inset-x-0 px-4">
            <div className="max-w-3xl mx-auto">
              <Link
                href={`/${locale}/blog`}
                className="locale-inline text-sm mb-4 transition-opacity hover:opacity-70"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                <span className="locale-arrow">←</span> {dict.blog.heroLabel}
              </Link>
              <div
                className="flex items-center gap-3 mb-3 text-xs"
                style={{ color: "#9ca3af" }}
              >
                <span
                  className="px-2 py-1 rounded-full"
                  style={{
                    backgroundColor: "rgba(229,30,42,0.2)",
                    color: "#E51E2A",
                    ...arabicFont,
                  }}
                >
                  {post.category}
                </span>
                <span>·</span>
                <span style={arabicFont}>{post.readingTime}</span>
                <span>·</span>
                <span style={arabicFont}>
                  {dict.blog.by} {post.author}
                </span>
              </div>
              <h1
                className="text-3xl md:text-5xl font-bold leading-snug"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article body */}
        <div className="max-w-3xl mx-auto px-4 py-16">
          <p
            className="text-lg leading-relaxed mb-8"
            style={{ color: "#9ca3af", ...arabicFont }}
          >
            {post.excerpt}
          </p>
          <div
            className="text-base leading-relaxed whitespace-pre-line"
            style={{ color: "#9ca3af", ...arabicFont }}
          >
            {post.content.replace(/#+\s/g, "").trim()}
          </div>
        </div>

        {/* Related posts */}
        <div className="max-w-7xl mx-auto px-4 pb-24">
          <div
            className="h-px mb-12"
            style={{ backgroundColor: "rgba(255,255,255,0.07)" }}
          />
          <h2
            className="text-2xl font-bold mb-8"
            style={{ color: "#F8F6F1", ...headingFont }}
          >
            {dict.blog.latestLabel}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <HoverGlow key={p.slug} className="h-full rounded-2xl">
                <Link
                  href={`/${locale}/blog/${p.slug}`}
                  className="premium-hover-glow group rounded-2xl overflow-hidden block h-full"
                  style={{
                    backgroundColor: "#1A1A1A",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                      sizes="33vw"
                    />
                  </div>
                  <div className="p-5">
                    <h3
                      className="font-bold text-sm leading-snug mb-1 transition-colors duration-300"
                      style={{ color: "#F8F6F1", ...headingFont }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-xs"
                      style={{ color: "#B58B47", ...arabicFont }}
                    >
                      {p.readingTime}
                    </p>
                  </div>
                </Link>
              </HoverGlow>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
