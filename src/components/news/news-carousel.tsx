import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Carousel, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "react-aria-components";
import { Button as ButtonPrimitive } from "../ui";
import { twJoin } from "tailwind-merge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      className="h-full w-full rounded-md aspect-square flex justify-between flex-col lg:col-span-2 lg:row-span-2 relative bg-transparent"
    >
      <Carousel.Content
        items={Array.from({ length: 10 }, (_, id) => ({ id: id + 1 }))}
      >
        {({ id }) => (
          <Carousel.Item id={id}>
            <Card className="lg:h-11/12 h-5/6 w-full">
              <Card.Header>
                <Card.Title className="font-secondary flex flex-row gap-2 items-center">
                  Title
                </Card.Title>
                <Card.Description className="tracking-tight">
                  Aute excepteur veniam adipisicing quis minim veniam nostrud
                  laboris adipisicing laboris.
                </Card.Description>
              </Card.Header>
              <Card.Content className="flex aspect-square items-center justify-center ">
                <span className="font-semibold text-4xl">{id}</span>
              </Card.Content>
              <Card.Footer className="">
                <Link href={"/"}>
                  <ButtonPrimitive
                    intent="secondary"
                    shape="circle"
                    size="small"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 " />
                  </ButtonPrimitive>
                </Link>
              </Card.Footer>{" "}
            </Card>
          </Carousel.Item>
        )}
      </Carousel.Content>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-1 py-2 text-center text-muted-fg text-sm">
          {Array.from({ length: 10 }).map((_, index) => (
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
