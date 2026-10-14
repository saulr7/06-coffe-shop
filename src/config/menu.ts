import type { MenuCategory, MenuItem } from '../types';

export const categoryLabels: Record<MenuCategory, string> = {
  coffee: 'Coffee',
  tea: 'Tea',
  pastry: 'Pastries',
  food: 'Bites',
};

export const menuItems: MenuItem[] = [
  { id: 'espresso', name: 'Espresso', description: 'Double shot, caramel and dark cocoa notes.', price: 3.25, category: 'coffee', emoji: '☕' },
  { id: 'flat-white', name: 'Flat White', description: 'Velvety microfoam over a ristretto double.', price: 4.5, category: 'coffee', featured: true, emoji: '🥛' },
  { id: 'cappuccino', name: 'Cappuccino', description: 'Equal parts espresso, steamed milk and foam.', price: 4.25, category: 'coffee', emoji: '☕' },
  { id: 'cold-brew', name: 'Cold Brew', description: 'Steeped 18 hours, served over ice.', price: 4.75, category: 'coffee', featured: true, emoji: '🧊' },
  { id: 'maple-latte', name: 'Maple Latte', description: 'Espresso, oat milk and local maple syrup.', price: 5.5, category: 'coffee', featured: true, emoji: '🍁' },
  { id: 'matcha', name: 'Ceremonial Matcha', description: 'Whisked to order, with your choice of milk.', price: 5.25, category: 'tea', emoji: '🍵' },
  { id: 'chai', name: 'House Chai', description: 'Spiced black tea simmered with steamed milk.', price: 4.75, category: 'tea', emoji: '🫖' },
  { id: 'croissant', name: 'Almond Croissant', description: 'Twice-baked with frangipane and toasted almonds.', price: 4.5, category: 'pastry', featured: true, emoji: '🥐' },
  { id: 'cinnamon-roll', name: 'Cinnamon Roll', description: 'Soft, sticky and finished with cream cheese glaze.', price: 4.25, category: 'pastry', emoji: '🌀' },
  { id: 'banana-bread', name: 'Banana Bread', description: 'Brown butter, walnuts, a slice of comfort.', price: 3.75, category: 'pastry', emoji: '🍌' },
  { id: 'avocado-toast', name: 'Avocado Toast', description: 'Sourdough, lemon, chili flakes, soft egg.', price: 8.5, category: 'food', emoji: '🥑' },
  { id: 'ham-cheese', name: 'Ham & Gruyère', description: 'Toasted croissant sandwich with Dijon.', price: 7.75, category: 'food', emoji: '🥪' },
];

export const featuredItems = menuItems.filter((item) => item.featured);
