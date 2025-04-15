import { GetSplittedTextOutputProps, GetSplittedTextProps } from "@/interfaces";

export default function getSplittedText(
  text: GetSplittedTextProps
): GetSplittedTextOutputProps {
  let str = [] as string[];

  if (!text || typeof text !== "string") {
    console.warn("No text provided on getSplittedText fn.");
  }

  if (text.includes(" ")) {
    const words = text.split(/\s+/);
    words.forEach((word) => {
      str.push(word, " ");
    });
    return str.slice(0, str.length - 1);
  }

  return text.split("");
}
