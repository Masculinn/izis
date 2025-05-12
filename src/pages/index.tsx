import LogoMarquee from "@/components/logo-marquee";
import Mapbox from "@/components/mapbox";
import logoLib from "@/lib/logoLib";
import Hero from "@/sections/hero";
import HighlightedCta from "@/sections/highlighted-cta";
import News from "@/sections/news";
import Services from "@/sections/services";
import Head from "next/head";
import Contact from "@/sections/discoveries/contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>IZIS Archeologia | Dom</title>
        <meta
          name="description"
          content="IZIS, profesjonalne usługi archeologiczne: badania, nadzory, dokumentacja. Kompleksowa obsługa inwestycji budowlanych zgodnie z wymogami ochrony dziedzictwa kulturowego."
        />
      </Head>
      <Hero />
      <LogoMarquee items={logoLib} />
      <Services />
      <Mapbox />
      <HighlightedCta />
      <News />
      <Contact />
    </>
  );
}
