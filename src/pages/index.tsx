import Hero from "@/sections/hero";
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
      <Services />
    </>
  );
}
