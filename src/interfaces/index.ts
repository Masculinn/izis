/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

//imports

import { IconType } from "react-icons";
import { Dispatch } from "redux";

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

//configs

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

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

//sections

export interface DiscoverisHeroProps {
  data: MarkerObjProps;
}

export interface DiscoveriesGalleryProps {
  data: string[];
}

export interface DiscoverContentProps {
  desc: string;
  name: string;
  coordinates: Coordinates;
  type: MarkerServiceTypeProps;
}

export interface NewsHeroProps {
  title: string;
  subHeader: string;
  source: string;
}

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

// hooks

export interface AddDiscoveredProps {
  itemID: number;
  action: () => void;
  dispatch: Dispatch;
  isMobile?: boolean;
}

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

//component

export interface LogoItemProps {
  src: string;
  alt: string;
  href: string;
}

export interface CollobratorsItemProps {
  title: string;
  img: string;
  href: string;
  desc: string;
}

export interface MarkerProps {
  id: number;
  map: mapboxgl.Map;
  name: string;
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

export interface LogoMarqueeProps {
  items: LogoItemProps[];
}
export interface MapboxProps {
  id: number;
  isMarked: boolean;
  isMobile: boolean;
  mapContainerStyle: string;
  config: MapboxConfigProps;
}
export interface MapboxMarkerProps {
  coordinates: Coordinates;
  map: mapboxgl.Map;
  onClick: (id: number) => void;
  id: number;
}
export interface MapboxConfigProps {
  center: Coordinates;
  boxZoom: boolean;
  minZoom: number;
  interactive: boolean;
  bearing: number;
  pitch: number;
  zoom: number;
}
export interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
}
export interface DiscoverSearchProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}
export interface DiscoverSearchItemProps {
  name: string;
  id: number;
  coordinates: Coordinates;
  type: MarkerServiceTypeProps;
  img: string;
  url: string;
}
export interface NewsCardProps {
  id: number;
  title: string;
  type?: MarkerServiceTypeProps;
  source: string;
  coordinates: Coordinates;
  date: string;
  url: string;
  subHeader: string;
  images: string[];
  content: string[];
}

export interface NewsMediaWidgetProps {
  images: string[];
  title: string;
}

export interface NewsMapsWidgetProps {
  mapbox: MapboxProps;
}

export interface NewsArticleWidgetProps {
  id: number;
}

export interface VideoPlayerProps {
  onClick: () => void;
}

export interface TeamCardProps {
  id: number;
  name: string;
  title: string;
  img: string;
  desc: string;
}

export interface AboutServiceCardProps extends ServiceCardProps {
  img: string;
}

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

//Utils

export type GetSplittedTextProps = string;
export type GetSplittedTextOutputProps = string[];

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/

//Libs

export interface ServiceProps {
  id: MarkerServiceTypeProps;
  title: string;
  subHeader: string;
  steps: ServiceItemProps[];
}

export interface ServiceItemProps {
  title: string;
  subHeader: string;
  desc: string;
  img: string;
}

/*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*/
