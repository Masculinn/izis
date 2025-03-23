import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import markerLib from "@/lib/markerLib";
import Marker from "./marker";
import { Button, Note } from "../ui";
import { FaArrowRight } from "react-icons/fa6";
import MapboxModal from "./mapbox-modal";
import { MarkerObjProps } from "@/interfaces";

const Mapbox = () => {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [mapLoded, setMapLoaded] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<MarkerObjProps | null>(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapContainerRef.current) return;

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [23.1172, 52.0377],
      minZoom: 8.5,
      zoom: 10,
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
        </div>
        <div className="lg:w-1/2 w-full lg:h-[500px] h-[300px] rounded-xl relative px-6">
          <div ref={mapContainerRef} className="size-full relative rounded-xl">
            <Note
              intent="info"
              className="absolute lg:scale-100 scale-95 bottom-4  lg:max-w-lg max-w-xs backdrop-blur-2xl mx-auto left-1/2 -translate-x-1/2 z-10"
            >
              For details click on the marker
            </Note>
          </div>
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
