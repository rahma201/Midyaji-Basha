"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import type { BlogPost } from "@/types";
import type { Dictionary } from "@/lib/i18n/en";
import { HoverGlow } from "@/components/shared/ui/HoverGlow";
import { FeaturedBlogCard } from "./FeaturedBlogCard";
import { getPageFonts } from "@/lib/utils/fonts";

export function BlogSearchSection({
  posts,
  dict,
  locale,
}: {
  posts: BlogPost[];
  dict: Dictionary;
  locale: string;
}) {
  const [query, setQuery] = useState("");
  const isRTL = locale === "ar";
  const { arabicFont, headingFont } = getPageFonts(isRTL);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return posts;
    return posts.filter((post) =>
      [post.title, post.excerpt, post.category]
        .join(" ")
        .toLowerCase()
        .includes(normalized),
    );
  }, [posts, query]);

  const [featured, ...rest] = filtered;
  const hasQuery = query.trim().length > 0;

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <section className="pt-36 pb-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <span
            className="inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] mb-5"
            style={{
              color: "#B58B47",
              backgroundColor: "rgba(181,139,71,0.08)",
              border: "1px solid rgba(181,139,71,0.24)",
              ...arabicFont,
            }}
          >
            {dict.blog.heroLabel}
          </span>
          <h1
            className="text-5xl md:text-6xl font-bold mb-5"
            style={{ color: "#F8F6F1", ...headingFont }}
          >
            {isRTL ? "المدونة" : "Our Blog"}
          </h1>
          <p
            className="text-lg max-w-2xl mx-auto mb-9 leading-8"
            style={{ color: "#9ca3af", ...arabicFont }}
          >
            {isRTL
              ? "اكتشف المقالات والأدلة وقصص الطعام التركي من ميديجي باشا."
              : "Discover stories, guides, and Turkish food insights from Midyaji Basha."}
          </p>
          <div className="relative max-w-2xl mx-auto">
            <Search
              className="absolute top-1/2 h-5 w-5 -translate-y-1/2"
              style={{
                color: "#B58B47",
                insetInlineStart: 22,
              }}
              aria-hidden="true"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={isRTL ? "ابحث في المقالات..." : "Search articles..."}
              className="w-full rounded-full py-5 text-base outline-none transition-colors focus:border-[#E51E2A]"
              style={{
                paddingInlineStart: 58,
                paddingInlineEnd: 24,
                backgroundColor: "rgba(26,26,26,0.72)",
                border: "1px solid rgba(248,246,241,0.12)",
                color: "#F8F6F1",
                boxShadow: "0 20px 70px rgba(0,0,0,0.28)",
                backdropFilter: "blur(20px)",
                ...arabicFont,
              }}
              aria-label={dict.blog.searchPlaceholder}
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-24 space-y-20">
        {filtered.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{
              backgroundColor: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2 className="text-2xl font-bold mb-3" style={{ color: "#F8F6F1", ...headingFont }}>
              {isRTL ? "لا توجد نتائج" : "No articles found"}
            </h2>
            <p style={{ color: "#9ca3af", ...arabicFont }}>
              {isRTL
                ? "جرّب البحث بكلمة أخرى أو امسح حقل البحث لعرض جميع المقالات."
                : "Try another keyword or clear the search field to see all articles."}
            </p>
          </div>
        ) : (
          <>
            {featured && !hasQuery ? (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "#B58B47", ...arabicFont }}
                  >
                    {dict.blog.featuredLabel}
                  </span>
                  <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
                </div>
                <FeaturedBlogCard post={featured} dict={dict} locale={locale} />
              </div>
            ) : null}

            <div>
              <div className="flex items-center gap-3 mb-8">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "#B58B47", ...arabicFont }}
                >
                  {hasQuery ? (isRTL ? "نتائج البحث" : "Search Results") : dict.blog.latestLabel}
                </span>
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.07)" }} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {(hasQuery ? filtered : rest).map((post) => (
                  <HoverGlow key={post.slug} className="h-full rounded-2xl">
                    <Link
                      href={`/${locale}/blog/${post.slug}`}
                      className="premium-hover-glow group rounded-2xl overflow-hidden flex flex-col h-full"
                      style={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <span
                          className="text-xs font-semibold uppercase tracking-widest mb-2"
                          style={{ color: "#E51E2A", ...arabicFont }}
                        >
                          {post.category}
                        </span>
                        <h3
                          className="text-lg font-bold mb-2 leading-snug flex-1 transition-colors duration-300"
                          style={{ color: "#F8F6F1", ...headingFont }}
                        >
                          {post.title}
                        </h3>
                        <p className="text-sm leading-6 mb-4" style={{ color: "#9ca3af", ...arabicFont }}>
                          {post.excerpt.length > 132 ? `${post.excerpt.slice(0, 129)}...` : post.excerpt}
                        </p>
                        <div className="locale-meta-row mt-auto text-xs" style={{ color: "#6b7280" }}>
                          <span style={arabicFont}>{post.readingTime}</span>
                          <span>·</span>
                          <span className="locale-inline" style={arabicFont}>
                            {dict.blog.readMore} <span className="locale-arrow">→</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </HoverGlow>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
