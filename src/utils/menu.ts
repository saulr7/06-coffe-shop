import type { MenuCategory, MenuItem } from '../types';

export const groupByCategory = (items: MenuItem[]): Map<MenuCategory, MenuItem[]> => {
  const groups = new Map<MenuCategory, MenuItem[]>();
  for (const item of items) {
    groups.set(item.category, [...(groups.get(item.category) ?? []), item]);
  }
  return groups;
};
