const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const formatPrice = (value: number): string => priceFormatter.format(value);
