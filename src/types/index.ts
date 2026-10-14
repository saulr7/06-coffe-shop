export type MenuCategory = 'coffee' | 'tea' | 'pastry' | 'food';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  featured?: boolean;
  emoji: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface OpeningHours {
  days: string;
  hours: string;
}
