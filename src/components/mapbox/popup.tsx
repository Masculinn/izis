import { MarkerProps, PopupProps } from "@/interfaces";
import { FC, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import mapboxgl from "mapbox-gl";
import markerLib from "@/lib/markerLib";
import { Button, Card } from "../ui";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Popup: FC<PopupProps> = ({ map, activeID }) => {
  const popupRef = useRef<mapboxgl.Popup | null>(null);
  const contentRef = useRef(document.createElement("div"));

  const curr: MarkerProps = markerLib.find(
    (marker) => marker.id === activeID
  ) as MarkerProps;

  useEffect(() => {
    if (!map) return;

    popupRef.current = new mapboxgl.Popup({ offset: 20, closeOnClick: false });

    return () => {
      popupRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!map || !curr) return;

    popupRef.current
      ?.setLngLat([curr?.coordinates[0], curr?.coordinates[1]])
      .setHTML(contentRef.current.outerHTML)
      .addTo(map);
  }, [activeID]);

  if (!curr) return null;

  return createPortal(
    <Card className="portal-content bg-transparent z-[999] ">
      <Card.Header>
        <Card.Title>{curr.name}</Card.Title>
        <Card.Description>{curr.type}</Card.Description>
      </Card.Header>
      <Card.Content>{curr.type}</Card.Content>
      <Card.Footer>
        <Link href={curr.url} target="_blank" rel="noreferrer">
          <Button intent="secondary" shape="circle" size="small">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4 " />
          </Button>
        </Link>
      </Card.Footer>
    </Card>,
    contentRef.current
  );
};

export default Popup;
