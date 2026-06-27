"use client";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedPost } from "@/lib/data/blog-posts";
import type { Dictionary } from "@/lib/i18n/en";
import { LocaleFeaturedBlogCard } from "@/components/locale/LocaleFeaturedBlogCard";

export function LocaleBlogPreview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const featuredPost = getFeaturedPost();
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#111111" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto">
        <div className="locale-section-row mb-16">
          <Reveal delay={0.05}>
            <div className="locale-text-start">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                {dict.blog.featuredLabel}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {dict.blog.latestLabel}
              </h2>
              <p className="mt-4 text-lg" style={{ color: "#9ca3af", ...arabicFont }}>
                {dict.blog.heroSub}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction={isRTL ? "right" : "left"}>
            <Link
              href={`/${locale}/blog`}
              className="locale-inline flex-shrink-0 text-sm font-semibold hover:opacity-80"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {dict.blog.viewFullJournal} <span className="locale-arrow">→</span>
            </Link>
          </Reveal>
        </div>

        <LocaleFeaturedBlogCard post={featuredPost} dict={dict} locale={locale} />
      </div>
    </section>
  );
}
