import { Inter, Lora } from "next/font/google";

const primaryFont = Inter({
  subsets: ["latin"],
  preload: true,
  variable: "--font-primary",
});

const brandFont = Lora({
  subsets: ["latin"],
  preload: true,
  variable: "--font-secondary",
});

export { primaryFont, brandFont };
