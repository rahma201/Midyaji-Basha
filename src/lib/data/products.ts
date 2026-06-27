import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "stuffed-mussels",
    name: "Stuffed Mussels (Midye Dolma)",
    nameAr: "ميدي دولما",
    price: "4 JD",
    description:
      "Fresh Turkish stuffed mussels with spiced rice, served with lemon",
    longDescription: `Midye Dolma, or Turkish stuffed mussels, is Istanbul's most beloved street food — and now it's available right here in Amman, Jordan at Midyaji Basha. Each mussel is carefully hand-filled with a fragrant mixture of seasoned rice, pine nuts, currants, cinnamon, allspice, and fresh herbs. The preparation process is as important as the ingredients themselves: the rice is cooked with aromatic spices until perfectly tender, then carefully packed into fresh, plump mussels that are steamed until the shells open naturally, revealing the treasure within.

The tradition of Midye Dolma dates back centuries in Istanbul's Bosphorus neighborhoods. Street vendors known as "midyeciler" would stand on the city's busiest corners, offering passersby a handful of these delicious bites with a squeeze of fresh lemon. The ritual of eating them is almost as important as the taste: you hold the shell in your hand, squeeze a lemon wedge over the rice, and eat it directly from the shell. The combination of savory rice, briny mussel, and bright lemon juice creates a flavor profile that is entirely unique.

At Midyaji Basha, we honor this tradition by using only the freshest mussels and preparing our spiced rice fresh daily. The rice blend includes long-grain white rice, toasted pine nuts for richness, sweet currants for a hint of contrast, and a careful balance of cinnamon, allspice, and black pepper. Fresh dill and parsley are folded in at the end to add brightness and color.

What makes our Midye Dolma special is the care that goes into every single piece. Unlike mass-produced versions, each mussel at Midyaji Basha is filled by hand and sealed with the shell, ensuring the flavors meld together perfectly. Whether you're eating them as a snack, a starter, or a full meal, our stuffed mussels deliver an authentic taste of Istanbul right in the heart of Amman.`,
    image: "/images/unsplash-1.svg",
    ingredients: [
      "Fresh mussels",
      "Seasoned rice",
      "Pine nuts",
      "Currants",
      "Allspice",
      "Cinnamon",
      "Fresh herbs",
      "Dill",
      "Parsley",
    ],
    serving:
      "Served with fresh lemon wedges, traditionally eaten by squeezing lemon over each mussel directly from the shell.",
    allergens: ["Shellfish", "May contain traces of nuts"],
    category: "Signature",
    faqs: [
      {
        question: "How many mussels come in an order?",
        answer:
          "Each order comes with approximately 6-8 fresh stuffed mussels, depending on size, served on a plate with fresh lemon wedges.",
      },
      {
        question: "Are the mussels fresh or frozen?",
        answer:
          "We use only fresh mussels, prepared and stuffed daily. We never use frozen mussels as quality is our top priority.",
      },
      {
        question: "Is Midye Dolma spicy?",
        answer:
          "Our stuffed mussels have a warm, aromatic flavor from spices like allspice and cinnamon, but they are not spicy-hot. The flavor is savory, fragrant, and slightly sweet from the currants.",
      },
      {
        question: "Can vegetarians eat Midye Dolma?",
        answer:
          "No, Midye Dolma contains fresh mussels (shellfish) so it is not suitable for vegetarians or those with shellfish allergies.",
      },
      {
        question: "How should I eat Midye Dolma?",
        answer:
          "The traditional way is to hold the shell in your hand, squeeze fresh lemon juice over the filling, and eat the rice and mussel directly from the shell. It's a hands-on, joyful eating experience!",
      },
    ],
  },
  {
    slug: "cig-kofte",
    name: "Çiğ Köfte",
    nameAr: "تشيغ كوفتة",
    price: "2.5 JD",
    description:
      "Traditional vegan raw wheat köfte with pomegranate molasses, herbs and lemon",
    longDescription: `Çiğ Köfte — pronounced "chee kof-teh" — is one of Turkey's most popular street foods, beloved across the country from Istanbul to Gaziantep. Despite its name meaning "raw meatball," the modern version served at Midyaji Basha is entirely plant-based and vegan, made from fine bulgur wheat, tomato paste, pomegranate molasses, and an aromatic blend of fresh herbs and spices.

The history of Çiğ Köfte is fascinating. Originally, the dish did contain raw meat, which was pounded together with bulgur wheat and spices. But as Turkish culinary culture evolved and health regulations changed, the meat was removed, replaced with more tomato paste and intensified spicing to maintain the rich, complex flavor profile. Today's Çiğ Köfte is not only healthier but arguably more delicious — and completely accessible to vegans, vegetarians, and anyone looking for a flavorful, satisfying bite.

At Midyaji Basha, our Çiğ Köfte is made fresh using the finest fine bulgur wheat, which is kneaded by hand with concentrated tomato paste, tangy pomegranate molasses, fresh green onions, parsley, mint, and a blend of Turkish spices including cumin, red pepper flakes, and paprika. The kneading process is crucial: it's worked until all the ingredients are fully incorporated and the bulgur has softened from the liquid in the tomato paste and molasses.

The result is a deeply flavorful, slightly tangy, and satisfyingly textured food that can be wrapped in lettuce leaves, rolled in thin lavash flatbread, or eaten on its own with a squeeze of lemon. It's served with fresh lemon wedges, pomegranate seeds, and thin-cut green onions on the side. Whether you're looking for a light snack or a fuller meal, Çiğ Köfte at Midyaji Basha delivers bold Turkish flavors in every bite.`,
    image: "/images/unsplash-2.svg",
    ingredients: [
      "Fine bulgur wheat",
      "Tomato paste",
      "Pomegranate molasses",
      "Fresh herbs",
      "Green onions",
      "Parsley",
      "Mint",
      "Lemon",
      "Cumin",
      "Red pepper flakes",
      "Paprika",
    ],
    serving:
      "Served in lettuce wraps or with thin lavash flatbread, accompanied by fresh lemon wedges and pomegranate seeds.",
    allergens: [
      "Contains gluten (bulgur wheat)",
      "Vegan and vegetarian friendly",
    ],
    category: "Vegan",
    faqs: [
      {
        question: "Is Çiğ Köfte vegan?",
        answer:
          "Yes! Our Çiğ Köfte is 100% plant-based and vegan. It contains no meat, dairy, or animal products. It's made from bulgur wheat, vegetables, herbs, and spices.",
      },
      {
        question: "Is Çiğ Köfte spicy?",
        answer:
          "It has a mild-to-medium heat from red pepper flakes, but you can request it milder. The pomegranate molasses and lemon balance the spice beautifully.",
      },
      {
        question: "Does Çiğ Köfte contain gluten?",
        answer:
          "Yes, Çiğ Köfte is made from bulgur wheat, which contains gluten. It's not suitable for those with celiac disease or severe gluten intolerance.",
      },
      {
        question: "How is Çiğ Köfte eaten?",
        answer:
          "The most popular way is to wrap it in a lettuce leaf with fresh herbs and a squeeze of lemon. You can also roll it in lavash bread. It's a fun, hands-on street food experience.",
      },
      {
        question: "What does Çiğ Köfte taste like?",
        answer:
          "It has a rich, savory, slightly tangy flavor with notes of tomato, pomegranate, fresh herbs, and warm spices. The texture is soft and slightly sticky, with a satisfying chewiness from the bulgur.",
      },
    ],
  },
  {
    slug: "yalanci",
    name: "Yalancı",
    nameAr: "يالانجي",
    price: "3.5 JD",
    description:
      "Vine leaves stuffed with seasoned rice, pine nuts and fresh herbs",
    longDescription: `Yalancı — meaning "liar" in Turkish, a playful nod to the fact that these stuffed vine leaves contain no meat, "deceiving" those who expect the traditional meat-filled version — is one of the most refined and beloved dishes in Turkish and Levantine cuisine. At Midyaji Basha, we serve our Yalancı as a cold meze, true to its Turkish tradition, where it's enjoyed as a refined appetizer or snack throughout the day.

Each vine leaf is carefully selected for size and tenderness, then briefly blanched to make it pliable for rolling. The filling is a carefully balanced blend of short-grain rice, toasted pine nuts, sweet currants, allspice, cinnamon, black pepper, fresh mint, and a generous drizzle of good olive oil. The rice absorbs all these flavors during cooking, creating a filling that is simultaneously aromatic, slightly sweet, nutty, and herbaceous.

The rolling technique is an art in itself. Each leaf must be rolled tightly enough to hold together but not so tightly that the rice has no room to expand. The filled vine leaves are then arranged in a pot, weighted down, and cooked gently in a mixture of water, lemon juice, and olive oil until the rice is perfectly cooked and the leaves are tender.

What makes Midyaji Basha's Yalancı exceptional is our commitment to the authentic Turkish recipe. Many versions of stuffed vine leaves found in Jordan lean toward the Levantine preparation, which uses different spices and is often served hot. Our Yalancı follows the Istanbul tradition: served cold, with a generous squeeze of fresh lemon, and sometimes accompanied by a dollop of cool yogurt or tzatziki. It's a dish that rewards patience — the flavors develop beautifully as it rests and cools — making it one of the most satisfying bites in Turkish cuisine.`,
    image: "/images/unsplash-3.svg",
    ingredients: [
      "Vine leaves",
      "Short grain rice",
      "Pine nuts",
      "Currants",
      "Allspice",
      "Cinnamon",
      "Fresh mint",
      "Parsley",
      "Olive oil",
      "Lemon juice",
    ],
    serving:
      "Served cold with fresh lemon juice drizzled over, a classic Turkish cold meze. Best enjoyed with a squeeze of fresh lemon.",
    allergens: ["Contains nuts (pine nuts)", "Vegan and vegetarian friendly"],
    category: "Meze",
    faqs: [
      {
        question: "Is Yalancı served hot or cold?",
        answer:
          "At Midyaji Basha, we serve our Yalancı cold in the authentic Turkish tradition. The flavors develop beautifully as the dish cools, making it a perfect cold meze.",
      },
      {
        question: "Does Yalancı contain meat?",
        answer:
          "No! That's the meaning of 'Yalancı' — liar! It's the meatless version of stuffed vine leaves. Our Yalancı is completely vegan and vegetarian.",
      },
      {
        question:
          "What is the difference between Yalancı and regular grape leaves?",
        answer:
          "Yalancı specifically refers to the Turkish vegetarian version, served cold with an aromatic rice and pine nut filling. The name playfully suggests it 'lies' about containing meat.",
      },
      {
        question: "Are there allergens in Yalancı?",
        answer:
          "Yes, our Yalancı contains pine nuts. Please let us know if you have nut allergies. The dish is otherwise free of common allergens and is both vegan and gluten-free.",
      },
      {
        question: "How many pieces come in an order?",
        answer:
          "Each order comes with 6-8 pieces of Yalancı, served on a plate with fresh lemon wedges and fresh herbs as garnish.",
      },
    ],
  },
  {
    slug: "turkish-wraps",
    name: "Turkish Wraps",
    nameAr: "دونر رول",
    price: "3 JD",
    description:
      "Fresh Turkish-style wraps with signature spiced fillings and house sauces",
    longDescription: `Turkish Wraps at Midyaji Basha bring together the best of Turkish street food culture in a handheld format that's perfect for on-the-go eating at Mecca Mall in Amman. Inspired by the lavash wraps found throughout Turkey and the legendary dürüm wraps of Istanbul, our Turkish Wraps are a satisfying fusion of authentic flavors wrapped in soft, fresh lavash bread.

The base of our Turkish Wrap is thin, pliable lavash bread — the same flatbread used across Turkey, the Caucasus, and the Middle East for millennia. We fill it with a rotating selection of seasonal vegetables, including crisp lettuce, ripe tomatoes, fresh cucumbers, and pickled vegetables that add a tangy crunch to every bite. Our signature Turkish spice blend, applied during preparation, gives the filling a distinctly aromatic character that you won't find in standard wraps.

What sets our Turkish Wraps apart is the careful attention to texture and flavor balance. The vegetables are always fresh, never soggy, and the seasoning is applied thoughtfully so that each component of the wrap shines individually while contributing to a harmonious whole. We also offer a selection of house-made sauces that can be added to customize your wrap.

At Midyaji Basha, our Turkish Wraps are a popular choice for those who want a more filling option that still captures the spirit of authentic Turkish street food. They can be enjoyed as a standalone meal or alongside our Çiğ Köfte and Yalancı for a full Turkish street food spread. Fresh, flavorful, and made to order — our Turkish Wraps are a must-try for anyone visiting us at Mecca Mall in Amman, Jordan.`,
    image: "/images/unsplash-4.svg",
    ingredients: [
      "Lavash bread",
      "Fresh lettuce",
      "Ripe tomatoes",
      "Cucumbers",
      "Pickled vegetables",
      "Turkish spice blend",
      "Fresh herbs",
      "House sauce",
    ],
    serving:
      "Served warm, fresh to order. Best eaten immediately while the lavash is still soft and the filling is fresh.",
    allergens: [
      "Contains gluten (lavash bread)",
      "May contain dairy (in certain sauces)",
    ],
    category: "Wraps",
    faqs: [
      {
        question: "Is the Turkish Wrap vegetarian?",
        answer:
          "Yes, our Turkish Wraps are vegetarian. They're filled with fresh vegetables, herbs, and our signature Turkish spice blend. Ask about vegan sauce options when ordering.",
      },
      {
        question: "Can I customize my wrap?",
        answer:
          "Absolutely! You can request extra vegetables, different sauces, or adjustments to the spice level. Just let us know your preferences when you order.",
      },
      {
        question: "Is the Turkish Wrap filling?",
        answer:
          "Yes! Our Turkish Wraps are a generous size and make for a satisfying meal on their own. They're also great paired with a side of Çiğ Köfte for a fuller spread.",
      },
      {
        question: "What is lavash bread?",
        answer:
          "Lavash is a traditional thin flatbread that is a staple across Turkey, Armenia, and the broader Middle East. It's soft, slightly chewy, and perfect for wrapping around fillings.",
      },
      {
        question: "Is the Turkish Wrap served hot or cold?",
        answer:
          "Our Turkish Wraps are served warm, made fresh to order. The lavash is gently warmed to make it pliable and to enhance its flavor.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, 3);
}
