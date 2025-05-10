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
  const paths = newsLib.map((news) => ({
    params: {
      slug: news.url.split("/").pop(),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (context) => {
  const { slug } = context.params!;

  const data = newsLib.find((val) => val.url.endsWith(`/${slug}`));

  if (!data) {
    return {
      notFound: true,
      redirect: "/",
    };
  }

  return {
    props: {
      data: data,
    },
  };
}) as GetStaticProps<{
  data: (typeof newsLib)[number];
}>;

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = data.title;

  return (
    <>
      <Head>
        <title>{`IZIS | ${title}`}</title>
      </Head>
      <Hero
        source={data.source}
        subHeader={data.subHeader}
        title={data.title}
      />
      <Content {...data} />
      <ArticleWidget id={data.id} className="max-w-7xl lg:px-6" />
      <Contact />
    </>
  );
}
