import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * A utility function to merge Tailwind classes and classnames
 * @param inputs - The classes to merge
 * @returns The merged classes
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
