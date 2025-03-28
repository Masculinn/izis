import { FC, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { MapboxMarkerProps } from "@/interfaces";
import { createPortal } from "react-dom";
import { Loader } from "./loader";

const Marker: FC<MapboxMarkerProps> = (props) => {
  const { coordinates, map, onClick, id } = props;

  const [container, setContainer] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const div = document.createElement("div");
    setContainer(div);

    const marker = new mapboxgl.Marker(div)
      .setLngLat([coordinates[0], coordinates[1]])
      .addTo(map);

    return () => {
      marker.remove();
    };
  }, [coordinates, map]);

  if (!container) return null;

  return createPortal(
    <Loader key={id} onClick={() => onClick(id)} />,
    container
  );
};

export default Marker;
