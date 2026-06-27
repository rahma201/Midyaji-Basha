import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { getProductBySlug, getRelatedProducts } from "@/lib/data/products";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { breadcrumbSchema, imageObject } from "@/lib/seo/schema";
import { business } from "@/lib/seo/business";
import { ProductOrderButton } from "@/components/locale/ProductOrderButton";
import { HoverGlow } from "@/components/ui/HoverGlow";

export function generateStaticParams() {
  const slugs = ["stuffed-mussels", "cig-kofte", "yalanci", "turkish-wraps"];
  return ["en", "ar"].flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  const isAr = locale === "ar";
  const name = isAr && product.nameAr ? product.nameAr : product.name;
  return {
    title: name,
    description: product.description,
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/menu/${slug}`,
      languages: {
        en: `https://midyajibasha.com/en/menu/${slug}`,
        ar: `https://midyajibasha.com/ar/menu/${slug}`,
      },
    },
  };
}

export default async function LocaleProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!isValidLocale(locale)) notFound();
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const dict = locale === "ar" ? ar : en;
  const related = getRelatedProducts(slug);
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };
  const displayName = isRTL && product.nameAr ? product.nameAr : product.name;

  const itemSchema = {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    name: displayName,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price.replace(" JD", ""),
      priceCurrency: "JOD",
      availability: "https://schema.org/InStock",
    },
    image: imageObject(product.image, displayName),
  };

  return (
    <>
      <SchemaJsonLd data={itemSchema} />
      <SchemaJsonLd
        data={breadcrumbSchema([
          {
            name: locale === "ar" ? "الرئيسية" : "Home",
            url: `${business.url}/${locale}`,
          },
          {
            name: locale === "ar" ? "قائمة الطعام" : "Menu",
            url: `${business.url}/${locale}/menu`,
          },
          { name: displayName, url: `${business.url}/${locale}/menu/${slug}` },
        ])}
      />
      <div style={{ backgroundColor: "#0D0D0D" }} dir={isRTL ? "rtl" : "ltr"}>
        {/* Hero */}
        <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
          <Image
            src={product.image}
            alt={displayName}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.9) 100%)",
            }}
          />
          <div className="absolute bottom-10 inset-x-0 px-4">
            <div className="max-w-7xl mx-auto">
              <Link
                href={`/${locale}/menu`}
                className="locale-inline text-sm mb-4 transition-opacity hover:opacity-70"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                {dict.product.backToMenu}
              </Link>
              <h1
                className="text-4xl md:text-6xl font-bold mb-2"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {displayName}
              </h1>
              <span
                className="inline-block text-2xl font-bold px-4 py-1.5 rounded-full"
                style={{ backgroundColor: "#E51E2A", color: "white" }}
              >
                {product.price}
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <p
                className="text-lg leading-relaxed"
                style={{ color: "#9ca3af", ...arabicFont }}
              >
                {product.description}
              </p>
              <div
                className="text-base leading-relaxed whitespace-pre-line"
                style={{ color: "#9ca3af", ...arabicFont }}
              >
                {product.longDescription}
              </div>

              {/* FAQ */}
              {product.faqs && product.faqs.length > 0 && (
                <div>
                  <h2
                    className="text-2xl font-bold mb-6"
                    style={{ color: "#F8F6F1", ...headingFont }}
                  >
                    {isRTL ? "أسئلة شائعة" : "Frequently Asked Questions"}
                  </h2>
                  <Accordion.Root
                    type="single"
                    collapsible
                    className="space-y-3"
                    dir={isRTL ? "rtl" : "ltr"}
                  >
                    {product.faqs.map((faq, i) => (
                      <Accordion.Item
                        key={i}
                        value={`faq-${i}`}
                        className="rounded-xl overflow-hidden"
                        style={{
                          backgroundColor: "#1A1A1A",
                          border: "1px solid rgba(255,255,255,0.07)",
                        }}
                      >
                        <Accordion.Header>
                          <Accordion.Trigger
                            className="faq-trigger flex w-full items-center px-6 py-4 text-sm font-semibold [&[data-state=open]>svg]:rotate-180 hover:opacity-80 focus-visible:outline-none"
                            style={{ color: "#F8F6F1", ...arabicFont }}
                          >
                            <span className="faq-question">{faq.question}</span>
                            <ChevronDown
                              className="w-4 h-4 flex-shrink-0 transition-transform duration-300"
                              style={{ color: "#B58B47" }}
                              aria-hidden="true"
                            />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                          <p
                            className="faq-answer px-6 pb-4 pt-2 text-sm leading-relaxed"
                            style={{ color: "#9ca3af", ...arabicFont }}
                          >
                            {faq.answer}
                          </p>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div
                className="rounded-2xl p-6 sticky top-28"
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <ProductOrderButton dict={dict} isRTL={isRTL} />
                <Link
                  href={`/${locale}/menu`}
                  className="block w-full py-3 rounded-xl text-sm font-medium text-center transition-opacity hover:opacity-70"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "#F8F6F1",
                    ...arabicFont,
                  }}
                >
                  {dict.product.viewMenu}
                </Link>
                <div
                  className="mt-6 pt-6 space-y-5"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {[
                    {
                      label: dict.product.ingredients,
                      items: product.ingredients,
                    },
                    { label: dict.product.allergens, items: product.allergens },
                  ].map(({ label, items }) => (
                    <div key={label}>
                      <h3
                        className="text-xs font-semibold uppercase tracking-widest mb-2"
                        style={{ color: "#B58B47", ...arabicFont }}
                      >
                        {label}
                      </h3>
                      <ul className="space-y-1">
                        {items.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm flex items-start gap-2"
                            style={{ color: "#9ca3af" }}
                          >
                            <span style={{ color: "#E51E2A", flexShrink: 0 }}>
                              •
                            </span>
                            <span style={arabicFont}>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div>
                    <h3
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#B58B47", ...arabicFont }}
                    >
                      {dict.product.serving}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#9ca3af", ...arabicFont }}
                    >
                      {product.serving}
                    </p>
                  </div>
                  <div>
                    <h3
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: "#B58B47", ...arabicFont }}
                    >
                      {dict.product.nutritionNote}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "#6b7280", ...arabicFont }}
                    >
                      {dict.product.nutritionText}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-20">
            <h2
              className="text-2xl font-bold mb-8"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {dict.product.relatedTitle}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((p) => {
                const relName = isRTL && p.nameAr ? p.nameAr : p.name;
                return (
                  <HoverGlow key={p.slug} className="h-full rounded-2xl">
                    <Link
                      href={`/${locale}/menu/${p.slug}`}
                      className="premium-hover-glow group rounded-2xl overflow-hidden block h-full"
                      style={{
                        backgroundColor: "#1A1A1A",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={p.image}
                          alt={relName}
                          fill
                          className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                          sizes="33vw"
                        />
                      </div>
                      <div className="p-4" dir={isRTL ? "rtl" : "ltr"}>
                        <h3
                          className="font-bold mb-1 transition-colors duration-300"
                          style={{ color: "#F8F6F1", ...headingFont }}
                        >
                          {relName}
                        </h3>
                        <p className="text-xs" style={{ color: "#B58B47" }}>
                          {p.price}
                        </p>
                      </div>
                    </Link>
                  </HoverGlow>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
