import Image from "next/image";
import Link from "next/link";
import { Reveal, Stagger } from "@/components/shared/ui/Reveal";
import { HoverGlow } from "@/components/shared/ui/HoverGlow";
import { products } from "@/lib/data/products";
import type { Dictionary } from "@/lib/i18n/en";
import { getPageFonts } from "@/lib/utils/fonts";
import { MenuPreviewOrderButton } from "./MenuPreviewOrderButton";

type HomepageProduct = Pick<
  (typeof products)[number],
  "slug" | "name" | "nameAr" | "price" | "description" | "descriptionAr" | "image"
>;

function LocaleProductCard({
  product,
  dict,
  locale,
}: {
  product: HomepageProduct;
  dict: Dictionary;
  locale: string;
}) {
  const isRTL = locale === "ar";
  const { arabicFont, headingFont } = getPageFonts(isRTL);
  const arabicName = product.nameAr ?? product.name;

  return (
    <>
      <HoverGlow className="h-full rounded-2xl">
        <div
          className="premium-hover-glow group relative rounded-2xl overflow-hidden flex flex-col h-full"
          style={{
            backgroundColor: "#0D0D0D",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={product.image}
              alt={`${product.name} - ${arabicName}`}
              fill
              className="object-cover transition-transform duration-400 ease-[cubic-bezier(.25,.46,.45,.94)] group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(13,13,13,0.7) 0%, transparent 60%)",
              }}
            />
            <div className="rtl-price-badge absolute top-4 z-10">
              <span
                className="text-sm font-bold px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "#E51E2A", color: "white" }}
              >
                {product.price}
              </span>
            </div>
          </div>
          <div className="p-6 flex flex-col flex-1" dir={isRTL ? "rtl" : "ltr"}>
            <h3
              className="text-xl font-bold mb-1 transition-colors duration-300"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {product.name}
            </h3>
            <p
              lang="ar"
              dir="rtl"
              className="mb-4 text-lg font-semibold"
              style={{ color: "#F8F6F1", ...arabicFont }}
            >
              {arabicName}
            </p>
            <p
              className="text-sm leading-relaxed mb-3"
              style={{ color: "#9ca3af" }}
            >
              {product.description}
            </p>
            <p
              lang="ar"
              dir="rtl"
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {product.descriptionAr}
            </p>
            <div className="locale-actions-row">
              <Link
                href={`/${locale}/menu/${product.slug}`}
                className="premium-button-glow flex-1 py-2.5 rounded-lg text-sm font-medium text-center transition-all hover:border-white/40"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "rgba(248,246,241,0.8)",
                  ...arabicFont,
                }}
              >
                {dict.menu.viewDetails}
              </Link>
              <MenuPreviewOrderButton
                label={dict.menu.orderNow}
                ctaId={`menu-preview-order-${product.slug}`}
                isRTL={isRTL}
                orderModal={dict.orderModal}
              />
            </div>
          </div>
        </div>
      </HoverGlow>
    </>
  );
}

export function MenuPreviewSection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const isRTL = locale === "ar";
  const { arabicFont, headingFont } = getPageFonts(isRTL);
  const homepageProducts: HomepageProduct[] = products
    .map(({ slug, name, nameAr, price, description, descriptionAr, image }) => ({
      slug,
      name,
      nameAr,
      price,
      description,
      descriptionAr,
      image,
    }));

  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#1A1A1A" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)",
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="locale-section-row mb-16">
          <Reveal delay={0.05}>
            <div className="locale-text-start">
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                {dict.menu.badge}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {dict.menu.title}
              </h2>
              <p
                className="mt-4 text-lg"
                style={{ color: "#9ca3af", ...arabicFont }}
              >
                {dict.menu.subtitle}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.2} direction={isRTL ? "right" : "left"}>
            <Link
              href={`/${locale}/menu`}
              className="locale-inline flex-shrink-0 text-sm font-semibold hover:opacity-80"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {dict.menu.viewFull} <span className="locale-arrow">→</span>
            </Link>
          </Reveal>
        </div>
        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.1}
          delay={0.1}
        >
          {homepageProducts.map((p) => (
            <LocaleProductCard
              key={p.slug}
              product={p}
              dict={dict}
              locale={locale}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
