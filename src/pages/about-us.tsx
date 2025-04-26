import Hero from "@/sections/about-us/hero";
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
      <div className="w-full h-screen mt-48 " />
    </>
  );
}
