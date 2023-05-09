import { capitalizeFirstLetter } from '@/utils/capitalize-first-letter';

export function sanitizeForURL(value: string) {
  return encodeURI(capitalizeFirstLetter(value));
}
