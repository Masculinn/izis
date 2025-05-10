import { HeroDivider } from "@/components/hero-divider";
import ArticleWidget from "@/components/news/article-widget";
import { ServiceProps } from "@/interfaces";
import newsLib from "@/lib/newsLib";
import servicesRootLib from "@/lib/services-root.lib";
import Contact from "@/sections/discoveries/contact";
import Hero from "@/sections/services/hero";
import { Step } from "@/sections/services/step";
import { Check } from "lucide-react";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import Image from "next/image";

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
      <section className="max-w-6xl mx-auto items-center justify-center flex lg:flex-row flex-col lg:h-auto lg:gap-8 lg:mt-12 mt-8 md:px-0 px-6">
        <div className="lg:w-1/2 w-full h-full items-start justify-center flex flex-col">
          <h1 className="text-5xl font-bold font-secondary">
            Badania wykopaliskowe
          </h1>
          <p className="mt-4 tracking-tight">
            Badania szerokopłaszczyznowe - obecnie jest to jedna z
            najpopularniejszych metod wykopaliskowych. Tego typu badania
            ukierunkowane są na przebadanie i pieczołowite zadokumentowanie
            obszarów osiągających niejednokrotnie kilkanaście hektarów. Ze
            względu na wysokie koszty taka skala wykopaliska ma miejsce z reguły
            przy budowie tras autostrad lub innych dróg. Ten rodzaj prospekcji
            archeologicznej daje unikalną możliwość odsłonięcia całego
            stanowiska, co w konsekwencji prowadzi do uzyskania pełnego obrazu
            relacji przestrzennych, stratygraficznych oraz chronologicznych
            panujących na badanym terenie.
          </p>
          <ul className="mt-4 flex flex-col gap-1 items-start justify-start w-full">
            {data.steps.map((val, i) => (
              <li
                className="justify-center items-start flex flex-row gap-3 text-base tracking-tight"
                key={i}
              >
                <Check className="size-6 text-secondary shrink-0" />
                {val.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 w-full h-full grid place-items-center">
          <Image
            height={200}
            width={200}
            alt="izis services question mark illustration"
            src="/assets/services/ilustracja/question-mark.png"
            className="lg:block hidden "
          />
        </div>
      </section>
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
