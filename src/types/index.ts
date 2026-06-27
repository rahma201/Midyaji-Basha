export interface Product {
  slug: string;
  name: string;
  nameAr?: string;
  price: string;
  description: string;
  longDescription: string;
  image: string;
  ingredients: string[];
  serving: string;
  allergens: string[];
  category: string;
  faqs: FAQ[];
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
