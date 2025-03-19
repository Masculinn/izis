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

export interface LogoItemProps {
  src: string;
  alt: string;
  href: string;
}

/** config interfaces ends */

/** db interfaces starts */
/** db interfaces ends */

/** sections interfaces starts */
/** sections interfaces ends */

/** service interfaces starts */
/** service interfaces ends */

/** component interfaces starts */

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

/** component interfaces ends */
