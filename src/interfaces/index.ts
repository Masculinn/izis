/** config interfaces starts */

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

export interface FlickeringGridProps
  extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number;
  gridGap?: number;
  flickerChance?: number;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  maxOpacity?: number;
}

/** component interfaces ends */
