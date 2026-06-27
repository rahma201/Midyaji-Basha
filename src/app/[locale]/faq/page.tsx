import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { isValidLocale } from "@/lib/i18n/config";
import { en } from "@/lib/i18n/en";
import { ar } from "@/lib/i18n/ar";
import { Reveal } from "@/components/ui/Reveal";
import { SchemaJsonLd } from "@/components/schema/SchemaJsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { business } from "@/lib/seo/business";
import { LocaleFAQClient } from "@/components/locale/LocaleFAQClient";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isAr = locale === "ar";
  return {
    title: isAr ? "أسئلة شائعة | مضياجي باشا" : "FAQ | Midyaji Basha",
    alternates: {
      canonical: `https://midyajibasha.com/${locale}/faq`,
      languages: {
        en: "https://midyajibasha.com/en/faq",
        ar: "https://midyajibasha.com/ar/faq",
      },
    },
  };
}

const arFaqItems = [
  {
    q: "ما هو مضياجي باشا؟",
    a: "مضياجي باشا هو أول وأوحد متخصص في ميدي دولما (بلح البحر التركي المحشو) في الأردن. نقدّم أيضاً تشيغ كوفتة ويالانجي ولفائف تركية، جميعها تُحضَّر يومياً بوصفات تركية أصيلة.",
  },
  {
    q: "أين يقع مضياجي باشا؟",
    a: "مضياجي باشا يخدم عمّان، الأردن. استخدم رابط خرائط جوجل الرسمي أو راسلنا عبر واتساب على 0777774497 لتأكيد الاتجاهات والتوفر الحالي قبل الزيارة.",
  },
  {
    q: "هل يمكنني الطلب عبر واتساب؟",
    a: "نعم! واتساب هو قناة الطلب المفضّلة لدينا. راسلنا مباشرة لتقديم طلبك أو الاستفسار عن القائمة.",
  },
  {
    q: "هل تقدّمون خدمة الكيترينغ؟",
    a: "نعم، نقدّم خدمة الكيترينغ للمناسبات والاحتفالات. تواصل معنا مسبقاً لمناقشة التفاصيل والأسعار.",
  },
  {
    q: "ما هو ميدي دولما؟",
    a: "ميدي دولما هو بلح البحر الطازج المحشو بأرز متبّل وصنوبر وزبيب وبهارات إسطنبولية. يُقدَّم مع ليمون طازج ويُؤكل مباشرة من الصدفة.",
  },
  {
    q: "هل ميدي دولما طازج؟",
    a: "نعم، نُحضّر ميدي دولما طازجاً كل يوم. لا نستخدم مكونات مجمّدة. الجودة والطزاجة أساس عملنا.",
  },
  {
    q: "هل تشيغ كوفتة نباتي؟",
    a: "نعم، تشيغ كوفتة نباتي ١٠٠٪. يُحضَّر من البرغل ومعجون الطماطم ودبس الرمان والأعشاب.",
  },
  {
    q: "ما هو يالانجي؟",
    a: 'يالانجي هو أوراق العنب المحشوة بأرز عطري وصنوبر وأعشاب، يُقدَّم بارداً. الكلمة تعني "كاذب" بالتركية لأنه لا يحتوي على لحم.',
  },
  {
    q: "هل الأطباق مناسبة للنباتيين؟",
    a: "نعم، تشيغ كوفتة ويالانجي مناسبان للنباتيين. أما ميدي دولما فيحتوي على بلح البحر.",
  },
  {
    q: "هل يمكنني الطلب مسبقاً؟",
    a: "نعم، يمكنك الطلب مسبقاً عبر واتساب أو انستغرام، خاصةً لطلبات الكميات الكبيرة.",
  },
  {
    q: "ما هي أوقات العمل؟",
    a: "لم ننشر أوقات عمل ثابتة في بيانات الموقع لأننا لا نريد عرض معلومات غير مؤكدة. راسلنا على واتساب لمعرفة التوفر الحالي قبل الزيارة أو الطلب.",
  },
  {
    q: "هل يوجد مقاعد للجلوس؟",
    a: "نقدّم خدمة الاستلام في المكان. يمكنك التمتع بطعامك في المنطقة المخصصة للجلوس داخل ميغا مول.",
  },
  {
    q: "هل تقبلون الدفع بالبطاقة؟",
    a: "نعم، نقبل المدفوعات النقدية والإلكترونية.",
  },
  {
    q: "هل الأطباق خالية من الغلوتين؟",
    a: "ميدي دولما ويالانجي خاليان من الغلوتين. تشيغ كوفتة يحتوي على البرغل. أخبرنا بأي حساسيات غذائية.",
  },
  {
    q: "ما هو أصل المطبخ التركي؟",
    a: "المطبخ التركي تأثّر بحضارات متعددة: العثمانية والفارسية والعربية واليونانية وغيرها. إسطنبول كانت دائماً مركزاً للتبادل الثقافي.",
  },
  {
    q: "لماذا الأكل التركي مميّز؟",
    a: "يتميّز بمزج البهارات العطرية مع المكونات الطازجة وتقنيات الطهي المصقولة عبر قرون. التوازن بين الحموضة والحلاوة والعمق النكهي يجعله فريداً.",
  },
  {
    q: "ما الفرق بين ميدي دولما وأوراق العنب المحشوة؟",
    a: "ميدي دولما يستخدم صدف بلح البحر، بينما يالانجي يستخدم أوراق العنب. الحشوة متشابهة لكن التجربة مختلفة تماماً.",
  },
  {
    q: "هل يقدّم مضياجي باشا لفائف تركية؟",
    a: "نعم! لفائفنا التركية من خبز اللواش الطازج مع خضراوات موسمية وبهارات تركية.",
  },
  {
    q: "هل يمكن تخصيص الطلبات؟",
    a: "نعم، يمكنك طلب تعديلات على مستوى الحدة أو إضافة مكونات.",
  },
  {
    q: "هل مضياجي باشا مناسب للعائلات؟",
    a: "بالتأكيد! قائمتنا تناسب جميع الأذواق وتشمل خيارات نباتية.",
  },
  {
    q: "كم سعر الوجبة؟",
    a: "أسعارنا تبدأ من ٢.٥ دينار أردني لتشيغ كوفتة حتى ٤ دينار لميدي دولما.",
  },
  {
    q: "هل يوجد عروض خاصة؟",
    a: "نُعلن عن العروض والمستجدات عبر قنواتنا الرسمية، خصوصاً انستغرام @midyaji.basha، ويمكنك أيضاً التواصل معنا عبر واتساب على 0777774497.",
  },
  {
    q: "كيف أتابع مضياجي باشا؟",
    a: "تابعنا على انستغرام @midyaji.basha، فيسبوك Midyaji Basha، ويوتيوب @MidyajiBasha لمشاهدة المحتوى والأخبار المرتبطة بالأكل التركي في عمّان.",
  },
  {
    q: "هل تقبلون الحجوزات؟",
    a: "للطلبات الكبيرة والمناسبات، يُرجى التواصل مسبقاً عبر واتساب.",
  },
  {
    q: "ما نهج مضياجي باشا في الأصالة؟",
    a: "نلتزم بالوصفات التركية الأصيلة. كل مكوّن يُختار بعناية وكل طبق يُحضَّر بنفس الأسلوب الإسطنبولي.",
  },
  {
    q: "هل الطعام مناسب لذوي الحساسيات؟",
    a: "لدينا خيارات لأصحاب الحساسيات المختلفة. أخبرنا دائماً بحساسيتك الغذائية.",
  },
  {
    q: "هل مضياجي باشا مناسب للسياح؟",
    a: "بالتأكيد! نرحّب بجميع الزوار ونقدّم تجربة أكل تركية أصيلة.",
  },
  {
    q: "هل يمكن طلب كميات كبيرة؟",
    a: "نعم، تواصل معنا مسبقاً عبر واتساب لطلبات الكميات الكبيرة.",
  },
  {
    q: "كيف أصل إلى مضياجي باشا؟",
    a: "استخدم رابط خرائط جوجل الرسمي الموجود في صفحة التواصل للحصول على الاتجاهات الحالية. وإذا احتجت مساعدة إضافية، راسلنا على واتساب قبل الزيارة.",
  },
  {
    q: "ما رؤية مضياجي باشا المستقبلية؟",
    a: "نسعى لأن نكون الوجهة الأولى للأكل التركي الأصيل في الأردن ولنشر ثقافة الأكل التركي في المنطقة.",
  },
];

const enFaqItems = [
  {
    q: "What is Midyaji Basha?",
    a: "Midyaji Basha is the first and only specialized Midye Dolma (Turkish stuffed mussels) vendor in Jordan. We also serve Çiğ Köfte, Yalancı, and Turkish Wraps — all prepared daily using authentic Turkish recipes.",
  },
  {
    q: "Where is Midyaji Basha located?",
    a: "Midyaji Basha serves Amman, Jordan. Use the official Google Maps link or message us on WhatsApp at 0777774497 to confirm current directions and availability before visiting.",
  },
  {
    q: "Can I order via WhatsApp?",
    a: "Yes! WhatsApp is our preferred ordering channel. Message us directly to place your order or ask about the menu.",
  },
  {
    q: "Do you offer catering services?",
    a: "Yes, we offer catering for events and celebrations. Contact us in advance to discuss details and pricing.",
  },
  {
    q: "What is Midye Dolma?",
    a: "Midye Dolma is fresh mussels stuffed with spiced rice, pine nuts, currants, and Istanbul-style spices. Served with fresh lemon and eaten directly from the shell.",
  },
  {
    q: "Is your Midye Dolma fresh?",
    a: "Yes, we prepare Midye Dolma fresh every day. We never use frozen ingredients. Quality and freshness are the foundation of our work.",
  },
  {
    q: "Is Çiğ Köfte vegan?",
    a: "Yes, Çiğ Köfte is 100% vegan. It is made from bulgur wheat, tomato paste, pomegranate molasses, and herbs.",
  },
  {
    q: "What is Yalancı?",
    a: 'Yalancı is vine leaves stuffed with aromatic rice, pine nuts, and herbs, served cold as a meze. The name means "liar" in Turkish because it contains no meat.',
  },
  {
    q: "Are your dishes suitable for vegetarians?",
    a: "Çiğ Köfte and Yalancı are fully vegetarian. Midye Dolma contains shellfish (mussels).",
  },
  {
    q: "Can I pre-order?",
    a: "Yes, you can pre-order via WhatsApp or Instagram, especially for large quantities and events.",
  },
  {
    q: "What are your opening hours?",
    a: "We do not publish fixed opening hours in site data because only verified business details should appear here. Please message us on WhatsApp before visiting or ordering to confirm current availability.",
  },
  {
    q: "Is there seating?",
    a: "We offer in-place pickup. You can enjoy your food in the designated seating area inside Mecca Mall.",
  },
  {
    q: "Do you accept card payments?",
    a: "Yes, we accept both cash and electronic payments.",
  },
  {
    q: "Are the dishes gluten-free?",
    a: "Midye Dolma and Yalancı are gluten-free. Çiğ Köfte contains bulgur wheat. Please inform us of any dietary allergies.",
  },
  {
    q: "What is the origin of Turkish cuisine?",
    a: "Turkish cuisine was influenced by multiple civilizations over centuries: Ottoman, Persian, Arabic, Greek, and others. Istanbul has always been a center of cultural and culinary exchange.",
  },
  {
    q: "Why is Turkish food special?",
    a: "Turkish food is distinguished by its blend of aromatic spices with fresh ingredients and cooking techniques refined over centuries.",
  },
  {
    q: "What is the difference between Midye Dolma and stuffed vine leaves?",
    a: "Midye Dolma uses mussel shells as the vessel for the filling, while Yalancı uses vine leaves. The experiences are completely different.",
  },
  {
    q: "Do you serve Turkish Wraps?",
    a: "Yes! Our Turkish Wraps are made from fresh lavash bread with seasonal vegetables and a Turkish spice blend.",
  },
  {
    q: "Can orders be customized?",
    a: "Yes, you can request adjustments to spice levels or ingredient additions.",
  },
  {
    q: "Is Midyaji Basha family-friendly?",
    a: "Absolutely! Our menu is diverse and suits all tastes. Vegetarian dishes are available.",
  },
  {
    q: "How much does a meal cost?",
    a: "Prices start from 2.5 JD for Çiğ Köfte up to 4 JD for Midye Dolma.",
  },
  {
    q: "Are there special offers?",
    a: "We announce updates and offers through official channels, especially Instagram @midyaji.basha. You can also message us on WhatsApp at 0777774497 for current menu availability.",
  },
  {
    q: "How can I follow Midyaji Basha on social media?",
    a: "Follow Midyaji Basha on Instagram @midyaji.basha, Facebook, and YouTube @MidyajiBasha for Turkish street food content, updates, and restaurant news in Amman.",
  },
  {
    q: "Do you accept reservations?",
    a: "For large orders and events, please contact us in advance via WhatsApp.",
  },
  {
    q: "What is Midyaji Basha's approach to authenticity?",
    a: "We follow authentic Turkish recipes without modification. Every ingredient is carefully selected and every dish is prepared in the same style used in Istanbul's streets.",
  },
  {
    q: "Is the food suitable for those with dietary sensitivities?",
    a: "We have options for various dietary sensitivities. Always inform us of your dietary restrictions when ordering.",
  },
  {
    q: "Is Midyaji Basha suitable for tourists?",
    a: "Absolutely! We welcome all visitors and offer an authentic Turkish dining experience.",
  },
  {
    q: "Can I order large quantities?",
    a: "Yes, please contact us in advance via WhatsApp to arrange large quantity orders.",
  },
  {
    q: "How do I get directions?",
    a: "Use the official Google Maps link on the contact page for current directions. If you need help before visiting, send us a WhatsApp message and we will guide you.",
  },
  {
    q: "What is Midyaji Basha's future vision?",
    a: "We aspire to be the first destination for authentic Turkish food in Jordan and to spread Turkish street food culture throughout the region.",
  },
];

export default async function LocaleFAQPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const dict = locale === "ar" ? ar : en;
  const isRTL = locale === "ar";
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };
  const items = isRTL ? arFaqItems : enFaqItems;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <SchemaJsonLd data={faqSchema} />
      <SchemaJsonLd
        data={breadcrumbSchema([
          {
            name: locale === "ar" ? "الرئيسية" : "Home",
            url: `${business.url}/${locale}`,
          },
          {
            name: locale === "ar" ? "الأسئلة الشائعة" : "FAQ",
            url: `${business.url}/${locale}/faq`,
          },
        ])}
      />
      <div style={{ backgroundColor: "#0D0D0D" }} dir={isRTL ? "rtl" : "ltr"}>
        <section className="pt-36 pb-16 px-4 text-center">
          <Reveal delay={0.05}>
            <span
              className="inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-4"
              style={{ color: "#B58B47", ...arabicFont }}
            >
              {dict.faqPage.heroLabel}
            </span>
          </Reveal>
          <Reveal delay={0.15}>
            <h1
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{ color: "#F8F6F1", ...headingFont }}
            >
              {dict.faqPage.heroTitle}
            </h1>
          </Reveal>
          <Reveal delay={0.25}>
            <p
              className="text-lg max-w-xl mx-auto"
              style={{ color: "#9ca3af", ...arabicFont }}
            >
              {dict.faqPage.heroSub}
            </p>
          </Reveal>
        </section>
        <section className="pb-24 px-4">
          <div className="max-w-3xl mx-auto">
            <LocaleFAQClient items={items} isRTL={isRTL} />
          </div>
        </section>
      </div>
    </>
  );
}
