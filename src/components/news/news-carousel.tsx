import { useEffect, useRef, useState } from "react";
import {
  Carousel as CarouselComponent,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Button } from "react-aria-components";
import { Badge, Button as ButtonPrimitive, Skeleton } from "../ui";
import { twJoin } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import newsLib from "@/lib/newsLib";
import servicesLib from "@/lib/servicesLib";
import { NewsCardProps, ServiceCardProps } from "@/interfaces";
import { CAROUSEL_DELAY } from "@/lib/utils";
import getDate from "@/utils/getDate";
import MotionText from "../motion/motion-text";
import dynamic from "next/dynamic";

const Carousel = () => {
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
      }, CAROUSEL_DELAY);
    }
  };

  useEffect(() => {
    if (!api) return;

    if (!isInteracting) {
      timeoutRef.current = setInterval(() => {
        api.scrollNext();
        setCurrent(api.selectedScrollSnap() + 1);
      }, CAROUSEL_DELAY);
    }

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [api, isInteracting]);

  const filteredItems = newsLib.filter((val) => val.id >= 5);
  const items = getDate(filteredItems) as unknown as NewsCardProps[];

  return (
    <CarouselComponent
      setApi={setApi}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
      className="size-full aspect-square flex justify-between flex-col lg:col-span-2 lg:row-span-2 relative bg-transparent"
    >
      <CarouselComponent.Content items={items}>
        {({
          id,
          date,
          images,
          source,
          subHeader,
          title,
          url,
          type = "salvage-excavation-research",
        }) => {
          const typeIcon = servicesLib.find((s) =>
            s.href.includes(type)
          ) as ServiceCardProps;

          return (
            <CarouselComponent.Item id={id}>
              <div className="rounded-lg w-full lg:h-11/12 min-h-min h-auto aspect-square relative justify-end items-center flex">
                <div
                  className="absolute top-0 left-0 right-0 bottom-0 -z-10 inset-0 rounded-lg"
                  style={{
                    backgroundImage: `url(${images[0]})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Badge
                  intent="secondary"
                  className="absolute top-4 left-4 z-50 p-3"
                  shape="circle"
                >
                  <typeIcon.icon className="lg:size-5 size-4" />
                </Badge>
                <Badge
                  intent="secondary"
                  className="absolute top-4 right-4 z-50 font-bold"
                  shape="square"
                >
                  {source}
                </Badge>
                <div className="bg-gradient-to-t from-black/90 to-transparent h-full w-full absolute bottom-0 left-0 right-0 z-0" />
                <div className="size-full z-50 flex flex-col justify-end lg:-mt-36 -mt-24 ">
                  <div className="p-6">
                    <span className="lg:text-sm text-xs text-stone-300 pointer-events-none">
                      {date}
                    </span>
                    <MotionText
                      animation={{
                        mode: ["fadeUp", "depthPush"],
                        transition: "linear",
                        delay: 0.2,
                        duration: 0.5,
                      }}
                      config={{
                        duration: 0.5,
                        mode: "words",
                        delayLogic: "sawtooth",
                        space: 1,
                      }}
                      controller={{
                        configView: {
                          once: false,
                          amount: "some",
                        },
                      }}
                      elementType={"h2"}
                      wrapperClassName="lg:text-3xl text-xl line-clamp-2 font-secondary font-bold text-white capitalize pointer-events-none"
                    >
                      {title}
                    </MotionText>
                    <p className="tracking-tighter text-muted max-w-lg lg:pb-4 pb-2 lg:text-sm text-xs pointer-events-none">
                      {subHeader}.
                    </p>
                    <Link href={url} className="mb-4 z-50">
                      <ButtonPrimitive
                        intent="secondary"
                        shape="circle"
                        size="small"
                      >
                        <span>Czytaj więcej</span>
                        <ArrowRight className="size-4" />
                      </ButtonPrimitive>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselComponent.Item>
          );
        }}
      </CarouselComponent.Content>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1 py-2 text-center text-muted-fg text-sm">
          {Array.from({ length: items.length }).map((_, index) => (
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
          <CarouselComponent.Button segment="previous" intent="secondary" />
          <CarouselComponent.Button segment="next" intent="secondary" />
        </div>
      </div>
    </CarouselComponent>
  );
};

const NewsCarousel = dynamic(() => Promise.resolve(Carousel), {
  ssr: false,
  loading: () => <Skeleton soft className="size-full" />,
});

export default NewsCarousel;
