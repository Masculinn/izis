import "@/styles/globals.css";
import { secondaryFont, primaryFont } from "@/config/fonts";
import Layout from "@/layout";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout className={`${primaryFont.className} ${secondaryFont.variable}`}>
      <Component {...pageProps} />
    </Layout>
  );
}
