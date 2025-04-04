import { NewsCard } from "@/components/news/news-card";
import { NewsCarousel } from "@/components/news/news-carousel";
import newsLib from "@/lib/newsLib";

export default function News() {
  return (
    <section className="py-14 max-w-7xl mx-auto">
      <div className="container mx-auto lg:px-0 px-6">
        <div className="flex flex-col gap-10">
          <div className="flex gap-2 flex-col">
            <h2 className="text-5xl md:text-6xl tracking-tighter max-w-xl font-secondary text-left">
              IZIS MEDIA PRESS
            </h2>
            <p className="text-lg max-w-xl lg:max-w-lg  tracking-tighter text-muted-foreground  text-left">
              In the tapestry of solitude, every shadow speaks of a time when
              hope and heartbreak danced as one.
            </p>
          </div>
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid  lg:grid-cols-3 xl:grid-cols-4 gap-8 text-white">
            <NewsCarousel />
            {newsLib
              .filter((val) => (val.id as number) <= 4)
              .map((news) => (
                <NewsCard key={news.id} {...news} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
