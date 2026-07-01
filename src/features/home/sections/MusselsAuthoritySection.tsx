import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HoverGlow } from "@/components/shared/ui/HoverGlow";
import { Reveal, Stagger } from "@/components/shared/ui/Reveal";
import { getPageFonts } from "@/lib/utils/fonts";

const content = {
  en: {
    title: "Amman guide to mussels and Turkish street food",
    intro:
      "Midyaji Basha is built around mussels. Midye Dolma is our signature Turkish mussel dish, but the story is wider than one plate: it includes Istanbul street-food culture, seafood rituals, rice fillings, lemon, Cik Kofte, Fatteh Yalanji, and the way Turkish flavors now fit naturally into Amman.",
    blocks: [
      {
        heading: "Why mussels matter",
        text: "Mussels carry the taste of the sea in a small, generous shell. In Turkish cuisine, they become a street-food icon because they can hold rice, warm spices, herbs, and lemon in one complete bite. That makes mussels the core food entity of Midyaji Basha, while Midye Dolma is the crafted preparation guests come to discover.",
      },
      {
        heading: "How to eat Midye Dolma",
        text: "Midye Dolma is eaten by hand. Open the shell, add lemon, and enjoy the rice and mussel together. The rice brings spice and texture, the mussel brings seafood depth, and the lemon keeps the bite bright. It is simple, direct, and deeply tied to the street corners of Istanbul.",
      },
      {
        heading: "Beyond mussels",
        text: "The menu also introduces Cik Kofte and Fatteh Yalanji, two dishes that share the same love of acidity, herbs, and careful hand preparation. Together they make the restaurant a focused Turkish street-food destination in Jordan rather than a generic seafood stop.",
      },
    ],
    links: [
      { href: "/en/guides", label: "Read the guides" },
      { href: "/en/menu", label: "Explore the menu" },
    ],
  },
  ar: {
    title: "دليل عمّان للمحار والأكل التركي في الشوارع",
    intro:
      "يقوم مضياجي باشا على المحار. ميدي دولما هو طبق المحار التركي المميز لدينا، لكن القصة أوسع من طبق واحد: تشمل ثقافة أكل الشارع في إسطنبول، طقوس البحر، حشوات الأرز، الليمون، تشيغ كوفتة، فتة يالنجي، وكيف أصبحت النكهات التركية قريبة من عمّان.",
    blocks: [
      {
        heading: "لماذا المحار مهم؟",
        text: "يحمل المحار نكهة البحر داخل صدفة صغيرة وسخية. في المطبخ التركي يتحول إلى أيقونة شارع لأنه يجمع الأرز والبهارات الدافئة والأعشاب والليمون في لقمة واحدة. لذلك المحار هو الكيان الغذائي الأساسي لمضياجي باشا، وميدي دولما هو طريقة التحضير الحرفية.",
      },
      {
        heading: "كيف يؤكل ميدي دولما؟",
        text: "يؤكل ميدي دولما باليد. افتح الصدفة، أضف الليمون، وتناول الأرز والمحار معاً. الأرز يمنح البهار والقوام، والمحار يمنح العمق البحري، والليمون يحافظ على نضارة اللقمة. إنه طبق بسيط ومباشر ومرتبط بزوايا إسطنبول.",
      },
      {
        heading: "ما بعد المحار",
        text: "تقدّم القائمة أيضاً تشيغ كوفتة وفتة يالنجي، وهما طبقان يشتركان في حب الحموضة والأعشاب والتحضير اليدوي. معاً يصنعون من المطعم وجهة مركزة للأكل التركي في الأردن لا مجرد محطة مأكولات بحرية عامة.",
      },
    ],
    links: [
      { href: "/ar/guides", label: "اقرأ الأدلة" },
      { href: "/ar/menu", label: "استكشف القائمة" },
    ],
  },
};

export function MusselsAuthoritySection({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const copy = isRTL ? content.ar : content.en;
  const { arabicFont: bodyFont, headingFont } = getPageFonts(isRTL);

  return (
    <section
      className="py-20 px-4"
      style={{ backgroundColor: "#0D0D0D" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto locale-text-start">
        <Reveal delay={0.05}>
          <div className="max-w-3xl mb-10">
            <h2
              className="text-3xl md:text-5xl font-bold leading-tight text-balance"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {copy.title}
            </h2>
            <p
              className="mt-6 text-lg leading-8 text-pretty"
              style={{ color: "#d1d5db", ...bodyFont }}
            >
              {copy.intro}
            </p>
          </div>
        </Reveal>

        <Stagger
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
          stagger={0.1}
          delay={0.05}
        >
          {copy.blocks.map((block) => (
            <HoverGlow
              key={block.heading}
              className="premium-hover-glow rounded-2xl p-6 h-full"
              style={{
                backgroundColor: "#1A1A1A",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <h3
                className="text-xl font-bold mb-4"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {block.heading}
              </h3>
              <p className="leading-7" style={{ color: "#c9c9c9", ...bodyFont }}>
                {block.text}
              </p>
            </HoverGlow>
          ))}
        </Stagger>

        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            {copy.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="premium-hover-glow locale-inline rounded-full px-5 py-3 text-sm font-semibold"
                style={{
                  color: "#F8F6F1",
                  border: "1px solid rgba(229,30,42,0.35)",
                  backgroundColor: "rgba(229,30,42,0.08)",
                  ...bodyFont,
                }}
              >
                {link.label}
                <ArrowUpRight
                  className="locale-arrow w-4 h-4"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
