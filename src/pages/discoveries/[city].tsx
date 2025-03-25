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

export const getStaticPaths = (async () => {
  const paths = markerLib.map((marker) => ({
    params: {
      city: marker.url.split("/").pop(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { city } = context.params!;

  const marker = markerLib.find((m) => m.url.endsWith(`/${city}`));

  if (!marker) {
    return { notFound: true, redirect: "/" };
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
  const title = markerData.name.toString();
  return (
    <>
      <Head>
        <title>{`IZIS | ${title}`}</title>
      </Head>
      <Hero {...markerData} />
      <Gallery data={markerData.img} name={title} />
    </>
  );
}
