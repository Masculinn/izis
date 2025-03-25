import { useMobile } from "@/hooks/use-mobile";
import {
  DiscoveriesProps,
  MarkerObjProps,
  ServiceCardProps,
} from "@/interfaces";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";

import Marker from "@/components/mapbox/marker";
import { useDispatch, useSelector } from "react-redux";
import addDiscovered from "@/utils/addDiscovered";
import { Badge, Button, Modal } from "@/components/ui";
import markerLib from "@/lib/markerLib";
import servicesLib from "@/lib/servicesLib";
import { ArrowRight, Pointer } from "lucide-react";
import Link from "next/link";
import { DiscoveriesDivider } from "@/components/discoveries/discoveries-divider";

const Hero: FC<MarkerObjProps> = (props) => {
  const { coordinates, desc, duration, id, img, name, type } = props;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mapLoaded, setMapLoaded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [tutorial, setTutorial] = useState<boolean>(false);

  const { discovered } = useSelector(
    (state: { discoveries: DiscoveriesProps }) => state.discoveries
  );

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useDispatch();
  const isMobile = useMobile();

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: coordinates,
      boxZoom: true,
      minZoom: 8,
      interactive: isMobile ? false : true,
      bearing: 160,
      pitch: 120,
      zoom: 8,
    });

    mapRef.current = map;

    map.on("load", () => {
      setMapLoaded(true);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      setMapLoaded(false);
    };
  }, [isMobile]);

  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setCenter(coordinates);
    }
  }, [coordinates, isOpen]);

  const handleClick = useCallback((e: number) => {
    addDiscovered({
      action: () => {
        setIsOpen(true);
      },
      dispatch,
      itemID: e,
      isMobile,
    });
  }, []);

  useCallback(() => {
    if (mapRef.current) {
      mapRef.current.resize();
    }
  }, [isMobile]);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setTutorial(true);
    }, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <>
      <main
        className="w-full h-screen relative items-start justify-center flex overflow-clip"
        key={`id`}
        aria-label={`izis discoveries hero section-${id}`}
      >
        <div
          className={`absolute z-40 w-2/5 h-3/5 bottom-0 right-0 lg:flex hidden items-center justify-center ${
            tutorial && "lg:hidden"
          }`}
        >
          <div className="items-center justify-center flex flex-col pointer">
            <span className="animate-ping bg-primary size-12 rounded-full -translte-x-4 mr-4" />
            <Pointer className="size-24 -mt-8  rotate-y-45 fill-primary " />
          </div>
        </div>
        <div className="absolute size-full inset-0 bg-gradient-to-bl from-black/90 to-transparent z-20 " />
        <div className="absolute z-50 h-full left-0 lg:w-3/5 w-full bg-gradient-to-r from-black/90 to-transparent items-center justify-center flex ">
          <div className="w-auto max-w-2xl flex items-start text-start justify-center flex-col gap-4 min-h-min lg:p-24 px-16 lg:mt-0  -mt-96">
            <h1 className="font-secondary lg:text-7xl text-5xl font-semibold lg:text-white bg-gradient-to-b text-transparent from-white to-transparent bg-clip-text max-w-sm">
              {name}
            </h1>
            <p className="text-primary tracking-tighter lg:flex hidden">
              {desc.slice(0, 280)}...
            </p>
            <Button
              intent="secondary"
              size="large"
              shape="circle"
              className="lg:flex hidden"
            >
              <span>What found</span>
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        {mapLoaded && (
          <Marker
            onClick={handleClick}
            {...props}
            mode="mark"
            map={mapRef.current!}
          />
        )}
        <div
          ref={mapContainerRef}
          className="size-full relative rounded-xl z-20"
        />
        <div className="absolute z-40 h-2/5 right-0 w-full bg-gradient-to-b from-black to-transparent" />
        <DiscoveriesDivider />
      </main>
      <Modal.Content isOpen={isOpen} onOpenChange={setIsOpen} size="lg">
        <Modal.Header>
          <Modal.Title>Discovered Place{"(s)"}</Modal.Title>
          <Modal.Description>
            <div className="flex gap-2 pt-2 flex-wrap">
              {discovered.map((_) => {
                const markerItem = markerLib.find(
                  (item) => item.id === id
                ) as MarkerObjProps;

                const markerIcon = servicesLib.find((item) =>
                  item.href.includes(markerItem.type)
                ) as ServiceCardProps;

                return (
                  <Link
                    href={markerItem.url}
                    className="cursor-pointer"
                    key={markerItem.id}
                  >
                    <Badge intent="success" shape="circle">
                      {<markerIcon.icon />}
                      <span>{markerItem.name}</span>
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </Modal.Description>
        </Modal.Header>
        <Modal.Footer>
          <Button intent="outline" onPress={() => setIsOpen(false)}>
            Close
          </Button>
          <Button intent="secondary" onPress={() => setIsOpen(false)}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </>
  );
};

export default Hero;
