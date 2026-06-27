import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, getDir } from "@/lib/i18n/config";

import { StickyWhatsApp } from "@/components/ui/StickyWhatsApp";
import { LocaleNavbar } from "@/components/layout/LocaleNavbar";
import { LocaleFooter } from "@/components/layout/LocaleFooter";
import { business, seoKeywords } from "@/lib/seo/business";

export async function generateStaticParams() {
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
    metadataBase: new URL("https://midyajibasha.com"),
    title: {
      template: isAr
        ? "%s | ملك المحار التركي الأصلي"
        : "%s | The Original Turkish Mussel King",
      default: isAr
        ? "ملك المحار التركي الأصلي | ميديجي باشا"
        : "The Original Turkish Mussel King | Midyaji Basha",
    },
    description: isAr
      ? "ميديجي باشا مطعم أكل تركي في عمّان يركّز على المحار، ميدي دولما، فتة يالنجي، وتشيغ كوفتة."
      : "Midyaji Basha is a Turkish street food restaurant in Amman focused on mussels, Midye Dolma, Fatteh Yalanji, and Çiğ Köfte.",
    keywords: isAr
      ? [
          "ميديجي باشا",
          "ملك المحار التركي",
          "ميدي دولما عمان",
          "أكل تركي عمان",
          "مكة مول",
        ]
      : seoKeywords,
    alternates: {
      canonical: `https://midyajibasha.com/${locale}`,
      languages: {
        en: "https://midyajibasha.com/en",
        ar: "https://midyajibasha.com/ar",
      },
    },
    openGraph: {
      type: "website",
      locale: isAr ? "ar_JO" : "en_US",
      url: `https://midyajibasha.com/${locale}`,
      siteName: "Midyaji Basha",
      title: isAr
        ? "ملك المحار التركي الأصلي | ميديجي باشا"
        : "The Original Turkish Mussel King | Midyaji Basha",
      description: isAr
        ? "تجربة ميدي دولما وأكل تركي أصيل في مكة مول، عمّان."
        : "Fresh Midye Dolma and Turkish street food at Mecca Mall, Amman.",
      images: [
        {
          url: business.ogImage,
          width: 1200,
          height: 630,
          alt: isAr
            ? "ملك المحار التركي الأصلي | ميديجي باشا"
            : "The Original Turkish Mussel King | Midyaji Basha",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: isAr
        ? "ملك المحار التركي الأصلي | ميديجي باشا"
        : "The Original Turkish Mussel King | Midyaji Basha",
      images: [business.ogImage],
    },
    robots: { index: true, follow: true },
    icons: { icon: "/favicon.ico", apple: "/apple-icon.png" },
    manifest: "/manifest.webmanifest",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dir = getDir(locale);

  return (
    <div className="locale-shell" lang={locale} dir={dir}>
      <LocaleNavbar locale={locale} />
      <main>{children}</main>
      <LocaleFooter locale={locale} />
      <StickyWhatsApp />
    </div>
  );
}
