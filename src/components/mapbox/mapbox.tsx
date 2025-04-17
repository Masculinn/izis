import "mapbox-gl/dist/mapbox-gl.css";

import { MapboxProps } from "@/interfaces";

import { FC, memo, useCallback, useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import Marker from "./marker";

const Mapbox: FC<MapboxProps> = (props) => {
  const { config, isMobile, mapContainerStyle, isMarked, id } = props;

  const [loaded, setLoaded] = useState<boolean>(false);

  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

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

  const handleClick = () => {};

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
    </>
  );
};

export default memo(Mapbox);
