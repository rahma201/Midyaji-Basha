"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/en";

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

function MusselShell({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M60 8 C82 8 108 34 108 82 C108 122 88 152 60 152 C32 152 12 122 12 82 C12 34 38 8 60 8Z"
        stroke="currentColor"
        strokeWidth="0.6"
      />
      <path d="M60 8 L60 152" stroke="currentColor" strokeWidth="0.4" />
      <path d="M60 8 L12 82" stroke="currentColor" strokeWidth="0.4" />
      <path d="M60 8 L108 82" stroke="currentColor" strokeWidth="0.4" />
      <path d="M60 8 L22 128" stroke="currentColor" strokeWidth="0.3" />
      <path d="M60 8 L98 128" stroke="currentColor" strokeWidth="0.3" />
    </svg>
  );
}

export function LocaleBrandStory({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
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
  const imageY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const shellRotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);
  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.4, 0.7, 1],
    [0, 0.12, 0.12, 0],
  );
  const bs = dict.brandStory;

  return (
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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, rgba(181,139,71,1) 0%, transparent 70%)",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute top-1/2 -translate-y-1/2 w-[420px] h-[560px] pointer-events-none"
        style={{
          rotate: shellRotate,
          opacity: 0.028,
          color: "#B58B47",
          insetInlineEnd: -40,
        }}
      >
        <MusselShell className="w-full h-full" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="w-full mb-20"
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transformOrigin: isRTL ? "right" : "left",
            height: "1px",
            background: `linear-gradient(${isRTL ? "to left" : "to right"}, #B58B47, rgba(181,139,71,0.2), transparent)`,
          }}
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}
        >
          <div>
            <Reveal delay={0.05}>
              <span
                className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-6"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                {bs.badge}
              </span>
            </Reveal>

            <div
              className="text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-2"
              style={{ color: "#F8F6F1", ...headingFont }}
              aria-label={`${bs.line1.join(" ")} ${bs.line2.join(" ")}`}
            >
              <div className="flex flex-wrap gap-x-[0.22em]">
                {bs.line1.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.65, delay: 0.1 + i * 0.09, ease }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-[0.22em] mt-1">
                {bs.line2.map((word, i) => (
                  <motion.span
                    key={i}
                    className="inline-block"
                    style={{ color: i === 1 ? "#E51E2A" : undefined }}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.65,
                      delay: 0.46 + i * 0.09,
                      ease,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            <motion.div
              className="my-8 h-[2px] w-14"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.9,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                transformOrigin: isRTL ? "right" : "left",
                backgroundColor: "#B58B47",
              }}
            />

            <div
              className="space-y-6 text-base leading-relaxed"
              style={{ color: "rgba(248,246,241,0.7)" }}
            >
              {[bs.p1, bs.p2, bs.p3].map((para, i) => (
                <Reveal key={i} delay={0.3 + i * 0.1}>
                  <p style={arabicFont}>{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.6}>
              <div
                className="mt-12 pt-8 grid grid-cols-3 gap-6"
                style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
              >
                {[
                  { value: bs.stat1val, label: bs.stat1label },
                  { value: bs.stat2val, label: bs.stat2label },
                  { value: bs.stat3val, label: bs.stat3label },
                ].map(({ value, label }) => (
                  <div key={label} className="locale-text-start">
                    <p
                      className="text-2xl font-bold mb-1"
                      style={{ color: "#F8F6F1", ...headingFont }}
                    >
                      {value}
                    </p>
                    <p
                      className="text-xs uppercase tracking-widest"
                      style={{ color: "#B58B47", ...arabicFont }}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <motion.div
              className="absolute -top-8 w-28 h-36 pointer-events-none z-0"
              style={{ color: "rgba(181,139,71,0.15)", insetInlineEnd: -32 }}
              animate={{ rotate: [0, 4, 0, -4, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            >
              <MusselShell className="w-full h-full" />
            </motion.div>
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{ aspectRatio: "4/5" }}
            >
              <motion.div className="absolute inset-0" style={{ y: imageY }}>
                <Image
                  src="/images/unsplash-1.svg"
                  alt="Turkish street food atmosphere"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(13,13,13,0.8) 0%, rgba(13,13,13,0.2) 50%, transparent 100%)",
                  }}
                />
              </motion.div>
              <div className="absolute bottom-6 z-10" style={{ insetInline: 24 }}>
                <p
                  className="text-lg font-medium leading-snug italic"
                  style={{ color: "rgba(248,246,241,0.9)", ...headingFont }}
                >
                  {bs.quote}
                </p>
                <p
                  className="mt-2 text-xs uppercase tracking-widest"
                  style={{ color: "#B58B47", ...arabicFont }}
                >
                  {bs.quoteBy}
                </p>
              </div>
              <div
                className="absolute top-6 w-3 h-3 rounded-full"
                style={{
                  backgroundColor: "#E51E2A",
                  insetInlineStart: 24,
                }}
              />
            </div>
            <motion.div
              className="absolute -bottom-6 px-6 py-5 rounded-2xl shadow-2xl max-w-[220px] z-20"
              style={{
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(181,139,71,0.25)",
                insetInlineStart: -24,
              }}
              initial={{ opacity: 0, x: isRTL ? 24 : -24, y: 24 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6, ease }}
            >
              <p
                className="text-xs uppercase tracking-widest mb-1"
                style={{ color: "#B58B47", ...arabicFont }}
              >
                {bs.floatLabel}
              </p>
              <p
                className="text-sm font-semibold leading-snug"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {bs.floatSub}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
