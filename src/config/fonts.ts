import { Inter, Lora } from "next/font/google";

const primaryFont = Inter({
  subsets: ["latin"],
  preload: true,
  variable: "--font-primary",
});

const secondaryFont = Lora({
  subsets: ["latin"],
  preload: true,
  variable: "--font-secondary",
});

export { primaryFont, secondaryFont };
