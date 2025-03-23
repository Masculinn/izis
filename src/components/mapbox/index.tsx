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

const Mapbox = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapLoded, setMapLoaded] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<MarkerObjProps | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapContainerRef.current) return;
    const align = getMedianCoordinate(
      markerLib.map((item) => item.coordinates)
    );

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: align as [number, number],
      minZoom: 4,
      zoom: 8,
    });

    if (align.length !== 2) {
      throw new Error("Invalid coordinates");
    }
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
            className="relative h-full w-full overflow-hidden aspect-square"
            style={{
              backgroundColor: "--bg",
              maskImage:
                "url(\"data:image/svg+xml,%3Csvg width='211' height='169' viewBox='0 0 211 169' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 211 1.79086 211 4V14V28V99C211 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 169 174 169H28C25.7909 169 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
              WebkitMaskImage:
                "url(\"data:image/svg+xml,%3Csvg width='211' height='169' viewBox='0 0 211 169' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fillRule='evenodd' clipRule='evenodd' d='M183 4C183 1.79086 184.791 0 187 0H217C219.209 0 211 1.79086 211 4V14V28V99C211 101.209 219.209 103 217 103H182C179.791 103 178 104.791 178 107V118C178 120.209 176.209 169 174 169H28C25.7909 169 24 120.209 24 118V103V94V46C24 43.7909 22.2091 42 20 42H4C1.79086 42 0 40.2091 0 38V18C0 15.7909 1.79086 14 4 14H24H43H179C181.209 14 183 12.2091 183 10V4Z' fill='%23D9D9D9'/%3E%3C/svg%3E%0A\")",
              maskRepeat: "no-repeat",
              WebkitMaskRepeat: "no-repeat",
              maskSize: "contain",
              WebkitMaskSize: "contain",
            }}
          >
            <div
              ref={mapContainerRef}
              className="size-full relative rounded-xl"
            >
              {" "}
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
