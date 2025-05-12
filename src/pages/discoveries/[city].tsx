// Fixing SSG safety for /discoveries/[city].tsx

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import markerLib from "@/lib/markerLib";
import Head from "next/head";
import Hero from "@/sections/discoveries/hero";
import Gallery from "@/sections/discoveries/gallery";
import { Skeleton } from "@/components/ui";
import Content from "@/sections/discoveries/content";
import Contact from "@/sections/discoveries/contact";

export const getStaticPaths = (async () => {
  const paths = markerLib
    .map((marker) => ({
      params: {
        city: marker.url?.split("/").pop() || "",
      },
    }))
    .filter((p) => p.params.city); // filter out invalid slugs

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { city } = context.params!;

  const marker = markerLib.find((m) => m.url.endsWith(`/${city}`));

  if (!marker) {
    console.error(`❌ No marker found for city: ${city}`);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      markerData: marker,
    },
  };
}) as GetStaticProps<{
  markerData: (typeof markerLib)[number];
}>;

export default function Page({
  markerData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!markerData) {
    return <Skeleton className="size-full" />;
  }

  const title = markerData?.name?.toString() || "IZIS Discovery";

  return (
    <>
      <Head>
        <title>{`IZIS | ${title}`}</title>
      </Head>
      <Hero {...markerData} />
      <Gallery data={markerData.img || []} />
      <Content
        name={markerData.name}
        type={markerData.type}
        desc={markerData.desc}
        coordinates={markerData.coordinates}
      />
      <Contact />
    </>
  );
}
