import { MediaWidget } from "@/components/news/media-widget";
import { Badge, Skeleton } from "@/components/ui";
import { useMobile } from "@/hooks/use-mobile";
import {
  MapboxConfigProps,
  NewsCardProps,
  ServiceCardProps,
} from "@/interfaces";
import servicesLib from "@/lib/servicesLib";
import React, { FC, useRef } from "react";
import dynamic from "next/dynamic";
import { useInView } from "motion/react";

const MapsWidget = dynamic(() => import("@/components/news/maps-widget"), {
  ssr: false,
});

const Content: FC<NewsCardProps> = (props) => {
  const {
    images,
    content,
    coordinates,
    date,
    id,
    source,
    title,
    type = "archaeological-supervision-earthworks",
  } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const isMobile = useMobile();

  const workType = servicesLib.find((item) =>
    item.href.includes(type)
  ) as ServiceCardProps;

  const mapboxConfig = {
    boxZoom: true,
    minZoom: 8,
    interactive: isMobile,
    center: coordinates,
    zoom: 8,
    pitch: 120,
  } as MapboxConfigProps;

  return (
    <>
      <section className="max-w-7xl mx-auto flex items-start justify-center flex-row gap-4 py-12">
        <div className="h-auto lg:w-2/3 w-full px-6  py-8">
          <Badge intent="secondary">
            <workType.icon /> <span>{workType.title}</span>
          </Badge>
          <h1 className="font-secondary lg:text-6xl text-4xl font-bold lg:pt-4 pt-3 pb-4 capitalize">
            {title}
          </h1>
          <h3 className="font-secondary text-base font-bold tracking-tight capitalize">
            źródło: {source} - {date.split("/").join(".")}
            <span className="text-base font-normal font-secondary"> </span>
          </h3>
          {content.map((val, idx) => {
            if (idx === 1 && isMobile) {
              return (
                <React.Fragment key={idx}>
                  <MediaWidget images={images} title={title} />

                  <p key={idx} className="tracking-tight py-4">
                    {val}
                  </p>
                </React.Fragment>
              );
            }
            if (idx === content.length - 1 && isMobile) {
              return (
                <React.Fragment key={idx}>
                  <div className="size-full rounded-2xl relative" ref={ref}>
                    {inView ? (
                      <MapsWidget
                        mapbox={{
                          config: mapboxConfig,
                          id: id,
                          isMarked: true,
                          isMobile,
                          mapContainerStyle: "size-full rounded-2xl",
                        }}
                      />
                    ) : (
                      <Skeleton className="size-full flex items-center justify-center" />
                    )}
                  </div>
                  <p key={idx} className="tracking-tight py-4">
                    {val}
                  </p>
                </React.Fragment>
              );
            }
            return (
              <p key={idx} className="tracking-tight py-4">
                {val}
              </p>
            );
          })}
        </div>
        {!isMobile && (
          <div className="h-screen w-1/3 sticky pt-12 flex flex-col gap-8 top-12">
            <MediaWidget images={images} title={title} />
            <div className="size-full rounded-2xl relative" ref={ref}>
              {inView ? (
                <MapsWidget
                  mapbox={{
                    config: mapboxConfig,
                    id: id,
                    isMarked: true,
                    isMobile,
                    mapContainerStyle: "size-full rounded-2xl",
                  }}
                />
              ) : (
                <Skeleton className="size-full flex items-center justify-center" />
              )}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default Content;
