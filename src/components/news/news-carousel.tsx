import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "react-aria-components";
import { Button as ButtonPrimitive } from "../ui";
import { twJoin } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import newsLib from "@/lib/newsLib";

const timeoutAmount = 3000;

export const NewsCarousel = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleSelect = (index: number) => {
    if (api) {
      api.scrollTo(index);
      setCurrent(index + 1);
    }
  };

  const handleInteractionStart = () => {
    setIsInteracting(true);
    if (timeoutRef.current) {
      clearInterval(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleInteractionEnd = () => {
    setIsInteracting(false);
    if (api && !timeoutRef.current) {
      timeoutRef.current = setInterval(() => {
        api.scrollNext();
        setCurrent(api.selectedScrollSnap() + 1);
      }, timeoutAmount);
    }
  };

  useEffect(() => {
    if (!api) return;

    if (!isInteracting) {
      timeoutRef.current = setInterval(() => {
        api.scrollNext();
        setCurrent(api.selectedScrollSnap() + 1);
      }, timeoutAmount);
    }

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [api, isInteracting]);

  return (
    <Carousel
      setApi={setApi}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      className="h-full w-full  aspect-square flex justify-between flex-col lg:col-span-2 lg:row-span-2 relative bg-transparent"
    >
      <Carousel.Content items={newsLib}>
        {({
          id,
          content,
          coordinates,
          date,
          images,
          source,
          subHeader,
          title,
          url,
          type = "salvage-excavation-research",
        }) => (
          <Carousel.Item id={id}>
            <div
              className="w-full rounded-lg border h-10/12 aspect-square relative justify-end items-center flex"
              style={{
                backgroundImage: `url(${images[0]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="bg-gradient-to-t from-black/90 to-transparent h-full w-full absolute bottom-0 left-0 right-0 z-0" />
              <div className="">asdasd</div>
            </div>
          </Carousel.Item>
        )}
      </Carousel.Content>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1 py-2 text-center text-muted-fg text-sm">
          {Array.from({ length: newsLib.length }).map((_, index) => (
            <Button
              className={twJoin(
                "rounded-xl transition focus:outline-hidden cursor-pointer",
                current === index + 1
                  ? "h-3 w-5 bg-secondary transition-all hover:bg-secondary/80"
                  : "h-3 w-3 bg-black/60 hover:bg-black/15"
              )}
              aria-label={`Slide ${current} of ${count}`}
              onPress={() => handleSelect(index)}
              key={index}
            />
          ))}
        </div>
        <div className="space-x-2">
          <Carousel.Button segment="previous" intent="secondary" />
          <Carousel.Button segment="next" intent="secondary" />
        </div>
      </div>
    </Carousel>
  );
};
