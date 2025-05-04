import LogoMarquee from "@/components/logo-marquee";
import logoLib from "@/lib/logoLib";
import { About } from "@/sections/about-us/about";
import { Collobrators } from "@/sections/about-us/collobrators";
import Hero from "@/sections/about-us/hero";
import { Map } from "@/sections/about-us/map";
import { Services } from "@/sections/about-us/services";
import { Team } from "@/sections/about-us/team";
import Head from "next/head";
import React from "react";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>O nas | Izis</title>
        <meta name="description" content="Arche" />
      </Head>
      <Hero />
      <LogoMarquee items={logoLib} />
      <About />
      <Collobrators />
      <Team />
      <Map />
      <Services />
    </>
  );
}
