export function sanitizeForURL(value: string) {
  return encodeURI(value.toLowerCase());
}
