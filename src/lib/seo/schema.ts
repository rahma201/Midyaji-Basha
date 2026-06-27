import { products } from "@/lib/data/products";
import { business } from "@/lib/seo/business";

type JsonLd = Record<string, unknown>;

const id = (fragment: string) => `${business.url}/#${fragment}`;
const absoluteUrl = (url: string) =>
  url.startsWith("http") ? url : `${business.url}${url}`;

export function imageObject(
  url = business.ogImage,
  name = `${business.name} image`,
): JsonLd {
  const absoluteImageUrl = absoluteUrl(url);
  return {
    "@type": "ImageObject",
    "@id": `${absoluteImageUrl}#image`,
    url: absoluteImageUrl,
    contentUrl: absoluteImageUrl,
    name,
  };
}

export function contactPoint(): JsonLd {
  return {
    "@type": "ContactPoint",
    telephone: business.phoneIntl,
    email: business.email,
    contactType: "customer service",
    areaServed: "JO",
    availableLanguage: ["English", "Arabic"],
  };
}

export function organizationSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": id("organization"),
    name: business.name,
    alternateName: business.nameAr,
    url: business.url,
    logo: imageObject(business.logo, `${business.name} logo`),
    image: imageObject(),
    email: business.email,
    telephone: business.phoneIntl,
    sameAs: business.sameAs,
    contactPoint: contactPoint(),
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": id("website"),
    name: business.name,
    url: business.url,
    publisher: { "@id": id("organization") },
    inLanguage: ["en", "ar"],
    potentialAction: {
      "@type": "SearchAction",
      target: `${business.url}/en/blog?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function restaurantSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["Restaurant", "LocalBusiness"],
    "@id": id("restaurant"),
    name: business.name,
    alternateName: business.nameAr,
    description:
      "Midyaji Basha is a Turkish street food restaurant in Amman, Jordan focused on mussels, Turkish stuffed mussels, Fatteh Yalanji, and Çiğ Köfte.",
    url: business.url,
    telephone: business.phoneIntl,
    email: business.email,
    logo: imageObject(business.logo, `${business.name} logo`),
    image: imageObject(),
    sameAs: business.sameAs,
    contactPoint: contactPoint(),
    menu: business.menuUrl,
    servesCuisine: business.cuisine,
    priceRange: business.priceRange,
    hasMap: business.mapUrl,
    areaServed: [
      { "@type": "City", name: business.targetCity },
      { "@type": "Country", name: business.targetCountry },
    ],
    knowsAbout: [
      "Mussels",
      "المحار",
      "Turkish Stuffed Mussels",
      "Midye Dolma",
      "Turkish Cuisine",
      "Turkish Street Food",
      "Seafood",
      "Fatteh Yalanji",
      "Çiğ Köfte",
      "Amman",
      "Jordan",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address?.street,
      addressLocality: business.address?.city,
      addressRegion: business.address?.region,
      postalCode: business.address?.postalCode,
      addressCountry: business.address?.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    openingHoursSpecification: (
      (business.openingHours || []) as Array<{
        day: string;
        opens: string;
        closes: string;
      }>
    ).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.opens,
      closes: h.closes,
    })),
    currenciesAccepted: business.currenciesAccepted,
    paymentAccepted: business.paymentAccepted,
  };
}

export function menuSchema(locale: "en" | "ar" = "en"): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": `${business.url}/${locale}/menu#menu`,
    name: locale === "ar" ? "قائمة ميديجي باشا" : "Midyaji Basha Menu",
    inLanguage: locale,
    hasMenuSection: [
      {
        "@type": "MenuSection",
        name:
          locale === "ar"
            ? "أطباق المحار والأكل التركي"
            : "Mussels and Turkish Street Food",
        hasMenuItem: products.map((product) => ({
          "@type": "MenuItem",
          name:
            locale === "ar" && product.nameAr ? product.nameAr : product.name,
          description: product.description,
          image: absoluteUrl(product.image),
          offers: {
            "@type": "Offer",
            price: Number(product.price.replace(" JD", "")),
            priceCurrency: "JOD",
            availability: "https://schema.org/InStock",
          },
        })),
      },
    ],
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(
  items: Array<{ question: string; answer: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function articleSchema({
  title,
  description,
  url,
  image = business.ogImage,
  locale,
  datePublished,
  dateModified,
  keywords = [],
  wordCount,
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  locale: "en" | "ar";
  datePublished?: string;
  dateModified?: string;
  keywords?: string[];
  wordCount?: number;
}): JsonLd {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    image: absoluteUrl(image),
    inLanguage: locale,
    author: { "@id": id("organization") },
    publisher: { "@id": id("organization") },
    mainEntityOfPage: url,
  };

  if (datePublished) schema.datePublished = datePublished;
  if (dateModified) schema.dateModified = dateModified;
  if (keywords.length > 0) schema.keywords = keywords;
  if (wordCount) schema.wordCount = wordCount;

  return schema;
}

export function graphSchema(items: JsonLd[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@graph": items.map((source) => {
      const item = { ...source };
      delete item["@context"];
      return item;
    }),
  };
}
