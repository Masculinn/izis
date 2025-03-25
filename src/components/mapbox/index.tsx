import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import markerLib from "@/lib/markerLib";
import Marker from "./marker";
import { Badge, Button, Note } from "../ui";
import { FaArrowRight } from "react-icons/fa6";
import MapboxModal from "./mapbox-modal";
import { MarkerObjProps } from "@/interfaces";
import getMedianCoordinate from "@/utils/getMedianCoordinate";
import MapboxModalBg from "./mapbox-modal-bg";
import { useMobile } from "@/hooks/use-mobile";
import { MAPBOX_MASK_STYLES } from "@/lib/utils";

const Mapbox = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapLoded, setMapLoaded] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<MarkerObjProps | null>(null);

  const isMobile = useMobile();

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapContainerRef.current) return;
    const align = getMedianCoordinate(
      markerLib.map((item) => item.coordinates)
    );

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: align as [number, number],
      minZoom: 2,
      zoom: 6,
    });

    mapRef.current.on("load", () => {
      setMapLoaded(true);
    });

    return () => mapRef.current?.remove();
  }, []);

  const handleClick = (e: number) => {
    const findItem = markerLib.find((item) => item.id === e) as MarkerObjProps;
    setActiveItem(findItem);
  };

  return (
    <div className="size-full py-14 relative ">
      <div className="flex h-[500px] w-full flex-col items-center justify-center overflow-hidden absolute -z-10">
        <MapboxModalBg
          className={`[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]`}
        />
      </div>
      <div className="max-w-7xl mx-auto size-full flex lg:flex-row gap-8 flex-col justify-center items-center">
        <div className="lg:w-1/2 w-full h-auto  rounded-xl items-start p-8">
          <h2 className="font-secondary lg:text-6xl text-4xl font-bold pb-6">
            Project Area Locations
          </h2>
          <p className="font-primary text-normal tracking-tighter text-fg">
            Culpa enim Lorem est mollit reprehenderit ut consectetur esse
            incididunt. Labore aliquip elit labore culpa dolore magna proident.
            Voluptate aliqua magna reprehenderit deserunt ut aliquip.
          </p>
          <Button intent="secondary" className="mt-6">
            View All Locations <FaArrowRight className="size-3" />
          </Button>
          <section className="max-w-7xl items-center justify-center mx-auto flex lg:pt-6">
            <div className="lg:pt-4 pt-12 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] ">
              {Array.from({ length: 2 }).map((_, idx) => (
                <ul
                  key={idx}
                  className="flex items-center justify-center text-center  md:justify-start mx-4 max-w-none animate-infinite-scroll"
                >
                  {markerLib.map((val, idx) => (
                    <Badge
                      intent="warning"
                      key={idx}
                      className="overflow-hidden px-3 py-2 align-text-bottom w-60 text-center items-center justify-center mx-4 max-w-none"
                    >
                      {val.name}
                    </Badge>
                  ))}
                </ul>
              ))}
            </div>
          </section>
        </div>
        <div className="lg:w-1/2 w-full lg:h-[500px] h-[300px] rounded-xl relative px-6">
          <section
            className="relative h-full w-full overflow-hidden aspect-square "
            style={
              isMobile
                ? MAPBOX_MASK_STYLES.mobileStyle
                : MAPBOX_MASK_STYLES.desktopStyle
            }
          >
            <div
              ref={mapContainerRef}
              className="size-full relative rounded-xl"
            >
              <Note
                intent="info"
                className="lg:max-w-lg max-w-xs w-64 lg:w-80  scale-95 lg:scale-100 absolute lg:bottom-16 bottom-8 z-[999] backdrop-blur-lg left-1/2 -translate-x-1/2"
              >
                For details click on the marker
              </Note>
            </div>
          </section>
        </div>
        {mapLoded &&
          markerLib.map((marker) => (
            <Marker
              mode="mark"
              key={marker.id}
              onClick={handleClick}
              {...marker}
              map={mapRef.current!}
            />
          ))}
        {activeItem && (
          <MapboxModal
            activeItem={activeItem}
            isOpen={activeItem !== null}
            setIsOpen={() => setActiveItem(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Mapbox;
