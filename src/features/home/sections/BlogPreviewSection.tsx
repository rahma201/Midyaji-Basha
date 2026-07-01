import Link from "next/link";
import { Reveal } from "@/components/shared/ui/Reveal";
import { getFeaturedPost } from "@/lib/data/blog-posts";
import type { Dictionary } from "@/lib/i18n/en";
import { FeaturedBlogCard } from "@/features/blog/components/FeaturedBlogCard";
import { getPageFonts } from "@/lib/utils/fonts";

export function BlogPreviewSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const featuredPost = getFeaturedPost();
  const isRTL = locale === "ar";
  const { arabicFont, headingFont } = getPageFonts(isRTL);

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

        <FeaturedBlogCard post={featuredPost} dict={dict} locale={locale} />
      </div>
    </section>
  );
}
