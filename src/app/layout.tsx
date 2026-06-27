import type { Metadata } from "next";
import {
  Playfair_Display,
  Inter,
  IBM_Plex_Sans_Arabic,
} from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { RootChrome } from "@/components/layout/RootChrome";
import { business, seoKeywords } from "@/lib/seo/business";
import {
  graphSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schema";
import { cookies, headers } from "next/headers";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://midyajibasha.com"),
  title: {
    template: "%s | The Original Turkish Mussel King",
    default: "The Original Turkish Mussel King | Midyaji Basha",
  },
  description:
    "Midyaji Basha is a Turkish street food restaurant in Amman, Jordan focused on mussels, Midye Dolma, Fatteh Yalanji, and Çiğ Köfte.",
  keywords: [...seoKeywords],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: business.url,
    siteName: business.name,
    title: "The Original Turkish Mussel King | Midyaji Basha",
    description:
      "A destination for mussels and authentic Turkish street food in Amman, Jordan.",
    images: [
      {
        url: business.ogImage,
        width: 1200,
        height: 630,
        alt: "The Original Turkish Mussel King | Midyaji Basha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Original Turkish Mussel King | Midyaji Basha",
    description:
      "Fresh Turkish stuffed mussels and street food at Mecca Mall, Amman.",
    images: [business.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://midyajibasha.com/en",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Use the proxy-provided locale signal to determine document attributes.
  const cookieStore = await cookies();
  const headersList = await headers();
  const headerLocale = headersList.get("x-midyaji-locale");
  const localeCookie = headerLocale || cookieStore.get("locale")?.value || "en";
  const normalizedLocale = localeCookie === "ar" ? "ar" : "en";
  const dir = normalizedLocale === "ar" ? "rtl" : "ltr";
  return (
    <html
      lang={normalizedLocale}
      dir={dir}
      className={`${playfair.variable} ${inter.variable} ${ibmArabic.variable}`}
    >
      <head>
        <link
          rel="alternate"
          hrefLang="en"
          href="https://midyajibasha.com/en"
        />
        <link
          rel="alternate"
          hrefLang="ar"
          href="https://midyajibasha.com/ar"
        />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://midyajibasha.com/en"
        />
      </head>
      <body dir={dir}>
        <SchemaJsonLd
          data={graphSchema([organizationSchema(), websiteSchema()])}
        />
        <ScrollProgress />
        <SmoothScrollProvider>
          <RootChrome>{children}</RootChrome>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
