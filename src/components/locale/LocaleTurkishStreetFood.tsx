import Image from "next/image";

const enContent = {
  badge: "Turkish Cuisine in Jordan",
  title: "The Story of Turkish Street Food",
  subtitle:
    "A culinary tradition spanning centuries — now brought to Amman by Midyaji Basha.",
  sections: [
    {
      heading: "Turkish Street Food: A Culture Built on Flavor",
      body: [
        "Turkish street food is more than a way to eat on the go — it is a cultural institution that has shaped the daily life of millions of people across Turkey for centuries. From the bustling bazaars of Istanbul to the sun-drenched streets of Izmir, Turkey's street food culture reflects the country's extraordinary geographic and cultural diversity.",
        "What makes Turkish street food stand apart is its combination of complexity and accessibility. These are not simple dishes thrown together quickly — they are the result of generations of refinement, each recipe carefully passed down and improved upon. Yet they're served in seconds, eaten on the street, and priced for everyone.",
      ],
    },
    {
      heading: "Midye Dolma: The Crown Jewel of Istanbul Street Food",
      body: [
        "Among all the remarkable street foods Turkey has to offer, Midye Dolma holds a special place. Istanbul has always been blessed with exceptional seafood from the Bosphorus Strait. The combination of this local abundance with the Ottoman culinary tradition of stuffed vegetables gave birth to Midye Dolma: fresh mussels stuffed with spiced rice, pine nuts, and currants.",
        "The street vendors who sell Midye Dolma — known as midyeciler — are an iconic part of Istanbul's urban landscape. Standing on busy corners with their stacked shells, they serve thousands of customers daily. The transaction is simple and beautiful: point to the mussels, receive a handful with lemon, eat them on the spot.",
      ],
    },
    {
      heading: "Turkish Street Food Comes to Amman, Jordan",
      body: [
        "Amman is one of the Middle East's most vibrant and diverse food cities. The Jordanian capital has always been at a crossroads of culinary traditions. In recent years, Amman's food scene has expanded dramatically, welcoming specialty cuisine from across the region.",
        "Until Midyaji Basha opened at Mecca Mall, there was no place in Amman where you could find authentic Turkish street food — the real thing, made fresh daily with traditional recipes. Midyaji Basha changed that, bringing the authentic Istanbul tradition to Jordan for the first time.",
      ],
    },
  ],
};

const arContent = {
  badge: "المطبخ التركي في الأردن",
  title: "قصة الأكل التركي في الشوارع",
  subtitle: "تقليد طهوي يمتد لقرون — جلبه مضياجي باشا إلى عمّان.",
  sections: [
    {
      heading: "الأكل التركي في الشوارع: ثقافة بُنيت على النكهة",
      body: [
        "الأكل التركي في الشوارع ليس مجرد طريقة للأكل بسرعة — بل هو مؤسسة ثقافية شكّلت الحياة اليومية لملايين الأتراك عبر قرون. من أسواق إسطنبول الصاخبة إلى شوارع إزمير المشمسة، يعكس الأكل التركي في الشوارع التنوع الجغرافي والثقافي الاستثنائي للبلاد.",
        "ما يُميّز الأكل التركي في الشوارع هو مزجه الفريد بين التعقيد وإمكانية الوصول. هذه ليست أطباقاً مُعدَّة بسرعة — بل هي نتاج أجيال من الصقل، تُنقل كل وصفة بعناية وتتحسّن عبر الزمن. ومع ذلك تُقدَّم في ثوانٍ، وتُؤكل في الشوارع، وبأسعار في متناول الجميع.",
      ],
    },
    {
      heading: "ميدي دولما: تاج الأكل التركي في إسطنبول",
      body: [
        "بين جميع أطعمة الشوارع الرائعة التي تقدمها تركيا، يحتل ميدي دولما مكانة خاصة. إسطنبول دائماً تمتعت بثروة بحرية استثنائية من مضيق البوسفور. مزج هذه الوفرة المحلية مع التقليد العثماني للحشوات أفرز ميدي دولما: بلح البحر الطازج المحشو بالأرز المتبّل والصنوبر والزبيب.",
        'باعة الشوارع الذين يبيعون ميدي دولما — المعروفون بـ"ميديجيلر" — جزء أيقوني من المشهد الحضري الإسطنبولي. يقفون في تقاطعات مزدحمة مع صواني مكدّسة بالصدف، يخدمون آلاف الزبائن يومياً. المعادلة بسيطة وجميلة: تُشير إلى الصدف، تأخذ حفنة مع الليمون، وتأكلها في المكان.',
      ],
    },
    {
      heading: "الأكل التركي في شوارع عمّان، الأردن",
      body: [
        "عمّان من أكثر مدن الشرق الأوسط حيويةً وتنوعاً في المطبخ. العاصمة الأردنية كانت دائماً ملتقىً لتقاليد طهوية متعددة. في السنوات الأخيرة، توسّع مشهد الطعام في عمّان توسعاً ملحوظاً، ليحتضن مطابخ متخصصة من أنحاء المنطقة والعالم.",
        "حتى افتتح مضياجي باشا في ميغا مول، لم يكن ثمة مكان في عمّان يقدّم أكلاً تركياً أصيلاً في الشوارع — الشيء الحقيقي المُحضَّر يومياً بوصفات تقليدية. غيّر مضياجي باشا هذا الواقع، بإحضار التقليد الإسطنبولي الأصيل إلى الأردن للمرة الأولى.",
      ],
    },
  ],
};

export function LocaleTurkishStreetFood({ locale }: { locale: string }) {
  const isRTL = locale === "ar";
  const c = isRTL ? arContent : enContent;
  const arabicFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : {};
  const headingFont: React.CSSProperties = isRTL
    ? { fontFamily: "var(--font-arabic), sans-serif" }
    : { fontFamily: "var(--font-playfair), serif" };

  return (
    <section
      className="py-24 px-4"
      style={{ backgroundColor: "#1A1A1A" }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-16 ${isRTL ? "" : ""}`}>
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.18em] mb-4"
            style={{ color: "#B58B47", ...arabicFont }}
          >
            {c.badge}
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: "#F8F6F1", ...headingFont }}
          >
            {c.title}
          </h2>
          <p className="text-lg" style={{ color: "#9ca3af", ...arabicFont }}>
            {c.subtitle}
          </p>
        </div>

        <div className="my-12 relative rounded-2xl overflow-hidden aspect-[16/7]">
          <Image
            src="/images/unsplash-2.svg"
            alt="Turkish restaurant and street food culture"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 896px"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 50%, rgba(26,26,26,0.8) 100%)",
            }}
          />
        </div>

        <div className="space-y-10">
          {c.sections.map((sec, i) => (
            <div key={i}>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: "#F8F6F1", ...headingFont }}
              >
                {sec.heading}
              </h3>
              {sec.body.map((para, j) => (
                <p
                  key={j}
                  className="text-base leading-relaxed mb-4"
                  style={{ color: "#9ca3af", ...arabicFont }}
                >
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
