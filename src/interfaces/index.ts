/** config interfaces starts */

import { IconType } from "react-icons";

export interface RouteItemProps {
  src: string;
  title: string;
  items?: RouteItemsProps[];
}

export interface RouteItemsProps {
  src: string;
  title: string;
  desc: string;
}

/** config interfaces ends */

/** db interfaces starts */
/** db interfaces ends */

/** redux interfaces starts */

export interface DiscoveriesProps {
  discovered: number[];
}

/** redux interfaces ends */

/** sections interfaces starts */
/** sections interfaces ends */

/** service interfaces starts */
/** service interfaces ends */

/** component interfaces starts */

export interface LogoItemProps {
  src: string;
  alt: string;
  href: string;
}

export interface MarkerProps {
  id: number;
  map: mapboxgl.Map;
  name: any;
  desc: string;
  type: MarkerServiceTypeProps;
  img: string[];
  duration: string;
  url: string;
  onClick: (e: number) => void;
  coordinates: Coordinates;
}

export type MarkerObjProps = Omit<MarkerProps, "map" | "onClick">;
export interface PopupProps {
  activeID: number;
  map: mapboxgl.Map;
}

export type Coordinates = [number, number];

export interface MapboxLoaderProps {
  onClick: () => void;
}

export interface SlideItemProps {
  id: number;
  title: string;
  desc: string;
  url: string;
  link: string;
}

export interface ServiceCardProps {
  id: number;
  icon: IconType;
  title: string;
  desc: string;
  btnText: string;
  href: string;
}

export interface MapboxModalProps {
  isOpen: boolean;
  activeItem: MarkerObjProps;
  setIsOpen: (isOpen: boolean) => void;
}

export type MarkerServiceTypeProps =
  | "broad-based-research"
  | "preventive-archaeological-research"
  | "salvage-excavation-research"
  | "archaeological-supervision-earthworks"
  | "survey-and-verification-research";

export interface MapboxModalFeaturesProps {
  activeItem: MarkerObjProps;
}
/** component interfaces ends */
