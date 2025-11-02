export function remToPixel(rem: number) {
  const screenWidth = document.documentElement.offsetWidth;
  const divisor = +getComputedStyle(document.documentElement).getPropertyValue(
    "--font-divisor"
  );
  return rem * ((screenWidth * 0.01) / divisor);
}
export function pixelToRem(px: number) {
  const screenWidth = document.documentElement.offsetWidth;
  const divisor = +getComputedStyle(document.documentElement).getPropertyValue(
    "--font-divisor"
  );
  return px / ((screenWidth * 0.01) / divisor);
}
