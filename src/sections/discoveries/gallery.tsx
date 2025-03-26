import { Card, Carousel } from "@/components/ui";
import { DiscoveriesGalleryProps } from "@/interfaces";
import Image from "next/image";
import { FC } from "react";

const Gallery: FC<DiscoveriesGalleryProps> = ({ data, name }) => {
  if (data.length === 0) {
    console.warn("No gallery data found at /discoveries/gallery");
    return null;
  }

  return (
    <section className="lg:py-24 py-14 max-w-7xl mx-auto  justify-center flex flex-col lg:items-start items-center lg:gap-12 gap-8">
      <h3 className="font-secondary lg:text-6xl text-4xl font-bold">Gallery</h3>
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full max-w-full"
      >
        <Carousel.Content>
          {data.map((val, idx) => {
            return (
              <Carousel.Item
                key={idx}
                id={idx}
                className="basis-1/2 lg:basis-1/3 relative"
              >
                <Image
                  alt={val}
                  src={val}
                  height={500}
                  width={500}
                  className="bg-cover size-full rounded-md "
                />
              </Carousel.Item>
            );
          })}
        </Carousel.Content>

        <Carousel.Handler className="lg:mr-0 mr-8">
          <Carousel.Button segment="previous" intent="secondary" />
          <Carousel.Button segment="next" intent="secondary" />
        </Carousel.Handler>
      </Carousel>
    </section>
  );
};

export default Gallery;
