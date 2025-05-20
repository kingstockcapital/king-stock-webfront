
/**
 * Formats a number as currency
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

/**
 * Formats a number as percentage
 */
export function formatPercentage(value: number): string {
  return `${value.toFixed(1)}%`;
}

/**
 * Determines the color class based on whether a value is positive or negative
 */
export function getChangeColorClass(value: number): string {
  return value >= 0 ? 'text-green-500' : 'text-red-500';
}

/**
 * Determines the icon based on whether a value is positive or negative
 */
export function getChangeIconClass(value: number): string {
  return value >= 0 ? 'ArrowUpRight' : 'ArrowDownRight';
}
