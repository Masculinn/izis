import { Inter, Merriweather_Sans } from "next/font/google";

const primaryFont = Inter({
  subsets: ["latin"],
  preload: true,
  variable: "--font-primary",
});

const brandFont = Merriweather_Sans({
  subsets: ["latin"],
  preload: true,
  variable: "--font-brand",
});

export { primaryFont, brandFont };
