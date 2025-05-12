import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

import newsLib from "@/lib/newsLib";
import Head from "next/head";
import Hero from "@/sections/news/hero";
import Content from "@/sections/news/content";
import Contact from "@/sections/discoveries/contact";
import ArticleWidget from "@/components/news/article-widget";

export const getStaticPaths = (async () => {
  const paths = newsLib
    .map((news) => ({
      params: {
        slug: news.url?.split("/").pop() || "",
      },
    }))
    .filter((p) => p.params.slug);

  return {
    paths,
    fallback: false,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params!;

  const data = newsLib.find((val) => val.url.endsWith(`/${slug}`));

  if (!data) {
    console.error(`❌ No news item found for slug: ${slug}`);
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}) as GetStaticProps<{
  data: (typeof newsLib)[number];
}>;

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = data?.title || "Brak tytułu";
  const source = data?.source || "Brak źródła";

  return (
    <>
      <Head>
        <title>{`IZIS | ${title}`}</title>
      </Head>
      <Hero source={source} subHeader={data.subHeader} title={title} />
      <Content {...data} />
      <ArticleWidget id={data.id} className="max-w-7xl lg:px-6" />
      <Contact />
    </>
  );
}
