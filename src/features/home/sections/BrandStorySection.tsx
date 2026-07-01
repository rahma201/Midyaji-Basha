"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/shared/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/en";

type RevealState = "ssr" | "waiting" | "visible";

function useRevealDirect(
  delay: number,
  duration = 0.55,
): [React.RefCallback<HTMLDivElement>, string, React.CSSProperties] {
  const [state, setState] = useState<RevealState>("ssr");

  const attach = useCallback(
    (el: HTMLDivElement | null) => {
      if (!el) return;

      let observer: IntersectionObserver | null = null;

      const rafId = requestAnimationFrame(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          setState("visible");
          return;
        }
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setState("visible");
          return;
        }
        setState("waiting");
        observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setState("visible");
              observer?.unobserve(el);
            }
          },
          { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
        );
        observer.observe(el);
      });

      return () => {
        cancelAnimationFrame(rafId);
        observer?.disconnect();
      };
    },
    [],
  );

  const cls =
    state === "ssr"
      ? ""
      : state === "visible"
        ? "css-reveal css-reveal--visible"
        : "css-reveal";

  const sty: React.CSSProperties =
    state === "ssr"
      ? {}
      : ({
          "--reveal-delay": `${delay}s`,
          "--reveal-duration": `${duration}s`,
        } as React.CSSProperties);

  return [attach, cls, sty];
}

export function BrandStorySection({
  dict,
  locale,
}: {
  dict: Dictionary;
  locale: string;
}) {
  const isRTL = locale === "ar";
  const fontClass = isRTL ? "rtl-font" : "";
  const headingFontClass = isRTL ? "rtl-font" : "font-display";
  const bs = dict.brandStory;

  const [imageRef, imageClass, imageStyle] = useRevealDirect(0.1, 0.6);
  const [cardRef, cardClass, cardStyle] = useRevealDirect(0.38, 0.5);

  return (
    <section
      className="relative py-32 px-4 overflow-hidden bg-background"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="absolute inset-0 pointer-events-none opacity-[0.1]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[700px] rounded-full blur-[120px] brand-story-glow" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div
          className="w-full mb-20 h-px brand-story-divider"
          style={{ transformOrigin: isRTL ? "right" : "left" }}
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center ${isRTL ? "lg:grid-flow-dense" : ""}`}
        >
          <div>
            <Reveal delay={0.05}>
              <span
                className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-6 text-accent ${fontClass}`}
              >
                {bs.badge}
              </span>
            </Reveal>

            <div
              className={`text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-2 text-foreground ${headingFontClass}`}
              aria-label={`${bs.line1.join(" ")} ${bs.line2.join(" ")}`}
            >
              <div className="flex flex-wrap gap-x-[0.22em]">
                {bs.line1.map((word, i) => (
                  <span key={i} className="inline-block">
                    {word}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-x-[0.22em] mt-1">
                {bs.line2.map((word, i) => (
                  <span
                    key={i}
                    className={`inline-block ${i === 1 ? "text-primary" : ""}`}
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="my-8 h-[2px] w-14 bg-accent"
              style={{ transformOrigin: isRTL ? "right" : "left" }}
            />

            <div className="space-y-6 text-base leading-relaxed text-foreground/70">
              {[bs.p1, bs.p2, bs.p3].map((para, i) => (
                <Reveal key={i} delay={0.3 + i * 0.1}>
                  <p className={fontClass}>{para}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.6}>
              <div className="mt-12 pt-8 grid grid-cols-3 gap-6 border-t border-white/[0.07]">
                {[
                  { value: bs.stat1val, label: bs.stat1label },
                  { value: bs.stat2val, label: bs.stat2label },
                  { value: bs.stat3val, label: bs.stat3label },
                ].map(({ value, label }) => (
                  <div key={label} className="locale-text-start">
                    <p
                      className={`text-2xl font-bold mb-1 text-foreground ${headingFontClass}`}
                    >
                      {value}
                    </p>
                    <p
                      className={`text-xs uppercase tracking-widest text-accent ${fontClass}`}
                    >
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <div
              ref={imageRef}
              className={`relative rounded-2xl overflow-hidden ${imageClass}`}
              style={{ aspectRatio: "4/5", ...imageStyle }}
            >
              <Image
                src="/images/stuffed-mussels-story.webp"
                alt="Fresh Turkish stuffed mussels with seasoned rice at Midyaji Basha"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 brand-story-image-fade" />
              <div className="absolute bottom-6 z-10" style={{ insetInline: 24 }}>
                <p
                  className={`text-lg font-medium leading-snug italic text-foreground/90 ${headingFontClass}`}
                >
                  {bs.quote}
                </p>
                <p
                  className={`mt-2 text-xs uppercase tracking-widest text-accent ${fontClass}`}
                >
                  {bs.quoteBy}
                </p>
              </div>
              <div
                className="absolute top-6 w-3 h-3 rounded-full bg-primary"
                style={{ insetInlineStart: 24 }}
              />
            </div>

            <div
              ref={cardRef}
              className={`absolute -bottom-6 px-6 py-5 rounded-2xl shadow-2xl max-w-[220px] z-20 brand-story-float-card ${cardClass}`}
              style={{ insetInlineStart: -24, ...cardStyle }}
            >
              <p
                className={`text-xs uppercase tracking-widest mb-1 text-accent ${fontClass}`}
              >
                {bs.floatLabel}
              </p>
              <p
                className={`text-sm font-semibold leading-snug text-foreground ${headingFontClass}`}
              >
                {bs.floatSub}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
