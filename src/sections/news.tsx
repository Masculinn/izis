import MotionChain from "@/components/motion/motion-chain";
import { MotionAnimationProps } from "@/components/motion/types";
import { NewsCard } from "@/components/news/news-card";
import NewsCarousel from "@/components/news/news-carousel";
import newsLib from "@/lib/newsLib";

const animations = newsLib
  .filter((val) => (val.id as number) <= 4)
  .map((_) => ({
    mode: ["fadeLeft"],
    transition: "smooth",
    duration: 1,
  })) as MotionAnimationProps[];

export default function News() {
  return (
    <section className="py-14 max-w-7xl mx-auto">
      <div className="container mx-auto lg:px-0 px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-5xl md:text-6xl tracking-tighter max-w-xl font-secondary text-left">
              Prasa o nas
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg  tracking-tighter text-muted-foreground  text-left">
              Jako firma działająca aktywnie w przestrzeni naukowej i
              inwestycyjnej, regularnie pojawiamy się w mediach lokalnych i
              ogólnopolskich.
            </p>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid  lg:grid-cols-3 xl:grid-cols-4 gap-8 text-white">
            <NewsCarousel />
            <MotionChain
              animations={animations}
              config={{
                delayLogic: "linear",
                duration: 0.5,
              }}
              elementType={"div"}
            >
              {newsLib
                .filter((val) => (val.id as number) <= 4)
                .map((news) => (
                  <NewsCard key={news.id} {...news} />
                ))}
            </MotionChain>
          </div>
        </div>
      </div>
    </section>
  );
}
