import { NewsArticleWidgetProps, NewsCardProps } from "@/interfaces";
import { useRef, useState, FC, MouseEvent, TouchEvent } from "react";
import newsLib from "@/lib/newsLib";
import getDate from "@/utils/getDate";
import Image from "next/image";
import { Button } from "../ui";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MotionText from "../motion/motion-text";

export const ArticleWidget: FC<NewsArticleWidgetProps> = ({ id }) => {
  const articles = newsLib.filter((val) => val.id !== id);
  const items = getDate(articles) as unknown as NewsCardProps[];

  const sliderRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !sliderRef.current) return;
    const x = e.touches[0].pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-0">
      <MotionText
        animation={{
          mode: ["fadeLeft", "filterBlurIn"],
          transition: "smooth",
          duration: 0.35,
        }}
        elementType={"h2"}
        config={{
          mode: "chars",
          duration: 0.25,
          delayLogic: "linear",
        }}
        wrapperClassName="text-5xl md:text-6xl tracking-tighter font-secondary text-left pb-2 "
      >
        Pozostałe Artykuły
      </MotionText>
      <p className="pb-6 lg:max-w-2/3 lg:text-base text-muted-fg text-sm font-secondary font-semibold tracking-tight">
        Zanurz się głębiej w świat archeologii dzięki naszej kolekcji starannie
        wyselekcjonowanych publikacji. Przeglądaj różnorodne tematy – od
        najnowszych odkryć w terenie, przez analizy artefaktów, aż po opowieści
        o zapomnianych cywilizacjach.
      </p>
      <div className="w-full h-auto rounded-2xl flex justify-self-center max-w-7xl px-6 lg:px-0">
        <ul
          ref={sliderRef}
          className={`w-full h-80 flex flex-row overflow-x-scroll rounded-2xl scrollbar-hidden cursor-grab select-none ${
            isDragging ? "cursor-grabbing" : ""
          }`}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {items.map((val) => (
            <Item key={val.id} {...val} />
          ))}
        </ul>
      </div>
    </section>
  );
};

const Item: FC<NewsCardProps> = ({ images, subHeader, title, url }) => (
  <li className="h-full min-w-[384px] shrink-0 rounded-2xl relative px-2 first:pl-0 last:pr-0">
    <div className="size-full overflow-hidden rounded-2xl relative">
      <Image
        src={images[0]}
        alt={title}
        height={500}
        width={500}
        className="rounded-2xl object-center object-cover size-full transition-transform hover:scale-105 duration-300"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/50 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white w-full h-auto truncate">
        <MotionText
          animation={{
            mode: ["fadeRight", "filterBlurIn"],
            transition: "slowSmooth",
            duration: 0.5,
          }}
          config={{
            duration: 0.5,
            mode: "words",
            delayLogic: "sawtooth",
            space: 1,
          }}
          elementType={"h3"}
          controller={{
            configView: {
              amount: "some",
              once: false,
            },
          }}
          wrapperClassName="text-2xl font-bold line-clamp-2 font-secondary "
        >
          {title}
        </MotionText>
        <p className="text-sm opacity-80 line-clamp-2">{subHeader}</p>
        <Link href={url} prefetch>
          <Button intent="secondary" size="small" className="mt-4">
            Więcej artykuł <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </div>
  </li>
);
