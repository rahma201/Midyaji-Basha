import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Camera,
  PlayCircle,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { ContactForm } from "@/components/locale/ContactForm";
import { HoverGlow } from "@/components/ui/HoverGlow";
import { business } from "@/lib/seo/business";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import {
  graphSchema,
  restaurantSchema,
  breadcrumbSchema,
} from "@/lib/seo/schema";

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
    title: isAr ? "اتصل بنا | مضياجي باشا" : "Contact | Midyaji Basha",
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/contact`,
      languages: {
        en: "https://midyajibasha.com/en/contact",
        ar: "https://midyajibasha.com/ar/contact",
      },
    },
  };
}

const contactIcons = {
  location: MapPin,
  phone: Phone,
  whatsapp: MessageCircle,
  instagram: Camera,
  youtube: PlayCircle,
  hours: Clock,
};
const contactHrefs: Record<string, string | null> = {
  location: business.mapUrl,
  phone: `tel:${business.phoneIntl}`,
  whatsapp: `https://wa.me/${business.phoneIntl.replace("+", "")}`,
  instagram: business.sameAs[0],
  youtube: "https://www.youtube.com/@MidyajiBasha",
  hours: null,
};

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = locale === "ar" ? ar : en;
  const isRTL = locale === "ar";
  const c = dict.contact;
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <div style={{ backgroundColor: "#0D0D0D" }} dir={isRTL ? "rtl" : "ltr"}>
      <SchemaJsonLd
        data={graphSchema([
          breadcrumbSchema([
            {
              name: locale === "ar" ? "الرئيسية" : "Home",
              url: `${business.url}/${locale}`,
            },
            {
              name: locale === "ar" ? "اتصل بنا" : "Contact",
              url: `${business.url}/${locale}/contact`,
            },
          ]),
          restaurantSchema(),
        ])}
      />
      {/* Hero */}
      <section className="pt-36 pb-16 px-4 text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
          style={{ color: "#B58B47", ...arabicFont }}
        >
          {c.heroLabel}
        </span>
        <h1
          className="text-5xl md:text-6xl font-bold mb-4"
          style={{ color: "#F8F6F1", ...headingFont }}
        >
          {c.heroTitle}
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ color: "#9ca3af", ...arabicFont }}
        >
          {c.heroSub}
        </p>
      </section>

      {/* Contact cards */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(Object.keys(c.cards) as Array<keyof typeof c.cards>).map((key) => {
            const card = c.cards[key];
            const Icon = contactIcons[key];
            const href = contactHrefs[key];
            const content = (
              <HoverGlow
                className={`premium-hover-glow rounded-2xl p-6 h-full flex items-center gap-5 ${isRTL ? "flex-row-reverse" : "flex-row"}`}
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "rgba(181,139,71,0.15)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "#B58B47" }}
                    aria-hidden="true"
                  />
                </div>
                <div className={isRTL ? "text-right" : "text-left"}>
                  <p
                    className="text-xs uppercase tracking-widest font-semibold mb-1"
                    style={{ color: "#B58B47", ...arabicFont }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-sm font-medium"
                    style={{ color: "#F8F6F1", ...arabicFont }}
                  >
                    {card.value}
                  </p>
                </div>
              </HoverGlow>
            );
            return href ? (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={key}>{content}</div>
            );
          })}
        </div>
      </section>

      {/* Map + Form */}
      <section className="py-16 px-4" style={{ backgroundColor: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {c.mapTitle}
            </h2>
            <HoverGlow
              className="premium-hover-glow rounded-2xl min-h-[320px] p-8 flex flex-col justify-between"
              style={{
                backgroundColor: "#0D0D0D",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <MapPin
                  className="w-10 h-10 mb-6"
                  style={{ color: "#E51E2A" }}
                  aria-hidden="true"
                />
                <p
                  className="text-sm leading-7 max-w-md"
                  style={{ color: "#d1d5db", ...arabicFont }}
                >
                  {isRTL
                    ? "افتح موقع مضياجي باشا على خرائط جوجل للحصول على الاتجاهات الحالية. راسلنا على واتساب قبل الزيارة لتأكيد التوفر."
                    : "Open Midyaji Basha on Google Maps for current directions. Message us on WhatsApp before visiting to confirm availability."}
                </p>
              </div>
              <div className="w-full">
                <iframe
                  title={isRTL ? "خريطة مضياجي باشا" : "Midyaji Basha map"}
                  src={business.mapEmbedUrl}
                  loading="lazy"
                  className="w-full h-56 rounded-md border"
                  style={{ border: "0" }}
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="mt-4">
                  <Link
                  href={business.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                    className="locale-inline text-sm font-semibold"
                    style={{ color: "#F8F6F1", ...arabicFont }}
                  >
                    {isRTL ? "فتح خرائط جوجل" : "Open Google Maps"}
                    <ArrowUpRight className="locale-arrow w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </HoverGlow>
          </div>
          <div>
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {c.formTitle}
            </h2>
            <ContactForm dict={dict} isRTL={isRTL} />
          </div>
        </div>
      </section>
    </div>
  );
}
