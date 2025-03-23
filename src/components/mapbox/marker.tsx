import { FC, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import { MarkerProps } from "@/interfaces";
import { createPortal } from "react-dom";
import { Loader } from "./loader";

const Marker: FC<MarkerProps> = (props) => {
  const { coordinates, map, duration, url, onClick, id, name, type } = props;

  const markerRef = useRef<mapboxgl.Marker | null>(null);
  const contentRef = useRef(document.createElement("div"));

  useEffect(() => {
    markerRef.current = new mapboxgl.Marker(contentRef.current)
      .setLngLat([coordinates[0], coordinates[1]])
      .addTo(map);

    return () => {
      markerRef.current?.remove();
    };
  }, []);

  return createPortal(
    <Loader onClick={() => onClick(id)} />,
    // <div
    //   className="animate-ping size-8 cursor-pointer rounded-full bg-secondary"
    //   onClick={() => onClick(id)}
    // />,
    contentRef.current
  );
};

export default Marker;
