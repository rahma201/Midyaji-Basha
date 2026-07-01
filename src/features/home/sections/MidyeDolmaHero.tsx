"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Dictionary } from "@/lib/i18n/en";
import { OrderModal } from "@/components/shared/ui/OrderModal";

const heroParticles = Array.from({ length: 8 }, (_, i) => ({
  size: [4, 5, 6, 7][i % 4],
  left: 8 + ((i * 17) % 78),
  top: 12 + ((i * 19) % 70),
  delay: `${(i % 4) * 0.7}s`,
  duration: `${12 + (i % 4) * 2}s`,
}));

export function MidyeDolmaHero({
  locale,
  localizedDict,
}: {
  locale: string;
  localizedDict: Dictionary;
}) {
  const isRTL = locale === "ar";
  const [modalOpen, setModalOpen] = useState(false);
  const rootRef = useRef<HTMLElement | null>(null);
  const parallaxRef = useRef<HTMLDivElement | null>(null);

  const badge = isRTL
    ? { top: "نقدم لكم", bottom: "أصالة أكل الشارع التركي" }
    : { top: "THE ORIGINAL", bottom: "TURKISH STREET FOOD" };

  const menuHref = `/${locale}/menu`;

  function onMouseMove(e: React.MouseEvent) {
    const bounds = rootRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = (e.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2);
    const y = (e.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2);
    parallaxRef.current?.style.setProperty("--hero-image-x", `${x * 8}px`);
    parallaxRef.current?.style.setProperty("--hero-image-y", `${y * 8}px`);
    parallaxRef.current?.style.setProperty("--hero-rotate-x", `${y * 3}deg`);
    parallaxRef.current?.style.setProperty("--hero-rotate-y", `${x * -3}deg`);
  }

  function onMouseLeave() {
    parallaxRef.current?.style.setProperty("--hero-image-x", "0px");
    parallaxRef.current?.style.setProperty("--hero-image-y", "0px");
    parallaxRef.current?.style.setProperty("--hero-rotate-x", "0deg");
    parallaxRef.current?.style.setProperty("--hero-rotate-y", "0deg");
  }

  return (
    <section
      ref={rootRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="midye-hero-section"
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={isRTL ? "ميديجي باشا - الميركز" : "Midyaji Basha - Hero"}
    >
      <div aria-hidden="true" className="midye-hero-particles-layer">
        <span className="midye-hero-ambient midye-hero-ambient-a" />
        <span className="midye-hero-ambient midye-hero-ambient-b" />
        <span className="midye-hero-ambient midye-hero-ambient-c" />
        {heroParticles.map((particle, i) => (
          <span
            key={`particle-${i}`}
            className="midye-hero-css-particle"
            style={
              {
                "--particle-size": `${particle.size}px`,
                "--particle-left": `${particle.left}%`,
                "--particle-top": `${particle.top}%`,
                "--particle-delay": particle.delay,
                "--particle-duration": particle.duration,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="midye-hero-layout">
        <div className="midye-hero-content-area">
          <div className="midye-hero-split">

            <div className="midye-hero-left">
              <div
                className="midye-hero-badge css-reveal css-reveal--visible"
                style={{ transitionDelay: "0s", transitionDuration: "0.6s" }}
              >
                <span className="text-xs font-semibold">{badge.top}</span>
                <strong className="text-xs">{badge.bottom}</strong>
              </div>

              <h1
                className="font-display midye-hero-heading css-reveal css-reveal--visible"
                style={{ transitionDelay: "0.05s", transitionDuration: "0.85s" }}
              >
                {!isRTL ? (
                  <>
                    <div>Taste Istanbul.</div>
                    <div>
                      <span>One </span>
                      <span className="text-[#E51E2A]">Mussel</span>
                      <span> At A Time.</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div>تذوق إسطنبول.</div>
                    <div>
                      <span>محار </span>
                      <span className="text-[#E51E2A]">واحد</span>
                      <span> في كل مرة.</span>
                    </div>
                  </>
                )}
              </h1>

              <p
                className="midye-hero-para css-reveal css-reveal--visible"
                style={{ transitionDelay: "0.15s", transitionDuration: "0.8s" }}
              >
                {isRTL
                  ? "المحار التركي المحشو الأصيل من إسطنبول — محشو يومياً بأرز متبّل ومكونات مُنتقاة بعناية. نقدم وصفات الشوارع التقليدية بمذاق فاخر داخل ميقع مول."
                  : "Original Turkish Midye Dolma from Istanbul — freshly prepared daily with seasoned rice and premium ingredients. A street-food tradition reimagined as a refined experience at Mecca Mall."}
              </p>

              <div
                className="midye-hero-cta-row css-reveal css-reveal--visible"
                style={{ transitionDelay: "0.25s", transitionDuration: "0.8s" }}
              >
                <button
                  onClick={() => setModalOpen(true)}
                  data-cta="hero-order"
                  className="premium-button-glow midye-hero-btn-primary rounded-full px-6 py-3"
                >
                  {isRTL ? "اطلب الآن" : "Order Now"}
                </button>

                <Link
                  href={menuHref}
                  data-cta="hero-menu"
                  className="premium-button-glow midye-hero-ghost-btn rounded-full px-6 py-3 border"
                >
                  {isRTL ? "استعرض القائمة" : "Explore Menu"}
                </Link>
              </div>
            </div>

            <div className="midye-hero-image-well">
              <div className="midye-hero-image-box">
                <div aria-hidden="true" className="midye-hero-orbs">
                  <span className="midye-glow-a" />
                  <span className="midye-glow-b" />
                  <span className="midye-glow-c" />
                  <span className="midye-glow-d" />
                  <span className="midye-glow-e" />
                  <span className="midye-glow-f" />
                  <span className="midye-hero-trail-cw" />
                  <span className="midye-hero-trail-ccw" />
                  <span className="midye-hero-dot midye-dot-a" />
                  <span className="midye-hero-dot midye-dot-b" />
                  <span className="midye-hero-dot midye-dot-c" />
                  <span className="midye-hero-dot midye-dot-d" />
                  <span className="midye-hero-dot midye-dot-e" />
                  <span className="midye-hero-dot midye-dot-f" />
                </div>

                <div
                  ref={parallaxRef}
                  className="midye-hero-parallax-shell"
                >
                  <div className="midye-hero-float">
                    <Image
                      src="/hero-mussel.webp"
                      alt="Midyaji Basha hero mussel"
                      width={650}
                      height={650}
                      className="object-contain rounded-3xl drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                      preload
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="midye-hero-separator">
          <span className="midye-hero-sep-glow-a" />
          <span className="midye-hero-sep-glow-b" />
          <span className="midye-hero-sep-glow-c" />
          <div className="midye-hero-scroll-content">
            <div className="midye-hero-scroll-label">
              {isRTL ? "اسحب للاستكشاف" : "Scroll to Discover"}
            </div>
            <div className="midye-hero-scroll-wheel">
              <span className="midye-hero-scroll-dot" />
            </div>
          </div>
        </div>
      </div>

      {modalOpen ? (
        <OrderModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          dict={localizedDict.orderModal}
        />
      ) : null}
    </section>
  );
}
