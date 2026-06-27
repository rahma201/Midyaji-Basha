import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { products } from "@/lib/data/products";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { business } from "@/lib/seo/business";
import { faqSchema, menuSchema } from "@/lib/seo/schema";
import { HoverGlow } from "@/components/ui/HoverGlow";
import { SignatureStuffedMusselsSection } from "@/components/locale/SignatureStuffedMusselsSection";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

function signatureStuffedMusselsFaq(locale: string) {
  if (locale === "ar") {
    return [
      {
        question: "ما هو ميدي دولما؟",
        answer:
          "ميدي دولما هو محار تركي محشي بالأرز المتبّل ويُقدّم مع الليمون. وهو من أشهر أكلات الشارع في إسطنبول.",
      },
      {
        question: "كيف يُقدّم؟",
        answer:
          "يُقدّم داخل الصدفة مع ليمون طازج. تعصر الليمون فوق الأرز وتتناوله مباشرة من الصدفة.",
      },
      {
        question: "هل هو حار؟",
        answer:
          "نكهته عطرية أكثر من كونها حارة. الطعم يأتي من البهارات التركية الدافئة والأرز والمحار الطازج والليمون.",
      },
      {
        question: "كم قطعة أطلب؟",
        answer:
          "عادة يبدأ الضيف بتجربة حصة واحدة، ثم يطلب المزيد عند المشاركة. للمجموعات ننصح بطلب عدة حصص ليعيش الجميع الطقس كاملاً.",
      },
    ];
  }

  return [
    {
      question: "What is Midye Dolma?",
      answer:
        "Midye Dolma is Turkish stuffed mussels filled with seasoned rice and served with lemon. It is one of Istanbul's most iconic street foods.",
    },
    {
      question: "How is it served?",
      answer:
        "It is served in the shell with fresh lemon. You squeeze lemon over the rice and eat the mussel directly from the shell.",
    },
    {
      question: "Is it spicy?",
      answer:
        "It is aromatic rather than hot. The flavor comes from warm Turkish spices, rice, fresh mussels, and lemon.",
    },
    {
      question: "How many pieces should I order?",
      answer:
        "First-time guests usually start with one serving, then add more if sharing. For groups, order multiple servings so everyone gets the full ritual.",
    },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "قائمتنا | مضياجي باشا" : "Menu | Midyaji Basha",
    description: isAr
      ? "استكشف قائمة مضياجي باشا: ميدي دولما، تشيغ كوفتة، يالانجي، ولفائف تركية."
      : "Explore Midyaji Basha menu: Midye Dolma, Çiğ Köfte, Yalancı, and Turkish Wraps.",
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/menu`,
      languages: {
        en: "https://midyajibasha.com/en/menu",
        ar: "https://midyajibasha.com/ar/menu",
      },
    },
  };
}

export default async function LocaleMenuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = locale === "ar" ? ar : en;
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <>
      <SchemaJsonLd data={menuSchema(locale as "en" | "ar")} />
      <SchemaJsonLd data={faqSchema(signatureStuffedMusselsFaq(locale))} />
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
        ])}
      />
      <div
        className="pt-32 pb-24 px-4"
        style={{ backgroundColor: "#0D0D0D" }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {dict.menu.badge}
            </span>
            <h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {dict.menu.pageTitle}
            </h1>
            <p
              className="text-xl mb-2"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {dict.menu.pageSubtitle}
            </p>
            <p
              className="text-base"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {dict.menu.pageDesc}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const displayName =
                isRTL && product.nameAr ? product.nameAr : product.name;
              return (
                <HoverGlow key={product.slug} className="h-full rounded-2xl">
                  <Link
                    href={`/${locale}/menu/${product.slug}`}
                    className="premium-hover-glow group rounded-2xl overflow-hidden block h-full"
                    style={{
                      backgroundColor: "#1A1A1A",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={product.image}
                        alt={displayName}
                        fill
                        className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="rtl-price-badge absolute top-4">
                        <span
                          className="text-sm font-bold px-3 py-1.5 rounded-full"
                          style={{ backgroundColor: "#E51E2A", color: "white" }}
                        >
                          {product.price}
                        </span>
                      </div>
                    </div>
                    <div className="p-6" dir={isRTL ? "rtl" : "ltr"}>
                      <h2
                        className="text-xl font-bold mb-2 transition-colors duration-300"
                        style={{ color: "#F8F6F1", ...headingFont }}
                      >
                        {displayName}
                      </h2>
                      <p
                        className="text-sm leading-relaxed mb-4"
                        style={{ color: "#9ca3af", ...arabicFont }}
                      >
                        {product.description}
                      </p>
                      <span
                        className="locale-inline text-sm font-semibold"
                        style={{ color: "#B58B47", ...arabicFont }}
                      >
                        {dict.menu.viewDetails} <span className="locale-arrow">→</span>
                      </span>
                    </div>
                  </Link>
                </HoverGlow>
              );
            })}
          </div>
          <SignatureStuffedMusselsSection locale={locale} dict={dict} />
        </div>
      </div>
    </>
  );
}
