import type { NavLink, OpeningHours, Testimonial } from '../types';

export const site = {
  name: 'Ember & Bean',
  tagline: 'Small-batch coffee, slowly made.',
  description:
    'A neighborhood coffee shop serving small-batch roasted coffee, fresh pastries and a warm seat.',
  address: '128 Maple Street, Portland, OR',
  phone: '(503) 555-0142',
  email: 'hello@emberandbean.com',
  instagram: '@emberandbean',
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'About', href: '/#about' },
  { label: 'Visit', href: '/#visit' },
];

export const openingHours: OpeningHours[] = [
  { days: 'Mon – Fri', hours: '7:00 am – 6:00 pm' },
  { days: 'Saturday', hours: '8:00 am – 7:00 pm' },
  { days: 'Sunday', hours: '8:00 am – 4:00 pm' },
];

export const testimonials: Testimonial[] = [
  {
    quote: 'The best flat white in the city. I plan my mornings around it.',
    author: 'Maya R.',
    role: 'Regular since 2022',
  },
  {
    quote: 'Cozy, quiet, and the almond croissant is unreal. My favorite place to work.',
    author: 'Daniel K.',
    role: 'Freelance designer',
  },
  {
    quote: 'They actually know the farms their beans come from. You can taste the care.',
    author: 'Priya S.',
    role: 'Coffee enthusiast',
  },
];
