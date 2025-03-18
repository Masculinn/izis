import "@/styles/globals.css";
import { secondaryFont, primaryFont } from "@/config/fonts";
import Layout from "@/layout";
import StoreProvider from "@/providers/StoreProvider";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Layout className={`${primaryFont.className} ${secondaryFont.variable}`}>
        <Component {...pageProps} />
      </Layout>
    </StoreProvider>
  );
}
