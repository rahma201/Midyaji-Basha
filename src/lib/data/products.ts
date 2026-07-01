import type { Product } from "@/types";

const sharedGallery = {
  mussels: ["/images/stuffed-mussels-story.webp", "/images/stuffed-mussels-og.webp"],
  yalanji: ["/images/yalanci-blog.webp", "/images/stuffed-mussels-story.webp"],
  cig: ["/images/cig-kofte-blog.webp", "/images/turkish-wraps-blog.webp"],
};

export const products: Product[] = [
  {
    slug: "turkish-stuffed-mussels",
    name: "Turkish Stuffed Mussels",
    nameAr: "المحار التركي",
    price: "0.75 JOD per piece",
    priceLabel: "From 0.75 JOD / piece",
    priceFrom: 0.75,
    description:
      "Istanbul-style Midye Dolma: tender mussels filled with aromatic rice and served with fresh lemon.",
    descriptionAr:
      "ميدي دولما على طريقة إسطنبول: محار طري محشو بأرز عطري ويُقدّم مع الليمون الطازج.",
    longDescription:
      "Turkish Stuffed Mussels are the signature bite at Midyaji Basha. Each piece connects mussels, spiced rice, lemon, Turkish street food culture, and Amman in one focused product.",
    image: "/images/stuffed-mussels-story.webp",
    gallery: sharedGallery.mussels,
    ingredients: [
      "Fresh mussels",
      "Seasoned rice",
      "Turkish spices",
      "Fresh lemon",
      "Parsley",
      "Olive oil",
    ],
    ingredientsAr: [
      "محار طازج",
      "أرز متبّل",
      "بهارات تركية",
      "ليمون طازج",
      "بقدونس",
      "زيت زيتون",
    ],
    serving:
      "Served by the piece in the shell with lemon. Open the shell, squeeze lemon over the rice, and eat it in one bright bite.",
    servingAr:
      "يُقدّم بالقطعة داخل الصدفة مع الليمون. افتح الصدفة، اعصر الليمون فوق الأرز، واستمتع باللقمة كما تؤكل في إسطنبول.",
    allergens: ["Shellfish"],
    allergensAr: ["محار ومأكولات بحرية"],
    category: "Signature Mussels",
    categoryAr: "المحار المميز",
    tagline: "The Istanbul shell ritual, served fresh in Amman.",
    taglineAr: "طقس الصدفة الإسطنبولية، طازجاً في عمّان.",
    directAnswer:
      "Turkish Stuffed Mussels, also called Midye Dolma, are mussels filled with seasoned rice and served with lemon. At Midyaji Basha in Amman, they are the core signature product and are priced at 0.75 JOD per piece.",
    directAnswerAr:
      "المحار التركي أو ميدي دولما هو محار محشو بأرز متبّل ويُقدّم مع الليمون. في ميديجي باشا في عمّان هو المنتج الرئيسي وسعر القطعة 0.75 دينار.",
    sections: [
      {
        id: "what",
        title: "What Is This Product?",
        paragraphs: [
          "Turkish Stuffed Mussels are known in Turkish as Midye Dolma. The idea is simple and memorable: a mussel shell becomes a small vessel for warm seasoned rice, herbs, and lemon. The dish is strongly connected to Istanbul, where mussel vendors became part of the rhythm of busy streets, waterfront walks, and late-night food culture.",
          "The origin of Midye Dolma belongs to the wider Ottoman and Turkish dolma tradition. Dolma means something filled, and Turkish cuisine applies that logic to vegetables, leaves, peppers, and seafood. Mussels made the format portable. You do not need a plate or fork to understand the dish; you need a shell, rice, lemon, and a few seconds of attention.",
          "It became popular because it compresses a full meal into one bite. The mussel brings sea depth, the rice brings warmth and spice, and the lemon keeps everything clean. For Midyaji Basha, this product is more than an item on a menu. It is the reason the restaurant exists as a specialist Turkish street food destination in Amman, Jordan.",
        ],
      },
      {
        id: "ingredients",
        title: "Ingredients",
        paragraphs: [
          "The important ingredients are fresh mussels, seasoned rice, Turkish spices, herbs, olive oil, and lemon. The rice is not filler; it is the aromatic center of the bite. It carries the spice, absorbs the seafood character, and gives the mussel enough body to feel satisfying.",
          "Fresh lemon is essential. Midye Dolma without lemon loses the bright finish that makes the dish feel alive. The lemon cuts through the richness of the rice and seafood while making the shell-by-shell serving style feel clean and refreshing.",
        ],
      },
      {
        id: "preparation",
        title: "Preparation",
        paragraphs: [
          "Traditionally, mussels are cleaned carefully, opened, filled with seasoned rice, closed again, and cooked until the rice and mussel settle into one complete bite. The method requires patience because the shell must hold together and the rice must stay fragrant rather than heavy.",
          "At Midyaji Basha, the preparation is treated as daily craft. The goal is consistency: each piece should feel like the same Istanbul street food memory, whether a guest orders one mussel, a small tray, or a larger order to share.",
        ],
      },
      {
        id: "experience",
        title: "Serving Experience",
        paragraphs: [
          "The best way to enjoy Turkish Stuffed Mussels is by hand. Open the shell, squeeze lemon over the rice, and eat directly from the shell. That gesture is part of the culture; it makes the product immediate, social, and unmistakably connected to Turkish street food.",
          "It pairs naturally with Çiğ Köfte Sandwich for contrast, Yalanji Fatteh for a softer plate, or Çiğ Köfte Meal for a fuller spread. For first-time visitors, this is the product to start with because it explains Midyaji Basha in one bite.",
        ],
      },
      {
        id: "why-midyaji",
        title: "Why Midyaji Basha?",
        paragraphs: [
          "Customers choose Midyaji Basha for Turkish Stuffed Mussels because the restaurant is built around this specialty, not around a generic menu. The product is the center of the brand, the SEO entity, the street food story, and the reason people search for Midye Dolma in Amman.",
          "The page, menu, FAQ, and internal links all reinforce the same relationship: Midyaji Basha, Turkish Stuffed Mussels, Turkish cuisine, Turkish street food, Amman, and Jordan. That makes the experience easier for guests and clearer for search engines and AI assistants.",
        ],
      },
    ],
    sectionsAr: [
      {
        id: "what",
        title: "ما هو هذا المنتج؟",
        paragraphs: [
          "المحار التركي يعرف في تركيا باسم ميدي دولما. الفكرة بسيطة لكنها عميقة: تتحول صدفة المحار إلى وعاء صغير لأرز متبّل دافئ مع الأعشاب والليمون. يرتبط الطبق بإسطنبول، حيث أصبح بائعو المحار جزءاً من حركة الشوارع والمشاوير البحرية وثقافة الأكل الليلي.",
          "أصل ميدي دولما يعود إلى تقاليد الدولما في المطبخ العثماني والتركي، حيث تُحشى الخضار والأوراق والفلفل وأحياناً ثمار البحر. المحار جعل الفكرة أخف وأكثر مباشرة؛ لا تحتاج إلى طبق أو شوكة لتفهمه، بل إلى صدفة وأرز وليمون ولحظة انتباه.",
          "انتشر هذا الطبق لأنه يجمع وجبة كاملة في لقمة واحدة. المحار يعطي عمق البحر، والأرز يعطي الدفء والبهارات، والليمون يجعل النهاية منعشة. في ميديجي باشا، المحار التركي ليس صنفاً جانبياً بل المنتج الذي بُنيت حوله هوية المطعم في عمّان.",
        ],
      },
      {
        id: "ingredients",
        title: "المكوّنات",
        paragraphs: [
          "المكوّنات الأساسية هي المحار الطازج، الأرز المتبّل، البهارات التركية، الأعشاب، زيت الزيتون، والليمون. الأرز ليس حشوة عادية؛ هو قلب النكهة الذي يحمل البهارات ويتشرّب طابع البحر ويجعل اللقمة مشبعة ومتوازنة.",
          "الليمون الطازج عنصر لا يمكن الاستغناء عنه. من دونه يفقد ميدي دولما اللمسة الحامضة التي ترفع النكهة وتجعل تجربة الأكل من الصدفة نظيفة ومنعشة.",
        ],
      },
      {
        id: "preparation",
        title: "طريقة التحضير",
        paragraphs: [
          "تقليدياً يُنظّف المحار بعناية، ثم يُفتح ويُحشى بالأرز المتبّل ويُغلق مرة أخرى قبل الطهي. تحتاج الطريقة إلى صبر لأن الصدفة يجب أن تبقى متماسكة، والأرز يجب أن يبقى عطرياً لا ثقيلاً.",
          "في ميديجي باشا نتعامل مع التحضير كحرفة يومية. الهدف أن تكون كل قطعة واضحة ومتوازنة، سواء طلب الضيف قطعة واحدة أو طلباً أكبر للمشاركة.",
        ],
      },
      {
        id: "experience",
        title: "تجربة التقديم",
        paragraphs: [
          "أفضل طريقة للاستمتاع بالمحار التركي هي باليد. افتح الصدفة، اعصر الليمون فوق الأرز، وتناول اللقمة مباشرة. هذه الحركة جزء من ثقافة الطبق وتجعله اجتماعياً وسريعاً وواضح الارتباط بأكل الشارع التركي.",
          "يناسب المحار التركي ساندويتش تشي كفتة للتباين، وفتة اليالنجي لطبق ألين، ووجبة تشي كفتة لتجربة أكثر امتلاءً. للزيارة الأولى، هذا هو المنتج الذي يبدأ منه فهم ميديجي باشا.",
        ],
      },
      {
        id: "why-midyaji",
        title: "لماذا ميديجي باشا؟",
        paragraphs: [
          "يختار الزبائن ميديجي باشا للمحار التركي لأن المطعم متخصص في هذا المنتج، وليس قائمة عامة بلا هوية. المحار هو مركز العلامة، ومركز القصة، والسبب الذي يجعل الناس يبحثون عن ميدي دولما في عمّان.",
          "تعمل الصفحة والقائمة والأسئلة الشائعة والروابط الداخلية على تعزيز علاقة واضحة بين ميديجي باشا، المحار التركي، المطبخ التركي، أكل الشارع التركي، عمّان، والأردن. هذا يفيد الزائر ويفيد محركات البحث ومساعدات الذكاء الاصطناعي أيضاً.",
        ],
      },
    ],
    sellingPoints: [
      "Priced by the piece for easy tasting and sharing.",
      "A direct answer to where to find Midye Dolma in Amman.",
      "Bright lemon finish, warm rice, and tender mussel in one shell.",
      "A true Turkish street food format, not a generic seafood plate.",
      "Perfect first order for visitors discovering Midyaji Basha.",
      "Strongly connected to Istanbul, Turkish cuisine, Amman, and Jordan.",
    ],
    sellingPointsAr: [
      "سعر بالقطعة لتجربة سهلة ومشاركة مرنة.",
      "إجابة مباشرة لمن يبحث عن ميدي دولما في عمّان.",
      "ليمون منعش، أرز دافئ، ومحار طري في صدفة واحدة.",
      "أكل شارع تركي حقيقي وليس طبق مأكولات بحرية عام.",
      "أفضل بداية لمن يزور ميديجي باشا لأول مرة.",
      "يربط إسطنبول والمطبخ التركي وعمّان والأردن في لقمة واحدة.",
    ],
    faqs: [
      { question: "What are Turkish Stuffed Mussels?", answer: "They are mussels filled with seasoned rice and served with lemon, known in Turkish as Midye Dolma." },
      { question: "How much is one piece?", answer: "Each Turkish Stuffed Mussel is priced at 0.75 JOD per piece." },
      { question: "Is this the same as Midye Dolma?", answer: "Yes. Midye Dolma is the Turkish name for stuffed mussels." },
      { question: "How do I eat it?", answer: "Open the shell, squeeze lemon over the rice, and eat the mussel and rice directly from the shell." },
      { question: "Is it spicy?", answer: "It is aromatic rather than hot. The flavor comes from rice, herbs, Turkish spices, seafood, and lemon." },
      { question: "Does it contain shellfish?", answer: "Yes. This product contains mussels and is not suitable for shellfish allergies." },
      { question: "Is it served hot or cold?", answer: "It is best enjoyed fresh with lemon. Message Midyaji Basha for current serving and availability details." },
      { question: "Is it a meal or a snack?", answer: "It can be either. Order a few pieces as a snack or combine it with Yalanji Fatteh and Çiğ Köfte for a fuller meal." },
      { question: "Why is it famous in Turkey?", answer: "It became famous as a portable Istanbul street food sold by mussel vendors and eaten quickly with lemon." },
      { question: "Where can I find it in Amman?", answer: "Midyaji Basha serves Turkish Stuffed Mussels in Amman, Jordan, with ordering through verified contact channels." },
    ],
    faqsAr: [
      { question: "ما هو المحار التركي؟", answer: "هو محار محشو بأرز متبّل ويُقدّم مع الليمون، ويُعرف في تركيا باسم ميدي دولما." },
      { question: "كم سعر القطعة؟", answer: "سعر قطعة المحار التركي هو 0.75 دينار أردني." },
      { question: "هل هو نفسه ميدي دولما؟", answer: "نعم. ميدي دولما هو الاسم التركي للمحار المحشو." },
      { question: "كيف يؤكل؟", answer: "افتح الصدفة، اعصر الليمون فوق الأرز، وتناول الأرز والمحار مباشرة من الصدفة." },
      { question: "هل هو حار؟", answer: "نكهته عطرية وليست حارة؛ تأتي من الأرز والأعشاب والبهارات التركية والليمون." },
      { question: "هل يحتوي على محار؟", answer: "نعم، يحتوي على محار ولا يناسب من لديهم حساسية من ثمار البحر." },
      { question: "هل يُقدّم ساخناً أم بارداً؟", answer: "الأفضل تناوله طازجاً مع الليمون. تواصل مع ميديجي باشا لمعرفة التوفر وطريقة التقديم الحالية." },
      { question: "هل هو وجبة أم سناك؟", answer: "يمكن أن يكون الاثنين. اطلب عدة قطع كتجربة خفيفة أو اجمعه مع فتة اليالنجي وتشي كفتة لوجبة أكبر." },
      { question: "لماذا اشتهر في تركيا؟", answer: "اشتهر لأنه أكل شارع إسطنبولي سريع يؤكل من الصدفة مع الليمون." },
      { question: "أين أجده في عمّان؟", answer: "يقدّم ميديجي باشا المحار التركي في عمّان، الأردن، ويمكن الطلب عبر قنوات التواصل الرسمية." },
    ],
    blogSlugs: ["what-is-midye-dolma", "history-of-turkish-stuffed-mussels", "turkish-street-food-guide-amman"],
    seo: {
      title: "Turkish Stuffed Mussels in Amman | Midyaji Basha",
      titleAr: "المحار التركي في عمّان | ميديجي باشا",
      description: "Order Turkish Stuffed Mussels, Midye Dolma, at Midyaji Basha in Amman. Fresh mussels, seasoned rice, lemon, and Istanbul street food culture.",
      descriptionAr: "اطلب المحار التركي ميدي دولما من ميديجي باشا في عمّان: محار طازج، أرز متبّل، ليمون، وروح أكل الشارع التركي.",
    },
  },
  {
    slug: "yalanji-fatteh",
    name: "Yalanji Fatteh",
    nameAr: "فتة اليالنجي",
    price: "Small 3.5 JOD · Large 5.5 JOD",
    priceLabel: "From 3.5 JOD",
    priceFrom: 3.5,
    description:
      "A generous Yalanji-inspired fatteh plate built around vine leaves, creamy layers, lemon, and herbs.",
    descriptionAr:
      "فتة مستوحاة من اليالنجي تجمع ورق العنب، طبقات كريمية، ليمون، وأعشاب بنكهة متوازنة.",
    longDescription:
      "Yalanji Fatteh gives the menu a soft, shareable, plant-forward plate beside the sharper street-food energy of mussels and Çiğ Köfte.",
    image: "/images/yalanci-blog.webp",
    gallery: sharedGallery.yalanji,
    ingredients: ["Yalanji vine leaves", "Rice", "Yogurt-style creamy layer", "Crisp bread", "Lemon", "Olive oil", "Fresh herbs"],
    ingredientsAr: ["ورق عنب يالنجي", "أرز", "طبقة كريمية", "خبز مقرمش", "ليمون", "زيت زيتون", "أعشاب طازجة"],
    serving:
      "Served as a small or large plate. Best enjoyed with lemon, herbs, and a mix of creamy and crisp textures in every spoon.",
    servingAr:
      "تُقدّم كطبق صغير أو كبير. الأفضل تناولها مع الليمون والأعشاب ومزج الطبقات الكريمية والمقرمشة في كل ملعقة.",
    allergens: ["Gluten", "Dairy depending on preparation"],
    allergensAr: ["جلوتين", "قد تحتوي على ألبان حسب التحضير"],
    category: "Fatteh Plate",
    categoryAr: "طبق فتة",
    tagline: "A Levantine comfort plate through a Turkish street-food lens.",
    taglineAr: "راحة الفتة الشامية بروح أكل الشارع التركي.",
    directAnswer:
      "Yalanji Fatteh at Midyaji Basha is a plate built around stuffed vine-leaf flavor, creamy texture, lemon, herbs, and crisp bread. It comes in small and large sizes from 3.5 JOD.",
    directAnswerAr:
      "فتة اليالنجي في ميديجي باشا طبق يجمع نكهة ورق العنب والطبقات الكريمية والليمون والأعشاب والخبز المقرمش. تتوفر بحجم صغير وكبير ابتداءً من 3.5 دينار.",
    sections: [
      {
        id: "what",
        title: "What Is This Product?",
        paragraphs: [
          "Yalanji Fatteh is Midyaji Basha's plate-format expression of vine-leaf comfort food. Yalanji is associated with stuffed vine leaves, rice, herbs, lemon, and olive oil. Fatteh is a beloved layered style in the region, often built with crisp bread, creamy elements, and a spoonable structure.",
          "This product brings those ideas together without turning the menu into a broad restaurant menu. It remains focused: one plate, one role, one flavor family. It gives guests who love rice, lemon, herbs, and soft textures a natural companion to Turkish Stuffed Mussels.",
          "Its popularity comes from familiarity and contrast. In Amman and Jordan, fatteh is comforting and recognizable. Yalanji adds brightness and a plant-forward identity. Together they create a product that feels familiar to local guests while still supporting Midyaji Basha's Turkish street food positioning.",
        ],
      },
      {
        id: "ingredients",
        title: "Ingredients",
        paragraphs: [
          "Important ingredients include yalanji-style vine leaves, rice, a creamy layer, crisp bread, lemon, olive oil, and herbs. The balance matters: too much cream would hide the vine-leaf character, while too little acidity would make the plate heavy.",
          "The lemon and herbs give the dish its lift. They connect Yalanji Fatteh to the same flavor logic that defines the rest of the menu: acidity, freshness, hand preparation, and a clear product identity.",
        ],
      },
      {
        id: "preparation",
        title: "Preparation",
        paragraphs: [
          "Traditionally, yalanji-style fillings rely on rice, herbs, olive oil, and lemon. In a fatteh format, those flavors are layered with crisp bread and a creamy base so the spoon can pick up contrast in every bite.",
          "The preparation is about timing and assembly. Crisp elements should stay lively, the creamy layer should feel generous, and the vine-leaf flavor should remain present rather than disappearing into the plate.",
        ],
      },
      {
        id: "experience",
        title: "Serving Experience",
        paragraphs: [
          "Yalanji Fatteh is served in small and large plate sizes. Choose small when pairing it with Turkish Stuffed Mussels or Çiğ Köfte Sandwich. Choose large when you want the plate to become the center of the meal.",
          "The best way to enjoy it is to dig through the layers, not eat them separately. Each spoon should include creaminess, lemon, herbs, and crisp texture. It is a softer, calmer counterpoint to the shell-by-shell ritual of Midye Dolma.",
        ],
      },
      {
        id: "why-midyaji",
        title: "Why Midyaji Basha?",
        paragraphs: [
          "Midyaji Basha keeps Yalanji Fatteh inside a four-product system. That restraint is important. It means the plate is not just another side dish; it is one of the four signatures that define the restaurant.",
          "For SEO, GEO, and AEO, Yalanji Fatteh strengthens the relationship between Midyaji Basha, Turkish street food, Amman, Jordan, vine leaves, lemon, and rice-based comfort food.",
        ],
      },
    ],
    sectionsAr: [
      {
        id: "what",
        title: "ما هو هذا المنتج؟",
        paragraphs: [
          "فتة اليالنجي هي تعبير ميديجي باشا عن نكهة ورق العنب في طبق مريح وسهل المشاركة. اليالنجي يرتبط بورق العنب والأرز والأعشاب والليمون وزيت الزيتون، والفتة أسلوب محبوب في المنطقة يقوم على طبقات كريمية وخبز مقرمش وقوام يؤكل بالملعقة.",
          "يجمع هذا المنتج الفكرتين دون تحويل القائمة إلى مطعم عام. يبقى التركيز واضحاً: طبق واحد، دور واحد، عائلة نكهات واحدة. هو رفيق طبيعي للمحار التركي لمن يحب الأرز والليمون والأعشاب والقوام الناعم.",
          "انتشار الطبق يأتي من الألفة والتوازن. في عمّان والأردن الفتة طبق قريب من الناس، واليالنجي يضيف له حموضة وخفة وطابعاً نباتياً. النتيجة منتج مألوف محلياً ومرتبط بهوية ميديجي باشا التركية في الوقت نفسه.",
        ],
      },
      {
        id: "ingredients",
        title: "المكوّنات",
        paragraphs: [
          "المكوّنات المهمة تشمل ورق عنب بنكهة اليالنجي، أرز، طبقة كريمية، خبز مقرمش، ليمون، زيت زيتون، وأعشاب. التوازن مهم؛ الكثير من الكريمة يخفي نكهة الورق، والقليل من الحموضة يجعل الطبق ثقيلاً.",
          "الليمون والأعشاب يعطيان الطبق رفعته. وهما يربطان فتة اليالنجي بنفس منطق النكهة في بقية القائمة: حموضة، طزاجة، تحضير يدوي، وهوية منتج واضحة.",
        ],
      },
      {
        id: "preparation",
        title: "طريقة التحضير",
        paragraphs: [
          "تقليدياً تعتمد نكهات اليالنجي على الأرز والأعشاب وزيت الزيتون والليمون. في صيغة الفتة تُبنى هذه النكهات على طبقات مع الخبز المقرمش والقاعدة الكريمية حتى تحمل كل ملعقة أكثر من ملمس ونكهة.",
          "التحضير هنا قائم على التوقيت والتركيب. يجب أن يبقى العنصر المقرمش حاضراً، وأن تكون الطبقة الكريمية سخية، وأن تظهر نكهة ورق العنب بدلاً من أن تضيع داخل الطبق.",
        ],
      },
      {
        id: "experience",
        title: "تجربة التقديم",
        paragraphs: [
          "تُقدّم فتة اليالنجي بحجم صغير وحجم كبير. اختر الصغير عندما تريدها بجانب المحار التركي أو ساندويتش تشي كفتة، واختر الكبير عندما تريدها أن تكون مركز الوجبة.",
          "أفضل طريقة لتناولها هي مزج الطبقات لا فصلها. كل ملعقة يجب أن تحمل قواماً كريماً، لمسة ليمون، أعشاباً، وقرمشة. هي المقابل الهادئ والناعم لطقس المحار داخل الصدفة.",
        ],
      },
      {
        id: "why-midyaji",
        title: "لماذا ميديجي باشا؟",
        paragraphs: [
          "يحافظ ميديجي باشا على فتة اليالنجي داخل نظام من أربعة منتجات فقط. هذا التركيز مهم لأنها ليست طبقاً جانبياً عابراً، بل واحدة من التواقيع الأربعة التي تعرّف المطعم.",
          "على مستوى البحث والذكاء الاصطناعي، تعزز فتة اليالنجي العلاقة بين ميديجي باشا، أكل الشارع التركي، عمّان، الأردن، ورق العنب، الليمون، والأطباق المريحة المعتمدة على الأرز.",
        ],
      },
    ],
    sellingPoints: [
      "Small and large sizes for solo orders or sharing.",
      "Comforting, spoonable, and still product-focused.",
      "A natural bridge between Jordanian fatteh culture and Turkish yalanji flavors.",
      "Bright lemon and herbs keep the plate fresh.",
      "Pairs well with mussels and both Çiğ Köfte products.",
      "A vegetarian-friendly anchor on the four-product menu.",
    ],
    sellingPointsAr: [
      "حجمان: صغير وكبير للطلب الفردي أو المشاركة.",
      "طبق مريح يؤكل بالملعقة مع هوية واضحة.",
      "جسر طبيعي بين ثقافة الفتة في الأردن ونكهات اليالنجي التركية.",
      "الليمون والأعشاب يحافظان على خفة الطبق.",
      "يناسب المحار ومنتجات تشي كفتة.",
      "خيار نباتي مهم ضمن المنتجات الأربعة.",
    ],
    faqs: [
      { question: "What is Yalanji Fatteh?", answer: "It is a layered plate inspired by yalanji vine-leaf flavors, creamy texture, crisp bread, lemon, and herbs." },
      { question: "What sizes are available?", answer: "Yalanji Fatteh is available as a small plate for 3.5 JOD and a large plate for 5.5 JOD." },
      { question: "Is it a Turkish dish?", answer: "It connects yalanji-style vine-leaf flavors with the regional fatteh format, fitting Midyaji Basha's Turkish street food identity in Amman." },
      { question: "Is it good for sharing?", answer: "Yes. The large plate is especially suited for sharing with Turkish Stuffed Mussels or Çiğ Köfte." },
      { question: "Does it contain meat?", answer: "The flavor direction is plant-forward. Ask Midyaji Basha for current preparation and allergen details before ordering." },
      { question: "Is it served hot or cold?", answer: "It is served as a composed fatteh-style plate. Contact the restaurant for current serving details." },
      { question: "What does it taste like?", answer: "It is creamy, lemony, herbal, and comforting, with crisp texture from the bread layer." },
      { question: "What should I order with it?", answer: "Pair it with Turkish Stuffed Mussels for contrast or Çiğ Köfte Sandwich for a fuller street-food meal." },
      { question: "Is it spicy?", answer: "No. It is more creamy and tangy than spicy." },
      { question: "Why is it on a four-product menu?", answer: "It gives Midyaji Basha a focused, shareable plate that complements mussels and Çiğ Köfte without adding extra categories." },
    ],
    faqsAr: [
      { question: "ما هي فتة اليالنجي؟", answer: "هي طبق طبقات مستوحى من نكهة ورق العنب اليالنجي مع قوام كريمي وخبز مقرمش وليمون وأعشاب." },
      { question: "ما الأحجام المتوفرة؟", answer: "تتوفر فتة اليالنجي بطبق صغير بسعر 3.5 دينار وطبق كبير بسعر 5.5 دينار." },
      { question: "هل هي طبق تركي؟", answer: "هي تجمع نكهة اليالنجي المرتبطة بورق العنب مع أسلوب الفتة المعروف في المنطقة، ضمن هوية ميديجي باشا التركية في عمّان." },
      { question: "هل تناسب المشاركة؟", answer: "نعم، خصوصاً الحجم الكبير مع المحار التركي أو منتجات تشي كفتة." },
      { question: "هل تحتوي على لحم؟", answer: "اتجاهها نباتي ومبني على ورق العنب والأرز. اسأل ميديجي باشا عن التحضير ومسببات الحساسية قبل الطلب." },
      { question: "هل تُقدّم ساخنة أم باردة؟", answer: "تُقدّم كطبق فتة مركّب. تواصل مع المطعم لمعرفة طريقة التقديم الحالية." },
      { question: "ما طعمها؟", answer: "طعمها كريمي وحامض وعشبي ومريح، مع قرمشة من طبقة الخبز." },
      { question: "ماذا أطلب معها؟", answer: "اطلبها مع المحار التركي للتباين أو مع ساندويتش تشي كفتة لوجبة شارع أكبر." },
      { question: "هل هي حارة؟", answer: "لا، طابعها كريمي وحامض أكثر من كونه حاراً." },
      { question: "لماذا هي ضمن قائمة من أربعة منتجات؟", answer: "لأنها تقدم طبقاً قابلاً للمشاركة يكمل المحار وتشي كفتة دون إضافة تصنيفات عشوائية." },
    ],
    blogSlugs: ["turkish-street-food-guide-amman", "first-time-guide-midyaji-basha"],
    seo: {
      title: "Yalanji Fatteh in Amman | Midyaji Basha",
      titleAr: "فتة اليالنجي في عمّان | ميديجي باشا",
      description: "Try Yalanji Fatteh at Midyaji Basha in Amman. Small and large plates with vine-leaf flavor, creamy texture, lemon, herbs, and crisp bread.",
      descriptionAr: "جرّب فتة اليالنجي من ميديجي باشا في عمّان. أطباق صغيرة وكبيرة بنكهات ورق العنب والليمون والأعشاب والخبز المقرمش.",
    },
  },
  {
    slug: "cig-kofte-sandwich",
    name: "Çiğ Köfte Sandwich",
    nameAr: "ساندويتش تشي كفتة",
    price: "2 JOD",
    priceLabel: "2 JOD",
    priceFrom: 2,
    description:
      "A handheld Çiğ Köfte street-food sandwich with bulgur, Turkish spices, herbs, lemon, and fresh wrap texture.",
    descriptionAr:
      "ساندويتش تشي كفتة عملي يجمع البرغل والبهارات التركية والأعشاب والليمون بقوام طازج وسهل الأكل.",
    longDescription:
      "The Çiğ Köfte Sandwich turns one of Turkey's most famous plant-forward street foods into the quickest order on the Midyaji Basha menu.",
    image: "/images/cig-kofte-blog.webp",
    gallery: sharedGallery.cig,
    ingredients: ["Çiğ Köfte mix", "Fine bulgur", "Tomato paste", "Pomegranate molasses", "Fresh herbs", "Lemon", "Wrap bread"],
    ingredientsAr: ["خلطة تشي كفتة", "برغل ناعم", "معجون طماطم", "دبس رمان", "أعشاب طازجة", "ليمون", "خبز ساندويتش"],
    serving:
      "Served as a ready-to-eat sandwich. Best with lemon and fresh herbs for a quick Turkish street-food bite.",
    servingAr:
      "يُقدّم كساندويتش جاهز للأكل. الأفضل تناوله مع الليمون والأعشاب كوجبة شارع تركية سريعة.",
    allergens: ["Gluten"],
    allergensAr: ["جلوتين"],
    category: "Street Sandwich",
    categoryAr: "ساندويتش شارع",
    tagline: "Turkey's vegan street-food classic, wrapped for Amman.",
    taglineAr: "كلاسيكية الشارع التركية النباتية، في ساندويتش يناسب عمّان.",
    directAnswer:
      "Çiğ Köfte Sandwich is a 2 JOD handheld sandwich made from Turkish-style Çiğ Köfte, bulgur, herbs, spices, lemon, and wrap bread. It is the fastest street-food order at Midyaji Basha.",
    directAnswerAr:
      "ساندويتش تشي كفتة هو ساندويتش بسعر 2 دينار مصنوع من تشي كفتة على الطريقة التركية مع البرغل والأعشاب والبهارات والليمون والخبز. هو أسرع طلب شارع في ميديجي باشا.",
    sections: [
      {
        id: "what",
        title: "What Is This Product?",
        paragraphs: [
          "Çiğ Köfte is one of Turkey's most recognizable street foods. Historically, the name referred to raw meatballs from southeastern Turkey, but the modern street-food version is widely known as a plant-forward bulgur preparation shaped with spices, tomato paste, herbs, lemon, and pomegranate molasses.",
          "The sandwich version makes the product immediate. Instead of serving Çiğ Köfte as separate pieces or a plate, Midyaji Basha wraps the flavor into a handheld format that fits mall visits, quick lunches, and casual orders in Amman.",
          "It became popular because it is bold, affordable, portable, and satisfying without feeling heavy. The flavor is tangy and spiced, while the texture is dense enough to feel like a real meal. On the four-product menu, it is the quick street-food product.",
        ],
      },
      {
        id: "ingredients",
        title: "Ingredients",
        paragraphs: [
          "The key ingredients are fine bulgur, tomato paste, pepper-style seasoning, pomegranate molasses, herbs, lemon, and wrap bread. The bulgur gives body, the molasses brings tang, and the herbs keep the sandwich fresh.",
          "Because Çiğ Köfte contains bulgur and bread, guests with gluten sensitivity should check before ordering. The flavor profile is otherwise plant-forward and built around Turkish street-food seasoning.",
        ],
      },
      {
        id: "preparation",
        title: "Preparation",
        paragraphs: [
          "Traditional Çiğ Köfte is made by kneading fine bulgur with pastes, spices, and liquids until the grains soften and the mixture becomes cohesive. That kneading is important because it creates the signature texture.",
          "For the sandwich, the prepared Çiğ Köfte is wrapped with fresh supporting ingredients so it stays easy to hold and eat. The goal is speed without losing the deep, tangy Turkish character of the product.",
        ],
      },
      {
        id: "experience",
        title: "Serving Experience",
        paragraphs: [
          "The Çiğ Köfte Sandwich is best when you want something quick, focused, and flavorful. It works well before or after Turkish Stuffed Mussels because it gives a totally different texture and a plant-forward contrast.",
          "Recommended accompaniments include lemon, fresh herbs, and Yalanji Fatteh if you want a more filling meal. For guests searching by voice, the short answer is simple: order this when you want Turkish Çiğ Köfte in sandwich form in Amman.",
        ],
      },
      {
        id: "why-midyaji",
        title: "Why Midyaji Basha?",
        paragraphs: [
          "Midyaji Basha treats the sandwich as one of four signatures, not as a generic wrap category. That makes it easier for customers to understand the menu and easier for search engines to connect Çiğ Köfte with Midyaji Basha, Turkish cuisine, Amman, and Jordan.",
          "The sandwich is a gateway product. Many guests discover Çiğ Köfte through this format, then return for the meal version when they want a fuller serving.",
        ],
      },
    ],
    sectionsAr: [
      {
        id: "what",
        title: "ما هو هذا المنتج؟",
        paragraphs: [
          "تشي كفتة من أشهر أكلات الشارع في تركيا. تاريخياً يشير الاسم إلى كفتة نيئة من جنوب شرق تركيا، لكن النسخة الحديثة المنتشرة في الشارع أصبحت قائمة غالباً على البرغل الناعم والبهارات ومعجون الطماطم والأعشاب والليمون ودبس الرمان.",
          "نسخة الساندويتش تجعل المنتج مباشراً وسهلاً. بدلاً من تقديم تشي كفتة كقطع منفصلة أو طبق، يلف ميديجي باشا النكهة في ساندويتش عملي يناسب الزيارات السريعة والغداء الخفيف في عمّان.",
          "انتشر هذا المنتج لأنه قوي النكهة، مناسب السعر، سهل الحمل، ومشبع دون ثقل. النكهة حامضة ومتبهّرة، والقوام كثيف بما يكفي ليشعر الضيف أنه تناول وجبة حقيقية. ضمن قائمة الأربعة، هو المنتج الأسرع.",
        ],
      },
      {
        id: "ingredients",
        title: "المكوّنات",
        paragraphs: [
          "المكوّنات الأساسية هي البرغل الناعم، معجون الطماطم، بهارات على الطريقة التركية، دبس الرمان، الأعشاب، الليمون، وخبز الساندويتش. البرغل يعطي القوام، ودبس الرمان يعطي الحموضة، والأعشاب تحافظ على الطزاجة.",
          "لأن تشي كفتة تحتوي على البرغل والخبز، على من لديهم حساسية جلوتين السؤال قبل الطلب. أما النكهة فهي نباتية الطابع ومبنية على توابل الشارع التركي.",
        ],
      },
      {
        id: "preparation",
        title: "طريقة التحضير",
        paragraphs: [
          "تُحضّر تشي كفتة تقليدياً بعجن البرغل الناعم مع المعاجين والبهارات والسوائل حتى يلين البرغل وتتماسك الخلطة. هذه المرحلة مهمة لأنها تصنع القوام المعروف للطبق.",
          "في الساندويتش، تُلف الخلطة الجاهزة مع مكوّنات مساندة طازجة بحيث يبقى المنتج سهلاً في الحمل والأكل. الهدف هو السرعة دون خسارة النكهة التركية الحامضة والعميقة.",
        ],
      },
      {
        id: "experience",
        title: "تجربة التقديم",
        paragraphs: [
          "ساندويتش تشي كفتة مناسب عندما تريد طلباً سريعاً ومركزاً ومليئاً بالنكهة. يناسبه المحار التركي قبله أو بعده لأنه يعطي قواماً مختلفاً وتبايناً نباتياً واضحاً.",
          "ننصح به مع الليمون والأعشاب، ومع فتة اليالنجي إذا أردت وجبة أكبر. لمن يبحث صوتياً، الإجابة المباشرة: هذا هو طلب تشي كفتة على شكل ساندويتش في عمّان.",
        ],
      },
      {
        id: "why-midyaji",
        title: "لماذا ميديجي باشا؟",
        paragraphs: [
          "يتعامل ميديجي باشا مع الساندويتش كواحد من أربعة منتجات رئيسية، لا كتصنيف لفائف عام. هذا يجعل القائمة أوضح للزبون وأقوى لمحركات البحث التي تربط تشي كفتة بميديجي باشا والمطبخ التركي وعمّان والأردن.",
          "الساندويتش هو مدخل سهل لتجربة تشي كفتة. كثيرون يكتشفونها بهذه الصيغة ثم يعودون لوجبة تشي كفتة عندما يريدون حصة أكبر.",
        ],
      },
    ],
    sellingPoints: [
      "Fastest product to order and eat.",
      "Clear 2 JOD price point.",
      "Plant-forward Turkish street food in a handheld format.",
      "Tangy, herbal, and satisfying without heaviness.",
      "A gateway into the fuller Çiğ Köfte Meal.",
      "Pairs naturally with mussels and Yalanji Fatteh.",
    ],
    sellingPointsAr: [
      "أسرع منتج للطلب والأكل.",
      "سعر واضح: 2 دينار.",
      "أكل شارع تركي بطابع نباتي في صيغة سهلة الحمل.",
      "حامض وعشبي ومشبع دون ثقل.",
      "مدخل مناسب قبل تجربة وجبة تشي كفتة.",
      "يناسب المحار وفتة اليالنجي.",
    ],
    faqs: [
      { question: "How much is the Çiğ Köfte Sandwich?", answer: "The Çiğ Köfte Sandwich is 2 JOD." },
      { question: "What is inside it?", answer: "It includes Turkish-style Çiğ Köfte with bulgur, spices, herbs, lemon, and wrap bread." },
      { question: "Is it vegan?", answer: "Çiğ Köfte is traditionally plant-forward in its modern street-food version. Ask about the current sandwich bread and preparation before ordering." },
      { question: "Does it contain gluten?", answer: "Yes. Bulgur and bread contain gluten." },
      { question: "Is it spicy?", answer: "It is tangy and spiced, with a street-food flavor rather than extreme heat." },
      { question: "Is it filling?", answer: "Yes. It is designed as a quick handheld meal." },
      { question: "What is the difference between sandwich and meal?", answer: "The sandwich is the quick handheld version; the meal is a fuller serving built around the same Çiğ Köfte flavor." },
      { question: "Can I order it with mussels?", answer: "Yes. It pairs well with Turkish Stuffed Mussels because the textures and flavors contrast." },
      { question: "Is Çiğ Köfte cooked?", answer: "Modern street-food Çiğ Köfte is a kneaded bulgur preparation, not a cooked meat product." },
      { question: "Where is it available?", answer: "It is available at Midyaji Basha in Amman, Jordan." },
    ],
    faqsAr: [
      { question: "كم سعر ساندويتش تشي كفتة؟", answer: "سعر ساندويتش تشي كفتة هو 2 دينار." },
      { question: "ماذا يحتوي؟", answer: "يحتوي على تشي كفتة على الطريقة التركية مع البرغل والبهارات والأعشاب والليمون والخبز." },
      { question: "هل هو نباتي؟", answer: "تشي كفتة الحديثة في الشارع التركي نباتية الطابع. اسأل عن الخبز والتحضير الحالي قبل الطلب." },
      { question: "هل يحتوي على جلوتين؟", answer: "نعم، البرغل والخبز يحتويان على جلوتين." },
      { question: "هل هو حار؟", answer: "نكهته حامضة ومتبهّرة أكثر من كونها حارة جداً." },
      { question: "هل يشبع؟", answer: "نعم، صُمم كوجبة سريعة سهلة الحمل." },
      { question: "ما الفرق بين الساندويتش والوجبة؟", answer: "الساندويتش هو النسخة السريعة، أما الوجبة فهي حصة أكبر مبنية حول نفس نكهة تشي كفتة." },
      { question: "هل أطلبه مع المحار؟", answer: "نعم، يناسب المحار التركي لأن القوام والنكهة مختلفان." },
      { question: "هل تشي كفتة مطبوخة؟", answer: "النسخة الحديثة من تشي كفتة هي خلطة برغل معجونة وليست طبق لحم مطبوخ." },
      { question: "أين يتوفر؟", answer: "يتوفر في ميديجي باشا في عمّان، الأردن." },
    ],
    blogSlugs: ["cig-kofte-explained", "turkish-street-food-guide-amman", "first-time-guide-midyaji-basha"],
    seo: {
      title: "Çiğ Köfte Sandwich in Amman | Midyaji Basha",
      titleAr: "ساندويتش تشي كفتة في عمّان | ميديجي باشا",
      description: "Order a 2 JOD Çiğ Köfte Sandwich at Midyaji Basha in Amman: Turkish-style bulgur, spices, herbs, lemon, and street-food flavor.",
      descriptionAr: "اطلب ساندويتش تشي كفتة بسعر 2 دينار من ميديجي باشا في عمّان: برغل وتوابل وأعشاب وليمون بنكهة شارع تركية.",
    },
  },
  {
    slug: "cig-kofte-meal",
    name: "Çiğ Köfte Meal",
    nameAr: "وجبة تشي كفتة",
    price: "3.5 JOD",
    priceLabel: "3.5 JOD",
    priceFrom: 3.5,
    description:
      "A fuller Çiğ Köfte serving for guests who want the complete Turkish bulgur, herb, lemon, and spice experience.",
    descriptionAr:
      "حصة أكبر من تشي كفتة لمن يريد تجربة تركية كاملة من البرغل والأعشاب والليمون والبهارات.",
    longDescription:
      "The Çiğ Köfte Meal is the fuller expression of the same Turkish street-food classic served in the sandwich.",
    image: "/images/turkish-wraps-blog.webp",
    gallery: sharedGallery.cig,
    ingredients: ["Çiğ Köfte portions", "Fine bulgur", "Tomato paste", "Pomegranate molasses", "Fresh herbs", "Lemon", "Serving accompaniments"],
    ingredientsAr: ["حصص تشي كفتة", "برغل ناعم", "معجون طماطم", "دبس رمان", "أعشاب طازجة", "ليمون", "مرفقات التقديم"],
    serving:
      "Served as a fuller meal portion with fresh accompaniments. Best for guests who already love Çiğ Köfte or want a more complete plant-forward order.",
    servingAr:
      "تُقدّم كوجبة أكبر مع مرفقات طازجة. تناسب من يحب تشي كفتة أو يريد طلباً نباتي الطابع وأكثر اكتمالاً.",
    allergens: ["Gluten"],
    allergensAr: ["جلوتين"],
    category: "Street Meal",
    categoryAr: "وجبة شارع",
    tagline: "The fuller Çiğ Köfte experience.",
    taglineAr: "تجربة تشي كفتة بحصة أوفى.",
    directAnswer:
      "Çiğ Köfte Meal is the fuller 3.5 JOD version of Midyaji Basha's Turkish Çiğ Köfte, built for guests who want more than a sandwich and prefer a complete serving.",
    directAnswerAr:
      "وجبة تشي كفتة هي النسخة الأكبر بسعر 3.5 دينار من تشي كفتة التركية في ميديجي باشا، مناسبة لمن يريد حصة كاملة بدل الساندويتش.",
    sections: [
      {
        id: "what",
        title: "What Is This Product?",
        paragraphs: [
          "The Çiğ Köfte Meal is the fuller version of one of Turkey's most famous modern street foods. It uses the same core idea as the sandwich: fine bulgur, tomato paste, pomegranate molasses, herbs, lemon, and spices kneaded into a dense, flavorful mixture.",
          "Where the sandwich is quick and handheld, the meal is slower and more complete. It gives guests more room to enjoy the texture of Çiğ Köfte, pair it with other products, and treat it as a main order rather than a quick bite.",
          "Its origin story follows modern Çiğ Köfte culture in Turkey, where plant-forward versions became the standard street-food format. It became popular because it is affordable, bold, and easy to share, while still feeling distinctive and deeply Turkish.",
        ],
      },
      {
        id: "ingredients",
        title: "Ingredients",
        paragraphs: [
          "The important ingredients are fine bulgur, tomato paste, pomegranate molasses, Turkish spices, lemon, herbs, and fresh serving accompaniments. The balance of tang and spice is what makes Çiğ Köfte memorable.",
          "The meal format lets those ingredients breathe. Instead of being compressed into a sandwich, the flavors can be enjoyed in repeated bites, with lemon and herbs adjusting the intensity as you eat.",
        ],
      },
      {
        id: "preparation",
        title: "Preparation",
        paragraphs: [
          "Çiğ Köfte preparation depends on kneading. The bulgur absorbs moisture from the pastes and molasses while spices work through the mixture. This creates the dense but soft texture people associate with good Çiğ Köfte.",
          "The meal is assembled to preserve freshness and contrast. It should feel lively, tangy, and aromatic rather than dry. That is why lemon and fresh accompaniments are part of the experience.",
        ],
      },
      {
        id: "experience",
        title: "Serving Experience",
        paragraphs: [
          "Order the Çiğ Köfte Meal when you want the fuller expression of the product. It works as a main order, a shared plate, or a plant-forward companion to Turkish Stuffed Mussels.",
          "Recommended pairings include Yalanji Fatteh for a softer plate and Turkish Stuffed Mussels for seafood contrast. If you are comparing the four products, the meal shows the deepest version of Midyaji Basha's Çiğ Köfte flavor.",
        ],
      },
      {
        id: "why-midyaji",
        title: "Why Midyaji Basha?",
        paragraphs: [
          "Midyaji Basha separates Çiğ Köfte into two clear products: sandwich and meal. That clarity helps guests choose quickly and helps search engines understand exact menu intent.",
          "The meal strengthens the brand's position as a specialist in Turkish street food in Amman, Jordan. It connects Çiğ Köfte, Turkish cuisine, plant-forward eating, and focused product pages in one destination.",
        ],
      },
    ],
    sectionsAr: [
      {
        id: "what",
        title: "ما هو هذا المنتج؟",
        paragraphs: [
          "وجبة تشي كفتة هي النسخة الأوفى من واحدة من أشهر أكلات الشارع التركية الحديثة. تستخدم الفكرة نفسها: برغل ناعم، معجون طماطم، دبس رمان، أعشاب، ليمون، وبهارات تُعجن حتى تصبح خلطة متماسكة وغنية.",
          "بينما الساندويتش سريع وسهل الحمل، الوجبة أهدأ وأكثر اكتمالاً. تمنح الضيف مساحة أكبر للاستمتاع بقوام تشي كفتة ومشاركتها أو تناولها كطلب رئيسي.",
          "قصتها مرتبطة بثقافة تشي كفتة الحديثة في تركيا، حيث أصبحت النسخة النباتية الطابع هي الشكل الأشهر في الشارع. انتشرت لأنها مناسبة السعر، قوية النكهة، سهلة المشاركة، وواضحة الهوية التركية.",
        ],
      },
      {
        id: "ingredients",
        title: "المكوّنات",
        paragraphs: [
          "المكوّنات المهمة هي البرغل الناعم، معجون الطماطم، دبس الرمان، البهارات التركية، الليمون، الأعشاب، ومرفقات التقديم الطازجة. توازن الحموضة والبهارات هو ما يجعل تشي كفتة لا تُنسى.",
          "صيغة الوجبة تسمح للنكهات بأن تظهر بتدرّج. بدلاً من ضغطها داخل ساندويتش، يمكن تناولها على لقيمات متعددة مع ضبط الليمون والأعشاب حسب الذوق.",
        ],
      },
      {
        id: "preparation",
        title: "طريقة التحضير",
        paragraphs: [
          "تعتمد تشي كفتة على العجن. يمتص البرغل الرطوبة من المعاجين ودبس الرمان بينما تتوزع البهارات داخل الخلطة. هكذا يتكون القوام الكثيف والناعم الذي يميز تشي كفتة الجيدة.",
          "تُركّب الوجبة للحفاظ على الطزاجة والتباين. يجب أن تكون حية وحامضة وعطرية لا جافة، ولذلك يكون الليمون والمرفقات الطازجة جزءاً من التجربة.",
        ],
      },
      {
        id: "experience",
        title: "تجربة التقديم",
        paragraphs: [
          "اطلب وجبة تشي كفتة عندما تريد التعبير الأوفى عن المنتج. تصلح كطلب رئيسي، كطبق للمشاركة، أو كرفيق نباتي الطابع للمحار التركي.",
          "ننصح بها مع فتة اليالنجي لطبق أنعم، أو مع المحار التركي لتباين بحري واضح. إذا أردت مقارنة المنتجات الأربعة، فالوجبة تعرض أعمق نسخة من نكهة تشي كفتة لدى ميديجي باشا.",
        ],
      },
      {
        id: "why-midyaji",
        title: "لماذا ميديجي باشا؟",
        paragraphs: [
          "يفصل ميديجي باشا تشي كفتة إلى منتجين واضحين: ساندويتش ووجبة. هذا الوضوح يساعد الزبون على الاختيار بسرعة ويساعد محركات البحث على فهم نية القائمة بدقة.",
          "تعزز الوجبة موقع العلامة كمتخصص في أكل الشارع التركي في عمّان، الأردن. فهي تربط تشي كفتة بالمطبخ التركي والأكل النباتي الطابع وصفحات المنتجات المركزة.",
        ],
      },
    ],
    sellingPoints: [
      "Fuller serving than the sandwich.",
      "Clear 3.5 JOD price point.",
      "Best choice for committed Çiğ Köfte fans.",
      "Tangy, herbal, spiced, and satisfying.",
      "Works as a main order or a shareable plate.",
      "Completes the four-product Midyaji Basha menu.",
    ],
    sellingPointsAr: [
      "حصة أكبر من الساندويتش.",
      "سعر واضح: 3.5 دينار.",
      "الخيار الأفضل لمحبي تشي كفتة.",
      "حامضة وعشبية ومتبهّرة ومشبعة.",
      "تصلح كطلب رئيسي أو للمشاركة.",
      "تكمل قائمة ميديجي باشا ذات المنتجات الأربعة.",
    ],
    faqs: [
      { question: "How much is the Çiğ Köfte Meal?", answer: "The Çiğ Köfte Meal is 3.5 JOD." },
      { question: "How is it different from the sandwich?", answer: "The meal is a fuller serving, while the sandwich is the quick handheld version." },
      { question: "What is Çiğ Köfte made from?", answer: "It is made around fine bulgur, tomato paste, pomegranate molasses, herbs, lemon, and Turkish spices." },
      { question: "Does it contain gluten?", answer: "Yes. Çiğ Köfte contains bulgur wheat." },
      { question: "Is it suitable for sharing?", answer: "Yes. The meal works well as a shared plate with other products." },
      { question: "What should I pair it with?", answer: "Pair it with Turkish Stuffed Mussels for contrast or Yalanji Fatteh for a softer meal." },
      { question: "Is it heavy?", answer: "It is filling but still bright because of lemon, herbs, and pomegranate molasses." },
      { question: "Is this a Turkish street food?", answer: "Yes. Çiğ Köfte is one of Turkey's most recognizable modern street foods." },
      { question: "Can I order it as my main meal?", answer: "Yes. The meal version is designed for guests who want a complete Çiğ Köfte order." },
      { question: "Where can I order it?", answer: "Order it from Midyaji Basha in Amman through the restaurant's verified contact channels." },
    ],
    faqsAr: [
      { question: "كم سعر وجبة تشي كفتة؟", answer: "سعر وجبة تشي كفتة هو 3.5 دينار." },
      { question: "ما الفرق بينها وبين الساندويتش؟", answer: "الوجبة حصة أكبر، أما الساندويتش فهو النسخة السريعة سهلة الحمل." },
      { question: "مم تصنع تشي كفتة؟", answer: "تعتمد على البرغل الناعم ومعجون الطماطم ودبس الرمان والأعشاب والليمون والبهارات التركية." },
      { question: "هل تحتوي على جلوتين؟", answer: "نعم، تشي كفتة تحتوي على برغل القمح." },
      { question: "هل تناسب المشاركة؟", answer: "نعم، الوجبة مناسبة للمشاركة مع المنتجات الأخرى." },
      { question: "ماذا أطلب معها؟", answer: "اطلبها مع المحار التركي للتباين أو مع فتة اليالنجي لوجبة أنعم." },
      { question: "هل هي ثقيلة؟", answer: "هي مشبعة لكنها تبقى منعشة بسبب الليمون والأعشاب ودبس الرمان." },
      { question: "هل هي أكل شارع تركي؟", answer: "نعم، تشي كفتة من أشهر أكلات الشارع التركية الحديثة." },
      { question: "هل تصلح كوجبة رئيسية؟", answer: "نعم، نسخة الوجبة مصممة لمن يريد طلب تشي كفتة كاملاً." },
      { question: "أين أطلبها؟", answer: "يمكن طلبها من ميديجي باشا في عمّان عبر قنوات التواصل الرسمية." },
    ],
    blogSlugs: ["cig-kofte-explained", "first-time-guide-midyaji-basha", "turkish-street-food-guide-amman"],
    seo: {
      title: "Çiğ Köfte Meal in Amman | Midyaji Basha",
      titleAr: "وجبة تشي كفتة في عمّان | ميديجي باشا",
      description: "Try the 3.5 JOD Çiğ Köfte Meal at Midyaji Basha in Amman: a fuller Turkish bulgur, herbs, lemon, and spice street-food serving.",
      descriptionAr: "جرّب وجبة تشي كفتة بسعر 3.5 دينار في ميديجي باشا عمّان: حصة أوفى من البرغل والأعشاب والليمون والبهارات التركية.",
    },
  },
];

const legacySlugMap: Record<string, string> = {
  "stuffed-mussels": "turkish-stuffed-mussels",
  "cig-kofte": "cig-kofte-sandwich",
  yalanci: "yalanji-fatteh",
  "turkish-wraps": "cig-kofte-meal",
};

export function normalizeProductSlug(slug: string): string {
  return legacySlugMap[slug] ?? slug;
}

export function getProductBySlug(slug: string): Product | undefined {
  const normalizedSlug = normalizeProductSlug(slug);
  return products.find((p) => p.slug === normalizedSlug);
}

export function getRelatedProducts(slug: string): Product[] {
  const normalizedSlug = normalizeProductSlug(slug);
  return products.filter((p) => p.slug !== normalizedSlug).slice(0, 3);
}
