import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Award, Leaf, Heart, Globe } from "lucide-react";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { Reveal, Stagger } from "@/components/ui/Reveal";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { business } from "@/lib/seo/business";

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
    title: isAr ? "من نحن | مضياجي باشا" : "About | Midyaji Basha",
    description: isAr
      ? "قصة مضياجي باشا — كيف جلبنا أصيل الأكل التركي في الشوارع إلى عمّان، الأردن."
      : "The story of Midyaji Basha — how we brought authentic Turkish street food to Amman, Jordan.",
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/about`,
      languages: {
        en: "https://midyajibasha.com/en/about",
        ar: "https://midyajibasha.com/ar/about",
      },
    },
  };
}

const icons = [Award, Leaf, Heart, Globe];

export default async function LocaleAboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = locale === "ar" ? ar : en;
  const isRTL = locale === "ar";
  const ab = dict.about;
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <div style={{ backgroundColor: "#0D0D0D" }} dir={isRTL ? "rtl" : "ltr"}>
      <SchemaJsonLd
        data={breadcrumbSchema([
          {
            name: locale === "ar" ? "الرئيسية" : "Home",
            url: `${business.url}/${locale}`,
          },
          {
            name: locale === "ar" ? "من نحن" : "About",
            url: `${business.url}/${locale}/about`,
          },
        ])}
      />
      {/* Hero */}
      <section className="pt-36 pb-24 px-4 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(229,30,42,0.06) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {ab.heroLabel}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {ab.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="text-lg" style={{ color: "#9ca3af", ...arabicFont }}>
              {ab.heroSub}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {ab.storyLabel}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              className="text-3xl md:text-4xl font-bold mb-10"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {ab.storyTitle}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {ab.storyParagraphs.map((para, i) => (
              <Reveal key={i} delay={0.1 + i * 0.08}>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "#9ca3af", ...arabicFont }}
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {ab.missionLabel}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {ab.missionTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {ab.missionContent}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Reveal delay={0.05}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                {ab.valuesLabel}
              </span>
            </Reveal>
            <Reveal delay={0.15}>
              <h2
                className="text-3xl md:text-4xl font-bold"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {ab.valuesTitle}
              </h2>
            </Reveal>
          </div>
          <Stagger
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            stagger={0.1}
          >
            {ab.values.map((val, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={val.title}
                  className="rounded-2xl p-8"
                  style={{
                    backgroundColor: "#0D0D0D",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(181,139,71,0.12)" }}
                  >
                    <Icon
                      className="w-5 h-5"
                      style={{ color: "#B58B47" }}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    className="text-xl font-bold mb-3"
                    style={{ color: "#F8F6F1", ...headingFont }}
                  >
                    {val.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#9ca3af", ...arabicFont }}
                  >
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <Reveal delay={0.1}>
          <h2
            className="text-3xl font-bold mb-8"
            style={{ color: "#F8F6F1", ...headingFont }}
          >
            {ab.ctaTitle}
          </h2>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={`/${locale}/menu`}
              className="px-8 py-4 rounded-xl text-base font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#E51E2A", ...arabicFont }}
            >
              {ab.ctaMenu}
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="px-8 py-4 rounded-xl text-base font-semibold transition-opacity hover:opacity-70"
              style={{
                border: "1.5px solid rgba(248,246,241,0.25)",
                color: "#F8F6F1",
                ...arabicFont,
              }}
            >
              {ab.ctaOrder}
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
