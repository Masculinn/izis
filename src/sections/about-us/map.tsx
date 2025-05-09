import "mapbox-gl/dist/mapbox-gl.css";

import { useMobile } from "@/hooks/use-mobile";
import { LogoItemProps, MarkerObjProps } from "@/interfaces";
import { useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import getMedianCoordinate from "@/utils/getMedianCoordinate";
import markerLib from "@/lib/markerLib";
import { Note, Skeleton } from "@/components/ui";
import Marker from "@/components/mapbox/marker";
import MapboxModal from "@/components/mapbox/mapbox-modal";
import newsLib from "@/lib/newsLib";
import MotionContainer from "@/components/motion/motion-container";
import MotionText from "@/components/motion/motion-text";

const items1 = markerLib.map((item) => ({
  alt: `${item.name} - IZIS`,
  href: item.url,
  src: item.img[0],
})) as LogoItemProps[];

const items2 = newsLib.map((item) => ({
  alt: `${item.title} - IZIS`,
  href: item.url,
  src: item.images[0],
})) as LogoItemProps[];

export const Map = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const signalRef = useRef<HTMLDivElement | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<MarkerObjProps | null>(null);

  const inView = useInView(signalRef, { once: true });

  const isMobile = useMobile();

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapContainerRef.current || !inView) return;

    const align = getMedianCoordinate(
      markerLib.map((item) => item.coordinates)
    );

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: align as [number, number],
      minZoom: 2,
      zoom: 6,
      bearing: 120,
      pitch: 90,
    });

    mapRef.current.on("load", () => {
      setMapLoaded(true);
    });

    return () => mapRef.current?.remove();
  }, [inView]);

  const handleClick = (e: number) => {
    const findItem = markerLib.find((item) => item.id === e) as MarkerObjProps;
    setActiveItem(findItem);
  };

  return (
    <>
      <section className=" max-w-7xl mx-auto relative h-auto md:py-24 py-14">
        <MotionText
          animation={{
            mode: ["filterBlurIn", "fadeUp"],
            transition: "quickBounce",
            duration: 1,
          }}
          config={{
            duration: 0.22,
            mode: "words",
            delayLogic: "linear",
            space: 0.5,
          }}
          key={"a"}
          elementType={"h2"}
          wrapperClassName="text-5xl md:text-6xl tracking-tighter font-secondary text-center pb-2 max-w-[85%] md:max-w-5/6 flex mx-auto  items-center justify-center tracking-tighter font-secondary pb-4"
        >
          Nasza archeologiczna historia
        </MotionText>
        <p className="pb-6 lg:text-lg text-muted-fg text-md font-secondary font-semibold tracking-tight px-6 md:px-0 md:max-w-5xl justify-self-center text-center">
          Przez ponad dekadę łączymy pasję odkrywania z najnowszymi
          technologiami – od badań geofizycznych, przez modelowanie 3D, po
          analizy sedymentologiczne. Nasze wykopaliska w Polsce i za granicą
          odkrywają nieznane dotąd ślady przeszłości, jednocześnie wdrażając
          innowacyjne metody dokumentacji i ochrony stanowisk. Dzięki
          interdyscyplinarnemu podejściu i ścisłej współpracy z ekspertami z
          różnych dziedzin, stale podnosimy standardy badań i otwieramy nowe
          perspektywy dla przyszłych pokoleń badaczy.
        </p>
        <div
          className="w-full lg:h-[500px] md:h-[300px] h-[400px] rounded-xl relative px-6"
          ref={signalRef}
        >
          <div ref={mapContainerRef} className="size-full relative rounded-xl">
            {!mapLoaded && (
              <Skeleton
                soft
                className="w-full h-full absolute inset-0 z-50 top-0 left-0"
              />
            )}
            {!isMobile && (
              <div className="w-1/3 absolute right-0 top-0 h-full bg-gradient-to-l from-primary backdrop-blur-2xl via-transparent to-primary/80 overflow-hidden z-50">
                <div className="col-start-1 row-start-1 rounded-lg text-black/10 dark:text-white/12.5 bg-[size:8px_8px] bg-top-left bg-[image:repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] absolute top-0 left-0 size-full" />
                <div className="text-5xl py-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <ul
                      key={idx}
                      className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll gap-8 rotate-12"
                    >
                      {items1.map((val, i) => (
                        <li
                          className="size-48 bg-accent-fg rounded-xl opacity-50"
                          key={i}
                        >
                          <div
                            className="size-full bg-center bg-cover rounded-xl "
                            style={{
                              backgroundImage: `url(${val.src})`,
                            }}
                          />
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
                <div className="text-5xl py-8 w-full inline-flex flex-nowrap overflow-visible ">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <ul
                      key={idx}
                      className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll gap-8 rotate-12"
                    >
                      {items2.map((val, i) => (
                        <div
                          className="size-48 bg-accent-fg rounded-xl opacity-50"
                          key={i}
                        >
                          <div
                            className="size-full bg-center bg-cover rounded-xl "
                            style={{
                              backgroundImage: `url(${val.src})`,
                            }}
                          />
                        </div>
                      ))}
                    </ul>
                  ))}
                </div>
                <div className="text-5xl py-8 w-full inline-flex flex-nowrap overflow-visible ">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <ul
                      key={idx}
                      className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll gap-8 rotate-12"
                    >
                      {items2.reverse().map((val, i) => (
                        <div
                          className="size-48 bg-accent-fg rounded-xl opacity-50"
                          key={i}
                        >
                          <div
                            className="size-full bg-center bg-cover rounded-xl "
                            style={{
                              backgroundImage: `url(${val.src})`,
                            }}
                          />
                        </div>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            )}
            <Note
              intent="info"
              className=" absolute z-[99] backdrop-blur-lg md:left-6 md:bottom-6 md:top-auto top-4 right-4 md:max-w-[36%] max-w-[72%]"
            >
              Aby uzyskać szczegółowe informacje, kliknij znacznik.
            </Note>
          </div>
        </div>
        {mapLoaded &&
          markerLib.map((marker) => (
            <MotionContainer
              animation={{
                mode: ["fadeIn", "filterBlurIn"],
                transition: "linear",
                duration: 1,
              }}
              elementType={"div"}
              className="relative"
              controller={{
                configView: {
                  amount: "some",
                  once: false,
                },
              }}
              key={marker.id}
            >
              <Marker onClick={handleClick} {...marker} map={mapRef.current!} />
            </MotionContainer>
          ))}
        {activeItem && (
          <MapboxModal
            activeItem={activeItem}
            isOpen={activeItem !== null}
            setIsOpen={() => setActiveItem(null)}
          />
        )}
      </section>
    </>
  );
};
