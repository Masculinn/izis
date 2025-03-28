import { NewsCard } from "@/components/news/news-card";
import { NewsCarousel } from "@/components/news/news-carousel";

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
            {/* <div className="h-full w-full rounded-md aspect-square p-6 flex justify-between flex-col lg:col-span-2 lg:row-span-2 relative bg-black">
              <User className="w-8 h-8 stroke-1" />
              <div className="flex flex-col">
                <h3 className="text-xl tracking-tight">Silent Conversations</h3>
                <p className="text-muted max-w-xs text-base">
                  In the quiet depths of the night, whispers of memories echo
                  through the soul, revealing truths we long to forget.
                </p>
              </div>
            </div> */}
            <NewsCarousel />
            {Array.from({ length: 4 }).map((_, idx) => (
              <NewsCard key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
