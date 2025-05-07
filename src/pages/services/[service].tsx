import { HeroDivider } from "@/components/hero-divider";
import ArticleWidget from "@/components/news/article-widget";
import { NewsCarousel } from "@/components/news/news-carousel";
import { ServiceProps } from "@/interfaces";
import newsLib from "@/lib/newsLib";
import servicesRootLib from "@/lib/services-root.lib";
import Contact from "@/sections/discoveries/contact";
import Hero from "@/sections/services/hero";
import { Step } from "@/sections/services/step";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { title } from "process";

export const getStaticPaths = (async () => {
  const paths = servicesRootLib.map((val) => ({
    params: {
      service: val.id,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (ctx) => {
  const { service } = ctx.params!;

  const data = servicesRootLib.find((val) => val.id === service);

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
  data: ServiceProps;
}>;

export default function Page({
  data,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const title = data.title.toString();

  return (
    <>
      <Head>
        <title>{`IZIS | ${title}`}</title>
      </Head>
      <Hero subHeader={data.subHeader} title={data.title} id={data.id} />
      <HeroDivider />
      <section className="max-w-6xl mx-auto items-center justify-center flex flex-col gap-8 lg:mt-12 mt-8 md:px-0 px-6">
        {data.steps.map((step, idx) => (
          <Step
            key={idx}
            id={idx + 1}
            {...step}
            className={
              idx % 2 === 0
                ? "md:flex-row-reverse flex-col"
                : "md:flex-row flex-col"
            }
          />
        ))}
      </section>
      <Contact className="max-w-6xl" />
      <ArticleWidget id={newsLib.length - 1} />
    </>
  );
}
