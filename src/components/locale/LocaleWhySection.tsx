"use client";
import { Award, Clock, Star, MapPin } from "lucide-react";
// motion removed to limit hover interactions to image-only
import { Reveal, Stagger } from "@/components/ui/Reveal";
import type { Dictionary } from "@/lib/i18n/en";

const icons = [Award, Clock, Star, MapPin];

export function LocaleWhySection({
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

  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      style={{ backgroundColor: "#0D0D0D" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(229,30,42,0.04) 0%, transparent 60%)",
        }}
      />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {dict.why.badge}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {dict.why.title}
            </h2>
            <p
              className="mt-4 text-lg"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {dict.why.subtitle}
            </p>
          </Reveal>
        </div>
        <Stagger
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          stagger={0.12}
          delay={0.1}
        >
          {dict.why.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="rounded-2xl p-8"
                style={{
                  backgroundColor: "#1A1A1A",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: "rgba(181,139,71,0.12)" }}
                >
                  <Icon
                    className="w-5 h-5"
                    style={{ color: "#B58B47" }}
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "#F8F6F1", ...headingFont }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "#9ca3af", ...arabicFont }}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
