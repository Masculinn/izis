import { FC, memo } from "react";
import { NewsArticleWidgetProps, NewsCardProps } from "@/interfaces";
import newsLib from "@/lib/newsLib";
import getDate from "@/utils/getDate";
import Image from "next/image";
import { Button } from "../ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionText from "../motion/motion-text";
import { Carousel } from "@/components/ui/carousel";
import MotionContainer from "../motion/motion-container";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";

const Widget: FC<NewsArticleWidgetProps> = ({ id, className }) => {
  const articles = newsLib.filter((val) => val.id !== id);
  const items = getDate(articles) as unknown as NewsCardProps[];

  return (
    <section className={cn("max-w-6xl mx-auto px-6 lg:px-0", className)}>
      <MotionText
        animation={{
          mode: ["fadeLeft", "filterBlurIn"],
          transition: "smooth",
          duration: 0.5,
        }}
        elementType={"h2"}
        config={{
          mode: "chars",
          duration: 0.18,
          delayLogic: "custom",
          customLogic: (index) => index * 0.085,
        }}
        wrapperClassName="text-5xl md:text-6xl tracking-tighter font-secondary text-left pb-2 max-w-[55%] md:max-w-1/2"
      >
        Pozostałe Artykuły
      </MotionText>
      <p className="pb-6 lg:max-w-2/3 lg:text-base text-muted-fg text-sm font-secondary font-semibold tracking-tight">
        Zanurz się głębiej w świat archeologii dzięki naszej kolekcji starannie
        wyselekcjonowanych publikacji. Przeglądaj różnorodne tematy – od
        najnowszych odkryć w terenie, przez analizy artefaktów, aż po opowieści
        o zapomnianych cywilizacjach.
      </p>
      <div className="w-full h-auto rounded-2xl flex justify-self-center max-w-7xl lg:px-0 relative">
        <Carousel className="size-full cursor-grab">
          <Carousel.Content>
            {items.map((val, idx) => (
              <Carousel.Item
                key={idx}
                id={idx}
                className={"basis-4/5 md:basis-1/4 "}
              >
                <Item key={idx} {...val} />
              </Carousel.Item>
            ))}
          </Carousel.Content>
          <Carousel.Handler>
            <Carousel.Button segment="previous" />
            <Carousel.Button segment="next" />
          </Carousel.Handler>
        </Carousel>
      </div>
    </section>
  );
};

const Item: FC<NewsCardProps> = ({ images, subHeader, title, url }) => (
  <MotionContainer
    animation={{
      mode: ["fadeIn", "filterBlurIn"],
      transition: "smooth",
      duration: 0.5,
    }}
    elementType={"div"}
    className="h-full w-auto rounded-2xl relative px-2 first:pl-0 last:pr-0 pointer-events-none selection:bg-transparent"
  >
    <div className="size-full overflow-hidden rounded-2xl relative">
      <Image
        src={images[0]}
        alt={title}
        height={500}
        width={500}
        className="rounded-2xl  object-center object-cover size-full transition-transform hover:scale-105 duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white w-full h-auto ">
        <h3 className="text-xl font-bold font-secondary tracking-tight md:max-w-4/5">
          {title}
        </h3>

        <p className="text-sm opacity-80 line-clamp-2">{subHeader}</p>
        <Link href={url} prefetch>
          <Button intent="secondary" size="small" className="mt-4">
            Więcej artykuł <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </MotionContainer>
);

const ArticleWidget = dynamic(
  () => Promise.resolve(memo(Widget as typeof Widget)),
  {
    ssr: false,
  }
);

export default ArticleWidget;
