import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/types";
import type { Dictionary } from "@/lib/i18n/en";
import { HoverGlow } from "@/components/ui/HoverGlow";

export function LocaleFeaturedBlogCard({
  post,
  dict,
  locale,
}: {
  post: BlogPost;
  dict: Dictionary;
  locale: string;
}) {
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <HoverGlow className="rounded-2xl">
      <Link
        href={`/${locale}/blog/${post.slug}`}
        className="premium-hover-glow group grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "#1A1A1A",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="relative aspect-video lg:aspect-auto overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="p-8 flex flex-col justify-center" dir={isRTL ? "rtl" : "ltr"}>
          <span
            className="inline-block w-fit text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full"
            style={{
              backgroundColor: "rgba(229,30,42,0.15)",
              color: "#E51E2A",
              ...arabicFont,
            }}
          >
            {post.category}
          </span>
          <h2
            className="text-2xl md:text-3xl font-bold mb-3 leading-snug transition-colors duration-300"
            style={{ color: "#F8F6F1", ...headingFont }}
          >
            {post.title}
          </h2>
          <p
            className="text-sm leading-relaxed mb-6"
            style={{ color: "#9ca3af", ...arabicFont }}
          >
            {post.excerpt}
          </p>
          <div className="locale-meta-row gap-4 text-xs mb-6" style={{ color: "#6b7280" }}>
            <span style={arabicFont}>
              {dict.blog.by} {post.author}
            </span>
            <span>·</span>
            <span style={arabicFont}>{post.readingTime}</span>
          </div>
          <span
            className="premium-button-glow locale-inline w-fit rounded-xl px-6 py-3 text-sm font-semibold"
            style={{ backgroundColor: "#E51E2A", color: "white", ...arabicFont }}
          >
            {dict.blog.readMore} <span className="locale-arrow">→</span>
          </span>
        </div>
      </Link>
    </HoverGlow>
  );
}
