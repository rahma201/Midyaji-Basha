"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { LocaleOrderModal } from "@/components/ui/LocaleOrderModal";
import type { Dictionary } from "@/lib/i18n/en";
import { HoverGlow } from "@/components/ui/HoverGlow";

export function LocaleFinalCTA({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.8, 1],
    [0, 0.18, 0.18, 0],
  );

  return (
    <>
      <section
        ref={ref}
        className="relative py-32 px-4 overflow-hidden"
        style={{ backgroundColor: "#0D0D0D" }}
        dir={isRTL ? "rtl" : "ltr"}
      >
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: glowOpacity }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[80px]"
            style={{
              background:
                "radial-gradient(ellipse, rgba(229,30,42,1) 0%, transparent 65%)",
            }}
          />
        </motion.div>
        <div
          className="absolute top-0 inset-x-0 h-px"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {dict.cta.badge}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {dict.cta.title}
            </h2>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className="text-lg mb-12"
              style={{ color: "rgba(248,246,241,0.65)", ...arabicFont }}
            >
              {dict.cta.subtitle}
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <HoverGlow as="span" className="rounded-xl">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-10 py-4 rounded-xl text-base font-semibold text-white"
                  style={{ backgroundColor: "#E51E2A", ...arabicFont }}
                >
                  {dict.cta.orderNow}
                </button>
              </HoverGlow>
              <HoverGlow as="span" className="rounded-xl">
                <Link
                  href={`/${locale}/contact`}
                  className="premium-button-glow block px-10 py-4 rounded-xl text-base font-semibold"
                  style={{
                    border: "1.5px solid rgba(248,246,241,0.25)",
                    color: "#F8F6F1",
                    ...arabicFont,
                  }}
                >
                  {dict.cta.visitUs}
                </Link>
              </HoverGlow>
            </div>
          </Reveal>
        </div>
      </section>
      <LocaleOrderModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        dict={dict.orderModal}
      />
    </>
  );
}
