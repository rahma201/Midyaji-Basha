import { notFound } from "next/navigation";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { LocaleHero } from "@/components/locale/LocaleHero";
import { LocaleBrandStory } from "@/components/locale/LocaleBrandStory";
import { LocaleMenuPreview } from "@/components/locale/LocaleMenuPreview";
import { LocaleBlogPreview } from "@/components/locale/LocaleBlogPreview";
import { LocaleWhySection } from "@/components/locale/LocaleWhySection";
import { LocaleGEOSection } from "@/components/locale/LocaleGEOSection";
import { LocaleFAQSection } from "@/components/locale/LocaleFAQSection";
import { LocaleFinalCTA } from "@/components/locale/LocaleFinalCTA";
import { LocaleTurkishStreetFood } from "@/components/locale/LocaleTurkishStreetFood";
import { LocaleMusselsAuthority } from "@/components/locale/LocaleMusselsAuthority";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { graphSchema, restaurantSchema } from "@/lib/seo/schema";

export default async function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = locale === "ar" ? ar : en;

  return (
    <>
      <SchemaJsonLd data={graphSchema([restaurantSchema()])} />
      <LocaleHero dict={dict} locale={locale} />
      <LocaleBrandStory dict={dict} locale={locale} />
      <LocaleMenuPreview dict={dict} locale={locale} />
      <LocaleBlogPreview dict={dict} locale={locale} />
      <LocaleWhySection dict={dict} locale={locale} />
      <LocaleMusselsAuthority locale={locale} />
      <LocaleTurkishStreetFood locale={locale} />
      <LocaleGEOSection dict={dict} locale={locale} />
      <LocaleFAQSection dict={dict} locale={locale} />
      <LocaleFinalCTA dict={dict} locale={locale} />
    </>
  );
}
