import "mapbox-gl/dist/mapbox-gl.css";

import {
  DiscoveriesProps,
  MapboxProps,
  MarkerObjProps,
  ServiceCardProps,
} from "@/interfaces";

import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import addDiscovered from "@/utils/addDiscovered";
import Marker from "./marker";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Button, Modal } from "../ui";
import markerLib from "@/lib/markerLib";
import servicesLib from "@/lib/servicesLib";
import Link from "next/link";

const Mapbox: FC<MapboxProps> = (props) => {
  const { config, isMobile, mapContainerStyle, isMarked, id } = props;

  const [loaded, setLoaded] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const dispatch = useDispatch();

  const { discovered } = useSelector(
    (state: { discoveries: DiscoveriesProps }) => state.discoveries
  );

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
    if (!mapContainerRef.current) return;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      interactive: isMobile ? false : true,
      center: config.center,
      boxZoom: config.boxZoom,
      minZoom: config.minZoom,
      bearing: config.bearing,
      pitch: config.pitch,
      zoom: config.zoom,
    });

    mapRef.current = map;

    map.on("load", () => {
      setLoaded(true);
    });

    return () => {
      map.remove();
      mapRef.current = null;
      setLoaded(false);
    };
  }, []);

  useCallback(() => {
    if (mapRef.current) {
      mapRef.current.resize();
    }
  }, [isMobile]);

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

  if (!config) {
    console.warn("Mapbox config is required on mapbox/mapbox.tsx");
    return null;
  }

  return (
    <>
      <div ref={mapContainerRef} className={mapContainerStyle} />
      {loaded && isMarked && (
        <Marker
          onClick={handleClick}
          coordinates={config.center}
          id={id}
          map={mapRef.current!}
        />
      )}
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

export default memo(Mapbox);
