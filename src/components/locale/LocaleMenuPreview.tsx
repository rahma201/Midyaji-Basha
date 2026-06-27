"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Reveal, Stagger, staggerItem } from "@/components/ui/Reveal";
import { LocaleOrderModal } from "@/components/ui/LocaleOrderModal";
import { HoverGlow } from "@/components/ui/HoverGlow";
import { products } from "@/lib/data/products";
import type { Dictionary } from "@/lib/i18n/en";

function LocaleProductCard({
  product,
  dict,
  locale,
}: {
  product: (typeof products)[0];
  dict: Dictionary;
  locale: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };
  const displayName = isRTL && product.nameAr ? product.nameAr : product.name;

  return (
    <>
      <HoverGlow className="h-full rounded-2xl">
        <motion.div
          variants={staggerItem}
          className="premium-hover-glow group relative rounded-2xl overflow-hidden flex flex-col h-full"
          style={{
            backgroundColor: "#0D0D0D",
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
              className="text-xl font-bold mb-2 transition-colors duration-300"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {displayName}
            </h3>
            <p
              className="text-sm leading-relaxed mb-6 flex-1"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {product.description}
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
              <button
                onClick={() => setModalOpen(true)}
                className="premium-button-glow flex-1 py-2.5 rounded-lg text-sm font-semibold text-white"
                style={{ backgroundColor: "#E51E2A", ...arabicFont }}
              >
                {dict.menu.orderNow}
              </button>
            </div>
          </div>
        </motion.div>
      </HoverGlow>
      <LocaleOrderModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        dict={dict.orderModal}
      />
    </>
  );
}

export function LocaleMenuPreview({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };
  const homepageProducts = products.filter((product) =>
    ["stuffed-mussels", "cig-kofte"].includes(product.slug),
  );

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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6"
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
