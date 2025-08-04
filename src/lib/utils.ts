import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
function knotsToKm(knots: number): number {
  const KM_PER_KNOT = 1.852;
  return knots * KM_PER_KNOT;
}