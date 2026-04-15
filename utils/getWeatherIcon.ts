const clearIcon = new URL("../SVG/clear-svgrepo-com.svg", import.meta.url).href;
const cloudsIcon = new URL("../SVG/mostly-cloudy-svgrepo-com.svg", import.meta.url).href;
const rainIcon = new URL("../SVG/rain-svgrepo-com.svg", import.meta.url).href;
const thunderIcon = new URL("../SVG/lightning-svgrepo-com.svg", import.meta.url).href;
const snowIcon = new URL("../SVG/snow-svgrepo-com.svg", import.meta.url).href;
const hailIcon = new URL("../SVG/hail-svgrepo-com.svg", import.meta.url).href;
const defaultIcon = new URL("../SVG/clear-svgrepo-com.svg", import.meta.url).href;

export function getWeatherIcon(main: string): string {
  const normalized = main?.toLowerCase() ?? "";

  if (normalized.includes("clear")) {
    return clearIcon;
  }

  if (
    normalized.includes("cloud") ||
    normalized.includes("mist") ||
    normalized.includes("fog") ||
    normalized.includes("haze") ||
    normalized.includes("smoke") ||
    normalized.includes("dust") ||
    normalized.includes("sand") ||
    normalized.includes("ash") ||
    normalized.includes("squall") ||
    normalized.includes("tornado")
  ) {
    return cloudsIcon;
  }

  if (normalized.includes("rain") || normalized.includes("drizzle") || normalized.includes("shower")) {
    return rainIcon;
  }

  if (normalized.includes("thunderstorm") || normalized.includes("thunder")) {
    return thunderIcon;
  }

  if (normalized.includes("snow")) {
    return snowIcon;
  }

  if (normalized.includes("hail")) {
    return hailIcon;
  }

  return defaultIcon;
}