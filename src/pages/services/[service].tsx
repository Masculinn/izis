import { HeroDivider } from "@/components/hero-divider";
import { ServiceProps } from "@/interfaces";
import servicesRootLib from "@/lib/services-root.lib";
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
  return (
    <>
      <Head>
        <title>{`IZIS | ${title}`}</title>
      </Head>
      <Hero subHeader={data.subHeader} title={data.title} id={data.id} />
      <HeroDivider />
      <section className="max-w-6xl mx-auto items-center justify-center flex flex-col gap-8 lg:mt-12 mt-8">
        {data.steps.map((step, idx) => (
          <Step
            key={idx}
            {...step}
            className={idx % 2 === 0 ? "flex-row-reverse" : "flex-row"}
          />
        ))}
      </section>
    </>
  );
}
