import LogoMarquee from "@/components/logo-marquee";
import Mapbox from "@/components/mapbox";
import logoLib from "@/lib/logoLib";
import Hero from "@/sections/hero";
import HighlightedCta from "@/sections/highlighted-cta";
import News from "@/sections/news";
import Services from "@/sections/services";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Izis | Dom</title>
        <meta name="description" content="Arche" />
      </Head>
      <Hero />
      <LogoMarquee items={logoLib} />
      <Services />
      <Mapbox />
      <HighlightedCta />
      <News />
    </>
  );
}
