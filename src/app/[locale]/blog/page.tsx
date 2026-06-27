import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { blogPosts } from "@/lib/data/blog-posts";
import { LocaleBlogSearchSection } from "@/components/locale/LocaleBlogSearchSection";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "المدونة | مضياجي باشا" : "Blog | Midyaji Basha",
    description: isAr
      ? "مقالات عن الأكل التركي في الشوارع، ميدي دولما، وثقافة المطبخ التركي في الأردن."
      : "Articles about Turkish street food, Midye Dolma, and Turkish culinary culture in Jordan.",
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/blog`,
      languages: {
        en: "https://midyajibasha.com/en/blog",
        ar: "https://midyajibasha.com/ar/blog",
      },
    },
  };
}

export default async function LocaleBlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = locale === "ar" ? ar : en;
  return (
    <div style={{ backgroundColor: "#0D0D0D" }} dir={locale === "ar" ? "rtl" : "ltr"}>
      <LocaleBlogSearchSection posts={blogPosts} dict={dict} locale={locale} />
    </div>
  );
}
