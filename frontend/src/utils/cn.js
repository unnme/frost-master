import { clsx } from "clsx";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx with tailwind-merge functionality
 * @param {...any} inputs - Class names or objects
 * @returns {string} - Merged class string
 */
export function cn(...inputs) {
  return clsx(inputs);
}
