"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { HoverGlow } from "@/components/ui/HoverGlow";
import { LocaleOrderModal } from "@/components/ui/LocaleOrderModal";
import type { Dictionary } from "@/lib/i18n/en";

const content = {
  en: {
    badge: "Best Seller",
    title: "The Signature Stuffed Mussels",
    subtitle:
      "Our most iconic item — authentic Turkish Midye Dolma prepared with seasoned rice, fresh mussels, lemon, and Istanbul street-food tradition.",
    storyTitle: "A small shell with Istanbul inside.",
    story:
      "Midye Dolma is Istanbul's famous stuffed mussel ritual: fresh mussels filled with aromatic seasoned rice, finished with lemon, and eaten straight from the shell. At Midyaji Basha, it is the dish that defines us because it carries the clearest taste of Turkish street food in Amman.",
    why:
      "It is our signature product because every serving brings together seafood depth, warm spices, citrus, and the craft of hand-stuffing each mussel fresh for guests in Jordan.",
    ingredientsTitle: "Ingredients",
    ingredients:
      "Fresh mussels, seasoned rice, Turkish spices, herbs, lemon, and a balanced Istanbul-style filling.",
    servingTitle: "Serving Style",
    serving:
      "Served with fresh lemon. Open the shell, squeeze lemon over the rice, and enjoy it as a bright street-food bite.",
    location:
      "Find authentic Midye Dolma at Midyaji Basha in Amman, Jordan. Message us before visiting for current availability.",
    orderNow: "Order Now",
    learnMore: "Learn More",
    faqs: [
      {
        question: "What is Midye Dolma?",
        answer:
          "Midye Dolma is Turkish stuffed mussels filled with seasoned rice and served with lemon. It is one of Istanbul's most iconic street foods.",
      },
      {
        question: "How is it served?",
        answer:
          "It is served in the shell with fresh lemon. You squeeze lemon over the rice and eat the mussel directly from the shell.",
      },
      {
        question: "Is it spicy?",
        answer:
          "It is aromatic rather than hot. The flavor comes from warm Turkish spices, rice, fresh mussels, and lemon.",
      },
      {
        question: "How many pieces should I order?",
        answer:
          "First-time guests usually start with one serving, then add more if sharing. For groups, order multiple servings so everyone gets the full ritual.",
      },
    ],
  },
  ar: {
    badge: "الأكثر مبيعاً",
    title: "المحار المحشي المميز",
    subtitle:
      "طبقنا الأشهر — ميدي دولما تركي أصيل محضّر بأرز متبّل ومحار طازج وليمون وروح أكل الشارع في إسطنبول.",
    storyTitle: "صدفة صغيرة بداخلها إسطنبول.",
    story:
      "ميدي دولما هو طقس المحار المحشي الشهير في إسطنبول: محار طازج يُحشى بأرز عطري متبّل، ويُقدّم مع الليمون ويؤكل مباشرة من الصدفة. في مضياجي باشا، هذا هو الطبق الذي يعرّفنا لأنه يحمل أوضح طعم لأكل الشارع التركي في عمّان.",
    why:
      "هو طبقنا المميز لأنه يجمع عمق نكهة البحر، والبهارات الدافئة، والليمون، وحرفة حشو كل محارة يدوياً وطازجة لضيوفنا في الأردن.",
    ingredientsTitle: "المكونات",
    ingredients:
      "محار طازج، أرز متبّل، بهارات تركية، أعشاب، ليمون، وحشوة متوازنة على طريقة إسطنبول.",
    servingTitle: "طريقة التقديم",
    serving:
      "يُقدّم مع ليمون طازج. افتح الصدفة، اعصر الليمون فوق الأرز، واستمتع بلقمة شارع تركية مشرقة.",
    location:
      "تجد ميدي دولما التركي الأصيل لدى مضياجي باشا في عمّان، الأردن. راسلنا قبل الزيارة للتأكد من التوفر.",
    orderNow: "اطلب الآن",
    learnMore: "اعرف المزيد",
    faqs: [
      {
        question: "ما هو ميدي دولما؟",
        answer:
          "ميدي دولما هو محار تركي محشي بالأرز المتبّل ويُقدّم مع الليمون. وهو من أشهر أكلات الشارع في إسطنبول.",
      },
      {
        question: "كيف يُقدّم؟",
        answer:
          "يُقدّم داخل الصدفة مع ليمون طازج. تعصر الليمون فوق الأرز وتتناوله مباشرة من الصدفة.",
      },
      {
        question: "هل هو حار؟",
        answer:
          "نكهته عطرية أكثر من كونها حارة. الطعم يأتي من البهارات التركية الدافئة والأرز والمحار الطازج والليمون.",
      },
      {
        question: "كم قطعة أطلب؟",
        answer:
          "عادة يبدأ الضيف بتجربة حصة واحدة، ثم يطلب المزيد عند المشاركة. للمجموعات ننصح بطلب عدة حصص ليعيش الجميع الطقس كاملاً.",
      },
    ],
  },
};

export function SignatureStuffedMusselsSection({
  locale,
  dict,
}: {
  locale: string;
  dict: Dictionary;
}) {
  const [open, setOpen] = useState(false);
  const isRTL = locale === "ar";
  const copy = isRTL ? content.ar : content.en;
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <>
      <section className="mt-20" dir={isRTL ? "rtl" : "ltr"}>
        <HoverGlow className="rounded-2xl">
          <div
            className="premium-hover-glow group rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(26,26,26,0.98), rgba(13,13,13,0.98))",
              border: "1px solid rgba(181,139,71,0.2)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className={`relative min-h-[360px] lg:min-h-[620px] overflow-hidden ${isRTL ? "lg:order-2" : ""}`}>
                <Image
                  src="/hero-mussel.png"
                  alt={copy.title}
                  fill
                  className="object-contain p-8 lg:p-12 transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(229,30,42,0.18), transparent 58%)",
                  }}
                />
              </div>

              <div className={`p-7 md:p-10 lg:p-12 flex flex-col justify-center locale-text-start ${isRTL ? "lg:order-1" : ""}`}>
                <span
                  className="w-fit rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]"
                  style={{
                    color: "#B58B47",
                    border: "1px solid rgba(181,139,71,0.35)",
                    backgroundColor: "rgba(181,139,71,0.08)",
                    ...arabicFont,
                  }}
                >
                  {copy.badge}
                </span>
                <h2
                  className="mt-5 text-3xl md:text-5xl font-bold leading-tight"
                  style={{ color: "#F8F6F1", ...headingFont }}
                >
                  {copy.title}
                </h2>
                <p
                  className="mt-4 text-base md:text-lg leading-8"
                  style={{ color: "#d1d5db", ...arabicFont }}
                >
                  {copy.subtitle}
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#F8F6F1", ...headingFont }}>
                      {copy.storyTitle}
                    </h3>
                    <p className="text-sm leading-7" style={{ color: "#9ca3af", ...arabicFont }}>
                      {copy.story}
                    </p>
                  </div>
                  <p className="text-sm leading-7" style={{ color: "#c9c9c9", ...arabicFont }}>
                    {copy.why}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h4 className="text-sm font-bold mb-2" style={{ color: "#B58B47", ...arabicFont }}>
                        {copy.ingredientsTitle}
                      </h4>
                      <p className="text-sm leading-6" style={{ color: "#9ca3af", ...arabicFont }}>
                        {copy.ingredients}
                      </p>
                    </div>
                    <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,255,255,0.035)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <h4 className="text-sm font-bold mb-2" style={{ color: "#B58B47", ...arabicFont }}>
                        {copy.servingTitle}
                      </h4>
                      <p className="text-sm leading-6" style={{ color: "#9ca3af", ...arabicFont }}>
                        {copy.serving}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm leading-7" style={{ color: "#9ca3af", ...arabicFont }}>
                    {copy.location}
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <HoverGlow as="span" className="rounded-xl">
                    <button
                      onClick={() => setOpen(true)}
                      className="premium-button-glow w-full sm:w-auto rounded-xl px-7 py-3.5 text-sm font-semibold text-white"
                      style={{ backgroundColor: "#E51E2A", ...arabicFont }}
                    >
                      {copy.orderNow}
                    </button>
                  </HoverGlow>
                  <HoverGlow as="span" className="rounded-xl">
                    <Link
                      href={`/${locale}/menu/stuffed-mussels`}
                      className="premium-button-glow block rounded-xl px-7 py-3.5 text-sm font-semibold"
                      style={{
                        color: "#F8F6F1",
                        border: "1px solid rgba(248,246,241,0.22)",
                        ...arabicFont,
                      }}
                    >
                      {copy.learnMore}
                    </Link>
                  </HoverGlow>
                </div>
              </div>
            </div>

            <div className="px-7 pb-8 md:px-10 lg:px-12 lg:pb-12">
              <Accordion.Root type="single" collapsible className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {copy.faqs.map((item, index) => (
                  <HoverGlow key={item.question} className="rounded-xl">
                    <Accordion.Item
                      value={`signature-${index}`}
                      className="premium-hover-glow rounded-xl overflow-hidden"
                      style={{
                        backgroundColor: "#0D0D0D",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Accordion.Header>
                        <Accordion.Trigger
                          className="faq-trigger flex w-full items-center px-5 py-4 text-sm font-semibold [&[data-state=open]>svg]:rotate-180"
                          style={{ color: "#F8F6F1", ...arabicFont }}
                        >
                          <span className="faq-question">{item.question}</span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform" style={{ color: "#B58B47" }} />
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                        <p className="faq-answer px-5 pb-5 text-sm leading-7" style={{ color: "#9ca3af", ...arabicFont }}>
                          {item.answer}
                        </p>
                      </Accordion.Content>
                    </Accordion.Item>
                  </HoverGlow>
                ))}
              </Accordion.Root>
            </div>
          </div>
        </HoverGlow>
      </section>
      <LocaleOrderModal open={open} onOpenChange={setOpen} dict={dict.orderModal} />
    </>
  );
}

export function getSignatureStuffedMusselsFaq(locale: string) {
  const copy = locale === "ar" ? content.ar : content.en;
  return copy.faqs.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
}
