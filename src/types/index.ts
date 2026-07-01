export interface Product {
  slug: string;
  name: string;
  nameAr?: string;
  price: string;
  priceLabel?: string;
  priceFrom: number;
  description: string;
  descriptionAr: string;
  longDescription: string;
  image: string;
  gallery: string[];
  ingredients: string[];
  ingredientsAr: string[];
  serving: string;
  servingAr: string;
  allergens: string[];
  allergensAr: string[];
  category: string;
  categoryAr: string;
  tagline: string;
  taglineAr: string;
  directAnswer: string;
  directAnswerAr: string;
  sections: ProductSection[];
  sectionsAr: ProductSection[];
  sellingPoints: string[];
  sellingPointsAr: string[];
  faqs: FAQ[];
  faqsAr: FAQ[];
  blogSlugs: string[];
  seo: {
    title: string;
    titleAr: string;
    description: string;
    descriptionAr: string;
  };
}

export interface ProductSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  author: string;
  category: string;
  image: string;
  content: string;
  tags?: string[];
  faqs?: FAQ[];
}

export interface FAQGroup {
  group: string;
  items: FAQ[];
}
