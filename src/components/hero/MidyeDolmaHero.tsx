"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";
import type { Dictionary } from "@/lib/i18n/en";
import { LocaleOrderModal } from "@/components/ui/LocaleOrderModal";

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

  const badge = isRTL
    ? { top: "نقدم لكم", bottom: "أصالة أكل الشارع التركي" }
    : { top: "THE ORIGINAL", bottom: "TURKISH STREET FOOD" };

  const menuHref = `/${locale}/menu`;

  // Mouse parallax
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const rotateY = useTransform(mvX, [-1, 1], [3, -3]);
  const rotateX = useTransform(mvY, [-1, 1], [-3, 3]);
  const imageX = useTransform(mvX, [-1, 1], [-8, 8]);
  const imageY = useTransform(mvY, [-1, 1], [-8, 8]);

  function onMouseMove(e: React.MouseEvent) {
    const bounds = rootRef.current?.getBoundingClientRect();
    if (!bounds) return;
    mvX.set((e.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2));
    mvY.set((e.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2));
  }

  function onMouseLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <section
      ref={rootRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="w-full h-screen px-4 py-0"
      dir={isRTL ? "rtl" : "ltr"}
      aria-label={isRTL ? "ميديجي باشا - الميركز" : "Midyaji Basha - Hero"}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#060101",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            width: 450,
            height: 450,
            left: "5%",
            top: "10%",
            borderRadius: "50%",
            background: "rgba(167,20,24,0.08)",
            filter: "blur(120px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            left: "70%",
            top: "5%",
            borderRadius: "50%",
            background: "rgba(181,35,32,0.08)",
            filter: "blur(120px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            left: "55%",
            top: "22%",
            borderRadius: "50%",
            background: "rgba(255,70,40,0.06)",
            filter: "blur(112px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            left: "18%",
            top: "52%",
            borderRadius: "50%",
            background: "rgba(171,20,30,0.06)",
            filter: "blur(110px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 250,
            height: 250,
            left: "40%",
            top: "65%",
            borderRadius: "50%",
            background: "rgba(204,36,30,0.08)",
            filter: "blur(100px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 260,
            height: 260,
            left: "82%",
            top: "52%",
            borderRadius: "50%",
            background: "rgba(225,45,40,0.08)",
            filter: "blur(115px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 380,
            height: 380,
            left: "25%",
            top: "28%",
            borderRadius: "50%",
            background: "rgba(145,10,12,0.06)",
            filter: "blur(110px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            left: "75%",
            top: "58%",
            borderRadius: "50%",
            background: "rgba(200,20,25,0.06)",
            filter: "blur(120px)",
          }}
        />
        {Array.from({ length: 30 }).map((_, i) => {
          const size = [4, 6, 8][i % 3];
          const left = 5 + ((i * 13) % 85);
          const top = 5 + ((i * 17) % 85);
          const delay = (i % 6) * 0.4;
          return (
            <motion.span
              key={`particle-${i}`}
              style={{
                position: "absolute",
                width: size,
                height: size,
                borderRadius: "50%",
                background: "rgba(229,30,42,0.28)",
                left: `${left}%`,
                top: `${top}%`,
                opacity: 0.25,
              }}
              animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
              transition={{
                duration: 10 + (i % 5),
                delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>
      <div
        className="max-w-[1400px] mx-auto h-full"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "45% 55%",
            alignItems: "center",
            height: "100%",
          }}
        >
          {/* Left column */}
          <motion.div
            className="px-6"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-3 py-1 rounded-full mb-6"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "rgba(181,139,71,0.06)",
                color: "rgba(248,246,241,0.95)",
                border: "1px solid rgba(181,139,71,0.12)",
                display: "inline-flex",
              }}
            >
              <span style={{ fontSize: 12, fontWeight: 600 }}>{badge.top}</span>
              <strong style={{ fontSize: 12 }}>{badge.bottom}</strong>
            </motion.div>

            <motion.h1
              className="font-display leading-tight mb-6"
              initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              style={{
                fontSize: "clamp(48px, 6.5vw, 84px)",
                lineHeight: 0.95,
                fontWeight: 700,
                color: "white",
              }}
            >
              {!isRTL ? (
                <>
                  <div>Taste Istanbul.</div>
                  <div>
                    <span style={{ color: "white" }}>One </span>
                    <span style={{ color: "#E51E2A" }}>Mussel</span>
                    <span style={{ color: "white" }}> At A Time.</span>
                  </div>
                </>
              ) : (
                <>
                  <div>تذوق إسطنبول.</div>
                  <div>
                    <span style={{ color: "white" }}>محار </span>
                    <span style={{ color: "#E51E2A" }}>واحد</span>
                    <span style={{ color: "white" }}> في كل مرة.</span>
                  </div>
                </>
              )}
            </motion.h1>

            <motion.p
              className="mb-8 text-lg max-w-[520px]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ color: "rgba(220,220,220,0.85)" }}
            >
              {isRTL
                ? "المحار التركي المحشو الأصيل من إسطنبول — محشو يومياً بأرز متبّل ومكونات مُنتقاة بعناية. نقدم وصفات الشوارع التقليدية بمذاق فاخر داخل ميقع مول."
                : "Original Turkish Midye Dolma from Istanbul — freshly prepared daily with seasoned rice and premium ingredients. A street-food tradition reimagined as a refined experience at Mecca Mall."}
            </motion.p>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              <button
                onClick={() => setModalOpen(true)}
                className="premium-button-glow rounded-full px-6 py-3"
                style={{
                  backgroundColor: "#E51E2A",
                  color: "#fff",
                }}
              >
                Order Now
              </button>

              <Link
                href={menuHref}
                className="premium-button-glow rounded-full px-6 py-3 border"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  borderColor: "rgba(255,255,255,0.06)",
                  color: "white",
                  backdropFilter: "saturate(120%) blur(4px)",
                }}
              >
                Explore Menu
              </Link>
            </motion.div>
          </motion.div>

          {/* Right column: Cinematic image stage */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              paddingRight: 24,
            }}
          >
            <div style={{ width: 650, height: 650, position: "relative" }}>
              {/* soft red glow orbs */}
              <motion.div
                aria-hidden="true"
                style={{ position: "absolute", inset: 0 }}
              >
                <span
                  style={{
                    position: "absolute",
                    left: "12%",
                    top: "20%",
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(229,30,42,0.08), transparent)",
                    filter: "blur(120px)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "72%",
                    top: "8%",
                    width: 400,
                    height: 400,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(181,35,32,0.07), transparent)",
                    filter: "blur(132px)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "68%",
                    top: "36%",
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(255,70,40,0.08), transparent)",
                    filter: "blur(110px)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "22%",
                    top: "52%",
                    width: 250,
                    height: 250,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(192,20,22,0.06), transparent)",
                    filter: "blur(104px)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "45%",
                    top: "60%",
                    width: 450,
                    height: 450,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(145,10,12,0.06), transparent)",
                    filter: "blur(118px)",
                  }}
                />
                <span
                  style={{
                    position: "absolute",
                    left: "80%",
                    top: "58%",
                    width: 320,
                    height: 320,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle, rgba(209,30,35,0.08), transparent)",
                    filter: "blur(116px)",
                  }}
                />
                {/* light trails around mussel */}
                <motion.span
                  style={{
                    position: "absolute",
                    left: "8%",
                    top: "52%",
                    width: 430,
                    height: 2,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, rgba(229,30,42,0.24), rgba(255,140,60,0.16))",
                    opacity: 0.32,
                    transformOrigin: "center",
                  }}
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 28,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "24%",
                    top: "76%",
                    width: 360,
                    height: 2,
                    borderRadius: 999,
                    background:
                      "linear-gradient(90deg, rgba(255,100,60,0.22), rgba(229,30,42,0.14))",
                    opacity: 0.3,
                    transformOrigin: "center",
                  }}
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "12%",
                    top: "64%",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "rgba(229,30,42,0.6)",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "18%",
                    top: "38%",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(229,30,42,0.55)",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "54%",
                    top: "18%",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "rgba(229,30,42,0.6)",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "57%",
                    top: "72%",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background: "rgba(229,30,42,0.6)",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "73%",
                    top: "54%",
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    background: "rgba(229,30,42,0.55)",
                  }}
                />
                <motion.span
                  style={{
                    position: "absolute",
                    left: "42%",
                    top: "48%",
                    width: 10,
                    height: 10,
                    borderRadius: "50%",
                    background: "rgba(229,30,42,0.6)",
                  }}
                />
              </motion.div>

              {/* particles */}
              <div
                aria-hidden="true"
                style={{ position: "absolute", inset: 0 }}
              >
                {Array.from({ length: 24 }).map((_, i) => (
                  <motion.span
                    key={i}
                    style={{
                      position: "absolute",
                      width: 6,
                      height: 6,
                      borderRadius: 999,
                      background: "rgba(229,30,42,0.28)",
                      left: `${5 + ((i * 7) % 80)}%`,
                      top: `${10 + ((i * 11) % 70)}%`,
                      opacity: 0.26,
                    }}
                    animate={{
                      y: [0, i % 2 === 0 ? -6 : 6, 0],
                      x: [0, i % 3 === 0 ? 6 : -6, 0],
                    }}
                    transition={{
                      duration: 10 + (i % 5),
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* main image with parallax, float, rotate */}
              <motion.div
                style={{ rotateY, rotateX, x: imageX, y: imageY }}
              >
                <motion.div
                  initial={{ y: -6, rotate: -1 }}
                  animate={{ y: [-8, 8, -8], rotate: [-1, 1, -1] }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <Image
                    src="/hero-mussel.png"
                    alt="Midyaji Basha hero mussel"
                    width={650}
                    height={650}
                    className="object-contain rounded-3xl drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                    priority
                    draggable={false}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom separator */}
      <div
        style={{
          height: 100,
          background:
            "linear-gradient(180deg, rgba(13,7,7,0), rgba(20,6,6,0.75))",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            position: "absolute",
            left: "50%",
            top: "0%",
            width: "80%",
            height: "160px",
            transform: "translateX(-50%) rotate(2deg)",
            borderRadius: "50%",
            background: "rgba(230,20,30,0.08)",
            filter: "blur(40px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "40%",
            top: "16%",
            width: "38%",
            height: "90px",
            transform: "translateX(-50%) rotate(-5deg)",
            borderRadius: "50%",
            background: "rgba(229,40,44,0.07)",
            filter: "blur(30px)",
          }}
        />
        <span
          style={{
            position: "absolute",
            left: "60%",
            top: "12%",
            width: "25%",
            height: "70px",
            transform: "translateX(-50%) rotate(4deg)",
            borderRadius: "50%",
            background: "rgba(245,80,50,0.08)",
            filter: "blur(30px)",
          }}
        />
        <div
          style={{
            textAlign: "center",
            color: "rgba(255,255,255,0.85)",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 14,
              marginBottom: 8,
              color: "rgba(255,255,255,0.65)",
              letterSpacing: "0.2em",
            }}
          >
            Scroll to Discover
          </div>
          <div
            style={{
              width: 28,
              height: 44,
              margin: "0 auto",
              borderRadius: 16,
              border: "2px solid rgba(255,255,255,0.12)",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              paddingTop: 6,
            }}
          >
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                width: 6,
                height: 6,
                borderRadius: 999,
                background: "rgba(229,30,42,0.9)",
              }}
            />
          </div>
        </div>
      </div>

      <LocaleOrderModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        dict={localizedDict.orderModal}
      />
    </section>
  );
}
